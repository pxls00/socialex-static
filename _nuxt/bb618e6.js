/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{465:function(e,t,n){"use strict";n.r(t);var r=n(430),o=n(442),l=n(425),c=n(431);const h="firebasestorage.googleapis.com",d="storageBucket";class _ extends l.c{constructor(code,e,t=0){super(f(code),`Firebase Storage: ${e} (${f(code)})`),this.status_=t,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(code){return f(code)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function f(code){return"storage/"+code}function m(){return new _("unknown","An unknown error occurred, please check the error payload for server response.")}function w(){return new _("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function v(){return new _("canceled","User canceled the upload/download.")}function R(){return new _("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function k(e){return new _("invalid-argument",e)}function T(){return new _("app-deleted","The Firebase app was deleted.")}function y(e){return new _("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function x(e,t){return new _("invalid-format","String does not match format '"+e+"': "+t)}function U(e){throw new _("internal-error","Internal error: "+e)}class S{constructor(e,path){this.bucket=e,this.path_=path}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=S.makeFromUrl(e,t)}catch(t){return new S(e,"")}if(""===n.path)return n;throw new _("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const o=new RegExp("^gs://"+r+"(/(.*))?$","i");function l(e){e.path_=decodeURIComponent(e.path)}const c=t.replace(/[.]/g,"\\."),d=[{regex:o,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${c}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:l},{regex:new RegExp(`^https?://${t===h?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:l}];for(let i=0;i<d.length;i++){const t=d[i],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let o=r[t.indices.path];o||(o=""),n=new S(e,o),t.postModify(n);break}}if(null==n)throw function(e){return new _("invalid-url","Invalid URL '"+e+"'.")}(e);return n}}class O{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function C(p){return"string"==typeof p||p instanceof String}function P(p){return E()&&p instanceof Blob}function E(){return"undefined"!=typeof Blob&&!Object(l.o)()}function A(e,t,n,r){if(r<t)throw k(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw k(`Invalid value for '${e}'. Expected ${n} or less.`)}function I(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function B(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}var L;function M(e,t){const n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),o=-1!==t.indexOf(e);return n||r||o}!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(L||(L={}));class j{constructor(e,t,n,r,o,l,c,h,d,_,f,m=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=l,this.callback_=c,this.errorCallback_=h,this.timeout_=d,this.progressCallback_=_,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new N(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===L.NO_ERROR,o=n.getStatus();if((!t||M(o,this.additionalRetryCodes_))&&this.retry){const t=n.getErrorCode()===L.ABORT;return void e(!1,new N(!1,null,t))}const l=-1!==this.successCodes_.indexOf(o);e(!0,new N(l,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,o=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(o,o.getResponse());void 0!==e?n(e):n()}catch(e){r(e)}else if(null!==o){const e=m();e.serverResponse=o.getErrorText(),this.errorCallback_?r(this.errorCallback_(o,e)):r(e)}else if(t.canceled){r(this.appDelete_?T():v())}else{r(w())}};this.canceled_?t(0,new N(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,o=null,l=null,c=!1,h=0;function d(){return 2===h}let _=!1;function f(...e){_||(_=!0,t.apply(null,e))}function m(t){o=setTimeout((()=>{o=null,e(v,d())}),t)}function w(){l&&clearTimeout(l)}function v(e,...t){if(_)return void w();if(e)return w(),void f.call(null,e,...t);if(d()||c)return w(),void f.call(null,e,...t);let n;r<64&&(r*=2),1===h?(h=2,n=0):n=1e3*(r+Math.random()),m(n)}let R=!1;function k(e){R||(R=!0,w(),_||(null!==o?(e||(h=2),clearTimeout(o),m(0)):e||(h=1)))}return m(0),l=setTimeout((()=>{c=!0,k(!0)}),n),k}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class N{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function F(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function z(...e){const t=F();if(void 0!==t){const n=new t;for(let i=0;i<e.length;i++)n.append(e[i]);return n.getBlob()}if(E())return new Blob(e);throw new _("unsupported-environment","This browser doesn't seem to support creating Blobs")}function D(e){if("undefined"==typeof atob)throw new _("unsupported-environment",`${"base-64"} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`);return atob(e)}const H={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ${constructor(data,e){this.data=data,this.contentType=e||null}}function G(e,t){switch(e){case H.RAW:return new $(X(t));case H.BASE64:case H.BASE64URL:return new $(W(e,t));case H.DATA_URL:return new $(function(e){const t=new V(e);return t.base64?W(H.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw x(H.DATA_URL,"Malformed data URL.")}return X(t)}(t.rest)}(t),new V(t).contentType)}throw m()}function X(e){const b=[];for(let i=0;i<e.length;i++){let t=e.charCodeAt(i);if(t<=127)b.push(t);else if(t<=2047)b.push(192|t>>6,128|63&t);else if(55296==(64512&t)){if(i<e.length-1&&56320==(64512&e.charCodeAt(i+1))){t=65536|(1023&t)<<10|1023&e.charCodeAt(++i),b.push(240|t>>18,128|t>>12&63,128|t>>6&63,128|63&t)}else b.push(239,191,189)}else 56320==(64512&t)?b.push(239,191,189):b.push(224|t>>12,128|t>>6&63,128|63&t)}return new Uint8Array(b)}function W(e,t){switch(e){case H.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw x(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case H.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw x(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=D(t)}catch(t){if(t.message.includes("polyfill"))throw t;throw x(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class V{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw x(H.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(s,e){if(!(s.length>=e.length))return!1;return s.substring(s.length-e.length)===e}(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}class K{constructor(data,e){let t=0,n="";P(data)?(this.data_=data,t=data.size,n=data.type):data instanceof ArrayBuffer?(e?this.data_=new Uint8Array(data):(this.data_=new Uint8Array(data.byteLength),this.data_.set(new Uint8Array(data))),t=this.data_.length):data instanceof Uint8Array&&(e?this.data_=data:(this.data_=new Uint8Array(data.length),this.data_.set(data)),t=data.length),this.size_=t,this.type_=n}size(){return this.size_}type(){return this.type_}slice(e,t){if(P(this.data_)){const n=function(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}(this.data_,e,t);return null===n?null:new K(n)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new K(n,!0)}}static getBlob(...e){if(E()){const t=e.map((e=>e instanceof K?e.data_:e));return new K(z.apply(null,t))}{const t=e.map((e=>C(e)?G(H.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let o=0;return t.forEach((e=>{for(let i=0;i<e.length;i++)r[o++]=e[i]})),new K(r,!0)}}uploadData(){return this.data_}}function J(s){let e;try{e=JSON.parse(s)}catch(e){return null}return"object"!=typeof(p=e)||Array.isArray(p)?null:e;var p}function Z(path){const e=path.lastIndexOf("/",path.length-2);return-1===e?path:path.slice(e+1)}function Y(e,t){return t}class Q{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||Y}}let ee=null;function te(){if(ee)return ee;const e=[];e.push(new Q("bucket")),e.push(new Q("generation")),e.push(new Q("metageneration")),e.push(new Q("name","fullPath",!0));const t=new Q("name");t.xform=function(e,t){return function(e){return!C(e)||e.length<2?e:Z(e)}(t)},e.push(t);const n=new Q("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new Q("timeCreated")),e.push(new Q("updated")),e.push(new Q("md5Hash",null,!0)),e.push(new Q("cacheControl",null,!0)),e.push(new Q("contentDisposition",null,!0)),e.push(new Q("contentEncoding",null,!0)),e.push(new Q("contentLanguage",null,!0)),e.push(new Q("contentType",null,!0)),e.push(new Q("metadata","customMetadata",!0)),ee=e,ee}function ne(e,t,n){const r={type:"file"},o=n.length;for(let i=0;i<o;i++){const e=n[i];r[e.local]=e.xform(r,t[e.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,path=e.fullPath,r=new S(n,path);return t._makeStorageReference(r)}})}(r,e),r}function se(e,t,n){const r=J(t);if(null===r)return null;return ne(e,r,n)}function re(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}const ie="prefixes",oe="items";function ae(e,t,n){const r=J(n);if(null===r)return null;return function(e,t,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[ie])for(const path of n[ie]){const n=path.replace(/\/$/,""),o=e._makeStorageReference(new S(t,n));r.prefixes.push(o)}if(n[oe])for(const o of n[oe]){const n=e._makeStorageReference(new S(t,o.name));r.items.push(n)}return r}(e,t,r)}class le{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}function ce(e){if(!e)throw m()}function he(e,t){return function(n,text){const r=se(e,text,t);return ce(null!==r),r}}function ue(e,t){return function(n,text){const r=se(e,text,t);return ce(null!==r),function(e,t,n,r){const o=J(t);if(null===o)return null;if(!C(o.downloadTokens))return null;const l=o.downloadTokens;if(0===l.length)return null;const c=encodeURIComponent;return l.split(",").map((t=>{const o=e.bucket,path=e.fullPath;return I("/b/"+c(o)+"/o/"+c(path),n,r)+B({alt:"media",token:t})}))[0]}(r,text,e.host,e._protocol)}}function de(e){return function(t,n){let r;var path,o;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new _("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new _("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(o=e.bucket,r=new _("quota-exceeded","Quota for bucket '"+o+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(path=e.path,r=new _("unauthorized","User does not have permission to access '"+path+"'.")):r=n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}}function _e(e){const t=de(e);return function(n,r){let o=t(n,r);var path;return 404===n.getStatus()&&(path=e.path,o=new _("object-not-found","Object '"+path+"' does not exist.")),o.serverResponse=r.serverResponse,o}}function pe(e,t,n){const r=I(t.fullServerUrl(),e.host,e._protocol),o=e.maxOperationRetryTime,l=new le(r,"GET",he(e,n),o);return l.errorHandler=_e(t),l}function fe(e,t,n,r,o){const l={};t.isRoot?l.prefix="":l.prefix=t.path+"/",n&&n.length>0&&(l.delimiter=n),r&&(l.pageToken=r),o&&(l.maxResults=o);const c=I(t.bucketOnlyServerUrl(),e.host,e._protocol),h=e.maxOperationRetryTime,d=new le(c,"GET",function(e,t){return function(n,text){const r=ae(e,t,text);return ce(null!==r),r}}(e,t.bucket),h);return d.urlParams=l,d.errorHandler=de(t),d}function ge(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}function me(e,t,n,r,o){const l=t.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};const h=function(){let e="";for(let i=0;i<2;i++)e+=Math.random().toString().slice(2);return e}();c["Content-Type"]="multipart/related; boundary="+h;const d=ge(t,r,o),_="--"+h+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+re(d,n)+"\r\n--"+h+"\r\nContent-Type: "+d.contentType+"\r\n\r\n",f="\r\n--"+h+"--",body=K.getBlob(_,r,f);if(null===body)throw R();const m={name:d.fullPath},w=I(l,e.host,e._protocol),v=e.maxUploadRetryTime,k=new le(w,"POST",he(e,n),v);return k.urlParams=m,k.headers=c,k.body=body.uploadData(),k.errorHandler=de(t),k}class be{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function we(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){ce(!1)}return ce(!!n&&-1!==(t||["active"]).indexOf(n)),n}const ve=262144;function Re(e,t,n,r,o,l,c,h){const d=new be(0,0);if(c?(d.current=c.current,d.total=c.total):(d.current=0,d.total=r.size()),r.size()!==d.total)throw new _("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");const f=d.total-d.current;let m=f;o>0&&(m=Math.min(m,o));const w=d.current,v=w+m;let k="";k=0===m?"finalize":f===m?"upload, finalize":"upload";const T={"X-Goog-Upload-Command":k,"X-Goog-Upload-Offset":`${d.current}`},body=r.slice(w,v);if(null===body)throw R();const y=t.maxUploadRetryTime,x=new le(n,"POST",(function(e,text){const n=we(e,["active","final"]),o=d.current+m,c=r.size();let h;return h="final"===n?he(t,l)(e,text):null,new be(o,c,"final"===n,h)}),y);return x.headers=T,x.body=body.uploadData(),x.progressCallback=h||null,x.errorHandler=de(e),x}const ke={STATE_CHANGED:"state_changed"},Te={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ye(e){switch(e){case"running":case"pausing":case"canceling":return Te.RUNNING;case"paused":return Te.PAUSED;case"success":return Te.SUCCESS;case"canceled":return Te.CANCELED;default:return Te.ERROR}}class xe{constructor(e,t,n){if("function"==typeof e||null!=t||null!=n)this.next=e,this.error=null!=t?t:void 0,this.complete=null!=n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}function Ue(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}class Se{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=L.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=L.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=L.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,body,n){if(this.sent_)throw U("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==n)for(const e in n)n.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,n[e].toString());return void 0!==body?this.xhr_.send(body):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw U("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw U("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw U("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw U("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(header){return this.xhr_.getResponseHeader(header)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class Oe extends Se{initXhr(){this.xhr_.responseType="text"}}function Ce(){return new Oe}class Pe{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=te(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled"))this._needToFetchStatus=!0,this.completeTransitions_();else{const t=this.isExponentialBackoffExpired();if(M(e.status,[])){if(!t)return this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,void this.completeTransitions_();e=w()}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout((()=>{this.pendingTimeout=void 0,this._continueUpload()}),this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=function(e,t,n,r,o){const l=t.bucketOnlyServerUrl(),c=ge(t,r,o),h={name:c.fullPath},d=I(l,e.host,e._protocol),_={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":c.contentType,"Content-Type":"application/json; charset=utf-8"},body=re(c,n),f=e.maxUploadRetryTime,m=new le(d,"POST",(function(e){let t;we(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){ce(!1)}return ce(C(t)),t}),f);return m.urlParams=h,m.headers=_,m.body=body,m.errorHandler=de(t),m}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,Ce,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const r=function(e,t,n,r){const o=e.maxUploadRetryTime,l=new le(n,"POST",(function(e){const t=we(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){ce(!1)}n||ce(!1);const o=Number(n);return ce(!isNaN(o)),new be(o,r.size(),"final"===t)}),o);return l.headers={"X-Goog-Upload-Command":"query"},l.errorHandler=de(t),l}(this._ref.storage,this._ref._location,e,this._blob),o=this._ref.storage._makeRequest(r,Ce,t,n);this._request=o,o.getPromise().then((e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=ve*this._chunkMultiplier,t=new be(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,o)=>{let l;try{l=Re(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){return this._error=e,void this._transition("error")}const c=this._ref.storage._makeRequest(l,Ce,r,o,!1);this._request=c,c.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){2*(ve*this._chunkMultiplier)<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=pe(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,Ce,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=me(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,Ce,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=v(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){const e=ye(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const o=new xe(t||void 0,n||void 0,r||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const i=this._observers.indexOf(e);-1!==i&&this._observers.splice(i,1)}_notifyObservers(){this._finishPromise();this._observers.slice().forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(ye(this._state)){case Te.SUCCESS:Ue(this._resolve.bind(null,this.snapshot))();break;case Te.CANCELED:case Te.ERROR:Ue(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ye(this._state)){case Te.RUNNING:case Te.PAUSED:e.next&&Ue(e.next.bind(e,this.snapshot))();break;case Te.SUCCESS:e.complete&&Ue(e.complete.bind(e))();break;default:e.error&&Ue(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}class Ee{constructor(e,t){this._service=e,this._location=t instanceof S?t:S.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ee(e,t)}get root(){const e=new S(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Z(this._location.path)}get storage(){return this._service}get parent(){const e=function(path){if(0===path.length)return null;const e=path.lastIndexOf("/");return-1===e?"":path.slice(0,e)}(this._location.path);if(null===e)return null;const t=new S(this._location.bucket,e);return new Ee(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw y(e)}}function Ae(e){const t={prefixes:[],items:[]};return Ie(e,t).then((()=>t))}async function Ie(e,t,n){const r={pageToken:n},o=await qe(e,r);t.prefixes.push(...o.prefixes),t.items.push(...o.items),null!=o.nextPageToken&&await Ie(e,t,o.nextPageToken)}function qe(e,t){null!=t&&"number"==typeof t.maxResults&&A("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=fe(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,Ce)}function Be(e,t){e._throwIfRoot("updateMetadata");const n=function(e,t,n,r){const o=I(t.fullServerUrl(),e.host,e._protocol),body=re(n,r),l=e.maxOperationRetryTime,c=new le(o,"PATCH",he(e,r),l);return c.headers={"Content-Type":"application/json; charset=utf-8"},c.body=body,c.errorHandler=_e(t),c}(e.storage,e._location,t,te());return e.storage.makeRequestWithTokens(n,Ce)}function Le(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=I(t.fullServerUrl(),e.host,e._protocol),o=e.maxOperationRetryTime,l=new le(r,"GET",ue(e,n),o);return l.errorHandler=_e(t),l}(e.storage,e._location,te());return e.storage.makeRequestWithTokens(t,Ce).then((e=>{if(null===e)throw new _("no-download-url","The given file does not have any download URLs.");return e}))}function Me(e){e._throwIfRoot("deleteObject");const t=function(e,t){const n=I(t.fullServerUrl(),e.host,e._protocol),r=e.maxOperationRetryTime,o=new le(n,"DELETE",(function(e,t){}),r);return o.successCodes=[200,204],o.errorHandler=_e(t),o}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,Ce)}function je(e,t){const n=function(path,e){const t=e.split("/").filter((component=>component.length>0)).join("/");return 0===path.length?t:path+"/"+t}(e._location.path,t),r=new S(e._location.bucket,n);return new Ee(e.storage,r)}function Ne(e,path){if(e instanceof De){const t=e;if(null==t._bucket)throw new _("no-default-bucket","No default bucket found. Did you set the '"+d+"' property when initializing the app?");const n=new Ee(t,t._bucket);return null!=path?Ne(n,path):n}return void 0!==path?je(e,path):e}function Fe(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof De)return new Ee(e,t);throw k("To use ref(service, url), the first argument must be a Storage instance.")}return Ne(e,t)}function ze(e,t){const n=null==t?void 0:t[d];return null==n?null:S.makeFromBucketSpec(n,e)}class De{constructor(e,t,n,r,o){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=h,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?S.makeFromBucketSpec(r,this._host):ze(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=S.makeFromBucketSpec(this._url,e):this._bucket=ze(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(time){A("time",0,Number.POSITIVE_INFINITY,time),this._maxUploadRetryTime=time}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(time){A("time",0,Number.POSITIVE_INFINITY,time),this._maxOperationRetryTime=time}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ee(this,e)}_makeRequest(e,t,n,r,o=!0){if(this._deleted)return new O(T());{const l=function(e,t,n,r,o,l,c=!0){const h=B(e.urlParams),d=e.url+h,_=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(_,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(_,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(_,l),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(_,r),new j(d,e.method,_,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,c)}(e,this._appId,n,r,t,this._firebaseVersion,o);return this._requests.add(l),l.getPromise().then((()=>this._requests.delete(l)),(()=>this._requests.delete(l))),l}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const He="@firebase/storage",$e="0.10.0",Ge="storage";function Xe(e,data,t){return function(e,data,t){return e._throwIfRoot("uploadBytesResumable"),new Pe(e,new K(data),t)}(e=Object(l.l)(e),data,t)}function We(e){return function(e){e._throwIfRoot("getMetadata");const t=pe(e.storage,e._location,te());return e.storage.makeRequestWithTokens(t,Ce)}(e=Object(l.l)(e))}function Ve(e,t){return Fe(e=Object(l.l)(e),t)}function Ke(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:o}=r;o&&(e._overrideAuthToken="string"==typeof o?o:Object(l.f)(o,e.app.options.projectId))}(e,t,n,r)}function Je(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return new De(n,r,l,t,o.SDK_VERSION)}Object(o._registerComponent)(new c.a(Ge,Je,"PUBLIC").setMultipleInstances(!0)),Object(o.registerVersion)(He,$e,""),Object(o.registerVersion)(He,$e,"esm2017");class Ze{constructor(e,t,n){this._delegate=e,this.task=t,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}class Ye{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Ze(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then((t=>{if(e)return e(new Ze(t,this,this._ref))}),t)}on(e,t,n,r){let o;return t&&(o="function"==typeof t?e=>t(new Ze(e,this,this._ref)):{next:t.next?e=>t.next(new Ze(e,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,o,n||void 0,r||void 0)}}class Qe{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map((e=>new et(e,this._service)))}get items(){return this._delegate.items.map((e=>new et(e,this._service)))}get nextPageToken(){return this._delegate.nextPageToken||null}}class et{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=function(e,t){return je(e,t)}(this._delegate,e);return new et(t,this.storage)}get root(){return new et(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return null==e?null:new et(e,this.storage)}put(data,e){return this._throwIfRoot("put"),new Ye(Xe(this._delegate,data,e),this)}putString(e,t=H.RAW,n){this._throwIfRoot("putString");const data=G(t,e),r=Object.assign({},n);return null==r.contentType&&null!=data.contentType&&(r.contentType=data.contentType),new Ye(new Pe(this._delegate,new K(data.data,!0),r),this)}listAll(){return(e=this._delegate,Ae(e=Object(l.l)(e))).then((e=>new Qe(e,this.storage)));var e}list(e){return function(e,t){return qe(e=Object(l.l)(e),t)}(this._delegate,e||void 0).then((e=>new Qe(e,this.storage)))}getMetadata(){return We(this._delegate)}updateMetadata(e){return function(e,t){return Be(e=Object(l.l)(e),t)}(this._delegate,e)}getDownloadURL(){return e=this._delegate,Le(e=Object(l.l)(e));var e}delete(){return this._throwIfRoot("delete"),e=this._delegate,Me(e=Object(l.l)(e));var e}_throwIfRoot(e){if(""===this._delegate._location.path)throw y(e)}}class tt{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(path){if(nt(path))throw k("ref() expected a child path but got a URL, use refFromURL instead.");return new et(Ve(this._delegate,path),this)}refFromURL(e){if(!nt(e))throw k("refFromURL() expected a full URL but got a child path, use ref() instead.");try{S.makeFromUrl(e,this._delegate.host)}catch(e){throw k("refFromUrl() expected a valid full URL but got an invalid one.")}return new et(Ve(this._delegate,e),this)}setMaxUploadRetryTime(time){this._delegate.maxUploadRetryTime=time}setMaxOperationRetryTime(time){this._delegate.maxOperationRetryTime=time}useEmulator(e,t,n={}){Ke(this._delegate,e,t,n)}}function nt(path){return/^[A-Za-z]+:\/\//.test(path)}function st(e,{instanceIdentifier:t}){const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("storage").getImmediate({identifier:t});return new tt(n,r)}!function(e){const t={TaskState:Te,TaskEvent:ke,StringFormat:H,Storage:tt,Reference:et};e.INTERNAL.registerComponent(new c.a("storage-compat",st,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion("@firebase/storage-compat","0.2.0")}(r.a)}}]);