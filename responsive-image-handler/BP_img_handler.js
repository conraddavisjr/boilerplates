$(function(){
	var BP_img_handler = {
		
		init: function(){
			this.setupVariables();
			this.setupElements();
			this.eventHandlers();
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
			BP_img_handler.vpWidth = $(window).innerWidth();
			console.log('vpWidth: ' + BP_img_handler.vpWidth);
			
			//determine which break point were on
			switch(){
				case: 480
			}
		}

	}/* BP_img_handler (END) */
	BP_img_handler.init();
	window.BP_img_handler = BP_img_handler;
});