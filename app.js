const DATA = {
  downloads: [
    {title:"Samenvatting module 1", desc:"Kern van professionele attitude, Planner, deadlines en waarden/normen.", file:"downloads/module1_professioneel_werken_samenvatting.pdf"},
    {title:"Attitudechecklist", desc:"Controlekaart voor leerlingen.", file:"downloads/module1_attitude_checklist.pdf"},
    {title:"Reflectieblad", desc:"Reflectie na de eerste module.", file:"downloads/module1_reflectieblad.pdf"}
  ],
  goals: [
    {code:"II-OrLo-a LPD 1", title:"Handelt in teamverband, kwaliteitsbewust, economisch en duurzaam.", where:"Professionele houding, stiptheid, Planner en deadlines."},
    {code:"II-OrLo-a LPD 4", title:"Illustreert organisatiecultuur, huisstijl en bedrijfsprocedures.", where:"Waarden en normen, afspraken binnen NorthBridge en schoolcontext."},
    {code:"II-OrLo-a LPD 10", title:"Beantwoordt elektronische post volgens formele communicatie en nettiquette.", where:"Communiceren bij ziekte/probleem en voorbereiding op Smartschoolmodule."},
    {code:"I-II-III-GFL", title:"Neemt verantwoordelijkheid op voor leren, samenwerken en respectvol handelen.", where:"START@WORK-belofte, reflectie en casussen."}
  ]
};
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
function showSection(id){$$('.section').forEach(s=>s.classList.remove('active'));const el=document.getElementById(id);if(el)el.classList.add('active');$$('.nav').forEach(n=>n.classList.toggle('active',n.dataset.section===id));window.scrollTo({top:0,behavior:'smooth'});}
document.addEventListener('click',e=>{const t=e.target.closest('[data-section]');if(t){showSection(t.dataset.section);t.classList.add('visited');updateProgress();}});
$('#themeToggle').addEventListener('click',()=>document.body.classList.toggle('dark'));
function updateProgress(){const visited=[...$$('.nav.visited')].length;const total=$$('.nav').length;const checked=$$('.progress-check:checked').length;const pct=Math.min(100,Math.round(((visited+checked)/(total+6))*100));$('#progressBar').style.width=pct+'%';$('#progressText').textContent=pct+'%';}
$$('.progress-check').forEach(c=>c.addEventListener('change',updateProgress));
$$('.quiz-item').forEach(item=>{item.querySelectorAll('button').forEach(btn=>{btn.addEventListener('click',()=>{const chosen=btn.textContent.trim().toLowerCase();const correct=item.dataset.answer;const p=item.querySelector('p');if(chosen===correct){p.textContent='Correct. '+(correct==='waarde'?'Een waarde is iets wat je belangrijk vindt.':'Een norm is een concrete afspraak die gedrag beschrijft.');p.style.color='#16a34a';}else{p.textContent='Niet helemaal. Denk aan: een waarde is abstract, een norm is concreet gedrag.';p.style.color='#dc2626';}});});});
$$('.scenario button').forEach(btn=>btn.addEventListener('click',()=>{btn.nextElementSibling.textContent=btn.dataset.feedback;}));
$$('.case').forEach(card=>{card.querySelectorAll('button').forEach((btn,index)=>{btn.addEventListener('click',()=>{const letter=['A','B','C'][index];const f=card.querySelector('.feedback');if(letter===card.dataset.correct){f.textContent='Correct. Dit is de meest professionele keuze.';f.style.color='#16a34a';}else{f.textContent='Niet de beste keuze. Professioneel handelen betekent tijdig communiceren en verantwoordelijkheid nemen.';f.style.color='#dc2626';}});});});
$('#downloadGrid').innerHTML=DATA.downloads.map(d=>`<article class="download-card"><h2>${d.title}</h2><p>${d.desc}</p><a href="${d.file}" download>Download</a></article>`).join('');
$('#curriculumGrid').innerHTML=DATA.goals.map(g=>`<article class="curriculum-card"><h2>${g.code}</h2><p><strong>${g.title}</strong></p><p>${g.where}</p></article>`).join('');
updateProgress();
const MODULE2_DOWNLOADS = [{"title": "Volledige NBN-cursus", "desc": "Originele cursus als referentiebron.", "file": "downloads/module2/Cursus_NBN_normen_bron.pdf"}, {"title": "Module 2 samenvatting", "desc": "Kern van de NBN-richtlijnen.", "file": "downloads/module2/module2_nbn_samenvatting.pdf"}, {"title": "NBN-spiekkaart", "desc": "Kort overzicht van notaties.", "file": "downloads/module2/module2_nbn_spiekkaart.pdf"}, {"title": "Controlekaart NBN", "desc": "Checklist voor documenten.", "file": "downloads/module2/module2_nbn_checklist.pdf"}, {"title": "Voorbeeldbrief", "desc": "Reizen Delmonte.", "file": "downloads/module2/voorbeeldbrief_reis_oostenrijk.pdf"}, {"title": "Voorbeeldmail 1", "desc": "Bestelling Happy Face.", "file": "downloads/module2/voorbeeldmail_bestelling_happy_face.pdf"}, {"title": "Voorbeeldmail 2", "desc": "Antwoord Platenhuis.", "file": "downloads/module2/voorbeeldmail_antwoord_platenhuis.pdf"}, {"title": "Voorbeeldmail 3", "desc": "Afsluiting conversatie.", "file": "downloads/module2/voorbeeldmail_afsluiting_conversatie.pdf"}, {"title": "Sjabloon zakelijke brief", "desc": "Kopieerbaar sjabloon.", "file": "downloads/module2/sjabloon_zakelijke_brief.html"}, {"title": "Checklist Word-opdracht", "desc": "Controlelijst voor de zakelijke brief in Word.", "file": "downloads/module2/module2_werkopdracht_brief_checklist.pdf"}];
const module2Grid = document.querySelector('#module2DownloadGrid');
if(module2Grid){
  module2Grid.innerHTML = MODULE2_DOWNLOADS.map(d => `<article class="download-card"><h2>${d.title}</h2><p>${d.desc}</p><a href="${d.file}" download>Download</a></article>`).join('');
}
const nbnLabButton = document.querySelector('#checkNbnLab');
if(nbnLabButton){
  nbnLabButton.addEventListener('click', () => {
    const checks = [...document.querySelectorAll('.nbn-check')];
    const score = checks.filter(c => c.checked).length;
    const result = document.querySelector('#nbnLabResult');
    result.textContent = `Score: ${score}/5. ${score === 5 ? 'Sterk: je herkent de belangrijkste controles.' : 'Kijk nog eens welke onderdelen altijd gecontroleerd moeten worden.'}`;
    result.style.color = score === 5 ? '#16a34a' : '#0067c5';
  });
}

const nbnMcqButton = document.querySelector('#checkNbnLab');
if(nbnMcqButton){
  nbnMcqButton.addEventListener('click', () => {
    const questions = [...document.querySelectorAll('.nbn-mcq')];
    let score = 0;
    questions.forEach(q => {
      const correct = q.dataset.correct;
      const checked = q.querySelector('input:checked');
      q.style.borderColor = '#dce6ef';
      if(checked && checked.value === correct){
        score++;
        q.style.borderColor = '#16a34a';
      } else {
        q.style.borderColor = '#dc2626';
      }
    });
    const result = document.querySelector('#nbnLabResult');
    result.textContent = `Score: ${score}/${questions.length}. ${score === questions.length ? 'Uitstekend: je past de NBN-afspraken correct toe.' : 'Bekijk de rood gemarkeerde vragen opnieuw en vergelijk met de voorbeelden in de theorie.'}`;
    result.style.color = score === questions.length ? '#16a34a' : '#dc2626';
  });
}


/* Fixed NBN MCQ handler */
const nbnMcqBtn2 = document.querySelector('#checkNbnMcq');
if(nbnMcqBtn2){
  nbnMcqBtn2.addEventListener('click', () => {
    const questions = [...document.querySelectorAll('.nbn-mcq')];
    let score = 0;
    questions.forEach(q => {
      q.classList.remove('correct','wrong');
      const correct = q.dataset.correct;
      const checked = q.querySelector('input:checked');
      if(checked && checked.value === correct){
        score++;
        q.classList.add('correct');
      } else {
        q.classList.add('wrong');
      }
    });
    const result = document.querySelector('#nbnMcqResult');
    result.textContent = `Score: ${score}/${questions.length}. ${score === questions.length ? 'Uitstekend: je past de NBN-afspraken correct toe.' : 'Bekijk de rood gemarkeerde vragen opnieuw.'}`;
    result.style.color = score === questions.length ? '#16a34a' : '#dc2626';
  });
}

/* Module 3 downloads */
const MODULE3_DOWNLOADS = [
  {title:'Smartschool samenvatting', desc:'Vaste structuur voor berichten en uploadzones.', file:'downloads/module3/module3_smartschool_samenvatting.pdf'},
  {title:'Smartschool checklist', desc:'Controlekaart voor berichten, Planner en uploadzone.', file:'downloads/module3/module3_smartschool_checklist.pdf'}
];
const module3Grid = document.querySelector('#module3DownloadGrid');
if(module3Grid){
  module3Grid.innerHTML = MODULE3_DOWNLOADS.map(d => `<article class="download-card"><h2>${d.title}</h2><p>${d.desc}</p><a href="${d.file}" download>Download</a></article>`).join('');
}

/* Smartschool message checker */
const ssCheck = document.querySelector('#checkSmartschoolMessage');
if(ssCheck){
  ssCheck.addEventListener('click', () => {
    const subject = document.querySelector('#ssSubject').value.trim();
    const body = document.querySelector('#ssBody').value.trim();
    let tips = [];
    if(subject.length < 8) tips.push('Maak je onderwerp concreter.');
    if(!body.includes('Geachte')) tips.push('Gebruik een correcte begroeting.');
    if(!body.includes('Met vriendelijke groet')) tips.push('Sluit af met Met vriendelijke groet.');
    if(!body.includes('4 Organisatie') && !body.includes('Logistiek')) tips.push('Vermeld je klas in de handtekening.');
    const feedback = document.querySelector('#ssFeedback');
    if(tips.length === 0){
      feedback.textContent = 'Sterk bericht: de basisstructuur is aanwezig.';
      feedback.style.color = '#16a34a';
    } else {
      feedback.textContent = 'Nog verbeteren: ' + tips.join(' ');
      feedback.style.color = '#dc2626';
    }
  });
}

/* Smartschool lab */
const smLabBtn = document.querySelector('#checkSmartschoolLab');
if(smLabBtn){
  smLabBtn.addEventListener('click', () => {
    const questions = [...document.querySelectorAll('.smartschool-mcq')];
    let score = 0;
    questions.forEach(q => {
      q.classList.remove('correct','wrong');
      const checked = q.querySelector('input:checked');
      if(checked && checked.value === q.dataset.correct){ score++; q.classList.add('correct'); }
      else q.classList.add('wrong');
    });
    const result = document.querySelector('#smartschoolLabResult');
    result.textContent = `Score: ${score}/${questions.length}. ${score === questions.length ? 'Prima: je kiest professioneel.' : 'Bekijk de rode vragen opnieuw.'}`;
    result.style.color = score === questions.length ? '#16a34a' : '#dc2626';
  });
}

/* FINAL FIX: NBN MCQ button */
const nbnFixedBtn = document.querySelector('#checkNbnMcqFixed');
if(nbnFixedBtn){
  nbnFixedBtn.addEventListener('click', () => {
    const questions = [...document.querySelectorAll('#m2-lab .nbn-mcq')];
    let score = 0;
    questions.forEach(q => {
      q.classList.remove('correct','wrong');
      const checked = q.querySelector('input:checked');
      if(checked && checked.value.trim() === q.dataset.correct.trim()){
        score++;
        q.classList.add('correct');
      } else {
        q.classList.add('wrong');
      }
    });
    const result = document.querySelector('#nbnMcqResultFixed');
    result.textContent = `Score: ${score}/${questions.length}. ${score === questions.length ? 'Uitstekend: je past de NBN-afspraken correct toe.' : 'Bekijk de rood gemarkeerde vragen opnieuw.'}`;
    result.style.color = score === questions.length ? '#16a34a' : '#dc2626';
  });
}

/* FINAL FIX: Smartschool + Planner MCQs in same style */
function checkMcqGroup(selector, resultSelector){
  const questions = [...document.querySelectorAll(selector)];
  let score = 0;
  questions.forEach(q => {
    q.classList.remove('correct','wrong');
    const checked = q.querySelector('input:checked');
    if(checked && checked.value.trim() === q.dataset.correct.trim()){
      score++;
      q.classList.add('correct');
    } else {
      q.classList.add('wrong');
    }
  });
  const result = document.querySelector(resultSelector);
  if(result){
    result.textContent = `Score: ${score}/${questions.length}. ${score === questions.length ? 'Prima: je kiest professioneel.' : 'Bekijk de rode vragen opnieuw.'}`;
    result.style.color = score === questions.length ? '#16a34a' : '#dc2626';
  }
}
const smartschoolLabFinalBtn = document.querySelector('#checkSmartschoolLab');
if(smartschoolLabFinalBtn){
  smartschoolLabFinalBtn.addEventListener('click', () => checkMcqGroup('#m3-lab .smartschool-mcq', '#smartschoolLabResult'));
}

/* Module 4 downloads */
const MODULE4_DOWNLOADS = [
  {title:'Samenvatting documentenstroom', desc:'Basisvolgorde en belang van documentenstroom.', file:'downloads/module4/module4_documentenstroom_samenvatting.pdf'},
  {title:'Documentenkaart', desc:'Functie van offerte, bestelling, pakbon, factuur en creditnota.', file:'downloads/module4/module4_documentenkaart.pdf'},
  {title:'Checklist documentenstroom', desc:'Controlekaart voor de eindopdracht.', file:'downloads/module4/module4_checklist.pdf'}
];
const module4Grid = document.querySelector('#module4DownloadGrid');
if(module4Grid){
  module4Grid.innerHTML = MODULE4_DOWNLOADS.map(d => `<article class="download-card"><h2>${d.title}</h2><p>${d.desc}</p><a href="${d.file}" download>Download</a></article>`).join('');
}
/* ERP simulation */
const genDocs = document.querySelector('#generateDocs');
if(genDocs){
  genDocs.addEventListener('click', () => {
    const customer = document.querySelector('#erpCustomer').value || 'Klant';
    const article = document.querySelector('#erpArticle').value || 'Artikel';
    const qty = document.querySelector('#erpQty').value || '0';
    const price = document.querySelector('#erpPrice').value || '0,00';
    const result = document.querySelector('#erpResult');
    result.classList.add('show');
    result.innerHTML = `<h3>Documenten gegenereerd</h3>
      <p>✓ Offerte voor ${customer}</p>
      <p>✓ Bestelling: ${qty} × ${article}</p>
      <p>✓ Orderbevestiging met prijs ${price} per stuk</p>
      <p>✓ Pakbon voor logistiek</p>
      <p>✓ Factuur voor boekhouding</p>`;
  });
}
/* Document flow lab */
const docFlowBtn = document.querySelector('#checkDocFlowLab');
if(docFlowBtn){
  docFlowBtn.addEventListener('click', () => {
    const questions = [...document.querySelectorAll('#m4-lab .smartschool-mcq')];
    let score = 0;
    questions.forEach(q => {
      q.classList.remove('correct','wrong');
      const checked = q.querySelector('input:checked');
      if(checked && checked.value.trim() === q.dataset.correct.trim()){ score++; q.classList.add('correct'); }
      else q.classList.add('wrong');
    });
    const result = document.querySelector('#docFlowLabResult');
    result.textContent = `Score: ${score}/${questions.length}. ${score === questions.length ? 'Prima: je begrijpt de documentenstroom.' : 'Bekijk de rode vragen opnieuw.'}`;
    result.style.color = score === questions.length ? '#16a34a' : '#dc2626';
  });
}

/* Module 4 wordsearch */
const WORDSEARCH_WORDS = [
  'Prijsaanvraag','Offerte','Bestelbon','Orderbevestiging','Leveringsbon','Factuur','Creditnota',
  'Handelskorting','Financiële korting','Goederen','Verpakking','Vervaldag','Franco huis','Af fabriek'
];
const WORDSEARCH_GRID = [
  'AANKOOPPROCES',
  'OFFERTENOTA',
  'BESTELBONABC',
  'FACTUURKOPER',
  'VERKOPERSXYZ',
  'LEVERINGSBON',
  'CREDITNOTAQQ',
  'GOEDERENLMNO',
  'VERPAKKINGAB',
  'VERVALDAGCDE',
  'FRANCOHUISFG',
  'AFFABRIEKHIJ',
  'KORTINGENKLM',
  'ORDERBEVESTG'
];
const gridEl = document.querySelector('#wordsearchGrid');
const listEl = document.querySelector('#wordList');
if(gridEl && listEl){
  gridEl.innerHTML = WORDSEARCH_GRID.join('').split('').map(ch => `<div class="wordsearch-cell">${ch}</div>`).join('');
  listEl.innerHTML = WORDSEARCH_WORDS.map(w => `<button class="word-btn" data-word="${w}">${w}</button>`).join('');
  listEl.querySelectorAll('.word-btn').forEach(btn => {
    btn.addEventListener('click', () => btn.classList.toggle('found'));
  });
}
const wordBtn = document.querySelector('#checkWordsearch');
if(wordBtn){
  wordBtn.addEventListener('click', () => {
    const found = document.querySelectorAll('.word-btn.found').length;
    const total = document.querySelectorAll('.word-btn').length;
    const result = document.querySelector('#wordsearchResult');
    result.textContent = `Je hebt ${found}/${total} begrippen aangeduid. ${found === total ? 'Sterk: alle begrippen gevonden.' : 'Zoek nog verder in het rooster.'}`;
    result.style.color = found === total ? '#16a34a' : '#0067c5';
  });
}


/* IFRAMEFIX_STRICT_NAV: force clean navigation between sections */
document.addEventListener('click', function(e){
  const btn = e.target.closest('.nav[data-section], button[data-section]');
  if(!btn) return;
  const targetId = btn.getAttribute('data-section');
  const target = document.getElementById(targetId);
  if(!target) return;
  document.querySelectorAll('main > .section').forEach(sec => sec.classList.remove('active'));
  target.classList.add('active');
  document.querySelectorAll('.nav').forEach(n => n.classList.toggle('active', n.getAttribute('data-section') === targetId));
});

/* Module 4 reboot x-ray buttons */
document.querySelectorAll('.xray-notes button').forEach(btn => {
  btn.addEventListener('click', () => {
    const box = btn.closest('.xray-notes').querySelector('.xray-feedback');
    box.textContent = btn.dataset.tip || 'Dit onderdeel helpt om het document correct te lezen.';
  });
});
const purchaseLabBtn = document.querySelector('#checkPurchaseLab');
if(purchaseLabBtn){
  purchaseLabBtn.addEventListener('click', () => {
    const questions = [...document.querySelectorAll('#m4-lab-new .smartschool-mcq')];
    let score = 0;
    questions.forEach(q => {
      q.classList.remove('correct','wrong');
      const checked = q.querySelector('input:checked');
      if(checked && checked.value.trim() === q.dataset.correct.trim()){ score++; q.classList.add('correct'); }
      else q.classList.add('wrong');
    });
    const result = document.querySelector('#purchaseLabResult');
    result.textContent = `Score: ${score}/${questions.length}. ${score === questions.length ? 'Sterk: je begrijpt het aankoopproces.' : 'Bekijk de rode vragen opnieuw en vergelijk met de theorie.'}`;
    result.style.color = score === questions.length ? '#16a34a' : '#dc2626';
  });
}

/* v10.8 - document analysis questions */
document.querySelectorAll('.check-doc-analysis').forEach(btn => {
  btn.addEventListener('click', () => {
    const doc = btn.dataset.doc;
    const container = btn.closest('.document-analysis');
    const questions = [...container.querySelectorAll('.doc-mcq')];
    let score = 0;
    questions.forEach(q => {
      q.classList.remove('correct','wrong');
      const checked = q.querySelector('input:checked');
      if(checked && checked.value.trim() === q.dataset.correct.trim()){
        score++;
        q.classList.add('correct');
      } else {
        q.classList.add('wrong');
      }
    });
    const result = document.querySelector(`#${doc}Result`);
    result.textContent = `Score: ${score}/${questions.length}. ${score === questions.length ? 'Prima: je hebt dit document goed geanalyseerd.' : 'Bekijk de rood gemarkeerde vragen opnieuw en vergelijk met het document.'}`;
    result.style.color = score === questions.length ? '#16a34a' : '#dc2626';
  });
});

/* V11 grouped sidebar behavior */
function openGroupForSection(sectionId){
  const btn = document.querySelector(`.module-group .nav[data-section="${sectionId}"]`);
  if(btn){
    const group = btn.closest('.module-group');
    if(group) group.open = true;
  }
}
document.addEventListener('click', function(e){
  const navBtn = e.target.closest('.nav[data-section], button[data-section]');
  if(navBtn){
    setTimeout(() => openGroupForSection(navBtn.getAttribute('data-section')), 0);
  }
});

/* V11.1 Mobile menu */
const mobileMenuToggle = document.querySelector('#mobileMenuToggle');
const mobileSidebarOverlay = document.querySelector('#mobileSidebarOverlay');

function closeMobileSidebar(){
  document.body.classList.remove('sidebar-open');
}

if(mobileMenuToggle){
  mobileMenuToggle.addEventListener('click', () => {
    document.body.classList.toggle('sidebar-open');
  });
}

if(mobileSidebarOverlay){
  mobileSidebarOverlay.addEventListener('click', closeMobileSidebar);
}

document.addEventListener('click', (e) => {
  const nav = e.target.closest('.nav[data-section], button[data-section]');
  if(nav && window.matchMedia('(max-width: 980px)').matches){
    closeMobileSidebar();
  }
});

window.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeMobileSidebar();
});

/* V11.2 exercise shell enhancer */
document.addEventListener('DOMContentLoaded', () => {
  const exerciseSelectors = [
    '#m2-lab article',
    '#m3-lab article',
    '#m4-lab-new article',
    '#m4-oefening article'
  ];

  exerciseSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => el.classList.add('exercise-shell'));
  });

  document.querySelectorAll('.bookwidget-card, .document-analysis').forEach(el => {
    el.classList.add('exercise-shell');
  });

  // Make external iframe exercise announcement clearer
  document.querySelectorAll('.oefen-fallback, .oefen-card').forEach(card => {
    if(!card.querySelector('.exercise-intro-line')){
      const intro = document.createElement('p');
      intro.className = 'exercise-intro-line';
      intro.innerHTML = '<strong>Oefenmoment:</strong> open de oefening en werk zelfstandig. Vraag hulp wanneer het iframe niet laadt.';
      card.insertBefore(intro, card.firstElementChild?.nextSibling || card.firstChild);
    }
  });
});

/* V11.3 force exercise wrappers */
document.addEventListener('DOMContentLoaded', () => {
  ['m2-lab','m3-lab','m4-lab-new','m4-oefening'].forEach(id => {
    const article = document.querySelector(`#${id} article`);
    if(article) article.classList.add('exercise-shell');
  });

  document.querySelectorAll('.document-analysis, .bookwidget-card').forEach(el => {
    el.classList.add('exercise-shell');
  });

  document.querySelectorAll('.lesson > .nbn-quiz').forEach(quiz => {
    if(!quiz.closest('.exercise-shell')){
      const wrapper = document.createElement('div');
      wrapper.className = 'exercise-shell';
      quiz.parentNode.insertBefore(wrapper, quiz);
      wrapper.appendChild(quiz);
      let next = wrapper.nextElementSibling;
      while(next && (next.classList.contains('primary') || next.classList.contains('feedback'))){
        const current = next;
        next = next.nextElementSibling;
        wrapper.appendChild(current);
      }
    }
  });
});

/* v11.5 module2 final assignment */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-section="m2-bookwidgets"], [data-section="m2-summary"]');
  if(btn){
    const group = document.querySelector('.module-group [data-section="m2-bookwidgets"]')?.closest('.module-group');
    if(group) group.open = true;
  }
});

/* v11.6 step navigation */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.step-nav-card button[data-section]');
  if(!btn) return;
  const targetId = btn.getAttribute('data-section');
  const target = document.getElementById(targetId);
  if(!target) return;

  document.querySelectorAll('main > .section').forEach(sec => sec.classList.remove('active'));
  target.classList.add('active');
  document.querySelectorAll('.nav').forEach(n => n.classList.toggle('active', n.getAttribute('data-section') === targetId));

  const navBtn = document.querySelector(`.module-group .nav[data-section="${targetId}"]`);
  if(navBtn){
    const group = navBtn.closest('.module-group');
    if(group) group.open = true;
  }

  window.scrollTo({top:0, behavior:'smooth'});
});
