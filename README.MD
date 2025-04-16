
# 🧬 Evo Deck

O **Evo Deck** é uma aplicação web responsiva construída com **Next.js** que consome a [PokeAPI](https://pokeapi.co/) para exibir informações detalhadas sobre Pokémons, como habilidades, tipos, evoluções e muito mais.

Conta com sistema completo de **autenticação via Firebase**, possibilitando **cadastro e login de usuários**.

---

## 🚀 Funcionalidades

- 🔍 Busca por nome de Pokémon
- 📱 Design  responsivo 
- 🧠 Visualização de detalhes sobre o pokémon escolhido
- 🔐 Tela de **Login** e **Cadastro** integradas ao Firebase Authentication
- ☁️ Armazenamento de dados no Firebase  Authentication

---

## 🖼️ Telas

- **Login:** acesso seguro com validação de formulário
- **Cadastro:** criação de usuário com validações detalhadas
- **Página principal:** visualização de Pokémons com dados da PokeAPI
- **Página de detalhes:** exibe detalhes sobre o Pokémon selecionado

---

## 🧱 Estrutura de Pastas

O projeto é organizado em camadas claras e reutilizáveis:

```
evo-deck/
│
├── app/
│   ├── (authenticated)/      
│   │   └── home/
|   |   |      |__[details]
|   |   |__layout.tsx
|   |
│   ├── (public)/           
│   │   ├── cadastro/
│   │   ├── login/
│   │   └── layout.tsx
│   └── layout.tsx            
│
├── components/
│   ├── atoms/                 
│   ├── molecules/              
│   ├── templates/             
│   ├── ui/ 
|              
├── containers/ 
|          |__NavBar/            
│
├── common/  
|   ├── config/                
│   ├── hooks/                  
│   ├── store/                  
├── source/
│   ├── config/              
│   ├── hooks/                
│   ├── store/            
│   └── utils/               
│
├── validations/            
├── public/                    
├── globals.css                
└── .gitignore
```

---

## 🛠️ Tecnologias Utilizadas

### 🧑‍💻 Frontend

- **Next.js** 15 (App Router)
- **React** 19
- **Tailwind CSS** 4
- **Material UI (MUI)** + Emotion
- **React Hook Form** + **Zod**
- **Axios**
- **React Toastify**
- **React Icons** & **Lucide React**
- **React Input Mask** & **React Number Format**
- **TanStack React Query** (com persistência)
- **clsx**, **tailwind-merge**, **class-variance-authority**
- **Radix UI Slot**
- **tw-animate-css**

### 🔥 Backend (Firebase)

- Firebase Authentication (Email/Senha)
- Firestore Database

---

## 📦 Instalação e Execução

```bash
git clone https://github.com/lvasconcelos20/Siapesq-Desafio-Front-End-Felipe-Vasconcelos.git
cd evo-deck
npm install
npm run dev
```

---

## 📄 Licença

MIT © Felipe Vasconcelos
