let L='kh';try{L=localStorage.getItem('lg')==='en'?'en':'kh'}catch(e){}
const kh=x=>L==='kh'?String(x).replace(/\d/g,d=>'០១២៣៤៥៦៧៨៩'[d]):String(x);
function cal(){const w=L==='kh'?['អា','ច','អ','ពុ','ព្រ','សុ','ស']:['Su','Mo','Tu','We','Th','Fr','Sa'];let h='<p class="cm">'+(L==='kh'?'ខែធ្នូ '+kh(2026):'December 2026')+'</p><div class="cg">'+w.map(x=>'<b>'+x+'</b>').join('')+'<i></i><i></i>';for(let d=1;d<=31;d++)h+='<span'+(d===11?' class="on"':'')+'>'+kh(d)+'</span>';document.getElementById('cal').innerHTML=h+'</div>'}
function setL(l){L=l;try{localStorage.setItem('lg',l)}catch(e){}document.documentElement.lang=l==='kh'?'km':'en';
document.querySelectorAll('[data-en]').forEach(e=>{if(e.dataset.kh===undefined)e.dataset.kh=e.innerHTML;e.innerHTML=l==='en'?e.dataset.en:e.dataset.kh});
document.querySelectorAll('[data-eph]').forEach(e=>{if(e.dataset.ph===undefined)e.dataset.ph=e.placeholder;e.placeholder=l==='en'?e.dataset.eph:e.dataset.ph});
document.querySelectorAll('.lg button').forEach(b=>b.classList.toggle('on',b.dataset.l===l));
cal();tick();cfr();if(wl.querySelector('.e'))show([]);else dots()}
document.querySelectorAll('.lg button').forEach(b=>b.onclick=()=>setL(b.dataset.l));
const skip=document.getElementById('skip'),pg=document.getElementById('pg');let it=0;
let tm=0;
function intro(){document.body.classList.add('intro');document.documentElement.classList.add('intro');skip.hidden=pg.hidden=false;const D=sls.length*2800+400;pg.firstChild.style.animation='none';void pg.offsetWidth;pg.firstChild.style.animation='';pg.firstChild.style.animationDuration=D+'ms';sls[0].classList.add('on');let k=0;tm=setInterval(()=>{k++;if(k<sls.length)sls[k].classList.add('on');else clearInterval(tm)},2800);it=setTimeout(endIntro,D)}
function endIntro(){if(!it)return;clearTimeout(it);clearInterval(tm);it=0;document.body.classList.remove('intro');document.documentElement.classList.remove('intro');skip.hidden=pg.hidden=true;hro.classList.add('out');window.scrollTo(0,0);setTimeout(()=>hro.remove(),900)}
skip.onclick=endIntro;
/* EDIT: wedding date & time for the countdown */
const t=new Date('2026-12-11T17:00:00+07:00'),n=document.querySelectorAll('.cd b');
function tick(){const d=Math.max(0,t-Date.now())/1000,v=[d/86400,d/3600%24,d/60%60,d%60];n.forEach((e,i)=>e.textContent=kh(String(Math.floor(v[i])).padStart(2,'0')));const f=[Math.min(v[0]/100,1),v[1]/24,v[2]/60,v[3]/60];document.querySelectorAll('.cd .r1').forEach((c,i)=>c.style.strokeDashoffset=214*(1-f[i]))}
tick();setInterval(tick,1000);
const lb=document.getElementById('lb');
const cf=document.getElementById('cf'),cis=[...cf.children],cn=document.getElementById('cfn');let ci=1,sx=null,mv=false;
function cfr(){cis.forEach((el,i)=>{const d=i-ci,a=Math.abs(d),c=Math.max(-2,Math.min(2,d)),h=a>1,s=el.style;s.transform=`translateX(-50%) translateX(${c*72}%) translateZ(${-Math.min(a,2)*110}px) rotateY(${-c*38}deg) scale(${1-Math.min(a,2)*.04})`;s.opacity=h?0:1;s.filter=a?'brightness(.72)':'none';s.zIndex=10-a;s.pointerEvents=h?'none':'auto';el.setAttribute('aria-hidden',a?'true':'false')});cn.textContent=kh((ci+1)+' / '+cis.length)}
function cfg(d){ci=Math.max(0,Math.min(cis.length-1,ci+d));cfr()}
document.getElementById('cfp').onclick=()=>cfg(-1);document.getElementById('cfx').onclick=()=>cfg(1);
cf.addEventListener('pointerdown',e=>{sx=e.clientX;mv=false});cf.addEventListener('pointermove',e=>{if(sx!==null&&Math.abs(e.clientX-sx)>10)mv=true});
cf.addEventListener('pointerup',e=>{if(sx===null)return;const dx=e.clientX-sx;sx=null;if(Math.abs(dx)>40)cfg(dx<0?1:-1)});cf.addEventListener('pointercancel',()=>{sx=null});
cf.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')cfg(-1);if(e.key==='ArrowRight')cfg(1)});
cis.forEach((el,i)=>el.onclick=()=>{if(mv)return;if(i===ci){lb.firstChild.src=el.firstChild.src;lb.hidden=false}else{ci=i;cfr()}});cfr();
lb.onclick=()=>{lb.hidden=true};
const au=document.getElementById('au'),mus=document.getElementById('mus'),cover=document.getElementById('cover'),s=n[3];
document.querySelectorAll('.hero>*:not(.fl)').forEach((e,i)=>e.style.animationDelay=(.3+i*.22)+'s');
const hro=document.querySelector('.hro');const sls=[hro.querySelector('.sl')];document.querySelectorAll('#cf img').forEach(im=>{const d=document.createElement('div'),i=new Image();d.className='sl';i.src=im.src;i.alt='';i.style.objectPosition=im.style.objectPosition;d.append(i);hro.insertBefore(d,hro.querySelector('.hsh'));sls.push(d)});
for(let i=0;i<18;i++){const e=document.createElement('i');e.className='sp';e.style.cssText=`left:${Math.random()*96}%;top:${12+Math.random()*80}%;animation-delay:${Math.random()*4}s;animation-duration:${3+Math.random()*3}s`;hro.append(e)}
const pt=document.createElement('div');pt.className='petals';
for(let i=0;i<14;i++){const p=document.createElement('i'),z=7+Math.random()*7;p.style.cssText=`left:${Math.random()*100}%;width:${z}px;height:${z*1.4}px;background:${i%3?'#c79a3e':'#2a3f8f'};--dx:${Math.random()*120-60}px;animation-duration:${9+Math.random()*8}s;animation-delay:-${Math.random()*14}s`;pt.appendChild(p)}
document.body.appendChild(pt);
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('section.sec>*:not(.fl),footer>*,li').forEach(e=>{e.classList.add('rv');io.observe(e)});

setInterval(()=>{s.classList.remove('p');void s.offsetWidth;s.classList.add('p')},1000);
document.getElementById('open').onclick=()=>{document.body.classList.add('open');window.scrollTo(0,0);au.play().then(()=>mus.classList.add('on')).catch(()=>{});mus.hidden=false;setTimeout(()=>{cover.hidden=true},1000);intro()};
mus.onclick=()=>{if(au.paused){au.play();mus.classList.add('on')}else{au.pause();mus.classList.remove('on')}};
document.addEventListener('visibilitychange',()=>{if(document.hidden)au.pause();else if(mus.classList.contains('on'))au.play().catch(()=>{})});
/* Guestbook: put your Google Apps Script web app link between the quotes to share wishes with all guests */
const WISH_URL='https://script.google.com/macros/s/AKfycbxEreIGJT2vt3gDO2rBTlizGt_82ki1dtSgsoUEoYadTrZy3SMgPOcX5ljhA27u0ruN/exec';
const wf=document.getElementById('wf'),wl=document.getElementById('wl');
const local=()=>{try{return JSON.parse(localStorage.getItem('wishes')||'[]')}catch(e){return[]}};
function show(a){wl.textContent='';if(!a.length){const d=document.createElement('div');d.className='wish e';const m=document.createElement('span');m.className='mq';m.textContent=L==='kh'?'សូមធ្វើជាអ្នកដំបូងដែលផ្ញើពាក្យជូនពរដល់យើងខ្ញុំ':'Be the first to send us your wishes';d.append(m);wl.append(d)}else a.forEach(w=>{const d=document.createElement('div'),b=document.createElement('b'),p=document.createElement('p');d.className='wish';b.textContent=w.n;p.textContent=w.m;d.append(b,p);wl.append(d)});wl.scrollLeft=0;dots()}
const wd=document.getElementById('wd');let hold=0;
const wi=()=>Math.round(wl.scrollLeft/(wl.clientWidth+14));
function dots(){const c=wl.children.length;wd.textContent=kh(Math.min(c,wi()+1)+' / '+c)}
function wgo(d){const c=wl.children.length,i=(wi()+d+c)%c;wl.scrollTo({left:i*(wl.clientWidth+14),behavior:'smooth'})}
wl.addEventListener('scroll',dots);document.getElementById('wpv').onclick=()=>{hold=Date.now()+8000;wgo(-1)};document.getElementById('wnx').onclick=()=>{hold=Date.now()+8000;wgo(1)};
['pointerdown','touchstart'].forEach(e=>wl.addEventListener(e,()=>hold=Date.now()+8000,{passive:true}));
setInterval(()=>{if(Date.now()>hold&&wl.children.length>1&&!document.hidden)wgo(1)},5000);show([]);
async function load(){try{show(WISH_URL?await (await fetch(WISH_URL)).json():local())}catch(e){}}
load();
wf.onsubmit=async e=>{e.preventDefault();const w={n:wf.n.value.trim().slice(0,60),m:wf.m.value.trim().slice(0,500)};if(!w.n||!w.m)return;
const b=wf.querySelector('button');b.disabled=true;
try{if(WISH_URL){await fetch(WISH_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain'},body:JSON.stringify(w)});setTimeout(load,3000)}else{try{localStorage.setItem('wishes',JSON.stringify([w,...local()]))}catch(x){}}}catch(x){}
const cur=[...wl.querySelectorAll('.wish:not(.e)')].map(d=>({n:d.firstChild.textContent,m:d.lastChild.textContent}));show([w,...cur]);wf.reset();b.disabled=false};

/* Guest name: from link ?to=Name, or typed by the guest on the cover */
const gi=document.getElementById('gi'),gq=new URLSearchParams(location.search).get('to');
if(gq){gi.value=gq.trim().slice(0,60);wf.n.value=gi.value}
gi.addEventListener('input',()=>{wf.n.value=gi.value.trim()});
setL(L);
