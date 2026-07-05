const DATA = {"missions": [{"id": "attitude", "number": "01", "title": "Professioneel werken", "type": "Start@Work", "minutes": 35, "xp": 80, "status": "active", "summary": "Je toont een professionele houding in de klascontext."}, {"id": "smartschool", "number": "02", "title": "Smartschool", "type": "Communicatie", "minutes": 40, "xp": 100, "status": "todo", "summary": "Je schrijft professionele Smartschoolberichten."}, {"id": "outlook", "number": "03", "title": "Outlook", "type": "E-mail", "minutes": 35, "xp": 90, "status": "todo", "summary": "Je past dezelfde afspraken toe in e-mail."}, {"id": "nbn", "number": "04", "title": "NBN Lab", "type": "Documentopmaak", "minutes": 45, "xp": 120, "status": "todo", "summary": "Je past NBN-afspraken toe in documenten."}, {"id": "letter", "number": "05", "title": "Zakelijke brief", "type": "Schrijven", "minutes": 50, "xp": 130, "status": "todo", "summary": "Je schrijft een professionele brief volgens NBN."}, {"id": "documents", "number": "06", "title": "Documentenstroom", "type": "NorthBridge", "minutes": 45, "xp": 120, "status": "todo", "summary": "Je volgt documenten van prijsaanvraag tot creditnota."}], "goals": [{"code": "II-OrLo-a LPD 1", "title": "Professioneel handelen", "where": "Missie 01, START@WORK-belofte, reflectie"}, {"code": "II-OrLo-a LPD 3", "title": "Documentenstroom analyseren", "where": "Missie 06, NorthBridge-documenten"}, {"code": "II-OrLo-a LPD 5", "title": "Redactionele normen toepassen", "where": "NBN Lab, Smartschool, Outlook, zakelijke brief"}, {"code": "II-OrLo-a LPD 10", "title": "Elektronische post volgens nettiquette", "where": "Smartschool- en Outlooksimulator"}, {"code": "II-OrLo-a LPD 12", "title": "Digitale documenten beheren", "where": "Downloads, documentinstellingen, bestanden"}, {"code": "I-ICT 1.1.4", "title": "Digitale inhouden beheren", "where": "Planner, Smartschool, downloads"}, {"code": "I-ICT 1.1.5 / 1.2.1", "title": "Digitale teksten creëren", "where": "Berichten, e-mails en zakelijke brief"}], "downloads": [{"title": "START@WORK cursus", "desc": "Volledige leerlingencursus", "file": "downloads/START@WORK_platform_cursus.pdf"}, {"title": "NBN-broncursus", "desc": "Aangeleverde PDF met NBN-normen", "file": "downloads/Cursus_NBN_normen_bron.pdf"}, {"title": "NorthBridge bedrijfsdossier", "desc": "Fictief bedrijf, afdelingen en rollen", "file": "downloads/NorthBridge_bedrijfsdossier.pdf"}, {"title": "Voorbeeld zakelijke brief", "desc": "Uitgewerkt volgens NBN-opmaak", "file": "downloads/voorbeelden/voorbeeld_zakelijke_brief_nbn.pdf"}, {"title": "Documentinstellingen", "desc": "Marges en opmaakinstellingen", "file": "downloads/voorbeelden/voorbeeld_documentinstellingen.pdf"}, {"title": "Documentenstroom", "desc": "Van prijsaanvraag tot creditnota", "file": "downloads/voorbeelden/voorbeeld_documentenstroom.pdf"}]};

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

const missionContent = {
  attitude: {
    logo: 'assets/logos/northbridge-logo.svg',
    eyebrow: 'Missie 01',
    title: 'Professioneel werken',
    intro: 'Je werkt in de klas zoals je later op de werkvloer zal werken.',
    theory: 'Een goede beroepshouding betekent dat anderen op jou kunnen rekenen. Je komt op tijd, start voorbereid, houdt je planner bij, respecteert deadlines en communiceert beleefd.',
    example: '<strong>Goed:</strong> Je verwittigt vooraf via Smartschool wanneer een opdracht niet lukt.<br><strong>Niet goed:</strong> Je zegt pas na de deadline dat er een probleem was.',
    exercise: 'Duid aan of het om een waarde of norm gaat: respect, op tijd komen, verantwoordelijkheid, deadlines noteren.',
    final: 'Schrijf jouw START@WORK-belofte. Kies drie afspraken en geef telkens een voorbeeld van hoe het goed loopt én hoe het mis kan gaan.',
    checklist: ['Je komt op tijd en start voorbereid.','Je houdt je planner bij.','Je levert taken op tijd in.','Je verwittigt tijdig bij problemen.']
  },
  smartschool: {
    logo: 'assets/logos/smartschool-logo.png',
    eyebrow: 'Missie 02',
    title: 'Smartschool',
    intro: 'Je gebruikt Smartschool professioneel als hoofdcommunicatiemiddel op school.',
    theory: 'Een professioneel Smartschoolbericht heeft een duidelijk onderwerp, begroeting zonder leesteken, korte kern, beleefd slot en correcte handtekening.',
    example: 'Onderwerp: Probleem bij uploaden opdracht Canva<br><br>Geachte mevrouw<br><br>Ik probeer mijn opdracht in te dienen, maar het uploaden lukt niet.<br><br>Met vriendelijke groet<br><br>Voornaam Achternaam<br>4 Organisatie & Logistiek',
    final: 'Je bent ziek. Schrijf een Smartschoolbericht naar je leraar waarin je meldt dat je afwezig bent en vraagt hoe je de gemiste opdracht kan inhalen.',
    checklist: ['Je onderwerp is concreet.','Je begroeting heeft geen leesteken erna.','Je bericht is beleefd en duidelijk.','Je gebruikt de juiste handtekening.'],
    simulator: 'smartschool'
  },
  outlook: {
    logo: 'assets/logos/outlook-logo.png',
    eyebrow: 'Missie 03',
    title: 'Outlook',
    intro: 'Je past dezelfde afspraken toe in Outlook en maakt de transfer naar zakelijke e-mail.',
    theory: 'Outlook gebruik je voor formele e-mailcommunicatie. Je bericht heeft dezelfde professionele structuur als in Smartschool.',
    example: 'Onderwerp: Prijsaanvraag kantoorartikelen<br><br>Geachte mevrouw<br><br>Graag ontvang ik een offerte voor 25 archiefmappen en 10 bureaustoelen.<br><br>Met vriendelijke groet<br><br>Voornaam Achternaam<br>4 Organisatie & Logistiek',
    final: 'Schrijf een Outlookmail waarin je een prijsaanvraag doet voor 25 archiefmappen en 10 bureaustoelen.',
    checklist: ['Je onderwerp is duidelijk.','Je vermeldt aantallen concreet.','Je vraagt beleefd naar een offerte.','Je sluit professioneel af.'],
    simulator: 'outlook'
  },
  nbn: {
    logo: 'assets/logos/nbn-logo.png',
    eyebrow: 'Missie 04',
    title: 'NBN Lab',
    intro: 'Je leert concrete NBN-afspraken toepassen in zakelijke documenten.',
    theory: 'NBN-afspraken zorgen voor duidelijke en professionele documenten. Je gebruikt ze bij datum, tijd, bedragen, telefoonnummers, IBAN/BIC, marges en adresruimte.',
    example: '<div class="example-grid"><div><b>Datum</b><p>✓ 23 mei 2004<br>✓ 2004-05-23<br>✗ 23/05/04</p></div><div><b>Bedrag</b><p>✓ € 123,45<br>✓ 123,45 EUR<br>✗ €123.45</p></div><div><b>Telefoon</b><p>✓ tel. 053 68 58 17<br>✓ gsm 0475 58 13 24</p></div><div><b>Marges</b><p>Zakelijke brief: links 33 mm, andere zijden 20 mm.<br>Andere documenten: 2 cm aan alle zijden.</p></div></div>',
    final: 'Controleer een document en duid minstens vijf NBN-afspraken aan die correct moeten zijn.',
    checklist: ['Je datum is correct.','Je bedrag is correct.','Je telefoonnummer is correct.','Je marges zijn correct.'],
    downloads: true
  },
  letter: {
    logo: 'assets/logos/northbridge-logo.svg',
    eyebrow: 'Missie 05',
    title: 'Zakelijke brief',
    intro: 'Je schrijft een zakelijke brief volgens de NBN-afspraken.',
    theory: 'Een zakelijke brief bevat correcte adresruimte, datum, onderwerp, begroeting zonder leesteken, kern, slotformule en handtekening.',
    example: 'Casus: OfficePlus bv leverde 25 archiefmappen en 10 bureaustoelen vier dagen te laat. Je vraagt beleefd om toelichting.',
    final: 'Maak de zakelijke brief in Word, exporteer als PDF en dien in via Smartschool.',
    checklist: ['Je gebruikt briefmarges correct.','Je adresruimte is volledig.','Je begroeting heeft geen leesteken erna.','Je brief is beleefd en oplossingsgericht.']
  },
  documents: {
    logo: 'assets/logos/northbridge-logo.svg',
    eyebrow: 'Missie 06',
    title: 'Documentenstroom',
    intro: 'Je volgt de documentenstroom binnen NorthBridge Office Group.',
    theory: 'Elk document heeft een functie. Door gegevens te vergelijken voorkom je fouten.',
    example: '<div class="flowline"><span>Prijsaanvraag</span><b>→</b><span>Offerte</span><b>→</b><span>Bestelbon</span><b>→</b><span>Orderbevestiging</span><b>→</b><span>Leveringsbon</span><b>→</b><span>Factuur</span><b>→</b><span>Creditnota</span></div>',
    final: 'Plaats de documenten in de juiste volgorde en leg de functie van elk document uit.',
    checklist: ['Je kent de volgorde.','Je kent de functie per document.','Je controleert gegevens tussen documenten.']
  }
};

function show(id){
  $$('.view').forEach(v=>v.classList.remove('active'));
  const el = document.getElementById(id);
  if(el) el.classList.add('active');
  $$('.nav').forEach(n=>n.classList.toggle('active', n.dataset.view===id));
  $('#crumb').textContent = id.charAt(0).toUpperCase()+id.slice(1);
  window.scrollTo({top:0,behavior:'smooth'});
}
document.addEventListener('click', e=>{
  const btn = e.target.closest('[data-view]');
  if(btn) show(btn.dataset.view);
});
$('#themeToggle').onclick=()=>document.body.classList.toggle('dark');

function renderMissions(){
  $('#missionGrid').innerHTML = DATA.missions.map(m=>`<article class="mission-card" data-view="${m.id}"><small>Missie ${m.number} · ${m.type}</small><h3>${m.title}</h3><p>${m.summary}</p><span class="status ${m.status==='active'?'active':''}">${m.status==='active'?'Vandaag':'Nog te doen'} · ${m.minutes} min · ${m.xp} XP</span></article>`).join('');
}
function renderFiles(){
  $('#fileList').innerHTML = DATA.downloads.map(d=>`<article class="file-item"><div><strong>${d.title}</strong><p>${d.desc}</p></div><a href="${d.file}" download>Download</a></article>`).join('');
  $('#downloadGrid').innerHTML = DATA.downloads.map(d=>`<article class="download-card"><div><strong>${d.title}</strong><p>${d.desc}</p></div><a href="${d.file}" download>Download</a></article>`).join('');
}
function renderGoals(){
  $('#goalList').innerHTML = DATA.goals.map(g=>`<article class="goal-card"><div><strong>${g.code}</strong><p>${g.title}</p><small>${g.where}</small></div></article>`).join('');
}
function renderMission(id){
  const m = missionContent[id];
  const el = document.getElementById(id);
  if(!m || !el) return;
  const sim = m.simulator ? `<article class="mission-panel"><div class="block-title"><span>4</span><h2>Oefening</h2></div><div class="mail-window"><div class="mail-bar"><img src="${m.logo}" alt="">Nieuw bericht</div><label>Onderwerp <input placeholder="${m.simulator==='smartschool'?'Probleem bij uploaden opdracht Canva':'Prijsaanvraag kantoorartikelen'}"></label><label>Bericht <textarea rows="8" placeholder="Geachte mevrouw\\n\\n..."></textarea></label></div></article>` : '';
  const downloads = m.downloads ? `<article class="mission-panel"><div class="block-title"><span>4</span><h2>Downloads</h2></div><div class="file-list">${DATA.downloads.filter(d=>d.title.includes('NBN')||d.title.includes('Document')||d.title.includes('brief')).map(d=>`<article class="file-item"><div><strong>${d.title}</strong><p>${d.desc}</p></div><a href="${d.file}" download>Download</a></article>`).join('')}</div></article>` : '';
  el.innerHTML = `<header class="mission-head"><p class="eyebrow">${m.eyebrow}</p><h1>${m.title}</h1><p>${m.intro}</p></header>
  <div class="mission-layout">
    <div>
      <article class="mission-panel"><div class="block-title"><span>1</span><h2>Doel</h2></div><ul class="pretty-list">${m.checklist.map(x=>`<li>✓ ${x}</li>`).join('')}</ul></article>
      <article class="mission-panel"><div class="block-title"><span>2</span><h2>Theorie</h2></div><p>${m.theory}</p></article>
      <article class="mission-panel"><div class="block-title"><span>3</span><h2>Voorbeeld</h2></div><div class="example">${m.example}</div></article>
      ${sim || downloads}
      <article class="mission-panel"><div class="block-title"><span>${(sim||downloads)?5:4}</span><h2>Checklist</h2></div><ul class="checklist">${m.checklist.map(x=>`<li><label><input type="checkbox"> ${x}</label></li>`).join('')}</ul></article>
      <article class="mission-panel"><div class="block-title"><span>${(sim||downloads)?6:5}</span><h2>Eindopdracht</h2></div><p>${m.final}</p></article>
    </div>
    <aside class="side-panel"><img src="${m.logo}" alt=""><h3>${m.title}</h3><p>${m.eyebrow}</p><button class="primary" data-view="downloads">Downloads</button></aside>
  </div>`;
}
renderMissions();renderFiles();renderGoals();
['attitude','smartschool','outlook','nbn','letter','documents'].forEach(renderMission);
