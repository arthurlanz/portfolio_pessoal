
export const personalInfo = {
  name: 'Arthur Lanznaster',
  role: 'Desenvolvedor em Formação',
  location: 'Joinville, Santa Catarina - Brasil',
  email: 'arthurlanznaster@gmail.com',
  description: 'Estudante de Informática para Internet no IFC Araquari. Especializado em Vue.js, Python e desenvolvimento frontend.',
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
    { name: 'Vue.js', level: 75 }
  ],
  backend: [
    { name: 'Python', level: 65 },
    { name: 'MySQL', level: 50 }
  ],
  tools: [
    { name: 'Figma', level: 50 },
    { name: 'Git & GitHub', level: 80 },
    { name: 'VSCode', level: 70 }
  ]
}

export const projects = [
  {
    id: 1,
    title: 'Sede do Medo',
    description: 'Plataforma de streaming de filmes de terror desenvolvida com Vue.js. Interface moderna e responsiva com sistema de busca e filtros avançados.',
    tech: ['Vue.js', 'JavaScript', 'CSS3', 'API'],
    link: 'https://sededomedo.vercel.app',
    github: 'https://github.com/arthurlanz/sededomedo',
    featured: true,
    img: '/images/sededomedo.png'
  },
  {
    id: 2,
    title: 'TMDB Movies',
    description: 'Aplicação completa usando a API TMDB para buscar informações sobre filmes, séries e programas de TV. Projeto tutorial progressivo com Vue.js e Axios.',
    tech: ['Vue.js', 'Axios', 'TMDB API', 'Vite'],
    link: 'https://tutorial-tmdb-wheat-sigma.vercel.app/',
    github: 'https://github.com/arthurlanz/tutorial-tmdb',
    featured: true,
    img: '/images/tutorialtmdb.png'
  },
  {
    id: 3,
    title: 'Join-Ville',
    description: 'Site desenvolvido para o hackaton do IFC, com o objetivo de reunir, avaliar e divulgar os eventos culturais da cidade de Joinville.',
    tech: ['Vue.js', 'JavaScript', 'CSS3', 'Django', 'SQLite', 'Figma', 'GitHub'],
    link: 'https://join-ville.fabricadesoftware.ifc.edu.br/',
    github: 'https://github.com/arthurlanz/Join-Ville',
    featured: false,
    img: '/images/joinville.png'
  }

]

export const education = {
  institution: 'Instituto Federal Catarinense',
  campus: 'Campus Araquari',
  course: 'Técnico em Informática para Internet',
  status: 'Cursando',
  description: 'Formação técnica focada em desenvolvimento web, programação, banco de dados, design de interfaces e infraestrutura de redes. Aprendizado prático com projetos reais e metodologias ágeis.'
}
