(this["webpackJsonpconnect-four"]=this["webpackJsonpconnect-four"]||[]).push([[0],{16:function(e,n,t){},17:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t(2),i=t.n(o),c=(t(16),t(3)),d=t(4),f=t(7),u=t(6),a=(t.p,t(17),t(5));var p=t(1),s=function(e){Object(f.a)(t,e);var n=Object(u.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"handleClick",value:function(){console.log("Clicked on column ".concat(this.props.x)),this.props.sendTileDrop(this.props.x)}},{key:"render",value:function(){var e=this,n=this.props.board,t=this.props.x,r=this.props.y,o="cell";return void 0!=n[t][r]&&("red"===n[t][r]?o+=" p2":o+=" p1"),Object(p.jsx)("button",{className:o,onClick:function(){return e.handleClick()},children:Object(p.jsxs)("p",{children:[this.props.x,", ",this.props.y]})})}}]),t}(r.Component),l=Object(a.b)((function(e){return{board:e.board}}),(function(e){return{sendTileDrop:function(n){return e(function(e){return{type:"DROP_TILE",payload:e}}(n))}}}))(s),y=function(e){Object(f.a)(t,e);var n=Object(u.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){for(var e=[],n=5;n>=0;n--){for(var t=0;t<7;t++)e.push(Object(p.jsx)(l,{x:t,y:n},t));e.push(Object(p.jsx)("div",{className:"row",children:[]},n))}return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("header",{className:"App-header",children:Object(p.jsx)("h1",{className:"App-title",children:"Connect Four"})}),e]})}}]),t}(r.Component),h=y,b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),r(e),o(e),i(e),c(e)}))},j=t(11),O=!1;var v=Object(j.a)((function(e,n){if(!1===O){if("DROP_TILE"===n.type){console.log("dropping onto col "+n.payload);var t=e.current,r=e.board[n.payload].concat(t),o=e.board.slice();return o[n.payload]=r,function(e){for(var n=0;n<6;n++)"undefined"!==typeof e[0][n]&&"undefined"!==typeof e[1][n]&&"undefined"!==typeof e[2][n]&&"undefined"!==typeof e[3][n]&&e[0][n]===e[1][n]&&e[0][n]===e[2][n]&&e[0][n]===e[3][n]&&(alert(e[0][n]+" wins!"),O=!0),"undefined"!==typeof e[1][n]&&"undefined"!==typeof e[2][n]&&"undefined"!==typeof e[3][n]&&"undefined"!==typeof e[4][n]&&e[1][n]===e[2][n]&&e[1][n]===e[3][n]&&e[1][n]===e[4][n]&&(alert(e[1][n]+" wins!"),O=!0),"undefined"!==typeof e[2][n]&&"undefined"!==typeof e[3][n]&&"undefined"!==typeof e[4][n]&&"undefined"!==typeof e[5][n]&&e[2][n]===e[3][n]&&e[2][n]===e[4][n]&&e[2][n]===e[5][n]&&(alert(e[2][n]+" wins!"),O=!0),"undefined"!==typeof e[3][n]&&"undefined"!==typeof e[4][n]&&"undefined"!==typeof e[5][n]&&"undefined"!==typeof e[6][n]&&e[3][n]===e[4][n]&&e[3][n]===e[5][n]&&e[3][n]===e[6][n]&&(alert(e[3][n]+" wins!"),O=!0);for(var t=0;t<6;t++)for(var r=0;r<7;r++)"undefined"!==typeof e[r][t]&&"undefined"!==typeof e[r][t+1]&&"undefined"!==typeof e[r][t+2]&&"undefined"!==typeof e[r][t+3]&&e[r][t]===e[r][t+1]&&e[r][t]===e[r][t+2]&&e[r][t]===e[r][t+3]&&(alert(e[r][t]+" wins!"),O=!0)}(o),function(e){for(var n=0,t=0;t<6;t++)for(var r=0;r<7;r++)"undefined"!==typeof e[r][t]&&(console.log(e[r][t]),n++);42===n&&(alert("Tie Game!"),O=!0)}(o),{current:"red"===e.current?"yellow":"red",board:o}}return e}return alert("GAME OVER!!!!!!"),e}),{current:"red",board:[[],[],[],[],[],[],[]]});i.a.render(Object(p.jsx)(a.a,{store:v,children:Object(p.jsx)(h,{})}),document.getElementById("root")),b()}},[[25,1,2]]]);
//# sourceMappingURL=main.63b75bed.chunk.js.map