var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

if (window.previousError) {
	toastr.error(window.previousError);
}

if (window.previousSuccess) {
	toastr.success(window.previousSuccess);
}

function copyToClipboard(text) {
	var textArea = document.createElement('textarea');
	textArea.value = text;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand('copy');
	document.body.removeChild(textArea);
}


}
/*
     FILE ARCHIVED ON 08:39:31 Aug 20, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:58:41 Sep 13, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 105.795
  exclusion.robots: 0.11
  exclusion.robots.policy: 0.103
  RedisCDXSource: 21.859
  esindex: 0.009
  LoadShardBlock: 60.86 (3)
  PetaboxLoader3.datanode: 92.05 (4)
  CDXLines.iter: 20.149 (3)
  load_resource: 120.687
  PetaboxLoader3.resolve: 53.945
*/