(this.webpackJsonpweb3gl=this.webpackJsonpweb3gl||[]).push([[45],{608:function(e,n,t){"use strict";t.r(n);var r=t(9),a=t.n(r),o=t(618);function i(e,n,t,r,a,o,i){try{var l=e[o](i),s=l.value}catch(c){return void t(c)}l.done?n(s):Promise.resolve(s).then(r,a)}n.default=function(e){var n=e.preferred;return{name:e.label||"Bitpie",iconSrc:e.iconSrc,svg:e.svg||'\n<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.72147 0.714294H30.3108C35.1186 0.714294 39.0161 4.61182 39.0161 9.41965V31.0089C39.0161 35.8168 35.1186 39.7143 30.3108 39.7143H8.72147C3.91363 39.7143 0.0161133 35.8168 0.0161133 31.0089V9.41965C0.0161133 4.61182 3.91363 0.714294 8.72147 0.714294Z" fill="url(#paint0_linear)"/>\n    <path d="M19.6902 35.1875C27.8635 35.1875 34.4893 28.5617 34.4893 20.3884C34.4893 12.2151 27.8635 5.58929 19.6902 5.58929C11.5169 5.58929 4.89111 12.2151 4.89111 20.3884C4.89111 28.5617 11.5169 35.1875 19.6902 35.1875Z" fill="white"/>\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5161 0.714294C30.2857 0.714294 39.0161 9.44474 39.0161 20.2143C39.0161 30.9838 30.2857 39.7143 19.5161 39.7143C8.74656 39.7143 0.0161133 30.9838 0.0161133 20.2143C0.0161133 9.44474 8.74656 0.714294 19.5161 0.714294ZM19.4287 5.34882C11.2187 5.34882 4.5632 12.0043 4.5632 20.2143C4.5632 28.4243 11.2187 35.0798 19.4287 35.0798C27.6386 35.0798 34.2941 28.4243 34.2941 20.2143C34.2941 12.0043 27.6386 5.34882 19.4287 5.34882Z" fill="url(#paint1_linear)"/>\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7479 27.6254C22.3598 28.6852 21.9967 30.0404 20.9369 30.6524C19.877 31.2643 18.5218 30.9011 17.9099 29.8413L17.2448 28.6899L16.0937 29.3546C15.0338 29.9665 13.6786 29.6034 13.0667 28.5435C12.4548 27.4837 12.8179 26.1285 13.8778 25.5166L15.0288 24.8517L13.2562 21.7814L12.105 22.4461C11.0452 23.058 9.68995 22.6949 9.07805 21.635C8.46614 20.5752 8.82927 19.2199 9.88913 18.608L11.0402 17.9432L10.3758 16.7918C9.76387 15.732 10.127 14.3768 11.1869 13.7649C12.2467 13.1529 13.6019 13.5161 14.2138 14.5759L14.8784 15.7271L17.9487 13.9545L17.2843 12.8032C16.6724 11.7434 17.0355 10.3881 18.0954 9.77622C19.1552 9.16431 20.5105 9.52745 21.1224 10.5873L21.7869 11.7385L22.9386 11.0739C23.9984 10.462 25.3536 10.8252 25.9655 11.885C26.5775 12.9449 26.2143 14.3001 25.1545 14.912L24.003 15.5768L25.7756 18.647L26.9272 17.9825C27.987 17.3706 29.3423 17.7337 29.9542 18.7935C30.5661 19.8534 30.203 21.2086 29.1431 21.8205L27.9916 22.4853L28.6565 23.6367C29.2684 24.6966 28.9052 26.0518 27.8454 26.6637C26.7855 27.2756 25.4303 26.9125 24.8184 25.8526L24.1533 24.7013L21.0831 26.4739L21.7479 27.6254ZM18.8671 22.6356L21.9373 20.863L20.1647 17.7928L17.0945 19.5654L18.8671 22.6356Z" fill="url(#paint2_linear)"/>\n    <defs>\n        <linearGradient id="paint0_linear" x1="20.509" y1="39.7143" x2="20.509" y2="0.714294" gradientUnits="userSpaceOnUse">\n            <stop stop-color="#1E3DA0"/>\n            <stop offset="1" stop-color="#3750DE"/>\n        </linearGradient>\n        <linearGradient id="paint1_linear" x1="19.5161" y1="0.714294" x2="19.5161" y2="39.7143" gradientUnits="userSpaceOnUse">\n            <stop stop-color="#1D3BA3" stop-opacity="0"/>\n            <stop offset="1" stop-color="#173793" stop-opacity="0.652938"/>\n        </linearGradient>\n        <linearGradient id="paint2_linear" x1="24.3911" y1="28.658" x2="14.6411" y2="11.7705" gradientUnits="userSpaceOnUse">\n            <stop stop-color="#1E3DA0"/>\n            <stop offset="1" stop-color="#3750DE"/>\n        </linearGradient>\n    </defs>\n</svg>\n',wallet:function(){var e,n=(e=a.a.mark((function e(n){var t,r,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.getProviderName,r=n.createModernProviderInterface,o=n.createLegacyProviderInterface,i=window.ethereum||window.web3&&window.web3.currentProvider,e.abrupt("return",{provider:i,interface:i&&"Bitpie"===t(i)?"function"===typeof i.enable?r(i):o(i):null});case 3:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function l(e){i(o,r,a,l,s,"next",e)}function s(e){i(o,r,a,l,s,"throw",e)}l(void 0)}))});return function(e){return n.apply(this,arguments)}}(),type:"injected",link:"https://bitpiehk.com",installMessage:o.b,mobile:!0,preferred:n}}},618:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return a}));var r=function(e){var n=e.currentWallet,t=e.selectedWallet;return n?'\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    We have detected that you already have\n    <b>'.concat(n,"</b>\n    installed. If you would prefer to use\n    <b>").concat(t,'</b>\n    instead, then click below to install.\n    </p>\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    <b>Tip:</b>\n    If you already have ').concat(t,' installed, check your\n    browser extension settings to make sure that you have it enabled\n    and that you have disabled any other browser extension wallets.\n    <span\n      class="bn-onboard-clickable"\n      style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;"\n      onclick="window.location.reload();">\n      Then refresh the page.\n    </span>\n    </p>\n    '):'\n    <p style="font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;">\n    You\'ll need to install <b>'.concat(t,'</b> to continue. Once you have it installed, go ahead and\n    <span\n    class="bn-onboard-clickable"\n      style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;"\n      onclick={window.location.reload();}>\n      refresh the page.\n    </span>\n    ').concat("Opera"===t?'<br><br><i>Hint: If you already have Opera installed, make sure that your web3 wallet is <a style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;" class="bn-onboard-clickable" href="https://help.opera.com/en/touch/crypto-wallet/" rel="noreferrer noopener" target="_blank">enabled</a></i>':"","\n    </p>\n    ")},a=function(e){var n=e.selectedWallet;return'\n  <p style="font-size: 0.889rem;">\n  Tap the button below to <b>Open '.concat(n,"</b>. Please access this site on ").concat(n,"'s in-app browser for a seamless experience.\n  </p>\n  ")}}}]);
