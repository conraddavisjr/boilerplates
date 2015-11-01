$(function(){
	var BP_img_handler = {
		
		init: function(){
			this.setupVariables();
			this.setupElements();
			this.bpCheck();
			this.eventHandlers();
		},
		breakPoints : {
			S:{
				width:"480",
				name: "S"
			},
			M:{
				width:"768",
				name: "M"
			},
			L:{
				width:"960",
				name: "L"
			},
			XL:{
				width:"1300",
				name: "XL"
			}
		},
		setupVariables: function(){
			//vars
			this.vpWidth = '';
			this.imgSrc  = '';
		},
		setupElements: function(){
			//page elements	

		},
		eventHandlers: function(){
			//event handlers
			$(window).on('resize', this.bpCheck);
		},

		//Handlers
		bpCheck: function(){
			//detect the width of the browser
			var vpWidth = BP_img_handler.vpWidth = $(window).innerWidth();
			var viewPort = BP_img_handler.breakPoints;
			var imgSrc = BP_img_handler.imgSrc;
			
			/*---------------------------------
			determine which break point were on
			-----------------------------------*/
			if(vpWidth >= viewPort.XL.width){ //XL 
				imgSrc = viewPort.XL.name;
				console.log("imgSrc: " + imgSrc);
			}else
			if(vpWidth < viewPort.XL.width && vpWidth > viewPort.M.width){ //Large 
				imgSrc = viewPort.L.name;
				console.log("imgSrc: " + imgSrc);
			}else
			if(vpWidth <= viewPort.M.width && vpWidth > viewPort.S.width){ //Medium
				imgSrc = viewPort.M.name;
				console.log("imgSrc: " + imgSrc);
			}else
			if(vpWidth <= viewPort.S.width){ //Small
				imgSrc = viewPort.S.name;
				console.log("imgSrc: " + imgSrc);
			}
			//Now update the imgs in the DOM
			BP_img_handler.imgUpdater(imgSrc);
		},
		imgUpdater: function(imgSrc){
			console.log("imgUpdater imgSrc: " + imgSrc);
			$('img').each(function(){
				var imgName = $(this).attr('src');
				newImgName = imgName.replace(/_.*\./, imgSrc);
				$(this).attr('src', newImgName);
			});
		}

	};/* BP_img_handler (END) */
	BP_img_handler.init();
	window.BP_img_handler = BP_img_handler;
});