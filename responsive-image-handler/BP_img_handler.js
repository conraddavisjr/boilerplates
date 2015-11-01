$(function(){
	var BP_img_handler = {
		
		init: function(){
			this.setupVariables();
			this.setupElements();
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
			
			//determine which break point were on
			if(vpWidth >= viewPort.XL.width){ //XL 
				console.log('vpWidth: ' + vpWidth + "You're on XL");
			}else
			if(vpWidth < viewPort.XL.width && vpWidth > viewPort.M.width){ //Large 
				console.log('vpWidth: ' + vpWidth + "You're on Large");
			}else
			if(vpWidth <= viewPort.M.width && vpWidth > viewPort.S.width){ //Medium
				console.log('vpWidth: ' + vpWidth + "You're on Medium");
			}else
			if(vpWidth <= viewPort.S.width){ //Small
				console.log('vpWidth: ' + vpWidth + "You're on Small");
			}
		}

	};/* BP_img_handler (END) */
	BP_img_handler.init();
	window.BP_img_handler = BP_img_handler;
});