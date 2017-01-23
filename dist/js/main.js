function loadVideo(){var t=document.querySelector(".hero__video");t.setAttribute("src",t.getAttribute("data-src")),t.load(),t.muted="muted"}function modalControl(t,e){$("."+t+", #"+t).on("click",function(){weather.getWeatherData(e,t),$("#"+t+"-modal").modal("show"),$("#"+t+"-slider-modal").carousel("cycle")}),$(".modal__close").on("click",function(){$("#"+t+"-modal").modal("hide")})}function submitSubscribeForm(t,e){$.ajax({type:"GET",url:t.attr("action"),data:t.serialize(),cache:!1,dataType:"jsonp",jsonp:"c",contentType:"application/json; charset=utf-8",error:function(t){},success:function(t){if("success"!=t.result){var a=t.msg||"Sorry. Unable to subscribe. Please try again later.";t.msg&&t.msg.indexOf("already subscribed")>=0&&(a="You're already subscribed. Thank you."),e.hide().html(a).fadeIn("slow")}else e.hide().html("Thank you!<br>You must confirm the subscription in your inbox.").fadeIn("slow")}})}!function(t){t.fn.enllax=function(e){var a=t("[data-enllax-ratio]");a.each(function(){var e=t(this);e.css({position:"absolute",left:"0",right:"0"})});var o=t(window).height(),n=t.extend({ratio:0,type:"background",direction:"vertical",offset:160},e);a.each(function(){var e,a,i,r,s=t(this),c=(t(document).height(),s.offset().top),m=(s.outerHeight(),s.data("enllax-ratio")),l=s.data("enllax-type"),p=s.data("enllax-direction"),d=s.data("enllax-offset");e=m?m:n.ratio,a=l?l:n.type,i=p?p:n.direction,r=d?d:n.offset;var h=Math.round(c*e),u=Math.round((c-o/2)*e-r);"background"==a?"vertical"==i?s.css({"background-position":"center "+-h+"px"}):"horizontal"==i&&s.css({"background-position":-h+"px center"}):"foreground"==a&&("vertical"==i?s.css({"-webkit-transform":"translateY("+u+"px)","-moz-transform":"translateY("+u+"px)",transform:"translateY("+u+"px)",position:"absolute",left:"0",right:"0"}):"horizontal"==i&&s.css({"-webkit-transform":"translateX("+u+"px)","-moz-transform":"translateX("+u+"px)",transform:"translateX("+u+"px)"})),t(window).on("scroll",function(){var n=t(document).height(),c=s.offset().top,m=(s.outerHeight(),t(this).scrollTop());h=Math.round((c-m)*e),u=Math.round((c-o/2-m)*e-r),"background"==a?"vertical"==i?s.css({"background-position":"center "+-h+"px"}):"horizontal"==i&&s.css({"background-position":-h+"px center"}):"foreground"==a&&m<n&&("vertical"==i?s.css({"-webkit-transform":"translateY("+u+"px)","-moz-transform":"translateY("+u+"px)",transform:"translateY("+u+"px)",position:"absolute",left:"0",right:"0"}):"horizontal"==i&&s.css({"-webkit-transform":"translateX("+u+"px)","-moz-transform":"translateX("+u+"px)",transform:"translateX("+u+"px)"}))})})}}(jQuery),function(t){/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))||loadVideo()}(navigator.userAgent||navigator.vendor||window.opera);var anime=new ScrollWatch({watch:".anime",watchOffset:-50,onElementInView:function(t){$(t.el).addClass("animated fadeIn")}});$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html, body").animate({scrollTop:t.offset().top},1e3),!1}})});var svgFrameWidth=$(".map").width(),svgFrameHeight=$(".map").height();beforePan=function(t,e){var a=this.getSizes(),o=-((a.viewBox.x+a.viewBox.width)*a.realZoom)+svgFrameWidth,n=a.width-svgFrameWidth-a.viewBox.x*a.realZoom,i=-((a.viewBox.y+a.viewBox.height)*a.realZoom)+svgFrameHeight,r=a.height-svgFrameHeight-a.viewBox.y*a.realZoom;return customPan={},customPan.x=Math.max(o,Math.min(n,e.x)),customPan.y=Math.max(i,Math.min(r,e.y)),customPan};var eventsHandler={haltEventListeners:["touchstart","touchend","touchmove","touchleave","touchcancel"],init:function(t){var e=t.instance,a=1,o=0,n=0;this.hammer=Hammer(t.svgElement,{inputClass:Hammer.SUPPORT_POINTER_EVENTS?Hammer.PointerEventInput:Hammer.TouchInput}),this.hammer.get("pinch").set({enable:!0}),this.hammer.on("doubletap",function(t){e.zoomIn()}),this.hammer.on("panstart panmove",function(t){"panstart"===t.type&&(o=0,n=0),e.panBy({x:t.deltaX-o,y:t.deltaY-n}),o=t.deltaX,n=t.deltaY}),this.hammer.on("pinchstart pinchmove",function(t){"pinchstart"===t.type&&(a=e.getZoom(),e.zoom(a*t.scale)),e.zoom(a*t.scale)}),t.svgElement.addEventListener("touchmove",function(t){t.preventDefault()})},destroy:function(){this.hammer.destroy()}},mapOption={zoomEnabled:!0,mouseWheelZoomEnabled:!1,controlIconsEnabled:!1,dblClickZoomEnabled:!1,fit:!1,contain:!0,center:!0,zoomScaleSensitivity:.08,minZoom:1,maxZoom:2,beforePan:beforePan,customEventsHandler:eventsHandler},panZoomTiger=svgPanZoom("#map",mapOption);$(document).ready(function(){$(".scenic-slider").slick({autoplay:!0,arrows:!1,infinite:!0,pauseOnHover:!1,speed:3e3,fade:!0,adaptiveHeight:!0}),$(".fact-slider").slick({autoplay:!0,arrows:!1,infinite:!0,pauseOnHover:!1,autoplaySpeed:7500,speed:500,fade:!0})});var sw=new ScrollWatch({watch:".small-county-slide",onElementInView:function(t){$(t.el).carousel({interval:4e3,pause:!1})}}),weather={getWeatherData:function(t,e){var a=this;$.ajax({type:"GET",url:"http://api.openweathermap.org/data/2.5/weather?zip="+t+",us&units=imperial&appid=dcca37bfac8c4bb6505f76b7c68b5c77",cache:!1,error:function(t){console.log("weather error")},success:function(t){a.parseData(t,e)}})},parseData:function(t,e){cleanData={},cleanData.condition=t.weather[0].description,cleanData.temp=Math.floor(t.main.temp),cleanData.tempHigh=Math.floor(t.main.temp_max),cleanData.tempLow=Math.floor(t.main.temp_min),cleanData.icon=t.weather[0].icon,this.updateVue(cleanData,e)},updateVue:function(t,e){var a;"yolo"===e?a=yolo:"napa"===e?a=napa:"sonoma"===e?a=sonoma:"mendo"===e&&(a=mendo),a.temp=t.temp,a.condition=t.condition,a.tempHigh=t.tempHigh,a.tempLow=t.tempLow,a.icon="./dist/images/"+t.icon+".jpg"}},yolo=new Vue({el:"#weather-yolo",data:{condition:"Light Rain",temp:"44",tempHigh:"100",tempLow:"10",icon:"./dist/images/01n.jpg"}}),napa=new Vue({el:"#weather-napa",data:{condition:"Light Rain",temp:"44",tempHigh:"100",tempLow:"10",icon:"./dist/images/01n.jpg"}}),sonoma=new Vue({el:"#weather-sonoma",data:{condition:"Light Rain",temp:"44",tempHigh:"100",tempLow:"10",icon:"./dist/images/01n.jpg"}}),mendo=new Vue({el:"#weather-mendo",data:{condition:"Light Rain",temp:"44",tempHigh:"100",tempLow:"10",icon:"./dist/images/01n.jpg"}}),countyArr=[{county:"yolo",zip:"95694"},{county:"napa",zip:"95425"},{county:"sonoma",zip:"95494"},{county:"mendo",zip:"95466"}];countyArr.forEach(function(t){modalControl(t.county,t.zip)}),$("#insta__wrap").enllax(),$results=$(".results"),$form=$(".newsletter__form"),$form.submit(function(t){t.preventDefault(),submitSubscribeForm($form,$results)});