"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{247:function(t,n,e){e.r(n);var c,i=e(168),a=e(439),o=e(919),r=e.n(o),u=e(791),s=e(390),f=e(689),p=e(184);function h(){var t=(0,f.UO)().movieId,n=(0,u.useState)([]),e=(0,a.Z)(n,2),o=e[0],h=e[1],d=(0,u.useState)(!1),m=(0,a.Z)(d,2),g=m[0],l=m[1];return(0,u.useEffect)((function(){(0,s.zv)(t).then((function(t){t.data.cast[0]||l(!0),h(t.data.cast)})).catch((function(){r().Notify.failure("Happened ERROR, TRY AGAIN IN SOME TIME"),l(!0)}))}),[t]),(0,p.jsxs)(p.Fragment,{children:[o[0]&&(0,p.jsx)("ul",{children:o.map((function(t){return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{style:{width:200},src:t.profile_path?"https://image.tmdb.org/t/p/w200".concat(t.profile_path):"https://kartinki.pibig.info/uploads/posts/2023-04/1681549765_kartinki-pibig-info-p-zaglushka-kartinka-arti-krasivo-1.jpg"(c||(c=(0,i.Z)(["http://dummyimage.com/150x60/99cccc.gif&text=The+image!"]))),alt:t.name}),(0,p.jsx)("p",{children:t.name}),(0,p.jsx)("p",{children:t.character})]},t.id)}))}),g&&(0,p.jsx)("p",{children:"Cast not found!"})]})}n.default=(0,u.memo)(h)},390:function(t,n,e){e.d(n,{HI:function(){return f},Hg:function(){return o},TP:function(){return r},tx:function(){return s},zv:function(){return u}});var c=e(243),i="https://api.themoviedb.org/",a="c83afea588f6df33499ccee027813248";function o(){return c.Z.get("".concat(i,"3/trending/all/day?api_key=").concat(a))}function r(t){return c.Z.get("".concat(i,"3/movie/").concat(t,"?api_key=").concat(a))}function u(t){return c.Z.get("".concat(i,"3/movie/").concat(t,"/credits?api_key=").concat(a))}function s(t){return c.Z.get("".concat(i,"3/movie/").concat(t,"/reviews?api_key=").concat(a))}function f(t){return c.Z.get("".concat(i,"3/search/movie?query=").concat(t,"&api_key=").concat(a))}}}]);
//# sourceMappingURL=247.cffeda4d.chunk.js.map