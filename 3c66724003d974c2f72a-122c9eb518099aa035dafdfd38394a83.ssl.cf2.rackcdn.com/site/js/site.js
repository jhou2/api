var Notice = {
	hide: function(a){
		$.ajax({
			url: "/account/hide_notice",
			type: "GET",
			dataType: "json",
		    error: function(html)
			{
				var tct = "Something went horribly wrong. Please refresh the page and try again.";

				$.notifyBar({
					html: tct,
					delay: 2000,
					animationSpeed: "normal"
				  });
			},
			success: function(html)
			{
				if (html.result == "success")
				{
					$(a).parent().parent().slideUp();
				}
			}
		});
	}
}