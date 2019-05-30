//RME
jQuery(document).ready(function($) {

	//detect version of analytics
	function analytics_version(){
	 	var scripts = document.getElementsByTagName('script');
	 	var i = len = 0;
		for (i, len = scripts.length; i < len; i += 1) {
			if (/ga\.js/.test(scripts[i].src)) {
				return 'old';
				//console.log('ga.js (not universal analytics)');
			} else if (/analytics\.js/.test(scripts[i].src)) {
				return 'new';
				//console.log('analytics.js (universal analytics)');
			}else{
				return 'none';
				//console.log('no analytics');
			}
		}
	}
	//console.log(analytics_version());

	//execute content: ga event based on analytics version
	$(".rme-button").click(function(event){
		event.preventDefault();
		$(".rme-button").parent("p").fadeOut(300);
		$(".rme-button").fadeOut(300, function(){
			$(".rme-content").delay(300).fadeIn();
		});

		if (analytics_version() == 'new') {
			ga("send", "event", "Read More RME.js", "click", document.title);
			console.log('Plugin: Read more events - event tracked (analytics.js | universal analytics)');
		} else if(analytics_version() == 'old') {
			//_trackEvent("Read More RME.js", "click", document.title);
			_gaq.push(['_trackEvent', 'Read More', 'click', document.title]);
			console.log('Plugin: Read more events - event tracked (ga.js | not universal analytics)');
		} else { 
			console.log('Plugin: Read more events - no event tracked (no analytics)');
		}
	});
	//example
	//<a href="" class="rme-button2">rme-button (auto detects version of analytics)</a>
	//<div class="rme-content" style="display:none;">CONTENT</div>
	
	/*LEGACY*/

	/*$(".rme-button").click(function(event){
		event.preventDefault();
		$(".rme-button").parent("p").fadeOut(300);
		$(".rme-button").fadeOut(300, function(){
			$(".rme-content").delay(300).fadeIn();
		});
	});*/
	
	//legacy example
	//<a href="" class="rme-button" onclick="ga('send', 'event', 'Read More', 'click', document.title);">rme-button (universal analytics)</a>
	//<a href="" class="rme-button" onclick="_gaq.push(['_trackEvent', 'Read More', 'click', document.title]);">rme-button (not universal analytics)</a>
	//<div class="rme-content" style="display:none;">CONTENT</div>
});