(this.webpackJsonptest=this.webpackJsonptest||[]).push([[14],{10:function(e,t,r){"use strict";var n=r(3),i=r(7),o=r(5),a=r(4),s=r(6),c=r(0),u=r.n(c),l=(r(17),function(e){function t(){var e,r;Object(n.a)(this,t);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(r=Object(o.a)(this,(e=Object(a.a)(t)).call.apply(e,[this].concat(s)))).handleClick=function(){console.log("Click!"),r.props.onClick()},r}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return u.a.createElement("button",{className:"Button thm-ele-button thm-bgS",onClick:this.handleClick},this.props.label)}}]),t}(u.a.Component));r.d(t,"a",(function(){return l}))},12:function(e,t,r){"use strict";var n=r(3),i=r(7),o=r(5),a=r(4),s=r(6),c=r(0),u=r.n(c),l=function(e){function t(){var e,r;Object(n.a)(this,t);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(r=Object(o.a)(this,(e=Object(a.a)(t)).call.apply(e,[this].concat(s)))).ref=u.a.createRef(),r}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.ref.current;e&&this.props.init(e)}},{key:"render",value:function(){return u.a.createElement("canvas",{ref:this.ref,className:"Canvas"})}}]),t}(u.a.Component),h=r(11),f=r(16),p=r(10),d=(r(18),function(e){function t(e){var r;return Object(n.a)(this,t),(r=Object(o.a)(this,Object(a.a)(t).call(this,e))).handleToggle=function(){console.info("this.state=",r.state),r.setState({visible:!r.state.visible})},r.state={visible:!1},r}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.preContent,r=e.codeContent,n=e.postContent;return u.a.createElement("div",{className:["view-Page"].join(" ")},u.a.createElement("header",{className:"thm-ele-nav thm-bgP"},u.a.createElement(p.a,{label:"back",onClick:function(){return window.history.back()}}),u.a.createElement("div",null,this.props.title),u.a.createElement(p.a,{label:"doc.",onClick:this.handleToggle})),u.a.createElement(l,{init:this.props.onLoad}),u.a.createElement("div",{className:this.state.visible?"desc-show":"desc-hide"},t&&u.a.createElement(h.a,{options:{forceBlock:!0}},t),r&&u.a.createElement(f.a,{languages:["js"]},r),n&&u.a.createElement(h.a,{options:{forceBlock:!0}},n)))}}]),t}(u.a.Component));r.d(t,"a",(function(){return d}))},13:function(e,t,r){},14:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),o=r(9),a=r.n(o),s=(r(13),r(14),function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Tutorials"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"tutorial/clear.html"},"Hello world!")),i.a.createElement("li",null,i.a.createElement("a",{href:"tutorial/background.html"},"Scalable background")),i.a.createElement("li",null,i.a.createElement("a",{href:"tutorial/sprites-1.html"},"Sprites")),i.a.createElement("li",null,i.a.createElement("a",{href:"tutorial/sprites-2.html"},"Quads")),i.a.createElement("li",null,i.a.createElement("a",{href:"tutorial/voronoi.html"},"Voronoi"))),i.a.createElement("h1",null,"Articles"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"article/voronoi.html"},"Voronoi"))),i.a.createElement("h1",null,"Vanilla Javascipt examples"),i.a.createElement("a",{href:"examples/index.html"},"Look at this page"),".")});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(i.a.createElement(s,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},17:function(e,t,r){},18:function(e,t,r){},229:function(e,t,r){r(15),e.exports=r(256)},256:function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),o=r(9),a=r.n(o),s=r(8),c=r(12);function u(){return Math.random()}a.a.render(i.a.createElement(c.a,{title:"Voronoi",codeContent:'const scene = new FlatLandGL.Scene(canvas)\nconst clearPainter = new FlatLandGL.Painter.Clear({ color: "#d72" })\nconst red = clearPainter.red\nconst green = clearPainter.green\nconst blue = clearPainter.blue\nscene.onAnimation = (time: number) => {\n  if (scene.pointer.down) {\n    const alpha = Math.abs(Math.cos(time * 0.001))\n    clearPainter.red = alpha * red\n    clearPainter.green = alpha * green\n    clearPainter.blue = alpha * blue\n  }\n}\nscene.use([clearPainter])\nscene.start()\n',onLoad:function(e){for(var t=new s.a.Scene(e),r=[],n=[],i=0;i<10;i++)r.push(u(),u(),1),n.push(u(),u(),u());var o=new s.a.Painter.Voronoi({seeds:r,colors:n,border:.05,light:1});t.use([o]),t.start()}}),document.getElementById("root"))},8:function(e,t,r){"use strict";for(var n=r(1),i=4095,o=new Float32Array(4096),a=new Float32Array(4096),s=0;s<4096;s++){var c=Math.PI*s/2048;o[s]=Math.cos(c),a[s]=Math.sin(c)}var u={cos:function(e){return o[(0|e)&i]},sin:function(e){return a[(0|e)&i]},clamp:function(e,t,r){void 0===t&&(t=0);void 0===r&&(r=1);return e<t?t:e>r?r:e}};function l(e,t){void 0===t&&(t="");var r=typeof e;return"number"!==r||isNaN(e)?"string"===r?e:t:""+e}var h=Float32Array.BYTES_PER_ELEMENT,f=function(){function e(e,t,r){void 0===r&&(r={});var n=function(e,t){return{vert:p(e.vert,t),frag:p(e.frag,t)}}(t,r);this.gl=e,Object.freeze(this.gl),this.BPE=h,Object.freeze(this.BPE),this._typesNamesLookup=function(e){var t={};for(var r in e)if(r===r.toUpperCase()){var n=e[r];"number"===typeof n&&(t[n]=r)}return t}(e);var i=e.createProgram();if(!i)throw Error("Unable to create WebGLProgram!");this.program=i;var o=function(e,t){return d(e.VERTEX_SHADER,e,t)}(e,n.vert);e.attachShader(i,o);var a=function(e,t){return d(e.FRAGMENT_SHADER,e,t)}(e,n.frag);e.attachShader(i,a),e.linkProgram(i),this.use=function(){e.useProgram(i)},this.attribs=this.createAttributes(),this.uniforms={},this.uniformsLocation=this.createUniformsLocation()}return e.prototype.use=function(){this.gl.useProgram(this.program)},e.prototype.getTypeName=function(e){return this._typesNamesLookup[e]},e.prototype.bindAttribs=function(e){for(var t,r,i,o,a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];var c=this,u=this.gl;u.bindBuffer(u.ARRAY_BUFFER,e);var l=0;try{for(var f=Object(n.f)(a),p=f.next();!p.done;p=f.next()){var d=p.value;if(!(y=c.attribs[d]))throw Error('Cannot find attribute "'+d+"!\nIt may be not active because unused in the shader.\nAvailable attributes are: "+Object.keys(c.attribs).map((function(e){return'"'+e+'"'})).join(", ")+" ("+String(c.attribs.length)+")");l+=y.size*y.length*h}}catch(_){t={error:_}}finally{try{p&&!p.done&&(r=f.return)&&r.call(f)}finally{if(t)throw t.error}}var m=0;try{for(var v=Object(n.f)(a),g=v.next();!g.done;g=v.next()){var b=g.value,y=c.attribs[b];u.enableVertexAttribArray(y.location),u.vertexAttribPointer(y.location,y.size*y.length,u.FLOAT,!1,l,m),m+=y.size*y.length*h}}catch(E){i={error:E}}finally{try{g&&!g.done&&(o=v.return)&&o.call(v)}finally{if(i)throw i.error}}},e.prototype.setUniform=function(e,t){var r=this.uniforms,n=this.uniformsLocation;if("undefined"===typeof n[e]){console.error('Uniform "'+e+'" does not exist in this WebGL Program!');var i=Object.keys(n);throw 0===i.length?console.error("Actually, this program has no uniform at all."):console.error("Available uniforms are:",i.join(", ")),Error('Uniform "'+e+'" was ot found!')}r[e]=t},e.prototype.createAttributes=function(){for(var e=this.gl,t=this.program,r={},n=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES),i=0;i<n;i++){var o=e.getActiveAttrib(t,i);o&&(o.typeName=this.getTypeName(o.type),o.length=this.getSize(e,o),o.location=e.getAttribLocation(t,o.name),r[o.name]=o,Object.defineProperty(this,""+o.name,{value:o.location,writable:!1,enumerable:!0,configurable:!1}))}return r},e.prototype.getSize=function(e,t){switch(t.type){case e.FLOAT_VEC4:return 4;case e.FLOAT_VEC3:return 3;case e.FLOAT_VEC2:return 2;case e.FLOAT:return 1;default:throw Error("[webgl.program:getSize] I don't know the size of the attribute \""+t.name+'" because I don\'t know the type "'+this.getTypeName(t.type)+'"!')}},e.prototype.createUniformsLocation=function(){for(var e=this.gl,t=this.program,r=this.uniforms,n={},i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),o=0;o<i;o++){var a=e.getActiveUniform(t,o);if(a){var s=m(a.name),c=e.getUniformLocation(t,a.name);c&&(n[s]=c,Object.defineProperty(r,""+s,{set:this.createUniformSetter(a,n[s],this._typesNamesLookup),get:this.createUniformGetter(a),enumerable:!0,configurable:!1}))}}return n},e.prototype.createUniformSetter=function(e,t,r){var n=this.gl,i="_"+m(e.name);switch(e.type){case n.BYTE:case n.UNSIGNED_BYTE:case n.SHORT:case n.UNSIGNED_SHORT:case n.INT:case n.UNSIGNED_INT:case n.SAMPLER_2D:return 1===e.size?function(e){n.uniform1i(t,e),this[i]=e}:function(e){n.uniform1iv(t,e),this[i]=e};case n.FLOAT:return 1===e.size?function(e){n.uniform1f(t,e),this[i]=e}:function(e){n.uniform1fv(t,e),this[i]=e};case n.FLOAT_VEC2:if(1===e.size)return function(e){n.uniform2fv(t,e),this[i]=e};throw Error("[webgl.program.createWriter] Don't know how to deal arrays of FLOAT_VEC2 in uniform \""+e.name+'"!');case n.FLOAT_VEC3:if(1===e.size)return function(e){n.uniform3fv(t,e),this[i]=e};throw Error("[webgl.program.createWriter] Don't know how to deal arrays of FLOAT_VEC3 in uniform \""+e.name+'"!');case n.FLOAT_VEC4:if(1===e.size)return function(e){n.uniform4fv(t,e),this[i]=e};throw Error("[webgl.program.createWriter] Don't know how to deal arrays of FLOAT_VEC4 in uniform \""+e.name+'"!');case n.FLOAT_MAT3:if(1===e.size)return function(e){n.uniformMatrix3fv(t,!1,e),this[i]=e};throw Error("[webgl.program.createWriter] Don't know how to deal arrays of FLOAT_MAT3 in uniform \""+e.name+'"!');case n.FLOAT_MAT4:if(1===e.size)return function(e){n.uniformMatrix4fv(t,!1,e),this[i]=e};throw Error("[webgl.program.createWriter] Don't know how to deal arrays of FLOAT_MAT4 in uniform \""+e.name+'"!');default:throw Error("[webgl.program.createWriter] Don't know how to deal with uniform \""+e.name+'" of type '+r[e.type]+"!")}},e.prototype.createUniformGetter=function(e){var t="_"+e.name;return function(){return this[t]}},e}();function p(e,t){return e.split("\n").map((function(e){if(!e.trim().startsWith("#include"))return e;var r=e.indexOf("#include")+"#include".length,n=e.substr(r).trim();"'<\"".indexOf(n.charAt(0))>-1&&(n=n.substr(1,n.length-"<>".length));var i=t[n];if("string"!==typeof i)throw console.error("Include <"+n+"> not found in ",t),Error("Include not found in shader: "+n);return i})).join("\n")}function d(e,t,r){if(e!==t.VERTEX_SHADER&&e!==t.FRAGMENT_SHADER)throw Error("Type must be VERTEX_SHADER or FRAGMENT_SHADER!");var n=t.createShader(e);if(!n)throw Error("Unable to create a "+(e===t.VERTEX_SHADER?"VERTEX":"FRAGMENT")+" shader!");if(t.shaderSource(n,r),t.compileShader(n),!t.getShaderParameter(n,t.COMPILE_STATUS)){var i=t.getShaderInfoLog(n)||"NULL";throw console.error("An error occurred compiling the shader: "+i),console.info(function(e,t){var r=e.split(/\n\r?/);r.unshift(""),v.lastIndex=-1;var n=v.exec(t);if(!n)return e;for(var i=Number(n[2]),o=Math.max(1,i-2),a=Math.min(r.length-1,i+2),s=[],c=o;c<=a;c++)s.push(c+":    "+r[c]);return s.join("\n")}(r,i)),Error("Unable to create a "+(e===t.VERTEX_SHADER?"VERTEX":"FRAGMENT")+" shader!")}return n}function m(e){var t=e.indexOf("[");return-1===t?e:e.substr(0,t)}var v=/ERROR: ([0-9]+):([0-9]+):/g;var g=function(){function e(){this._programs=[],this._scene=null}return Object.defineProperty(e.prototype,"scene",{get:function(){return this._scene},set:function(e){e!==this._scene&&(this._scene&&this.internalDestroy(this._scene),this._scene=e,e&&this.initialize(e))},enumerable:!0,configurable:!0}),e.prototype.createProgram=function(e,t){void 0===t&&(t={});var r=this._scene;if(!r)throw Error("This painter has no scene!\ncreateProfram() should only be called from initialize().");var n=new f(r.gl,e,t);return this._programs.push(n),n},e.prototype.fatal=function(e){return console.error("Fatal error in Painter:",e),new Error(e)},e.prototype.internalDestroy=function(e){var t,r,i=e.gl;try{for(var o=Object(n.f)(this._programs),a=o.next();!a.done;a=o.next()){var s=a.value;i.deleteProgram(s)}}catch(c){t={error:c}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}},e}(),b=function(e){function t(t){var r=e.call(this)||this;return r.params=t,r}return Object(n.c)(t,e),t.prototype.render=function(){var e=this.scene,t=this.prg,r=this.atlas,n=this.buff;if(e&&t&&r&&n){var i=e.gl;i.enable(i.DEPTH_TEST),t.use(),r.activate(),t.$uniTexture=0,t.setUniform("uniAspectRatio",e.width/e.height),t.bindAttribs(n,"attXY"),i.bindBuffer(i.ARRAY_BUFFER,n),i.drawArrays(i.TRIANGLE_STRIP,0,4)}},t.prototype.destroy=function(e){var t=e.gl,r=this.buff;r&&t.deleteBuffer(r)},t.prototype.initialize=function(e){var t=this.params,r=t.atlas;this.atlas=r,this.prg=this.createProgram({frag:_,vert:y(l(t.align).toUpperCase())});var n=e.gl,i=n.createBuffer();if(!i)throw this.fatal("Not enough memory to create an array buffer!");n.bindBuffer(n.ARRAY_BUFFER,i),n.bufferData(n.ARRAY_BUFFER,new Float32Array([0,0,0,1,1,0,1,1]),n.STATIC_DRAW),this.buff=i},t}(g);function y(e){var t="",r="";return-1!==e.indexOf("B")?r="location.y -= uniAspectRatio - 1.0;":-1!==e.indexOf("T")&&(r="location.y += uniAspectRatio - 1.0;"),-1!==e.indexOf("R")?t="location.x -= 1.0 / uniAspectRatio - 1.0;":-1!==e.indexOf("L")&&(t="location.x += 1.0 / uniAspectRatio - 1.0;"),"uniform float uniAspectRatio;\nattribute vec2 attXY;\nvarying vec2 varUV;\n\nvoid main() {\n  varUV = attXY;\n  vec2 location = 2.0 * (attXY - vec2(0.5, 0.5));\n\n  if (uniAspectRatio > 1.0) {\n    location.y *= uniAspectRatio;"+r+"\n  } else {\n    location.x /= uniAspectRatio;"+t+"\n  }\n\n  gl_Position = vec4(location.x, -location.y, -1.0, 1.0);\n}"}var _="precision mediump float;\nuniform sampler2D uniTexture;\nvarying vec2 varUV;\n\nvoid main() {\n  vec4 color = texture2D( uniTexture, varUV );\n  gl_FragColor = color;\n}",E=["#RGB".length,"#RGBA".length,"#RRGGBB".length,"#RRGGBBAA".length],A=/^#[0-9A-F]+$/gi,R=function(){function e(e){void 0===e&&(e="#000000"),this.R=0,this.G=0,this.B=0,this.H=0,this.S=0,this.L=0,this.A=1,this.parse(e)}return e.isValid=function(e){var t,r;if(A.lastIndex=-1,!A.test(e))return!1;try{for(var i=Object(n.f)(E),o=i.next();!o.done;o=i.next()){var a=o.value;if(e.length===a)return!0}}catch(s){t={error:s}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}return!1},e.normalize=function(t){return new e(t).stringify()},e.luminance=function(t){return new e(t).luminance()},e.luminanceStep=function(t){return new e(t).luminanceStep()},e.fromArrayRGB=function(t){var r=Object(n.e)(t,3),i=r[0],o=r[1],a=r[2];return e.newRGB(i,o,a)},e.fromArrayRGBA=function(t){var r=Object(n.e)(t,4),i=r[0],o=r[1],a=r[2],s=r[3];return e.newRGBA(i,o,a,s)},e.mix=function(t,r,n){void 0===n&&(n=.5);var i=1-n;return e.newRGBA(n*r.R+i*t.R,n*r.G+i*t.G,n*r.B+i*t.B,n*r.A+i*t.A)},e.ramp=function(t,r){if(void 0===r&&(r=.5),0===t.length)return e.newBlack();if(1===t.length)return t[0];var n=t.length-1,i=Math.floor(r*n),o=t[i];if(i===n)return o;var a=t[i+1],s=i+r/n;return e.mix(o,a,s)},e.newBlack=function(){return e.newRGB(0,0,0)},e.newWhite=function(){return e.newRGB(1,1,1)},e.newRGB=function(t,r,n){var i=new e;return i.R=t,i.G=r,i.B=n,i.A=1,i},e.newRGBA=function(t,r,n,i){var o=new e;return o.R=t,o.G=r,o.B=n,o.A=i,o},e.prototype.toArrayRGB=function(){return[this.R,this.G,this.B]},e.prototype.toArrayRGBA=function(){return[this.R,this.G,this.B,this.A]},e.prototype.parse=function(e){void 0===e&&(e="#000000");var t=e.trim().toUpperCase();return!!this.parseHexa.call(this,t)||(!!this.parseRGB.call(this,t)||(!!this.parseRGBA.call(this,t)||!!this.parseHSL.call(this,t)))},e.prototype.luminance=function(){return.2126*this.R+.7152*this.G+.0722*this.B},e.prototype.luminanceStep=function(){return this.luminance()<.6?0:1},e.prototype.stringify=function(){var e=j(255*this.R)+j(255*this.G)+j(255*this.B);return this.A<1&&(e+=j(255*this.A)),"#"+e},e.prototype.copy=function(){var t=new e;return t.R=this.R,t.G=this.G,t.B=this.B,t.A=this.A,t.H=this.H,t.S=this.S,t.L=this.L,t},e.prototype.hsl2rgb=function(){var e=6*this.H,t=this.S,r=this.L,n=(1-Math.abs(2*r-1))*t,i=n*(1-Math.abs(e%2-1)),o=0,a=0,s=0;e<3?e<1?(o=n,a=i,s=0):e<2?(o=i,a=n,s=0):(o=0,a=n,s=i):e<4?(o=0,a=i,s=n):e<5?(o=i,a=0,s=n):(o=n,a=0,s=i);var c=r-.5*n;this.R=o+c,this.G=a+c,this.B=s+c},e.prototype.rgb2hsl=function(){var e=this.R,t=this.G,r=this.B,n=Math.min(e,t,r),i=Math.max(e,t,r),o=i-n;this.L=.5*(i+n),o<1e-6?(this.H=0,this.S=0):(this.S=o/(1-Math.abs(2*this.L-1)),this.H=i===e?t>=r?w*((t-r)/o):1-w*((r-t)/o):i===t?w*(2+(r-e)/o):w*(4+(e-t)/o))},e.prototype.parseHexa=function(e){if("#"!==e.charAt(0))return!1;var t=0,r=0,n=0,i=1;switch(e.length){case 4:t=parseInt(e.charAt(1),16)*T,r=parseInt(e.charAt(2),16)*T,n=parseInt(e.charAt(3),16)*T;break;case 5:t=parseInt(e.charAt(1),16)*T,r=parseInt(e.charAt(2),16)*T,n=parseInt(e.charAt(3),16)*T,i=parseInt(e.charAt(4),16)*T;break;case 7:t=parseInt(e.substr(1,2),16)*O,r=parseInt(e.substr(3,2),16)*O,n=parseInt(e.substr(5,2),16)*O;break;case 9:t=parseInt(e.substr(1,2),16)*O,r=parseInt(e.substr(3,2),16)*O,n=parseInt(e.substr(5,2),16)*O,i=parseInt(e.substr(7,2),16)*O}return isNaN(t)||isNaN(r)||isNaN(n)||isNaN(i)?this.R=this.G=this.B=this.A=0:(this.R=t,this.G=r,this.B=n,this.A=i),!0},e.prototype.parseRGB=function(e){var t=U.exec(e);return!!t&&(this.R=P(parseInt(t[1],10)*O),this.G=P(parseInt(t[2],10)*O),this.B=P(parseInt(t[3],10)*O),this.A=1,!0)},e.prototype.parseRGBA=function(e){var t=S.exec(e);return!!t&&(this.R=P(parseInt(t[1],10)*O),this.G=P(parseInt(t[2],10)*O),this.B=P(parseInt(t[3],10)*O),this.A=P(parseFloat(t[4])),!0)},e.prototype.parseHSL=function(e){var t=L.exec(e);return!!t&&(this.H=P(parseInt(t[1],10)*x),this.S=P(parseInt(t[2],10)*B),this.L=P(parseInt(t[3],10)*B),this.A=1,this.hsl2rgb(),!0)},e}(),w=1/6,T=1/15,B=1/99,O=1/255,x=1/359,U=/^RGB[\s(]+([0-9]+)[^0-9]+([0-9]+)[^0-9]+([0-9]+)/,S=/^RGBA[\s(]+([0-9]+)[^0-9]+([0-9]+)[^0-9]+([0-9]+)[^0-9.]+([0-9.]+)/,L=/^HSL[\s(]+([0-9]+)[^0-9]+([0-9]+)[^0-9]+([0-9]+)/;function P(e){return e<0?0:e>1?1:e}function j(e){var t=Math.floor(e).toString(16);return t.length<2&&(t="0"+t),t}var F=function(e){function t(t){var r=e.call(this)||this;return r.params=t,r._red=.8,r._green=.4,r._blue=.2,r._alpha=1,r}return Object(n.c)(t,e),Object.defineProperty(t.prototype,"red",{get:function(){return this._red},set:function(e){this._red=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"green",{get:function(){return this._green},set:function(e){this._green=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"blue",{get:function(){return this._blue},set:function(e){this._blue=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"alpha",{get:function(){return this._alpha},set:function(e){this._alpha=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"color",{get:function(){var e=new R;return e.R=this._red,e.G=this._green,e.B=this._blue,e.A=this._alpha,e.stringify()},set:function(e){var t=new R(e);this._red=t.R,this._green=t.G,this._blue=t.B,this._alpha=t.A},enumerable:!0,configurable:!0}),t.prototype.render=function(){var e=this.scene;if(e){var t=e.gl;t.clearColor(this._red,this._green,this._blue,this._alpha),t.clear(t.COLOR_BUFFER_BIT)}},t.prototype.initialize=function(){this.params&&(this.color=this.params.color||"#d72")},t.prototype.destroy=function(){},t}(g),N=function(){function e(e,t,r,n){this.$index=-1,this.extra={},this._id=e,this._data=t,this._update=r,this._destroy=n}return Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this._destroy(this)},e}(),I=function(e){function t(t,r,n,i,o){var a=e.call(this,t,r,n,i)||this;return a._params=o,a}return Object(n.c)(t,e),t.prototype.update=function(e){e&&(this._params=Object(n.a)(Object(n.a)({},this._params),e));var t=this._params,r=t.xTL,i=t.yTL,o=t.zTL,a=t.uTL,s=t.vTL,c=t.xTR,u=t.yTR,l=t.zTR,h=t.uTR,f=t.vTR,p=t.xBR,d=t.yBR,m=t.zBR,v=t.uBR,g=t.vBR,b=t.xBL,y=t.yBL,_=t.zBL,E=t.uBL,A=t.vBL,R=this._data;R[0]=r,R[1]=i,R[2]=o,R[3]=a,R[4]=s,R[5]=c,R[6]=u,R[7]=l,R[8]=h,R[9]=f,R[10]=p,R[11]=d,R[12]=m,R[13]=v,R[14]=g,R[15]=b,R[16]=y,R[17]=_,R[18]=E,R[19]=A,this._update(this,R)},t}(N),C=function(e){function t(t,r,n,i,o){var a=e.call(this,t,r,n,i)||this;return a._params=o,a}return Object(n.c)(t,e),Object.defineProperty(t.prototype,"x",{get:function(){return this._params.x},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this._params.y},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"z",{get:function(){return this._params.z},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this._params.width},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._params.height},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"originX",{get:function(){return this._params.originX},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"originY",{get:function(){return this._params.originY},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"u0",{get:function(){return this._params.u0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"v0",{get:function(){return this._params.v0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"u1",{get:function(){return this._params.u1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"v1",{get:function(){return this._params.v1},enumerable:!0,configurable:!0}),t.prototype.update=function(e){e&&(this._params=Object(n.a)(Object(n.a)({},this._params),e));var t=this._params,r=t.x,i=t.y,o=t.z,a=t.originX,s=t.originY,c=t.width,l=t.height,h=t.u0,f=t.v0,p=t.u1,d=t.v1,m=t.scale,v=t.angle,g=-a,b=-s,y=g+c,_=b,E=g+c,A=b+l,R=g,w=b+l,T=g*m,B=b*m,O=y*m,x=_*m,U=E*m,S=A*m,L=R*m,P=w*m;if(0!==(0|v)){var j=u.cos(v),F=u.sin(v);T=(g*j+b*F)*m,B=(b*j-g*F)*m,O=(y*j+_*F)*m,x=(_*j-y*F)*m,U=(E*j+A*F)*m,S=(A*j-E*F)*m,L=(R*j+w*F)*m,P=(w*j-R*F)*m}var N=this._data;N[0]=T+r,N[1]=B+i,N[2]=o,N[3]=h,N[4]=f,N[5]=O+r,N[6]=x+i,N[7]=o,N[8]=p,N[9]=f,N[10]=U+r,N[11]=S+i,N[12]=o,N[13]=p,N[14]=d,N[15]=L+r,N[16]=P+i,N[17]=o,N[18]=h,N[19]=d,this._update(this,N)},t}(N),D=64,G=6,M=4,X=G*M,Y=1,V=function(e){function t(t){var r=e.call(this)||this;return r._capacity=D,r._dataVert=new Float32Array(D*X),r._sprites=[],r._update=function(e,t){r.scene?(e.$index<0&&r._allocate(e),r._dataVert.set(t,X*e.$index)):r._deferedSpritesUpdate.set(e.id,[e,t])},r._destroy=function(e){var t=r._sprites.pop();t?(t.$index!==e.$index&&(t.$index=e.$index,r._sprites[t.$index]=t,t.update()),e.$index=-1):console.error("You tried to destroy a Sprite that is not owned by this painter!",e)},r._atlas=t.atlas,r._deferedSpritesUpdate=new Map,r}return Object(n.c)(t,e),Object.defineProperty(t.prototype,"atlas",{get:function(){return this._atlas},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"count",{get:function(){return this._sprites.length},enumerable:!0,configurable:!0}),t.prototype.createSprite=function(e){var t=this.atlas,r=t.width||64,i=t.height||64,o=new Float32Array(X),a=new C(""+Y++,o,this._update,this._destroy,Object(n.a)({x:0,y:0,z:0,width:r,height:i,originX:.5*r,originY:.5*r,u0:0,v0:0,u1:1,v1:1,scale:1,angle:0},e));return a.update(),a},t.prototype.createQuad=function(e){var t=new Float32Array(X),r=new I(""+Y++,t,this._update,this._destroy,Object(n.a)({xTL:0,yTL:0,zTL:0,uTL:0,vTL:0,xTR:1024,yTR:0,zTR:0,uTR:1,vTR:0,xBR:1024,yBR:1024,zBR:0,uBR:1,vBR:1,xBL:0,yBL:1024,zBL:0,uBL:0,vBL:1},e));return r.update(),r},t.prototype._allocate=function(e){this._capacity<=this.count&&this._allocateNewBlock(),e.$index=this.count,this._sprites.push(e)},t.prototype._allocateNewBlock=function(){this._capacity+=D;var e=this.scene,t=this._buffElem;if(!e)throw Error("No scene!");if(!t)throw Error("No buffElem!");var r=e.gl;r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t),r.bufferData(r.ELEMENT_ARRAY_BUFFER,W(this._capacity),r.DYNAMIC_DRAW);var n=new Float32Array(this._capacity*X);n.set(this._dataVert),this._dataVert=n},t.prototype.render=function(){var e=this,t=e.scene,r=e._prg,n=e.atlas,i=e._buffVert,o=e._buffElem;if(t&&r&&n&&i&&o){var a=t.gl;a.bindBuffer(a.ARRAY_BUFFER,i),a.bufferData(a.ARRAY_BUFFER,this._dataVert,a.DYNAMIC_DRAW),a.enable(a.DEPTH_TEST),r.use(),n.activate();var s=r;s.$uniTexture=0,s.$uniWidth=t.width,s.$uniHeight=t.height,r.bindAttribs(i,"attXYZ","attUV"),a.bindBuffer(a.ARRAY_BUFFER,i),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,o),a.drawElements(a.TRIANGLES,G*this.count,a.UNSIGNED_SHORT,0)}},t.prototype.initialize=function(e){this._prg=this.createProgram({vert:"uniform float uniWidth;\nuniform float uniHeight;\nattribute vec3 attXYZ;\nattribute vec2 attUV;\nvarying vec2 varUV;\n\nconst float RESOLUTION = 512.0;\nconst float INV_RESOLUTION = 1.0 / RESOLUTION;\n\nvoid main() {\n  varUV = attUV;\n  float widestSide = max(uniWidth, uniHeight);\n  float w = widestSide / uniWidth;\n  float h = widestSide / uniHeight;\n  float x = w * (attXYZ.x - RESOLUTION) * INV_RESOLUTION;\n  float y = h * (attXYZ.y - RESOLUTION) * INV_RESOLUTION;\n\n  gl_Position = vec4(x, -y, attXYZ.z, 1.0);\n}\n",frag:"precision mediump float;\nuniform sampler2D uniTexture;\nvarying vec2 varUV;\n\nvoid main() {\n  vec4 color = texture2D( uniTexture, varUV );\n  if (color.a < 1.0) discard;\n  gl_FragColor = color;\n}\n"});var t=e.gl,r=t.createBuffer();if(!r)throw this.fatal("Not enough memory to create an array buffer!");t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,this._dataVert,t.DYNAMIC_DRAW),this._buffVert=r;var n=t.createBuffer();if(!n)throw this.fatal("Not enough memory to create an array buffer!");t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n),t.bufferData(t.ELEMENT_ARRAY_BUFFER,W(D),t.DYNAMIC_DRAW),this._buffElem=n,this.manageDeferedSpritesUpdates()},t.prototype.destroy=function(){var e=this.scene,t=this._buffVert,r=this._buffElem;if(e&&t&&r){var n=e.gl;n.deleteBuffer(t),n.deleteBuffer(r)}},t.prototype.manageDeferedSpritesUpdates=function(){var e,t;if(0!==this._deferedSpritesUpdate.size)try{for(var r=Object(n.f)(this._deferedSpritesUpdate.values()),i=r.next();!i.done;i=r.next()){var o=i.value,a=Object(n.e)(o,2),s=a[0],c=a[1];this._update(s,c)}}catch(u){e={error:u}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}},t}(g),k=1,z=2,H=3;function W(e){for(var t=new Uint16Array(G*e),r=0,n=0,i=0;i<e;i++){var o=n+k,a=n+z,s=n+H;t[r+0]=n,t[r+1]=s,t[r+2]=o,t[r+3]=o,t[r+4]=s,t[r+5]=a,n+=M,r+=G}return t}function $(e){for(var t=[],r=0;r<3*e;r++)t.push(Math.random());return t}var q={Background:b,Clear:F,Painter:g,Sprites:V,Voronoi:function(e){function t(t){var r=e.call(this)||this;if(r.params=Object(n.a)({seeds:$(20),colors:$(20),border:0,light:0,scaleX:1,scaleY:1},t),r.params.seeds.length%3!==0)throw Error('The length of "seeds" must be an integral multiple of 3!');if(r.params.seeds.length!==r.params.colors.length)throw Error('"seeds" and "colors" must have the same length!');return r.seeds=new Float32Array(r.params.seeds),r.colors=new Float32Array(r.params.colors),r}return Object(n.c)(t,e),t.prototype.render=function(){var e=this.scene,t=this.prg,r=this.buff;if(e&&t&&r){var n=this.params,i=n.border,o=n.scaleX,a=n.scaleY,s=i,c=e.gl;c.enable(c.DEPTH_TEST),t.use(),t.setUniform("uniSeeds",this.seeds),t.setUniform("uniColors",this.colors),t.setUniform("uniLight",this.params.light),t.setUniform("uniThickness",s),t.setUniform("uniScaleX",o),t.setUniform("uniScaleY",a),t.bindAttribs(r,"attXY"),c.bindBuffer(c.ARRAY_BUFFER,r),c.drawArrays(c.TRIANGLE_STRIP,0,4)}},t.prototype.destroy=function(e){var t=e.gl,r=this.buff;r&&t.deleteBuffer(r)},t.prototype.initialize=function(e){this.prg=this.createProgram({frag:'precision mediump float;\n\n#include "count"\n\nconst vec3 WHITE = vec3(1,1,1);\nconst vec3 BLACK = vec3(0,0,0);\n\nuniform float uniSeeds[COUNT];\nuniform float uniColors[COUNT];\nuniform float uniLight;\nuniform float uniThickness;\n\n/**\n * The coords of a and b must be in the range [0;1].\n */\nfloat distSquared(vec2 a, vec2 b) {\n  float x = abs(a.x - b.x);\n  if (x > .5) x = 1.0 - x;\n  float y = abs(a.y - b.y);\n  if (y > .5) y = 1.0 - y;\n\n  return x*x + y*y;\n}\n\nvarying vec2 varUV;\n\nvoid main() {\n  vec2 M = vec2(fract(varUV.x), fract(varUV.y));\n\n  float distA = distSquared(M, vec2(uniSeeds[0], uniSeeds[1])) * uniSeeds[2];\n  vec3 seedA = vec3(uniSeeds[0], uniSeeds[1], uniSeeds[2]);\n  vec3 colorA = vec3(uniColors[0], uniColors[1], uniColors[2]);\n  float distB = distSquared(M, vec2(uniSeeds[3], uniSeeds[4])) * uniSeeds[5];\n  vec3 seedB = vec3(uniSeeds[3], uniSeeds[4], uniSeeds[5]);\n  vec3 colorB = vec3(uniColors[3], uniColors[4], uniColors[5]);\n\n  if (distB < distA) {\n    float swaperDist = distA;\n    distA = distB;\n    distB = swaperDist;\n    vec3 swaperSeed = seedA;\n    seedA = seedB;\n    seedB = swaperSeed;\n    vec3 swaperColor = colorA;\n    colorA = colorB;\n    colorB = swaperColor;\n  }\n\n  float dist;\n  vec3 seed;\n  vec3 color;\n\n  for (int i = 6; i < COUNT; i+=3) {\n    seed = vec3(uniSeeds[i], uniSeeds[i+1], uniSeeds[i+2]);\n    color = vec3(uniColors[i], uniColors[i+1], uniColors[i+2]);\n    dist = distSquared(M, seed.xy) * seed.z;\n    if (dist < distA) {\n      distB = distA;\n      seedB = seedA;\n      colorB = colorA;\n      distA = dist;\n      seedA = seed;\n      colorA = color;\n    }\n    else if (dist < distB) {\n      distB = dist;\n      seedB = seed;\n      colorB = color;\n    }\n  }\n\n/*\n  vec2 AM = M.xy - seedA.xy;\n  vec2 AB = seedB.xy - seedA.xy;\n  vec2 AB1 = normalize(AB);\n  float semiLengthAB = length(AB) * 0.5;\n  float distanceFromBorder = semiLengthAB - dot(AM, AB1);\n*/\n\n  float dA = distA;\n  float dB = distB;\n  float distanceFromBorder = dB - dA;\n  float alpha;\n  vec3 color0;\n  vec3 color1;\n\n  if (distanceFromBorder < uniThickness) {\n      // Border.\n      color0 = BLACK;\n      color1 = colorA;\n      alpha = smoothstep(0.0, uniThickness, distanceFromBorder);\n  } else {\n      // Cell.\n      color0 = colorA;\n      color1 = mix(colorA, WHITE, uniLight);\n      alpha = (distanceFromBorder - uniThickness) / (dB - uniThickness);\n  }\n\n  gl_FragColor = vec4(mix(color0, color1, alpha), 1);\n}\n',vert:"uniform float uniScaleX;\nuniform float uniScaleY;\n\nattribute vec2 attXY;\nvarying vec2 varUV;\n\nvoid main() {\n  varUV = vec2(attXY.x * uniScaleX, attXY.y * uniScaleY);\n  float x = (attXY.x * 2.0) - 1.0;\n  float y = 1.0 - (attXY.y * 2.0);\n  gl_Position = vec4(x, y, 0.0, 1.0);\n}\n"},{count:"const int COUNT = "+this.params.seeds.length+";"});var t=e.gl,r=t.createBuffer();if(!r)throw this.fatal("Not enough memory to create an array buffer!");t.bindBuffer(t.ARRAY_BUFFER,r),t.bufferData(t.ARRAY_BUFFER,new Float32Array([0,0,0,1,1,0,1,1]),t.STATIC_DRAW),this.buff=r},t}(g)},Z=function(){function e(e,t){this.gl=e,this._name=t,this._ready=!1,this._width=0,this._height=0;var r=e.createTexture();if(!r)throw new Error("Unable to create a new texture!");this.texture=r,e.bindTexture(e.TEXTURE_2D,r),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR)}return Object.defineProperty(e.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ready",{get:function(){return this._ready},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this._ready=!1;var e=this.gl,t=this.texture;e.deleteTexture(t)},e.prototype.activate=function(e){void 0===e&&(e=0);var t=this.gl,r=this.texture,n=[t.TEXTURE0,t.TEXTURE1,t.TEXTURE2,t.TEXTURE3,t.TEXTURE4,t.TEXTURE5,t.TEXTURE6,t.TEXTURE7];t.activeTexture(n[Math.abs(e)%n.length]),t.bindTexture(t.TEXTURE_2D,r)},e.prototype.load=function(e){return Object(n.b)(this,void 0,void 0,(function(){return Object(n.d)(this,(function(t){return this._ready=!1,[2,this.loadImage(e.image)]}))}))},e.prototype.loadImage=function(e){return Object(n.b)(this,void 0,void 0,(function(){var t;return Object(n.d)(this,(function(r){return t=this,[2,new Promise((function(r,n){var i=new Image;t._ready=!1,i.onload=function(){var e=t.gl,n=t.texture;e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,i),t._ready=!0,t._width=i.width,t._height=i.height,r()},i.onerror=function(){console.error('Unable to load image "'+name+'": ',e),n()},i.src=e}))]}))}))},e}(),J=function(){function e(e){var t=this;this._x=0,this._y=0,this._down=!1,this._downTime=0,this._eventDown=!1,this._eventUp=!1,this.onMouseMove=function(e){t.computeCoords(e.clientX,e.clientY)},this.onTouchMove=function(e){var r=e.touches[0];t.computeCoords(r.clientX,r.clientY)},this.onMouseDown=function(e){t.onDown(e.clientX,e.clientY)},this.onTouchStart=function(e){var r=e.touches[0];t.onDown(r.clientX,r.clientY)},this.onMouseUp=function(e){t.onUp(e.clientX,e.clientY)},this.onTouchEnd=function(e){var r=e.touches[0];t.onUp(r.clientX,r.clientY)},this.canvas=e,window.addEventListener("mousemove",this.onMouseMove,!0),window.addEventListener("touchmove",this.onTouchMove,!0),window.addEventListener("mousedown",this.onMouseDown,!0),window.addEventListener("touchstart",this.onTouchStart,!0),window.addEventListener("mouseup",this.onMouseUp,!0),window.addEventListener("touchend",this.onTouchEnd,!0)}return e.prototype.reset=function(){this._eventDown=!1,this._eventUp=!1},Object.defineProperty(e.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"down",{get:function(){return this._down},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"eventUp",{get:function(){return this._eventUp},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"eventDown",{get:function(){return this._eventDown},enumerable:!0,configurable:!0}),e.prototype.onDown=function(e,t){0===this._downTime&&(this.computeCoords(e,t),this._down=!0,this._eventDown=!0,this._downTime=Date.now())},e.prototype.onUp=function(e,t){0!==this._downTime&&(this.computeCoords(e,t),this._down=!1,this._eventUp=!0,this._downTime=0)},e.prototype.computeCoords=function(e,t){var r=this.canvas.getBoundingClientRect(),n=e-r.left,i=t-r.top,o=r.width,a=r.height;o>a?(this._x=1024*n/o,this._y=1024*(.5*(1-a/o)+i/o)):(this._x=1024*(.5*(1-o/a)+n/a),this._y=1024*i/a)},e}(),Q=function(e,t){void 0===t&&(t=0);var r=t<=0?window.devicePixelRatio:t,n=e.canvas;if(n instanceof HTMLCanvasElement){var i=Math.floor(n.clientWidth*r),o=Math.floor(n.clientHeight*r);if(n.width!==i||n.height!==o)return n.width=i,n.height=o,e.viewport(0,0,i,o),!0}return!1},K=1,ee=function(){function e(e){var t=this;this.resolution=1,this.onAnimation=null,this.activePainters=[],this.isRendering=!1,this._pointerTap=!1,this.render=function(e){var r,i;if(t.isRendering){window.requestAnimationFrame(t.render);var o=t.gl;Q(o,t.resolution),o.clearDepth(-1),o.clear(o.DEPTH_BUFFER_BIT),o.depthFunc(o.GEQUAL);try{try{for(var a=Object(n.f)(t.activePainters),s=a.next();!s.done;s=a.next()){s.value.render(e)}}catch(u){r={error:u}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(r)throw r.error}}var c=t.onAnimation;"function"===typeof c&&(c(e),t.pointer.reset())}catch(l){console.error(l),t.stop(),console.error("###############################"),console.error("# Rendering has been stopped! #"),console.error("###############################")}}},this._pointer=new J(e);var r=e.getContext("webgl",{});if(!r)throw new Error("Unable to create a WegGL context!");this._gl=r,this.atlases=new Map}return Object.defineProperty(e.prototype,"gl",{get:function(){return this._gl},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"pointer",{get:function(){return this._pointer},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this.gl.drawingBufferWidth},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.gl.drawingBufferHeight},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"pointerTap",{get:function(){return this._pointerTap},enumerable:!0,configurable:!0}),e.prototype.use=function(e){var t,r;try{for(var i=Object(n.f)(e),o=i.next();!o.done;o=i.next()){o.value.scene=this}}catch(a){t={error:a}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}this.activePainters=e.slice()},e.prototype.getAtlas=function(e){return this.atlases.get(e)||null},e.prototype.createAtlas=function(e,t){var r=e.name||this.getNewName(),n=new Z(this.gl,r);return this.atlases.set(r,n),n.load(e).then((function(){"function"===typeof t&&t(e)})),n},e.prototype.destroyAtlas=function(e){var t=this.atlases,r=t.get(e);return!!r&&(t.delete(e),r.destroy(),!0)},e.prototype.start=function(){this.isRendering||(this.isRendering=!0,window.requestAnimationFrame(this.render))},e.prototype.stop=function(){this.isRendering=!1},e.prototype.getNewName=function(){for(;;){var e="atlas-"+K++;if(!this.atlases.has(e))return e}},e}();(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}Object(n.c)(t,e)})(ee),t.a={Calc:u,Painter:q,Scene:ee}}},[[229,10,0,1]]]);
//# sourceMappingURL=voronoi.57d38a16.e20bd2e6.chunk.js.map