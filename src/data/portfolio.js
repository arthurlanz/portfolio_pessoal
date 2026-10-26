// Conteúdo do portfólio. Números de commits, linguagens e atividade não ficam aqui:
// vêm da API do GitHub, pelo backend (veja src/composables/useGithub.js).

export const profile = {
  name: 'Arthur Lanznaster',
  headline: 'Faço sistemas web completos, do banco de dados à tela.',
  lead: 'Sou o Arthur, dev fullstack em Joinville. Trabalho com Vue 3 e Django REST e termino o técnico em Informática para Internet no IFC em 2026. Procuro estágio ou vaga júnior.',
  email: 'arthurlanznaster@gmail.com',
  github: 'https://github.com/arthurlanz',
  githubUser: 'arthurlanz',
  linkedin: 'https://www.linkedin.com/in/arthur-lanznaster-0546532b8',
  instagram: 'https://www.instagram.com/arthurlanz_/',
}

export const about = [
  'Entrei no técnico em Informática para Internet, no IFC Campus Araquari, em 2024 e termino em 2026. Prefiro projetos que chegam ao ar: quase todos os que aparecem aqui têm endereço público.',
  'Em equipe, pego tarefas do Kanban, abro issues e pull requests e reviso o código dos colegas. No Fluxo, cuidei do quadro Kanban e apresentei essa parte aos jurados do hackathon.',
  'Procuro minha primeira vaga: estágio ou júnior em desenvolvimento web, do frontend ao backend.',
]

export const projects = [
  {
    id: 'pires',
    name: 'Pires Panificadora',
    year: 2026,
    kind: 'TCC',
    summary:
      'Sistema de pré-pedidos da cantina do IFC. O aluno reserva os itens antes do intervalo, paga online e retira com um QR Code. A administração controla estoque, promoções e relatórios.',
    role: 'Desenvolvimento fullstack: a API em Django e o aplicativo web instalável (PWA) em Vue.',
    highlights: [
      'Pagamento pelo Mercado Pago e login com Google',
      'Retirada por QR Code e fluxo de estados do pedido',
      'Baixa automática de estoque, notificações e relatório de vendas',
    ],
    stack: ['Vue 3', 'Pinia', 'PWA', 'Django REST', 'PostgreSQL', 'Cloudinary'],
    live: 'https://frontend-pires.vercel.app',
    repos: [
      { label: 'Frontend', name: 'Panificadora-Pires/frontend-pires' },
      { label: 'Backend', name: 'Panificadora-Pires/backend-pires' },
    ],
    docs: 'https://github.com/Panificadora-Pires/.github',
  },
  {
    id: 'fluxo',
    name: 'Fluxo',
    year: 2026,
    kind: 'Hackathon',
    summary:
      'Plataforma de gestão de projetos em equipe, com quadro Kanban, chat, chamadas em tempo real, pastas de arquivos e brainstorm. Desenvolvida pela equipe DreamTeam-2k26.',
    role: 'Foco no frontend e no quadro Kanban, com contribuições no backend para tarefas, anexos e fotos de perfil.',
    highlights: [
      'Kanban com responsável, comentários e anexos em cada tarefa',
      'Tarefas puxadas das issues do GitHub e entregues por pull request',
      'Apresentação do Kanban aos jurados',
    ],
    stack: ['Vue 3', 'Pinia', 'Django REST', 'Channels (WebSocket)', 'JWT'],
    live: 'https://fluxo-beige-three.vercel.app',
    repos: [
      { label: 'Frontend', name: 'DreamTeam-2k26/frontend' },
      { label: 'Backend', name: 'DreamTeam-2k26/backend' },
    ],
  },
  {
    id: 'brookie',
    name: 'Brookiê',
    year: 2026,
    kind: 'Projeto Integrador',
    summary:
      'Loja online de cookies e brownies artesanais, pensada primeiro para o celular. A API tem catálogo, kits, pedidos, pagamentos e estoque.',
    role: 'Fiz a maior parte do frontend e do backend, do envio de fotos ao deploy.',
    highlights: [
      'Upload de foto de perfil com Cloudinary',
      'Correção de uma falha de escalonamento de privilégios na API de usuários',
      'Deploy do backend no Render, com PostgreSQL',
    ],
    stack: ['Vue 3', 'Pinia', 'PWA', 'Django REST', 'PostgreSQL', 'Cloudinary'],
    live: 'https://brookie-frontend.vercel.app/',
    repos: [
      { label: 'Frontend', name: 'EquipePI-3info2/frontend' },
      { label: 'Backend', name: 'EquipePI-3info2/backend' },
    ],
  },
  {
    id: 'joinville',
    name: 'Join-Ville',
    year: 2025,
    kind: 'Hackathon',
    summary:
      'Agenda dos eventos de Joinville, por categoria, data e avaliação. Só empresas com CNPJ válido cadastram eventos, e os usuários favoritam, comentam e conversam no chat.',
    role: 'Frontend em Vue e parte da API em Django.',
    highlights: [
      'Cadastro separado para usuário e empresa, com JWT',
      'Filtros por categoria, data e nota',
      'Chat em tempo real',
    ],
    stack: ['Vue 3', 'Django REST', 'Channels', 'JWT'],
    live: 'https://join-ville-dusky.vercel.app/',
    repos: [
      { label: 'Frontend', name: 'Equipe-Hackaton/Join-ville' },
      { label: 'Backend', name: 'Equipe-Hackaton/backend-hackaton' },
    ],
    image: { src: '/images/joinville.webp', alt: 'Página inicial do Join-Ville, com um carrossel de eventos e a lista de festas e shows.' },
  },
  {
    id: 'sede-do-medo',
    name: 'Sede do Medo',
    year: 2025,
    kind: 'Projeto Integrador',
    summary:
      'Catálogo de filmes de terror com busca, detalhes, trailer, favoritos e histórico, consumindo a API do TMDB.',
    role: 'Desenvolvimento do frontend, da busca ao player de trailers.',
    highlights: ['Busca e filtros sobre a API do TMDB', 'Favoritos e histórico guardados no navegador'],
    stack: ['Vue 3', 'Pinia', 'Axios', 'TMDB API'],
    live: 'https://sededomedopi.vercel.app/',
    repos: [{ label: 'Código', name: 'Equipe-Hackaton/pi_SededoMedo' }],
    image: { src: '/images/sededomedo.webp', alt: 'Página inicial do Sede do Medo, com filmes de terror em destaque.' },
  },
  {
    id: 'hackathon-ifc',
    name: 'Plataforma do Hackathon IFC',
    year: 2026,
    kind: 'Fábrica de Software',
    summary:
      'Sistema para organizar o hackathon do IFC: edições, inscrições, equipes, envio e avaliação de projetos.',
    role: 'Telas e componentes do frontend: menu lateral, paginação, seletores e cadastro de projetos.',
    highlights: ['Menu lateral com itens que mudam conforme o login', 'Componentes reutilizáveis em TypeScript'],
    stack: ['Vue 3', 'TypeScript', 'Vuetify'],
    repos: [{ label: 'Frontend', name: 'fabricadesoftware-ifc/fabricaHackathon_frontEnd' }],
  },
]

export const clientWork = [
  {
    id: 'ramon',
    name: 'Ramon Autopeças',
    year: 2026,
    kind: 'Cliente real',
    summary:
      'Vitrine digital de uma loja de autopeças. O catálogo é sincronizado com a loja oficial no Mercado Livre e o cliente é levado ao WhatsApp para negociar.',
    role: 'Desenvolvimento do frontend, a vitrine em Vue.',
    stack: ['Vue 3', 'Pinia', 'Vite'],
    live: 'https://ramonautopecas.com.br/',
    docs: 'https://github.com/Ramon-Autopecas/.github',
  },
  {
    id: 'metflix',
    name: 'MetFlix',
    year: 2025,
    kind: 'Freela',
    summary:
      'Plataforma de streaming com autenticação. Amigos me contrataram para terminar o projeto e tive grande participação no desenvolvimento.',
    role: 'Finalização do frontend e da integração com a API.',
    stack: ['Vue.js', 'JWT'],
    live: 'https://metflix-frontend-pi.vercel.app/',
    image: { src: '/images/metflix.webp', alt: 'Página inicial do MetFlix, com o catálogo de filmes.' },
  },
  {
    id: 'artelie',
    name: 'Artelie',
    year: 2025,
    kind: 'Freela',
    summary:
      'Refatoração completa do frontend de um projeto de amigos, com foco em experiência de uso e interface.',
    role: 'Reescrita do frontend.',
    stack: ['Vue.js', 'CSS'],
    live: 'https://artelieweb.web.app/',
    image: { src: '/images/artelie.webp', alt: 'Página inicial do Artelie.' },
  },
]

export const studyProjects = [
  {
    name: 'NutriVita',
    text: 'site institucional de uma clínica de nutrição, em HTML, CSS e JavaScript',
    repo: 'https://github.com/arthurlanz/nutriverso_pi',
  },
  {
    name: 'Tutorial TMDB',
    text: 'filmes e séries por gênero com Vue 3 e a API do TMDB',
    live: 'https://tutorial-tmdb-wheat-sigma.vercel.app/',
    repo: 'https://github.com/arthurlanz/tutorial-tmdb',
  },
]

export const stack = [
  { label: 'Interface', items: ['Vue 3', 'Pinia', 'Vue Router', 'Vite', 'JavaScript', 'TypeScript', 'HTML e CSS', 'PWA', 'Vuetify'] },
  { label: 'API e dados', items: ['Python', 'Django', 'Django REST Framework', 'JWT (SimpleJWT)', 'Channels (WebSocket)', 'PostgreSQL', 'MySQL', 'SQLite'] },
  { label: 'Integrações e entrega', items: ['Mercado Pago', 'Login com Google', 'Cloudinary', 'Vercel', 'Render'] },
  { label: 'Dia a dia em equipe', items: ['Git e GitHub', 'Branches e pull requests', 'Issues e Kanban', 'Revisão de código', 'Figma'] },
]

export const journey = [
  { year: 2024, text: 'Começo do técnico em Informática para Internet no IFC Campus Araquari e da minha conta no GitHub.' },
  { year: 2025, text: 'Primeiro hackathon do IFC (Join-Ville), primeiros projetos integradores e os trabalhos para amigos (Artelie e MetFlix).' },
  { year: 2026, text: 'TCC (Pires Panificadora), hackathon com o Fluxo, a vitrine da Ramon Autopeças e a conclusão do curso.' },
]
