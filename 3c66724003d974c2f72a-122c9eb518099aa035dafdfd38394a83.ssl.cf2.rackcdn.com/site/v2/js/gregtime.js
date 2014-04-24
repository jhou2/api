var refreshTime = function(ele, format, refresh) {

	/* main */
	var now = moment();

	$(ele).each(function() {
		if ($(this).attr("data-gregtime")) {
			var time = moment($(this).attr("data-gregtime"));
		}
		else {
			var time = moment($(this).html());
			$(this).attr('data-gregtime', $(this).html());
		}

	    if(now.diff(time, 'days') < 1) {
	        $(this).html(time.from(now));
	    }
	    else {

	    	if (format) {
	    		$(this).html(time.format(format));
	    	}	
	    	else {
	    		$(this).html(time.format("M/DD/YY"));
	    	}
	    }
	});

	
	if (refresh) {

		if (!interVal) {
			var interVal = setInterval(function() {

				if (format) {
					refreshTime(ele, format);
				}
				else {
					refreshTime(ele);
				}
				
			}, 15000);
		}

		
	}
	
};