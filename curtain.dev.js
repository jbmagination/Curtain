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
  this.options.httpsUpgrade = (this.options.httpsUpgrade || true);
  this.options.iframeOptions = (this.options.iframeOptions || {"referrerpolicy":"no-referrer"});
  this.options.iframeOptions.referrerpolicy = (this.options.iframeOptions.referrerpolicy || "no-referrer");
    
  // replace all iframes
  const iframes = document.getElementsByTagName('iframe');
  iframes.forEach
}

// @license-end
