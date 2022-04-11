// @license magnet:?xt=urn:btih:8e4f440f4c65981c5bf93c76d35135ba5064d8b7&dn=apache-2.0.txt Apache-2.0

/*
Curtain v1.0.0
*/

window.Curtain = function Curtain(dir, options) {
  // set default options
  this.options = (options || {});
  this.module = {};
  window.Curtain.module = this.module;
  this.options.moduleOptions = (this.options.moduleOptions || {});
  this.options.httpsUpgrade = (this.options.httpsUpgrade || true);
  this.options.iframeOptions = (this.options.iframeOptions || {'referrerpolicy':'no-referrer'});
  this.options.iframeOptions.referrerpolicy = (this.options.iframeOptions.referrerpolicy || 'no-referrer');
    
  // replace all iframes
  const iframes = Array.from(document.getElementsByTagName('iframe'));
  iframes.forEach(iframe => {
    const loadedUrl = new URL(iframe.src);
    if ((iframe.src.protocol == 'http:') && (this.options.httpsUpgrade == true)) { loadedUrl.protocol = 'https:'; };
    if (!(window.Curtain.module[new URL(iframe.src).host]) || false) {
      // load module
      var curtainModule = document.createElement('script');
      curtainModule.type = 'text/javascript';
      if(dir.endsWith('/')) {
        var slash = ''
      } else {
        var slash = '/'
      }
      curtainModule.src = dir + slash + 'modules/' + new URL(iframe.src).host + '.js';
      document.currentScript.parentNode.insertBefore(curtainModule, document.currentScript.nextSibling);
    }
    // base divs
    var curtainDiv = document.createElement('div');
    var frameDiv = document.createElement('div');
    var infoDiv = document.createElement('div');
    infoDiv.innerHTML = '<p style="font-size:50%"><i style="font-size:50%">Heads up: this embed will serve content from <a href="' + (window.Curtain.module[new URL(iframe.src).host].protocol || loadedUrl.protocol) + (window.Curtain.module[new URL(iframe.src).host].protocol || loadedUrl.host) + '" rel="noopener noreferrer nofollow" target="_blank">' + (window.Curtain.module[new URL(iframe.src).host].host || loadedUrl.host) + '</a>, a third-party website.</i> <a style="font-size:50%" href="#">Learn more...</a></p>'
   
    curtainDiv.appendChild(frameDiv);
    curtainDiv.appendChild(infoDiv);
    iframe.parentNode.replaceChild(curtainDiv, iframe);
  })
}

// @license-end
