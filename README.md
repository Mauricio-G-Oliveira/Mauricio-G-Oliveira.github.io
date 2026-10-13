# Portfólio Profissional Sênior - Mauricio Oliveira

> 🌐 **Site no ar (GitHub Pages)**: [https://mauricio-g-oliveira.github.io/](https://mauricio-g-oliveira.github.io/)

Website de portfólio profissional de nível **Sênior** desenvolvido para **Mauricio Oliveira**, destacando sua atuação como **Engenheiro de Software Full Stack & Especialista Back-End Java / Spring Boot**, projetos com **PostgreSQL & Docker**, soluções corporativas na **Net Data / Orprocon** e **MakerPixel**, além de formação acadêmica e certificações.

---

## 🚀 Tecnologias e Arquitetura do Site

- **Design System & UI**: Obsidian Dark Mode (estilo Linear / Vercel), Glassmorphism, gradientes modernos e ambient glow.
- **Estrutura**: HTML5 Semântico com otimização completa de SEO e Open Graph (tags para WhatsApp, LinkedIn, Twitter e Google).
- **Estilização**: Tailwind CSS via CDN com customização de cores, microinterações e componentes modulares.
- **Ícones**: Lucide Icons modernos e responsivos.
- **Reatividade**: JavaScript puro (Vanilla JS) com:
  - Filtro dinâmico de projetos (*Todos*, *Java & Back-End*, *IA & pgVector*, *Full Stack & Cloud*).
  - Terminal interativo no Hero com abas alternáveis (`overview.json`, `metrics.log`, `contact.sh`).
  - Modal com detalhamento de **Arquitetura & Impacto Mensurado** para cada solução.
  - Botão de cópia rápida do e-mail com alerta toast.
  - Links diretos para WhatsApp e download/visualização do currículo (`Profile.pdf`).
  - Navegação suave e ScrollSpy ativo na navbar.
- **Deploy Zero-Config**: Não requer compilação de pacotes pesados (`npm install`), funcionando nativamente em qualquer servidor estático ou CDN.

---

## 📂 Estrutura de Arquivos

```text
meu portifólio/
├── index.html              # Página principal completa do portfólio
├── css/
│   └── styles.css          # Estilos customizados, animações, terminal e glassmorphism
├── js/
│   └── main.js             # Lógica interativa, dados de projetos, terminal e toasts
├── Profile.pdf             # Currículo oficial em PDF para visualização e download
├── .gitignore              # Arquivos ignorados pelo Git
└── README.md               # Guia de uso e instruções de deploy
```

---

## 💻 Como Visualizar Localmente no Mac

Existem duas formas fáceis:

### Opção 1: Abrir diretamente no navegador
Basta dar **duplo clique** no arquivo `index.html` na pasta do seu computador (ele abrirá automaticamente no Safari, Chrome ou Firefox).

### Opção 2: Subir um servidor local com Python
Abra o Terminal na pasta do projeto e execute:
```bash
python3 -m http.server 8000
```
Depois abra no seu navegador: [http://localhost:8000](http://localhost:8000).

---

## 🌐 Como Publicar no GitHub Pages (Passo a Passo)

O GitHub Pages é gratuito e colocará seu site no ar em minutos (ex: `https://mauriciogoulart.github.io/` ou `https://mauriciogoulart.github.io/portfolio`):

### 1. Inicializar o repositório Git localmente
No Terminal, dentro da pasta `meu portifólio`:
```bash
git init
git add .
git commit -m "feat: initial commit do portfolio profissional senior"
```

### 2. Criar o repositório no seu GitHub
1. Acesse [github.com/new](https://github.com/new).
2. Dê o nome que desejar:
   - Se colocar **`mauriciogoulart.github.io`**, o seu site ficará acessível diretamente no endereço principal: `https://mauriciogoulart.github.io/`.
   - Se colocar **`portfolio`**, ficará acessível em: `https://mauriciogoulart.github.io/portfolio/`.
3. Deixe o repositório como **Público (Public)**.
4. Clique em **Create repository**.

### 3. Conectar e enviar o código
No Terminal:
```bash
git branch -M main
git remote add origin https://github.com/mauriciogoulart/SEU-REPOSITORIO.git
git push -u origin main
```

### 4. Ativar o GitHub Pages no repositório
1. No seu repositório no GitHub, clique na aba **Settings** (Configurações).
2. No menu lateral esquerdo, clique em **Pages**.
3. Em **Build and deployment** > **Branch**:
   - Selecione a branch `main` e a pasta `/ (root)`.
4. Clique em **Save**.
5. Aguarde cerca de 1 a 2 minutos e o link do seu site estará ativo!

---

## ⚡ Como Publicar no Vercel ou Netlify (Opcional)

Se futuramente preferir hospedar no Vercel ou Netlify:

### Vercel:
1. Acesse [vercel.com](https://vercel.com) e conecte com seu GitHub.
2. Clique em **Add New** > **Project**.
3. Selecione o repositório do portfólio e clique em **Deploy**.
4. A publicação é instantânea e gera um link com certificado SSL gratuito.

### Netlify:
1. Acesse [app.netlify.com/drop](https://app.netlify.com/drop).
2. Você pode simplesmente **arrastar a pasta `meu portifólio`** para dentro da janela do navegador!
3. O Netlify publicará o site imediatamente.

---

## 📬 Contatos do Desenvolvedor

- **Nome**: Mauricio Goulart de Oliveira
- **WhatsApp**: [(48) 98457-0272](https://wa.me/5548984570272)
- **E-mail**: [mauriciogoulart.deoliveira37@gmail.com](mailto:mauriciogoulart.deoliveira37@gmail.com)
- **LinkedIn**: [linkedin.com/in/mauriciogoulartdev](https://www.linkedin.com/in/mauriciogoulartdev)
- **GitHub**: [github.com/mauriciogoulart](https://github.com/mauriciogoulart)
