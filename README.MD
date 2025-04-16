# 🧬 Evo Deck - Enciclopédia Pokémon

O **Evo Deck** é uma aplicação web responsiva construída com **Next.js** que consome a [PokeAPI](https://pokeapi.co/) para exibir informações detalhadas sobre Pokémons, suas habilidades, status e evoluções.

Possui sistema de **autenticação com Firebase**, permitindo o cadastro e login de usuários.

---

## 🚀 Funcionalidades

- 🔍 Busca por nome de Pokémon
- 📱 Design responsivo para todos os dispositivos
- 🧠 Visualização de habilidades, tipos e status
- 📊 Exibição de detalhes como altura, peso e evoluções
- 🔐 Cadastro e login de usuários com Firebase Authentication
- ☁️ Armazenamento de dados dos usuários no Firebase

---

## 🛠️ Tecnologias Utilizadas

### Frontend

- **Next.js** 15
- **React** 19
- **Tailwind CSS** 4
- **Material UI (MUI)** + Emotion
- **Axios**
- **React Hook Form** + **Zod**
- **React Toastify**
- **React Icons** e **Lucide React**
- **React Input Mask** e **React Number Format**
- **TanStack React Query** (com persistência)
- **clsx**, **tailwind-merge**, **class-variance-authority**
- **Radix UI Slot**
- **tw-animate-css**

### Backend

- **Firebase SDK**
  - Firebase Authentication
  - Firestore (para armazenar dados dos usuários)

---

## 🔧 Scripts

```bash
pnpm dev     # Inicia o servidor de desenvolvimento com Turbopack
pnpm build   # Gera a build para produção
pnpm start   # Inicia a aplicação em produção
pnpm lint    # Executa o lint no projeto
```

---

## 📂 Estrutura do Projeto (exemplo)

```
evo-deck/
├── app/
│   ├── auth/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── utils/
├── public/
├── styles/
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

## 📦 Instalação e Execução

```bash
git clone https://github.com/seu-usuario/evo-deck.git
cd evo-deck
pnpm install
pnpm dev
```

> Também funciona com npm ou yarn se preferir.

---

## ✅ Requisitos

- Node.js 18 ou superior
- pnpm (ou npm/yarn)
- Conta no Firebase configurada com Auth e Firestore

---

## 💡 Melhorias Futuras

- Favoritar Pokémons por usuário
- Tela de perfil personalizada
- Histórico de busca
- Modo escuro

---

## 👤 Autor

Feito com 💙 por [Seu Nome]  
🔗 [linkedin.com/in/seu-usuario](https://linkedin.com/in/seu-usuario)

---

## 📄 Licença

Este projeto está sob a licença **MIT**.  
Veja o arquivo `LICENSE` para mais informações.