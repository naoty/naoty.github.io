(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{136:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return s});var a=n(7),r=(n(0),n(140)),o=n.n(r),i=n(144),c=n(145),u=n(154),l=n(147);e.default=function(t){var e=t.data;return Object(a.b)(i.a,null,Object(a.b)(c.a,{title:"Naoto Kaneko",description:"Naoto Kaneko's homepage",url:e.site.siteMetadata.rootURL,imageURL:e.site.siteMetadata.rootURL+"/icons/256x256.png"}),Object(a.b)(l.a,null,"Naoto Kaneko"),Object(a.b)(u.a,null,Object(a.b)("li",null,Object(a.b)(o.a,{to:"/posts/"},"Posts")),Object(a.b)("li",null,Object(a.b)("a",{href:"https://github.com/naoty"},"GitHub")),Object(a.b)("li",null,Object(a.b)("a",{href:"https://twitter.com/naoty_k"},"Twitter"))))};var s="3806996707"},142:function(t,e,n){"use strict";var a=n(150),r=["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue"],o=["YuGothic","Yu Gothic","Hiragino Kaku Gothic ProN","Meiryo"],i=new(n.n(a).a)({baseFontSize:"16px",baseLineHeight:2,headerFontFamily:[].concat(r,o,["sans-serif"]),bodyFontFamily:[].concat(r,o,["sans-serif"]),googleFonts:[{name:"Source Code Pro",styles:["Regular"]}],overrideStyles:function(){return{"h1,h2,h3,h4,h5,h6":{lineHeight:1.5,fontFeatureSettings:"'palt' 1"},code:{fontFamily:"Source Code Pro, monospace"},"@media (min-width: 35rem)":{html:{fontSize:"18px"},body:{backgroundColor:"#ddd"}}}}});e.a=i},143:function(t,e,n){var a;t.exports=(a=n(146))&&a.default||a},144:function(t,e,n){"use strict";var a=n(141),r=n(7),o=(n(0),n(142)),i=Object(a.a)("main",{target:"elqsiz00"})("padding:",o.a.rhythm(.5),";background-color:#fff;@media (min-width:35rem){width:35rem;margin:",o.a.rhythm(1)," auto;padding:",o.a.rhythm(1),";box-shadow:0 5px 5px rgba(0,0,0,.1),3px 0 5px rgba(0,0,0,.1),-3px 0 5px rgba(0,0,0,.1);}& *:last-child{margin-bottom:0;}");e.a=function(t){var e=t.children;return Object(r.b)(i,null,e)}},145:function(t,e,n){"use strict";var a=n(7),r=(n(0),n(151)),o=n.n(r);e.a=function(t){var e=t.title,n=t.description,r=t.url,i=t.imageURL;return Object(a.b)(o.a,null,Object(a.b)("title",null,e),null!==n&&Object(a.b)("meta",{name:"description",content:n}),Object(a.b)("meta",{name:"theme-color",content:"white"}),Object(a.b)("meta",{property:"og:type",content:"profile"}),Object(a.b)("meta",{property:"og:title",content:e}),null!==n&&Object(a.b)("meta",{property:"og:description",content:n}),Object(a.b)("meta",{property:"og:url",content:r}),Object(a.b)("meta",{property:"og:image",content:i}),Object(a.b)("meta",{property:"twitter:card",content:"summary"}),Object(a.b)("meta",{property:"twitter:site",content:"@naoty_k"}),Object(a.b)("meta",{property:"twitter:title",content:e}),null!==n&&Object(a.b)("meta",{property:"twitter:description",content:n}),Object(a.b)("meta",{property:"twitter:image",content:i}),Object(a.b)("link",{rel:"icon",type:"image/png",href:"/icons/favicon.png"}),Object(a.b)("link",{rel:"apple-touch-icon",href:"/icons/apple-touch-icon.png"}),Object(a.b)("link",{rel:"canonical",href:r}),Object(a.b)("link",{rel:"manifest",href:"/manifest.json"}))}},146:function(t,e,n){"use strict";n.r(e);n(49);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(51),u=n(2),l=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=l},147:function(t,e,n){"use strict";var a=n(141),r=n(142);e.a=Object(a.a)("h1",{target:"ej79ll10"})("margin-bottom:",r.a.rhythm(.5),";padding-bottom:",r.a.rhythm(.25),";border-bottom:1px solid #333;")},153:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return h}),n.d(e,"StaticQueryContext",function(){return d}),n.d(e,"StaticQuery",function(){return m});var a=n(7),r=n(0),o=n.n(r),i=n(4),c=n.n(i),u=n(140),l=n.n(u);n.d(e,"Link",function(){return l.a}),n.d(e,"withPrefix",function(){return u.withPrefix}),n.d(e,"navigate",function(){return u.navigate}),n.d(e,"push",function(){return u.push}),n.d(e,"replace",function(){return u.replace}),n.d(e,"navigateTo",function(){return u.navigateTo});var s=n(143),b=n.n(s);n.d(e,"PageRenderer",function(){return b.a});var p=n(31);n.d(e,"parsePath",function(){return p.a});var d=o.a.createContext({}),m=function(t){return Object(a.b)(d.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(a.b)("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},154:function(t,e,n){"use strict";var a=n(141),r=n(7),o=(n(0),n(142)),i=Object(a.a)("ul",{target:"e1b7648e0"})("margin-left:2rem;& > li{margin-bottom:",o.a.rhythm(.25),";}");e.a=function(t){var e=t.children;return Object(r.b)(i,null,e)}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-0ac7be9b98e3f2a80269.js.map