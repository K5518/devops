function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_astro/dom-to-image.BJiaPqYz.js","_astro/index.SSXOyoI7.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
const u="modulepreload",w=function(l){return"/"+l},h={},f=function(i,a,c){let d=Promise.resolve();if(a&&a.length>0){const t=document.getElementsByTagName("link");d=Promise.all(a.map(e=>{if(e=w(e),e in h)return;h[e]=!0;const n=e.endsWith(".css"),s=n?'[rel="stylesheet"]':"";if(!!c)for(let r=t.length-1;r>=0;r--){const m=t[r];if(m.href===e&&(!n||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${s}`))return;const o=document.createElement("link");if(o.rel=n?"stylesheet":u,n||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),n)return new Promise((r,m)=>{o.addEventListener("load",r),o.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${e}`)))})}))}return d.then(()=>i()).catch(t=>{const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=t,window.dispatchEvent(e),!e.defaultPrevented)throw t})};async function p({url:l,name:i,extension:a="png",scale:c=1}){try{const t=await(await fetch(l)).text(),e=`data:image/svg+xml;base64,${window.btoa(t)}`,n=new Image;n.src=e,n.onload=()=>{const s=document.createElement("canvas");s.width=n.width*c,s.height=n.height*c,s.getContext("2d")?.drawImage(n,0,0,s.width,s.height);const o=s.toDataURL("image/png",1),r=document.createElement("a");r.href=o,r.download=`${i}.${a}`,r.click()}}catch{alert("Error downloading image")}}async function v(l,i){const a=document.createElement("div");a.className="flex justify-end absolute top-4 right-4 gap-2",a.innerHTML=`
    <span
      class='rounded-md bg-black py-2 px-2 text-white'
    >
      roadmap.sh
    </span>
  `,i.insertAdjacentElement("afterbegin",a);const c=(await f(()=>import("./dom-to-image.BJiaPqYz.js").then(e=>e.d),__vite__mapDeps([0,1]))).default;if(!c)throw new Error("Unable to download image");const d=await c.toJpeg(i,{bgcolor:"white",quality:1});i?.removeChild(a);const t=document.createElement("a");t.download=`${l}-roadmap.jpg`,t.href=d,t.click()}export{v as a,p as d};
