// @license magnet:?xt=urn:btih:8e4f440f4c65981c5bf93c76d35135ba5064d8b7&dn=apache-2.0.txt Apache-2.0

/*
The fun stuff! Yay!

Don't actually use this script, it's probably going to be riddled with. 
bugs. Use `curtain.min.js` instead. If it doesn't exist, then I don't 
know how you're here; this repository should be private.
*/

function Curtain(url, options) {
  this.url = new URL(url);
  const loadedUrl = this.url;
    
  // set default options
  this.options.httpsUpgrade = options.httpsUpgrade || true;
  this.options.iframeOptions = options.iframeOptions || {"referrerpolicy":"no-referrer"};
  this.options.iframeOptions.referrerpolicy = options.iframeOptions.referrerpolicy || "no-referrer";
  this.options.youtubeBypass = options.youtubeBypass || "nocookie";
  this.options.invidiousInstance = options.invidiousInstance || "invidious.io";
  this.options.pipedInstance = options.invidiousInstance || "piped.kavin.rocks";
    
  if ((this.url.protocol == 'http:') && (this.options.httpsUpgrade == true)) { loadedUrl.protocol = 'https:'; };
  if (((this.url.hostname == "youtube.com") || (this.url.hostname == "www.youtube.com"))) {
    if ((this.url.pathname.startsWith('/shorts')) || (this.url.pathname.startsWith('/watch')) || (this.url.pathname.startsWith('/v/')) {
      const params = new URLSearchParams(this.url.search)
      if (this.url.pathname.startsWith('/watch')) { 
        videoId = params.get('v')
      } else {
        videoId = this.url.pathname.split('/')[1]
      }
      loadedUrl.pathname = '/embed/' + videoId
      for (const param of params) {
          if (param.split(',')[0] == 'v') { return }
          if (loadedUrl.search == '') {
            loadedUrl.search = '?' + param.split(',').join('=')
          } else {
            loadedUrl.search = loadedUrl.search + '&' + param.split(',').join('=')
          }
        }
    }
    switch (this.options.youtubeBypass) {
      case "none":
        loadedUrl.hostname = this.url.hostname;
        break;
      case false:
        loadedUrl.hostname = this.url.hostname;
        break;
      case "invidious":
        loadedUrl.hostname = this.options.invidiousInstance;
        break;
      case "piped":
        loadedUrl.hostname = this.options.pipedInstance;
        break;
      default:
        loadedUrl.hostname = "youtube-nocookie.com";
    }
    this.options.iframeOptions.autoplay = options.iframeOptions.autoplay || 1;
    loadedUrl.search = loadedUrl.search + '&autoplay=1'
  }
  alert(loadedUrl)
}

window.Curtain = Curtain;

// @license-end
