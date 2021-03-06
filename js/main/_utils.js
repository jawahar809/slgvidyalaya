function setStateStyleSheet(e,d){var c,b;for(c=0;(b=document.getElementsByTagName("link")[c]);c++){if(b.getAttribute("rel").indexOf("style")!=-1&&b.getAttribute("title")){if(b.getAttribute("title")==e){b.disabled=!d}}}}
function getStateStyleSheet(f,d){var c,b,e=-1;for(c=0;(b=document.getElementsByTagName("link")[c]);c++){if(b.getAttribute("rel").indexOf("style")!=-1&&b.getAttribute("title")){if(b.getAttribute("title")==f){e=b.disabled?0:1;break}}}
return e}
function setActiveStyleSheet(f,e){var d,c,b;for(d=0;(c=document.getElementsByTagName("link")[d]);d++){if(c.getAttribute("rel").indexOf("style")!=-1&&c.getAttribute("title")){if(e){c.disabled=true}
if(c.getAttribute("title")==f){c.disabled=false}}}}
function getActiveStyleSheet(){var c,b;for(c=0;(b=document.getElementsByTagName("link")[c]);c++){if(b.getAttribute("rel").indexOf("style")!=-1&&b.getAttribute("title")&&!b.disabled){return b.getAttribute("title")}}
return null}
function getPreferredStyleSheet(){var c,b;for(c=0;(b=document.getElementsByTagName("link")[c]);c++){if(b.getAttribute("rel").indexOf("style")!=-1&&b.getAttribute("rel").indexOf("alt")==-1&&b.getAttribute("title")){return b.getAttribute("title")}}
return null}
function addListBoxItem(b,d,c){var a=new Option();a.value=d;a.text=c;b.options.add(a)}
function clearListBox(b){for(var a=b.options.length- 1;a>=0;a--){b.options[a]=null}}
function delListBoxItemByValue(b,c){for(var a=0;a<b.options.length;a++){if(b.options[a].value==c){b.options[a]=null;break}}}
function delListBoxItemByText(c,a){for(var b=0;b<c.options.length;b++){if(c.options[b].text==a){c.options[b]=null;break}}}
function findListBoxItemByValue(c,d){var a=-1;for(var b=0;b<c.options.length;b++){if(c.options[b].value==d){a=b;break}}
return a}
function findListBoxItemByText(d,b){var a=-1;for(var c=0;c<d.options.length;c++){if(d.options[c].text==b){a=c;break}}
return a}
function selectListBoxItemByValue(b,c){for(var a=0;a<b.options.length;a++){b.options[a].selected=(c==b.options[a].value)}}
function selectListBoxItemByText(c,a){for(var b=0;b<c.options.length;b++){c.options[b].selected=(a==c.options[b].text)}}
function getListBoxValues(b){var d=arguments[1]?arguments[1]:",";var c="";for(var a=0;a<b.options.length;a++){c+=(c?d:"")+ b.options[a].value}
return c}
function getListBoxTexts(b){var d=arguments[1]?arguments[1]:",";var c="";for(var a=0;a<b.options.length;a++){c+=(c?d:"")+ b.options[a].text}
return c}
function sortListBox(d){var e=new Array();var b=new Option();for(var c=0;c<d.options.length;c++){e[c]=d.options[c].clone()}
for(var a=0;a<e.length- 1;a++){for(var f=(a+ 1);f<e.length;f++){if(e[a].text>e[f].text){b=e[a];e[a]=e[f];e[f]=b}}}
for(var c=0;c<d.options.length;c++){d.options[c]=e[c].clone()}}
function getListBoxSelectedIndex(b){for(var a=0;a<b.options.length;a++){if(b.options[a].selected){return a}}
return-1}
function getListBoxSelectedValue(b){for(var a=0;a<b.options.length;a++){if(b.options[a].selected){return b.options[a].value}}
return null}
function getListBoxSelectedText(b){for(var a=0;a<b.options.length;a++){if(b.options[a].selected){return b.options[a].text}}
return null}
function getListBoxSelectedOption(b){for(var a=0;a<b.options.length;a++){if(b.options[a].selected){return b.options[a]}}
return null}
function getRadioGroupValue(b){for(var a=0;a<b.length;a++){if(b[a].checked){return b[a].value}}
return null}
function setRadioGroupCheckedByNum(c,a){for(var b=0;b<c.length;b++){if(c[b].checked&&b!=a){c[b].checked=false}else{if(b==a){c[b].checked=true}}}}
function setRadioGroupCheckedByValue(b,c){for(var a=0;a<b.length;a++){if(b[a].checked&&b[a].value!=c){b[a].checked=false}else{if(b[a].value==c){b[a].checked=true}}}}
function sortArray(c){var b=arguments[1]?arguments[1]:false;for(var a=0;a<c.length- 1;a++){for(var d=(a+ 1);d<c.length;d++){if(b){if(c[a]>c[d]){tmp=c[a];c[a]=c[d];c[d]=tmp}}else{if(c[a].toLowerCase()>c[d].toLowerCase()){tmp=c[a];c[a]=c[d];c[d]=tmp}}}}}
function inList(d,g){var f=arguments[2]?arguments[2]:"|";var c=arguments[3]?arguments[3]:true;var a=false;if(c){g=g.toLowerCase();d=d.toLowerCase()}
var e=d.split(f);for(var b=0;b<e.length;b++){if(e[b]==g){a=true;break}}
return a}
function alltrim(e){var b=arguments[1]?arguments[1]:"a";var d="";var c,f=0,a=e.length- 1;if(b=="a"||b=="l"){for(c=0;c<e.length;c++){if(e.substr(c,1)!=" "){f=c;break}}}
if(b=="a"||b=="r"){for(c=e.length- 1;c>=0;c--){if(e.substr(c,1)!=" "){a=c;break}}}
return e.substring(f,a+ 1)}
function ltrim(a){return alltrim(a,"l")}
function rtrim(a){return alltrim(a,"r")}
function padl(e,a){var c=arguments[2]?arguments[2]:" ";var d=e.substr(0,a);if(d.length<a){for(var b=0;b<a- e.length;b++){d+=c}}
return d}
function padr(e,a){var c=arguments[2]?arguments[2]:" ";var d=e.substr(0,a);if(d.length<a){for(var b=0;b<a- e.length;b++){d=c+ d}}
return d}
function padc(e,a){var c=arguments[2]?arguments[2]:" ";var d=e.substr(0,a);if(d.length<a){for(var b=0;b<Math.floor((a- e.length)/ 2); b++) {
d=c+ d+ c}}
return d+(d.length<a?c:"")}
function replicate(d,a){var c="";for(var b=0;b<a;b++){c+=d}
return c}
function clearNumber(c){var b=arguments[1]?arguments[1]:0;var g=arguments[2]?arguments[2]:0;var e="";var a=-1;c=""+ c;if(c==""){c=""+ g}
for(var d=0;d<c.length;d++){if(a==0){break}else{if(a>0){a--}}
var f=c.substr(d,1);if(f=="."){if(b>0){e+=f}
a=b}else{if((f>=0&&f<=9)||(f=="-"&&d==0)){e+=f}}}
if(b>0&&a!=0){if(a==-1){e+=".";a=b}
for(d=a;d>0;d--){e+="0"}}
return e}
function dec2hex(a){return Number(a).toString(16)}
function hex2dec(a){return parseInt(a,16)}
function roundNumber(b){var a=arguments[1]?arguments[1]:0;var c=Math.pow(10,a);return Math.round(b*c)/ c
}
function hex2rgb(a){a=parseInt(((a.indexOf("#")>-1)?a.substring(1):a),16);return{r:a>>16,g:(a&65280)>>8,b:(a&255)}}
function rgb2hex(a){var c;a=a.replace(/\s/g,"").toLowerCase();if(a=="rgba(0,0,0,0)"||a=="rgba(0%,0%,0%,0%)"){a="transparent"}
if(a.indexOf("rgba(")==0){c=a.match(/^rgba\((\d{1,3}[%]?),(\d{1,3}[%]?),(\d{1,3}[%]?),(\d{1,3}[%]?)\)$/i)}else{c=a.match(/^rgb\((\d{1,3}[%]?),(\d{1,3}[%]?),(\d{1,3}[%]?)\)$/i)}
if(c){a="";for(var b=1;b<=3;b++){a+=Math.round((c[b][c[b].length- 1]=="%"?2.55:1)*parseInt(c[b])).toString(16).replace(/^(.)$/,"0$1")}}else{a=a.replace(/^#?([\da-f])([\da-f])([\da-f])$/i,"$1$1$2$2$3$3")}
return(a.substr(0,1)!="#"?"#":"")+ a}
function _rgb2hex(d,c,a){return"#"+ Number(d).toString(16).toUpperCase().replace(/^(.)$/,"0$1")+ Number(c).toString(16).toUpperCase().replace(/^(.)$/,"0$1")+ Number(a).toString(16).toUpperCase().replace(/^(.)$/,"0$1")}
function hex2hsb(a){return rgb2hsb(hex2rgb(a))}
function hsb2hex(a){var b=hsb2rgb(a);return _rgb2hex(b.r,b.g,b.b)}
function rgb2hsb(b){var a={};a.b=Math.max(Math.max(b.r,b.g),b.b);a.s=(a.b<=0)?0:Math.round(100*(a.b- Math.min(Math.min(b.r,b.g),b.b))/ a.b);
a.b=Math.round((a.b/255)*100);if((b.r==b.g)&&(b.g==b.b)){a.h=0}else{if(b.r>=b.g&&b.g>=b.b){a.h=60*(b.g- b.b)/ (b.r - b.b)
}else{if(b.g>=b.r&&b.r>=b.b){a.h=60+ 60*(b.g- b.r)/ (b.g - b.b)
}else{if(b.g>=b.b&&b.b>=b.r){a.h=120+ 60*(b.b- b.r)/ (b.g - b.r)
}else{if(b.b>=b.g&&b.g>=b.r){a.h=180+ 60*(b.b- b.g)/ (b.b - b.r)
}else{if(b.b>=b.r&&b.r>=b.g){a.h=240+ 60*(b.r- b.g)/ (b.b - b.g)
}else{if(b.r>=b.b&&b.b>=b.g){a.h=300+ 60*(b.r- b.b)/ (b.r - b.g)
}else{a.h=0}}}}}}}
a.h=Math.round(a.h);return a}
function hsb2rgb(a){var c={};var g=Math.round(a.h);var f=Math.round(a.s*255/100);var b=Math.round(a.b*255/100);if(f==0){c.r=c.g=c.b=b}else{var i=b;var e=(255- f)*b/255;var d=(i- e)*(g%60)/ 60;
if(g==360){g=0}
if(g<60){c.r=i;c.b=e;c.g=e+ d}else{if(g<120){c.g=i;c.b=e;c.r=i- d}else{if(g<180){c.g=i;c.r=e;c.b=e+ d}else{if(g<240){c.b=i;c.r=e;c.g=i- d}else{if(g<300){c.b=i;c.g=e;c.r=e+ d}else{if(g<360){c.r=i;c.g=e;c.b=i- d}else{c.r=0;c.g=0;c.b=0}}}}}}}
return{r:Math.round(c.r),g:Math.round(c.g),b:Math.round(c.b)}}
function split_rgb(a){a=rgb2hex(a);var d=a.match(/^#?([\dabcdef]{2})([\dabcdef]{2})([\dabcdef]{2})$/i);if(!d){return false}
for(var c=1,b=new Array(3);c<=3;c++){b[c- 1]=parseInt(d[c],16)}
return b}
function iColorPicker(){var e=arguments[0]?arguments[0]:"iColorPicker"+ Math.round(Math.random()*1000);var a=arguments[1]?arguments[1]:"#f00,#ff0,#0f0,#0ff,#00f,#f0f,#fff,#ebebeb,#e1e1e1,#d7d7d7,#cccccc,#c2c2c2,#b7b7b7,#acacac,#a0a0a0,#959595,#ee1d24,#fff100,#00a650,#00aeef,#2f3192,#ed008c,#898989,#7d7d7d,#707070,#626262,#555,#464646,#363636,#262626,#111,#000,#f7977a,#fbad82,#fdc68c,#fff799,#c6df9c,#a4d49d,#81ca9d,#7bcdc9,#6ccff7,#7ca6d8,#8293ca,#8881be,#a286bd,#bc8cbf,#f49bc1,#f5999d,#f16c4d,#f68e54,#fbaf5a,#fff467,#acd372,#7dc473,#39b778,#16bcb4,#00bff3,#438ccb,#5573b7,#5e5ca7,#855fa8,#a763a9,#ef6ea8,#f16d7e,#ee1d24,#f16522,#f7941d,#fff100,#8fc63d,#37b44a,#00a650,#00a99e,#00aeef,#0072bc,#0054a5,#2f3192,#652c91,#91278f,#ed008c,#ee105a,#9d0a0f,#a1410d,#a36209,#aba000,#588528,#197b30,#007236,#00736a,#0076a4,#004a80,#003370,#1d1363,#450e61,#62055f,#9e005c,#9d0039,#790000,#7b3000,#7c4900,#827a00,#3e6617,#045f20,#005824,#005951,#005b7e,#003562,#002056,#0c004b,#30004a,#4b0048,#7a0045,#7a0026";var b=a.split(",");var d='<table class="colorPickerTable"><thead>';for(var c=0;c<b.length;c++){if(c%16==0){d+=(c>0?"</tr>":"")+"<tr>"}
d+='<td style="background-color:'+ b[c]+'">&nbsp;</td>'}
d+='</tr></thead><tbody><tr style="height:60px;"><td colspan="8" id="'+ e+'_colorPreview" style="vertical-align:middle;text-align:center;border:1px solid #000;background:#fff;"><input style="width:55px;color:#000;border:1px solid rgb(0, 0, 0);padding:5px;background-color:#fff;font:11px Arial, Helvetica, sans-serif;" maxlength="7" /><a href="#" id="'+ e+'_moreColors" class="iColorPicker_moreColors"></a></td><td colspan="8" id="'+ e+'_colorOriginal" style="vertical-align:middle;text-align:center;border:1px solid #000;background:#fff;"><input style="width:55px;color:#000;border:1px solid rgb(0, 0, 0);padding:5px;background-color:#fff;font:11px Arial, Helvetica, sans-serif;" readonly="readonly" /></td></tr></tbody></table>';jQuery(document.createElement("div")).attr("id",e).css("display","none").html(d).appendTo("body").addClass("iColorPickerTable").on("mouseover","thead td",function(){var f=rgb2hex(jQuery(this).css("background-color"));jQuery("#"+ e+"_colorPreview").css("background",f);jQuery("#"+ e+"_colorPreview input").val(f)}).on("keypress","#"+ e+"_colorPreview input",function(g){var h=jQuery(this).val();if(h.length<7&&((g.which>=48&&g.which<=57)||(g.which>=97&&g.which<=102)||(g.which===35||h.length===0))){h+=String.fromCharCode(g.which)}else{if(g.which==8&&h.length>0){h=h.substring(0,h.length- 1)}else{if(g.which===13&&(h.length===4||h.length===7)){var f=jQuery("#"+ e).data("field");var i=jQuery("#"+ e).data("func");if(i!=null&&i!="undefined"){i(f,h)}else{f.val(h).css("backgroundColor",h).trigger("change")}
jQuery("#"+ e+"_Bg").fadeOut(500);jQuery("#"+ e).fadeOut(500)}else{g.preventDefault();return false}}}
if(h.substr(0,1)==="#"&&(h.length===4||h.length===7)){jQuery("#"+ e+"_colorPreview").css("background",h)}}).on("click","thead td",function(i){var f=jQuery("#"+ e).data("field");var h=jQuery("#"+ e).data("func");var g=rgb2hex(jQuery(this).css("background-color"));if(h!=null&&h!="undefined"){h(f,g)}else{f.val(g).css("backgroundColor",g).trigger("change")}
jQuery("#"+ e+"_Bg").fadeOut(500);jQuery("#"+ e).fadeOut(500);i.preventDefault();return false}).on("click","tbody .iColorPicker_moreColors",function(m){var l=jQuery(this).parents("table").find("thead");var h="";if(l.hasClass("more_colors")){for(var k=0;k<b.length;k++){if(k%16==0){h+=(k>0?"</tr>":"")+"<tr>"}
h+='<td style="background-color:'+ b[k]+'">&nbsp;</td>'}
l.removeClass("more_colors").empty().html(h+"</tr>");jQuery("#"+ e+"_colorPreview").attr("colspan",8);jQuery("#"+ e+"_colorOriginal").attr("colspan",8)}else{var g=[0,0,0],k=0,f=-1;while(g[0]<15||g[1]<15||g[2]<15){if(k%18==0){h+=(k>0?"</tr>":"")+"<tr>"}
k++;h+='<td style="background-color:'+ _rgb2hex(g[0]*16+ g[0],g[1]*16+ g[1],g[2]*16+ g[2])+'">&nbsp;</td>';g[2]+=3;if(g[2]>15){g[1]+=3;if(g[1]>(f===0?6:15)){g[0]+=3;if(g[0]>15){if(f===0){f=1;g[0]=0;g[1]=9;g[2]=0}else{break}}else{g[1]=(f<1?0:9);g[2]=0}}else{g[2]=0}}}
l.addClass("more_colors").empty().html(h+'<td  style="background-color:#ffffff" colspan="8">&nbsp;</td></tr>');jQuery("#"+ e+"_colorPreview").attr("colspan",9);jQuery("#"+ e+"_colorOriginal").attr("colspan",9)}
jQuery("#"+ e+" table.colorPickerTable thead td").css({width:"12px",height:"14px",border:"1px solid #000",cursor:"pointer"});m.preventDefault();return false});jQuery(document.createElement("div")).attr("id",e+"_Bg").click(function(f){jQuery("#"+ e+"_Bg").fadeOut(500);jQuery("#"+ e).fadeOut(500);f.preventDefault();return false}).appendTo("body");jQuery("#"+ e+" table.colorPickerTable thead td").css({width:"12px",height:"14px",border:"1px solid #000",cursor:"pointer"});jQuery("#"+ e+" table.colorPickerTable").css({"border-collapse":"collapse"});jQuery("#"+ e).css({border:"1px solid #ccc",background:"#333",padding:"5px",color:"#fff","z-index":999999});jQuery("#"+ e+"_colorPreview").css({height:"50px"});return e}
function iColorShow(a,d,c){if(a===null||a===""){a=jQuery(".iColorPickerTable").attr("id")}
var g=d.offset();var i=jQuery("#"+ a).width();var f=jQuery("#"+ a).height();var e=g.left+ i<jQuery(window).width()- 10?g.left:jQuery(window).width()- 10- i;var j=g.top+ d.outerHeight()+ f<jQuery(document).scrollTop()+ jQuery(window).height()- 10?g.top+ d.outerHeight():g.top- f- 13;jQuery("#"+ a).data({field:d,func:c}).css({top:j+"px",left:e+"px",position:"absolute","z-index":100001}).fadeIn(500);jQuery("#"+ a+"_Bg").css({position:"fixed","z-index":100000,top:0,left:0,width:"100%",height:"100%"}).fadeIn(500);var b=d.val().substr(0,1)=="#"?d.val():rgb2hex(d.css("backgroundColor"));jQuery("#"+ a+"_colorPreview input,#"+ a+"_colorOriginal input").val(b);jQuery("#"+ a+"_colorPreview,#"+ a+"_colorOriginal").css("background",b)}
function getCookie(c){var d=arguments[1]!="undefined"?arguments[1]:null;var e=document.cookie.indexOf(c+"=");var a=e+ c.length+ 1;if((!e)&&(c!=document.cookie.substring(0,c.length))){return d}
if(e==-1){return d}
var b=document.cookie.indexOf(";",a);if(b==-1){b=document.cookie.length}
return unescape(document.cookie.substring(a,b))}
function setCookie(c,e,a,h,d,g){var b=new Date();b.setTime(b.getTime());if(a){a=a*1000}
var f=new Date(b.getTime()+(a));document.cookie=c+"="+ escape(e)+((a)?";expires="+ f.toGMTString():"")+((h)?";path="+ h:"")+((d)?";domain="+ d:"")+((g)?";secure":"")}
function deleteCookie(a,c,b){if(getCookie(a)){document.cookie=a+"="+((c)?";path="+ c:"")+((b)?";domain="+ b:"")+";expires=Thu, 01-Jan-1970 00:00:01 GMT"}}
function dateParse(c){c=c.replace(/\//g,"-").replace(/\./g,"-").replace(/T/g," ").split("+")[0];var a=c.split(" ");var e=a[0].split("-");var b=a[1].split(":");e.push(b[0],b[1],b[2]);return e}
function dateDifference(d){var c=arguments[1]!==undefined?arguments[1]:"";var g=arguments[2]!==undefined?arguments[2]:true;var f=arguments[3]!==undefined?arguments[3]:false;var b=dateParse(d);d=Date.UTC(b[0],b[1],b[2],b[3],b[4],b[5]);if(c==""){c=new Date();var a=[c.getFullYear(),c.getMonth()+ 1,c.getDate(),c.getHours(),c.getMinutes(),c.getSeconds()]}else{var a=dateParse(c)}
c=Date.UTC(a[0],a[1],a[2],a[3],a[4],a[5]);var i=Math.round((c- d)/ 1000);
var j=Math.floor(i/(24*3600));i-=j*24*3600;var h=Math.floor(i/3600);i-=h*3600;var e=Math.floor(i/60);i-=e*60;rez="";if(j>0){rez+=(rez!=""?" ":"")+ j+" day"+(j>1?"s":"")}
if((!g||rez=="")&&h>0){rez+=(rez!=""?" ":"")+ h+" hour"+(h>1?"s":"")}
if((!g||rez=="")&&e>0){rez+=(rez!=""?" ":"")+ e+" minute"+(e>1?"s":"")}
if(f||rez==""){rez+=rez!=""||f?(" "+ i+" second"+(i>1?"s":"")):"less then minute"}
return rez}
function formValidate(c,b){var a="";c.find(":input").each(function(){if(a!=""&&b.exit_after_first_error){return}
for(var e=0;e<b.rules.length;e++){if(jQuery(this).attr("name")==b.rules[e].field){var g=jQuery(this).val();var d=false;if(typeof(b.rules[e].min_length)=="object"){if(b.rules[e].min_length.value>0&&g.length<b.rules[e].min_length.value){if(a==""){jQuery(this).get(0).focus()}
a+='<p class="error_item">'+(typeof(b.rules[e].min_length.message)!="undefined"?b.rules[e].min_length.message:b.error_message_text)+"</p>";d=true}}
if((!d||!b.exit_after_first_error)&&typeof(b.rules[e].max_length)=="object"){if(b.rules[e].max_length.value>0&&g.length>b.rules[e].max_length.value){if(a==""){jQuery(this).get(0).focus()}
a+='<p class="error_item">'+(typeof(b.rules[e].max_length.message)!="undefined"?b.rules[e].max_length.message:b.error_message_text)+"</p>";d=true}}
if((!d||!b.exit_after_first_error)&&typeof(b.rules[e].mask)=="object"){if(b.rules[e].mask.value!=""){var f=new RegExp(b.rules[e].mask.value);if(!f.test(g)){if(a==""){jQuery(this).get(0).focus()}
a+='<p class="error_item">'+(typeof(b.rules[e].mask.message)!="undefined"?b.rules[e].mask.message:b.error_message_text)+"</p>";d=true}}}
if((!d||!b.exit_after_first_error)&&typeof(b.rules[e].equal_to)=="object"){if(b.rules[e].equal_to.value!=""&&g!=jQuery(jQuery(this).get(0).form[b.rules[e].equal_to.value]).val()){if(a==""){jQuery(this).get(0).focus()}
a+='<p class="error_item">'+(typeof(b.rules[e].equal_to.message)!="undefined"?b.rules[e].equal_to.message:b.error_message_text)+"</p>";d=true}}
if(b.error_fields_class!=""){jQuery(this).toggleClass(b.error_fields_class,d)}}}});if(a!=""&&b.error_message_show){THEMEREX_error_msg_box=c.find(".result");if(THEMEREX_error_msg_box.length==0){THEMEREX_error_msg_box=c.parent().find(".result")}
if(THEMEREX_error_msg_box.length==0){c.append('<div class="result"></div>');THEMEREX_error_msg_box=c.find(".result")}
if(b.error_message_class){THEMEREX_error_msg_box.toggleClass(b.error_message_class,true)}
THEMEREX_error_msg_box.html(a).fadeIn();setTimeout(function(){THEMEREX_error_msg_box.fadeOut()},b.error_message_time)}
return a!=""}
function animateTo(e){if(e.indexOf("#")==-1){e="#"+ e}
var d=jQuery(e).eq(0);if(d.length==0){return}
var b=jQuery(e).offset().top;var a=jQuery(window).scrollTop();var c=Math.min(1600,Math.max(400,Math.round(Math.abs(b- a)/ jQuery(window).height() * 100)));
jQuery("body,html").animate({scrollTop:b- jQuery("#wpadminbar").height()- jQuery("header.fixedTopMenu .topWrap").height()},c,"swing")}
function setLocation(a){try{history.pushState(null,null,a);return}catch(b){}
location.href=a}
function isMobile(){var a=false;(function(b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(b)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,4))){a=true}})(navigator.userAgent||navigator.vendor||window.opera);return a}
function isiOS(){return navigator.userAgent.match(/iPad|iPhone|iPod/i)!=null}
function getFileName(a){a=a.replace(/\\/g,"/");var b=a.lastIndexOf("/");if(b>=0){a=a.substr(b+ 1)}
return a}
function getFileExt(a){var b=a.lastIndexOf(".");a=b>=0?a.substr(b+ 1):"";return a}
function isset(a){return a!=undefined}
function empty(a){return a==undefined||(typeof(a)=="object"&&a==null)||(typeof(a)=="array"&&a.length==0)||(typeof(a)=="string"&&alltrim(a)=="")}
function is_array(a){return typeof(a)=="array"}
function is_object(a){return typeof(a)=="object"}
function in_array(d,b){var c=false;for(var a=0;a<b.length- 1;a++){if(b[a]==d){c=true;break}}
return c}
function clone(c){if(c==null||typeof(c)!="object"){return c}
var a={};for(var b in c){a[b]=clone(c[b])}
return a}
function objDisplay(e){var c=arguments[1]?arguments[1]:false;var b=arguments[2]?arguments[2]:false;var d=arguments[3]?arguments[3]:false;var h=arguments[4]?arguments[4]:0;var g="";var a="";if(h>0){g+=(e===null?"null":typeof(e))+(c?"\n<br />":"\n");a=replicate(c?"&nbsp;":" ",h*2)}
if(e!==null){for(var f in e){if(!d&&typeof(e[f])=="function"){continue}
if(b&&(typeof(e[f])=="object"||typeof(e[f])=="array")&&e[f]!=e){g+=a+(c?"<b>":"")+ f+(c?"</b>":"")+"="+ objDisplay(e[f],c,b,d,h+ 1)}else{g+=a+(c?"<b>":"")+ f+(c?"</b>":"")+"="+(typeof(e[f])=="string"?'"':"")+ e[f]+(typeof(e[f])=="string"?'"':"")+(c?"\n<br />":"\n")}}}
return g}
function cl(a){console.log(a)}
function cd(a){console.log(objDisplay(a))}
function al(a){if(typeof THEMEREX_userLoggedIn!="undefined"&&THEMEREX_userLoggedIn){alert(a)}}
function ad(a){if(typeof THEMEREX_userLoggedIn!="undefined"&&THEMEREX_userLoggedIn){alert(objDisplay(a))}}
function dl(a){if(typeof THEMEREX_userLoggedIn!="undefined"&&THEMEREX_userLoggedIn){if(jQuery("#debugLog").length==0){jQuery("body").append('<div id="debugLog"><span id="debugLogClose" onclick="jQuery(\'#debugLog\').hide();jQuery(\'#debugLogContent\').empty();">x</span><div id="debugLogContent"></div></div>')}
jQuery("#debugLogContent").append("<br>"+ a);jQuery("#debugLog").show()}}
function dd(a){if(typeof THEMEREX_userLoggedIn!="undefined"&&THEMEREX_userLoggedIn){if(jQuery("#debugLog").length==0){jQuery("body").append('<div id="debugLog"><span id="debugLogClose" onclick="jQuery(\'#debugLog\').hide();">x</span><div id="debugLogContent"></div></div>')}
jQuery("#debugLogContent").html(objDisplay(a));jQuery("#debugLog").show()}};