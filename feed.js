   

    function init() {
	var count = 1;
	var i=0
      var feed = new google.feeds.Feed("http://www.huffingtonpost.com/feeds/index.xml");
      feed.setNumEntries(20);
      feed.load(function(result) {
	   var newhtml = "";
		var container = document.getElementById("feed");
         for (i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            newhtml = "<h5>" + count++ + ". <a href='" + entry.link + "'>" + entry.title + "</a></h5>";
            var newdiv = document.createElement("div");
            newdiv.innerHTML = newhtml;
            container.appendChild(newdiv);            
          }
          document.write(newhtml);
        
      });
    }
	google.load("feeds", "1");
    google.setOnLoadCallback(init);

