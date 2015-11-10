$(function(){
	var BP_img_handler = {

		init: function(){
			this.setupVariables();
			this.setupElements();
			this.bpCheck();
			this.eventHandlers();
		},
		//Responsive Breakpoints
		breakPoints : {
			S:{
				width:"480",
				name: "_S."
			},
			M:{
				width:"768",
				name: "_M."
			},
			L:{
				width:"960",
				name: "_L."
			},
			XL:{
				width:"1300",
				name: "_XL."
			}
		},
		setupVariables: function(){
			//vars
			this.vpWidth = '';
			this.imgSrc  = '';
			this.imgName = '';
		},
		setupElements: function(){
			//page elements

		},
		eventHandlers: function(){
			//event handlers
			$(window).on('resize', this.bpCheck); //read breakpoints
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
				BP_img_handler.imgSrc = viewPort.XL.name;
				console.log("imgSrc: " + imgSrc);
			}else
			if(vpWidth < viewPort.XL.width && vpWidth > viewPort.M.width){ //Large
				BP_img_handler.imgSrc = viewPort.L.name;
				console.log("imgSrc: " + imgSrc);
			}else
			if(vpWidth <= viewPort.M.width && vpWidth > viewPort.S.width){ //Medium
				BP_img_handler.imgSrc = viewPort.M.name;
				console.log("imgSrc: " + imgSrc);
			}else
			if(vpWidth <= viewPort.S.width){ //Small
				BP_img_handler.imgSrc = viewPort.S.name;
				console.log("imgSrc: " + imgSrc);
			}
			//Call the imgUpdater function to update the imgs in the DOM
			BP_img_handler.imgUpdater();
		},
		imgUpdater: function(){
			$('img').each(function(){
				console.log("BP_img_handler.imgSrc: " + BP_img_handler.imgSrc);
				BP_img_handler.imgName = $(this).attr('src');
				console.log("BP_img_handler.imgName: " + BP_img_handler.imgName);
				var newImgName = BP_img_handler.imgName.replace(/(_([^_]*))(?:\.)/, BP_img_handler.imgSrc);
				console.log("newImgName: " + newImgName);
				// newImgName = imgName.replace(/(?:\_(?=[^_]*))(?:\.)/, imgSrc);
				$(this).attr('src', newImgName);
				// var regex = /(?:\_(?=[^_]*))(\w+)(?:\.)/
				// regex.exec("HGDFOUKHLFD_ROGER_xl.png")     ----->(_([^_]*))(?:\.)
			});
		}

	};/* BP_img_handler (END) */
	BP_img_handler.init();
	window.BP_img_handler = BP_img_handler;
});
