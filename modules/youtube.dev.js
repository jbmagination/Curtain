  this.options.youtubeBypass = (this.options.youtubeBypass || "nocookie");
  this.options.invidiousInstance = (this.options.invidiousInstance || "invidious.io");
  this.options.pipedInstance = (this.options.invidiousInstance || "piped.kavin.rocks");
  
  const params = new URLSearchParams(this.url.search)
  
  if (((this.url.hostname == "youtube.com") || (this.url.hostname == "www.youtube.com"))) {
    if ((this.url.pathname.startsWith('/shorts')) || (this.url.pathname.startsWith('/watch')) || (this.url.pathname.startsWith('/v/'))) {
      if (this.url.pathname.startsWith('/watch')) { 
        videoId = params.get('v');
      } else {
        videoId = this.url.pathname.split('/')[1];
      }
      loadedUrl.pathname = '/embed/' + videoId;
      for (const param of params) {
          if (loadedUrl.search == '') {
            loadedUrl.search = '?' + param.splice(',').join('=')
          } else {
            if (!(param.splice(',')[0] == 'v')) {
              loadedUrl.search = loadedUrl.search + '&' + param.splice(',').join('=');
            }
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
    this.options.iframeOptions.autoplay = (this.options.iframeOptions.autoplay || 1);
    loadedUrl.search = loadedUrl.search + 'autoplay=1'
