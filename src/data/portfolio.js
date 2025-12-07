export const personalInfo = {
  name: 'Arthur Lanznaster',
  role: 'Desenvolvedor Frontend',
  location: 'Joinville, Santa Catarina - Brasil',
  email: 'arthurlanznaster@gmail.com',
  description: 'Estudante do 2º ano de Informática para Internet no IFC Araquari. Especializado em Vue.js, desenvolvimento frontend e backend com Python/Django.',
  social: {
    github: 'https://github.com/arthurlanz',
    linkedin: 'https://www.linkedin.com/in/arthur-lanznaster-0546532b8/',
    instagram: 'https://www.instagram.com/arthurlanz_'
  }
}

export const skills = {
  frontend: [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'Vue.js', level: 85 }
  ],
  backend: [
    { name: 'Python', level: 70 },
    { name: 'Django', level: 65 },
    { name: 'Node.js', level: 60 },
    { name: 'MySQL', level: 65 }
  ],
  tools: [
    { name: 'Git & GitHub', level: 85 },
    { name: 'Figma', level: 65 },
    { name: 'VSCode', level: 90 },
    { name: 'Vite', level: 75 }
  ]
}

export const projects = [
  {
    id: 1,
    title: 'Join-Ville',
    description: 'Plataforma web desenvolvida para o Hackaton do IFC com o objetivo de reunir, avaliar e divulgar eventos culturais de Joinville. Sistema completo com cadastro de empresas via CNPJ, gerenciamento de eventos e filtros avançados.',
    category: 'Fullstack',
    year: '2025',
    tech: ['Vue.js', 'JavaScript', 'CSS3', 'Django', 'Python', 'SQLite', 'Figma'],
    github: 'https://github.com/Equipe-Hackaton/Join-ville',
    link: 'https://join-ville-dusky.vercel.app/',
    featured: true,
    img: '/images/joinville.png'
  },
  {
    id: 2,
    title: 'MetFlix',
    description: 'Plataforma de streaming completa desenvolvida do zero. Sistema de autenticação, backend robusto e frontend moderno. Projeto comercial com gestão de usuários, catálogo de filmes e interface responsiva.',
    category: 'Fullstack',
    year: '2025',
    tech: ['Vue.js', 'Node.js', 'Express', 'MySQL', 'JWT', 'API REST'],
    github: 'https://github.com/Empresa-MetFlix/Metflix-frontend',
    link: 'https://metflix-frontend-pi.vercel.app/',
    featured: true,
    img: '/images/metflix.png'
  },
  {
    id: 3,
    title: 'Sede do Medo',
    description: 'Plataforma de streaming especializada em filmes de terror desenvolvida com Vue.js e API TMDB. Interface moderna e responsiva com sistema de busca avançada, filtros por gênero, avaliações e detalhes completos dos filmes.',
    category: 'Frontend',
    year: '2025',
    tech: ['Vue.js', 'JavaScript', 'CSS3', 'Axios', 'TMDB API', 'Vite'],
    github: 'https://github.com/SEDEDOMEDO/ProjetoFinal-SededoMedo',
    link: 'https://sededomedo.vercel.app',
    featured: true,
    img: '/images/sededomedo.png'
  },
  {
    id: 4,
    title: 'Artelie',
    description: 'Projeto comercial de refatoração completa do frontend. Modernização da interface, melhoria da experiência do usuário, implementação de novas funcionalidades e integração com backend existente.',
    category: 'Frontend',
    year: '2025',
    tech: ['Vue.js', 'JavaScript', 'CSS3', 'API REST', 'Axios'],
    github: 'https://github.com/Artelie-PI/Artelie-FrontEnd',
    link: '#',
    featured: false,
    img: '/images/artelie.png'
  },
  {
    id: 5,
    title: 'Tutorial TMDB',
    description: 'Projeto educacional progressivo para aprendizado de APIs e integração com serviços externos. Implementação completa de busca, exibição e filtros usando a API The Movie Database.',
    category: 'Frontend',
    year: '2025',
    tech: ['Vue.js', 'Axios', 'TMDB API', 'Vite', 'CSS3'],
    github: 'https://github.com/arthurlanz/tutorial-tmdb',
    link: 'https://tutorial-tmdb-wheat-sigma.vercel.app/',
    featured: false,
    img: '/images/tutorialtmdb.png'
  },
  {
    id: 6,
    title: 'Nutriverso',
    description: 'Primeiro projeto desenvolvido em grupo focado em saúde e nutrição. Plataforma web com informações nutricionais, calculadora de IMC e dicas de alimentação saudável.',
    category: 'Frontend',
    year: '2024',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/arthurlanz/nutriverso_pi',
    link: '#',
    featured: false,
    img: '/images/nutriverso.png'
  }
]

export const education = {
  institution: 'Instituto Federal Catarinense',
  campus: 'Campus Araquari',
  course: 'Técnico em Informática para Internet',
  status: 'Cursando - 2º Ano',
  period: '2024 - 2026',
  description: 'Curso técnico integrado ao ensino médio com foco em desenvolvimento web full-stack, programação, banco de dados, design de interfaces e infraestrutura de redes. Experiência prática através de projetos reais, metodologias ágeis e participação em hackathons e competições.'
}

export const experience = [
  {
    id: 1,
    title: 'Desenvolvedor Frontend Freelancer',
    company: 'Artelie',
    period: '2025',
    description: 'Refatoração completa do frontend, modernizando a interface e implementando novas funcionalidades com foco em experiência do usuário.',
    technologies: ['Vue.js', 'CSS3', 'API Integration']
  },
  {
    id: 2,
    title: 'Desenvolvedor Fullstack Freelancer',
    company: 'MetFlix',
    period: '2025',
    description: 'Desenvolvimento completo de plataforma de streaming, incluindo backend com sistema de autenticação JWT e frontend responsivo moderno.',
    technologies: ['Vue.js', 'Node.js', 'MySQL', 'JWT']
  },
  {
    id: 3,
    title: 'Desenvolvedor Frontend',
    company: 'Equipe Hackaton IFC',
    period: '2025',
    description: 'Desenvolvimento do frontend da plataforma Join-Ville para o Hackaton do IFC Araquari, integrando com backend Django.',
    technologies: ['Vue.js', 'Django Integration', 'Figma']
  }
]

export const githubStats = {
  // ========== CONTA PRINCIPAL (arthurlanz) ==========
  mainAccount: {
    username: 'arthurlanz',
    totalContributions: 225, // Feb 27, 2024 - Present
    currentStreak: 1,
    longestStreak: 5, // Sep 18 - Sep 22
    repositories: 8,
    stars: 0,
    followers: 11 // Many Friends badge
  },

  // ========== CONTAS ADICIONAIS (Projetos Comerciais) ==========
  additionalAccounts: [
    {
      username: 'MuriloDaCruz',
      project: 'Artelie-FrontEnd',
      role: 'Frontend Developer',
      commits: 17, // Estimativa baseada em refatoração completa
      description: 'Refatoração completa do frontend'
    },
    {
      username: 'deivid1801',
      projects: ['Metflix-frontend', 'Metflix-backend'],
      role: 'Fullstack Developer',
      commits: 29, // Frontend + Backend combinados
      description: 'Desenvolvimento completo fullstack'
    }
  ],

  // ========== ESTATÍSTICAS TOTAIS COMBINADAS ==========
  totalStats: {
    allCommits: 271,
    allRepositories: 11,
    totalProjects: 5,
    yearsActive: 1,
    averageCommitsPerMonth: 43,
    mostProductiveMonth: 'Setembro 2025'
  },
  projects: [
    {
      name: 'Sede do Medo',
      account: 'arthurlanz',
      commits: 45,
      lines: 3200,
      tech: ['Vue.js', 'TMDB API', 'Axios'],
      status: 'Production',
      url: 'https://sededomedo.vercel.app'
    },
    {
      name: 'Join-Ville',
      account: 'arthurlanz',
      commits: 38,
      lines: 2800,
      tech: ['Vue.js', 'Django', 'SQLite'],
      status: 'Production',
      url: 'https://join-ville-dusky.vercel.app/'
    },
    {
      name: 'MetFlix Frontend',
      account: 'deivid1801',
      commits: 82,
      lines: 4500,
      tech: ['Vue.js', 'Node.js', 'JWT'],
      status: 'Production',
      url: 'https://metflix-frontend-pi.vercel.app/'
    },
    {
      name: 'MetFlix Backend',
      account: 'deivid1801',
      commits: 63,
      lines: 3200,
      tech: ['Node.js', 'Express', 'MySQL'],
      status: 'Production',
      url: 'https://metflix-backend-f44c.onrender.com/'
    },
    {
      name: 'Artelie FrontEnd',
      account: 'MuriloDaCruz',
      commits: 65,
      lines: 3800,
      tech: ['Vue.js', 'CSS3', 'API Integration'],
      status: 'Commercial',
      url: 'https://artelieweb.web.app/'
    },
    {
      name: 'Tutorial TMDB',
      account: 'arthurlanz',
      commits: 28,
      lines: 1800,
      tech: ['Vue.js', 'Vite', 'TMDB API'],
      status: 'Educational',
      url: 'https://tutorial-tmdb-wheat-sigma.vercel.app/'
    },
    {
      name: 'Nutriverso',
      account: 'arthurlanz',
      commits: 22,
      lines: 1500,
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      status: 'School Project',
      url: 'GitHub'
    }
  ],

  achievements: {
    githubTrophies: [
      { name: 'High Committer', level: 'A', description: '225+ commits' },
      { name: 'High Issuer', level: 'A', description: 'Criou múltiplas issues' },
      { name: 'High Puller', level: 'A', description: 'Múltiplos Pull Requests' },
      { name: 'Many Friends', level: 'B', description: '112+ followers' },
      { name: 'Junior Dev', level: 'B', description: 'Desenvolvedor Júnior ativo' },
      { name: 'First Repository', level: 'C', description: 'Primeiro repositório criado' }
    ],
    milestones: [
      '🎯 250+ commits totais em projetos reais',
      '🚀 5 projetos em produção (deploy online)',
      '💼 3 projetos comerciais/freelance',
      '🏆 Participação em Hackaton IFC 2025',
      '👥 Trabalho colaborativo em equipes',
      '🎓 Projetos educacionais + comerciais'
    ]
  },

  // ========== MÉTRICAS DE CÓDIGO ==========
  codeMetrics: {
    totalLinesWritten: 77649
  },

  // ========== TIMELINE DE ATIVIDADES ==========
  timeline: {
    '2024-02': 'Início no GitHub - Primeiro commit',
    '2024-10-27': 'Projeto Nutiverso (Primeiro projeto em grupo)',
    '2025-10-27': 'Tutorial TMDB (Aprendizado de APIs)',
    '2025-09-22': 'Maior streak - 5 dias consecutivos',
    '2025-12-02': 'Sede do Medo - Projeto com API tmdb',
    '2025-11-18': 'Artelie - Primeiro projeto freelance',
    '2025-12-05': 'MetFlix - Projeto fullstack completo',
    '2025-09-25': 'Join-Ville - Hackaton IFC',
  }
}
