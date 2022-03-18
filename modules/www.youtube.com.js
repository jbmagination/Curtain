function module(url, options) {
  this.url = url;
  this.options = options;
  const urlToLoad = this.url;
  
  this.options.youtubeAlt = (this.options.youtubeAlt || "nocookie");
  this.options.invidiousInstance = (this.options.invidiousInstance || "invidious.io");
  this.options.pipedInstance = (this.options.invidiousInstance || "piped.kavin.rocks");
  
  const params = new URLSearchParams(this.url.search)
  if ((this.url.pathname.startsWith('/shorts')) || (this.url.pathname.startsWith('/watch')) || (this.url.pathname.startsWith('/v/'))) {
    if (this.url.pathname.startsWith('/watch')) { 
      videoId = params.get('v');
    } else {
      videoId = this.url.pathname.split('/')[1];
    }
      urlToLoad.pathname = '/embed/' + videoId;
      for (const param of params) {
        if (urlToLoad.search == '') {
          urlToLoad.search = '?' + param.splice(',').join('=')
        } else {
          if (!(param.splice(',')[0] == 'v')) {
            urlToLoad.search = urlToLoad.search + '&' + param.splice(',').join('=');
          }
        }
      }
  }
  switch (this.options.youtubeAlt) {
      case "none":
        urlToLoad.hostname = "www.youtube.com";
        break;
      case false:
        urlToLoad.hostname = "www.youtube.com";
        break;
      case "invidious":
        urlToLoad.hostname = this.options.invidiousInstance;
        break;
      case "piped":
        urlToLoad.hostname = this.options.pipedInstance;
        break;
      default:
        urlToLoad.hostname = "www.youtube-nocookie.com";
  }
  this.options.iframeOptions.autoplay = (this.options.iframeOptions.autoplay || 1);
  return urlToLoad;
}

window.Curtain.module['www.youtube.com'] = module;
window.Curtain.module['youtube.com'] = module;
window.Curtain.module['youtube-nocookie.com'] = module;
window.Curtain.module['www.youtube-nocookie.com'] = module;
