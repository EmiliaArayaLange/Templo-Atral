const cardDeck = [
  {
    name: "La Luna",
    keyword: "intuicion y misterio",
    essence:
      "las respuestas mas valiosas aparecen cuando bajas el ruido y confias en lo que tu intuicion ya detecto.",
    ritual:
      "Ritual: anota tres senales recientes y observa cual de ellas se repite con mas fuerza.",
    topics: ["amor", "decision", "energia"],
    states: ["confusa", "ansiosa", "sensible"],
    intentions: ["claridad", "sanar"]
  },
  {
    name: "El Sol",
    keyword: "vitalidad y expansion",
    essence:
      "hay una energia lista para abrirse, recuperar confianza y devolverle calidez a tus planes.",
    ritual:
      "Ritual: abre una ventana, respira profundo y agradece tres cosas que ya estan floreciendo.",
    topics: ["trabajo", "abundancia", "proposito"],
    states: ["abierta", "cansada"],
    intentions: ["manifestar", "apertura"]
  },
  {
    name: "La Sacerdotisa",
    keyword: "silencio y sabiduria interna",
    essence:
      "antes de actuar, necesitas escuchar lo que tu cuerpo sabe y lo que la mente aun no ordena.",
    ritual:
      "Ritual: guarda cinco minutos de silencio con las manos sobre el vientre antes de decidir.",
    topics: ["decision", "energia", "proposito"],
    states: ["confusa", "sensible"],
    intentions: ["claridad", "proteccion"]
  },
  {
    name: "La Estrella",
    keyword: "esperanza serena",
    essence:
      "tu proceso esta sanando y quiere recordar que aun en medio del cansancio sigue existiendo direccion.",
    ritual:
      "Ritual: enciende una vela blanca y escribe una sola frase de confianza para esta semana.",
    topics: ["amor", "energia", "proposito"],
    states: ["cansada", "sensible"],
    intentions: ["sanar", "apertura"]
  },
  {
    name: "El Mundo",
    keyword: "cierre y renacimiento",
    essence:
      "un ciclo pide completarse con conciencia antes de abrir el siguiente paso con ligereza.",
    ritual:
      "Ritual: agradece por escrito algo que ya termino y nombra lo que ahora si estas lista para recibir.",
    topics: ["decision", "trabajo", "proposito"],
    states: ["abierta", "cansada"],
    intentions: ["claridad", "manifestar"]
  },
  {
    name: "La Emperatriz",
    keyword: "creacion y abundancia",
    essence:
      "tu energia prospera cuando nutres lo que amas con ternura, presencia y sentido de merecimiento.",
    ritual:
      "Ritual: crea un pequeno gesto de autocuidado antes de pedir respuestas afuera.",
    topics: ["amor", "abundancia", "energia"],
    states: ["sensible", "abierta"],
    intentions: ["sanar", "apertura"]
  },
  {
    name: "La Fuerza",
    keyword: "templanza interior",
    essence:
      "no necesitas presionarte mas; el verdadero avance aparece cuando sostienes tu energia sin violencia.",
    ritual:
      "Ritual: repite una decision clara frente al espejo y sostenla con una respiracion lenta.",
    topics: ["trabajo", "decision", "energia"],
    states: ["ansiosa", "cansada"],
    intentions: ["proteccion", "claridad"]
  },
  {
    name: "El Mago",
    keyword: "accion y manifestacion",
    essence:
      "tienes recursos disponibles ahora mismo, y la lectura te invita a usarlos con foco y direccion.",
    ritual:
      "Ritual: define una accion pequena y concreta que puedas completar hoy sin postergarla.",
    topics: ["trabajo", "abundancia", "proposito"],
    states: ["abierta", "confusa"],
    intentions: ["manifestar", "apertura"]
  }
];

const chakraDeck = [
  {
    name: "Raiz",
    affirmation: "Estoy a salvo dentro de mi propio camino.",
    message:
      "La energia base pide tierra, descanso y orden. Vuelve a lo esencial para recuperar estabilidad.",
    practice:
      "Practica: siente el peso de tus pies en el suelo y baja la respiracion hacia el abdomen.",
    topics: ["trabajo", "abundancia", "energia"],
    states: ["cansada", "ansiosa"],
    intentions: ["proteccion", "manifestar"]
  },
  {
    name: "Sacro",
    affirmation: "Mi sensibilidad es una fuente viva de creatividad.",
    message:
      "Tu energia quiere moverse con mas placer y fluidez. Permite emocion, juego y contacto con tus sentidos.",
    practice:
      "Practica: escucha una cancion suave y mueve la cadera con libertad durante un minuto.",
    topics: ["amor", "energia", "abundancia"],
    states: ["sensible", "cansada"],
    intentions: ["sanar", "apertura"]
  },
  {
    name: "Plexo solar",
    affirmation: "Confio en mi voz interior para actuar con firmeza.",
    message:
      "Es momento de reconocer tu poder personal. Lo pequeno tambien cuenta cuando nace desde la decision.",
    practice:
      "Practica: coloca una mano sobre el abdomen y nombra en voz alta una accion que si puedes sostener.",
    topics: ["trabajo", "abundancia", "decision"],
    states: ["confusa", "abierta"],
    intentions: ["manifestar", "claridad"]
  },
  {
    name: "Corazon",
    affirmation: "Permito que mi energia se abra sin miedo.",
    message:
      "Tu energia pide ternura y coherencia emocional. Observa donde necesitas dar o recibir amor con mas honestidad.",
    practice:
      "Practica: coloca tus manos en el centro del pecho durante tres minutos y suelta los hombros.",
    topics: ["amor", "energia", "proposito"],
    states: ["sensible", "cansada"],
    intentions: ["sanar", "apertura"]
  },
  {
    name: "Garganta",
    affirmation: "Mi verdad puede expresarse con calma y claridad.",
    message:
      "La garganta se armoniza cuando dejas de guardar palabras que necesitan salir. Hablar con suavidad tambien es valentia.",
    practice:
      "Practica: escribe una frase que llevas tiempo guardando y leela despacio, sin juzgarte.",
    topics: ["amor", "trabajo", "decision"],
    states: ["ansiosa", "confusa"],
    intentions: ["claridad", "proteccion"]
  },
  {
    name: "Tercer ojo",
    affirmation: "Veo mas alla del miedo y reconozco las senales.",
    message:
      "La intuicion esta activa. Observa coincidencias, simbolos y sensaciones sutiles antes de buscar respuestas rapidas.",
    practice:
      "Practica: cierra los ojos un minuto y registra la primera imagen o palabra que aparezca.",
    topics: ["decision", "proposito", "energia"],
    states: ["confusa", "sensible"],
    intentions: ["claridad", "proteccion"]
  },
  {
    name: "Corona",
    affirmation: "Estoy conectada con una conciencia mas amplia.",
    message:
      "Tu energia necesita silencio, perspectiva y contemplacion. Alejarte del ruido puede devolverte claridad.",
    practice:
      "Practica: respira en silencio durante un minuto repitiendo internamente la palabra paz.",
    topics: ["proposito", "energia", "amor"],
    states: ["abierta", "cansada"],
    intentions: ["sanar", "apertura"]
  }
];

const topicProfiles = {
  amor: {
    label: "amor y vinculos",
    current:
      "Tu consulta nace en una zona afectiva donde importa tanto lo que sientes como la calidad del intercambio.",
    block:
      "El corazon puede estar buscando certezas demasiado rapido o midiendo su valor segun la respuesta ajena.",
    path:
      "La salida aparece cuando eliges claridad emocional, limites tiernos y verdad antes que ansiedad."
  },
  trabajo: {
    label: "trabajo y decisiones",
    current:
      "Tu energia se concentra en responsabilidad, elecciones practicas y necesidad de direccion concreta.",
    block:
      "La presion por resolverlo todo de inmediato puede nublar la lectura real de tus recursos.",
    path:
      "Se abre camino cuando ordenas prioridades y conviertes la intuicion en un paso visible."
  },
  abundancia: {
    label: "abundancia y dinero",
    current:
      "La consulta toca merecimiento, estabilidad y la forma en que sostienes lo material desde tu energia.",
    block:
      "A veces el miedo a la escasez cierra la creatividad y hace mas dificil recibir con confianza.",
    path:
      "La puerta mejora cuando combinas enfoque, cuerpo presente y una accion realista que puedas repetir."
  },
  energia: {
    label: "energia personal",
    current:
      "Tu campo pide escuchar el cuerpo, el descanso y la forma en que tu vitalidad se mueve durante estos dias.",
    block:
      "El desgaste acumulado o la hipersensibilidad pueden hacerte cargar mas de lo que en verdad necesitas.",
    path:
      "Recuperas centro cuando vuelves al ritmo suave, a la respiracion y a decisiones energeticamente honestas."
  },
  proposito: {
    label: "camino y proposito",
    current:
      "Hay una inquietud de sentido, direccion y expansion interior que busca expresarse con mas coherencia.",
    block:
      "La comparacion o la necesidad de tener todo resuelto antes de empezar pueden inmovilizarte.",
    path:
      "La via se aclara cuando te permites avanzar por resonancia y no solo por exigencia externa."
  },
  decision: {
    label: "una decision importante",
    current:
      "Tu lectura se organiza alrededor de una eleccion que necesita mas presencia que apuro.",
    block:
      "La duda se hace mas grande cuando intentas encontrar garantias absolutas antes de moverte.",
    path:
      "El siguiente paso aparece cuando unes intuicion, informacion concreta y una senal corporal de alivio."
  }
};

const stateProfiles = {
  confusa: {
    label: "confusion suave",
    current:
      "Hay demasiadas senales al mismo tiempo y tu mente aun no termina de ordenarlas.",
    block:
      "La duda puede hacerte posponer algo que internamente ya viene mostrando una direccion.",
    path:
      "Tu energia mejora cuando simplificas la pregunta y dejas de exigir una respuesta total."
  },
  ansiosa: {
    label: "aceleracion emocional",
    current:
      "La urgencia esta empujando la consulta, y eso puede intensificar la sensacion de inestabilidad.",
    block:
      "Cuando todo parece urgente, se vuelve mas dificil distinguir intuicion de miedo.",
    path:
      "La calma no retrasa la respuesta; al contrario, la vuelve mas certera."
  },
  cansada: {
    label: "cansancio energetico",
    current:
      "Tu energia necesita descanso, suavidad y una forma menos exigente de escucharse.",
    block:
      "Si estas drenada, es facil interpretar todo desde el agotamiento y no desde la verdad del momento.",
    path:
      "Recuperar fuerza primero puede ser parte de la respuesta que estas buscando."
  },
  sensible: {
    label: "sensibilidad abierta",
    current:
      "Estas recibiendo mucho a nivel emocional y energetico, por eso todo se siente mas profundo.",
    block:
      "La sensibilidad sin contencion puede confundirse con sobrecarga o con exceso de entrega.",
    path:
      "Cuando honras tu sensibilidad como una guia y no como debilidad, la lectura se vuelve clara."
  },
  abierta: {
    label: "disposicion al cambio",
    current:
      "Hay algo en ti que ya se siente listo para atravesar una puerta nueva con mas madurez.",
    block:
      "La apertura pierde fuerza cuando vuelves a patrones viejos por costumbre o por miedo.",
    path:
      "Con una accion concreta y sostenida, esta etapa puede tomar forma muy rapido."
  }
};

const intentionProfiles = {
  claridad: {
    label: "claridad",
    support:
      "La lectura te pide separar hechos, emociones e intuiciones para que la respuesta no se mezcle.",
    path:
      "Tu siguiente paso es mirar menos escenarios y atender la senal que se siente mas limpia.",
    ritual:
      "Completa el ritual escribiendo una sola verdad que ya no quieras seguir evitando."
  },
  sanar: {
    label: "sanacion",
    support:
      "Aqui no se trata de forzarte a olvidar, sino de acompanar con ternura la parte de ti que sigue sensible.",
    path:
      "La respuesta llega mejor cuando eliges alivio real y no repeticion del dolor.",
    ritual:
      "Despues del ritual, lleva tus manos al pecho y agradece lo que tu energia aun protege."
  },
  proteccion: {
    label: "proteccion energetica",
    support:
      "La lectura muestra la necesidad de cuidar limites, presencia y direccion antes de abrirte de mas.",
    path:
      "La proteccion no es cierre; es elegir desde donde quieres vincularte o actuar.",
    ritual:
      "Despues del ritual, imagina una luz dorada alrededor de tu cuerpo durante tres respiraciones."
  },
  apertura: {
    label: "apertura de caminos",
    support:
      "Tu energia pide movimiento consciente, disponibilidad y una mirada menos rigida sobre lo posible.",
    path:
      "El camino se amplifica cuando sueltas el control total y das espacio a una oportunidad nueva.",
    ritual:
      "Despues del ritual, abre una ventana o cambia de lugar un objeto para mover la energia del espacio."
  },
  manifestar: {
    label: "manifestacion",
    support:
      "La lectura se enfoca en convertir deseo en direccion, sin caer en la prisa ni en la fantasia vacia.",
    path:
      "Manifestar aqui significa comprometerte con una accion concreta que sostenga tu intencion.",
    ritual:
      "Despues del ritual, nombra en voz alta la accion pequena que vas a completar hoy."
  }
};

const sunSignProfiles = {
  Aries: {
    element: "fuego",
    message: "Tu energia solar nace para iniciar, encender y abrir caminos.",
    chakra: "Plexo solar"
  },
  Tauro: {
    element: "tierra",
    message: "Tu signo solar necesita estabilidad, cuerpo presente y construccion paciente.",
    chakra: "Raiz"
  },
  Geminis: {
    element: "aire",
    message: "Tu campo se aclara cuando dialogas, nombras y conectas ideas con libertad.",
    chakra: "Garganta"
  },
  Cancer: {
    element: "agua",
    message: "Tu energia solar se mueve desde la sensibilidad, el cuidado y la memoria emocional.",
    chakra: "Corazon"
  },
  Leo: {
    element: "fuego",
    message: "Tu centro vital quiere expresarse con coraje, identidad y presencia.",
    chakra: "Plexo solar"
  },
  Virgo: {
    element: "tierra",
    message: "Tu fuerza aparece cuando ordenas, depuras y escuchas los detalles del cuerpo.",
    chakra: "Raiz"
  },
  Libra: {
    element: "aire",
    message: "Tu signo solar busca armonia, vinculos equilibrados y belleza relacional.",
    chakra: "Corazon"
  },
  Escorpio: {
    element: "agua",
    message: "Tu energia solar atraviesa procesos profundos, intensos y transformadores.",
    chakra: "Sacro"
  },
  Sagitario: {
    element: "fuego",
    message: "Tu campo se expande con vision, busqueda de sentido y movimiento interior.",
    chakra: "Corona"
  },
  Capricornio: {
    element: "tierra",
    message: "Tu energia solar se fortalece con estructura, responsabilidad y constancia.",
    chakra: "Raiz"
  },
  Acuario: {
    element: "aire",
    message: "Tu signo solar necesita perspectiva, ideas nuevas y libertad para diferenciarse.",
    chakra: "Tercer ojo"
  },
  Piscis: {
    element: "agua",
    message: "Tu campo se mueve por intuicion, sensibilidad y una conexion simbolica muy fina.",
    chakra: "Corona"
  }
};

const lifePathProfiles = {
  1: {
    title: "iniciadora",
    message: "Tu numero de vida pide liderazgo, autonomia y decisiones claras.",
    chakra: "Plexo solar"
  },
  2: {
    title: "vinculo y cooperacion",
    message: "Tu camino se ordena cuando escuchas lo sutil y construyes armonia sin perderte.",
    chakra: "Corazon"
  },
  3: {
    title: "expresion y creatividad",
    message: "Tu energia prospera cuando la voz interior encuentra una forma de expresarse.",
    chakra: "Garganta"
  },
  4: {
    title: "estructura y base",
    message: "Tu numero de vida busca orden, constancia y una base firme para crecer.",
    chakra: "Raiz"
  },
  5: {
    title: "cambio y movimiento",
    message: "Tu aprendizaje esta en sostener libertad con direccion y no desde el impulso vacio.",
    chakra: "Sacro"
  },
  6: {
    title: "cuidado y responsabilidad",
    message: "Tu camino florece cuando ofreces amor sin cargar con lo que no te toca.",
    chakra: "Corazon"
  },
  7: {
    title: "busqueda interior",
    message: "Tu numero de vida pide silencio, intuicion y profundidad antes de avanzar.",
    chakra: "Tercer ojo"
  },
  8: {
    title: "poder y manifestacion",
    message: "Tu energia necesita asumir autoridad interior y relacion sana con lo material.",
    chakra: "Plexo solar"
  },
  9: {
    title: "servicio y cierre",
    message: "Tu camino se mueve entre compasion, sabiduria emocional y capacidad de cerrar ciclos.",
    chakra: "Corona"
  },
  11: {
    title: "vision intuitiva",
    message: "Tu numero maestro amplifica percepcion, inspiracion y sensibilidad energetica.",
    chakra: "Tercer ojo"
  },
  22: {
    title: "constructora de vision",
    message: "Tu numero maestro invita a bajar grandes visiones a estructuras concretas.",
    chakra: "Raiz"
  },
  33: {
    title: "guia compasiva",
    message: "Tu numero maestro une amor, entrega y una vocacion muy fuerte de acompanar.",
    chakra: "Corazon"
  }
};

const STORAGE_KEY = "templo-astral-readings-v2";
const DRAFT_KEY = "templo-astral-draft-v2";
const cloudConfig = window.TEMPLO_ASTRAL_CONFIG || {};

const readingForm = document.querySelector("#reading-form");
const quickReadingButton = document.querySelector("#quick-reading");
const checkChakraButton = document.querySelector("#check-chakra");
const cardResult = document.querySelector("#card-result");
const chakraResult = document.querySelector("#chakra-result");
const readingStatus = document.querySelector("#reading-status");
const spreadNow = document.querySelector("#spread-now");
const spreadBlock = document.querySelector("#spread-block");
const spreadPath = document.querySelector("#spread-path");
const chakraButtons = [...document.querySelectorAll(".chakra-card")];
const historyList = document.querySelector("#history-list");
const historyStatus = document.querySelector("#history-status");
const recordCount = document.querySelector("#record-count");
const lastSaved = document.querySelector("#last-saved");
const storageCloudStatus = document.querySelector("#storage-cloud-status");
const storageLocalStatus = document.querySelector("#storage-local-status");
const saveFeedback = document.querySelector("#save-feedback");
const syncInline = document.querySelector("#sync-inline");
const exportCsvButton = document.querySelector("#export-csv");
const clearHistoryButton = document.querySelector("#clear-history");

let readings = loadRecords();

function getCloudUrl() {
  return typeof cloudConfig.appsScriptUrl === "string" ? cloudConfig.appsScriptUrl.trim() : "";
}

function hasStorage() {
  try {
    const testKey = "__templo_astral_test__";
    window.localStorage.setItem(testKey, "ok");
    window.localStorage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}

function loadJson(key, fallback) {
  if (!hasStorage()) {
    return fallback;
  }

  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function saveJson(key, value) {
  if (!hasStorage()) {
    return false;
  }

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    return false;
  }
}

function loadRecords() {
  const items = loadJson(STORAGE_KEY, []);
  return Array.isArray(items) ? items : [];
}

function saveRecords() {
  saveJson(STORAGE_KEY, readings);
}

function loadDraft() {
  const draft = loadJson(DRAFT_KEY, null);
  return draft && typeof draft === "object" ? draft : null;
}

function saveDraft(values) {
  saveJson(DRAFT_KEY, values);
}

function animatePanel(panel) {
  if (!panel) {
    return;
  }

  panel.classList.remove("flash");
  void panel.offsetWidth;
  panel.classList.add("flash");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatName(value) {
  const words = value
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

  return words.join(" ");
}

function clampText(value, maxLength) {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength - 3)}...`;
}

function hashString(value) {
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }

  return hash;
}

function formatDate(value) {
  try {
    return new Intl.DateTimeFormat("es-CL", {
      dateStyle: "medium",
      timeStyle: "short"
    }).format(new Date(value));
  } catch (error) {
    return value;
  }
}

function normalizeLetters(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .replace(/[^A-Z]/g, "");
}

function reduceNumber(value) {
  let total = value;

  while (total > 9 && ![11, 22, 33].includes(total)) {
    total = String(total)
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }

  return total;
}

function calculateLifePath(dateString) {
  if (!dateString) {
    return null;
  }

  const digits = dateString.replace(/\D/g, "");

  if (!digits) {
    return null;
  }

  const total = digits.split("").reduce((sum, digit) => sum + Number(digit), 0);
  return reduceNumber(total);
}

function calculateNameNumber(name) {
  const letters = normalizeLetters(name);

  if (!letters) {
    return null;
  }

  let total = 0;

  for (const letter of letters) {
    const charCode = letter.charCodeAt(0) - 64;
    total += ((charCode - 1) % 9) + 1;
  }

  return reduceNumber(total);
}

function getSunSign(dateString) {
  if (!dateString) {
    return null;
  }

  const [yearString, monthString, dayString] = dateString.split("-");
  const year = Number(yearString);
  const month = Number(monthString);
  const day = Number(dayString);

  if (!year || !month || !day) {
    return null;
  }

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Tauro";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Geminis";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Escorpio";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagitario";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricornio";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Acuario";
  return "Piscis";
}

function getBirthRhythm(timeString) {
  if (!timeString) {
    return null;
  }

  const [hourString] = timeString.split(":");
  const hour = Number(hourString);

  if (Number.isNaN(hour)) {
    return null;
  }

  if (hour >= 5 && hour < 11) {
    return {
      label: "ritmo del amanecer",
      message: "Tu nacimiento se vincula con energia de inicio, claridad y empuje suave.",
      chakra: "Plexo solar"
    };
  }

  if (hour >= 11 && hour < 17) {
    return {
      label: "ritmo solar",
      message: "Tu hora de nacimiento sugiere expansion, visibilidad y potencia creativa.",
      chakra: "Garganta"
    };
  }

  if (hour >= 17 && hour < 22) {
    return {
      label: "ritmo del crepusculo",
      message: "Tu energia se mueve entre introspeccion sensible y capacidad de cierre.",
      chakra: "Corazon"
    };
  }

  return {
    label: "ritmo nocturno",
    message: "Tu nacimiento resuena con profundidad simbolica, intuicion y mundo interno activo.",
    chakra: "Tercer ojo"
  };
}

function buildBirthProfile(values) {
  const sunSign = getSunSign(values.birthDate);
  const signProfile = sunSign ? sunSignProfiles[sunSign] : null;
  const lifePath = calculateLifePath(values.birthDate);
  const lifeProfile = lifePath ? lifePathProfiles[lifePath] : null;
  const nameNumber = calculateNameNumber(values.name);
  const birthRhythm = getBirthRhythm(values.birthTime);
  const birthPlace = values.birthPlace.trim();

  return {
    sunSign,
    signProfile,
    lifePath,
    lifeProfile,
    nameNumber,
    birthRhythm,
    birthPlace,
    hasBirthData: Boolean(values.birthDate)
  };
}

function scoreMatch(item, values) {
  let score = 0;

  if (item.topics.includes(values.topic)) {
    score += 3;
  }

  if (item.states.includes(values.state)) {
    score += 2;
  }

  if (item.intentions.includes(values.intention)) {
    score += 2;
  }

  return score;
}

function pickBestMatch(collection, values, birthProfile) {
  const scored = collection.map((item) => ({
    item,
    score: scoreMatch(item, values)
  }));

  const bestScore = Math.max(...scored.map((entry) => entry.score));
  const bestEntries = scored.filter((entry) => entry.score === bestScore);
  const seed = hashString(
    [
      values.topic,
      values.state,
      values.intention,
      values.question,
      values.name,
      birthProfile.sunSign || "",
      birthProfile.lifePath || "",
      birthProfile.nameNumber || ""
    ].join("|")
  );

  return bestEntries[seed % bestEntries.length].item;
}

function readFormValues() {
  const formData = new FormData(readingForm);

  return {
    name: String(formData.get("name") || "").trim(),
    topic: String(formData.get("topic") || "amor"),
    state: String(formData.get("state") || "confusa"),
    intention: String(formData.get("intention") || "claridad"),
    question: String(formData.get("question") || "").trim(),
    birthDate: String(formData.get("birthDate") || "").trim(),
    birthTime: String(formData.get("birthTime") || "").trim(),
    birthPlace: String(formData.get("birthPlace") || "").trim()
  };
}

function applyDraftToForm() {
  const draft = loadDraft();

  if (!draft || !readingForm) {
    return;
  }

  const fieldMap = {
    name: "#user-name",
    topic: "#user-topic",
    state: "#user-state",
    intention: "#user-intention",
    question: "#user-question",
    birthDate: "#birth-date",
    birthTime: "#birth-time",
    birthPlace: "#birth-place"
  };

  Object.entries(fieldMap).forEach(([key, selector]) => {
    const input = readingForm.querySelector(selector);

    if (input && typeof draft[key] === "string") {
      input.value = draft[key];
    }
  });
}

function updateSpread(values) {
  const topic = topicProfiles[values.topic];
  const state = stateProfiles[values.state];
  const intention = intentionProfiles[values.intention];

  spreadNow.innerHTML = `
    <span class="spread-step">Momento actual</span>
    <h3>${escapeHtml(topic.label)}</h3>
    <p>${escapeHtml(`${topic.current} ${state.current}`)}</p>
  `;

  spreadBlock.innerHTML = `
    <span class="spread-step">Nudo energetico</span>
    <h3>${escapeHtml(state.label)}</h3>
    <p>${escapeHtml(`${state.block} ${topic.block}`)}</p>
  `;

  spreadPath.innerHTML = `
    <span class="spread-step">Puerta que se abre</span>
    <h3>${escapeHtml(intention.label)}</h3>
    <p>${escapeHtml(`${intention.path} ${topic.path}`)}</p>
  `;
}

function highlightChakra(name) {
  chakraButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.chakra === name);
  });
}

function renderChakra(chakra, sourceLabel) {
  chakraResult.innerHTML = `
    <p class="result-tag">${escapeHtml(sourceLabel)}</p>
    <h3>${escapeHtml(chakra.name)}</h3>
    <p class="result-keyword">Afirmacion: ${escapeHtml(chakra.affirmation)}</p>
    <p>${escapeHtml(chakra.message)}</p>
    <p class="result-note">${escapeHtml(chakra.practice)}</p>
  `;

  highlightChakra(chakra.name);
  animatePanel(chakraResult);
}

function buildQuestionMessage(values) {
  if (!values.question) {
    return "No hace falta contarlo todo; la energia de tu consulta ya ofrece suficiente informacion para orientar la lectura.";
  }

  return `Tu pregunta principal dice: "${clampText(values.question, 140)}". Esa frase marca el centro de la lectura.`;
}

function buildSolarDetail(profile) {
  if (!profile.sunSign || !profile.signProfile) {
    return "Agrega tu fecha de nacimiento para revelar tu perfil solar.";
  }

  const rhythmText = profile.birthRhythm ? ` ${profile.birthRhythm.message}` : "";
  const placeText = profile.birthPlace
    ? ` Tu ancla de origen aparece en ${profile.birthPlace}.`
    : "";

  return `${profile.sunSign} / elemento ${profile.signProfile.element}. ${profile.signProfile.message}${rhythmText}${placeText}`;
}

function buildNumberDetail(profile) {
  if (!profile.lifePath && !profile.nameNumber) {
    return "Con tu fecha de nacimiento podre mostrar un numero de vida mas personal.";
  }

  const lifePathText = profile.lifePath
    ? `Numero de vida ${profile.lifePath}: ${profile.lifeProfile?.message || "marca tu direccion principal."}`
    : "";
  const nameText = profile.nameNumber
    ? ` Vibracion del nombre ${profile.nameNumber}: aporta una capa extra de expresion personal.`
    : "";

  return `${lifePathText}${nameText}`.trim();
}

function choosePersonalizedChakra(baseChakra, profile) {
  const scores = new Map();

  function addScore(name, amount) {
    if (!name) {
      return;
    }

    scores.set(name, (scores.get(name) || 0) + amount);
  }

  addScore(baseChakra.name, 4);
  addScore(profile.signProfile?.chakra, 2);
  addScore(profile.lifeProfile?.chakra, 3);
  addScore(profile.birthRhythm?.chakra, 1);

  let bestName = baseChakra.name;
  let bestScore = -1;

  scores.forEach((score, name) => {
    if (score > bestScore) {
      bestName = name;
      bestScore = score;
    }
  });

  return chakraDeck.find((chakra) => chakra.name === bestName) || baseChakra;
}

function getSyncLabel(syncState) {
  if (syncState === "synced") {
    return "Sincronizada";
  }

  if (syncState === "pending") {
    return "Pendiente";
  }

  if (syncState === "error") {
    return "Con error";
  }

  return "Solo local";
}

function buildReadingRecord(values, reading, profile) {
  const cloudUrl = getCloudUrl();

  return {
    id: `reading-${Date.now()}-${hashString(`${values.name}|${values.question}|${Math.random()}`)}`,
    createdAt: new Date().toISOString(),
    displayDate: formatDate(new Date().toISOString()),
    name: formatName(values.name) || "Alma",
    topic: values.topic,
    state: values.state,
    intention: values.intention,
    question: values.question,
    birthDate: values.birthDate,
    birthTime: values.birthTime,
    birthPlace: values.birthPlace,
    sunSign: profile.sunSign,
    sunElement: profile.signProfile?.element || "",
    lifePath: profile.lifePath,
    nameNumber: profile.nameNumber,
    rhythmLabel: profile.birthRhythm?.label || "",
    cardName: reading.card.name,
    cardKeyword: reading.card.keyword,
    chakraName: reading.chakra.name,
    chakraAffirmation: reading.chakra.affirmation,
    currentText: reading.currentText,
    blockText: reading.blockText,
    pathText: reading.pathText,
    ritualText: reading.ritualText,
    syncState: cloudUrl ? "pending" : "local"
  };
}

function renderHistory() {
  if (!historyList) {
    return;
  }

  if (!readings.length) {
    historyList.innerHTML = `
      <article class="history-empty">
        <h3>Tu bitacora espiritual esta vacia por ahora.</h3>
        <p>
          Cuando generes una lectura, aqui se guardaran el nombre, la pregunta, la carta principal,
          el chakra recomendado, el perfil solar y la fecha.
        </p>
      </article>
    `;
    return;
  }

  historyList.innerHTML = readings
    .map((record) => {
      const questionText = record.question
        ? clampText(record.question, 180)
        : "Consulta rapida sin texto adicional.";
      const profileText = [
        record.sunSign ? `Signo ${record.sunSign}` : "",
        record.lifePath ? `Vida ${record.lifePath}` : "",
        record.nameNumber ? `Nombre ${record.nameNumber}` : ""
      ]
        .filter(Boolean)
        .join(" / ");

      return `
        <article class="history-item">
          <div class="history-top">
            <div>
              <h3>${escapeHtml(record.name)} / ${escapeHtml(record.cardName)}</h3>
              <p class="history-meta">${escapeHtml(record.displayDate)}</p>
            </div>
            <div class="history-badges">
              <span class="history-badge">${escapeHtml(record.chakraName)}</span>
              ${profileText ? `<span class="history-badge">${escapeHtml(profileText)}</span>` : ""}
              <span class="history-badge">${escapeHtml(getSyncLabel(record.syncState))}</span>
            </div>
          </div>
          <p class="history-summary">${escapeHtml(questionText)}</p>
          <p class="history-note">
            Tema: ${escapeHtml(topicProfiles[record.topic]?.label || record.topic)}. Estado:
            ${escapeHtml(stateProfiles[record.state]?.label || record.state)}. Intencion:
            ${escapeHtml(intentionProfiles[record.intention]?.label || record.intention)}.
          </p>
        </article>
      `;
    })
    .join("");
}

function updateStorageStatus() {
  const cloudUrl = getCloudUrl();
  const pendingCount = readings.filter((record) => record.syncState === "pending").length;
  const syncedCount = readings.filter((record) => record.syncState === "synced").length;
  const lastRecord = readings[0];

  storageLocalStatus.textContent = hasStorage()
    ? "Activo en este navegador"
    : "No disponible en este navegador";

  if (!cloudUrl) {
    storageCloudStatus.textContent = "No configurada todavia";
    syncInline.textContent =
      "Guardado local activo. Para enviar a Google Sheets, agrega la URL en site-config.js.";
  } else if (pendingCount > 0) {
    storageCloudStatus.textContent = `${pendingCount} lectura(s) pendiente(s)`;
    syncInline.textContent =
      "Guardado local activo. La nube esta configurada y se estan enviando lecturas pendientes.";
  } else if (syncedCount > 0) {
    storageCloudStatus.textContent = "Conectada y al dia";
    syncInline.textContent =
      "Guardado local activo y sincronizacion con Google Sheets lista para nuevas lecturas.";
  } else {
    storageCloudStatus.textContent = "Conectada, esperando lecturas";
    syncInline.textContent =
      "Guardado local activo y Google Sheets preparado para sincronizar nuevos registros.";
  }

  recordCount.textContent = `${readings.length} registro(s)`;
  lastSaved.textContent = lastRecord
    ? `Ultima lectura guardada: ${lastRecord.displayDate}.`
    : "Aun no se guarda ninguna lectura en este navegador.";

  historyStatus.textContent = readings.length
    ? `${readings.length} lectura(s) en esta bitacora`
    : "Sin lecturas guardadas";
}

function updateRecordSyncState(id, syncState) {
  readings = readings.map((record) =>
    record.id === id
      ? {
          ...record,
          syncState,
          syncedAt: syncState === "synced" ? new Date().toISOString() : record.syncedAt || null
        }
      : record
  );

  saveRecords();
  updateStorageStatus();
  renderHistory();
}

async function syncRecord(record, options = {}) {
  const cloudUrl = getCloudUrl();

  if (!cloudUrl) {
    return false;
  }

  const payload = {
    ...record,
    siteUrl: window.location.href,
    source: "templo-astral"
  };

  try {
    await fetch(cloudUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(payload)
    });

    updateRecordSyncState(record.id, "synced");

    if (!options.silent) {
      saveFeedback.textContent =
        "Lectura guardada en este navegador y enviada a la configuracion actual de Google Sheets.";
    }

    return true;
  } catch (error) {
    updateRecordSyncState(record.id, "error");

    if (!options.silent) {
      saveFeedback.textContent =
        "La lectura se guardo localmente, pero la sincronizacion externa no pudo completarse.";
    }

    return false;
  }
}

async function syncPendingReadings() {
  const cloudUrl = getCloudUrl();

  if (!cloudUrl) {
    return;
  }

  const queue = readings.filter((record) => record.syncState !== "synced");

  for (const record of queue) {
    await syncRecord(record, { silent: true });
  }
}

function persistReading(record) {
  readings = [record, ...readings].slice(0, 50);
  saveRecords();
  renderHistory();
  updateStorageStatus();
}

function csvEscape(value) {
  return `"${String(value || "").replaceAll('"', '""')}"`;
}

function exportReadingsToCsv() {
  if (!readings.length) {
    saveFeedback.textContent = "No hay lecturas para exportar todavia.";
    return;
  }

  const headers = [
    "fecha",
    "nombre",
    "tema",
    "estado",
    "intencion",
    "pregunta",
    "fecha_nacimiento",
    "hora_nacimiento",
    "lugar_nacimiento",
    "signo_solar",
    "elemento",
    "numero_vida",
    "numero_nombre",
    "carta",
    "palabra_guia",
    "chakra",
    "afirmacion",
    "sincronizacion"
  ];

  const rows = readings.map((record) => [
    record.displayDate,
    record.name,
    topicProfiles[record.topic]?.label || record.topic,
    stateProfiles[record.state]?.label || record.state,
    intentionProfiles[record.intention]?.label || record.intention,
    record.question || "",
    record.birthDate || "",
    record.birthTime || "",
    record.birthPlace || "",
    record.sunSign || "",
    record.sunElement || "",
    record.lifePath || "",
    record.nameNumber || "",
    record.cardName,
    record.cardKeyword,
    record.chakraName,
    record.chakraAffirmation,
    getSyncLabel(record.syncState)
  ]);

  const csv = [headers, ...rows].map((row) => row.map(csvEscape).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "templo-astral-lecturas.csv";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);

  saveFeedback.textContent = "Se descargo un CSV con las lecturas guardadas en este navegador.";
}

function clearHistory() {
  if (!readings.length) {
    saveFeedback.textContent = "No hay historial que borrar.";
    return;
  }

  const confirmed = window.confirm(
    "Se borrara el historial guardado en este navegador. Esta accion no se puede deshacer."
  );

  if (!confirmed) {
    return;
  }

  readings = [];
  saveRecords();
  renderHistory();
  updateStorageStatus();
  saveFeedback.textContent = "Se borro el historial local de lecturas.";
}

async function renderReading(values, options = {}) {
  const topic = topicProfiles[values.topic];
  const state = stateProfiles[values.state];
  const intention = intentionProfiles[values.intention];
  const profile = buildBirthProfile(values);
  const card = pickBestMatch(cardDeck, values, profile);
  const baseChakra = pickBestMatch(chakraDeck, values, profile);
  const chakra = choosePersonalizedChakra(baseChakra, profile);
  const displayName = formatName(values.name) || "Alma";
  const intro = `${displayName}, tu lectura se enfoca en ${topic.label}.`;
  const profileIntro = profile.hasBirthData
    ? `Tu perfil base combina signo solar ${profile.sunSign || "por definir"} y numero de vida ${profile.lifePath || "intuitivo"}.`
    : "Con tu fecha de nacimiento la lectura podria sumar un perfil solar y numerologico mas fino.";
  const message =
    `${intro} ${buildQuestionMessage(values)} ${profileIntro} ${card.essence} ${state.current} ${intention.support}`;
  const currentText = `${topic.current} ${state.current}`;
  const blockText = `${state.block} ${topic.block}`;
  const pathText = `${intention.path} ${topic.path}`;
  const ritualText = `${card.ritual} ${intention.ritual}`;
  const solarDetail = buildSolarDetail(profile);
  const numberDetail = buildNumberDetail(profile);

  cardResult.innerHTML = `
    <p class="result-tag">Carta principal</p>
    <h3>${escapeHtml(card.name)}</h3>
    <p class="result-keyword">Palabra guia: ${escapeHtml(card.keyword)}</p>
    <p>${escapeHtml(message)}</p>
    <div class="insight-list">
      <article>
        <span>Momento actual</span>
        <strong>${escapeHtml(currentText)}</strong>
      </article>
      <article>
        <span>Bloqueo suave</span>
        <strong>${escapeHtml(blockText)}</strong>
      </article>
      <article>
        <span>Puerta abierta</span>
        <strong>${escapeHtml(pathText)}</strong>
      </article>
      <article>
        <span>Perfil solar</span>
        <strong>${escapeHtml(solarDetail)}</strong>
      </article>
      <article>
        <span>Numero guia</span>
        <strong>${escapeHtml(numberDetail)}</strong>
      </article>
    </div>
    <p class="result-note">${escapeHtml(ritualText)}</p>
  `;

  readingStatus.textContent = `${topic.label} / ${state.label}`;
  updateSpread(values);
  animatePanel(cardResult);

  if (options.syncChakra) {
    renderChakra(chakra, "Chakra recomendado");
  }

  const reading = {
    card,
    chakra,
    currentText,
    blockText,
    pathText,
    ritualText
  };

  const record = buildReadingRecord(values, reading, profile);
  persistReading(record);

  saveFeedback.textContent = getCloudUrl()
    ? "Lectura guardada en este navegador. Intentando sincronizar con Google Sheets."
    : "Lectura guardada en este navegador con perfil numerologico y solar incluido.";

  if (getCloudUrl()) {
    await syncRecord(record);
  }
}

readingForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const values = readFormValues();

  saveDraft(values);
  await renderReading(values, { syncChakra: true });
});

readingForm?.addEventListener("input", () => {
  saveDraft(readFormValues());
});

quickReadingButton?.addEventListener("click", async () => {
  const values = readFormValues();
  values.question = "";
  saveDraft(values);
  await renderReading(values, { syncChakra: true });
});

checkChakraButton?.addEventListener("click", () => {
  const values = readFormValues();
  const profile = buildBirthProfile(values);
  const baseChakra = pickBestMatch(chakraDeck, values, profile);
  const chakra = choosePersonalizedChakra(baseChakra, profile);
  renderChakra(chakra, "Chakra recomendado");
});

chakraButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const chakra = chakraDeck.find((item) => item.name === button.dataset.chakra);

    if (!chakra) {
      return;
    }

    renderChakra(chakra, "Chakra explorado");
  });
});

exportCsvButton?.addEventListener("click", exportReadingsToCsv);
clearHistoryButton?.addEventListener("click", clearHistory);

applyDraftToForm();
renderHistory();
updateStorageStatus();
highlightChakra("Corazon");
syncPendingReadings();
