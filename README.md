# Portfólio · Arthur Lanznaster

Meu portfólio pessoal: projetos, trabalhos para clientes, stack e contato. A atividade do GitHub (calendário de contribuições, total de commits, últimos commits e linguagens) vem da API do GitHub, pelo [backend em Django](https://github.com/arthurlanz/portfolio-backend).

🔗 **Site:** [arthurlanznaster.vercel.app](https://arthurlanznaster.vercel.app)

## Tecnologias

- Vue 3 + Vite, CSS puro (tokens em `src/styles/tokens.css`, tema claro e escuro)
- Fonte Bricolage Grotesque (`@fontsource-variable`)
- Backend: Django REST Framework (ver repositório do backend)
- Deploy na Vercel

## Como rodar

```bash
git clone https://github.com/arthurlanz/portfolio_pessoal.git
cd portfolio_pessoal
npm install
npm run dev
```

| Variável | Descrição |
|---|---|
| `VITE_API_URL` | URL da API com `/api`. Se omitida, usa o backend em produção. |

## Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run lint` | ESLint |
| `node --test src/utils/format.test.js` | Testes das funções de formatação |

## Estrutura

```
src/
├── components/   # Seções da página e calendário de contribuições
├── composables/  # useGithub (dados da API) e useTheme
├── data/         # Conteúdo: projetos, stack, trajetória
├── styles/       # Tokens e estilos globais
└── utils/        # Formatação de datas e números
```
