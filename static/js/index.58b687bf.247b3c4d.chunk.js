(this.webpackJsonptest=this.webpackJsonptest||[]).push([[2],[,,function(t,e,r){"use strict";var n=function(t){var e="function"===typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},o=(new Float32Array).BYTES_PER_ELEMENT,i=function(){function t(t,e,r){if(void 0===r&&(r={}),"string"!==typeof e.vert)throw Error("[webgl.program] Missing attribute `vert` in argument `codes`!");if("string"!==typeof e.frag)throw Error("[webgl.program] Missing attribute `frag` in argument `codes`!");e=function(t,e){return{vert:a(t.vert,e),frag:a(t.frag,e)}}(e,r),this.gl=t,Object.freeze(this.gl),this.BPE=o,Object.freeze(this.BPE),this._typesNamesLookup=function(t){var e={};for(var r in t)if(r===r.toUpperCase()){var n=t[r];"number"===typeof n&&(e[n]=r)}return e}(t);var n=t.createProgram();if(!n)throw Error("Unable to create WebGLProgram!");this.program=n;var i=function(t,e){return u(t.VERTEX_SHADER,t,e)}(t,e.vert);t.attachShader(n,i);var c=function(t,e){return u(t.FRAGMENT_SHADER,t,e)}(t,e.frag);t.attachShader(n,c),t.linkProgram(n),this.use=function(){t.useProgram(n)},this.attribs=this.createAttributes(),this.uniforms=this.createUniforms()}return t.prototype.createAttributes=function(){for(var t=this.gl,e=this.program,r={},n=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES),o=0;o<n;o++){var i=t.getActiveAttrib(e,o);i&&(i.typeName=this.getTypeName(i.type),i.length=this.getSize(t,i),i.location=t.getAttribLocation(e,i.name),r[i.name]=i,Object.defineProperty(this,"$"+i.name,{value:i.location,writable:!1,enumerable:!0,configurable:!1}))}return r},t.prototype.getSize=function(t,e){switch(e.type){case t.FLOAT_VEC4:return 4;case t.FLOAT_VEC3:return 3;case t.FLOAT_VEC2:return 2;case t.FLOAT:return 1;default:throw Error("[webgl.program:getSize] I don't know the size of the attribute '"+e.name+"' because I don't know the type "+this.getTypeName(e.type)+"!")}},t.prototype.use=function(){this.gl.useProgram(this.program)},t.prototype.getTypeName=function(t){return this._typesNamesLookup[t]},t.prototype.bindAttribs=function(t){for(var e,r,i,a,u=[],c=1;c<arguments.length;c++)u[c-1]=arguments[c];var s=this,f=this.gl;f.bindBuffer(f.ARRAY_BUFFER,t);var h=0;try{for(var l=n(u),p=l.next();!p.done;p=l.next()){var y=p.value;if(!(b=s.attribs[y]))throw Error('Cannot find attribute "'+y+'"!\nIt may be not active because unused in the shader.\nAvailable attributes are: '+Object.keys(s.attribs).map((function(t){return'"'+t+'"'})).join(", ")+" ("+s.attribs.length+")");h+=b.size*b.length*o}}catch(w){e={error:w}}finally{try{p&&!p.done&&(r=l.return)&&r.call(l)}finally{if(e)throw e.error}}var g=0;try{for(var d=n(u),m=d.next();!m.done;m=d.next()){var v=m.value,b=s.attribs[v];f.enableVertexAttribArray(b.location),f.vertexAttribPointer(b.location,b.size*b.length,f.FLOAT,!1,h,g),g+=b.size*b.length*o}}catch(E){i={error:E}}finally{try{m&&!m.done&&(a=d.return)&&a.call(d)}finally{if(i)throw i.error}}},t.prototype.setUniform=function(t,e){this["$"+t]=e},t.prototype.createUniforms=function(){for(var t=this.gl,e=this.program,r={},n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS),o=0;o<n;o++){var i=t.getActiveUniform(e,o);if(i){var a=t.getUniformLocation(e,i.name);a&&(r[i.name]=a,Object.defineProperty(this,"$"+i.name,{set:this.createUniformSetter(i,r[i.name],this._typesNamesLookup),get:this.createUniformGetter(i),enumerable:!0,configurable:!1}))}}return r},t.prototype.createUniformSetter=function(t,e,r){var n=this.gl,o="_$"+t.name;switch(t.type){case n.BYTE:case n.UNSIGNED_BYTE:case n.SHORT:case n.UNSIGNED_SHORT:case n.INT:case n.UNSIGNED_INT:case n.SAMPLER_2D:return 1===t.size?function(t){n.uniform1i(e,t),this[o]=t}:function(t){n.uniform1iv(e,t),this[o]=t};case n.FLOAT:return 1===t.size?function(t){n.uniform1f(e,t),this[o]=t}:function(t){n.uniform1fv(e,t),this[o]=t};case n.FLOAT_VEC2:if(1===t.size)return function(t){n.uniform2fv(e,t),this[o]=t};throw Error("[webgl.program.createWriter] Don't know how to deal arrays of FLOAT_VEC2 in uniform `"+t.name+"'!'");case n.FLOAT_VEC3:if(1===t.size)return function(t){n.uniform3fv(e,t),this[o]=t};throw Error("[webgl.program.createWriter] Don't know how to deal arrays of FLOAT_VEC3 in uniform `"+t.name+"'!'");case n.FLOAT_VEC4:if(1===t.size)return function(t){n.uniform4fv(e,t),this[o]=t};throw Error("[webgl.program.createWriter] Don't know how to deal arrays of FLOAT_VEC4 in uniform `"+t.name+"'!'");case n.FLOAT_MAT3:if(1===t.size)return function(t){n.uniformMatrix3fv(e,!1,t),this[o]=t};throw Error("[webgl.program.createWriter] Don't know how to deal arrays of FLOAT_MAT3 in uniform `"+t.name+"'!'");case n.FLOAT_MAT4:if(1===t.size)return function(t){n.uniformMatrix4fv(e,!1,t),this[o]=t};throw Error("[webgl.program.createWriter] Don't know how to deal arrays of FLOAT_MAT4 in uniform `"+t.name+"'!'");default:throw Error("[webgl.program.createWriter] Don't know how to deal with uniform `"+t.name+"` of type "+r[t.type]+"!")}},t.prototype.createUniformGetter=function(t){var e="_$"+t.name;return function(){return this[e]}},t}();function a(t,e){return t.split("\n").map((function(t){if("#include"!==t.trim().substr(0,8))return t;var r=t.indexOf("#include")+8,n=t.substr(r).trim();"'<\"".indexOf(n.charAt(0))>-1&&(n=n.substr(1,n.length-2));var o=e[n];if("string"!==typeof o)throw console.error("Include <"+n+"> not found in ",e),Error("Include not found in shader: "+n);return o})).join("\n")}function u(t,e,r){if(t!==e.VERTEX_SHADER&&t!==e.FRAGMENT_SHADER)throw Error("Type must be VERTEX_SHADER or FRAGMENT_SHADER!");var n=e.createShader(t);if(!n)throw Error("Unable to create a "+(t===e.VERTEX_SHADER?"VERTEX":"FRAGMENT")+" shader!");if(e.shaderSource(n,r),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS))throw console.log(r),console.error("An error occurred compiling the shader: "+e.getShaderInfoLog(n)),Error("Unable to create a "+(t===e.VERTEX_SHADER?"VERTEX":"FRAGMENT")+" shader!");return n}var c=0,s=function(){function t(t){if(this._name=""+c++,!t.scene)throw Error('Argument "params.scene" is mandatory!');this.scene=t.scene,"string"===typeof t.name&&t.name.length>0&&(this._name=t.name),this.scene.$attachPainter(this)}return t.prototype.destroy=function(){this.scene.$detachPainter(this.name)},Object.defineProperty(t.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),t.prototype.createProgram=function(t,e){return void 0===e&&(e={}),new i(this.scene.gl,t,e)},t.prototype.fatal=function(t){return console.error('Fatal error in Painter "'+this.name+'":',t),new Error(t)},t}();function f(t,e){void 0===e&&(e="");var r=typeof t;return"number"!==r||isNaN(t)?"string"===r?t:e:""+t}var h=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),l=function(t){function e(e){var r=t.call(this,e)||this,n=e.scene,o=e.atlas,i=n.getAtlas(o);if(!i)throw r.fatal('Atlas "'+o+'" not found!');r.atlas=i,r.prg=r.createProgram({vert:p(f(e.align).toUpperCase()),frag:y});var a=n.gl,u=a.createBuffer();if(!u)throw r.fatal("Not enough memory to create an array buffer!");return a.bindBuffer(a.ARRAY_BUFFER,u),a.bufferData(a.ARRAY_BUFFER,new Float32Array([0,0,0,1,1,0,1,1]),a.STATIC_DRAW),r.buff=u,r}return h(e,t),e.prototype.render=function(){var t=this.scene,e=this.prg,r=this.atlas,n=this.buff,o=t.gl;o.disable(o.DEPTH_TEST),e.use(),r.activate(),e.$uniTexture=0,e.setUniform("uniAspectRatio",t.width/t.height),e.bindAttribs(n,"attXY"),o.bindBuffer(o.ARRAY_BUFFER,n),o.drawArrays(o.TRIANGLE_STRIP,0,4)},e}(s);function p(t){var e="",r="";return-1!==t.indexOf("B")?r="location.y -= uniAspectRatio - 1.0;":-1!==t.indexOf("T")&&(r="location.y += uniAspectRatio - 1.0;"),-1!==t.indexOf("R")?e="location.x -= 1.0 / uniAspectRatio - 1.0;":-1!==t.indexOf("L")&&(e="location.x += 1.0 / uniAspectRatio - 1.0;"),"uniform float uniAspectRatio;\nattribute vec2 attXY;\nvarying vec2 varUV;\n\nvoid main() {\n  varUV = attXY;\n  vec2 location = 2.0 * (attXY - vec2(0.5, 0.5));\n\n  if (uniAspectRatio > 1.0) {\n    location.y *= uniAspectRatio;"+r+"\n  } else {\n    location.x /= uniAspectRatio;"+e+"\n  }\n\n  gl_Position = vec4(location.x, -location.y, -1.0, 1.0);\n}"}var y="precision mediump float;\nuniform sampler2D uniTexture;\nvarying vec2 varUV;\n\nvoid main() {\n  vec4 color = texture2D( uniTexture, varUV );\n  gl_FragColor = color;\n}",g=function(t,e){var r="function"===typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(u){o={error:u}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a},d=function(){function t(t){void 0===t&&(t="#000000"),this.R=0,this.G=0,this.B=0,this.H=0,this.S=0,this.L=0,this.A=1,this.parse(t)}return t.prototype.toArrayRGB=function(){return[this.R,this.G,this.B]},t.prototype.toArrayRGBA=function(){return[this.R,this.G,this.B,this.A]},t.isValid=function(t){if("string"!==typeof t)return!1;if("#"!==t.charAt(0))return!1;switch(t.length){case 4:case 5:case 7:case 9:return!0}return!1},t.normalize=function(e){return new t(e).stringify()},t.luminance=function(e){return new t(e).luminance()},t.luminanceStep=function(e){return new t(e).luminanceStep()},t.fromArrayRGB=function(t){var e=g(t,3),r=e[0],n=e[1],o=e[2];return this.newRGB(r,n,o)},t.fromArrayRGBA=function(t){var e=g(t,4),r=e[0],n=e[1],o=e[2],i=e[3];return this.newRGBA(r,n,o,i)},t.mix=function(e,r,n){void 0===n&&(n=.5);var o=1-n;return t.newRGBA(n*r.R+o*e.R,n*r.G+o*e.G,n*r.B+o*e.B,n*r.A+o*e.A)},t.ramp=function(e,r){if(void 0===r&&(r=.5),0===e.length)return t.newBlack();if(1===e.length)return e[0];var n=e.length-1,o=Math.floor(r*n),i=e[o];if(o===n)return i;var a=e[o+1],u=o+r/n;return t.mix(i,a,u)},t.newBlack=function(){return t.newRGB(0,0,0)},t.newWhite=function(){return t.newRGB(1,1,1)},t.newRGB=function(e,r,n){var o=new t;return o.R=e,o.G=r,o.B=n,o.A=1,o},t.newRGBA=function(e,r,n,o){var i=new t;return i.R=e,i.G=r,i.B=n,i.A=o,i},t.prototype.parse=function(t){void 0===t&&(t="#000000");var e=t.trim().toUpperCase();return!!this.parseHexa.call(this,e)||(!!this.parseRGB.call(this,e)||(!!this.parseRGBA.call(this,e)||!!this.parseHSL.call(this,e)))},t.prototype.luminance=function(){return.2126*this.R+.7152*this.G+.0722*this.B},t.prototype.luminanceStep=function(){return this.luminance()<.6?0:1},t.prototype.stringify=function(){var t=O(255*this.R)+O(255*this.G)+O(255*this.B);return this.A<1&&(t+=O(255*this.A)),"#"+t},t.prototype.copy=function(){var e=new t;return e.R=this.R,e.G=this.G,e.B=this.B,e.A=this.A,e.H=this.H,e.S=this.S,e.L=this.L,e},t.prototype.hsl2rgb=function(){var t=6*this.H,e=this.S,r=this.L,n=(1-Math.abs(2*r-1))*e,o=n*(1-Math.abs(t%2-1)),i=0,a=0,u=0;t<3?t<1?(i=n,a=o,u=0):t<2?(i=o,a=n,u=0):(i=0,a=n,u=o):t<4?(i=0,a=o,u=n):t<5?(i=o,a=0,u=n):(i=n,a=0,u=o);var c=r-.5*n;this.R=i+c,this.G=a+c,this.B=u+c},t.prototype.rgb2hsl=function(){var t=this.R,e=this.G,r=this.B,n=Math.min(t,e,r),o=Math.max(t,e,r),i=o-n;this.L=.5*(o+n),i<1e-6?(this.H=0,this.S=0):(this.S=i/(1-Math.abs(2*this.L-1)),this.H=o===t?e>=r?m*((e-r)/i):1-m*((r-e)/i):o===e?m*(2+(r-t)/i):m*(4+(t-e)/i))},t.prototype.parseHexa=function(t){if("#"!==t.charAt(0))return!1;var e=0,r=0,n=0,o=1;switch(t.length){case 4:e=parseInt(t.charAt(1),16)*v,r=parseInt(t.charAt(2),16)*v,n=parseInt(t.charAt(3),16)*v;break;case 5:e=parseInt(t.charAt(1),16)*v,r=parseInt(t.charAt(2),16)*v,n=parseInt(t.charAt(3),16)*v,o=parseInt(t.charAt(4),16)*v;break;case 7:e=parseInt(t.substr(1,2),16)*w,r=parseInt(t.substr(3,2),16)*w,n=parseInt(t.substr(5,2),16)*w;break;case 9:e=parseInt(t.substr(1,2),16)*w,r=parseInt(t.substr(3,2),16)*w,n=parseInt(t.substr(5,2),16)*w,o=parseInt(t.substr(7,2),16)*w}return isNaN(e)||isNaN(r)||isNaN(n)||isNaN(o)?this.R=this.G=this.B=this.A=0:(this.R=e,this.G=r,this.B=n,this.A=o),!0},t.prototype.parseRGB=function(t){var e=_.exec(t);return!!e&&(this.R=T(parseInt(e[1],10)*w),this.G=T(parseInt(e[2],10)*w),this.B=T(parseInt(e[3],10)*w),this.A=1,!0)},t.prototype.parseRGBA=function(t){var e=A.exec(t);return!!e&&(this.R=T(parseInt(e[1],10)*w),this.G=T(parseInt(e[2],10)*w),this.B=T(parseInt(e[3],10)*w),this.A=T(parseFloat(e[4])),!0)},t.prototype.parseHSL=function(t){var e=R.exec(t);return!!e&&(this.H=T(parseInt(e[1],10)*E),this.S=T(parseInt(e[2],10)*b),this.L=T(parseInt(e[3],10)*b),this.A=1,this.hsl2rgb(),!0)},t}(),m=1/6,v=1/15,b=1/99,w=1/255,E=1/359,_=/^RGB[\s(]+([0-9]+)[^0-9]+([0-9]+)[^0-9]+([0-9]+)/,A=/^RGBA[\s(]+([0-9]+)[^0-9]+([0-9]+)[^0-9]+([0-9]+)[^0-9.]+([0-9.]+)/,R=/^HSL[\s(]+([0-9]+)[^0-9]+([0-9]+)[^0-9]+([0-9]+)/;function T(t){return t<0?0:t>1?1:t}function O(t){var e=Math.floor(t).toString(16);return e.length<2&&(e="0"+e),e}var x=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),S=function(t){function e(e){var r=t.call(this,e)||this;return r._red=.8,r._green=.4,r._blue=.2,r._alpha=1,r.color=e.color||"#d72",r}return x(e,t),Object.defineProperty(e.prototype,"red",{get:function(){return this._red},set:function(t){this._red=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"green",{get:function(){return this._green},set:function(t){this._green=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"blue",{get:function(){return this._blue},set:function(t){this._blue=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this._alpha},set:function(t){this._alpha=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"color",{get:function(){var t=new d;return t.R=this._red,t.G=this._green,t.B=this._blue,t.A=this._alpha,t.stringify()},set:function(t){var e=new d(t);this._red=e.R,this._green=e.G,this._blue=e.B,this._alpha=e.A},enumerable:!0,configurable:!0}),e.prototype.render=function(){var t=this.scene.gl;t.clearColor(this._red,this._green,this._blue,this._alpha),t.clear(t.COLOR_BUFFER_BIT)},e}(s),P=function(){return(P=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},B=function(){function t(t,e,r){this.getData=e,this.extra={},this.$index=0,this.$index=t;var n=r.width||50,o=r.height||50;this.params=P({x:0,y:0,z:0,width:n,height:o,originX:n/2,originY:o/2,u0:0,v0:0,u1:1,v1:1,scale:1},r),this.update(this.params)}return t.prototype.update=function(t){this.params=P(P({},this.params),t);var e=this.getData,r=this.$index,n=this.params,o=e(),i=n.x,a=n.y,u=n.z,c=n.originX,s=n.originY,f=n.width,h=n.height,l=n.u0,p=n.v0,y=n.u1,g=n.v1,d=n.scale,m=-c,v=-s,b=m*d,w=v*d,E=(m+f)*d,_=v*d,A=(m+f)*d,R=(v+h)*d,T=m*d,O=(v+h)*d;o[r+0]=b+i,o[r+1]=w+a,o[r+2]=u,o[r+3]=l,o[r+4]=p,o[r+5]=E+i,o[r+6]=_+a,o[r+7]=u,o[r+8]=y,o[r+9]=p,o[r+10]=A+i,o[r+11]=R+a,o[r+12]=u,o[r+13]=y,o[r+14]=g,o[r+15]=T+i,o[r+16]=O+a,o[r+17]=u,o[r+18]=l,o[r+19]=g},Object.defineProperty(t.prototype,"x",{get:function(){return this.params.x},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this.params.y},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"z",{get:function(){return this.params.z},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this.params.width},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this.params.height},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"originX",{get:function(){return this.params.originX},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"originY",{get:function(){return this.params.originY},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"u0",{get:function(){return this.params.u0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"v0",{get:function(){return this.params.v0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"u1",{get:function(){return this.params.u1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"v1",{get:function(){return this.params.v1},enumerable:!0,configurable:!0}),t}(),L="uniform float uniWidth;\nuniform float uniHeight;\nattribute vec3 attXYZ;\nattribute vec2 attUV;\nvarying vec2 varUV;\n\nconst float RESOLUTION = 500.0;\nconst float INV_RESOLUTION = 1.0 / RESOLUTION;\n\nvoid main() {\n  varUV = attUV;\n  float widestSide = max(uniWidth, uniHeight);\n  float w = widestSide / uniWidth;\n  float h = widestSide / uniHeight;\n  float x = w * (attXYZ.x - RESOLUTION) * INV_RESOLUTION;\n  float y = h * (attXYZ.y - RESOLUTION) * INV_RESOLUTION;\n\n  gl_Position = vec4(x, -y, attXYZ.z, 1.0);\n}\n",U="precision mediump float;\nuniform sampler2D uniTexture;\nvarying vec2 varUV;\n\nvoid main() {\n  vec4 color = texture2D( uniTexture, varUV );\n  if (color.a < 1.0) discard;\n  gl_FragColor = color;\n}\n",I=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),N=function(){return(N=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},F=64,G=20;function j(t){for(var e=new Uint16Array(6*t),r=0,n=0,o=0;o<t;o++){var i=n+1,a=n+2,u=n+3;e[r+0]=n,e[r+1]=u,e[r+2]=i,e[r+3]=i,e[r+4]=u,e[r+5]=a,n+=4,r+=6}return e}var D={Background:l,Clear:S,Painter:s,Sprites:function(t){function e(e){var r=t.call(this,e)||this;r.dataVert=new Float32Array(F*G),r.sprites=[],r.count=0,r.capacity=F,r.getData=function(){return r.dataVert};var n=e.scene,o=e.atlas,i=n.getAtlas(o);if(!i)throw r.fatal('Atlas "'+o+'" not found!');r.atlas=i,r.prg=r.createProgram({vert:L,frag:U});var a=n.gl,u=a.createBuffer();if(!u)throw r.fatal("Not enough memory to create an array buffer!");a.bindBuffer(a.ARRAY_BUFFER,u),a.bufferData(a.ARRAY_BUFFER,r.dataVert,a.DYNAMIC_DRAW),r.buffVert=u;var c=a.createBuffer();if(!c)throw r.fatal("Not enough memory to create an array buffer!");return a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,c),a.bufferData(a.ELEMENT_ARRAY_BUFFER,j(F),a.DYNAMIC_DRAW),r.buffElem=c,r}return I(e,t),e.prototype.createSprite=function(t){var e=this.count*G;this.count++,this.count>=this.capacity&&this.allocateNewBlock();var r=this.atlas,n=r.width,o=r.height,i=new B(e,this.getData,N({width:n,height:o},t));return this.sprites.push(i),i},e.prototype.render=function(){var t=this,e=t.scene,r=t.prg,n=t.atlas,o=t.buffVert,i=t.buffElem,a=e.gl;a.bindBuffer(a.ARRAY_BUFFER,o),a.bufferData(a.ARRAY_BUFFER,this.dataVert,a.DYNAMIC_DRAW),a.enable(a.DEPTH_TEST),r.use(),n.activate();var u=r;u.$uniTexture=0,u.$uniWidth=e.width,u.$uniHeight=e.height,r.bindAttribs(o,"attXYZ","attUV"),a.bindBuffer(a.ARRAY_BUFFER,o),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,i),a.drawElements(a.TRIANGLES,6*this.count,a.UNSIGNED_SHORT,0)},e.prototype.allocateNewBlock=function(){this.capacity+=F;var t=this.scene.gl,e=this.buffElem;t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e),t.bufferData(t.ELEMENT_ARRAY_BUFFER,j(this.capacity),t.DYNAMIC_DRAW);var r=new Float32Array(this.capacity*G);r.set(this.dataVert),this.dataVert=r},e}(s)},k=function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{c(n.next(t))}catch(e){i(e)}}function u(t){try{c(n.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,u)}c((n=n.apply(t,e||[])).next())}))},M=function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(u){i=[6,u],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},V=function(){function t(t,e){this.gl=t,this._name=e,this._ready=!1,this._width=0,this._height=0;var r=t.createTexture();if(!r)throw"Unable to create a new texture!";this.texture=r,t.bindTexture(t.TEXTURE_2D,r),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR)}return Object.defineProperty(t.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ready",{get:function(){return this._ready},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){this._ready=!1;var t=this.gl,e=this.texture;t.deleteTexture(e)},t.prototype.activate=function(t){void 0===t&&(t=0);var e=this.gl,r=this.texture,n=[e.TEXTURE0,e.TEXTURE1,e.TEXTURE2,e.TEXTURE3,e.TEXTURE4,e.TEXTURE5,e.TEXTURE6,e.TEXTURE7];e.activeTexture(n[Math.abs(t)%n.length]),e.bindTexture(e.TEXTURE_2D,r)},t.prototype.load=function(t){return k(this,void 0,void 0,(function(){return M(this,(function(e){return this._ready=!1,[2,this.loadImage(t.image)]}))}))},t.prototype.loadImage=function(t){return k(this,void 0,void 0,(function(){var e;return M(this,(function(r){return e=this,[2,new Promise((function(r,n){var o=new Image;e._ready=!1,o.onload=function(){var t=e.gl,n=e.texture;t.bindTexture(t.TEXTURE_2D,n),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,o),e._ready=!0,e._width=o.width,e._height=o.height,r()},o.onerror=function(){console.error('Unable to load image "'+name+'": ',t),n()},o.src=t}))]}))}))},t}(),X=function(t,e){void 0===e&&(e=0),e<=0&&(e=window.devicePixelRatio);var r=t.canvas,n=Math.floor(r.clientWidth*e),o=Math.floor(r.clientHeight*e);return(r.width!==n||r.height!==o)&&(r.width=n,r.height=o,t.viewport(0,0,n,o),!0)},Y=function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{c(n.next(t))}catch(e){i(e)}}function u(t){try{c(n.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,u)}c((n=n.apply(t,e||[])).next())}))},H=function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(u){i=[6,u],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},C=function(t){var e="function"===typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},W=function(){function t(t){var e=this;this.activePainters=[],this.isRendering=!1,this.resolution=1,this.onAnimation=null,this.render=function(t){var r,n;if(e.isRendering){window.requestAnimationFrame(e.render);var o=e.gl;X(o,e.resolution),o.clearDepth(-1),o.clear(o.DEPTH_BUFFER_BIT),o.depthFunc(o.GEQUAL);try{try{for(var i=C(e.activePainters),a=i.next();!a.done;a=i.next()){a.value.render(t)}}catch(c){r={error:c}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}var u=e.onAnimation;"function"===typeof u&&u(t)}catch(s){console.error(s),e.stop(),console.error("###############################"),console.error("# Rendering has been stopped! #"),console.error("###############################")}}};var r=t.getContext("webgl",{});if(!r)throw"Unable to create a WegGL context!";this.gl=r,this.atlases=new Map,this.painters=new Map}return t.prototype.getAtlas=function(t){return this.atlases.get(t)||null},t.prototype.createAtlas=function(t){return Y(this,void 0,void 0,(function(){var e,r;return H(this,(function(n){switch(n.label){case 0:return e=t.name,r=new V(this.gl,e),this.atlases.set(e,r),[4,r.load(t)];case 1:return n.sent(),[2,r]}}))}))},t.prototype.destroyAtlas=function(t){var e=this.atlases,r=e.get(t);return!!r&&(e.delete(t),r.destroy(),!0)},t.prototype.$attachPainter=function(t){return!this.painters.has(t.name)&&(this.painters.set(t.name,t),this.activePainters=this.activePainters.filter((function(t){return t.name})),this.activePainters.push(t),!0)},t.prototype.$detachPainter=function(t){return!this.painters.has(t)&&(this.painters.delete(t),this.activePainters=this.activePainters.filter((function(t){return t.name})),!0)},Object.defineProperty(t.prototype,"width",{get:function(){return this.gl.drawingBufferWidth},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this.gl.drawingBufferHeight},enumerable:!0,configurable:!0}),t.prototype.start=function(){this.isRendering||(this.isRendering=!0,window.requestAnimationFrame(this.render))},t.prototype.stop=function(){this.isRendering=!1},t}();e.a={Painter:D,Scene:W}},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,"a",(function(){return n}))},function(t,e,r){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}r.d(e,"a",(function(){return o}))},function(t,e,r){"use strict";function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.d(e,"a",(function(){return n}))},function(t,e,r){"use strict";function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?function(t){return n(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)})(t)}function i(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}r.d(e,"a",(function(){return i}))},function(t,e,r){"use strict";function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}r.d(e,"a",(function(){return o}))},function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));var n=r(3),o=r(4),i=r(6),a=r(5),u=r(7),c=r(0),s=r.n(c),f=(r(12),function(t){function e(){var t,r;Object(n.a)(this,e);for(var o=arguments.length,u=new Array(o),c=0;c<o;c++)u[c]=arguments[c];return(r=Object(i.a)(this,(t=Object(a.a)(e)).call.apply(t,[this].concat(u)))).ref=s.a.createRef(),r}return Object(u.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this.ref.current;t&&this.props.init(t)}},{key:"render",value:function(){return s.a.createElement("canvas",{ref:this.ref,className:"Canvas"})}}]),e}(s.a.Component))},function(t,e,r){},function(t,e,r){},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),i=r(1),a=r.n(i),u=(r(9),r(10),function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Tutorials"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"tuto-clear.html"},"Hello world!")),o.a.createElement("li",null,o.a.createElement("a",{href:"tuto-background.html"},"Scalable background")),o.a.createElement("li",null,o.a.createElement("a",{href:"tuto-sprites-1.html"},"Sprites (1)"))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},function(t,e,r){},,,,function(t,e,r){t.exports=r(31)},,,,function(t,e,r){t.exports=r.p+"static/media/atlas.36c1c081.png"},function(t,e,r){t.exports=r.p+"static/media/background.0935ef34.png"},,,,,,,,,function(t,e,r){r(11),t.exports=r(34)},function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new x(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=R(a,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=l;var c=s(t,e,r);if("normal"===c.type){if(n=r.done?p:h,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var f="suspendedStart",h="suspendedYield",l="executing",p="completed",y={};function g(){}function d(){}function m(){}var v={};v[i]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(S([])));w&&w!==r&&n.call(w,i)&&(v=w);var E=m.prototype=g.prototype=Object.create(v);function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function A(t){var e;this._invoke=function(r,o){function i(){return new Promise((function(e,i){!function e(r,o,i,a){var u=s(t[r],t,o);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"===typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(f).then((function(t){c.value=t,i(c)}),(function(t){return e("throw",t,i,a)}))}a(u.arg)}(r,o,e,i)}))}return e=e?e.then(i,i):i()}}function R(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,R(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function S(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return d.prototype=E.constructor=m,m.constructor=d,m[u]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},_(A.prototype),A.prototype[a]=function(){return this},t.AsyncIterator=A,t.async=function(e,r,n,o){var i=new A(c(e,r,n,o));return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(E),E[u]="Generator",E[i]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},,,function(t,e,r){"use strict";r.r(e);var n=r(16),o=r.n(n);function i(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}var a=r(0),u=r.n(a),c=r(1),s=r.n(c),f=r(2),h=r(8),l=r(20),p=r.n(l),y=r(21),g=r.n(y);function d(){var t;return t=o.a.mark((function t(e){var r,n,i,a,u,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=function(t,e){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=0;o<r;o++){var i=n[e],a=u.createSprite(i);a.extra.speed1=.001*(1+Math.random()),a.extra.speed2=.001*(1+Math.random()),t.push(a)}},n={bol:(r=function(t,e,r,n){return{width:r,height:n,u0:t/524,v0:e/856,u1:(t+r)/524,v1:(e+n)/856}})(0,0,542,318),corbeille:r(0,320,402,524),tasse:r(401,467,122,119),citron:r(405,675,117,110),croissant:r(415,785,104,72),framboise:r(400,617,61,58),noisette:r(462,589,61,85),the:r(402,316,124,149)},(a=new f.a.Scene(e)).createAtlas({name:"atlas",image:p.a}),a.createAtlas({name:"background",image:g.a}),new f.a.Painter.Background({scene:a,atlas:"background",align:"B"}),u=new f.a.Painter.Sprites({scene:a,atlas:"atlas"}),i(c=[],"bol"),i(c,"corbeille"),i(c,"tasse",12),i(c,"citron",17),i(c,"croissant",23),i(c,"framboise",47),i(c,"noisette",20),i(c,"the",10),a.onAnimation=function(t){for(var e=0;e<c.length;e++){var r=c[e],n=r.extra.speed1,o=r.extra.speed2,i=120*(1+Math.cos(t*n))+10,a=t*o,u=500+i*Math.cos(a),s=500+i*Math.sin(a),f=i/500;r.update({x:u,y:s,z:f,scale:(i+250)/1e3})}},a.start();case 19:case"end":return t.stop()}}),t)})),(d=function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function u(t){i(a,n,o,u,c,"next",t)}function c(t){i(a,n,o,u,c,"throw",t)}u(void 0)}))}).apply(this,arguments)}s.a.render(u.a.createElement("div",null,u.a.createElement(h.a,{init:function(t){return d.apply(this,arguments)}})),document.getElementById("root"))}],[[30,6,0]]]);
//# sourceMappingURL=index.58b687bf.247b3c4d.chunk.js.map