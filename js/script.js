$(function(){
// IPad/IPhone
	var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
	ua = navigator.userAgent,

	gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";},

	scaleFix = function () {
		if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
			viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
			document.addEventListener("gesturestart", gestureStart, false);
		}
	};
	
	scaleFix();
	// Menu Android
	var userag = navigator.userAgent.toLowerCase();
	var isAndroid = userag.indexOf("android") > -1; 
	if(isAndroid) {
		$('.sf-menu').responsiveMenu({autoArrows:true});
	}
});
var ua=navigator.userAgent.toLocaleLowerCase(),
 regV = /ipod|ipad|iphone/gi,
 result = ua.match(regV),
 userScale="";
if(!result){
 userScale=",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')
$(window).load(function() {
	$(".sf-menu>li>a").append("<strong></strong><em></em>");
  $("a.img_wrap1, .button").append("<em></em>");
  $().UItoTop({ easingType: 'easeOutQuart' });
});