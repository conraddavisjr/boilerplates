$(function(){
	var RS_img_handler = {

		init: function(){
			this.setupVariables();
			this.setupElements();
			this.bpCheck();
			this.eventHandlers();
		},
		//Responsive Breakpoints
		breakPoints : {
			S:{
				scale:"480",
				name: "_S."
			},
			M:{
				scale:"768",
				name: "_M."
			},
			L:{
				scale:"960",
				name: "_L."
			},
			XL:{
				scale:"1300",
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
			//detect the width of the browser on either Desktop or Mobile
			var vpWidth = RS_img_handler.vpWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
			var viewPort = RS_img_handler.breakPoints;
			var imgSrc = RS_img_handler.imgSrc;
			console.log('RS_img_handler.vpWidth' + RS_img_handler.vpWidth);

			/*---------------------------------
			determine which break point were on
			-----------------------------------*/
			if(vpWidth >= viewPort.XL.scale){ //XL
				RS_img_handler.imgSrc = viewPort.XL.name;
				console.log("imgSrc: " + imgSrc);
			}else
			if(vpWidth < viewPort.XL.scale && vpWidth > viewPort.M.scale){ //Large
				RS_img_handler.imgSrc = viewPort.L.name;
				console.log("imgSrc: " + imgSrc);
			}else
			if(vpWidth <= viewPort.M.scale && vpWidth > viewPort.S.scale){ //Medium
				RS_img_handler.imgSrc = viewPort.M.name;
				console.log("imgSrc: " + imgSrc);
			}else
			if(vpWidth <= viewPort.S.scale){ //Small
				RS_img_handler.imgSrc = viewPort.S.name;
				console.log("imgSrc: " + imgSrc);
			}
			//Call the imgUpdater function to update the imgs in the DOM
			RS_img_handler.imgUpdater();
		},
		imgUpdater: function(){
			//cycle through each img tag on the page and update its source.
			$('img').each(function(){
				RS_img_handler.imgName = $(this).attr('src');
				var newImgName = RS_img_handler.imgName.replace(/(_([^_]*))(?:\.)/, RS_img_handler.imgSrc);
				$(this).attr('src', newImgName);
			});
		}

	};/* RS_img_handler (END) */
	RS_img_handler.init();
	window.RS_img_handler = RS_img_handler;
});
