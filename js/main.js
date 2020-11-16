$(document).ready(function() {
	$('#load-frame').attr('src', CryptoJS.AES.decrypt('U2FsdGVkX1+2OqqY0D+WL3PVDAd382uxV40vXCc06xiy6zeuVgyxFFLLXDOxNgYXCyAjOJ2CnH9j62oBTiA83w==', '03kfks8onb79303').toString(CryptoJS.enc.Utf8));
});

$('#cookies-btn').click(function(e) {
	e.preventDefault();
	$('#cookies-overlay').addClass('hidden');
	$('#container').removeClass('blur');
	$('#load-frame').addClass('loaded');
});
