// @license magnet:?xt=urn:btih:8e4f440f4c65981c5bf93c76d35135ba5064d8b7&dn=apache-2.0.txt Apache-2.0

/*
Curtain v1.0.0
*/

window.Curtain = function Curtain(dir, options) {
  // set default options
  this.options = (options || {});
  this.module = {};
  this.options.moduleOptions = (this.options.moduleOptions || {});
  this.options.httpsUpgrade = (this.options.httpsUpgrade || true);
  this.options.iframeOptions = (this.options.iframeOptions || {'referrerpolicy':'no-referrer'});
  this.options.iframeOptions.referrerpolicy = (this.options.iframeOptions.referrerpolicy || 'no-referrer');
    
  // replace all iframes
  const iframes = Array.from(document.getElementsByTagName('iframe'));
  iframes.forEach(iframe => {
    const loadedUrl = iframe.src;
    if ((iframe.src.protocol == 'http:') && (this.options.httpsUpgrade == true)) { loadedUrl.protocol = 'https:'; };
    if (!(window.Curtain.module[iframe.src.hostname]) || false) {
      // load module
      var curtainModule = document.createElement('script');
      curtainModule.type = 'text/javascript';
      if(dir.endsWith('/')) {
        var slash = ''
      } else {
        var slash = '/'
      }
      curtainModule.src = dir + slash + 'modules/' + iframe.src.hostname + '.js';
      document.currentScript.parentNode.insertBefore(curtainModule, document.currentScript.nextSibling);
    }
    // base divs
    var curtainDiv = document.createElement('div');
    var frameDiv = document.createElement('div');
    var infoDiv = document.createElement('div');
    infoDiv.innerHTML = '<p style="font-size:25%"><i style="font-size:25%">Heads up: this embed will serve content from <a href="' + (window.Curtain.module[iframe.src.hostname].hostname || loadedUrl.hostname) + '">' + (window.Curtain.module[iframe.src.hostname].hostname || loadedUrl.hostname) + '</a>, a third-party website.</i><a style="font-size:25%" href="#">Learn more...</a></p>'
   
    curtainDiv.appendChild(frameDiv);
    curtainDiv.appendChild(infoDiv);
    iframe.parentNode.replaceChild(curtainDiv, iframe);
  })
}

// @license-end
