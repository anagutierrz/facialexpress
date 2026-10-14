const lines={reset:{name:'Skin Reset',icon:'01',desc:'Limpieza, hidratación y renovación.',detail:'Explora una línea de cuidado enfocada en limpieza, hidratación y renovación de la piel.'},correct:{name:'Skin Correct',icon:'02',desc:'Acné, manchas, secuelas, sensibilidad y textura.',detail:'Conoce la línea orientada a acné, manchas, secuelas, sensibilidad y textura. La evaluación define las opciones adecuadas para tu piel.'},renew:{name:'Skin Renew',icon:'03',desc:'Antiedad, colágeno, firmeza y rejuvenecimiento.',detail:'Explora las opciones de cuidado enfocadas en firmeza y signos de envejecimiento, sujetas a evaluación profesional.'},longevity:{name:'Skin Longevity',icon:'04',desc:'Evaluación, prevención y cuidado avanzado.',detail:'Empieza por conocer tu piel y conversar sobre tus objetivos de cuidado y prevención.'}};
const concerns=[{name:'Acné y brotes',line:'correct',opts:['Brotes actuales','Marcas que quedaron','Ambos']},{name:'Manchas y tono desigual',line:'correct',opts:['Manchas que quedaron tras brotes','Tono desigual','No estoy segura']},{name:'Hidratación',line:'reset',opts:['Sensación de sequedad','Quiero un cuidado de mantenimiento','No estoy segura']},{name:'Limpieza y poros',line:'reset',opts:['Puntos negros','Aspecto de los poros','Limpieza y mantenimiento']},{name:'Textura y luminosidad',line:'correct',opts:['Textura irregular','Piel con aspecto apagado','Ambos']},{name:'Líneas y firmeza',line:'renew',opts:['Líneas de expresión','Pérdida de firmeza','Cuidado preventivo']},{name:'No estoy segura, quiero una evaluación',line:'longevity',opts:['Conocer las necesidades de mi piel','Empezar una rutina de cuidado','Explorar las opciones disponibles']}];
let state={step:0,concern:null,focus:'',care:'',direct:null};const wizard=document.querySelector('#wizard');const dialog=document.querySelector('#booking');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function choice(label,i){return `<button class="choice" data-choice="${i}"><span class="num">${String(i+1).padStart(2,'0')}</span><span>${esc(label)}</span></button>`}
function render(){const headers=['Tu objetivo','Un poco más sobre ti','Tu cuidado actual','Tu punto de partida'];wizard.innerHTML=`<div class="wizard-top"><span>${headers[state.step]}</span><span>${state.step===3?'TU ORIENTACIÓN':`PASO ${state.step+1} DE 3`}</span></div><div class="progress"><div style="width:${(state.step+1)*25}%"></div></div>`;
if(state.step===0)wizard.innerHTML+=`<h3>Elige lo que más te interesa hoy.</h3><div class="choice-grid">${concerns.map((c,i)=>choice(c.name,i)).join('')}</div>`;
if(state.step===1)wizard.innerHTML+=`<h3>${state.concern===6?'¿Qué te gustaría descubrir?':'¿Qué te preocupa más?'}</h3><div class="choice-grid">${concerns[state.concern].opts.map(choice).join('')}</div>`;
if(state.step===2)wizard.innerHTML+=`<h3>¿Recibes tratamiento dermatológico actualmente?</h3><div class="choice-grid">${['Sí','No','Prefiero comentarlo en la evaluación'].map(choice).join('')}</div>`;
if(state.step===3){const line=lines[state.direct||concerns[state.concern].line];wizard.innerHTML+=`<div class="result"><div><span class="tag">UNA LÍNEA PARA EXPLORAR</span><h3>${line.name}</h3><p>${line.detail}</p><button class="button" data-book>Agendar mi evaluación</button></div><div class="result-aside"><p class="eyebrow">LO QUE NOS HAS CONTADO</p><p>${state.direct?'Te interesa conocer '+line.name:esc(concerns[state.concern].name)+'<br>'+esc(state.focus)}</p><p>El primer paso es una evaluación. Esta orientación no determina un tratamiento ni sustituye un diagnóstico.</p></div></div>`}
if(state.step>0)wizard.innerHTML+=`<button class="back" id="back">${state.direct?'Volver al selector':'Volver'}</button>`;
wizard.querySelectorAll('[data-choice]').forEach(b=>b.addEventListener('click',()=>{let i=Number(b.dataset.choice);if(state.step===0){state.concern=i;state.direct=null}else if(state.step===1)state.focus=concerns[state.concern].opts[i];else state.care=['Sí','No','Prefiero comentarlo en la evaluación'][i];state.step++;render();wizard.querySelector('h3')?.setAttribute('tabindex','-1');wizard.querySelector('h3')?.focus({preventScroll:true})}));wizard.querySelector('#back')?.addEventListener('click',()=>{if(state.direct){state.direct=null;state.step=0}else state.step--;render()});wizard.querySelectorAll('[data-book]').forEach(b=>b.addEventListener('click',openBooking));}
document.querySelector('#protocol-grid').innerHTML=Object.entries(lines).map(([key,l])=>`<article class="protocol-card"><span class="protocol-icon" aria-hidden="true">${l.icon}</span><h3>${l.name.replace(' ','<br>')}</h3><p>${l.desc}</p><button class="text-button" data-line="${key}">Explorar esta línea</button></article>`).join('');
document.querySelectorAll('[data-line]').forEach(b=>b.addEventListener('click',()=>{state.direct=b.dataset.line;state.step=3;render();document.querySelector('#orientacion').scrollIntoView({behavior:'smooth'})}));
function summary(){return state.direct?`Interés: ${lines[state.direct].name}`:state.concern!==null?`Objetivo: ${concerns[state.concern].name}\nDetalle: ${state.focus||'Por conversar en evaluación'}\nTratamiento actual: ${state.care||'Por conversar en evaluación'}`:'Evaluación inicial de la piel'}
function openBooking(){document.querySelector('#booking-content').innerHTML=`<p class="eyebrow">TU PRIMER PASO</p><h2>Hablemos de <em>tu piel.</em></h2><p class="form-note">Prueba la solicitud de evaluación. Este demo no envía datos ni confirma una cita real.</p><div class="booking-summary">${esc(summary())}</div><form id="booking-form"><label for="name">Tu nombre</label><input id="name" autocomplete="given-name" required maxlength="70" placeholder="¿Cómo te llamas?"><label for="preference">¿Cuándo te gustaría venir?</label><select id="preference"><option>Esta semana</option><option>La próxima semana</option><option>Quiero consultar disponibilidad</option></select><button class="button" type="submit">Ver mi solicitud de ejemplo</button></form>`;dialog.showModal();document.querySelector('#booking-form').addEventListener('submit',e=>{e.preventDefault();const name=document.querySelector('#name').value.trim();if(!name){document.querySelector('#name').setCustomValidity('Escribe tu nombre');document.querySelector('#name').reportValidity();document.querySelector('#name').addEventListener('input',e=>e.target.setCustomValidity(''),{once:true});return}const time=document.querySelector('#preference').value;document.querySelector('#booking-content').innerHTML=`<p class="eyebrow">VISTA PREVIA</p><p class="eyebrow">SOLICITUD DE EJEMPLO</p><h2>Ese es tu primer paso, <em>${esc(name)}.</em></h2><div class="booking-summary">${esc(summary())}\nPreferencia: ${esc(time)}</div><p class="form-note">Así recibiría el equipo tu consulta al conectar la agenda o WhatsApp. En este demo no se ha enviado información ni reservado una cita.</p><button class="button" id="done">Seguir explorando</button>`;document.querySelector('#done').addEventListener('click',()=>dialog.close())})}
document.querySelectorAll('header [data-book], .experience [data-book], .closing [data-book]').forEach(b=>b.addEventListener('click',openBooking));document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});render();

// Reveal only when movement is allowed; content remains visible without JS support.
const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
let revealObserver;
function initMotion(){
 if(motionPreference.matches || !('IntersectionObserver' in window)) return;
 document.documentElement.classList.add('motion-enabled');
 revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
   if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}
  });
 },{threshold:0.08,rootMargin:'0px 0px -25px 0px'});
 document.querySelectorAll('.hero-copy, .hero-photo, .section-heading, .wizard, .protocol-card, .experience-img, .experience>div:last-child, .faq h2, .faq details, .closing h2, .closing .button').forEach((item,i)=>{
  item.classList.add('reveal');
  if(item.matches('.protocol-card'))item.style.setProperty('--reveal-delay',`${(i%4)*70}ms`);
  revealObserver.observe(item);
 });
}
initMotion();
motionPreference.addEventListener('change',()=>{
 revealObserver?.disconnect();
 document.documentElement.classList.remove('motion-enabled');
 if(!motionPreference.matches)initMotion();
});

// Smoothly expand and collapse FAQ content, including closing transitions.
document.querySelectorAll('.faq details').forEach(details=>{
 const summary=details.querySelector('summary');
 let expansion;
 summary.addEventListener('click',event=>{
  if(motionPreference.matches || !details.animate)return;
  event.preventDefault();
  const opening=expansion ? details.dataset.destination!=='open' : !details.open;
  const start=details.getBoundingClientRect().height;
  expansion?.cancel();
  details.style.height='';details.style.overflow='hidden';
  details.open=true;
  const end=opening?details.getBoundingClientRect().height:summary.getBoundingClientRect().height+45;
  details.dataset.destination=opening?'open':'closed';
  expansion=details.animate({height:[`${start}px`,`${end}px`]}, {duration:320,easing:'cubic-bezier(.22,1,.36,1)'});
  expansion.onfinish=()=>{details.open=opening;details.style.height='';details.style.overflow='';expansion=null};
 });
});
