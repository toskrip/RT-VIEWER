(this.webpackJsonpuntitled5=this.webpackJsonpuntitled5||[]).push([[0],{27:function(e,t,a){},34:function(e,t,a){e.exports=a(53)},39:function(e,t,a){},40:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},41:function(e,t,a){},49:function(e,t){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),o=a.n(l),i=(a(39),a(29)),c=a(30),u=a(32),s=a(33),d=(a(40),a(41),a(20)),m=a(14),f=a(15),v=a(19),g=a(18),p=a(2),E=a(3),h=a(16),x=a(7),b=a(17),I=a.n(b),y=a(6),C=a.n(y);a(27);var F,w,B=function(e){try{document.getElementById("patientName").textContent="Patient Name : "+e.data.string("x00100010"),document.getElementById("patientID").textContent="Patient ID : "+e.data.string("x00100020"),document.getElementById("gender").textContent="Gender : "+e.data.string("x00100040")}catch(t){alert("parsing error")}};var k=function(e){var t=e.data.string("x00080060"),a=e.data.string("x00080016");if("CT"===t||"1.2.840.10008.5.1.4.1.1.481.2"===a||"RTDOSE"===t){var n=e.data.string("x00200032").split("\\"),r=10*parseFloat(n[0])/10,l=10*parseFloat(n[1])/10,o=e.data.string("x00200037"),i=(o=o.toString()).split("\\"),c=10*parseFloat(i[0])/10,u=10*parseFloat(i[1])/10,s=10*parseFloat(i[3])/10,d=10*parseFloat(i[4])/10,m=e.data.string("x00280030"),f=(m=m.toString()).split("\\"),v=parseFloat(10*f[0])/10,g=parseFloat(10*f[1])/10,E=document.getElementById("dicomImage");return E.addEventListener("mousemove",(function(e){var t=p.pageToPixel(E,e.pageX,e.pageY);document.getElementById("coords").textContent="X: "+Math.round(10*t.x)/10+"px  Y: "+Math.round(10*t.y)/10+"px",F=c*v*t.x+s*g*t.y+r,w=u*v*t.x+d*g*t.y+l,F=Math.round(10*F)/10,w=Math.round(10*w)/10,document.getElementById("voxelCoords").textContent="X: "+F+"mm   Y: "+w+"mm"})),E.addEventListener("dblclick",(function(e){var t=p.pageToPixel(E,e.pageX,e.pageY);document.getElementById("pixelValue").textContent="X: "+Math.round(10*t.x)/10+"px  Y: "+Math.round(10*t.y)/10+"px",F=c*v*t.x+s*g*t.y+r,w=u*v*t.x+d*g*t.y+l,F=Math.round(10*F)/10,w=Math.round(10*w)/10,document.getElementById("voxelValue").textContent="X: "+F+"mm   Y: "+w+"mm"})),[r,l,v,g,F,w]}alert("NOT CT IMAGES")},T=a(8),N=a.n(T);var O,R=function(e,t){for(var a=t.split("\\"),n=[],r=[],l=0;l<a.length;l++)l%3===0?n[l]=a[l]:l%3===1&&(r[l]=a[l]);for(var o=k(e),i=o[0],c=o[1],u=o[2],s=o[3],d=[],m=[],f=0;f<a.length;f++)f%3===0?d[f]=Math.round((n[f]-i)/u*10)/10:f%3===1&&(m[f]=Math.round((r[f]-c)/s*10)/10);return[d,m]},M=function(e){var t=Number(e).toString(16);return t.length<2&&(t="0"+t),t},S=function(e){var t=(e=e.split("\\"))[0],a=e[1],n=e[2];return"#"+M(t)+M(a)+M(n)};function V(e){return/^[\x00-\x7F]*$/.test(e)}function A(e){N()("#status").removeClass("alert-warning alert-success alert-danger").addClass("alert-info"),N()("#warnings").empty();var t=new FileReader;return t.onload=function(e){var a=t.result,n=new Uint8Array(a);setTimeout((function(){try{O=C.a.parseDicom(n);L(O),j(O,[],[]),function(e){for(var t=[],a=[],n=0;n<e.length;n++)"x30060022"===e[n]?t[n]=e[n+1]:"x30060026"===e[n]&&(a[n]=e[n+1]);t=t.filter((function(e){return null!==e&&void 0!==e&&""!==e})),a=a.filter((function(e){return null!==e&&void 0!==e&&""!==e})),N()((function(){for(var e=[],n=0;n<a.length;n++){var r={};r.x30060022=t[n],r.x30060026=a[n],e.push(r)}!function(e){e.forEach((function(e){var t=document.getElementById("structure_checkbox_ul"),a=document.createElement("li"),n=document.createElement("input");n.type="checkbox",n.value=e.x30060022,n.name="roi",a.append(n);var r=e.x30060026;a.append(document.createTextNode(r)),t.append(a)}))}(e)}))}(D),function(e){for(var t=[],a=[],n=[],r=[],l=0;l<e.length;l++){var o=0;if("x00081155"===e[l+2]){if(t[l]=e[l+3],a[l]=e[l+5],"x30060084"===e[l+6])n[l]=e[l+7];else if("x00081155"===e[l+6])for(o=l+6;o<e.length;o++)if("x30060084"===e[o+2]){n[l]=e[o+3];break}if("x3006002a"===e[l])r[l]=e[l+1];else if("x30060050"===e[l])for(o=l;o>0;o--)if("x3006002a"===e[o]){r[l]=e[o+1];break}}}r=r.filter((function(e){return null!==e&&void 0!==e&&""!==e})),t=t.filter((function(e){return null!==e&&void 0!==e&&""!==e})),a=a.filter((function(e){return null!==e&&void 0!==e&&""!==e})),n=n.filter((function(e){return null!==e&&void 0!==e&&""!==e})),N()((function(){for(var l=0;l<e.length;l++){var o={};o.x30060084=n[l],o.x00081155=t[l],o.x30060050=a[l],o.x3006002a=r[l],W.push(o)}}))}(P),N()(document).ready((function(){var e=document.getElementsByName("roi");if(e[0].addEventListener)for(var t=0;t<e.length;t++)e[t].addEventListener("change",q,!1);else if(e[0].attachEvent)for(var a=0;a<e.length;a++)e[a].attachEvent("onchange",q)}))}catch(e){if(e.output1||e.output3);else if(e.dataSet){L(e.dataSet),j(e.dataSet,[],[])}}}),10)},t.readAsArrayBuffer(e),O}var D=[];function L(e){try{var t=function(t){var a=e.elements[t];if("x30060020"===a.tag||"x30060022"===a.tag||"x30060026"===a.tag){a.tag;a.hadUndefinedLength&&" <strong>(-1)</strong>","; ",a.vr&&" VR="+a.vr+"; ";if(a.items)a.items.forEach((function(e){L(e.dataSet)}));else if(a.fragments){var n=0;a.fragments.forEach((function(e){var t;a.basicOffsetTable&&(t=a.basicOffsetTable[n]);n++,e.offset;e.length}))}else{2===a.length?" ("+e.uint16(t)+")":4===a.length&&" ("+e.uint32(t)+")";var r=e.string(t);V(r)?void 0!==r&&'"'+r+'"':2!==a.length&&4!==a.length&&("#C8C8C8","<i>binary data</i>"),0===a.length&&"#C8C8C8",D.push(a.tag,e.string(t))}}};for(var a in e.elements)t(a)}catch(n){throw{exception:n}}}var P=[];function j(e,t,a){try{var n=function(n){var r=e.elements[n];if("x30060039"===r.tag||"x3006002a"===r.tag||"x30060040"===r.tag||"x30060050"===r.tag||"x30060016"===r.tag||"x00081155"===r.tag||"x30060084"===r.tag){r.tag;r.hadUndefinedLength&&" <strong>(-1)</strong>","; ",r.vr&&" VR="+r.vr+"; ";if(r.items)r.items.forEach((function(e){j(e.dataSet,t,a)}));else if(r.fragments){var l=0;r.fragments.forEach((function(e){var t;r.basicOffsetTable&&(t=r.basicOffsetTable[l]);l++,e.offset;e.length}))}else{2===r.length?" ("+e.uint16(n)+")":4===r.length&&" ("+e.uint32(n)+")";var o=e.string(n);V(o)?void 0!==o&&'"'+o+'"':2!==r.length&&4!==r.length&&("#C8C8C8","<i>binary data</i>"),0===r.length&&"#C8C8C8",P.push(r.tag,e.string(n))}}};for(var r in e.elements)n(r)}catch(l){throw{exception:l,output3:a}}return P}var W=[];var Y,X,_,U,G,H,z={ROIs:[]},J=z.ROIs;function $(e){for(var t=e.data.string("x00080018"),a=0;a<J.length;a++)for(var n=0;n<W.length;n++)W[n].x30060084===J[a]&&W[n].x00081155===t&&(Y=W[n].x30060050,X=W[n].x3006002a,K(e,Y,X))}function Z(e){return _=e}function q(e){if(!0===e.target.checked)z.ROIs.push(e.target.value),function(e){for(var t=_.data.string("x00080018"),a=0;a<W.length;a++)W[a].x30060084===e&&W[a].x00081155===t&&(Y=W[a].x30060050,X=W[a].x3006002a,K(_,Y,X))}(e.target.value);else{var t=z.ROIs.indexOf(e.target.value);-1!==t&&z.ROIs.splice(t,1),function(e){for(var t=_.data.string("x00080018"),a=0;a<W.length;a++)W[a].x30060084===e&&W[a].x00081155===t&&(Y=W[a].x30060050,X=W[a].x3006002a)}(e.target.value)}}function K(e,t,a){var n=R(e,t),r=n[0],l=n[1],o=document.getElementById("myCanvas").getContext("2d");o.save(),o.beginPath(),o.moveTo(r[0],l[1]);for(var i=1;i<=3*r.length;i++)i%3===0&&o.lineTo(r[i],l[i+1]);o.closePath(),o.fillStyle=S(a),o.globalAlpha=.5,o.stroke(),o.fill(),o.restore()}function Q(){var e=document.getElementById("myCanvas").getContext("2d"),t=document.getElementById("doseCanvas").getContext("2d");e.clearRect(0,0,512,512),t.clearRect(0,0,512,512)}function ee(e,t){var a=t.elements.x7fe00010,n=new Uint32Array(t.byteArray.buffer.slice(a.dataOffset),0,a.length/4);U=parseFloat(t.uint16("x00280010")),G=parseFloat(t.uint16("x00280011")),H=parseFloat(e.data.string("x00280008")),function(e,t,a,n,r){for(var l=parseFloat(e.data.string("x3004000e")),o=[],i=0;i<r;i++)o[i]=[];for(var c=0;c<t.length;c++)o[c]=t[c]*l*100;for(var u=0,s=110;s>110-r;s--)Ue[s]=[];for(var d=110;d>110-r;d--)for(var m=0;m<a;m++)Ue[d][m]=[];for(var f=110;f>110-r;f--)for(var v=0;v<a;v++)for(var g=0;g<n;g++)Ue[f][v][g]=[];for(var p=[],E=110;E>110-r;E--)for(var h=0;h<a;h++)for(var x=0;x<n;x++)Ue[E][h][x]=o[u],p.push(Ue[E][h][x]),u++;p.sort((function(e,t){return t-e})),function(e){var t=[];t[0]=parseInt(e),t[1]=4e3,t[2]=3920,t[3]=3800,t[4]=3600,t[5]=3200,t[6]=2800,t[7]=2e3,t[8]=1200,t[9]=0,t.forEach((function(e){var t=document.getElementById("dose_checkbox_ul"),a=document.createElement("li"),n=document.createElement("input");n.type="checkbox",n.value=e,n.name="dose",a.append(n);var r="".concat(parseInt(e/4e3*100),"% / ").concat(e,"cGy");a.append(document.createTextNode(r)),t.append(a)}))}(p[0]),N()(document).ready((function(){var e=document.getElementsByName("dose");if(e[0].addEventListener)for(var t=0;t<e.length;t++)e[t].addEventListener("change",De,!1);else if(e[0].attachEvent)for(var a=0;a<e.length;a++)e[a].attachEvent("onchange",De)}))}(e,n,U,G,H)}var te,ae,ne,re=a(56),le=[],oe=[],ie=[];function ce(e){var t=x.wadouri.fileManager.add(e),a=new FileReader;return a.onload=function(e){var n=a.result,r=new Uint8Array(n);setTimeout((function(){try{te=C.a.parseDicom(r),ae=parseFloat(te.uint16("x00280010")),ne=parseFloat(te.uint16("x00280011")),p.loadImage(t).then((function(e){if("1.2.840.10008.5.1.4.1.1.481.2"===e.data.string("x00080016")){var t=0;ie=[],t=(t=e.data.string("x00280030")).toString(),ie=t.split("\\");var a=e.data.string("x00200032");oe=a.split("\\");var n=e.data.string("x00200037");n=n.toString(),le=n.split("\\"),ee(e,te)}}))}catch(e){e.exception&&e.exception}}),10)},a.readAsArrayBuffer(e),te}function ue(e,t,a){var n=[],r=[],l=0;try{for(var o=0;o<ae;o++)for(var i=0;i<ne;i++)parseInt(t)<=e[o][i]&&(n[l]=i,r[l]=o,l++);!function(e,t,a){se=parseFloat(oe[0]),de=parseFloat(oe[1]),me=parseFloat(oe[2]),fe=parseFloat(le[0]),ve=parseFloat(le[1]),ge=parseFloat(le[2]),pe=parseFloat(le[3]),Ee=parseFloat(le[4]),he=parseFloat(le[5]),xe=parseFloat(ie[0]),be=parseFloat(ie[1]);var n=[fe*xe,ve*xe,ge*xe],r=[pe*be,Ee*be,he*be],l=re.a(n,r),o=re.d([[fe*xe,pe*be,l[0],se],[ve*xe,Ee*be,l[1],de],[ge*xe,he*be,l[2],me],[0,0,0,1]]);Ie=a,function(e,t,a){var n,r=0;r=(r=ye.data.string("x00280030")).toString(),n=r.split("\\");var l=ye.data.string("x00200032").split("\\"),o=ye.data.string("x00200037"),i=(o=o.toString()).split("\\");Fe=parseFloat(l[0]),we=parseFloat(l[1]),Be=parseFloat(l[2]),ke=parseFloat(i[0]),Te=parseFloat(i[1]),Ne=parseFloat(i[2]),Oe=parseFloat(i[3]),Re=parseFloat(i[4]),Me=parseFloat(i[5]),Se=parseFloat(n[0]),Ve=parseFloat(n[1]);var c=[ke*Se,Te*Se,Ne*Se],u=[Oe*Ve,Re*Ve,Me*Ve],s=re.a(c,u),d=re.d([[ke*Se,Oe*Ve,s[0],Fe],[Te*Se,Re*Ve,s[1],we],[Ne*Se,Me*Ve,s[2],Be],[0,0,0,1]]);!function(e,t,a,n){for(var r=re.c(t),l=re.e(e,r),o=re.d([[],[],[],[]]),i=[],c=[],u=[],s=0;s<a.length;s++)o[s]=re.e(l,re.d([[a[s]],[n[s]],[0],[1]])),i.push(o[s]);for(var d=[],m=0;m<i.length;m++)c[m]=re.f(i[m],re.b(0,0)),u[m]=re.f(i[m],re.b(1,0));for(var f=[],v=[],g=0;g<c.length;g++)f[g]=ke*Se*c[g]+Oe*Ve*u[g]+Fe,v[g]=Te*Se*c[g]+Re*Ve*u[g]+we,d.push("<ul>["+f[g]+","+v[g]+"]</ul>");document.getElementById("dose2").innerHTML="<ul>"+d.join(" ")+"</ul>",function(e,t,a){var n=document.getElementById("myCanvas").getContext("2d");n.save(),n.scale(1.585938,1.585938),n.translate(-146.0892796,-105.3132142),n.beginPath(),n.moveTo(e[0],t[0]);for(var r=1;r<e.length;r++)n.lineTo(e[r],t[r]);n.closePath(),n.fillStyle=a,n.globalAlpha=1,n.stroke(),n.fill(),n.restore()}(f,v,Ie)}(e,d,t,a)}(o,e,t)}(n,r,a)}catch(c){alert("Can't find x,y ")}}var se,de,me,fe,ve,ge,pe,Ee,he,xe,be,Ie=0;var ye=0;function Ce(e){return ye=e}var Fe=0,we=0,Be=0,ke=0,Te=0,Ne=0,Oe=0,Re=0,Me=0,Se=0,Ve=0;var Ae={Dose:[]};function De(e){if(!0===e.target.checked)Ae.Dose.push(e.target.value),Xe(Ae.Dose);else{var t=Ae.Dose.indexOf(e.target.value);-1!==t&&Ae.Dose.splice(t,1),Xe(Ae.Dose)}}x.external.cornerstone=p,x.external.dicomParser=C.a,E.external.cornerstone=p,E.external.Hammer=I.a,E.external.cornerstoneMath=h,E.init();var Le=111,Pe=[],je=0;function We(e){for(var t=[],a=[],n=e.target.files,r=[],l=0;l<n.length;l++){var o={};r[l]=parseFloat(n[l].webkitRelativePath.toString().split(".")[11]),a[l]=x.wadouri.fileManager.add(n[l]),o.fileName=r[l],o.imageId=a[l],Pe.push(o)}je=n.length,Pe.sort((function(e,t){return e.fileName-t.fileName}));for(var i=0;i<je;i++)t[i]=Pe[i].imageId;!function(e,t){var a=document.getElementById("dicomImage");p.enable(a),p.loadImage(e[t]).then((function(e){var t=p.getDefaultViewportForImage(a,e);if("1.2.840.10008.5.1.4.1.1.2"===e.data.string("x00080016")){p.displayImage(a,e,t),B(e),k(e),Z(e),$(e),Ce(e),Xe([]),document.getElementById("topleft1").textContent="Image : "+(Le+1)+"/"+(je-3);var n=e.data.string("x00200032").split("\\")[2];document.getElementById("topleft2").textContent="Position : "+n+"mm",_e=e}else"1.2.840.10008.5.1.4.1.1.481.2"===e.data.string("x0080016")?alert("dose file"):alert("ERROR: Confirm this image's modality : CT , MRI ... ")}))}(t,Le),A(n[114]),ce(n[112]),document.getElementById("dicomImage").onwheel=function(e){e.stopPropagation(),e.preventDefault();var a=Le;a>=0||a<t.length?e.deltaY<0?a===Le&&(Ge(t,Le+1),document.getElementById("topleft1").textContent="Image : "+(Le+1)+"/"+(je-3),Q()):a===Le&&(Ge(t,Le-1),document.getElementById("topleft1").textContent="Image : "+(Le+1)+"/"+(je-3),Q()):(Ge(t,Le),document.getElementById("topleft1").textContent="Image : "+Le+"/"+(je-3),Q());return!1}}var Ye=[];function Xe(e){Ye=e}var _e,Ue=[];function Ge(e,t){var a=document.getElementById("dicomImage");return p.enable(a),Le=t,p.loadImage(e[t]).then((function(e){var t=p.getDefaultViewportForImage(a,e);if("1.2.840.10008.5.1.4.1.1.2"===e.data.string("x00080016")){p.displayImage(a,e,t),B(e),k(e),Z(e),Ce(e),$(e),function(e,t){var a=[];a[0]="#780000",a[1]="#EE4500",a[2]="#FFA500",a[3]="#FFFF00",a[4]="#00FF00",a[5]="#008B00",a[6]="#00FFFF",a[7]="#0000FF",a[8]="#000080",a[9]="#C93F98";for(var n=0;n<t.length;n++)4185===parseInt(t[n])?ue(e,t[n],a[0]):4e3===parseInt(t[n])?ue(e,t[n],a[1]):3920===parseInt(t[n])?ue(e,t[n],a[2]):3800===parseInt(t[n])?ue(e,t[n],a[3]):3600===parseInt(t[n])?ue(e,t[n],a[4]):3200===parseInt(t[n])?ue(e,t[n],a[5]):2800===parseInt(t[n])?ue(e,t[n],a[6]):2e3===parseInt(t[n])?ue(e,t[n],a[7]):1200===parseInt(t[n])?ue(e,t[n],a[8]):0===parseInt(t[n])&&ue(e,t[n],a[9])}(Ue[Le],Ye);var n=e.data.string("x00200032").split("\\")[2];document.getElementById("topleft2").textContent="Position : "+n+"mm",_e=e}else alert("ERROR: Confirm this image's modality : CT , MRI ... ")})),_e}function He(e){e.stopPropagation(),e.preventDefault(),ce(e.dataTransfer.files[0])}function ze(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"}var Je=a(31),$e=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={value:{scale:1,translation:{x:0,y:0}}},n}return Object(f.a)(a,[{key:"render",value:function(){var e=this,t=this.state;t.scale,t.translation;return r.a.createElement(Je.MapInteractionCSS,{value:this.state.value,onChange:function(t){return e.setState({value:t})}},r.a.createElement("div",{id:"dicomImage",className:"viewportElement",ref:function(t){e.element=t}},r.a.createElement("canvas",{id:"myCanvas",className:"canvas",width:512,height:512}),r.a.createElement("canvas",{id:"doseCanvas",className:"canvas",width:512,height:512})))}}]),a}(r.a.Component);x.external.cornerstone=p,x.external.dicomParser=C.a,E.external.cornerstone=p,E.external.Hammer=I.a,E.external.cornerstoneMath=h,E.init(),C.a.toString().bold();var Ze=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=document.getElementById("dicomImage");e.addEventListener("dragover",ze,!1),e.addEventListener("drop",He,!1);var t=document.getElementById("dicomImage");t.addEventListener("mousedown",(function(e){var a=e.pageX,n=e.pageY,r=e.which;function l(e){var l=e.pageX-a,o=e.pageY-n;if(a=e.pageX,n=e.pageY,2===r){var i=p.getViewport(t);i.voi.windowWidth+=l/i.scale,i.voi.windowCenter+=o/i.scale,p.setViewport(t,i),document.getElementById("topright1").textContent="WW/WC:"+Math.round(i.voi.windowWidth)+"/"+Math.round(i.voi.windowCenter)}}document.addEventListener("mousemove",l),document.addEventListener("mouseup",(function e(){document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",e)}))}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"outsideWrapper",className:"outsideWrapper"},r.a.createElement("div",null," Open patient =>",r.a.createElement("input",{type:"file",id:"filepicker",name:"fileList",webkitdirectory:"",directory:"",multiple:!0,onChange:function(e){We(e)}})),r.a.createElement("ul",{id:"listing"}),r.a.createElement("div",{className:"left"},r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){!function(){var e=E.AngleTool;E.addTool(e),E.setToolActive("Angle",{mouseButtonMask:1})}()}},"Angle"),"\xa0\xa0",r.a.createElement("button",{onClick:function(){!function(){var e=E.LengthTool;E.addTool(e),E.setToolActive("Length",{mouseButtonMask:1})}()}},"Length"),"\xa0\xa0",r.a.createElement("button",{onClick:function(){!function(){var e=E.EllipticalRoiTool;E.addTool(e),E.setToolActive("EllipticalRoi",{mouseButtonMask:1})}()}},"Circle"),"\xa0\xa0",r.a.createElement("button",{onClick:function(){!function(){var e=E.RectangleRoiTool;E.addTool(e),E.setToolActive("RectangleRoi",{mouseButtonMask:1})}()}},"Rectangle"),"\xa0\xa0",r.a.createElement("button",{onClick:function(){!function(){var e=E.EraserTool;E.addTool(e),E.setToolActive("Eraser",{mouseButtonMask:1})}()}},"Erase"),"\xa0\xa0"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){!function(){var e=document.getElementById("dicomImage"),t=p.getViewport(e);t.invert=!t.invert,p.setViewport(e,t)}()}},"Toggle Invert"),"\xa0\xa0",r.a.createElement("button",{onClick:function(){!function(){var e=document.getElementById("dicomImage"),t=p.getViewport(e);t.pixelReplication=!t.pixelReplication,p.setViewport(e,t)}()}},"Toggle Interpolation"),"\xa0\xa0",r.a.createElement("button",{onClick:function(){!function(){var e=document.getElementById("dicomImage"),t=p.getViewport(e);t.hflip=!t.hflip,p.setViewport(e,t)}()}},"Horizontal Flip"),"\xa0\xa0",r.a.createElement("button",{onClick:function(){!function(){var e=document.getElementById("dicomImage"),t=p.getViewport(e);t.vflip=!t.vflip,p.setViewport(e,t)}()}},"Vertical Flip"),"\xa0\xa0",r.a.createElement("button",{onClick:function(){!function(){var e=document.getElementById("dicomImage"),t=p.getViewport(e);t.rotation+=90,p.setViewport(e,t)}()}},"Rotate 90"),"\xa0\xa0")),r.a.createElement("div",{className:"right"},r.a.createElement("ul",null,r.a.createElement("li",null,"mouse click drag - pan"),r.a.createElement("li",null,"Mouse wheel - scroll images / zoom in, out"),r.a.createElement("li",null,"Double Click - save pixel/voxel"))),r.a.createElement("br",null)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("div",{class:"left"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",{id:"patientName"},"Patient Name : "),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",r.a.createElement("span",{id:"patientID"},"Patient ID : ")),r.a.createElement("div",null,r.a.createElement("span",{id:"gender"},"Gender : "))),r.a.createElement("div",null,r.a.createElement("div",{id:"dicomImageWrapper",className:"wrapper",onContextMenu:"return false",onWheel:function(e){}},r.a.createElement("div",null,r.a.createElement($e,null)),r.a.createElement("div",Object(d.a)({id:"topleft",className:"overlay"},"className","topleft"),r.a.createElement("div",{id:"topleft1"},"Image :"),r.a.createElement("div",{id:"topleft2"},"Position:")),r.a.createElement("div",Object(d.a)({className:"overlay"},"className","topright"),r.a.createElement("div",{id:"topright1"},"WW/WC:"),r.a.createElement("div",{id:"topright2"},"Zoom:")))),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",{id:"coords"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",r.a.createElement("span",{id:"voxelCoords"})),r.a.createElement("div",null,r.a.createElement("span",{id:"pixelValue"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",r.a.createElement("span",{id:"voxelValue"})),r.a.createElement("div",null,r.a.createElement("span",{id:"doseCoords"}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{className:"right"},r.a.createElement("div",{className:"lefthalf"},r.a.createElement("ul",{id:"structure_checkbox_ul"},"Structures")),r.a.createElement("div",{className:"righthalf"},r.a.createElement("ul",{id:"dose_checkbox_ul"},"Isodoses"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"left"},r.a.createElement("div",{className:"row2"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{id:"dose2"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",null,"dose")))))))}}]),a}(r.a.Component),qe=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Ze,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.3132a08e.chunk.js.map