/* Detectives Tech — edición más fácil (12 fáciles, 10 medias, 8 difíciles) */

console.log("%cTips:", "background:#4da3ff;color:#031326;font-weight:700;padding:4px 8px;border-radius:6px");
console.log("• Empezá por las verdes (fáciles).");
console.log("• Usá ChatGPT para: binario/decimal, Base64, puertos, CSS, Git, conceptos.");
console.log("• Bonus: escribí window.guiño en la consola 😉");

Object.defineProperty(window,"guiño",{
  get(){
    console.log("DOM = estructura de la página (árbol de nodos).");
    return "¡A jugar!";
  }
});

/* ===== Banco de acertijos =====
   dif: 'facil' | 'media' | 'dificil'
*/
const RIDDLES = [
  // 12 FÁCILES
  {id:"P01",dif:"facil",titulo:"2 al cubo",prompt:"¿Cuánto da 2^3?",respuesta:"8",hint:"Probá 2*2*2.",gpt:"Calcula 2^3."},
  {id:"P02",dif:"facil",titulo:"Binario 10",prompt:"¿Binario de 10?",respuesta:"1010",hint:"8+2.",gpt:"Convierte 10 a binario."},
  {id:"P03",dif:"facil",titulo:"Length",prompt:"¿'hola'.length?",respuesta:"4",hint:"Cuenta letras.",gpt:"¿Qué devuelve length en un string?"},
  {id:"P04",dif:"facil",titulo:"Base64 'hola'",prompt:"¿Base64 de 'hola'?",respuesta:"aG9sYQ==",hint:"btoa('hola') en consola.",gpt:"Codifica 'hola' a Base64."},
  {id:"P05",dif:"facil",titulo:"Color blanco",prompt:"Código HEX del blanco puro.",respuesta:"#ffffff",hint:"R=255,G=255,B=255.",gpt:"¿Hex de color blanco?"},
  {id:"P06",dif:"facil",titulo:"Morse SOS",prompt:"Morse de SOS (puntos y guiones).",respuesta:"...---...",hint:"S=..., O=---.",gpt:"Morse para SOS."},
  {id:"P07",dif:"facil",titulo:"Animal miau",prompt:"Animal que hace 'miau' (minúsculas).",respuesta:"gato",hint:"No es perro 😺",gpt:"Animal que hace miau."},
  {id:"P08",dif:"facil",titulo:"Puerto seguro",prompt:"¿Puerto TCP de HTTPS?",respuesta:"443",hint:"HTTP=80, HTTPS=…",gpt:"¿Qué puerto usa HTTPS?"},
  {id:"P09",dif:"facil",titulo:"WWW año",prompt:"Año de la propuesta de la WWW (Berners-Lee).",respuesta:"1989",hint:"Finales de los 80.",gpt:"¿En qué año se propuso la WWW?"},
  {id:"P10",dif:"facil",titulo:"HTML sigla",prompt:"¿Qué significa HTML? (minúsculas, en español)",respuesta:"lenguaje de marcas de hipertexto",hint:"HyperText Markup Language.",gpt:"Traduce 'HTML' al español."},
  {id:"P11",dif:"facil",titulo:"Web segura",prompt:"Protocolo de la web segura (minúsculas).",respuesta:"https",hint:"Termina con 's'.",gpt:"¿Qué protocolo seguro usa la web?"},
  {id:"P12",dif:"facil",titulo:"IP Windows",prompt:"Comando en Windows para ver IP.",respuesta:"ipconfig",hint:"En Linux sería ifconfig.",gpt:"¿Cómo ver mi IP en Windows por consola?"},

  // 10 MEDIAS
  {id:"P13",dif:"media",titulo:"Binario 25",prompt:"¿Binario de 25?",respuesta:"11001",hint:"16+8+1.",gpt:"Convierte 25 a binario."},
  {id:"P14",dif:"media",titulo:"AI sigla",prompt:"Sigla de inteligencia artificial (minúsculas).",respuesta:"ai",hint:"Artificial Intelligence.",gpt:"Sigla en inglés de inteligencia artificial."},
  {id:"P15",dif:"media",titulo:"ZIP",prompt:"Extensión común de archivo comprimido (minúsculas, 3 letras).",respuesta:"zip",hint:"Muy usada para empaquetar.",gpt:"Extensión de archivo comprimido más común."},
  {id:"P16",dif:"media",titulo:"50 en binario",prompt:"13+37 = 50 → ¿binario?",respuesta:"110010",hint:"Calculá 50 en binario.",gpt:"Convierte 50 a binario."},
  {id:"P17",dif:"media",titulo:"Fondo CSS",prompt:"Propiedad CSS para color de fondo (inglés).",respuesta:"background-color",hint:"No es 'color' a secas.",gpt:"Propiedad CSS para color de fondo."},
  {id:"P18",dif:"media",titulo:"Identidad en red",prompt:"Nombre de la identidad numérica en red (2 palabras).",respuesta:"direccion ip",hint:"IPv4/IPv6.",gpt:"¿Cómo se llama el identificador numérico de una máquina en red?"},
  {id:"P19",dif:"media",titulo:"Navegador",prompt:"Lenguaje que corre en el navegador para interacción.",respuesta:"javascript",hint:"ECMAScript.",gpt:"¿Qué lenguaje corre en el navegador para interacción?"},
  {id:"P20",dif:"media",titulo:"Clonar repo",prompt:"Comando para clonar un repo en Git (dos palabras).",respuesta:"git clone",hint:"Herramienta + acción.",gpt:"¿Cómo clonar un repositorio con Git?"},
  {id:"P21",dif:"media",titulo:"True && False",prompt:"¿Resultado de true && false (minúsculas)?",respuesta:"false",hint:"AND necesita ambas verdaderas.",gpt:"¿Qué devuelve true && false en JS?"},
  {id:"P22",dif:"media",titulo:"Estructura web",prompt:"Estructura de la página web (3 letras).",respuesta:"dom",hint:"Document Object Model.",gpt:"Definí DOM en una línea."},

  // 8 DIFÍCILES (aún accesibles)
  {id:"P23",dif:"dificil",titulo:"0b1010",prompt:"¿Cuánto vale 0b1010 en decimal?",respuesta:"10",hint:"Prefijo binario en JS.",gpt:"Interpreta 0b1010 en JS."},
  {id:"P24",dif:"dificil",titulo:"'computer'",prompt:"Traducción de 'computer' (minúsculas).",respuesta:"computadora",hint:"En España: ordenador.",gpt:"Traducción al español de 'computer' (AR)."},
  {id:"P25",dif:"dificil",titulo:"DHCP",prompt:"Tecnología que reparte IP automáticamente (sigla, mayúsculas).",respuesta:"DHCP",hint:"Dynamic Host Configuration Protocol.",gpt:"¿Qué es DHCP?"},
  {id:"P26",dif:"dificil",titulo:"Tríada CIA",prompt:"En ciberseguridad, la D de CIA (en español).",respuesta:"disponibilidad",hint:"C=Confidencialidad, I=Integridad, D=…",gpt:"Explicá la tríada CIA."},
  {id:"P27",dif:"dificil",titulo:"Router",prompt:"Nombre en inglés del enrutador doméstico (minúsculas).",respuesta:"router",hint:"No es 'modem'.",gpt:"¿Cómo se dice en inglés 'enrutador'?"},
  {id:"P28",dif:"dificil",titulo:"CSS sigla",prompt:"Lenguaje de estilos de la web (sigla, mayúsculas).",respuesta:"CSS",hint:"Cascading Style Sheets.",gpt:"¿Qué significa CSS?"},
  {id:"P29",dif:"dificil",titulo:"Display",prompt:"Valor de display que oculta elemento (inglés).",respuesta:"none",hint:"display: …",gpt:"¿Qué valor de display oculta un elemento?"},
  {id:"P30",dif:"dificil",titulo:"toLowerCase()",prompt:"¿Qué devuelve 'Norbridge'.toLowerCase()? (minúsculas)",respuesta:"norbridge",hint:"Método de strings.",gpt:"¿Qué hace toLowerCase en JS?"},
];

const STORAGE_KEY = "detectives-tech-facil-v1";
let state = loadState(); // { Pxx: true }

const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const norm = s => (s ?? "").toString().trim().toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu,"");

const grid = $("#grid");
const difficultyFilter = $("#difficultyFilter");
const searchBox = $("#searchBox");
const solvedCountEl = $("#solvedCount");
const scoreEl = $("#score");
const progressBar = $("#progressBar");

buildGrid();
updateStats();

/* Listeners */
difficultyFilter.addEventListener("change", applyFilters);
searchBox.addEventListener("input", applyFilters);
$("#resetBtn").addEventListener("click", resetProgress);
$("#helpBtn").addEventListener("click", showHowTo);

/* Construcción del grid */
function buildGrid(){
  grid.innerHTML = "";
  RIDDLES.forEach(r=>{
    const card = document.createElement("article");
    card.className = "card" + (state[r.id] ? " solved" : "");
    card.dataset.id = r.id;
    card.dataset.dif = r.dif;
    card.dataset.title = r.titulo.toLowerCase();
    card.dataset.prompt = r.prompt.toLowerCase();

    const difLabel = r.dif === "facil" ? "Fácil" : (r.dif === "media" ? "Media" : "Difícil");

    card.innerHTML = `
      <div class="id">${r.id}</div>
      <div class="title">${r.titulo}</div>
      <div class="meta">
        <span class="pill">${difLabel}</span>
        <span class="pill">${state[r.id] ? "resuelto" : "pendiente"}</span>
      </div>
      <button class="btn open-btn">Abrir</button>
    `;
    card.querySelector(".open-btn").addEventListener("click", ()=>openRiddle(r.id));
    grid.appendChild(card);
  });
}

/* Modal */
const modal = $("#riddleModal");
const modalTitle = $("#modalTitle");
const modalPrompt = $("#modalPrompt");
const modalHint = $("#modalHint");
const chatgptPrompt = $("#chatgptPrompt");
const answerInput = $("#answerInput");
const answerFeedback = $("#answerFeedback");
const checkBtn = $("#checkBtn");
const hintBlock = $("#hintBlock");
let currentId = null;

function openRiddle(id){
  const r = RIDDLES.find(x=>x.id===id);
  if(!r) return;
  currentId = id;

  modalTitle.textContent = `${r.id} — ${r.titulo} (${r.dif})`;
  modalPrompt.textContent = r.prompt;
  modalHint.textContent = r.hint || "Pensalo un poco antes de pedir ayuda 😉";
  chatgptPrompt.textContent = r.gpt || "Explicame el concepto con un ejemplo simple.";

  answerInput.value = "";
  answerFeedback.textContent = "";
  answerFeedback.className = "feedback";
  hintBlock.open = false;

  if(typeof modal.showModal === "function") modal.showModal();
  else alert("Tu navegador no soporta <dialog>. Podés responder desde cada tarjeta igualmente.");
}

checkBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  if(!currentId) return;

  const r = RIDDLES.find(x=>x.id===currentId);
  const ok = norm(answerInput.value) === norm(r.respuesta);

  if(ok){
    answerFeedback.textContent = "¡Correcto! ✔️";
    answerFeedback.className = "feedback ok";
    if(!state[currentId]){
      state[currentId] = true;
      saveState();
      markSolved(currentId);
      updateStats();
      celebrateSmall();
      maybeAllDone();
    }
  }else{
    answerFeedback.textContent = "No es correcto. Probá de nuevo o pedile ayuda a ChatGPT.";
    answerFeedback.className = "feedback err";
  }
});

/* Filtros */
function applyFilters(){
  const dif = difficultyFilter.value;
  const q = norm(searchBox.value);
  $$(".card").forEach(card=>{
    const matchesDif = (dif==="all" || card.dataset.dif===dif);
    const hay = (card.dataset.title.includes(q) || card.dataset.prompt.includes(q));
    card.style.display = (matchesDif && hay) ? "" : "none";
  });
}

/* Estado/UI */
function markSolved(id){
  const card = $(`.card[data-id="${id}"]`);
  if(!card) return;
  card.classList.add("solved");
  const pills = card.querySelectorAll(".pill");
  if(pills[1]) pills[1].textContent = "resuelto";
}

function updateStats(){
  const solved = Object.keys(state).filter(k=>state[k]).length;
  solvedCountEl.textContent = solved;
  scoreEl.textContent = solved * 10;
  const pct = Math.round((solved / RIDDLES.length) * 100);
  progressBar.style.width = `${pct}%`;
}

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed==="object" ? parsed : {};
  }catch{ return {}; }
}
function saveState(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
function resetProgress(){
  if(confirm("¿Seguro que querés borrar tu progreso local?")){
    state = {};
    saveState();
    buildGrid();
    updateStats();
  }
}
function showHowTo(){
  alert(
`CÓMO JUGAR
1) Elegí una tarjeta y abrila.
2) Leé la consigna. Si hace falta, pedí la PISTA.
3) Escribí tu respuesta y tocá “Comprobar”.
4) Sumás puntos por cada acertijo correcto. El progreso se guarda solo.

Consejos:
• Empezá por los de dificultad FÁCIL.
• Usá ChatGPT para investigar lo que no sepas.`
  );
}

/* Confeti simple (sin librerías) */
function celebrateSmall(){ shoot(12); }
function maybeAllDone(){
  const solved = Object.keys(state).filter(k=>state[k]).length;
  if(solved === RIDDLES.length){
    setTimeout(()=>shoot(80), 200);
    setTimeout(()=>shoot(120), 600);
    alert("¡Completaste los 30! 🎉");
  }
}
function shoot(n=30){
  const end = Date.now() + 700;
  (function frame(){
    const span = document.createElement("span");
    span.textContent = ["🎉","✨","🎈","🟦","🟩","🟨"][Math.floor(Math.random()*6)];
    span.style.position="fixed";
    span.style.left = Math.random()*100 + "vw";
    span.style.top = "-2vh";
    span.style.fontSize = (16 + Math.random()*22) + "px";
    span.style.transform = `rotate(${Math.random()*360}deg)`;
    span.style.transition = `transform .7s linear, top .7s linear, opacity .7s`;
    document.body.appendChild(span);
    requestAnimationFrame(()=>{
      span.style.top = "110vh";
      span.style.transform += " translateY(100vh)";
      span.style.opacity = "0.85";
    });
    setTimeout(()=> span.remove(), 800);
    if(Date.now() < end && n-- > 0) requestAnimationFrame(frame);
  })();
}
