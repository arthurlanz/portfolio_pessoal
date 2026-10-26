# Portfólio Pessoal · Frontend

Portfólio pessoal de Arthur Lanznaster, feito em **Vue 3 + Vite**. Reúne apresentação, habilidades, formação, projetos e um formulário de contato integrado à [API do portfólio](https://github.com/arthurlanz/portfolio-backend).

🔗 **Online:** [arthurlanznaster.vercel.app](https://arthurlanznaster.vercel.app/)

## Tecnologias

- Vue 3 (Composition API)
- Vite
- Vue Router
- Pinia
- Lucide Icons
- CSS puro com animações
- ESLint + Prettier
- Deploy na Vercel

## Funcionalidades

- Layout responsivo com seções de apresentação, sobre, habilidades, formação, projetos e contato
- Animações ao rolar a página, efeito parallax, rastro do mouse e fundo de partículas interativo (composables próprios)
- Conteúdo centralizado em `src/data/portfolio.js`, o que facilita atualizar projetos e habilidades
- Formulário de contato que envia mensagens para a API Django ([portfolio-backend](https://github.com/arthurlanz/portfolio-backend)), com o limite de envios aplicado no servidor

## Como rodar

Requisitos: Node.js `^20.19.0` ou `>=22.12.0`.

```bash
git clone https://github.com/arthurlanz/portfolio_pessoal.git
cd portfolio_pessoal
npm install
npm run dev
```

A aplicação sobe em `http://localhost:5173`.

### Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção em `dist/` |
| `npm run preview` | Pré-visualiza o build |
| `npm run lint` | ESLint com correção automática |
| `npm run format` | Formata `src/` com Prettier |

## Estrutura

```
src/
├── assets/styles/     # CSS global
├── components/        # Seções da página (Hero, About, Skills, Projects, Education, Contact...)
├── composables/       # Efeitos: parallax, scroll, mouse trail, efeito magnético
├── data/portfolio.js  # Informações pessoais, habilidades e projetos
├── router/            # Rotas
├── stores/            # Pinia
├── views/HomeView.vue
├── App.vue
└── main.js
```

## Autor

**Arthur Lanznaster** · [GitHub](https://github.com/arthurlanz) · [LinkedIn](https://www.linkedin.com/in/arthur-lanznaster-0546532b8) · arthurlanznaster@gmail.com
