(this["webpackJsonptranslation-file-generator"]=this["webpackJsonptranslation-file-generator"]||[]).push([[0],{15:function(e){e.exports=JSON.parse('{"app":{"credits":"Made with React and Node.js by {{author}}","title":"Translation File Generator"},"configs":{"langCodes":{"eng":"English","fre":"French","ger":"German","ita":"Italian","keyName":"Translation key","por":"Portugese","spa":"Spanish","rus":"Russian"}},"fileConfig":{"availableLanguages":"Available Languages","availableLanguagesInstructions":"Toggle off the language in which you do not want to create a translation file.","exampleFile":"Examples:","exampleFileCSV":"CSV file","exampleFileExcel":"Excel file","filename":"Filename","filenameInstructions":"Type the desired filename. Use \\"{lang}\\" for the language code (default: 3 letter code). Toggle the switch below to use the 2 letter code.","formErrorMsg":"The form is invalid.","generateFile":"Generate files","isoCodePlaceholder":"2 letter code (ISO 639-1)","keyColumn":"Key Column","selectFile":"Select a file","selectFileHint":".csv or Excel file"},"fileResults":{"downloadLink":"Download here","downloadText":"The translation file has been generated.","downloadInstruction":"The download link will be valid for the next {{time}} minutes."}}')},16:function(e){e.exports=JSON.parse('{"app":{"credits":"Fait avec React et Node.js par {{author}}","title":"G\xe9n\xe9rateur de fichiers de traduction"},"configs":{"langCodes":{"eng":"Anglais","fre":"Fran\xe7ais","ger":"Allemand","ita":"Italien","keyName":"Cl\xe9 de traduction","por":"Portugais","spa":"Espagnol","rus":"Russe"}},"fileConfig":{"availableLanguages":"Langues disponibles","availableLanguagesInstructions":"D\xe9sactivez la langue dans laquelle vous ne voulez pas cr\xe9er de fichier de traduction.","exampleFile":"Exemples :","exampleFileCSV":"fichier CSV","exampleFileExcel":"fichier Excel","filename":"Nom du fichier","filenameInstructions":"Inscrivez le nom du fichier souhait\xe9. Utilisez \\"{lang}\\" pour le code de langue (par d\xe9faut: code \xe0 3 lettres). Basculez le commutateur ci-dessous pour utiliser le code \xe0 2 lettres.","formErrorMsg":"Le formulaire est invalide.","generateFile":"G\xe9n\xe9rer fichiers","isoCodePlaceholder":"Code \xe0 2 lettres (ISO 639-1)","keyColumn":"Colonne de la cl\xe9","selectFile":"Choisir un fichier","selectFileHint":".csv ou fichier Excel"},"fileResults":{"downloadLink":"T\xe9l\xe9chargez ici.","downloadText":"Le fichier de traduction a \xe9t\xe9 g\xe9n\xe9r\xe9.","downloadInstruction":"Le lien de t\xe9l\xe9chargement sera valide pendant les {{time}} prochaines minutes."}}')},20:function(e,a,n){e.exports=n(32)},25:function(e,a,n){},32:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(13),i=n.n(r),c=(n(25),n(11)),o=n(14),s=n(15),u=n(16),f=n(33),d=n(1),m=n(34),g=n(6),p=n(5),h=n(7),v=n.n(h),b=n(10);var E=function(e){var a=e.id,n=e.label,t=e.checked,r=void 0!==t&&t,i=e.round,c=void 0!==i&&i,o=e.onToggle;return l.a.createElement("div",{className:"switch-wrapper"},l.a.createElement("label",{className:"switch"},l.a.createElement("input",{type:"checkbox",id:a,defaultChecked:r,onChange:function(e){var a=e.target.checked;o(a)}}),l.a.createElement("span",{className:c?"slider round":"slider"})),l.a.createElement("label",{htmlFor:a},n))},C={allowedFileExts:".csv,.xls,.xlsb,.xlsm,.xlsx",downloadLinkMaxTime:60,filename:"translations.{lang}",langCodes:{eng:["eng","en"],fre:["fre","fr"],ger:["ger","de"],ita:["ita","it"],por:["por","pt"],spa:["spa","es"],rus:["rus","ru"]},languages:{english:"English",french:"Fran\xe7ais"}},O={patterns:function(e){return"file"===e?/^[^\s]+$/:"filename"===e?/^(\w|-|(\.(?!\.+))?)*\{lang\}(\w|-|(\.(?!\.+))?)*$/:"mapColumn0"===e?/^\d+$/:-1!==e.indexOf("mapColumn")?/.*/:void 0},validate:function(e){var a=e.name,n=e.value,t=e.required,l=O.patterns(a),r=!0;return(t||n.length>0)&&(r=l.test(n)),r?e.classList.remove("validation-error"):e.classList.add("validation-error"),r}},j=O;var k=function(e){var a=Object(m.a)("default"),n=Object(d.a)(a,1)[0],r=C.allowedFileExts,i=Object.assign({keyName:[]},C.langCodes),c=Object.entries(i),o=Object(t.useRef)(null),s=new Map;c.forEach((function(e){var a=Object(d.a)(e,2),n=a[0];a[1];return s.set(n,{refCheckbox:Object(t.createRef)(),refColumn:Object(t.createRef)()})}));var u=Object(t.useState)(null),f=Object(d.a)(u,2),h=f[0],O=f[1],k=Object(t.useState)([]),w=Object(d.a)(k,2),x=w[0],y=w[1],N=Object(t.useState)({keyName:{checked:!0,columnId:null},eng:{checked:!0,columnId:null},fre:{checked:!0,columnId:null},ger:{checked:!1,columnId:null},ita:{checked:!1,columnId:null},por:{checked:!1,columnId:null},rus:{checked:!1,columnId:null},spa:{checked:!1,columnId:null}}),F=Object(d.a)(N,2),I=F[0],S=F[1],L=Object(t.useState)(C.filename),T=Object(d.a)(L,2),_=T[0],R=T[1],D=Object(t.useState)(!1),V=Object(d.a)(D,2),G=V[0],M=V[1],P=Object(t.useState)(!0),q=Object(d.a)(P,2),z=q[0],A=q[1],J=function(e){return Object.entries(I).find((function(a){var n=Object(d.a)(a,2),t=n[0],l=n[1],r=l.checked;l.columnId;return t===e&&r}))},B=function(e){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];s.get(e).refColumn.current.disabled=!a,S((function(n){return Object(p.a)(Object(p.a)({},n),{},Object(g.a)({},e,{checked:a,columnId:s.get(e).refColumn.current.value}))}))},$=function(e){var a=e.target.querySelectorAll("input, select"),n=Array.from(a).filter((function(e){return"checkbox"!==e.type})).map((function(e){return j.validate(e)}));if(A(n.every((function(e){return e}))),z)return!0},H=function(){var a=Object(b.a)(v.a.mark((function a(n){var t,l,r,i;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),t={},l=null,$(n)){a.next=5;break}return a.abrupt("return");case 5:return Object.entries(I).filter((function(e){var a=Object(d.a)(e,2),n=(a[0],a[1]),t=n.checked;n.columnId;return t})).forEach((function(e,a){var n=Object(d.a)(e,2),r=n[0],i=n[1],c=(i.checked,i.columnId);if(0===a&&(l=c),Object.keys(C.langCodes).includes(r)){var o=C.langCodes[r],s=G?o[1]:o[0],u="".concat(_.replace(/{lang}/gi,s),".json");t[u]={};for(var f=1;f<x.length;f++)for(var m=1;m<x[f].length;m++){var h=x[f][l],v=x[f][c]||"".concat(s.toUpperCase()," \u2014 ").concat(h);t[u]=Object(p.a)(Object(p.a)({},t[u]),{},Object(g.a)({},h,v))}t[u]=Object.keys(t[u]).sort().reduce((function(e,a){return Object(p.a)(Object(p.a)({},e),{},Object(g.a)({},a,t[u][a]))}),{})}})),a.next=8,fetch("/api/file/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filesContent:t})});case 8:return r=a.sent,a.next=11,r.json();case 11:i=a.sent,e.onGenerateDownloadLink(i.showDownloadLink);case 13:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return l.a.createElement("section",{className:"file__config"},l.a.createElement("form",{onSubmit:H,noValidate:!0},l.a.createElement("section",{className:"step__selectFile--current"},l.a.createElement("input",{type:"file",name:"file",accept:r,onChange:function(e){var a=e.target.files[0];if(a){var n=new FileReader;n.onload=function(){var e=Object(b.a)(v.a.mark((function e(a){var n,t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/file/read",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fileData:a.target.result})});case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,y(t.data);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),n.readAsBinaryString(a),O(a)}},ref:o,required:!0}),l.a.createElement("button",{type:"button",className:h?"select__file--valid":"select__file",id:"selectFile",onClick:function(){return o.current.click()}},h?h.name:n("fileConfig.selectFile")),l.a.createElement("span",{className:"hint"},n("fileConfig.selectFileHint")),l.a.createElement("small",null,l.a.createElement("span",null,n("fileConfig.exampleFile"))," ",l.a.createElement("a",{href:"files/translations.csv"},n("fileConfig.exampleFileCSV"))," ",l.a.createElement("a",{href:"files/translations.xlsx"},n("fileConfig.exampleFileExcel")))),l.a.createElement("section",{className:"step__mapping"},l.a.createElement("h3",null,n("fileConfig.availableLanguages")),l.a.createElement("span",{className:"hint"},n("fileConfig.availableLanguagesInstructions")),c.map((function(e,a){var t,r=Object(d.a)(e,2),i=r[0];r[1];return l.a.createElement("div",{className:"row",key:a},l.a.createElement("div",{className:"col"},0!==a&&l.a.createElement(E,{id:"mapping",checked:J(i),onToggle:function(e){return B(i,e)},ref:s.get(i).refCheckbox})),l.a.createElement("div",{className:J(i)?"col":"col deactivated"},n("configs.langCodes.".concat(i))),l.a.createElement("div",{className:"col"},l.a.createElement("select",{name:"mapColumn".concat(a),disabled:!J(i),onChange:function(){return B(i)},ref:s.get(i).refColumn,required:J(i)},l.a.createElement("option",null),null===(t=x[0])||void 0===t?void 0:t.map((function(e,a){return e&&l.a.createElement("option",{key:a,value:a},e)})))))}))),l.a.createElement("section",{className:"step__setFilename"},l.a.createElement("h3",null,n("fileConfig.filename")),l.a.createElement("span",{className:"hint"},n("fileConfig.filenameInstructions")),l.a.createElement("div",{className:"filename-name"},l.a.createElement("div",{className:"input-group"},l.a.createElement("input",{type:"text",name:"filename",placeholder:C.filename,defaultValue:C.filename,value:_,onInput:function(e){return R(e.target.value)},onBlur:function(e){0===_.length&&R(C.filename)},requried:!0}),l.a.createElement("span",null,".json"))),l.a.createElement("div",{className:"filename-lang-code"},l.a.createElement(E,{id:"ISO639-1Code",label:n("fileConfig.isoCodePlaceholder"),onToggle:function(e){return M(e)}})),l.a.createElement("div",{className:"filename-preview"},_&&"".concat(_.replace(/{lang}/gi,G?"en":"eng"),".json"))),l.a.createElement("section",{className:"step__generateFile"},l.a.createElement("button",{type:"submit"},n("fileConfig.generateFile")),!z&&l.a.createElement("span",{className:"error"},n("fileConfig.formErrorMsg")))))};var w=function(e){var a=e.showDownloadLink,n=Object(m.a)("default"),t=Object(d.a)(n,1)[0];return l.a.createElement("section",{className:"file__results"},a?[l.a.createElement("div",null,t("fileResults.downloadText")," ",l.a.createElement("a",{href:"http://localhost:5000/api/file/download"},t("fileResults.downloadLink")))]:null)};var x=function(){var e=Object(m.a)("default"),a=Object(d.a)(e,2),n=a[0],r=a[1],i=Object(t.useState)(!1),c=Object(d.a)(i,2),o=c[0],s=c[1],u=function(e){return r.changeLanguage(e)};return l.a.createElement("div",{className:"app"},l.a.createElement("header",null,l.a.createElement("h1",null,n("app.title")),"fr"===r.language?l.a.createElement("button",{onClick:function(){return u("en")}},C.languages.english):l.a.createElement("button",{onClick:function(){return u("fr")}},C.languages.french)),l.a.createElement("main",null,l.a.createElement(k,{onGenerateDownloadLink:function(e){return s(e)}}),l.a.createElement(w,{showDownloadLink:o})),l.a.createElement("footer",null,n("app.credits",{author:"Chelny Duplan"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.use(o.a).init({fallbackLng:["en","fr"],debug:!1,interpolation:{escapeValue:!1},resources:{en:{default:s},fr:{default:u}}}),i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f.a,{i18n:c.a},l.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.62b2f20c.chunk.js.map