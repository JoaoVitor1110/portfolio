// Todo o texto do site fica aqui. Edite este arquivo e faça um novo deploy.

export const pessoa = {
  nome: "João Vitor Alves",
  papel: "Estagiário de dados e IA",
  cidade: "São Paulo, SP",
  frase:
    "Construo agentes de IA, ETLs e automações que tiram trabalho repetido das pessoas, com cuidado com dados pessoais.",
  sobre: [
    "Hoje sou estagiário de People Analytics, Dados e Projetos na Rede Ápice de Educação. Desenvolvo o Portal de Gente & Gestão, o agente de IA do Departamento Pessoal e as integrações com Sólides, GLPI, Entra ID, Starsoft e Omie.",
    "Curso Análise e Desenvolvimento de Sistemas na UFBRA (conclusão em julho de 2028) e o Técnico em Inteligência Artificial no Senac.",
  ],
  contatos: {
    email: "joao.vitor111002@gmail.com",
    whatsapp: "https://wa.me/5511998983346",
    linkedin: "https://linkedin.com/in/jvs-alves",
    github: "https://github.com/JoaoVitor1110",
    curriculo: "/Joao_Vitor_Alves_CV.pdf",
  },
};

export type Trabalho = {
  titulo: string;
  resumo: string;
  pontos: string[];
  stack: string[];
};

// Trabalho atual. Sem nomes de pessoas, endereços internos ou dados de colaboradores.
export const trabalhoAtual: Trabalho[] = [
  {
    titulo: "Portal de Gente & Gestão",
    resumo:
      "Sistema usado pela diretoria que reúne RH, DHO e Departamento Pessoal num só lugar.",
    pontos: [
      "Indicadores de headcount, turnover, recrutamento, DHO e DP, com filtros por unidade e período.",
      "Área de cadastros do RH para admissões, desligamentos, férias, afastamentos e absenteísmo.",
      "ETL em Python que lê a API da Sólides, os relatórios da folha e o SharePoint pelo Microsoft Graph, valida tudo e grava no MySQL três vezes ao dia.",
      "Mais de 800 testes automatizados. Na análise de 1.409 ocorrências de absenteísmo, mostrou que a maior parte vinha de falhas no controle de jornada.",
    ],
    stack: ["React", "Vite", "Node.js", "MySQL", "Python", "pandas", "API da Sólides"],
  },
  {
    titulo: "Agente de IA do Departamento Pessoal",
    resumo:
      "Atende os colaboradores pelo Teams: responde o que dá para responder sozinho e transforma o resto em chamado.",
    pontos: [
      "Primeira versão em TypeScript com o Microsoft Teams SDK, publicada na Azure com deploy automático pelo GitHub Actions.",
      "RAG sobre as políticas internas do DP, com regras fixas que mandam para atendimento humano tudo que envolve dado pessoal.",
      "Abre o chamado no Trello, avisa o canal do DP e confere com IA as fichas assinadas que o colaborador envia.",
      "Evoluiu para um agente no Copilot Studio que valida o usuário pelo Teams e consulta ponto e faltas pela API da Sólides. Em aprovação pela diretoria.",
    ],
    stack: ["TypeScript", "Teams SDK", "Azure", "GitHub Actions", "Copilot Studio", "API da Sólides"],
  },
  {
    titulo: "Admissão e desligamento integrados à TI",
    resumo:
      "Quando o DP cadastra uma admissão ou um desligamento no portal, a TI é avisada sozinha e as credenciais já ficam encaminhadas.",
    pontos: [
      "Dois dias úteis antes da admissão, o portal abre um chamado no GLPI pela API do sistema de chamados.",
      "Pelo Power Automate, os dados ficam pré-cadastrados para a criação das credenciais no Entra ID.",
      "No desligamento, avisa a TI em D+1 para desativar os acessos. Mudança de data ou cancelamento também geram aviso.",
    ],
    stack: ["GLPI", "Entra ID", "Power Automate", "Node.js"],
  },
  {
    titulo: "Assistente de folha",
    resumo:
      "Em desenvolvimento: as informações de folha entram num lugar só e saem prontas para os heads e para o sistema de folha.",
    pontos: [
      "Gera a planilha de controle de folha e pagamentos para os heads dos setores.",
      "Gera o layout de importação do Starsoft.",
      "Meta: fechar a folha em 3 a 5 dias, contra cerca de duas semanas e meia hoje.",
    ],
    stack: ["Python", "MySQL", "Starsoft"],
  },
  {
    titulo: "Controle de benefícios do DP",
    resumo: "Os benefícios são lançados no portal e o resto sai pronto.",
    pontos: [
      "Gera a planilha de benefícios para a diretoria.",
      "Gera o layout para o sistema de despesas (Omie).",
      "Faz parte das automações que apoiam os OKRs do Departamento Pessoal.",
    ],
    stack: ["Python", "MySQL", "Omie"],
  },
];

// Diagrama da página inicial: o que entra e o que sai do portal.
export const fluxoChamados = {
  entradas: ["API da Sólides", "Cadastros do DP", "Folha e benefícios"],
  centro: "Portal de Gente & Gestão",
  saidas: ["Indicadores da diretoria", "GLPI e Entra ID", "Starsoft e Omie"],
};

export type Projeto = {
  slug: string;
  antigo?: string; // endereço do site WordPress, redirecionado para o novo
  titulo: string;
  cliente: string;
  problema: string;
  solucao: string;
  resultado: string;
  stack: string[];
};

export const projetos: Projeto[] = [
  {
    slug: "portal-tga-empregos",
    titulo: "Portal TGA Empregos: recrutamento e DP de uma agência de empregos",
    cliente: "Agência de empregos",
    problema:
      "A agência controlava vagas, candidatos, admissões e entrevistas em planilhas e conversas soltas, sem indicadores por recrutadora.",
    solucao:
      "Sistema completo em produção: vagas, Kanban de candidaturas, busca de candidatos compatíveis com IA (inclusive currículos escaneados, via OCR), fichas de admissão e de entrevistas com exportação em PDF e Word, permissões por perfil, dashboard por recrutadora e modo TV para o painel da equipe. Deploy automático a cada entrega.",
    resultado:
      "71 entregas em dois meses e meio, com o sistema em uso diário pela equipe. Está no ar em portal.tgaempregos.com.br.",
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "IA com OCR"],
  },
  {
    slug: "crm-agencia-de-empregos",
    antigo: "case-tga",
    titulo: "CRM de uma agência de empregos na API oficial da Meta",
    cliente: "Agência de empregos",
    problema:
      "O atendimento rodava numa integração de WhatsApp não homologada, com risco de bloqueio da conta, e a triagem de candidatos era feita à mão.",
    solucao:
      "Migrei o atendimento para a API oficial da Meta e montei a triagem por árvore de decisão integrada ao CRM.",
    resultado:
      "O risco de bloqueio acabou, a triagem manual saiu do processo e o funil de contratações passou a ser rastreável.",
    stack: ["API oficial da Meta", "CRM", "n8n"],
  },
  {
    slug: "funil-de-captacao",
    antigo: "case-angela",
    titulo: "Funil de captação automatizado",
    cliente: "Terapeuta e infoprodutora",
    problema: "Captar e nutrir leads exigia trabalho manual a cada lançamento.",
    solucao:
      "O lead sai da landing page direto para o CRM, é higienizado e segmentado, e recebe a sequência de e-mails. Há extensão para nutrição no Instagram.",
    resultado: "Cerca de US$ 2.000 de faturamento no lançamento.",
    stack: ["Landing page", "CRM", "E-mail marketing", "n8n"],
  },
  {
    slug: "pre-atendimento-clinica",
    titulo: "Recepcionista virtual de uma clínica de fisioterapia",
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
    titulo: "Pré-atendimento com orçamento automático para uma gráfica",
    cliente: "Gráfica",
    problema: "O comercial perdia tempo respondendo as mesmas perguntas antes de cada orçamento.",
    solucao: "Fluxo de conversa que qualifica o cliente, coleta o briefing e gera o orçamento.",
    resultado: "Resposta mais rápida ao cliente e fim das perguntas repetidas para a equipe.",
    stack: ["Chatbot", "Qualificação de leads"],
  },
  {
    slug: "nps-e-reputacao",
    antigo: "case-nps",
    titulo: "NPS que leva clientes satisfeitos à avaliação no Google",
    cliente: "Negócio local",
    problema: "Clientes satisfeitos raramente deixavam avaliação pública.",
    solucao:
      "Depois do atendimento, um fluxo coleta a nota. Quem avalia bem recebe o link para avaliar no Google.",
    resultado: "A satisfação vira reputação on-line sem ninguém precisar pedir.",
    stack: ["Manychat", "NPS"],
  },
  {
    slug: "dashboard-financeiro",
    antigo: "case-financeiro",
    titulo: "Dashboard de decisão financeira",
    cliente: "Projeto de BI",
    problema: "A verba mensal por região era distribuída sem uma visão clara de resultado.",
    solucao:
      "Painel executivo em Power BI com waterfall da variação de lucro e filtros por região.",
    resultado:
      "Visão de R$ 94,6 milhões em recebimentos e 2.725 transações, com margem de 37,58% e 44% das transações via Pix.",
    stack: ["Power BI", "DAX"],
  },
];

export const projetoPessoal = {
  titulo: "Consulta a banco em linguagem natural (Técnico em IA, Senac)",
  descricao:
    "API que transforma perguntas em SQL a partir do schema do banco, executa em modo somente leitura e mostra o resultado num painel web, com um modelo rodando localmente no Ollama.",
  stack: ["Python", "Flask", "Ollama", "SQLite"],
};

export const competencias: { grupo: string; itens: string[] }[] = [
  {
    grupo: "IA aplicada",
    itens: [
      "LLMs",
      "RAG com embeddings e busca híbrida",
      "Agentes com tool calling",
      "MCP",
      "Saída estruturada",
      "Avaliação de respostas",
      "Ollama",
    ],
  },
  {
    grupo: "Microsoft",
    itens: ["Copilot Studio", "Azure", "Power Automate", "Power BI", "SharePoint", "Graph", "Entra ID"],
  },
  {
    grupo: "Código e dados",
    itens: ["Python", "pandas", "TypeScript", "React", "Vite", "Node.js", "FastAPI", "SQL", "MySQL", "PostgreSQL", "Next.js", "Docker", "GitHub Actions"],
  },
  {
    grupo: "Automação",
    itens: ["n8n", "APIs REST", "GLPI", "API da Meta", "CRM"],
  },
];

export const formacao = [
  { curso: "Análise e Desenvolvimento de Sistemas", onde: "UFBRA", quando: "2026 a 2028" },
  { curso: "Técnico em Inteligência Artificial", onde: "Senac Lapa Tito", quando: "2026 a 2027" },
];
