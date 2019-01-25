(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{32:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("code",null,a.a.createElement("pre",null,JSON.stringify(e,null,2)))}},39:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(26),o=t(40),c=t.n(o),u=t(22),l=t.n(u),s=t(32);n.a=function(e){return a.a.createElement(i.Query,e,function(n){var t=n.loading,r=n.error,i=n.data;return t?a.a.createElement(l.a,{loading:!0,type:"boxLoader"}):r?a.a.createElement(c.a,{type:"critical",title:"Error!"},"$",r.message):e.children?e.children({loading:t,error:r,data:i}):a.a.createElement(s.a,i)})}},403:function(e,n,t){var r=t(557).parse;function a(e){return e.replace(/[\s,]+/g," ").trim()}var i={},o={};var c=!0;var u=!1;function l(e){var n=a(e);if(i[n])return i[n];var t=r(e,{experimentalFragmentVariables:u});if(!t||"Document"!==t.kind)throw new Error("Not a valid GraphQL document.");return t=function e(n,t){var r=Object.prototype.toString.call(n);if("[object Array]"===r)return n.map(function(n){return e(n,t)});if("[object Object]"!==r)throw new Error("Unexpected input.");t&&n.loc&&delete n.loc,n.loc&&(delete n.loc.startToken,delete n.loc.endToken);var a,i,o,c=Object.keys(n);for(a in c)c.hasOwnProperty(a)&&(i=n[c[a]],"[object Object]"!==(o=Object.prototype.toString.call(i))&&"[object Array]"!==o||(n[c[a]]=e(i,!0)));return n}(t=function(e){for(var n,t={},r=[],i=0;i<e.definitions.length;i++){var u=e.definitions[i];if("FragmentDefinition"===u.kind){var l=u.name.value,s=a((n=u.loc).source.body.substring(n.start,n.end));o.hasOwnProperty(l)&&!o[l][s]?(c&&console.warn("Warning: fragment with name "+l+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"),o[l][s]=!0):o.hasOwnProperty(l)||(o[l]={},o[l][s]=!0),t[s]||(t[s]=!0,r.push(u))}else r.push(u)}return e.definitions=r,e}(t),!1),i[n]=t,t}function s(){for(var e=Array.prototype.slice.call(arguments),n=e[0],t="string"==typeof n?n:n[0],r=1;r<e.length;r++)e[r]&&e[r].kind&&"Document"===e[r].kind?t+=e[r].loc.source.body:t+=e[r],t+=n[r];return l(t)}s.default=s,s.resetCaches=function(){i={},o={}},s.disableFragmentWarnings=function(){c=!1},s.enableExperimentalFragmentVariables=function(){u=!0},s.disableExperimentalFragmentVariables=function(){u=!1},e.exports=s},404:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.StyledImage=void 0;var r=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};r.get||r.set?Object.defineProperty(n,t,r):n[t]=e[t]}return n.default=e,n}(t(0)),a=u(t(1)),i=u(t(3)),o=t(540),c=u(t(37));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var s=function(e){var n,t=e.theme,r=e.size;return(l(n={},o.SIZE_OPTIONS.SMALL,t.orbit.heightIllustrationSmall),l(n,o.SIZE_OPTIONS.MEDIUM,t.orbit.heightIllustrationMedium),n)[r]},d=a.default.img.attrs(function(e){var n=e.theme,t=e.size,r=e.illustrationName,a=parseInt(s({theme:n,size:t}),10);return{src:"".concat(o.baseURL,"/illustrations/0x").concat(a,"/").concat(r,".png"),srcSet:"".concat(o.baseURL,"/illustrations/0x").concat(2*a,"/").concat(r,".png 2x")}}).withConfig({displayName:"Illustration__StyledImage",componentId:"uskdow-0"})(["height:",";width:auto;background-color:",";margin-bottom:",";"],s,function(e){return e.theme.orbit.backgroundIllustration},c.default);n.StyledImage=d,d.defaultProps={theme:i.default};var E=function(e){var n=e.name,t=e.size,a=void 0===t?o.SIZE_OPTIONS.MEDIUM:t,i=e.dataTest,c=e.spaceAfter;return r.createElement(d,{illustrationName:n,alt:n,size:a,"data-test":i,spaceAfter:c})};n.default=E},538:function(e,n,t){__NEXT_REGISTER_PAGE("/",function(){return e.exports=t(539),{page:e.exports.default}})},539:function(e,n,t){"use strict";t.r(n),t.d(n,"continentsQuery",function(){return v});var r=t(0),a=t.n(r),i=t(403),o=t.n(i),c=t(40),u=t.n(c),l=t(404),s=t.n(l),d=t(39);function E(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  query {\n    continents {\n      name\n    }\n  }\n"]);return E=function(){return e},e}var f={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Country"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"code"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"country"},arguments:[{kind:"Argument",name:{kind:"Name",value:"code"},value:{kind:"Variable",name:{kind:"Name",value:"code"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"code"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"native"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"phone"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"languages"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"currency"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"emoji"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:197,source:{body:"# https://countries.trevorblades.com/\n\nquery Country($code: String!) {\n  country(code: $code) {\n    name\n    code\n    native\n    phone\n    languages {\n      name\n    }\n    currency\n    emoji\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},v=o()(E());n.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,{type:"success"},"Hello, Welcome to JS WEEKEND!"),a.a.createElement(s.a,{size:"medium",name:"Accommodation",dataTest:"test",spaceAfter:null}),a.a.createElement("br",null),"this time in ",a.a.createElement(d.a,{query:f,variables:{code:"CZ"},context:{uri:"https://countries.trevorblades.com/"}},function(e){var n=e.data;return a.a.createElement("b",null,n.country.emoji," ",n.country.name)}),a.a.createElement(d.a,{query:v,context:{uri:"https://countries.trevorblades.com/"}}))}},540:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.baseURL=n.SIZE_OPTIONS=n.NAMES=void 0;n.NAMES=["Accommodation","AirHelp","AirportTransport","AirportTransportTaxi","AirportShuttle","BaggageDrop","Boarding","BoardingPass","BusinessTravel","CabinBaggage","DesktopSearch","EnjoyApp","Error","FastTrack","Feedback","Help","Improve","Insurance","InviteAFriend","Login","Lounge","Mailbox","Meal","MobileApp","Money","MusicalInstruments","NetVerify","NoBookings","NoFavoriteFlights","Nomad","NoNotification","NoResults","Offline","OnlineCheckIn","OpenSearch","Parking","Pets","PlaceholderAirport","PlaceholderDestination","PlaceholderHotel","PlaceholderTours","PlaneAndMoney","PriorityBoarding","Rating","ReferAFriend","RentalCar","Seating","SpecialAssistance","SportsEquipment","Success","Time","TimelineBoarding","TimelineDropBaggage","TimelineLeave","TimelinePick","Tours","Train","TransportBus","TransportTaxi"];n.SIZE_OPTIONS={SMALL:"small",MEDIUM:"medium"};n.baseURL="//images.kiwi.com"},557:function(e,n,t){"use strict";t.r(n);var r=t(188);function a(e,n){if(!e)throw new Error(n)}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var o,c=function(e,n,t){i(this,"body",void 0),i(this,"name",void 0),i(this,"locationOffset",void 0),this.body=e,this.name=n||"GraphQL request",this.locationOffset=t||{line:1,column:1},this.locationOffset.line>0||a(0,"line in locationOffset is 1-indexed and must be positive"),this.locationOffset.column>0||a(0,"column in locationOffset is 1-indexed and must be positive")};function u(e,n){for(var t,r=/\r\n|[\n\r]/g,a=1,i=n+1;(t=r.exec(e.body))&&t.index<n;)a+=1,i=n+1-(t.index+t[0].length);return{line:a,column:i}}function l(e,n){var t=e.locationOffset.column-1,r=s(t)+e.body,a=n.line-1,i=e.locationOffset.line-1,o=n.line+i,c=1===n.line?t:0,u=n.column+c,l=r.split(/\r\n|[\n\r]/g);return"".concat(e.name," (").concat(o,":").concat(u,")\n")+function(e){var n=e.filter(function(e){e[0];var n=e[1];return void 0!==n}),t=0,r=!0,a=!1,i=void 0;try{for(var o,c=n[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var u=o.value,l=u[0];t=Math.max(t,l.length)}}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n.map(function(e){var n,r=e[0],a=e[1];return s(t-(n=r).length)+n+a}).join("\n")}([["".concat(o-1,": "),l[a-1]],["".concat(o,": "),l[a]],["",s(u-1)+"^"],["".concat(o+1,": "),l[a+1]]])}function s(e){return Array(e+1).join(" ")}function d(e,n,t,r,a,i,o){var c=Array.isArray(n)?0!==n.length?n:void 0:n?[n]:void 0,l=t;if(!l&&c){var s=c[0];l=s&&s.loc&&s.loc.source}var E,f=r;!f&&c&&(f=c.reduce(function(e,n){return n.loc&&e.push(n.loc.start),e},[])),f&&0===f.length&&(f=void 0),r&&t?E=r.map(function(e){return u(t,e)}):c&&(E=c.reduce(function(e,n){return n.loc&&e.push(u(n.loc.source,n.loc.start)),e},[]));var v=o||i&&i.extensions;Object.defineProperties(this,{message:{value:e,enumerable:!0,writable:!0},locations:{value:E||void 0,enumerable:Boolean(E)},path:{value:a||void 0,enumerable:Boolean(a)},nodes:{value:c||void 0},source:{value:l||void 0},positions:{value:f||void 0},originalError:{value:i},extensions:{value:v||void 0,enumerable:Boolean(v)}}),i&&i.stack?Object.defineProperty(this,"stack",{value:i.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,d):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}function E(e,n,t){return new d("Syntax Error: ".concat(t),void 0,e,[n])}function f(e){for(var n=e.split(/\r\n|[\n\r]/g),t=null,r=1;r<n.length;r++){var a=n[r],i=v(a);if(i<a.length&&(null===t||i<t)&&0===(t=i))break}if(t)for(var o=1;o<n.length;o++)n[o]=n[o].slice(t);for(;n.length>0&&N(n[0]);)n.shift();for(;n.length>0&&N(n[n.length-1]);)n.pop();return n.join("\n")}function v(e){for(var n=0;n<e.length&&(" "===e[n]||"\t"===e[n]);)n++;return n}function N(e){return v(e)===e.length}function I(e,n){var t=new k(p.SOF,0,0,0,0,null);return{source:e,options:n,lastToken:t,token:t,line:1,lineStart:0,advance:T,lookahead:m}}function T(){return this.lastToken=this.token,this.token=this.lookahead()}function m(){var e=this.token;if(e.kind!==p.EOF)do{e=e.next||(e.next=g(this,e))}while(e.kind===p.COMMENT);return e}o=c,"function"==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o.prototype,Symbol.toStringTag,{get:function(){return this.constructor.name}}),d.prototype=Object.create(Error.prototype,{constructor:{value:d},name:{value:"GraphQLError"},toString:{value:function(){return function(e){var n=[];if(e.nodes){var t=!0,r=!1,a=void 0;try{for(var i,o=e.nodes[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var c=i.value;c.loc&&n.push(l(c.loc.source,u(c.loc.source,c.loc.start)))}}catch(e){r=!0,a=e}finally{try{t||null==o.return||o.return()}finally{if(r)throw a}}}else if(e.source&&e.locations){var s=e.source,d=!0,E=!1,f=void 0;try{for(var v,N=e.locations[Symbol.iterator]();!(d=(v=N.next()).done);d=!0){var I=v.value;n.push(l(s,I))}}catch(e){E=!0,f=e}finally{try{d||null==N.return||N.return()}finally{if(E)throw f}}}return 0===n.length?e.message:[e.message].concat(n).join("\n\n")+"\n"}(this)}}});var p=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"});function O(e){var n=e.value;return n?"".concat(e.kind,' "').concat(n,'"'):e.kind}var h=String.prototype.charCodeAt,A=String.prototype.slice;function k(e,n,t,r,a,i,o){this.kind=e,this.start=n,this.end=t,this.line=r,this.column=a,this.value=o,this.prev=i,this.next=null}function _(e){return isNaN(e)?p.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function g(e,n){var t=e.source,r=t.body,a=r.length,i=function(e,n,t){var r=e.length,a=n;for(;a<r;){var i=h.call(e,a);if(9===i||32===i||44===i||65279===i)++a;else if(10===i)++a,++t.line,t.lineStart=a;else{if(13!==i)break;10===h.call(e,a+1)?a+=2:++a,++t.line,t.lineStart=a}}return a}(r,n.end,e),o=e.line,c=1+i-e.lineStart;if(i>=a)return new k(p.EOF,a,a,o,c,n);var u=h.call(r,i);switch(u){case 33:return new k(p.BANG,i,i+1,o,c,n);case 35:return function(e,n,t,r,a){var i,o=e.body,c=n;do{i=h.call(o,++c)}while(null!==i&&(i>31||9===i));return new k(p.COMMENT,n,c,t,r,a,A.call(o,n+1,c))}(t,i,o,c,n);case 36:return new k(p.DOLLAR,i,i+1,o,c,n);case 38:return new k(p.AMP,i,i+1,o,c,n);case 40:return new k(p.PAREN_L,i,i+1,o,c,n);case 41:return new k(p.PAREN_R,i,i+1,o,c,n);case 46:if(46===h.call(r,i+1)&&46===h.call(r,i+2))return new k(p.SPREAD,i,i+3,o,c,n);break;case 58:return new k(p.COLON,i,i+1,o,c,n);case 61:return new k(p.EQUALS,i,i+1,o,c,n);case 64:return new k(p.AT,i,i+1,o,c,n);case 91:return new k(p.BRACKET_L,i,i+1,o,c,n);case 93:return new k(p.BRACKET_R,i,i+1,o,c,n);case 123:return new k(p.BRACE_L,i,i+1,o,c,n);case 124:return new k(p.PIPE,i,i+1,o,c,n);case 125:return new k(p.BRACE_R,i,i+1,o,c,n);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return function(e,n,t,r,a){var i=e.body,o=i.length,c=n+1,u=0;for(;c!==o&&null!==(u=h.call(i,c))&&(95===u||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122);)++c;return new k(p.NAME,n,c,t,r,a,A.call(i,n,c))}(t,i,o,c,n);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return function(e,n,t,r,a,i){var o=e.body,c=t,u=n,l=!1;45===c&&(c=h.call(o,++u));if(48===c){if((c=h.call(o,++u))>=48&&c<=57)throw E(e,u,"Invalid number, unexpected digit after 0: ".concat(_(c),"."))}else u=y(e,u,c),c=h.call(o,u);46===c&&(l=!0,c=h.call(o,++u),u=y(e,u,c),c=h.call(o,u));69!==c&&101!==c||(l=!0,43!==(c=h.call(o,++u))&&45!==c||(c=h.call(o,++u)),u=y(e,u,c));return new k(l?p.FLOAT:p.INT,n,u,r,a,i,A.call(o,n,u))}(t,i,u,o,c,n);case 34:return 34===h.call(r,i+1)&&34===h.call(r,i+2)?function(e,n,t,r,a){var i=e.body,o=n+3,c=o,u=0,l="";for(;o<i.length&&null!==(u=h.call(i,o));){if(34===u&&34===h.call(i,o+1)&&34===h.call(i,o+2))return l+=A.call(i,c,o),new k(p.BLOCK_STRING,n,o+3,t,r,a,f(l));if(u<32&&9!==u&&10!==u&&13!==u)throw E(e,o,"Invalid character within String: ".concat(_(u),"."));92===u&&34===h.call(i,o+1)&&34===h.call(i,o+2)&&34===h.call(i,o+3)?(l+=A.call(i,c,o)+'"""',c=o+=4):++o}throw E(e,o,"Unterminated string.")}(t,i,o,c,n):function(e,n,t,r,a){var i=e.body,o=n+1,c=o,u=0,l="";for(;o<i.length&&null!==(u=h.call(i,o))&&10!==u&&13!==u;){if(34===u)return l+=A.call(i,c,o),new k(p.STRING,n,o+1,t,r,a,l);if(u<32&&9!==u)throw E(e,o,"Invalid character within String: ".concat(_(u),"."));if(++o,92===u){switch(l+=A.call(i,c,o-1),u=h.call(i,o)){case 34:l+='"';break;case 47:l+="/";break;case 92:l+="\\";break;case 98:l+="\b";break;case 102:l+="\f";break;case 110:l+="\n";break;case 114:l+="\r";break;case 116:l+="\t";break;case 117:var s=(d=h.call(i,o+1),f=h.call(i,o+2),v=h.call(i,o+3),N=h.call(i,o+4),S(d)<<12|S(f)<<8|S(v)<<4|S(N));if(s<0)throw E(e,o,"Invalid character escape sequence: "+"\\u".concat(i.slice(o+1,o+5),"."));l+=String.fromCharCode(s),o+=4;break;default:throw E(e,o,"Invalid character escape sequence: \\".concat(String.fromCharCode(u),"."))}c=++o}}var d,f,v,N;throw E(e,o,"Unterminated string.")}(t,i,o,c,n)}throw E(t,i,function(e){if(e<32&&9!==e&&10!==e&&13!==e)return"Cannot contain the invalid character ".concat(_(e),".");if(39===e)return"Unexpected single quote character ('), did you mean to use a double quote (\")?";return"Cannot parse the unexpected character ".concat(_(e),".")}(u))}function y(e,n,t){var r=e.body,a=n,i=t;if(i>=48&&i<=57){do{i=h.call(r,++a)}while(i>=48&&i<=57);return a}throw E(e,a,"Invalid number, expected digit but got: ".concat(_(i),"."))}function S(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}k.prototype.toJSON=k.prototype.inspect=function(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}};var R=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"}),b=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"});function L(e,n){var t="string"==typeof e?new c(e):e;if(!(t instanceof c))throw new TypeError("Must provide Source. Received: ".concat(Object(r.a)(t)));return function(e){var n=e.token;return{kind:R.DOCUMENT,definitions:_e(e,p.SOF,D,p.EOF),loc:Ie(e,n)}}(I(t,n||{}))}function C(e,n){var t=I("string"==typeof e?new c(e):e,n||{});Oe(t,p.SOF);var r=X(t,!1);return Oe(t,p.EOF),r}function F(e,n){var t=I("string"==typeof e?new c(e):e,n||{});Oe(t,p.SOF);var r=ee(t);return Oe(t,p.EOF),r}function P(e){var n=Oe(e,p.NAME);return{kind:R.NAME,value:n.value,loc:Ie(e,n)}}function D(e){if(me(e,p.NAME))switch(e.token.value){case"query":case"mutation":case"subscription":case"fragment":return w(e);case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return te(e);case"extend":return function(e){var n=e.lookahead();if(n.kind===p.NAME)switch(n.value){case"schema":return function(e){var n=e.token;he(e,"extend"),he(e,"schema");var t=W(e,!0),r=me(e,p.BRACE_L)?_e(e,p.BRACE_L,ie,p.BRACE_R):[];if(0===t.length&&0===r.length)throw Ae(e);return{kind:R.SCHEMA_EXTENSION,directives:t,operationTypes:r,loc:Ie(e,n)}}(e);case"scalar":return function(e){var n=e.token;he(e,"extend"),he(e,"scalar");var t=P(e),r=W(e,!0);if(0===r.length)throw Ae(e);return{kind:R.SCALAR_TYPE_EXTENSION,name:t,directives:r,loc:Ie(e,n)}}(e);case"type":return function(e){var n=e.token;he(e,"extend"),he(e,"type");var t=P(e),r=oe(e),a=W(e,!0),i=ce(e);if(0===r.length&&0===a.length&&0===i.length)throw Ae(e);return{kind:R.OBJECT_TYPE_EXTENSION,name:t,interfaces:r,directives:a,fields:i,loc:Ie(e,n)}}(e);case"interface":return function(e){var n=e.token;he(e,"extend"),he(e,"interface");var t=P(e),r=W(e,!0),a=ce(e);if(0===r.length&&0===a.length)throw Ae(e);return{kind:R.INTERFACE_TYPE_EXTENSION,name:t,directives:r,fields:a,loc:Ie(e,n)}}(e);case"union":return function(e){var n=e.token;he(e,"extend"),he(e,"union");var t=P(e),r=W(e,!0),a=de(e);if(0===r.length&&0===a.length)throw Ae(e);return{kind:R.UNION_TYPE_EXTENSION,name:t,directives:r,types:a,loc:Ie(e,n)}}(e);case"enum":return function(e){var n=e.token;he(e,"extend"),he(e,"enum");var t=P(e),r=W(e,!0),a=Ee(e);if(0===r.length&&0===a.length)throw Ae(e);return{kind:R.ENUM_TYPE_EXTENSION,name:t,directives:r,values:a,loc:Ie(e,n)}}(e);case"input":return function(e){var n=e.token;he(e,"extend"),he(e,"input");var t=P(e),r=W(e,!0),a=ve(e);if(0===r.length&&0===a.length)throw Ae(e);return{kind:R.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:r,fields:a,loc:Ie(e,n)}}(e)}throw Ae(e,n)}(e)}else{if(me(e,p.BRACE_L))return w(e);if(re(e))return te(e)}throw Ae(e)}function w(e){if(me(e,p.NAME))switch(e.token.value){case"query":case"mutation":case"subscription":return M(e);case"fragment":return function(e){var n=e.token;if(he(e,"fragment"),e.options.experimentalFragmentVariables)return{kind:R.FRAGMENT_DEFINITION,name:K(e),variableDefinitions:U(e),typeCondition:(he(e,"on"),ne(e)),directives:W(e,!1),selectionSet:V(e),loc:Ie(e,n)};return{kind:R.FRAGMENT_DEFINITION,name:K(e),typeCondition:(he(e,"on"),ne(e)),directives:W(e,!1),selectionSet:V(e),loc:Ie(e,n)}}(e)}else if(me(e,p.BRACE_L))return M(e);throw Ae(e)}function M(e){var n=e.token;if(me(e,p.BRACE_L))return{kind:R.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:V(e),loc:Ie(e,n)};var t,r=B(e);return me(e,p.NAME)&&(t=P(e)),{kind:R.OPERATION_DEFINITION,operation:r,name:t,variableDefinitions:U(e),directives:W(e,!1),selectionSet:V(e),loc:Ie(e,n)}}function B(e){var n=Oe(e,p.NAME);switch(n.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw Ae(e,n)}function U(e){return me(e,p.PAREN_L)?_e(e,p.PAREN_L,x,p.PAREN_R):[]}function x(e){var n=e.token;return e.options.experimentalVariableDefinitionDirectives?{kind:R.VARIABLE_DEFINITION,variable:j(e),type:(Oe(e,p.COLON),ee(e)),defaultValue:pe(e,p.EQUALS)?X(e,!0):void 0,directives:W(e,!0),loc:Ie(e,n)}:{kind:R.VARIABLE_DEFINITION,variable:j(e),type:(Oe(e,p.COLON),ee(e)),defaultValue:pe(e,p.EQUALS)?X(e,!0):void 0,loc:Ie(e,n)}}function j(e){var n=e.token;return Oe(e,p.DOLLAR),{kind:R.VARIABLE,name:P(e),loc:Ie(e,n)}}function V(e){var n=e.token;return{kind:R.SELECTION_SET,selections:_e(e,p.BRACE_L,G,p.BRACE_R),loc:Ie(e,n)}}function G(e){return me(e,p.SPREAD)?function(e){var n,t=e.token;if(Oe(e,p.SPREAD),me(e,p.NAME)&&"on"!==e.token.value)return{kind:R.FRAGMENT_SPREAD,name:K(e),directives:W(e,!1),loc:Ie(e,t)};"on"===e.token.value&&(e.advance(),n=ne(e));return{kind:R.INLINE_FRAGMENT,typeCondition:n,directives:W(e,!1),selectionSet:V(e),loc:Ie(e,t)}}(e):function(e){var n,t,r=e.token,a=P(e);pe(e,p.COLON)?(n=a,t=P(e)):t=a;return{kind:R.FIELD,alias:n,name:t,arguments:Y(e,!1),directives:W(e,!1),selectionSet:me(e,p.BRACE_L)?V(e):void 0,loc:Ie(e,r)}}(e)}function Y(e,n){var t=n?q:J;return me(e,p.PAREN_L)?_e(e,p.PAREN_L,t,p.PAREN_R):[]}function J(e){var n=e.token;return{kind:R.ARGUMENT,name:P(e),value:(Oe(e,p.COLON),X(e,!1)),loc:Ie(e,n)}}function q(e){var n=e.token;return{kind:R.ARGUMENT,name:P(e),value:(Oe(e,p.COLON),z(e)),loc:Ie(e,n)}}function K(e){if("on"===e.token.value)throw Ae(e);return P(e)}function X(e,n){var t=e.token;switch(t.kind){case p.BRACKET_L:return function(e,n){var t=e.token,r=n?z:H;return{kind:R.LIST,values:ke(e,p.BRACKET_L,r,p.BRACKET_R),loc:Ie(e,t)}}(e,n);case p.BRACE_L:return function(e,n){var t=e.token;Oe(e,p.BRACE_L);var r=[];for(;!pe(e,p.BRACE_R);)r.push(Z(e,n));return{kind:R.OBJECT,fields:r,loc:Ie(e,t)}}(e,n);case p.INT:return e.advance(),{kind:R.INT,value:t.value,loc:Ie(e,t)};case p.FLOAT:return e.advance(),{kind:R.FLOAT,value:t.value,loc:Ie(e,t)};case p.STRING:case p.BLOCK_STRING:return Q(e);case p.NAME:return"true"===t.value||"false"===t.value?(e.advance(),{kind:R.BOOLEAN,value:"true"===t.value,loc:Ie(e,t)}):"null"===t.value?(e.advance(),{kind:R.NULL,loc:Ie(e,t)}):(e.advance(),{kind:R.ENUM,value:t.value,loc:Ie(e,t)});case p.DOLLAR:if(!n)return j(e)}throw Ae(e)}function Q(e){var n=e.token;return e.advance(),{kind:R.STRING,value:n.value,block:n.kind===p.BLOCK_STRING,loc:Ie(e,n)}}function z(e){return X(e,!0)}function H(e){return X(e,!1)}function Z(e,n){var t=e.token;return{kind:R.OBJECT_FIELD,name:P(e),value:(Oe(e,p.COLON),X(e,n)),loc:Ie(e,t)}}function W(e,n){for(var t=[];me(e,p.AT);)t.push($(e,n));return t}function $(e,n){var t=e.token;return Oe(e,p.AT),{kind:R.DIRECTIVE,name:P(e),arguments:Y(e,n),loc:Ie(e,t)}}function ee(e){var n,t=e.token;return pe(e,p.BRACKET_L)?(n=ee(e),Oe(e,p.BRACKET_R),n={kind:R.LIST_TYPE,type:n,loc:Ie(e,t)}):n=ne(e),pe(e,p.BANG)?{kind:R.NON_NULL_TYPE,type:n,loc:Ie(e,t)}:n}function ne(e){var n=e.token;return{kind:R.NAMED_TYPE,name:P(e),loc:Ie(e,n)}}function te(e){var n=re(e)?e.lookahead():e.token;if(n.kind===p.NAME)switch(n.value){case"schema":return function(e){var n=e.token;he(e,"schema");var t=W(e,!0),r=_e(e,p.BRACE_L,ie,p.BRACE_R);return{kind:R.SCHEMA_DEFINITION,directives:t,operationTypes:r,loc:Ie(e,n)}}(e);case"scalar":return function(e){var n=e.token,t=ae(e);he(e,"scalar");var r=P(e),a=W(e,!0);return{kind:R.SCALAR_TYPE_DEFINITION,description:t,name:r,directives:a,loc:Ie(e,n)}}(e);case"type":return function(e){var n=e.token,t=ae(e);he(e,"type");var r=P(e),a=oe(e),i=W(e,!0),o=ce(e);return{kind:R.OBJECT_TYPE_DEFINITION,description:t,name:r,interfaces:a,directives:i,fields:o,loc:Ie(e,n)}}(e);case"interface":return function(e){var n=e.token,t=ae(e);he(e,"interface");var r=P(e),a=W(e,!0),i=ce(e);return{kind:R.INTERFACE_TYPE_DEFINITION,description:t,name:r,directives:a,fields:i,loc:Ie(e,n)}}(e);case"union":return function(e){var n=e.token,t=ae(e);he(e,"union");var r=P(e),a=W(e,!0),i=de(e);return{kind:R.UNION_TYPE_DEFINITION,description:t,name:r,directives:a,types:i,loc:Ie(e,n)}}(e);case"enum":return function(e){var n=e.token,t=ae(e);he(e,"enum");var r=P(e),a=W(e,!0),i=Ee(e);return{kind:R.ENUM_TYPE_DEFINITION,description:t,name:r,directives:a,values:i,loc:Ie(e,n)}}(e);case"input":return function(e){var n=e.token,t=ae(e);he(e,"input");var r=P(e),a=W(e,!0),i=ve(e);return{kind:R.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:r,directives:a,fields:i,loc:Ie(e,n)}}(e);case"directive":return function(e){var n=e.token,t=ae(e);he(e,"directive"),Oe(e,p.AT);var r=P(e),a=le(e);he(e,"on");var i=function(e){pe(e,p.PIPE);var n=[];do{n.push(Ne(e))}while(pe(e,p.PIPE));return n}(e);return{kind:R.DIRECTIVE_DEFINITION,description:t,name:r,arguments:a,locations:i,loc:Ie(e,n)}}(e)}throw Ae(e,n)}function re(e){return me(e,p.STRING)||me(e,p.BLOCK_STRING)}function ae(e){if(re(e))return Q(e)}function ie(e){var n=e.token,t=B(e);Oe(e,p.COLON);var r=ne(e);return{kind:R.OPERATION_TYPE_DEFINITION,operation:t,type:r,loc:Ie(e,n)}}function oe(e){var n=[];if("implements"===e.token.value){e.advance(),pe(e,p.AMP);do{n.push(ne(e))}while(pe(e,p.AMP)||e.options.allowLegacySDLImplementsInterfaces&&me(e,p.NAME))}return n}function ce(e){return e.options.allowLegacySDLEmptyFields&&me(e,p.BRACE_L)&&e.lookahead().kind===p.BRACE_R?(e.advance(),e.advance(),[]):me(e,p.BRACE_L)?_e(e,p.BRACE_L,ue,p.BRACE_R):[]}function ue(e){var n=e.token,t=ae(e),r=P(e),a=le(e);Oe(e,p.COLON);var i=ee(e),o=W(e,!0);return{kind:R.FIELD_DEFINITION,description:t,name:r,arguments:a,type:i,directives:o,loc:Ie(e,n)}}function le(e){return me(e,p.PAREN_L)?_e(e,p.PAREN_L,se,p.PAREN_R):[]}function se(e){var n=e.token,t=ae(e),r=P(e);Oe(e,p.COLON);var a,i=ee(e);pe(e,p.EQUALS)&&(a=z(e));var o=W(e,!0);return{kind:R.INPUT_VALUE_DEFINITION,description:t,name:r,type:i,defaultValue:a,directives:o,loc:Ie(e,n)}}function de(e){var n=[];if(pe(e,p.EQUALS)){pe(e,p.PIPE);do{n.push(ne(e))}while(pe(e,p.PIPE))}return n}function Ee(e){return me(e,p.BRACE_L)?_e(e,p.BRACE_L,fe,p.BRACE_R):[]}function fe(e){var n=e.token,t=ae(e),r=P(e),a=W(e,!0);return{kind:R.ENUM_VALUE_DEFINITION,description:t,name:r,directives:a,loc:Ie(e,n)}}function ve(e){return me(e,p.BRACE_L)?_e(e,p.BRACE_L,se,p.BRACE_R):[]}function Ne(e){var n=e.token,t=P(e);if(b.hasOwnProperty(t.value))return t;throw Ae(e,n)}function Ie(e,n){if(!e.options.noLocation)return new Te(n,e.lastToken,e.source)}function Te(e,n,t){this.start=e.start,this.end=n.end,this.startToken=e,this.endToken=n,this.source=t}function me(e,n){return e.token.kind===n}function pe(e,n){var t=e.token.kind===n;return t&&e.advance(),t}function Oe(e,n){var t=e.token;if(t.kind===n)return e.advance(),t;throw E(e.source,t.start,"Expected ".concat(n,", found ").concat(O(t)))}function he(e,n){var t=e.token;if(t.kind===p.NAME&&t.value===n)return e.advance(),t;throw E(e.source,t.start,'Expected "'.concat(n,'", found ').concat(O(t)))}function Ae(e,n){var t=n||e.token;return E(e.source,t.start,"Unexpected ".concat(O(t)))}function ke(e,n,t,r){Oe(e,n);for(var a=[];!pe(e,r);)a.push(t(e));return a}function _e(e,n,t,r){Oe(e,n);for(var a=[t(e)];!pe(e,r);)a.push(t(e));return a}t.d(n,"parse",function(){return L}),t.d(n,"parseValue",function(){return C}),t.d(n,"parseType",function(){return F}),t.d(n,"parseConstValue",function(){return z}),t.d(n,"parseTypeReference",function(){return ee}),t.d(n,"parseNamedType",function(){return ne}),Te.prototype.toJSON=Te.prototype.inspect=function(){return{start:this.start,end:this.end}}}},[[538,1,0]]]);