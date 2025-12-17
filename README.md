# Portfolio Frontend

Portfolio pessoal desenvolvido com React e Vite, apresentando projetos, habilidades e informações de contato de forma interativa e moderna.

## 🚀 Tecnologias

- React 18.3
- Vite 6.0 (bundler)
- React Router DOM 7.1 (navegação)
- Axios (requisições HTTP)
- CSS3 (estilização)
- React Icons (ícones)

## ✨ Features

- 🎨 Design moderno e responsivo
- 🌙 Navegação suave entre seções
- 📱 Totalmente responsivo (mobile-first)
- 💼 Showcase de projetos
- 🛠️ Exibição de habilidades técnicas
- 📧 Formulário de contato funcional
- ⚡ Carregamento rápido com Vite
- 🔒 Rate limiting no formulário de contato

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn

## 🔧 Instalação Local

**1. Clone o repositório**

    git clone https://github.com/arthurlanznaster/portfolio-frontend.git
    cd portfolio-frontend

**2. Instale as dependências**

    npm install

**3. Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto:

    VITE_API_URL=http://localhost:8000/api

**4. Inicie o servidor de desenvolvimento**

    npm run dev

O aplicativo estará disponível em http://localhost:5173

## 🏗️ Build para Produção

    npm run build

Os arquivos otimizados estarão na pasta `dist/`

**Preview da build:**

    npm run preview

## 🗂️ Estrutura do Projeto

    portfolio-frontend/
    ├── public/                # Arquivos públicos estáticos
    ├── src/
    │   ├── assets/           # Imagens, fontes, etc
    │   ├── components/       # Componentes React
    │   ├── styles/           # Arquivos CSS
    │   ├── App.jsx           # Componente principal
    │   ├── main.jsx          # Entry point
    │   └── index.css         # CSS global
    ├── .env                  # Variáveis de ambiente
    ├── index.html            # HTML principal
    ├── package.json          # Dependências
    ├── vite.config.js        # Configuração do Vite
    └── README.md             # Este arquivo

## 📱 Componentes

### Navbar
Barra de navegação fixa com links suaves para as seções.

### Hero
Seção de apresentação inicial com informações principais.

### About
Informações sobre experiência, objetivos e biografia.

### Skills
Grid com habilidades técnicas organizadas por categoria (Frontend, Backend, Ferramentas & DevOps).

### Projects
Showcase de projetos com descrição, tecnologias utilizadas e links para GitHub e demo.

### Education
Formação acadêmica e cursos relevantes.

### Contact
Formulário de contato com validação, rate limiting (5 mensagens/hora), feedback visual e integração com backend.

### Footer
Rodapé com informações de copyright e links sociais.

## 🎨 Customização

### Cores

As cores principais podem ser alteradas em `src/index.css` na seção `:root`.

### Conteúdo

Edite os componentes em `src/components/` para alterar informações pessoais, projetos, habilidades e formação acadêmica.

## 🌐 Integração com API

O formulário de contato se comunica com a API backend no endpoint `/api/contact/send/`

Configure a URL da API no arquivo `.env`:

    VITE_API_URL=https://sua-api.com/api

## 🚀 Deploy

### Vercel

    npm install -g vercel
    vercel

### Netlify

    npm run build
    netlify deploy --prod --dir=dist

**Importante:** Configure a variável de ambiente `VITE_API_URL` com a URL da API em produção.

## 📊 Performance

- ⚡ Lighthouse Score: 95+
- 📦 Bundle size otimizado com Vite
- 🖼️ Lazy loading de imagens
- 🎯 Code splitting automático

## 🛡️ Segurança

- Validação de formulários no frontend e backend
- Rate limiting no envio de mensagens
- Sanitização de inputs
- HTTPS obrigatório em produção

## 📱 Responsividade

**Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🧪 Scripts Disponíveis

    npm run dev          # Inicia servidor de desenvolvimento
    npm run build        # Build para produção
    npm run preview      # Preview da build
    npm run lint         # Linting do código

## 📝 Licença

Este projeto está sob a licença MIT.

## 👤 Autor

**Arthur Lanznaster**

- GitHub: [@arthurlanznaster](https://github.com/arthurlanz)
- Email: arthurlanznaster@gmail.com

## 🤝 Contribuindo

Contribuições são bem-vindas!

1. Fazer fork do projeto
2. Criar uma branch: `git checkout -b feature/MinhaFeature`
3. Commit: `git commit -m 'Add: Nova feature'`
4. Push: `git push origin feature/MinhaFeature`
5. Abrir um Pull Request

## 🐛 Reportar Bugs

Encontrou um bug? Abra uma issue descrevendo:
- O comportamento esperado
- O comportamento atual
- Passos para reproduzir
- Screenshots (se aplicável)

---

Desenvolvido por Arthur Lanznaster
