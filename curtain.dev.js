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
    this.options = options;
    
    if (this.url.hostname == 'youtube.com') {
      // default youtube-nocookie
      // piped / invidious (this.options)
    }
  }
}

// @license-end
