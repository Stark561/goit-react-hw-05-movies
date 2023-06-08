"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[232],{373:function(n,e,t){var i=t(791),r=t(184);function c(n){var e=n.text;return(0,r.jsx)("h1",{children:e})}e.Z=(0,i.memo)(c)},232:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var i,r,c,o,a=t(439),s=t(2),l=t(373),d=t(919),u=t.n(d),f=t(791),p=t(689),h=t(87),x=t(390),g=t(168),v=t(686),j=v.Z.div(i||(i=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-top: 16px;\n"]))),m=(0,v.Z)(h.rU)(r||(r=(0,g.Z)(["\n  color: #0c0c36;\n  text-decoration: none;\n  font-weight: 600;\n  border: 1px solid blue;\n  border-radius: 15px;\n  padding: 8px 16px;\n  display: inline-flex;\n  background-color: #fff;\n\n  &:hover{\n    background-color: #ff004cef;\n    border: 1px solid #ff004cef;\n    color: #fff;\n  }\n"]))),k=v.Z.p(c||(c=(0,g.Z)(["\n  text-align: center;\n  margin-top: 40px;\n  font-size: 24px;\n  font-weight: 600;\n"]))),Z=v.Z.p(o||(o=(0,g.Z)(["\n  max-width: 550px;\n  letter-spacing: 0.02em;\n  font-size: 16px;\n  font-weight: 400;\n"]))),_=t(184);function b(){var n,e,t,i=(0,p.UO)().movieId,r=(0,f.useState)({}),c=(0,a.Z)(r,2),o=c[0],d=c[1],g=(0,f.useState)(!1),v=(0,a.Z)(g,2),b=v[0],w=v[1],y=(0,f.useState)(!0),O=(0,a.Z)(y,2),R=O[0],E=O[1],S=(0,p.TH)(),T=(0,f.useRef)((null===(n=S.state)||void 0===n?void 0:n.from)||"/");return(0,f.useEffect)((function(){return(0,x.TP)(i).then((function(n){d(n.data)})).catch((function(){u().Notify.failure("Happened ERROR, TRY AGAIN IN SOME TIME"),w(!0)})).finally((function(){E(!1)})),function(){}}),[i]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(m,{to:T.current,children:"Go back"}),0!==Object.keys(o).length&&(0,_.jsxs)("div",{children:[(0,_.jsxs)(j,{children:[(0,_.jsx)("img",{style:{width:200},src:o.poster_path||o.backdrop_path?"https://image.tmdb.org/t/p/w200".concat(o.poster_path||o.backdrop_path):"https://kartinki.pibig.info/uploads/posts/2023-04/1681549765_kartinki-pibig-info-p-zaglushka-kartinka-arti-krasivo-1.jpg",alt:null!==(e=o.title)&&void 0!==e?e:o.name}),(0,_.jsxs)("div",{children:[(0,_.jsx)(l.Z,{text:null!==(t=o.title)&&void 0!==t?t:o.name}),o.vote_average>0&&(0,_.jsxs)(Z,{children:["User Score: ",Math.round(o.vote_average),"%"]}),o.overview&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("h2",{children:"Overview"}),(0,_.jsx)(Z,{children:o.overview})]}),o.genres[0]&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("h3",{children:"Genres"}),(0,_.jsx)(Z,{children:o.genres.map((function(n){return(0,_.jsxs)("span",{children:[n.name," "]},n.id)}))})]})]})]}),(0,_.jsx)("p",{children:"Additional information"}),(0,_.jsxs)("ul",{children:[(0,_.jsx)("li",{children:(0,_.jsx)(h.OL,{to:"cast",children:"Cast"})}),(0,_.jsx)("li",{children:(0,_.jsx)(h.OL,{to:"reviews",children:"Reviews"})})]}),(0,_.jsx)(f.Suspense,{fallback:(0,_.jsx)(s.Z,{}),children:(0,_.jsx)(p.j3,{})})]}),R&&(0,_.jsx)(s.Z,{}),b&&(0,_.jsx)(k,{children:"ERROR, PAGE NOT FOUND"})]})}var w=(0,f.memo)(b)},390:function(n,e,t){t.d(e,{HI:function(){return d},Hg:function(){return o},TP:function(){return a},tx:function(){return l},zv:function(){return s}});var i=t(243),r="https://api.themoviedb.org/",c="c83afea588f6df33499ccee027813248";function o(){return i.Z.get("".concat(r,"3/trending/all/day?api_key=").concat(c))}function a(n){return i.Z.get("".concat(r,"3/movie/").concat(n,"?api_key=").concat(c))}function s(n){return i.Z.get("".concat(r,"3/movie/").concat(n,"/credits?api_key=").concat(c))}function l(n){return i.Z.get("".concat(r,"3/movie/").concat(n,"/reviews?api_key=").concat(c))}function d(n){return i.Z.get("".concat(r,"3/search/movie?query=").concat(n,"&api_key=").concat(c))}}}]);
//# sourceMappingURL=232.5187cd83.chunk.js.map