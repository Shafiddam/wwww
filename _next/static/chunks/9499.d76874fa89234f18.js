(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9499],{8078:function(V,U,N){"use strict";N.d(U,{Z:function(){return b}});var R=N(3366),F=N(7462),Z=N(7294),d=N(512),T=N(917),l=N(4780),W=N(1796),Q=N(2641),M=N(8215),k=N(1588),E=N(7621);function S(V){return(0,E.Z)("MuiSkeleton",V)}(0,k.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var J=N(5893);let h=["animation","className","component","height","style","variant","width"],z=V=>V,c,B,a,Y,m=V=>{let{classes:U,variant:N,animation:R,hasChildren:F,width:Z,height:d}=V;return(0,l.Z)({root:["root",N,R,F&&"withChildren",F&&!Z&&"fitContent",F&&!d&&"heightAuto"]},S,U)},G=(0,T.F4)(c||(c=z`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),D=(0,T.F4)(B||(B=z`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),p=(0,Q.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(V,U)=>{let{ownerState:N}=V;return[U.root,U[N.variant],!1!==N.animation&&U[N.animation],N.hasChildren&&U.withChildren,N.hasChildren&&!N.width&&U.fitContent,N.hasChildren&&!N.height&&U.heightAuto]}})(({theme:V,ownerState:U})=>{let N=String(V.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1]||"px",R=parseFloat(V.shape.borderRadius);return(0,F.Z)({display:"block",backgroundColor:V.vars?V.vars.palette.Skeleton.bg:(0,W.Fq)(V.palette.text.primary,"light"===V.palette.mode?.11:.13),height:"1.2em"},"text"===U.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${R}${N}/${Math.round(R/.6*10)/10}${N}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===U.variant&&{borderRadius:"50%"},"rounded"===U.variant&&{borderRadius:(V.vars||V).shape.borderRadius},U.hasChildren&&{"& > *":{visibility:"hidden"}},U.hasChildren&&!U.width&&{maxWidth:"fit-content"},U.hasChildren&&!U.height&&{height:"auto"})},({ownerState:V})=>"pulse"===V.animation&&(0,T.iv)(a||(a=z`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),G),({ownerState:V,theme:U})=>"wave"===V.animation&&(0,T.iv)(Y||(Y=z`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }