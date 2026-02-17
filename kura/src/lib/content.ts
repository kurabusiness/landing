// ─── Site Config ────────────────────────────────────────────
// Instagram, email e WhatsApp vêm de env vars. Quando vazios, os botões são ocultados.
export const SITE = {
  name: "Kura",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kura.com.br",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
  instagramHandle: process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE ?? "@kura",
  instagramHint: "Conteúdo diário. Siga no Instagram.",
  youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "",
  youtubeHandle: process.env.NEXT_PUBLIC_YOUTUBE_HANDLE ?? "YouTube",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE ?? "",
} as const;

// ─── SEO (reuso em metadata, JsonLD, etc.) ──────────────────
// Description 150–160 chars para snippet ideal no Google
export const SEO = {
  siteName: "Kura",
  defaultTitle: "Kura | Negócios para médicos",
  defaultDescription:
    "Educação em negócios para médicos que querem viver nos próprios termos. O caminho pra liberdade e autonomia.",
  ogDescription: "Educação em negócios para médicos que querem viver nos próprios termos. O caminho pra liberdade e autonomia.",
} as const;

// Nav links (section ids)
export const navLinks = [
  { label: "A realidade", href: "#problem" },
  { label: "Manifesto", href: "#manifesto" },
  { label: "Pilares", href: "#pillars" },
  { label: "Diferencial", href: "#diferencial" },
  { label: "Faça parte", href: "#cta" },
  { label: "Dúvidas", href: "#faq" },
] as const;

// YouTube video ID for the manifesto video
// Set to null to hide the video
export const MANIFESTO_VIDEO_ID: string | null = null;

// ─── Hero ───────────────────────────────────────────────────
export const hero = {
  headline: "Doc, você não precisa de mais um plantão, nem de encontrar um serviço melhor.",
  sub: "Você precisa criar o seu negócio.",
  detail: "Conquiste o controle da sua vida, pratique medicina nos seus próprios termos e tenha um negócio lucrativo.",
  cta: "Começar a jornada",
};

// ─── Problem (Despertar de consciência) — BP v1 rascunho v2 ───
export const problem = [
  "Você estudou anos. Abriu mão de fim de semana, feriado, noite. Sacrificou tempo com a família. Fez tudo certo. E hoje? Vive de plantão em plantão. Sem CLT, sem previsibilidade, sem saber quanto entra mês que vem. A conta aperta e a saída é sempre a mesma: pegar mais um serviço.",
  "A faculdade te ensinou a ser médico. Não te ensinou a ser dono. Gestão, finanças, marketing, precificação. Nada disso entrou na grade. Seis anos cuidando de gente. Zero minutos cuidando do próprio negócio.",
  "E o mercado não espera. Centenas de médicos fazendo a mesma coisa, na mesma cidade, disputando o mesmo paciente. Sem saber como se diferenciar. Sem saber nem por onde começar.",
  "Quando você tenta sair desse ciclo, as coisas complicam. Abre uma clínica: sociedade mal estruturada, precificação errada, ponto longe. A agenda continua não sendo sua. E o tempo vai embora no trânsito e em reuniões que não levam a nada.",
  "Aquela liberdade que você imaginou quando escolheu medicina? Praticar nos seus próprios termos, ser soberano na profissão? Ficou pra depois. Sempre pra depois. Te dizem que isso é normal. Que \"faz parte\". Que todo mundo passa por isso no começo.",
  "Aí você abre o Instagram e vê aquele colega. Você sabe qual. Formou junto, ou até depois de você. Clinicamente, você sabe que é melhor. Estudou mais, viveu mais, atendeu mais. Mas ele tá lá: agenda cheia, consultando de casa, produzindo conteúdo, paciente vindo de tudo quanto é lugar.",
  "Você olha aquele vídeo e pensa: eu faria isso muito melhor. E faria mesmo. Só que ele aprendeu uma coisa que ninguém te ensinou: como transformar competência clínica em negócio. Ele não é melhor médico. Ele entendeu o jogo antes de você.",
  "E quando você procura ajuda pra sair dessa, só encontra coach genérico que nunca pisou num consultório e não entende suas dores. Ou médico charlatão que nunca construiu nada de verdade, mas tá bombando por conta da mídia. Nenhum dos dois tem o que você quer aprender. Ninguém te mostra o caminho de verdade.",
  "Não precisa ser assim. O caminho existe. Só ninguém te mostrou. A ideia é uma: o médico pode, e deve, ser dono do próprio negócio. É isso que muda tudo. É isso que liberta. A Kura te mostra como.",
];

// ─── Manifesto ──────────────────────────────────────────────
// Alinhado ao ICP (BP v1): médico 25-35, quer liberdade, autonomia, sair do plantão.
// Objetivo: "cara, é exatamente isso que eu preciso. preciso fazer parte dessa Kura."
export const manifesto = {
  label: "O Manifesto",
  opening: "Você merece mais.",
  openingBody: "Mais do que plantão. Mais do que trocar hora por dinheiro. Mais do que depender de estrutura que não é sua. Você escolheu medicina pra ter autonomia. Essa vida existe. Ela vem de construir seu negócio.",
  emailLabel: "Faça parte",
  emailCta: "Quero fazer parte",
  emailCtaLoading: "Entrando...",
  emailPlaceholder: "Seu e-mail",
  emailDisclaimer: "Gratuito. Sem spam.",
  closing: "A Kura existe pra isso. Mostrar o caminho. Dar a visão de negócio que a faculdade não deu. Provar que dá. Bem-vindo.",
  sections: [
    {
      declaration: "Plantão tem teto. Negócio não.",
      body: "Plantão paga por hora. Você para, a renda para. Seu negócio paga pelo que você sabe e construiu. Pela operação que roda sem você. É outro jogo. Ninguém te ensinou a jogar.",
    },
    {
      declaration: "Medicina nos seus termos.",
      body: "Seus pacientes. Sua agenda. Quanto cobrar. Onde atender. Tempo pra família sem pedir permissão. Não é luxo. É o mínimo pra quem estudou o que você estudou.",
    },
    {
      declaration: "Não precisa de operação grande. Precisa de negócio seu.",
      body: "Consultório, clínica, teleconsulta, produto digital. O formato é seu. O princípio não muda: estrutura enxuta, você no comando, sistemas fazendo o trabalho pesado. A internet deu pra um médico sozinho o alcance que antes exigia equipe, ponto caro e sócio. Dá pra começar pequeno. Crescer no seu ritmo. Fazer do seu jeito.",
    },
    {
      declaration: "É nisso que acreditamos.",
      body: "O médico brasileiro merece clareza de caminho. Construir negócio não é abandonar a medicina. É praticá-la de verdade, nos seus termos. As ferramentas existem. Falta alguém mostrar como juntar as peças.",
    },
  ],
};

// ─── Pillars ────────────────────────────────────────────────
export const pillars = {
  label: "Pilares",
  title: "O\u00A0que acreditamos.",
  items: [
    {
      number: "01",
      title: "Posicionamento",
      body: "Se destacar no meio de centenas. Encontrar seu nicho. Construir a base do seu negócio com uma marca que as pessoas reconhecem.",
    },
    {
      number: "02",
      title: "Presença Digital",
      body: "Escolher uma plataforma. Criar conteúdo que atrai. Construir audiência pro seu negócio. Capturar atenção na internet.",
    },
    {
      number: "03",
      title: "Produtos Digitais",
      body: "Empacotar seu conhecimento em produto. Cursos, mentorias, programas online. Seu negócio gerando renda sem depender da sua presença.",
    },
    {
      number: "04",
      title: "Marketing e Vendas",
      body: "Atrair pacientes e clientes pro seu negócio pela internet. Encher sua agenda. Construir funil. Vender sem parecer vendedor.",
    },
    {
      number: "05",
      title: "Automação e sistemas",
      body: "O trabalho de dez feito por uma pessoa. Seu negócio rodando com processos que funcionam sem você estar presente.",
    },
    {
      number: "06",
      title: "Gestão Financeira",
      body: "PJ, impostos, investimento, patrimônio. A base do seu negócio que ninguém ensinou. Sem isso, o negócio não fica de pé.",
    },
  ],
};

// ─── Nosso Diferencial ───────────────────────────────────────
export const transformation = {
  title: "Nosso diferencial.",
  rows: [
    {
      without: "Ninguém sabe quem você é. Centenas de médicos fazendo o mesmo.",
      with: "Posicionamento claro. Uma marca que as pessoas reconhecem e em quem confiam.",
    },
    {
      without: "Plantão atrás de plantão. Quando você para, a renda para.",
      with: "Renda que escala. Seu conhecimento vira produto e trabalha por você.",
    },
    {
      without: "Invisível na internet. Zero audiência.",
      with: "Presença digital que atrai. Audiência que cresce com o tempo.",
    },
    {
      without: "Conhecimento preso na consulta. Uma hora, um paciente.",
      with: "Conhecimento empacotado. Um produto, muitos clientes.",
    },
    {
      without: "PJ sem saber. Imposto, investimento, ninguém te ensinou.",
      with: "Gestão financeira clara. Negócio que fica de pé.",
    },
    {
      without: "Medo de fazer marketing. E o CFM?",
      with: "Marketing dentro da lei. A Resolução 2.336 liberou o caminho.",
    },
  ],
};

// ─── About ──────────────────────────────────────────────────
export const about = {
  label: "A Kura",
  title: "Por que isso existe.",
  body: "Médicos brilhantes presos em plantão. Fazendo medicina nos termos de outro. A Kura existe porque ninguém te ensinou a se posicionar, construir seu negócio online, transformar conhecimento em produto. Medicina nos seus próprios termos.",
  tagline: "O conhecimento que muda vidas não deveria ter preço de entrada.",
};

// ─── FAQ ────────────────────────────────────────────────────
// Cobre os principais pontos do BP sem revelar a estratégia (escada, preços, produtos futuros).
export const faq = [
  {
    question: "Isso é gratuito mesmo?",
    answer:
      "Sim. O conteúdo por email é gratuito. A Kura está construindo um movimento de médicos que querem construir seu negócio. Quem entra agora participa do início.",
  },
  {
    question: "Isso é curso de guru?",
    answer:
      "Não. Sem promessa de ficar rico em 30 dias. Sem fórmula mágica. Método e curadoria pra quem quer construir negócio de verdade. O que a faculdade não te ensinou.",
  },
  {
    question: "Posso fazer marketing sem ferir o CFM?",
    answer:
      "Pode. A Resolução 2.336/2023 liberou. Todo conteúdo da Kura respeita e ensina dentro da legalidade. Marketing ético é um dos pilares.",
  },
  {
    question: "O que eu vou receber?",
    answer:
      "Conteúdo por email. Quem entra agora participa do início. O que vier, você recebe primeiro. Sem compromisso de frequência.",
  },
  {
    question: "Preciso de produto digital pra começar?",
    answer:
      "Não. Você começa se posicionando e construindo presença. Consultório, clínica, teleconsulta ou produto digital. O formato depende de você. O método mostra o caminho.",
  },
  {
    question: "Não tenho tempo pra mais uma coisa.",
    answer:
      "O conteúdo vem pra você. Comece pelo que faz sentido. O caminho é gradual, não aposta. Posicionamento e presença primeiro. O resto quando fizer sentido.",
  },
  {
    question: "A faculdade não me ensinou isso.",
    answer:
      "Exatamente. Gestão, finanças, marketing, precificação. Nada disso entrou na grade. A Kura ensina o que faltou. O que você precisa pra construir seu negócio.",
  },
  {
    question: "Quem é a Kura?",
    answer:
      "Educação em negócios feita pra médicos. O método foi construído por quem entende medicina e negócios. A marca fala por si. O conteúdo entrega.",
  },
];

// ─── CTA Final ──────────────────────────────────────────────
export const ctaFinal = {
  headline: "Cadastre seu e-mail.",
  subheadline: "Conteúdos exclusivos e benefícios de early adopter.",
  buttonText: "Participar",
  buttonTextLoading: "Entrando...",
  placeholder: "Seu e-mail",
  disclaimer: "Gratuito. Sem spam.",
  benefitsTitle: "",
  benefits: [],
};

// ─── O que você recebe (legado, usado em Manifesto) ─────────
export const whatYouReceive = [
  "Kit de Ferramentas para Médicos Empreendedores",
  "Guia de Precificação para Consultórios",
  "Checklist: Como Montar Seu Consultório do Zero",
  "As 7 Automações que Todo Médico Deveria Ter",
  "Conteúdo por email. Nossa curadoria. Para começar.",
];

// ─── Como Funciona (Flywheel) ────────────────────────────────
export const comoFunciona = {
  label: "Como funciona",
  title: "A jornada.",
  steps: [
    { number: "01", title: "Conteúdo gratuito", desc: "Atrai o médico que ainda não sabe que tem um problema." },
    { number: "02", title: "Captura", desc: "Material de captação → email → follow. Entra no funil." },
    { number: "03", title: "Nutrição", desc: "Email + IG + YouTube. Consistência e qualidade constroem confiança." },
    { number: "04", title: "Primeiro passo", desc: "Você começa. Recebe o manifesto, os materiais e o que vem depois." },
  ],
};
