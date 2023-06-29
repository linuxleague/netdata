!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="b5678671-1a48-445c-bfce-ac438d02aead",e._sentryDebugIdIdentifier="sentry-dbid-b5678671-1a48-445c-bfce-ac438d02aead")}catch(e){}}(),(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[957],{42957:(e,t,a)=>{a.r(t),a.d(t,{default:()=>J});var n=a(29439),l=a(67294),r=a(79655),o=a(54851),i=a(16161),d=a(48224),c=a(41659),s=a(11012),u=a(89250),m=a(4480),f=(0,m.cn)({key:"currentAlertIdAtom",default:null});const g=function(){var e,t=(0,u.UO)().alertId,a=(0,m.Zl)(f,e),n=(0,m.sJ)(f);return(0,l.useEffect)((function(){n!==t&&a(t)}),[n,t]),(0,l.useEffect)((function(){return function(){return a(null)}}),[]),t};var h=a(4606),E=a(15057),p=a(72840),b=a(94907),v=a(2660),w=a(29401),y=a(76410),I=a(6264),x=a(32802),C=a(21728),L=a(60677),k=(0,L.default)(o.Flex).attrs({alignItems:"center"}).withConfig({displayName:"styled__StyledButtonContainer",componentId:"sc-1glv09p-0"})(["position:sticky;bottom:0;"]),V=function(e){var t=e.disabled,a=e.nodeId,n=e.alertId,r=e.chartContext,i=e.alertDate,d=e.onClose,c=e.isLoading,s=e.small,m=void 0!==s&&s,f=e.testid,g=void 0===f?"alertDetailsModal":f,h=(0,u.s0)(),E=(0,x.m3)(a),b=(0,l.useCallback)((function(){d&&d(),n?h(E,{state:{alertId:n}}):h(E)}),[E,n]),v=(0,I.TQ)(),w=(0,l.useCallback)((function(){var e=1e3*i;v({highlight:{after:e-6e4,before:e},correlation:!0}),b()}),[i,r,b,n]),y=(0,p.UL)(),L=(0,C.Cd)(y,r),V=!!(null===L||void 0===L?void 0:L.firstEntry)&&L.firstEntry<i&&!c;return l.createElement(k,{justifyContent:"end",gap:2},l.createElement(o.Flex,{gap:2,justifyContent:"end"},l.createElement(o.Button,{small:m,label:"Run correlations",onClick:w,flavour:"hollow",isLoading:c,disabled:!V,width:m?"112px":"170px","data-testid":"".concat(g,"-runCorrelations-button"),"data-ga":"alert-modal::click-run-correlations::alerts-view"}),l.createElement(o.Button,{small:m,label:"Go to chart",onClick:b,isLoading:c,disabled:c||t,width:m?"112px":"150px","data-testid":"".concat(g,"-goToNode-button"),"data-ga":"alert-modal::click-goto-chart::alerts-view"})))};const B=(0,l.memo)(V);var T=a(98536),_=a(25105);const F=function(e){var t=e.alertId,a=e.chartContext,n=e.date,r=e.formattedLastValue,i=e.formattedTransitionValue,d=e.name,c=e.nodeId,s=e.status,u=e.statusLatest,m=e.transitionAt,f=e.whenLast,g=e.fullyLoaded,h=(0,E.m)(),p=h?o.H4:o.H0;return l.createElement(o.Flex,{column:!0,gap:4},l.createElement(o.Flex,{justifyContent:"between"},l.createElement(o.Flex,{alignItems:"center",gap:2},l.createElement(_.Z,{margin:h?null:[.5,0,0],type:"".concat(s,"AlertsTable"),"data-testid":"alertView-statusPill"},s),l.createElement(p,{"data-testid":"alertView-alertName"},d)),!1),l.createElement(o.Flex,{justifyContent:"between",alignItems:"center"},l.createElement(T.Z,{formattedLastValue:r,formattedTransitionValue:i,transitionAt:m,whenLast:f,status:s,statusLatest:u}),g&&!h&&l.createElement(B,{disabled:"clear"===s,alertDate:n,alertId:t,chartContext:a,name:d,nodeId:c,small:!0,testid:"alertView"})))};var Z=a(55354),N=L.default.img.withConfig({displayName:"sc-404__Illustration",componentId:"sc-4w81fg-0"})(["height:35%;width:35%;"]),A=L.default.div.withConfig({displayName:"sc-404__ButtonContainer",componentId:"sc-4w81fg-1"})(["margin:",";"],(0,o.getSizeBy)(4));const U=function(){var e="".concat(Z.Z.assetsBaseURL,"/img/no-nodes-room.svg");return l.createElement(o.Flex,{column:!0,alignItems:"center",justifyItems:"center",justifyContent:"center",height:"100%",width:"100%",padding:[0,0,"10%"]},l.createElement(N,{src:e,alt:"Unreachable alert",title:"Unreachable alert"}),l.createElement(o.H3,null,"We couldn't find the alert"),l.createElement(o.Text,null,"This can be a temporary problem of that specific alert."),l.createElement(A,null,l.createElement(o.Button,{label:"Retry",icon:"reload"})))};var j=a(16525),D=function(e){var t=e.children;return l.createElement(o.Flex,{background:"modalHeaderBackground",height:12,flex:!1,gap:4,padding:[0,2,0,4],alignItems:"center"},l.createElement(o.Icon,{name:"logo_s",color:"success",width:"23px"}),t)};const H=function(e){var t=e.alertId,a=e.chart,n=e.alertName,r=(0,p.Hm)("name"),i=(0,d.E5)(t),c=i.fullyLoaded,u=void 0!==c&&c,m=i.fullyLoading,f=void 0===m||m,g=i.info,I=i.units,x=i.formattedTransitionValue,C=i.transitionAt,L=i.chartContext,k=i.chartId,V=i.name,B=i.nodeId,T=i.status;(0,d.yx)({id:t,chartId:k||a,name:V||n,nodeId:B});var _=(0,h.o)(t),Z=_.value,N=_.when,A=_.status,H=(0,y.pK)(Z,I),R=(0,E.m)();return l.createElement(o.Flex,{column:!0,width:R?"100%":{max:280},padding:R?null:[0,0,10],background:R?"modalBackground":null},R&&l.createElement(D,null,l.createElement(o.Flex,{column:!0},l.createElement(o.H6,{color:"textLite"},"ROOM"),l.createElement(o.Text,{"data-testid":"alertView-mobile-roomName"},r))),l.createElement(o.Flex,{column:!0,padding:R?[3]:[0],overflow:R?"auto":"visible",gap:3},l.createElement(F,{alertId:t,chartContext:L,date:C,formattedLastValue:H,formattedTransitionValue:x,name:V,nodeId:B,transitionAt:C,whenLast:N,status:T,statusLatest:A,fullyLoaded:u}),u?null:f?l.createElement(s.Z,{title:"Loading alert..."}):l.createElement(U,null),u&&g&&l.createElement(l.Fragment,null,l.createElement(v.Z,{iconName:"documentation"},"Alert Description"),l.createElement(o.Text,{"data-testid":"alertView-info"},g),l.createElement(j.Z,{alertId:t})),u&&l.createElement(b.Z,{id:t,chartContext:L,chartId:k,formattedLastValue:H,formattedTransitionValue:x,transitionAt:C,whenLast:N,isFormattedValueLoaded:u,nodeId:B,status:T,testid:"alertView"}),u&&l.createElement(w.Z,{id:t,testid:"alertView"})),R&&l.createElement(o.Box,{position:"sticky",padding:[4],background:"modalBackground",bottom:0,border:{side:"top",color:"tabsBorder"}},l.createElement(o.TextSmall,null,"In order to ",l.createElement(o.TextSmall,{strong:!0},"Run Correlations")," or"," ",l.createElement(o.TextSmall,{strong:!0},"View the Chart")," you will have to visit this alert from its\u2019 dedicated page on a desktop device.")))};var R=a(60429),S=L.default.img.withConfig({displayName:"node404__Illustration",componentId:"sc-174agw2-0"})(["height:35%;width:35%;"]),M=L.default.div.withConfig({displayName:"node404__ButtonContainer",componentId:"sc-174agw2-1"})(["margin:",";"],(0,o.getSizeBy)(4));const O=function(){var e="".concat(Z.Z.assetsBaseURL,"/img/no-nodes-room.svg");return l.createElement(o.Flex,{column:!0,alignItems:"center",justifyItems:"center",justifyContent:"center",height:"100%",width:"100%",padding:[0,0,"10%"]},l.createElement(S,{src:e,alt:"Unreachable node",title:"Unreachable node"}),l.createElement(o.H3,null,"This node is unreachable"),l.createElement(o.Text,null,"This can be a temporary problem of that specific node if this"),l.createElement(o.Text,null,"problem persists please contact your administrator."),l.createElement(M,null,l.createElement(o.Button,{label:"Retry",icon:"reload"})))};const z=function(e){var t=e.alertId,a=e.children,n=(0,R.oW)(t).nodeId;return(0,x.bV)(n,"isLive")?a:l.createElement(O,null)};var W=a(34471);const G=function(e){var t=e.children;return(0,E.m)()?l.createElement(o.Layer,{full:!0},l.createElement(o.Flex,{width:"100%",background:"mainBackground","data-testid":"alertView-mobileContainer"},t)):t};const J=function(){var e=g(),t=(0,r.lr)(),a=(0,n.Z)(t,1)[0],u=function(e){var t=(0,d.Nf)();return(0,l.useMemo)((function(){return t.find((function(t){return t.id===e}))||null}),[e,t])}(e),m=(0,d.Bk)(),f=(0,p.UL)();return(0,W.Z)(f),(0,i.bV)({title:(null===u||void 0===u?void 0:u.name)||a.get("alarm"),id:(null===u||void 0===u?void 0:u.name)||a.get("alarm"),destination:e,params:location.hash,type:"alerts"}),m?l.createElement(c.Z,{overflow:{vertical:"auto"}},l.createElement(z,{alertId:e},m&&l.createElement(o.Box,{padding:[10,6]},l.createElement(G,null,l.createElement(H,{alertId:e,chart:a.get("chart"),alertName:a.get("alarm")}))))):l.createElement(s.Z,{title:"Loading alert..."})}}}]);