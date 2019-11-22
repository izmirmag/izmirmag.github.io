function m(a) {
	for (var i = a.feed.entry.length - 1; i > 0; i--) {
		for (var j = 0; j < a.feed.entry[i].link.length; j++) {
			if (a.feed.entry[i].link[j].rel == 'alternate') {
				var ik = a.feed.entry[i].link[j].href;
			}
		}
		var d = a.feed.entry[i].published.$t;
		var dy = d.split("-")[2].substring(0, 2);
		var mo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
		var m2 = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
		var yr = d.split("-")[0];
		var m = d.split("-")[1];
		for (var u2 = 0; u2 < mo.length; u2++) {
			if (parseInt(m) == mo[u2]) {
				var me = m2[u2];
				var m3 = mo[u2];
				break;
			}
		}

		var p = a.feed.entry[i].title.$t;
		var b = p.split("//")[0];
		var lo = p.split("//")[2];
		var im = '<p class="ae" data-date="' + dy.replace("01", "1").replace("02", "2").replace("03", "3").replace("04", "4").replace("05", "5").replace("06", "6").replace("07", "7").replace("08", "8").replace("09", "9") + "-" + m3 + "-" + yr + '" data-link="' + ik.replace("https://www.izmirmag.net","") + '" data-title="' + b + ' // '+lo+'"></p>';

		$(".tkv").append(im);
	}

}

$(function () {
	$(".tkv").tkv({
		lang: "TR"
	})
});
document.write('<script type="text/javascript" src="/feeds/posts/summary/-/etkinlik?max-results=150&alt=json-in-script&callback=m"><\/script>');
