"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[179],{426:function(){class t extends HTMLElement{constructor(){super(),this.isIframeLoaded=!1,this.setupDom()}static get observedAttributes(){return["videoid","playlistid"]}connectedCallback(){this.addEventListener("pointerover",t.warmConnections,{once:!0}),this.addEventListener("click",(()=>this.addIframe()))}get videoId(){return encodeURIComponent(this.getAttribute("videoid")||"")}set videoId(t){this.setAttribute("videoid",t)}get playlistId(){return encodeURIComponent(this.getAttribute("playlistid")||"")}set playlistId(t){this.setAttribute("playlistid",t)}get videoTitle(){return this.getAttribute("videotitle")||"Video"}set videoTitle(t){this.setAttribute("videotitle",t)}get videoPlay(){return this.getAttribute("videoPlay")||"Play"}set videoPlay(t){this.setAttribute("videoPlay",t)}get videoStartAt(){return Number(this.getAttribute("videoStartAt")||"0")}set videoStartAt(t){this.setAttribute("videoStartAt",String(t))}get autoLoad(){return this.hasAttribute("autoload")}get noCookie(){return this.hasAttribute("nocookie")}get posterQuality(){return this.getAttribute("posterquality")||"hqdefault"}get posterLoading(){return this.getAttribute("posterloading")||"lazy"}get params(){return`start=${this.videoStartAt}&${this.getAttribute("params")}`}setupDom(){const t=this.attachShadow({mode:"open"});t.innerHTML='\n      <style>\n        :host {\n          contain: content;\n          display: block;\n          position: relative;\n          width: 100%;\n          padding-bottom: calc(100% / (16 / 9));\n          --lyt-animation: all 0.2s cubic-bezier(0, 0, 0.2, 1);\n          --lyt-play-btn-default: #212121;\n          --lyt-play-btn-hover: #f00;\n        }\n\n        #frame, #fallbackPlaceholder, iframe {\n          position: absolute;\n          width: 100%;\n          height: 100%;\n          left: 0;\n        }\n\n        #frame {\n          cursor: pointer;\n        }\n\n        #fallbackPlaceholder {\n          object-fit: cover;\n        }\n\n        #frame::before {\n          content: \'\';\n          display: block;\n          position: absolute;\n          top: 0;\n          background-image: linear-gradient(180deg, #111 -20%, transparent 90%);\n          height: 60px;\n          width: 100%;\n          transition: var(--lyt-animation);\n          z-index: 1;\n        }\n\n        #playButton {\n          width: 70px;\n          height: 46px;\n          background-color: var(--lyt-play-btn-hover);\n          z-index: 1;\n          opacity: 0.8;\n          border-radius: 14%;\n          transition: var(--lyt-animation);\n          border: 0;\n        }\n\n        #frame:hover > #playButton {\n          background-color: var(--lyt-play-btn-hover);\n          opacity: 1;\n        }\n\n        #playButton:before {\n          content: \'\';\n          border-style: solid;\n          border-width: 11px 0 11px 19px;\n          border-color: transparent transparent transparent #fff;\n        }\n\n        #playButton,\n        #playButton:before {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate3d(-50%, -50%, 0);\n        }\n\n        /* Post-click styles */\n        .activated {\n          cursor: unset;\n        }\n\n        #frame.activated::before,\n        #frame.activated > #playButton {\n          display: none;\n        }\n      </style>\n      <div id="frame">\n        <picture>\n          <source id="webpPlaceholder" type="image/webp">\n          <source id="jpegPlaceholder" type="image/jpeg">\n          <img id="fallbackPlaceholder" referrerpolicy="origin">\n        </picture>\n        <button id="playButton"></button>\n      </div>\n    ',this.domRefFrame=t.querySelector("#frame"),this.domRefImg={fallback:t.querySelector("#fallbackPlaceholder"),webp:t.querySelector("#webpPlaceholder"),jpeg:t.querySelector("#jpegPlaceholder")},this.domRefPlayButton=t.querySelector("#playButton")}setupComponent(){this.initImagePlaceholder(),this.domRefPlayButton.setAttribute("aria-label",`${this.videoPlay}: ${this.videoTitle}`),this.setAttribute("title",`${this.videoPlay}: ${this.videoTitle}`),this.autoLoad&&this.initIntersectionObserver()}attributeChangedCallback(t,e,i){switch(t){case"videoid":case"playlistid":e!==i&&(this.setupComponent(),this.domRefFrame.classList.contains("activated")&&(this.domRefFrame.classList.remove("activated"),this.shadowRoot.querySelector("iframe").remove(),this.isIframeLoaded=!1))}}addIframe(t=!1){if(!this.isIframeLoaded){const e=t?0:1,i=this.noCookie?"-nocookie":"";let n;n=this.playlistId?`?listType=playlist&list=${this.playlistId}&`:`${this.videoId}?`;const o=`\n<iframe frameborder="0"\n  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen\n  src="https://www.youtube${i}.com/embed/${n}autoplay=${e}&${this.params}"\n></iframe>`;this.domRefFrame.insertAdjacentHTML("beforeend",o),this.domRefFrame.classList.add("activated"),this.isIframeLoaded=!0,this.dispatchEvent(new CustomEvent("liteYoutubeIframeLoaded",{detail:{videoId:this.videoId},bubbles:!0,cancelable:!0}))}}initImagePlaceholder(){t.addPrefetch("preconnect","https://i.ytimg.com/");const e=`https://i.ytimg.com/vi_webp/${this.videoId}/${this.posterQuality}.webp`,i=`https://i.ytimg.com/vi/${this.videoId}/${this.posterQuality}.jpg`;this.domRefImg.fallback.loading=this.posterLoading,this.domRefImg.webp.srcset=e,this.domRefImg.jpeg.srcset=i,this.domRefImg.fallback.src=i,this.domRefImg.fallback.setAttribute("aria-label",`${this.videoPlay}: ${this.videoTitle}`),this.domRefImg?.fallback?.setAttribute("alt",`${this.videoPlay}: ${this.videoTitle}`)}initIntersectionObserver(){new IntersectionObserver(((e,i)=>{e.forEach((e=>{e.isIntersecting&&!this.isIframeLoaded&&(t.warmConnections(),this.addIframe(!0),i.unobserve(this))}))}),{root:null,rootMargin:"0px",threshold:0}).observe(this)}static addPrefetch(t,e,i){const n=document.createElement("link");n.rel=t,n.href=e,i&&(n.as=i),n.crossOrigin="true",document.head.append(n)}static warmConnections(){t.isPreconnected||(t.addPrefetch("preconnect","https://s.ytimg.com"),t.addPrefetch("preconnect","https://www.youtube.com"),t.addPrefetch("preconnect","https://www.google.com"),t.addPrefetch("preconnect","https://googleads.g.doubleclick.net"),t.addPrefetch("preconnect","https://static.doubleclick.net"),t.isPreconnected=!0)}}t.isPreconnected=!1,customElements.define("lite-youtube",t)}},function(t){var e;e=426,t(t.s=e)}]);