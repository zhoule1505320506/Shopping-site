(function(window){var svgSprite='<svg><symbol id="icon-iconfont-iconfangdajing" viewBox="0 0 1024 1024"><path d="M933.438456 818.818929l-68.934243-72.165536-3.231292-3.231292c121.40428-164.18044 105.093946-400.526415-42.622289-548.24265C739.86864 116.39746 631.543402 70.390007 519.986871 70.390007s-220.035641 42.622288-298.817633 124.635573c-164.18044 164.18044-164.18044 433.300954 0 600.712687 78.781992 78.781992 187.10723 124.789444 298.663762 124.789444 91.861033 0 177.259481-29.543247 249.425016-82.013284l3.231293 3.231292 72.165535 72.165536c13.079042 13.079042 29.543247 19.695498 46.007452 19.695498 16.464205 0 32.77454-6.616456 46.007453-19.695498 23.080662-26.158083 23.080662-68.934243-3.231293-95.092326z m-669.64693-72.319407c-137.868485-137.868485-137.868485-364.366712 0-505.46649 68.934243-68.934243 157.563983-105.093946 252.810181-105.093946s183.875938 36.159703 252.81018 105.093946c137.868485 137.868485 137.868485 364.366712 0 505.46649-68.934243 68.934243-157.563983 105.093946-252.81018 105.093946s-183.875938-36.159703-252.810181-105.093946z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)