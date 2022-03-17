// @license magnet:?xt=urn:btih:8e4f440f4c65981c5bf93c76d35135ba5064d8b7&dn=apache-2.0.txt Apache-2.0

/*
The fun stuff! Yay!

Don't actually use this script, it's probably going to be riddled with. 
bugs. Use `curtain.min.js` instead. If it doesn't exist, then I don't 
know how you're here; this repository should be private.
*/

class Curtain {
  constructor(url, options) {
    this.url = new URL(url);
    const loadedUrl = this.url;
    
    // set default options
    this.options.iframeOptions = options.iframeOptions || {"referrerpolicy":"no-referrer"};
    this.options.iframeOptions.referrerpolicy = options.iframeOptions.referrerpolicy || "no-referrer";
    this.options.youtubeBypass = options.youtubeBypass || true;
    this.options.youtubeBypassMethod = options.youtubeBypassMethod || "nocookie";
    
    if (((this.url.hostname == "youtube.com") || (this.url.hostname == "www.youtube.com")) && (options.youtubeBypass == true)) {
      switch (options.youtubeBypassMethod) {
        case "nocookie":
          loadedUrl.hostname = "youtube-nocookie.com";
          break;
        case "invidious":
          // will allow for multiple instances later
          loadedUrl.hostname = "invidious.snopyta.org";
          break;
        case "piped":
          // will allow for multiple instances later
          loadedUrl.hostname = "piped.kavin.rocks";
      }
    }
  }
}

// @license-end
