var labe = $(".archive-page-header h2#basi").text();

$.ajax({
    url: 'https://izmirmag.net/feeds/posts/summary?q='+labe+'&max-results=55&alt=json-in-script',
    type: 'get',
    dataType: "jsonp",
    success: function(a){

for (var i = a.feed.entry.length - 1; i+1 > 0; i--) {
        for (var j = 0; j < a.feed.entry[i].link.length; j++) {
            if (a.feed.entry[i].link[j].rel == 'alternate') {
                var ik = a.feed.entry[i].link[j].href;
            }}

var d = a.feed.entry[i].published.$t;
var saat = d.split("T")[1].substring(0, 5);
var month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var month2 = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
var day = d.split("-")[2].substring(0, 2);
var hour = d.split("T")[1].substring(0, 5);
var m = d.split("-")[1];
var year = d.split("-")[0];
for (var u2 = 0; u2 < month.length; u2++) {
if (parseInt(m) == month[u2]) {
m = month[u2];
mo = month2[u2];
break;
}
}
date = year + '-' + m + '-' + day + '-' + hour;

dt = day +' <t>'+ mo +'</t> '+ year;
     
     
        var e = "";
        var h = a.feed.entry[i].category;

for (var c = 0; c < h.length; c++) {

e += '<a href="/search/label/' + h[c].term + '" id="' + h[c].term + '" class="' + h[c].term + '">' + h[c].term.replace(/i/g,"İ") + '</a>';

}

            if (e.toString().match(">ö<")) {
            var ppl = '<i class="fas fa-star" title="ÖNE ÇIKAN"></i> ';
        } else {
            ppl = ""
        }



var ikh = "";    
var ik2 = "";      
var ikm = "";
var fiy = "";
var ce;
var numberRegex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
for (ce = 0; ce < a.feed.entry[i].link.length; ce++) {
if(numberRegex.test(a.feed.entry[i].link[ce].type) && a.feed.entry[i].link[ce].href != "http://o.com")
{ikm += '<i class="fa fa-try" style="color:green"></i> ' + a.feed.entry[i].link[ce].type + '' ;} 


if(a.feed.entry[i].link[ce].href == "http://sb.com" || numberRegex.test(a.feed.entry[i].link[ce].type) && a.feed.entry[i].link[ce].href != "http://o.com")
{ik2 += '<i class="fa fa-try" style="color:green"></i> ' + a.feed.entry[i].link[ce].type;
fiy += a.feed.entry[i].link[ce].type;
} 

if(a.feed.entry[i].link[ce].href == "http://o.com")
{ikh += a.feed.entry[i].link[ce].type;}

}


        var p = a.feed.entry[i].title.$t;
  var pe = a.feed.entry[i].category[0].term;
        var pstt = p.split("//")[0];
        var ttsp = p.split("//")[2];
var lo = p.split("// ")[2];
if(lo===undefined){var lo =" İzmir"}




if ("media$thumbnail" in a.feed.entry[i]) {var rs = a.feed.entry[i].media$thumbnail.url.replace(/\/s[0-9]+\-c/g, "/s200")} 
else {var rs = "https://4.bp.blogspot.com/-3eh9vIrwYVc/V6nu36XhMVI/AAAAAAAAFoU/VXXUcdQS0CoR_Foo1dynRzTyd7glw_jJQCK4B/s500/izmirmag.png"}
  
var it22 = '<div class="shad item list-item box"><a href="' + ik + '" class="thumbnail item-thumbnail" style="height:100px"><span class="item-thumbnail-resize-portrait"><img src="' + rs.replace('s72-c','s1-c') + '" class="optimized"></span></a><div class="item-content"><h3 class="item-title"><a href="' + ik + '">' + ppl + pstt + '</a></h3><div class="meta-items"><a class="meta-item meta-item-date" href="' + ik + '"><i class="fa fa-calendar"></i> <span>' + dt + '</span></a><br><a class="meta-item meta-item-date"><loc>' + lo + '</loc></a>'+ikm+'</div><div class="theme bg item-labels">'+e+'<a href="/search/label/'+lo+'" id="thk" class="'+lo+'">'+lo+'</a><span></div><div class="item-sub" style="display:none"><p class="date">' + date + '</p><p class="title">' + pstt + '</p><p class="desc">'+ttsp+'</p><p class="like">'+ikm+'</p><p class="pop">' + ikh + '</p></div></div></div></div></div>';




var it = '<div class="shad item"><div class="item-main"><div class="meta-items"><a class="meta-item meta-item-date" href="' + ik + '"><span>' + dt + '</span></a></div><a href="' + ik + '" class="thumbnail item-thumbnail"><span class="item-thumbnail-resize-portrait"><img src="' + rs + '" class="optimized" style="bottom: 0px;"></span></a><div class="item-content"><div class="bg item-labels">'+e+'<a href="/search/label/'+lo+'" id="thk" class="'+lo+'">'+lo+'</a></div></div></div><div class="item-sub"><h3 class="item-title"><a href="' + ik + '">' + ppl + pstt + '</a></h3><loc>' + lo + '</loc><div style="clear:both">'+ikm+'</div></div></div>';




var ti = it.replace(/undefined/g," İzmir");

$("#widget-content-Text1").append(ti);

  
    }
	}
});