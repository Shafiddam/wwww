(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8792],{8078:function(t,e,i){"use strict";i.d(e,{Z:function(){return N}});var a=i(3366),n=i(7462),r=i(7294),s=i(512),o=i(917),l=i(4780),d=i(1796),c=i(2641),u=i(8215),h=i(1588),m=i(7621);function p(t){return(0,m.Z)("MuiSkeleton",t)}(0,h.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var v=i(5893);let g=["animation","className","component","height","style","variant","width"],f=t=>t,x,_,j,b,w=t=>{let{classes:e,variant:i,animation:a,hasChildren:n,width:r,height:s}=t;return(0,l.Z)({root:["root",i,a,n&&"withChildren",n&&!r&&"fitContent",n&&!s&&"heightAuto"]},p,e)},P=(0,o.F4)(x||(x=f`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),y=(0,o.F4)(_||(_=f`
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
`)),C=(0,c.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:i}=t;return[e.root,e[i.variant],!1!==i.animation&&e[i.animation],i.hasChildren&&e.withChildren,i.hasChildren&&!i.width&&e.fitContent,i.hasChildren&&!i.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{let i=String(t.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1]||"px",a=parseFloat(t.shape.borderRadius);return(0,n.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,d.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${i}/${Math.round(a/.6*10)/10}${i}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>"pulse"===t.animation&&(0,o.iv)(j||(j=f`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),P),({ownerState:t,theme:e})=>"wave"===t.animation&&(0,o.iv)(b||(b=f`
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
    `),y,(e.vars||e).palette.action.hover)),Z=r.forwardRef(function(t,e){let i=(0,u.Z)({props:t,name:"MuiSkeleton"}),{animation:r="pulse",className:o,component:l="span",height:d,style:c,variant:h="text",width:m}=i,p=(0,a.Z)(i,g),f=(0,n.Z)({},i,{animation:r,component:l,variant:h,hasChildren:!!p.children}),x=w(f);return(0,v.jsx)(C,(0,n.Z)({as:l,ref:e,className:(0,s.Z)(x.root,o),ownerState:f},p,{style:(0,n.Z)({width:m,height:d},c)}))});var N=Z},6087:function(t,e,i){"use strict";var a=i(5893),n=i(5675),r=i.n(n);i(7294);var s=i(5055),o=i.n(s),l=i(1664),d=i.n(l),c=i(8078);e.Z=t=>{let{data:e,related:i=!1}=t;return(0,a.jsxs)(d(),{href:"/blog/".concat(null==e?void 0:e.path),className:o().post_card,children:[(0,a.jsx)("div",{className:o().img_wrapper,children:(null==e?void 0:e.imgUrl)?(0,a.jsx)(r(),{src:null==e?void 0:e.imgUrl,fill:!0,sizes:"(max-width: 768px) 100vw",quality:100,style:{objectFit:"cover"},alt:null==e?void 0:e.path}):(0,a.jsx)(c.Z,{variant:"rounded",height:"100%",width:"100%",style:{borderRadius:"24px 24px 0px 0px"}})}),(0,a.jsxs)("div",{className:o().info,children:[(0,a.jsx)(i?"p":"h2",{children:null==e?void 0:e.title}),(0,a.jsx)("div",{className:o().date,children:null==e?void 0:e.date})]})]})}},1736:function(t,e,i){"use strict";var a=i(5893),n=i(9008),r=i.n(n),s=i(1163);i(7294),e.Z=t=>{let{title:e,description:i,date:n,image:o="https://lava.ru/uploads/preview/lava.jpg",type:l="website"}=t,{asPath:d}=(0,s.useRouter)();return(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:e}),(0,a.jsx)("meta",{name:"description",content:i}),(0,a.jsx)("meta",{property:"og:url",content:"".concat("https://lava.ru").concat(d)}),(0,a.jsx)("meta",{property:"og:type",content:l}),(0,a.jsx)("meta",{property:"og:title",content:e}),(0,a.jsx)("meta",{property:"og:description",content:i}),(0,a.jsx)("meta",{property:"og:site_name",content:"LAVA"}),(0,a.jsx)("meta",{property:"og:image",content:o}),(0,a.jsx)("meta",{property:"og:image:alt",content:e}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:title",content:e}),(0,a.jsx)("meta",{name:"twitter:description",content:i}),(0,a.jsx)("meta",{name:"twitter:image",content:o}),(0,a.jsx)("meta",{name:"twitter:image:alt",content:e}),(0,a.jsx)("meta",{itemProp:"title",content:e}),(0,a.jsx)("meta",{itemProp:"description",content:i}),(0,a.jsx)("meta",{itemProp:"image",content:o}),n&&(0,a.jsx)("meta",{itemProp:"article:published_time",content:n})]})}},1036:function(t,e,i){"use strict";var a=i(5893),n=i(8412),r=i.n(n);e.Z=function(t){let{children:e}=t;return(0,a.jsx)("main",{className:r().main,children:e})}},3367:function(t,e,i){"use strict";i.d(e,{Z:function(){return n}});var a=i(5713);let n={getBlogList:async t=>a.h.post("get-blog",t),getArticlePost:async t=>a.h.post("/get-article",t)}},8792:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return N}});var a=i(5893),n=i(5675),r=i.n(n),s=i(1664),o=i.n(s),l=i(7294),d=i(2462),c=i.n(d),u=i(8078),h=t=>{let{mainPost:e}=t;return(0,a.jsx)(o(),{href:"/blog/".concat(null==e?void 0:e.path),className:c().main_card,children:(0,a.jsxs)("div",{className:c().wrapper,children:[(0,a.jsx)("div",{className:c().img_wrapper,children:(null==e?void 0:e.imgUrl)?(0,a.jsx)(r(),{src:null==e?void 0:e.imgUrl,quality:100,fill:!0,style:{objectFit:"cover"},sizes:"(max-width: 768px) 100vw",alt:null==e?void 0:e.title}):(0,a.jsx)(u.Z,{variant:"rounded",width:"100%",height:"100%"})}),(0,a.jsxs)("div",{className:c().info,children:[(0,a.jsx)("h2",{className:c().title,children:null==e?void 0:e.title}),(0,a.jsx)("time",{className:c().time,dateTime:null==e?void 0:e.date,children:null==e?void 0:e.date})]})]})})},m=i(6087),p=i(6945),v=i(1036),g=i(1736),f=i(5324),x=i(2161),_=i(2924),j=i(9499);class b extends _.z{constructor(t,e){super(t,e)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(t,e){super.setOptions({...t,behavior:(0,j.Gm)()},e)}getOptimisticResult(t){return t.behavior=(0,j.Gm)(),super.getOptimisticResult(t)}fetchNextPage({pageParam:t,...e}={}){return this.fetch({...e,meta:{fetchMore:{direction:"forward",pageParam:t}}})}fetchPreviousPage({pageParam:t,...e}={}){return this.fetch({...e,meta:{fetchMore:{direction:"backward",pageParam:t}}})}createResult(t,e){var i,a,n,r,s,o;let{state:l}=t,d=super.createResult(t,e),{isFetching:c,isRefetching:u}=d,h=c&&(null==(i=l.fetchMeta)?void 0:null==(a=i.fetchMore)?void 0:a.direction)==="forward",m=c&&(null==(n=l.fetchMeta)?void 0:null==(r=n.fetchMore)?void 0:r.direction)==="backward";return{...d,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:(0,j.Qy)(e,null==(s=l.data)?void 0:s.pages),hasPreviousPage:(0,j.ZF)(e,null==(o=l.data)?void 0:o.pages),isFetchingNextPage:h,isFetchingPreviousPage:m,isRefetching:u&&!h&&!m}}}var w=i(7187),P=i(3367),y=(t,e)=>{let{limit:i,offset:a}=t;return function(t,e,i){let a=(0,x._v)(t,e,i);return(0,w.r)(a,b)}(["getPostList"],()=>P.Z.getBlogList({l:i,o:a}),{...e})},C=i(5941),Z=i.n(C),N=()=>{var t,e,i,n;let[r,s]=(0,l.useState)(10),[o,d]=(0,l.useState)(0),{data:c,fetchNextPage:u,hasNextPage:x,isFetchingNextPage:_}=y({limit:r,offset:o},{onSuccess:()=>{d(t=>t+r),s(3)},getNextPageParam:t=>{var e,i;return null===(i=t.data)||void 0===i?void 0:null===(e=i.data)||void 0===e?void 0:e.paginate.hasPages}});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g.Z,{title:"Блог про финансы",description:"Блог сервиса LAVA про финансы и прием платежей в интернете. Статьи от экспертов и сотрудников сервиса"}),(0,a.jsx)(v.Z,{children:(0,a.jsx)("section",{className:Z().blog,children:(0,a.jsxs)(f.Z,{children:[(0,a.jsx)("h1",{className:Z().title,children:"Блог"}),(0,a.jsx)(h,{mainPost:null==c?void 0:null===(i=c.pages[0])||void 0===i?void 0:null===(e=i.data)||void 0===e?void 0:null===(t=e.data)||void 0===t?void 0:t.items[0]}),(0,a.jsx)("div",{className:Z().list,children:null==c?void 0:null===(n=c.pages)||void 0===n?void 0:n.map((t,e)=>{var i,n;return null==t?void 0:null===(n=t.data)||void 0===n?void 0:null===(i=n.data)||void 0===i?void 0:i.items.map((t,i)=>0===i&&0===e?null:(0,a.jsx)(m.Z,{data:t},i))})}),x&&(0,a.jsx)(p.Z,{appearance:"outlined",className:Z().button,onClick:()=>u(),isLoading:_,width:"171.61px",children:"Загрузить еще"})]})})})]})}},2462:function(t){t.exports={main_card:"MainCard_main_card__WZOzU",wrapper:"MainCard_wrapper__kt2kV",img_wrapper:"MainCard_img_wrapper__U71E6",info:"MainCard_info__5HQA_",title:"MainCard_title__vS4JS",time:"MainCard_time__La08R"}},5055:function(t){t.exports={post_card:"PostCard_post_card__MiDHT",img_wrapper:"PostCard_img_wrapper__HMjCf",info:"PostCard_info__pX9Oj",date:"PostCard_date__TeTWR"}},8412:function(t){t.exports={main:"Layout_main__7mAWs"}},5941:function(t){t.exports={blog:"Blog_blog__7h14v",title:"Blog_title__U0reF",list:"Blog_list__kzRyn",button:"Blog_button__ZrqK0"}}}]);