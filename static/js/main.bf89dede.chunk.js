(this.webpackJsonpuntitled5=this.webpackJsonpuntitled5||[]).push([[0],{13:function(e,t,n){},23:function(e,t,n){e.exports=n(31)},28:function(e,t,n){},29:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(14),o=n.n(l),i=(n(28),n(15)),c=n(16),u=n(19),s=n(21),m=(n(29),n(30),n(6)),d=n(17),g=n(18),f=n(22),v=n(20),p=n(1),E=n(2),h=n(7),x=n(4),y=n(8),b=n.n(y),C=n(5),I=n.n(C);n(13);var w=function(e){try{document.getElementById("patient").textContent="Patient ID : "+e.data.string("x00100020"),document.getElementById("topleft").textContent="Patient Name : "+e.data.string("x00100010")+"\nPatient Sex : "+e.data.string("x00100040"),document.getElementById("topright").textContent="Modality : "+e.data.string("x00080060"),document.getElementById("modality").textContent="Modality : "+e.data.string("x00080060"),document.getElementById("instanceUID").textContent="Instance UID : "+e.data.string("x00080018")}catch(t){alert("parsing error")}};var T=function(e){if("CT"===e.data.string("x00080060")){var t=e.data.string("x00200032").split("\\"),n=10*parseFloat(t[0])/10,a=10*parseFloat(t[1])/10,r=10*parseFloat(t[2])/10,l=e.data.string("x00200037"),o=(l=l.toString()).split("\\"),i=10*parseFloat(o[0])/10,c=10*parseFloat(o[1])/10,u=10*parseFloat(o[2])/10,s=10*parseFloat(o[3])/10,m=10*parseFloat(o[4])/10,d=10*parseFloat(o[5])/10,g=e.data.string("x00280030"),f=(g=g.toString()).split("\\"),v=parseFloat(10*f[0])/10,E=parseFloat(10*f[1])/10,h=document.getElementById("dicomImage");return h.addEventListener("mousemove",(function(e){var t=p.pageToPixel(h,e.pageX,e.pageY),l=i*v*t.x+s*E*t.y+n,o=c*v*t.x+m*E*t.y+a,g=u*v*t.x+d*E*t.y+r;l=Math.floor(10*l)/10,o=Math.floor(10*o)/10,g=Math.floor(10*g)/10,document.getElementById("voxelCoords").textContent="Px = "+l+", Py = "+o+", Pz = "+g})),h.addEventListener("dblclick",(function(e){var t=p.pageToPixel(h,e.pageX,e.pageY),l=i*v*t.x+s*E*t.y+n,o=c*v*t.x+m*E*t.y+a,g=u*v*t.x+d*E*t.y+r;l=Math.floor(10*l)/10,o=Math.floor(10*o)/10,g=Math.floor(10*g)/10,document.getElementById("voxelValue").textContent="Px = "+l+", Py = "+o+", Pz = "+g})),[n,a,v,E]}alert("NOT CT IMAGES")};var k=n(3),M=n.n(k);var B=function(e){e.forEach((function(e){var t=document.getElementById("ul"),n=document.createElement("li"),a=document.createElement("input");a.type="checkbox",a.value=e.x30060022,a.name="roi",n.append(a);var r=e.x30060026;n.append(document.createTextNode(r)),t.append(n)}))};var R,O=function(e,t){for(var n=t.split("\\"),a=[],r=[],l=[],o=0;o<n.length;o++)o%3===0?a[o]=n[o]:o%3===1?r[o]=n[o]:o%3===2&&(l[o]=n[o]);for(var i=T(e),c=i[0],u=i[1],s=i[2],m=i[3],d=[],g=[],f=0;f<n.length;f++)f%3===0?d[f]=Math.floor((a[f]-c)/s*10)/10:f%3===1&&(g[f]=Math.floor((r[f]-u)/m*10)/10);return[d,g]},P=function(e){var t=Number(e).toString(16);return t.length<2&&(t="0"+t),t},V=function(e){var t=(e=e.split("\\"))[0],n=e[1],a=e[2];return"#"+P(t)+P(n)+P(a)};function N(e){return/^[\x00-\x7F]*$/.test(e)}function F(e){M()("#status").removeClass("alert-warning alert-success alert-danger").addClass("alert-info"),M()("#warnings").empty();var t=new FileReader;return t.onload=function(e){var n=t.result,a=new Uint8Array(n),r=a.length/1024,l=r/1024;l>1?l.toFixed(3):r.toFixed(0);setTimeout((function(){try{var e=(new Date).getTime();R=I.a.parseDicom(a);L(R),A(R,[],[]),function(e){for(var t=[],n=[],a=0;a<e.length;a++)"x30060022"==e[a]?t[a]=e[a+1]:"x30060026"==e[a]&&(n[a]=e[a+1]);t=t.filter((function(e){return null!==e&&void 0!==e&&""!==e})),n=n.filter((function(e){return null!==e&&void 0!==e&&""!==e})),M()((function(){for(var e=new Array,a=0;a<n.length;a++){var r=new Object;r.x30060022=t[a],r.x30060026=n[a],e.push(r)}B(e)}))}(D),function(e){for(var t=[],n=[],a=[],r=[],l=0;l<e.length;l++){var o=0;if("x00081155"===e[l+2]){if(t[l]=e[l+3],n[l]=e[l+5],"x30060084"===e[l+6])a[l]=e[l+7];else if("x00081155"===e[l+6])for(o=l+6;o<e.length;o++)if("x30060084"===e[o+2]){a[l]=e[o+3];break}if("x3006002a"===e[l])r[l]=e[l+1];else if("x30060050"===e[l])for(o=l;o>0;o--)if("x3006002a"===e[o]){r[l]=e[o+1];break}}}r=r.filter((function(e){return null!==e&&void 0!==e&&""!==e})),t=t.filter((function(e){return null!==e&&void 0!==e&&""!==e})),n=n.filter((function(e){return null!==e&&void 0!==e&&""!==e})),a=a.filter((function(e){return null!==e&&void 0!==e&&""!==e})),M()((function(){for(var l=0;l<e.length;l++){var o={};o.x30060084=a[l],o.x00081155=t[l],o.x30060050=n[l],o.x3006002a=r[l],W.push(o)}}))}(S),M()(document).ready((function(){var e=document.getElementsByName("roi");if(e[0].addEventListener)for(var t=0;t<e.length;t++)e[t].addEventListener("change",G,!1);else if(e[0].attachEvent)for(var n=0;n<e.length;n++)e[n].attachEvent("onchange",G)}));(new Date).getTime();if(R.warnings.length>0)M()("#status1").removeClass("alert-success alert-info alert-danger").addClass("alert-warning"),R.warnings.forEach((function(e){M()("#warnings").append("<li>"+e+"</li>")}));else{R.elements.x7fe00010;M()("#status1").removeClass("alert-warning alert-info alert-danger").addClass("alert-success")}}catch(t){if(t.exception&&t.exception,M()("#status").removeClass("alert-success alert-info alert-warning").addClass("alert-danger"),t.output1||t.output3);else if(t.dataSet){L(t.dataSet),A(t.dataSet,[],[])}}}),10)},t.readAsArrayBuffer(e),R}var D=[];function L(e){try{var t=function(t){var n=e.elements[t];if("x30060020"===n.tag||"x30060022"===n.tag||"x30060026"===n.tag){n.tag;n.hadUndefinedLength&&" <strong>(-1)</strong>","; ",n.vr&&" VR="+n.vr+"; ";if(n.items)n.items.forEach((function(e){L(e.dataSet)}));else if(n.fragments){var a=0;n.fragments.forEach((function(e){var t;n.basicOffsetTable&&(t=n.basicOffsetTable[a]);a++,e.offset;e.length}))}else{2===n.length?" ("+e.uint16(t)+")":4===n.length&&" ("+e.uint32(t)+")";var r=e.string(t);N(r)?void 0!==r&&'"'+r+'"':2!==n.length&&4!==n.length&&("#C8C8C8","<i>binary data</i>"),0===n.length&&"#C8C8C8",D.push(n.tag,e.string(t))}}};for(var n in e.elements)t(n)}catch(a){throw{exception:a}}}var S=[];function A(e,t,n){try{var a=function(a){var r=e.elements[a];if("x30060039"===r.tag||"x3006002a"===r.tag||"x30060040"===r.tag||"x30060050"===r.tag||"x30060016"===r.tag||"x00081155"===r.tag||"x30060084"===r.tag){r.tag;r.hadUndefinedLength&&" <strong>(-1)</strong>","; ",r.vr&&" VR="+r.vr+"; ";if(r.items){r.items.forEach((function(e){A(e.dataSet,t,n)}))}else if(r.fragments){var l=0;r.fragments.forEach((function(e){var t;r.basicOffsetTable&&(t=r.basicOffsetTable[l]);l++,e.offset;e.length}))}else{2===r.length?" ("+e.uint16(a)+")":4===r.length&&" ("+e.uint32(a)+")";var o=e.string(a);N(o)?void 0!==o&&'"'+o+'"':2!==r.length&&4!==r.length&&("#C8C8C8","<i>binary data</i>"),0===r.length&&"#C8C8C8",S.push(r.tag,e.string(a))}}};for(var r in e.elements)a(r)}catch(l){throw{exception:l,output3:n}}return S}var W=new Array;var j,U,z,Y,X={ROIs:[]},H=X.ROIs;function J(e){var t;t=e.data.string("x00080018");for(var n=0;n<H.length;n++)for(var a=0;a<W.length;a++)W[a].x30060084===H[n]&&W[a].x00081155===t&&(j=W[a].x30060050,U=W[a].x3006002a,Z(e,j,U));for(var r=0;r<H.length;r++)for(var l=0;l<W.length;l++)W[l].x30060084!==H[r]&&W[l].x00081155===t&&(j=W[l].x30060050,U=W[l].x3006002a,q(e,j))}function Z(e,t,n){var a=O(e,t),r=a[0],l=a[1];z=document.getElementById("myCanvas"),(Y=z.getContext("2d")).beginPath(),Y.moveTo(r[0],l[1]);for(var o=1;o<=3*r.length;o++)o%3===0&&Y.lineTo(r[o],l[o+1]);return Y.closePath(),Y.fillStyle=V(n),Y.globalAlpha=.6,Y.stroke(),Y.fill(),z}function $(){z=document.getElementById("myCanvas"),(Y=z.getContext("2d")).clearRect(0,0,512,512)}function q(e,t){var n=O(e,t),a=n[0],r=n[1];z=document.getElementById("myCanvas"),(Y=z.getContext("2d")).beginPath(),Y.moveTo(a[0],r[1]);for(var l=1;l<=3*a.length;l++)l%3===0&&Y.lineTo(a[l],r[l+1]);Y.closePath(),Y.globalAlpha=0,Y.fill()}function G(e){if(e.target.checked)X.ROIs.push(e.target.value);else{var t=X.ROIs.indexOf(e.target.value);-1!==t&&X.ROIs.splice(t,1)}}x.external.cornerstone=p,x.external.dicomParser=I.a,E.external.cornerstone=p,E.external.Hammer=b.a,E.external.cornerstoneMath=h,E.init();var K,Q=0;function _(e,t){var n=document.getElementById("dicomImage");return p.enable(n),Q=t,p.loadImage(e[Q]).then((function(e){var t=p.getDefaultViewportForImage(n,e);"CT"===e.data.string("x00080060")||"ct"===e.data.string("x00080060")||"MRI"===e.data.string("x00080060")?(p.displayImage(n,e,t),w(e),T(e),J(e),K=e):alert("ERROR: Confirm this image's modality : CT , MRI ... ")})),K}function ee(e){var t=document.getElementById("dicomImage");return p.enable(t),p.loadImage(e).then((function(e){var n=p.getDefaultViewportForImage(t,e);"CT"===e.data.string("x00080060")||"ct"===e.data.string("x00080060")||"MRI"===e.data.string("x00080060")?(p.displayImage(t,e,n),w(e),T(e),J(e),K=e):alert("ERROR: Confirm this image's modality : CT , MRI ... ")})),K}function te(e){e.stopPropagation(),e.preventDefault();var t=e.dataTransfer.files;F(t[0]),ee(x.wadouri.fileManager.add(t[0]))}function ne(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"}x.external.cornerstone=p,x.external.dicomParser=I.a,E.external.cornerstone=p,E.external.Hammer=b.a,E.external.cornerstoneMath=h,E.init();var ae=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=this.element,t=document.getElementById("dicomImage");t.addEventListener("dragover",ne,!1),t.addEventListener("drop",te,!1),e.addEventListener("mousedown",(function(t){var n=t.pageX,a=t.pageY,r=t.which;function l(t){var l=t.pageX-n,o=t.pageY-a;if(n=t.pageX,a=t.pageY,1===r){var i=p.getViewport(e);i.voi.windowWidth+=l/i.scale,i.voi.windowCenter+=o/i.scale,p.setViewport(e,i),document.getElementById("bottomleft").textContent="WW/WC:"+Math.round(i.voi.windowWidth)+"/"+Math.round(i.voi.windowCenter)}else if(2===r){var c=p.getViewport(e);c.translation.x+=l/c.scale,c.translation.y+=o/c.scale,p.setViewport(e,c)}else if(3===r){var u=p.getViewport(e);u.scale+=o/100,p.setViewport(e,u),document.getElementById("bottomright").textContent="Zoom:"+u.scale+"x"}}document.addEventListener("mousemove",l),document.addEventListener("mouseup",(function e(){document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",e)}))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"outsideWrapper",className:"outsideWrapper"},r.a.createElement("div",null,"File Select =>",r.a.createElement("input",{type:"file",onChange:function(e){!function(e){e.stopPropagation(),e.preventDefault();var t=e.target.files;F(t[0]),ee(x.wadouri.fileManager.add(t[0]))}(e)}}),"\xa0\xa0"),r.a.createElement("div",null,"Directory Select =>",r.a.createElement("input",{type:"file",id:"filepicker",name:"fileList",webkitdirectory:"",directory:"",multiple:!0,onChange:function(e){!function(e){for(var t=[],n=[],a=0,r=0;r<1e6;r++)t[r]=x.wadouri.fileManager.add(e.target.files[r]),n[r]=e.target.files[r],a>1e6&&alert("ERROR : There are Too many files."),a++;F(n[113]),_(t,Q),document.getElementById("dicomImage").onwheel=function(e){e.stopPropagation(),e.preventDefault();var n=Q;n>=0||n<t.length?e.deltaY<0?n===Q&&(_(t,Q+1),$()):n===Q&&(_(t,Q-1),$()):(n=Q,_(t,Q),$());return!1}}(e)}})),r.a.createElement("ul",{id:"listing"}),r.a.createElement("div",{className:"left"},r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){!function(){var e=E.AngleTool;E.addTool(e),E.setToolActive("Angle",{mouseButtonMask:1})}()}},"Angle"),"\xa0\xa0",r.a.createElement("button",{onClick:function(){!function(){var e=E.LengthTool;E.addTool(e),E.setToolActive("Length",{mouseButtonMask:1})}()}},"Length"),"\xa0\xa0",r.a.createElement("button",{onClick:function(){!function(){var e=E.EllipticalRoiTool;E.addTool(e),E.setToolActive("EllipticalRoi",{mouseButtonMask:1})}()}},"Circle"),"\xa0\xa0",r.a.createElement("button",{onClick:function(){!function(){var e=E.RectangleRoiTool;E.addTool(e),E.setToolActive("RectangleRoi",{mouseButtonMask:1})}()}},"Rectangle"),"\xa0\xa0",r.a.createElement("button",{onClick:function(){!function(){var e=E.EraserTool;E.addTool(e),E.setToolActive("Eraser",{mouseButtonMask:1})}()}},"Erase"),"\xa0\xa0",r.a.createElement("button",{onClick:function(){!function(){var e=document.getElementById("dicomImage");e.style.width="256px",e.style.height="256px",p.resize(e)}()}},"256x256"),"\xa0\xa0",r.a.createElement("button",{onClick:function(){!function(){var e=document.getElementById("dicomImage");e.style.width="512px",e.style.height="512px",p.resize(e)}()}},"512x512"),"\xa0\xa0"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){!function(){var e=document.getElementById("dicomImage"),t=p.getViewport(e);t.invert=!t.invert,p.setViewport(e,t)}()}},"Toggle Invert"),"\xa0\xa0",r.a.createElement("button",{onClick:function(){!function(){var e=document.getElementById("dicomImage"),t=p.getViewport(e);t.pixelReplication=!t.pixelReplication,p.setViewport(e,t)}()}},"Toggle Interpolation"),"\xa0\xa0",r.a.createElement("button",{onClick:function(){!function(){var e=document.getElementById("dicomImage"),t=p.getViewport(e);t.hflip=!t.hflip,p.setViewport(e,t)}()}},"Horizontal Flip"),"\xa0\xa0",r.a.createElement("button",{onClick:function(){!function(){var e=document.getElementById("dicomImage"),t=p.getViewport(e);t.vflip=!t.vflip,p.setViewport(e,t)}()}},"Vertical Flip"),"\xa0\xa0",r.a.createElement("button",{onClick:function(){!function(){var e=document.getElementById("dicomImage"),t=p.getViewport(e);t.rotation+=90,p.setViewport(e,t)}()}},"Rotate 90"),"\xa0\xa0")),r.a.createElement("div",{className:"right"},r.a.createElement("ul",null,r.a.createElement("li",null,"Left click drag - window/level"),r.a.createElement("li",null,"Middle Mouse button drag - pan"),r.a.createElement("li",null,"Right click drag - zoom"),r.a.createElement("li",null,"Mouse wheel - scroll images"),r.a.createElement("li",null,"Double Click - save pixel/voxel"))),r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("div",{class:"left"},r.a.createElement("div",null,r.a.createElement("div",{id:"dicomImageWrapper",className:"wrapper",onContextMenu:"return false",onWheel:function(e){}},r.a.createElement("div",{id:"dicomImage",className:"viewportElement",ref:function(t){e.element=t}},r.a.createElement("canvas",{id:"myCanvas",className:"canvas",width:512,height:512})),r.a.createElement("div",Object(m.a)({id:"topleft",className:"overlay"},"className","topleft"),"Patient Name: Patient Sex:"),r.a.createElement("div",Object(m.a)({id:"topright",className:"overlay"},"className","topright"),"Modality :"),r.a.createElement("div",Object(m.a)({id:"bottomleft",className:"overlay"},"className","bottomleft"),"WW/WC:"),r.a.createElement("div",Object(m.a)({id:"bottomright",className:"overlay"},"className","bottomright"),"Zoom:"))),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",{id:"voxelCoords"})),r.a.createElement("div",null,r.a.createElement("span",{id:"voxelValue"})),r.a.createElement("div",null,r.a.createElement("span",{id:"patient"},"Patient ID : ")),r.a.createElement("div",null,r.a.createElement("span",{id:"modality"},"Modality : ")),r.a.createElement("div",null,r.a.createElement("span",{id:"instanceUID"},"Instance UID : ")))),r.a.createElement("div",{className:"right"},r.a.createElement("ul",{id:"ul"},"Structure Set ROI Sequence")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}}]),n}(r.a.Component),re=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ae,null))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.bf89dede.chunk.js.map