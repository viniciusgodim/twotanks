(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{29:function(t,e,c){},30:function(t,e,c){},36:function(t,e,c){"use strict";c.r(e);var a=c(0),n=c.n(a),i=c(15),s=c.n(i),l=(c(29),c(4)),o=(c(30),c(49)),r=c(51),j=c(52),u=c(2),h=Object(o.a)({root:{width:300}});function f(t){var e=t.setSize,c=(t.size,t.defaultValue),a=t.text,n=t.max,i=t.min,s=t.step,l=h();return Object(u.jsxs)("div",{className:l.root,children:[Object(u.jsx)(r.a,{id:"discrete-slider-small-steps",gutterBottom:!0,children:a}),Object(u.jsx)(j.a,{defaultValue:c,getAriaValueText:function(t){return e(t)},"aria-labelledby":"discrete-slider-small-steps",step:parseFloat(s),marks:!0,min:parseFloat(i),max:parseFloat(n),valueLabelDisplay:"auto"})]})}var d=c(21),b=c.n(d);function x(t){var e=t.left,c=t.top,a=t.diameter,n=t.height;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"verticalLine",style:{left:e,top:c,height:n}}),Object(u.jsx)("div",{className:"verticalLine",style:{left:"calc(".concat(e," + ").concat(a,")"),top:c,height:n}}),Object(u.jsx)("div",{className:"horizontalLine",style:{left:e,width:a,top:"calc(".concat(c," + ").concat(n,")")}})]})}function O(t){var e=t.leftA,c=t.topA,a=t.diameterA,n=t.heightA,i=t.heightDiff,s=t.length,l=t.diameterB,o=t.heightB,r=t.liquidHeightA,j=t.liquidHeightB;function h(){return Object(u.jsx)("div",{className:"verticalLine",style:{left:"calc(".concat(e," + ").concat(a,"/2)"),top:"calc(".concat(c," + ").concat(n,")"),height:"calc((".concat(i,"/2")}})}function f(){return Object(u.jsx)("div",{className:"horizontalLine",style:{left:"calc(".concat(e," + ").concat(a,"/2)"),top:"calc(".concat(c," + ").concat(n," + ").concat(i,"/2)"),width:"calc(".concat(s," - ").concat(i,")")}})}function d(){return Object(u.jsx)("div",{className:"verticalLine",style:{left:"calc(".concat(e," + ").concat(a,"/2 + ").concat(s," - ").concat(i,")"),top:"calc(".concat(c," + ").concat(n," + ").concat(i,"/2)"),height:"calc(".concat(i,"/2)")}})}function b(){return Object(u.jsx)("div",{className:"liquid",style:{left:e,top:"calc(".concat(c," + ").concat(n," - ").concat(r,")"),height:r,width:a}})}function O(){return Object(u.jsx)("div",{className:"liquid",style:{left:"calc(".concat(e," + ").concat(a,"/2 + ").concat(s," - ").concat(i," - ").concat(l,"/2)"),top:"calc(-".concat(j," + ").concat(o," + ").concat(c," +  ").concat(n," + ").concat(i,")"),height:j,width:l}})}return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(x,{left:e,top:c,diameter:a,height:n}),Object(u.jsx)(h,{}),Object(u.jsx)(f,{}),Object(u.jsx)(d,{}),Object(u.jsx)(x,{left:"calc(".concat(e," + ").concat(a,"/2 + ").concat(s," - ").concat(i," - ").concat(l,"/2)"),top:"calc(".concat(c," + ").concat(n," + ").concat(i,")"),diameter:l,height:o}),Object(u.jsx)(b,{}),Object(u.jsx)(O,{})]})}var p=function(){var t=Object(a.useState)(200),e=Object(l.a)(t,2),c=e[0],n=e[1],i=Object(a.useState)(200),s=Object(l.a)(i,2),o=s[0],r=s[1],j=Object(a.useState)(750),h=Object(l.a)(j,2),d=h[0],x=h[1],p=Object(a.useState)(150),m=Object(l.a)(p,2),g=m[0],v=m[1],S=Object(a.useState)(0),z=Object(l.a)(S,2),y=z[0],A=z[1],F=Object(a.useState)(50),w=Object(l.a)(F,2),B=w[0],L=w[1],M=Object(a.useState)(1.5),N=Object(l.a)(M,2),V=N[0],q=N[1],k=.01,D=V*k,H=c*k,I=o*k,P=g*k,C=y*k,E=B*k,T=d*k,J=1,R=2,G=1;return function(t,e){var c=Object(a.useRef)();Object(a.useEffect)((function(){c.current=t}),[t]),Object(a.useEffect)((function(){if(null!==e){var t=setInterval((function(){c.current()}),e);return function(){return clearInterval(t)}}}),[e])}((function(){for(;Math.abs(G)>.01;){var t=1e3*J*D/.001,e=1/Math.pow(-2*Math.log10(10^-1/Math.log(10)*b()(t*Math.log(10)/5.02)),2)*J^2/19.6*T/D;R=Math.sqrt(19.6*(e-P-E)/(D/H^1)),G=J-R,J=R}P-=10*J*Math.pow(D/H,2),C+=10*J*Math.pow(D/I,2),v(P/k),A(C/k)}),500),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{setSize:n,size:c,defaultValue:"200",text:"Draining tak diameter",min:"50",max:"500",step:"10"}),Object(u.jsx)(f,{setSize:r,size:o,defaultValue:"200",text:"Filling tak diameter",min:"50",max:"500",step:"10"}),Object(u.jsx)(f,{setSize:x,size:d,defaultValue:"500",text:"Pipe length",min:"50",max:"750",step:"10"}),Object(u.jsx)(f,{setSize:L,size:B,defaultValue:"50",text:"Height difference",min:"0",max:"500",step:"10"}),Object(u.jsx)(f,{setSize:q,size:V,defaultValue:"1.5",text:"Pipe diameter",min:"0.1",max:"5",step:"0.1"}),Object(u.jsx)(O,{leftA:"350px",topA:"100px",diameterA:c+"px",heightA:"250px",diameterB:o+"px",heightB:"200px",heightDiff:B+"px",length:d+"px",liquidHeightA:g+"px",liquidHeightB:y+"px"})]})},m=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,54)).then((function(e){var c=e.getCLS,a=e.getFID,n=e.getFCP,i=e.getLCP,s=e.getTTFB;c(t),a(t),n(t),i(t),s(t)}))};s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),m()}},[[36,1,2]]]);
//# sourceMappingURL=main.fed058bc.chunk.js.map