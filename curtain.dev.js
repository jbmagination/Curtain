// @license magnet:?xt=urn:btih:8e4f440f4c65981c5bf93c76d35135ba5064d8b7&dn=apache-2.0.txt Apache-2.0

/*
The fun stuff! Yay!

Don't actually use this script, it's probably going to be riddled with. 
bugs. Use `curtain.min.js` instead. If it doesn't exist, then I don't 
know how you're here; this repository should be private.
*/

window.Curtain = function Curtain(url, options) {
  this.url = new URL(url);
  const loadedUrl = this.url;
    
  // set default options
  this.options = (options || {});
  this.options.moduleOptions = (this.options.moduleOptions || {});
  this.options.httpsUpgrade = (this.options.httpsUpgrade || true);
  if ((this.url.protocol == 'http:') && (this.options.httpsUpgrade == true)) { loadedUrl.protocol = 'https:'; };
  this.options.iframeOptions = (this.options.iframeOptions || {"referrerpolicy":"no-referrer"});
  this.options.iframeOptions.referrerpolicy = (this.options.iframeOptions.referrerpolicy || "no-referrer");
    
  // replace all iframes
  const iframes = document.getElementsByTagName('iframe');
  iframes.forEach(iframe => {
    // base div
    var curtainDiv = document.createElement("div");
    
    var frameDiv = document.createElement("div");
    // modules
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert('it exists') 
        // bless this being a private repo, this is not good prod!! thank you gh campus
      }
    };
    xhttp.open("GET", ("modules/" + iframe.src.hostname + ".js"), true);
    xhttp.send();
    
    var infoDiv = document.createElement("div");
    infoDiv.innerHTML = "<p style="font-size:25%"><i style="font-size:25%">Heads up: this embed will serve content from another website.</i><a style="font-size:25%" href="#">Learn more...</a></p>
    
    curtainDiv.appendChild(frameDiv);
    curtainDiv.appendChild(infoDiv);
  })
}

// @license-end
