// Todo o texto do site fica aqui. Edite este arquivo e faça um novo deploy.
// Regra: nada de nomes de colaboradores, endereços internos ou dados pessoais.

export const pessoa = {
  nome: "João Vitor",
  nomeCompleto: "João Vitor dos Santos Alves",
  papel: "Engenheiro de IA Júnior",
  cidade: "São Paulo, SP",
  frase: "IA aplicada, automação e dados para RH e Departamento Pessoal.",
  sobre: [
    "Estagiário de dados e IA com experiência em automações e documentação de processos, Power BI, RAG, Power Automate, n8n, integrações de APIs e cloud. Hoje construo, na Rede Ápice de Educação, os sistemas que o RH e o Departamento Pessoal usam no dia a dia.",
    "Tenho base em JavaScript, Python, lógica de programação, SQL, arquitetura e engenharia de software, Scrum e governança de dados. Curso Análise e Desenvolvimento de Sistemas na UFBRA e o Técnico em Inteligência Artificial no Senac. Leio documentação técnica em inglês.",
  ],
  contatos: {
    email: "joao.vitor111002@gmail.com",
    whatsapp: "https://wa.me/5511998983346",
    linkedin: "https://linkedin.com/in/jvs-alves",
    github: "https://github.com/JoaoVitor1110",
    curriculo: "/Joao_Vitor_Alves_CV.pdf",
  },
};

// Matriz do "Sobre mim": cada habilidade ligada aos projetos onde foi usada.
export const colunasMatriz = [
  "Portal G&G",
  "Avisos à TI",
  "Agente do DP",
  "Benefícios e folha",
  "Portal TGA",
  "Clientes freelancer",
  "Senac",
];

export const matriz: { habilidade: string; usos: number[] }[] = [
  { habilidade: "Python (pandas)", usos: [1, 0, 0, 1, 1, 0, 1] },
  { habilidade: "TypeScript", usos: [0, 0, 1, 0, 1, 0, 0] },
  { habilidade: "React, Vite, Node.js", usos: [1, 1, 0, 0, 0, 0, 0] },
  { habilidade: "SQL: MySQL, PostgreSQL, SQLite", usos: [1, 0, 0, 1, 1, 0, 1] },
  { habilidade: "LLMs", usos: [0, 0, 1, 0, 1, 0, 1] },
  { habilidade: "RAG", usos: [0, 0, 1, 0, 0, 0, 0] },
  { habilidade: "Avaliação de respostas", usos: [0, 0, 1, 0, 0, 0, 0] },
  { habilidade: "Copilot Studio", usos: [0, 0, 1, 0, 0, 0, 0] },
  { habilidade: "Azure e GitHub Actions", usos: [0, 0, 1, 0, 0, 0, 0] },
  { habilidade: "Power Automate e Entra ID", usos: [0, 1, 0, 0, 0, 0, 0] },
  { habilidade: "Integração de APIs", usos: [1, 1, 1, 0, 0, 1, 0] },
  { habilidade: "n8n", usos: [0, 0, 0, 0, 0, 1, 0] },
  { habilidade: "Power BI", usos: [0, 0, 0, 0, 0, 1, 0] },
  { habilidade: "Ollama", usos: [0, 0, 0, 0, 0, 0, 1] },
];

export const emFormacao = "Chroma e Azure AI, no Técnico em IA do Senac.";

export type Imagem = { src: string; alt: string; legenda: string; largura: number; altura: number };

export type TrabalhoApice = {
  titulo: string;
  texto: string;
  stack: string;
  imagem?: Imagem;
  fluxo?: boolean; // usa o painel ilustrativo de avisos à TI
};

export const apice = {
  periodo: "Rede Ápice de Educação · desde agosto de 2026",
  trabalhos: [
    {
      titulo: "Portal de Gente & Gestão",
      texto:
        "O RH controlava tudo em 15 planilhas e levava 2 semanas para validar os dados e montar a apresentação de resultados. Hoje o portal é a base única de 544 colaboradores de 11 empresas: o DP opera cadastros, férias e absenteísmo só pelo sistema, e a diretoria vê turnover, admissões e desligamentos direto no painel.",
      stack: "React · Vite · Node.js · MySQL · ETL em Python · API da Sólides · mais de 800 testes",
      imagem: {
        src: "/prints/portal-gente-gestao.webp",
        alt: "Tela de headcount do Portal de Gente & Gestão, com indicadores e quadro por unidade",
        legenda: "Tela de headcount. Os nomes das unidades foram trocados para o portfólio.",
        largura: 1581,
        altura: 760,
      },
    },
    {
      titulo: "Admissão e desligamento ligados à TI",
      texto:
        "A TI só sabia das admissões pelo relatório semanal do DP, que às vezes chegava atrasado. Agora o portal abre o chamado no GLPI sozinho, deixa as credenciais prontas no Entra ID e, no desligamento, avisa no dia seguinte para cortar os acessos.",
      stack: "GLPI · Entra ID · Power Automate · Teams · em produção",
      fluxo: true,
    },
    {
      titulo: "Agente de IA do Departamento Pessoal",
      texto:
        "O DP recebe cerca de 880 pedidos por mês, muitos já respondidos nas políticas internas. Criei um assistente na Azure com RAG sobre essas políticas, que encaminha para uma pessoa tudo que envolve dado pessoal. Testado por 5 usuários, evoluiu para um agente no Copilot Studio que consulta ponto e faltas na Sólides e passa por uma bateria de testes de qualidade das respostas. Em aprovação pela diretoria.",
      stack: "Azure · TypeScript · RAG · Copilot Studio · API da Sólides · Trello",
      imagem: {
        src: "/prints/agente-dp.webp",
        alt: "Avaliação do Assistente DP no Copilot Studio com casos de teste sobre ponto e atestado",
        legenda: "Avaliação do agente no Copilot Studio: 10 casos de teste medindo a qualidade das respostas.",
        largura: 1920,
        altura: 890,
      },
    },
  ] as TrabalhoApice[],
  extras: [
    {
      titulo: "Controle de benefícios",
      texto:
        "Em uso pela coordenação: os benefícios são lançados no portal e saem prontos a planilha da diretoria e o layout do Omie.",
    },
    {
      titulo: "Assistente de folha",
      texto:
        "Em validação: centraliza folha e pagamentos e gera o arquivo do Starsoft. Meta de fechar a folha em 3 a 5 dias, contra cerca de 2,5 semanas hoje.",
    },
  ],
};

export const fluxoTI = [
  { etiqueta: "ADMISSÃO", cor: "menta", texto: "Chamado aberto no GLPI 2 dias úteis antes do início" },
  { etiqueta: "CREDENCIAIS", cor: "lavanda", texto: "Dados pré-cadastrados no Entra ID via Power Automate" },
  { etiqueta: "DESLIGAM.", cor: "ambar", texto: "TI avisada em D+1 para desativar os acessos" },
];

export const tga = {
  periodo: "Freelancer em automação · fevereiro de 2025 a agosto de 2026",
  titulo: "Portal TGA Empregos",
  texto:
    "Sistema de recrutamento e DP de uma agência de empregos: vagas, Kanban de candidaturas, busca de candidatos compatíveis com IA, inclusive de currículos escaneados, fichas de admissão e um modo TV para o painel da equipe. 71 entregas em dois meses e meio, em uso diário.",
  stack: "Next.js · FastAPI · PostgreSQL · IA com OCR",
  link: "https://portal.tgaempregos.com.br",
  imagem: {
    src: "/prints/portal-tga.webp",
    alt: "Dashboard do Portal TGA Empregos com fluxo de fechamentos e funil de candidaturas",
    legenda: "Dashboard da equipe: fechamentos, contratações e funil de candidaturas.",
    largura: 1582,
    altura: 774,
  } as Imagem,
};

export type Projeto = {
  slug: string;
  antigo?: string; // endereço do site WordPress, redirecionado para o novo
  titulo: string;
  curto: string; // texto do cartão na página inicial
  cliente: string;
  problema: string;
  solucao: string;
  resultado: string;
  stack: string[];
};

export const projetos: Projeto[] = [
  {
    slug: "crm-agencia-de-empregos",
    antigo: "case-tga",
    titulo: "Automação de CRM — Agência de Empregos",
    curto: "Atendimento migrado para a API oficial da Meta, sem risco de bloqueio, com triagem automática de candidatos.",
    cliente: "Agência de empregos",
    problema:
      "O atendimento rodava numa integração de WhatsApp não homologada, com risco de bloqueio da conta, e a triagem de candidatos era feita à mão.",
    solucao: "Migrei o atendimento para a API oficial da Meta e montei a triagem por árvore de decisão integrada ao CRM.",
    resultado: "O risco de bloqueio acabou, a triagem manual saiu do processo e o funil de contratações passou a ser rastreável.",
    stack: ["API oficial da Meta", "CRM", "n8n"],
  },
  {
    slug: "funil-de-captacao",
    antigo: "case-angela",
    titulo: "Funil de Captação Automatizado",
    curto: "Landing page, CRM e e-mails com n8n para uma terapeuta infoprodutora. Cerca de US$ 2.000 no lançamento.",
    cliente: "Terapeuta e infoprodutora",
    problema: "Captar e nutrir leads exigia trabalho manual a cada lançamento.",
    solucao:
      "O lead sai da landing page direto para o CRM, é higienizado e segmentado, e recebe a sequência de e-mails. Há extensão para nutrição no Instagram.",
    resultado: "Cerca de US$ 2.000 de faturamento no lançamento.",
    stack: ["Landing page", "CRM", "E-mail marketing", "n8n"],
  },
  {
    slug: "pre-atendimento-clinica",
    titulo: "Chatbot de Pré-atendimento — Clínica de Fisioterapia",
    curto: "Recepcionista virtual que coleta os dados, responde dúvidas comuns e passa a conversa triada ao atendente.",
    cliente: "Clínica de fisioterapia",
    problema: "A triagem na recepção era lenta e as mesmas perguntas se repetiam o dia todo.",
    solucao:
      "Chatbot que coleta o nome, identifica a necessidade, responde dúvidas comuns e passa o contexto organizado para o atendente.",
    resultado: "O paciente entra sem atrito e a equipe recebe a conversa já triada.",
    stack: ["Chatbot", "IA conversacional"],
  },
  {
    slug: "orcamento-grafica",
    antigo: "case-grafica",
    titulo: "Pré-atendimento com Orçamento — Gráfica",
    curto: "Qualifica o cliente, coleta o briefing e gera o orçamento antes de chegar ao comercial.",
    cliente: "Gráfica",
    problema: "O comercial perdia tempo respondendo as mesmas perguntas antes de cada orçamento.",
    solucao: "Fluxo de conversa que qualifica o cliente, coleta o briefing e gera o orçamento.",
    resultado: "Resposta mais rápida ao cliente e fim das perguntas repetidas para a equipe.",
    stack: ["Chatbot", "Qualificação de leads"],
  },
  {
    slug: "nps-e-reputacao",
    antigo: "case-nps",
    titulo: "NPS com Redirecionamento para o Google",
    curto: "Cliente satisfeito recebe o link para avaliar no Google sem ninguém precisar pedir.",
    cliente: "Negócio local",
    problema: "Clientes satisfeitos raramente deixavam avaliação pública.",
    solucao: "Depois do atendimento, um fluxo coleta a nota. Quem avalia bem recebe o link para avaliar no Google.",
    resultado: "A satisfação vira reputação on-line sem ninguém precisar pedir.",
    stack: ["Manychat", "NPS"],
  },
  {
    slug: "dashboard-financeiro",
    antigo: "case-financeiro",
    titulo: "Dashboard de Decisão Financeira — Power BI",
    curto: "Painel executivo de R$ 94,6 milhões em recebimentos e 2.725 transações, com filtros por região.",
    cliente: "Projeto de BI",
    problema: "A verba mensal por região era distribuída sem uma visão clara de resultado.",
    solucao: "Painel executivo em Power BI com waterfall da variação de lucro e filtros por região.",
    resultado:
      "Visão de R$ 94,6 milhões em recebimentos e 2.725 transações, com margem de 37,58% e 44% das transações via Pix.",
    stack: ["Power BI", "DAX"],
  },
];

export const senac = {
  periodo: "Técnico em IA · Senac",
  titulo: "Consulta a banco em linguagem natural",
  texto:
    "API que transforma perguntas em SQL a partir do schema do banco, executa em modo somente leitura e mostra o resultado num painel web, com um modelo rodando localmente no Ollama.",
  stack: "Python · Flask · Ollama · SQLite",
  link: "https://github.com/JoaoVitor1110/TIA-UC10-SENAC",
};
