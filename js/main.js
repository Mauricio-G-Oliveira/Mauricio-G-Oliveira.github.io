/**
 * Portfolio JavaScript - Mauricio Oliveira
 * Desenvolvedor Full Stack Java (Spring Boot + React)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons if loaded
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Set Current Year in Footer
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Setup Email Copying
  setupEmailCopy();

  // Setup Mobile Menu Toggle
  setupMobileMenu();

  // Setup Project Filtering & Modals
  setupProjects();

  // Setup Interactive Terminal
  setupTerminal();

  // Setup Smooth Scroll & Active Nav Highlights
  setupScrollSpy();
});

/* ==========================================================================
   Email Copy with Toast Notification
   ========================================================================== */
function setupEmailCopy() {
  const emailButtons = document.querySelectorAll('.copy-email-btn');
  const toast = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');
  const userEmail = 'mauriciogoulart.deoliveira37@gmail.com';

  emailButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(userEmail);
        showToast('E-mail copiado para a área de transferência! 📋');
      } catch (err) {
        const tempInput = document.createElement('input');
        tempInput.value = userEmail;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast('E-mail copiado com sucesso! 📋');
      }
    });
  });

  function showToast(msg) {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }
}

/* ==========================================================================
   Mobile Navigation Drawer
   ========================================================================== */
function setupMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  function setMenuState(open) {
    if (open) {
      mobileMenu.classList.remove('hidden');
      if (hamburgerIcon) hamburgerIcon.classList.add('hidden');
      if (closeIcon) closeIcon.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
  }

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isClosed = mobileMenu.classList.contains('hidden');
    setMenuState(isClosed);
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      setMenuState(false);
    });
  });

  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      setMenuState(false);
    }
  });
}

/* ==========================================================================
   Project Data & Filter Management
   ========================================================================== */
const projectsData = [
  {
    id: 'central-contabil',
    title: 'Central Contábil / NotaSync',
    category: 'fullstack',
    subtitle: 'SaaS para Escritórios Contábeis de SC',
    company: 'MakerPixel Techsystem',
    description: 'Plataforma SaaS para captura automática de NFC-e direto da SEF/SC com certificado digital A1 do contador, conciliação bancária multi-extratos e motor de auditoria contábil com conferência da Reforma Tributária (IBS/CBS).',
    architecture: 'Multi-tenant por escritorio_id, cofre criptografado para certificados digitais com AES-256-GCM, migrations versionadas com Flyway, rotinas noturnas com cron autenticado e integração com a calculadora pública da Receita Federal (RTC).',
    impact: 'Eliminação da cobrança manual de XMLs junto aos clientes do escritório, conferência item a item de alíquotas da Reforma Tributária e segurança de credenciais em repouso.',
    tags: ['Java 21', 'Spring Boot 3', 'React', 'TypeScript', 'PostgreSQL', 'Flyway', 'AES-256-GCM', 'Supabase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Mauricio-G-Oliveira/makerpixel-central-contabil',
    liveUrl: 'https://www.makerpixeltech.com.br',
    badge: 'Programa Piloto',
    isEnterprise: true
  },
  {
    id: 'stageflow-platform',
    title: 'StageFlow — Gestão de Palco & Shows',
    category: 'fullstack',
    subtitle: 'Gestão de Músicos, Repertório e Contratos',
    company: 'MakerPixel / Projeto Próprio',
    description: 'Plataforma completa para gestão operacional de bandas: escalas de shows, controle de cachês, geração de propostas comerciais em PDF e setlist dinâmico sincronizado em tempo real.',
    architecture: 'Arquitetura desacoplada: Back-end RESTful com Java 21, Spring Boot 3, Spring Security com JWT stateless e PostgreSQL. Front-end PWA moderno em React 19, TypeScript e Tailwind CSS.',
    impact: 'Atualmente em uso real pela Banda Livert para gestão de todas as apresentações; versão comercial com roadmap para 2027.',
    tags: ['Java 21', 'Spring Boot 3', 'Spring Security', 'JWT', 'React', 'TypeScript', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/Mauricio-G-Oliveira/stageflow',
    liveUrl: 'https://mauricio-g-oliveira.github.io/stageflow/',
    badge: 'Em Uso (Banda)',
    isEnterprise: false
  },
  {
    id: 'fintech-core-ledger',
    title: 'Fintech Core Ledger',
    category: 'backend',
    subtitle: 'Motor de Partidas Dobradas & Controle de Concorrência',
    company: 'Projeto de Estudo Pessoal',
    description: 'Projeto de estudo focado na implementação de um livro-razão (ledger) financeiro estrito por partidas dobradas (Double-Entry Bookkeeping), garantindo a invariante contábil de soma de débitos igual à soma de créditos.',
    architecture: 'Modelagem orientada a domínio (DDD), isolamento de concorrência com ordenação determinística de travas pessimistas (SELECT FOR UPDATE) para eliminar deadlocks, interceptor com chave de idempotência UUIDv7 e testes com Testcontainers e ArchUnit.',
    impact: 'Simulação interativa live no GitHub Pages com disparo de requisições concorrentes simultâneas demonstrando mitigação total de colisões e idempotência.',
    tags: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'Flyway', 'Testcontainers', 'ArchUnit', 'React', 'Vite'],
    githubUrl: 'https://github.com/Mauricio-G-Oliveira/fintech-core-ledger',
    liveUrl: 'https://mauricio-g-oliveira.github.io/fintech-core-ledger/',
    badge: 'Projeto de Estudo',
    isEnterprise: false
  },
  {
    id: 'makerpixel-site',
    title: 'MakerPixel Techsystem — Website',
    category: 'enterprise',
    subtitle: 'Portal Institucional & Apresentação Comercial',
    company: 'MakerPixel Techsystem',
    description: 'Website oficial da MakerPixel Techsystem, apresentando as soluções de software para o mercado contábil, informações institucionais, conformidade LGPD e canal direto com o desenvolvedor.',
    architecture: 'Desenvolvimento modular em HTML5 semântico, Tailwind CSS, JavaScript modular com SITE_CONFIG centralizado e conformidade técnica e regulatória.',
    impact: 'Canal de captação para o programa piloto do NotaSync junto a escritórios contábeis de Santa Catarina.',
    tags: ['JavaScript', 'HTML5/CSS3', 'Tailwind CSS', 'LGPD', 'Lucide Icons'],
    githubUrl: 'https://github.com/Mauricio-G-Oliveira/makerpixelsite',
    liveUrl: 'https://www.makerpixeltech.com.br',
    badge: 'Produção',
    isEnterprise: true
  },
  {
    id: 'banda-livert-portal',
    title: 'Banda Livert — Website & Press Kit',
    category: 'fullstack',
    subtitle: 'Site Institucional & Press Kit Digital',
    company: 'Banda Livert',
    description: 'Website institucional com agenda de apresentações sincronizada para contratantes de eventos e casas de shows, galeria de fotos em alta resolução, bio dos integrantes e press kit completo para download.',
    architecture: 'Desenvolvimento mobile-first de alta performance, carregamento assíncrono de mídia pesada e canal direto de contratação.',
    impact: 'Centralização de todas as informações de contratação e portfólio da banda em circulação na região sul de Santa Catarina.',
    tags: ['JavaScript', 'HTML5/CSS3', 'Tailwind CSS', 'Mobile First', 'UI/UX'],
    githubUrl: 'https://github.com/Mauricio-G-Oliveira/banda-livert',
    liveUrl: null,
    badge: 'Produção',
    isEnterprise: false
  }
];

function setupProjects() {
  const container = document.getElementById('projects-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const modal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close-btn');

  if (!container) return;

  function renderProjects(filter = 'all') {
    container.innerHTML = '';
    const filtered = filter === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.category === filter);

    filtered.forEach(p => {
      const card = document.createElement('div');
      card.className = 'glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between group';
      
      const techBadges = p.tags.map(t => `<span class="badge-tech">${t}</span>`).join(' ');

      const actionButton = p.githubUrl
        ? `<a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors">
            <i data-lucide="github" class="w-4 h-4"></i> Ver Repositório
           </a>`
        : `<span class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
            <i data-lucide="lock" class="w-3.5 h-3.5 text-amber-400"></i> Repositório Privado (Empresarial)
           </span>`;

      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between gap-3 mb-4">
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full ${p.isEnterprise ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'}">
              ${p.badge}
            </span>
            <span class="text-xs text-slate-400 font-mono">${p.company}</span>
          </div>

          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
            ${p.title}
          </h3>
          <p class="text-sm font-medium text-sky-300/80 mb-3">${p.subtitle}</p>

          <p class="text-sm text-slate-300 line-clamp-3 mb-6 leading-relaxed">
            ${p.description}
          </p>

          <div class="flex flex-wrap gap-2 mb-6">
            ${techBadges}
          </div>
        </div>

        <div class="pt-4 border-t border-slate-800 flex items-center justify-between mt-auto">
          <button class="open-modal-btn text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 transition-all inline-flex items-center gap-1.5 border border-slate-700/60" data-id="${p.id}">
            <i data-lucide="layers" class="w-3.5 h-3.5 text-sky-400"></i> Arquitetura & Impacto
          </button>
          ${actionButton}
        </div>
      `;

      container.appendChild(card);
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Attach click handlers to architecture modal triggers
    container.querySelectorAll('.open-modal-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openProjectModal(id);
      });
    });
  }

  // Filter Buttons Handler
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('bg-sky-500/20', 'text-sky-400', 'border-sky-500/40');
        b.classList.add('bg-slate-800/60', 'text-slate-400', 'border-slate-700/40');
      });
      btn.classList.remove('bg-slate-800/60', 'text-slate-400', 'border-slate-700/40');
      btn.classList.add('bg-sky-500/20', 'text-sky-400', 'border-sky-500/40');

      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });

  // Open Modal Details
  function openProjectModal(id) {
    const project = projectsData.find(p => p.id === id);
    if (!project || !modal) return;

    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-subtitle').textContent = project.subtitle + ' • ' + project.company;
    document.getElementById('modal-description').textContent = project.description;
    document.getElementById('modal-architecture').textContent = project.architecture;
    document.getElementById('modal-impact').textContent = project.impact;

    const modalTags = document.getElementById('modal-tags');
    modalTags.innerHTML = project.tags.map(t => `<span class="badge-tech">${t}</span>`).join(' ');

    const modalLink = document.getElementById('modal-github-link');
    if (project.githubUrl) {
      modalLink.href = project.githubUrl;
      modalLink.classList.remove('hidden');
    } else {
      modalLink.classList.add('hidden');
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Close Modal Details
  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Initial Render
  renderProjects('all');
}

/* ==========================================================================
   Interactive Hero Terminal
   ========================================================================== */
function setupTerminal() {
  const tabs = document.querySelectorAll('.terminal-tab');
  const output = document.getElementById('terminal-content');

  const tabContents = {
    overview: `
<span class="text-emerald-400"># Desenvolvedor Full Stack Java (Spring Boot + React)</span>
<span class="text-slate-400">developer</span> = {
  <span class="text-sky-300">"name"</span>: <span class="text-amber-300">"Mauricio Goulart de Oliveira"</span>,
  <span class="text-sky-300">"github"</span>: <span class="text-indigo-300">"Mauricio-G-Oliveira"</span>,
  <span class="text-sky-300">"location"</span>: <span class="text-amber-300">"Tubarão, SC - Brasil"</span>,
  <span class="text-sky-300">"status"</span>: <span class="text-emerald-300">"Aberto a vagas de Desenvolvedor Java (pleno) — remoto"</span>,
  <span class="text-sky-300">"specialties"</span>: [
    <span class="text-amber-300">"Java 21 & Spring Boot 3 (Security, Data JPA, REST)"</span>,
    <span class="text-amber-300">"PostgreSQL, Flyway & Modelagem Relacional"</span>,
    <span class="text-amber-300">"React, TypeScript & Tailwind CSS"</span>,
    <span class="text-amber-300">"Docker & Conteinerização"</span>,
    <span class="text-amber-300">"Domínio Contábil & Fiscal (NFC-e e Reforma Tributária IBS/CBS)"</span>
  ],
  <span class="text-sky-300">"core_principles"</span>: [<span class="text-cyan-300">"SOLID"</span>, <span class="text-cyan-300">"Arquitetura em Camadas"</span>, <span class="text-cyan-300">"Idempotência"</span>, <span class="text-cyan-300">"Testabilidade"</span>]
};
    `.trim(),

    metrics: `
<span class="text-emerald-400"># Arquitetura & Decisões Técnicas</span>
<span class="text-purple-400">❯</span> Fatos verificáveis implementados nos projetos:
  <span class="text-sky-400">● Cofre de Certificados:</span> Criptografia AES-256-GCM para certificados A1 contábeis.
  <span class="text-sky-400">● Reforma Tributária:</span> Conferência item a item integrada à calculadora pública da RTC.
  <span class="text-sky-400">● Partidas Dobradas:</span> Invariante estrito (Débitos = Créditos) com ordenação contra deadlocks.
  <span class="text-sky-400">● Idempotência:</span> Interceptor com chave UUIDv7 para segurança contra requisições duplicadas.
  <span class="text-sky-400">● Banco Versionado:</span> Migrations reproduzíveis com Flyway no PostgreSQL.
    `.trim(),

    contact: `
<span class="text-emerald-400"># Contato Direto & Disponibilidade</span>
<span class="text-slate-400">canal_preferencial</span> = <span class="text-emerald-400">"WhatsApp (48) 98457-0272"</span>;
<span class="text-slate-400">email_corporativo</span> = <span class="text-sky-400">"mauriciogoulart.deoliveira37@gmail.com"</span>;
<span class="text-slate-400">linkedin</span> = <span class="text-indigo-400">"https://linkedin.com/in/mauriciogoulartdev"</span>;
<span class="text-slate-400">github</span> = <span class="text-purple-400">"https://github.com/Mauricio-G-Oliveira"</span>;

<span class="text-emerald-400">Aberto a vagas de Desenvolvedor Java (pleno) — remoto.</span>
    `.trim()
  };

  if (!tabs || !output) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('bg-slate-800', 'text-sky-400', 'border-b-2', 'border-sky-500');
        t.classList.add('text-slate-400');
      });
      tab.classList.remove('text-slate-400');
      tab.classList.add('bg-slate-800', 'text-sky-400', 'border-b-2', 'border-sky-500');

      const target = tab.getAttribute('data-tab');
      if (tabContents[target]) {
        output.innerHTML = tabContents[target];
      }
    });
  });
}

/* ==========================================================================
   ScrollSpy & Active Navigation
   ========================================================================== */
function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-sky-400', 'font-semibold');
      link.classList.add('text-slate-300');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.remove('text-slate-300');
        link.classList.add('text-sky-400', 'font-semibold');
      }
    });
  });
}
