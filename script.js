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

function animatePanel(panel) {
  if (!panel) {
    return;
  }

  panel.classList.remove("flash");
  void panel.offsetWidth;
  panel.classList.add("flash");
}

function escapeHtml(value) {
  return value
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
    .slice(0, 2)
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

function pickBestMatch(collection, values) {
  const scored = collection.map((item, index) => ({
    item,
    index,
    score: scoreMatch(item, values)
  }));

  const bestScore = Math.max(...scored.map((entry) => entry.score));
  const bestEntries = scored.filter((entry) => entry.score === bestScore);
  const seed = hashString(
    `${values.topic}|${values.state}|${values.intention}|${values.question}|${values.name}`
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
    question: String(formData.get("question") || "").trim()
  };
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

function buildQuestionLine(values) {
  if (!values.question) {
    return "No hace falta contarlo todo; la energia de tu consulta ya ofrece suficiente informacion para orientar la lectura.";
  }

  return `Tu pregunta principal dice: "${clampText(values.question, 140)}". Esa frase marca el centro de la lectura.`;
}

function renderReading(values, options = {}) {
  const topic = topicProfiles[values.topic];
  const state = stateProfiles[values.state];
  const intention = intentionProfiles[values.intention];
  const card = pickBestMatch(cardDeck, values);
  const chakra = pickBestMatch(chakraDeck, values);
  const displayName = formatName(values.name) || "Alma";
  const intro = `${displayName}, tu lectura se enfoca en ${topic.label}.`;
  const message =
    `${intro} ${buildQuestionLine(values)} ${card.essence} ${state.current} ${intention.support}`;
  const currentText = `${topic.current} ${state.current}`;
  const blockText = `${state.block} ${topic.block}`;
  const pathText = `${intention.path} ${topic.path}`;
  const ritualText = `${card.ritual} ${intention.ritual}`;

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
    </div>
    <p class="result-note">${escapeHtml(ritualText)}</p>
  `;

  readingStatus.textContent = `${topic.label} / ${state.label}`;
  updateSpread(values);
  animatePanel(cardResult);

  if (options.syncChakra) {
    renderChakra(chakra, "Chakra recomendado");
  }
}

readingForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  renderReading(readFormValues(), { syncChakra: true });
});

quickReadingButton?.addEventListener("click", () => {
  const values = readFormValues();
  values.question = "";
  renderReading(values, { syncChakra: true });
});

checkChakraButton?.addEventListener("click", () => {
  const chakra = pickBestMatch(chakraDeck, readFormValues());
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

highlightChakra("Corazon");
