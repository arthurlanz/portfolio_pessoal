# 🚀 Portfólio Pessoal - Arthur Lanznaster

Portfólio profissional desenvolvido com Vue.js 3, apresentando projetos, habilidades e informações sobre minha jornada como desenvolvedor full-stack.

![Vue.js](https://img.shields.io/badge/Vue.js-3.4-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Features

- ⚡ **Vue 3** com Composition API
- 🎨 **Design Minimalista** inspirado em portfólios profissionais
- 📱 **Totalmente Responsivo** (Mobile, Tablet, Desktop)
- 🎯 **Navegação Suave** entre seções
- 💫 **Animações Elegantes** com CSS
- 🌐 **SEO Friendly**
- ⚡ **Performance Otimizada**

## 🛠️ Tecnologias Utilizadas

- **Vue.js 3** - Framework JavaScript progressivo
- **Vue Router 4** - Roteamento oficial do Vue
- **Vite** - Build tool de nova geração
- **Lucide Vue Next** - Biblioteca de ícones
- **CSS3** - Estilização com variáveis CSS customizadas

## 📦 Instalação e Uso

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn

### Passos para Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/arthurlanz/portfolio-vue.git
cd portfolio-vue
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto em modo desenvolvimento**
```bash
npm run dev
```

4. **Build para produção**
```bash
npm run build
```

5. **Preview da build de produção**
```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
portfolio-vue/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── styles/
│   │   │   └── global.css          # Estilos globais e variáveis CSS
│   │   └── images/                 # Imagens do projeto
│   ├── components/
│   │   ├── Navbar.vue              # Barra de navegação
│   │   ├── Hero.vue                # Seção inicial/hero
│   │   ├── About.vue               # Seção sobre mim
│   │   ├── Skills.vue              # Habilidades técnicas
│   │   ├── Projects.vue            # Projetos em destaque
│   │   ├── Education.vue           # Formação acadêmica
│   │   ├── Contact.vue             # Seção de contato
│   │   └── Footer.vue              # Rodapé
│   ├── views/
│   │   └── Home.vue                # View principal
│   ├── router/
│   │   └── index.js                # Configuração de rotas
│   ├── data/
│   │   └── portfolio.js            # Dados do portfólio
│   ├── App.vue                     # Componente raiz
│   └── main.js                     # Entry point
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

## 🎨 Personalização

### Alterar Informações Pessoais

Edite o arquivo `src/data/portfolio.js`:

```javascript
export const personalInfo = {
  name: 'Seu Nome',
  role: 'Seu Cargo',
  location: 'Sua Cidade, Estado - País',
  email: 'seu@email.com',
  // ... outras informações
}
```

### Adicionar Projetos

No arquivo `src/data/portfolio.js`, adicione novos projetos no array:

```javascript
export const projects = [
  {
    id: 1,
    title: 'Nome do Projeto',
    description: 'Descrição do projeto',
    tech: ['Vue.js', 'Node.js'],
    link: 'https://projeto.com',
    github: 'https://github.com/usuario/projeto',
    featured: true
  }
]
```

### Customizar Cores

Edite as variáveis CSS em `src/assets/styles/global.css`:

```css
:root {
  --bg-primary: #09090b;
  --accent-primary: #a855f7;
  /* ... outras variáveis */
}
```

## 📱 Responsividade

O portfólio foi desenvolvido com mobile-first approach e é totalmente responsivo:

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

## 🚀 Deploy

### Vercel (Recomendado)

1. Crie uma conta no [Vercel](https://vercel.com)
2. Conecte seu repositório GitHub
3. Configure o projeto:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy!

### Netlify

1. Crie uma conta no [Netlify](https://netlify.com)
2. Arraste a pasta `dist` após rodar `npm run build`
3. Ou conecte com seu repositório GitHub

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Arthur Lanznaster**

- GitHub: [@arthurlanz](https://github.com/arthurlanz)
- LinkedIn: [Arthur Lanznaster](https://www.linkedin.com/in/arthur-lanznaster-0546532b8/)
- Instagram: [@arthurlanz_](https://www.instagram.com/arthurlanz_)

## 🤝 Contribuições

Contribuições, issues e feature requests são bem-vindos!

## ⭐ Mostre seu apoio

Se este projeto te ajudou, dê uma ⭐!

---

**Desenvolvido com 💜 usando Vue.js**