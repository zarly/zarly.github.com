webpackJsonp([1],{"+Wnn":function(t,e,n){"use strict";var i=n("d7EF"),r=n.n(i),o=n("Dd8w"),a=n.n(o),s=n("Zrlr"),c=n.n(s),u=n("wxAW"),l=n.n(u),f=function(){function t(e){c()(this,t),this.id=e.id,this.text=e.text,this.inputs=e.inputs||[],this.outputs=e.outputs||[],this.view=e.view||{deleted:!1},this.context=e.context||{disabled:!0,inverted:!1}}return l()(t,[{key:"serialize",value:function(){return{id:this.id,text:this.text,view:this.view,context:this.context}}}]),t}(),d=function(){function t(){c()(this,t),this.items=[]}return l()(t,[{key:"getItemById",value:function(t){return this.items[t-1]}},{key:"getFilteredItems",value:function(t,e){var n=(t=t.filter(function(t){return!t.context.disabled})).filter(function(t){return!t.context.inverted}),i=t.filter(function(t){return t.context.inverted}),r=this.items.filter(function(t){return!t.view.deleted});return r=r.filter(function(t){for(var e=t.inputs,i=0;i<n.length;i++)if(-1===e.indexOf(n[i]))return!1;return!0}).filter(function(t){for(var e=t.inputs,n=0;n<i.length;n++)if(-1!==e.indexOf(i[n]))return!1;return-1===i.indexOf(t)})}},{key:"addItem",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=new f(a()({},t,{id:this.items.length+1}));this.items.push(n),e.filter(function(t){return!t.context.disabled&&!t.context.inverted}).forEach(function(t){t.outputs.push(n),n.inputs.push(t)})}},{key:"removeItem",value:function(t){t.view.deleted=!0}},{key:"serialize",value:function(){return{items:this.items.map(function(t){return t.serialize()}),links:this.items.reduce(function(t,e){return e.outputs.forEach(function(n){t.push([e.id,n.id])}),t},[])}}},{key:"deserialize",value:function(t){var e=this,n=t;this.items=n.items.map(function(t){return new f(t)}),n.links.forEach(function(t){var n=r()(t,2),i=n[0],o=n[1];e.items[i-1].outputs.push(e.items[o-1]),e.items[o-1].inputs.push(e.items[i-1])})}}]),t}();e.a=d},"+tPU":function(t,e,n){n("xGkn");for(var i=n("7KvD"),r=n("hJx8"),o=n("/bQp"),a=n("dSzd")("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<s.length;c++){var u=s[c],l=i[u],f=l&&l.prototype;f&&!f[a]&&r(f,a,u),o[u]=o.Array}},"/bQp":function(t,e){t.exports={}},"00xm":function(t,e,n){var i=n("HbYt");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n("rjj0").default)("19df5180",i,!1,{})},"11fP":function(t,e,n){"use strict";var i={name:"ItemMenu",props:{item:{type:Object}}},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ItemMenu"},[n("q-list",{staticStyle:{"min-width":"150px","max-height":"300px"},attrs:{link:"",separator:""}},[n("q-item",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],nativeOn:{click:function(e){t.$emit("edit")}}},[n("q-item-main",{attrs:{label:"Редактировать"}})],1),t._v(" "),n("q-item",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],nativeOn:{click:function(e){t.$router.push("/item/detail/"+t.item.id)}}},[n("q-item-main",{attrs:{label:"Свойства"}})],1),t._v(" "),n("q-item",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],nativeOn:{click:function(e){t.item.view.deleted=!0}}},[n("q-item-main",{attrs:{label:"Удалить"}})],1)],1)],1)},o=[];r._withStripped=!0;var a=n("XyMi"),s=Object(a.a)(i,r,o,!1,null,null,null);s.options.__file="src\\components\\item-menu.vue";e.a=s.exports},"3fs2":function(t,e,n){var i=n("RY/4"),r=n("dSzd")("iterator"),o=n("/bQp");t.exports=n("FeBl").getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||o[i(t)]}},"4mcu":function(t,e){t.exports=function(){}},"5PlU":function(t,e,n){var i=n("RY/4"),r=n("dSzd")("iterator"),o=n("/bQp");t.exports=n("FeBl").isIterable=function(t){var e=Object(t);return void 0!==e[r]||"@@iterator"in e||o.hasOwnProperty(i(e))}},"880/":function(t,e,n){t.exports=n("hJx8")},"94VQ":function(t,e,n){"use strict";var i=n("Yobk"),r=n("X8DO"),o=n("e6n0"),a={};n("hJx8")(a,n("dSzd")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=i(a,{next:r(1,n)}),o(t,e+" Iterator")}},"9bBU":function(t,e,n){n("mClu");var i=n("FeBl").Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},ApfQ:function(t,e,n){var i=n("ixd4");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n("rjj0").default)("bc355948",i,!1,{})},BJNg:function(t,e,n){"use strict";e.b=function(){if(o)return;o=!0;var t=i.b.get.item("data");t&&(e=t,s.file_data=new r.a,s.file_data.deserialize(e.file_data),s.file_path=e.file_path,s.view_context=e.view_context.map(function(t){return s.file_data.items[t]}));var e;setInterval(a,6e4),window.addEventListener("beforeunload",a)},e.c=function(){s.file_data=new r.a,s.file_path=null,s.view_context=[],s.clipboard=null};var i=n("7109"),r=n("+Wnn"),o=!1;function a(){var t;i.b.set("data",((t={}).file_data=s.file_data.serialize(),t.file_path=s.file_path,t.view_context=s.view_context.map(function(t){return s.file_data.items.indexOf(t)}),t))}var s={file_data:new r.a,file_path:null,view_context:[],clipboard:null};e.a=s},BO1k:function(t,e,n){t.exports={default:n("fxRn"),__esModule:!0}},BV0O:function(t,e,n){var i=n("e0+d");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n("rjj0").default)("b298dcfe",i,!1,{})},C4MV:function(t,e,n){t.exports={default:n("9bBU"),__esModule:!0}},EGZi:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},HbYt:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.context-area {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-align: start;\n      align-items: flex-start;\n  -ms-flex: 1;\n      flex: 1;\n  padding-right: 5px;\n}\n.context-area > * {\n  margin: 0 5px 3px 0;\n}\n.context-area > *:last-child {\n  margin-right: 0;\n}\n.context-actions .add-btn {\n  cursor: pointer;\n}\n",""])},"Hy+I":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.TezisItem[data-v-658164d1] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  font-size: 16px;\n}\n.TezisItem .q-icon[data-v-658164d1] {\n  cursor: pointer;\n  padding: 2px;\n}\n.TezisItem .q-icon[data-v-658164d1]:hover {\n  background: rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n.TezisItem .edit-fields[data-v-658164d1] {\n  width: 100%;\n}\n",""])},NbPw:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"ContextItem",class:{off:t.item.context.disabled,inverted:t.item.context.inverted},on:{click:t.toggleActive}},[n("div",{staticClass:"text-box",domProps:{textContent:t._s(t.item.text)}}),t._v(" "),n("q-context-menu",[n("q-list",{staticStyle:{"min-width":"150px","max-height":"300px"},attrs:{link:"",separator:""}},[n("q-item",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],nativeOn:{click:function(e){return t.toggleInverted(e)}}},[n("q-item-main",{attrs:{label:"Инвертировать"}})],1)],1)],1),t._v(" "),n("q-icon",{attrs:{name:"clear"},nativeOn:{click:function(e){t.$emit("remove")}}})],1)},r=[];i._withStripped=!0;var o=n("XyMi"),a=!1;var s=function(t){a||n("ApfQ")},c=Object(o.a)({name:"ContextItem",props:["item"],methods:{toggleActive:function(){this.item.context.disabled=!this.item.context.disabled},toggleInverted:function(){this.item.context.inverted=!this.item.context.inverted}}},i,r,!1,s,"data-v-3a859de1",null);c.options.__file="src\\components\\context-item.vue";e.a=c.exports},O4g8:function(t,e){t.exports=!0},PzxK:function(t,e,n){var i=n("D2L2"),r=n("sB3e"),o=n("ax3d")("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),i(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},RPLV:function(t,e,n){var i=n("7KvD").document;t.exports=i&&i.documentElement},"RY/4":function(t,e,n){var i=n("R9M2"),r=n("dSzd")("toStringTag"),o="Arguments"==i(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),r))?n:o?i(e):"Object"==(a=i(e))&&"function"==typeof e.callee?"Arguments":a}},Xd32:function(t,e,n){n("+tPU"),n("zQR9"),t.exports=n("5PlU")},Yobk:function(t,e,n){var i=n("77Pl"),r=n("qio6"),o=n("xnc9"),a=n("ax3d")("IE_PROTO"),s=function(){},c=function(){var t,e=n("ON07")("iframe"),i=o.length;for(e.style.display="none",n("RPLV").appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;i--;)delete c.prototype[o[i]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=i(t),n=new s,s.prototype=null,n[a]=t):n=c(),void 0===e?n:r(n,e)}},Zrlr:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},a09e:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("NbPw"),r={name:"TesisItem",components:{ItemMenu:n("11fP").a},props:["item"],data:function(){return{mode:"show"}}},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"TezisItem"},["show"===t.mode?n("div",{domProps:{innerHTML:t._s(t.item.text)}}):t._e(),t._v(" "),"edit"===t.mode?n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.text,expression:"item.text"}],staticClass:"edit-fields",attrs:{type:"text"},domProps:{value:t.item.text},on:{keypress:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.mode="show"},input:function(e){e.target.composing||t.$set(t.item,"text",e.target.value)}}}):t._e(),t._v(" "),n("div",[n("q-icon",{attrs:{name:"add",title:"В контекст"},nativeOn:{click:function(e){t.$emit("context")}}})],1),t._v(" "),n("q-context-menu",[n("ItemMenu",{attrs:{item:t.item},on:{edit:function(e){t.mode="edit"}}})],1)],1)},a=[];o._withStripped=!0;var s=n("XyMi"),c=!1;var u=function(t){c||n("rZAN")},l=Object(s.a)(r,o,a,!1,u,"data-v-658164d1",null);l.options.__file="src\\components\\tezis-item-minimal.vue";var f=l.exports,d=n("fzcm"),p=n("BJNg"),v={name:"PageIndex",components:{ContextItem:i.a,TesisItem:f,NoteEditor:d.a},data:function(){this.$q;return{data:p.a,newTezisText:"",enableFilter:!1,onlyChilds:!1}},computed:{filteredItems:function(){return this.data.file_data.getFilteredItems(this.context,{enableFilter:this.enableFilter})},items:function(){return this.data.file_data.items},links:function(){return this.data.file_data.links},context:function(){return this.data.view_context},clipboard:function(){return this.data.clipboard}},created:function(){Object(p.b)()},methods:{addTezis:function(){this.data.file_data.addItem({text:this.newTezisText},this.context),this.newTezisText=""},addToContext:function(t){-1===this.context.indexOf(t)?this.context.push(t):alert("Уже добавлено в контекст")},removeFromContext:function(t){var e=this.context.indexOf(t);this.context.splice(e,1)}}},m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"q-pa-lg container column"},[n("div",{staticClass:"q-my-sm row"},[n("div",{staticClass:"context-area"},t._l(t.context,function(e,i){return n("ContextItem",{key:i,attrs:{item:e},on:{remove:function(n){t.removeFromContext(e)}}})})),t._v(" "),n("div",{staticClass:"context-actions"},[n("q-checkbox",{attrs:{"checked-icon":"filter_list","unchecked-icon":"clear_all",title:"Фильтр по контексту"},model:{value:t.enableFilter,callback:function(e){t.enableFilter=e},expression:"enableFilter"}}),t._v(" "),n("q-icon",{staticClass:"add-btn",attrs:{name:"add_circle_outline",size:"16px"},nativeOn:{click:function(e){t.$router.push("/item/find/")}}})],1)]),t._v(" "),t._l(t.filteredItems,function(e,i){return n("TesisItem",{key:i,staticClass:"q-my-sm",attrs:{item:e},on:{context:function(n){t.addToContext(e)}}})}),t._v(" "),n("NoteEditor",{on:{submit:t.addTezis},model:{value:t.newTezisText,callback:function(e){t.newTezisText=e},expression:"newTezisText"}})],2)},x=[];m._withStripped=!0;var h=!1;var b=function(t){h||n("00xm")},_=Object(s.a)(v,m,x,!1,b,null,null);_.options.__file="src\\pages\\input\\start.vue";e.default=_.exports},d7EF:function(t,e,n){"use strict";e.__esModule=!0;var i=o(n("us/S")),r=o(n("BO1k"));function o(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return function(t,e){if(Array.isArray(t))return t;if((0,i.default)(Object(t)))return function(t,e){var n=[],i=!0,o=!1,a=void 0;try{for(var s,c=(0,r.default)(t);!(i=(s=c.next()).done)&&(n.push(s.value),!e||n.length!==e);i=!0);}catch(t){o=!0,a=t}finally{try{!i&&c.return&&c.return()}finally{if(o)throw a}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},dSzd:function(t,e,n){var i=n("e8AB")("wks"),r=n("3Eo+"),o=n("7KvD").Symbol,a="function"==typeof o;(t.exports=function(t){return i[t]||(i[t]=a&&o[t]||(a?o:r)("Symbol."+t))}).store=i},"e0+d":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.NoteEditor[data-v-5ee6cbe8] {\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n}\n.NoteEditor .q-editor[data-v-5ee6cbe8] {\n  -ms-flex: 1;\n      flex: 1;\n  max-width: 100%;\n}\n",""])},e6n0:function(t,e,n){var i=n("evD5").f,r=n("D2L2"),o=n("dSzd")("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,o)&&i(t,o,{configurable:!0,value:e})}},fxRn:function(t,e,n){n("+tPU"),n("zQR9"),t.exports=n("g8Ux")},fzcm:function(t,e,n){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"NoteEditor row"},[e("q-editor",{ref:"editor",attrs:{value:this.value,toolbar:this.editorSettings},on:{input:this.onInput}}),this._v(" "),e("q-btn",{staticClass:"send-btn",attrs:{icon:"send"},on:{click:this.onSubmit}})],1)},r=[];i._withStripped=!0;var o=n("XyMi"),a=!1;var s=function(t){a||n("BV0O")},c=Object(o.a)({name:"NoteEditor",props:["value"],data:function(){return{newTezisText:"",editorSettings:[["bold","italic","strike","underline"],["unordered","ordered","outdent","indent"],["link","removeFormat"],["undo","redo"]]}},mounted:function(){var t=this;this.$refs.editor.$refs.content.addEventListener("keypress",function(e){e.ctrlKey&&"Enter"===e.code&&(e.preventDefault(),t.$emit("submit"))})},methods:{onInput:function(t,e){this.$emit("input",t,e)},onSubmit:function(t){t.preventDefault(),this.value&&this.$emit("submit"),this.focus()},focus:function(){this.$refs.editor.$refs.content.focus()}}},i,r,!1,s,"data-v-5ee6cbe8",null);c.options.__file="src\\components\\note-editor.vue";e.a=c.exports},g8Ux:function(t,e,n){var i=n("77Pl"),r=n("3fs2");t.exports=n("FeBl").getIterator=function(t){var e=r(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return i(e.call(t))}},h65t:function(t,e,n){var i=n("UuGF"),r=n("52gC");t.exports=function(t){return function(e,n){var o,a,s=String(r(e)),c=i(n),u=s.length;return c<0||c>=u?t?"":void 0:(o=s.charCodeAt(c))<55296||o>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):o:t?s.slice(c,c+2):a-56320+(o-55296<<10)+65536}}},ixd4:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.ContextItem[data-v-3a859de1] {\n  background: #cef;\n  font-size: 12px;\n  border-radius: 5px;\n  padding: 1px 15px 1px 5px;\n  cursor: default;\n  position: relative;\n}\n.ContextItem.off[data-v-3a859de1] {\n  background: #eff;\n}\n.ContextItem.inverted[data-v-3a859de1] {\n  background: #fdc;\n}\n.ContextItem.inverted.off[data-v-3a859de1] {\n  background: #fee;\n}\n.ContextItem .text-box[data-v-3a859de1] {\n  max-width: 300px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ContextItem .q-icon[data-v-3a859de1] {\n  position: absolute;\n  top: 2px;\n  right: 3px;\n  cursor: pointer;\n}\n.ContextItem .q-icon[data-v-3a859de1]:hover {\n  background: rgba(0, 0, 0, 0.3);\n  border-radius: 6px;\n}\n",""])},mClu:function(t,e,n){var i=n("kM2E");i(i.S+i.F*!n("+E39"),"Object",{defineProperty:n("evD5").f})},qio6:function(t,e,n){var i=n("evD5"),r=n("77Pl"),o=n("lktj");t.exports=n("+E39")?Object.defineProperties:function(t,e){r(t);for(var n,a=o(e),s=a.length,c=0;s>c;)i.f(t,n=a[c++],e[n]);return t}},rZAN:function(t,e,n){var i=n("Hy+I");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n("rjj0").default)("947e734a",i,!1,{})},"us/S":function(t,e,n){t.exports={default:n("Xd32"),__esModule:!0}},"vIB/":function(t,e,n){"use strict";var i=n("O4g8"),r=n("kM2E"),o=n("880/"),a=n("hJx8"),s=n("/bQp"),c=n("94VQ"),u=n("e6n0"),l=n("PzxK"),f=n("dSzd")("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,v,m,x,h){c(n,e,v);var b,_,y,g=function(t){if(!d&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",k="values"==m,I=!1,O=t.prototype,S=O[f]||O["@@iterator"]||m&&O[m],T=S||g(m),C=m?k?g("entries"):T:void 0,z="Array"==e&&O.entries||S;if(z&&(y=l(z.call(new t)))!==Object.prototype&&y.next&&(u(y,w,!0),i||"function"==typeof y[f]||a(y,f,p)),k&&S&&"values"!==S.name&&(I=!0,T=function(){return S.call(this)}),i&&!h||!d&&!I&&O[f]||a(O,f,T),s[e]=T,s[w]=p,m)if(b={values:k?T:g("values"),keys:x?T:g("keys"),entries:C},h)for(_ in b)_ in O||o(O,_,b[_]);else r(r.P+r.F*(d||I),e,b);return b}},wxAW:function(t,e,n){"use strict";e.__esModule=!0;var i,r=n("C4MV"),o=(i=r)&&i.__esModule?i:{default:i};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,o.default)(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()},xGkn:function(t,e,n){"use strict";var i=n("4mcu"),r=n("EGZi"),o=n("/bQp"),a=n("TcQ7");t.exports=n("vIB/")(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):r(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},zQR9:function(t,e,n){"use strict";var i=n("h65t")(!0);n("vIB/")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})})}});