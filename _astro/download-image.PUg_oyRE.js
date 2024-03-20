function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_astro/dom-to-image.BJiaPqYz.js","_astro/index.SSXOyoI7.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
const f="modulepreload",p=function(i){return"/"+i},w={},v=function(s,n,c){let l=Promise.resolve();if(n&&n.length>0){const t=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");l=Promise.all(n.map(e=>{if(e=p(e),e in w)return;w[e]=!0;const d=e.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(!!c)for(let m=t.length-1;m>=0;m--){const g=t[m];if(g.href===e&&(!d||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${u}`))return;const r=document.createElement("link");if(r.rel=d?"stylesheet":f,d||(r.as="script",r.crossOrigin=""),r.href=e,a&&r.setAttribute("nonce",a),document.head.appendChild(r),d)return new Promise((m,g)=>{r.addEventListener("load",m),r.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${e}`)))})}))}return l.then(()=>s()).catch(t=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=t,window.dispatchEvent(o),!o.defaultPrevented)throw t})};async function E({url:i,name:s,extension:n="png",scale:c=1}){try{const t=await(await fetch(i)).text(),o=`data:image/svg+xml;base64,${window.btoa(t)}`,a=new Image;a.src=o,a.onload=()=>{const e=document.createElement("canvas");e.width=a.width*c,e.height=a.height*c,e.getContext("2d")?.drawImage(a,0,0,e.width,e.height);const u=e.toDataURL("image/png",1),h=document.createElement("a");h.href=u,h.download=`${s}.${n}`,h.click()}}catch{alert("Error downloading image")}}async function y(i,s){const n=document.createElement("div");n.className="flex justify-end absolute top-4 right-4 gap-2",n.innerHTML=`
    <span
      class='rounded-md bg-black py-2 px-2 text-white'
    >
      roadmap.sh
    </span>
  `,s.insertAdjacentElement("afterbegin",n);const c=(await v(()=>import("./dom-to-image.BJiaPqYz.js").then(o=>o.d),__vite__mapDeps([0,1]))).default;if(!c)throw new Error("Unable to download image");const l=await c.toJpeg(s,{bgcolor:"white",quality:1});s?.removeChild(n);const t=document.createElement("a");t.download=`${i}-roadmap.jpg`,t.href=l,t.click()}export{y as a,E as d};
