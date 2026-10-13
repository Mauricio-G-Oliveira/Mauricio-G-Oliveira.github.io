/**
 * Portfolio JavaScript - Mauricio Oliveira
 * Senior Software Engineer & Back-End Specialist
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
        // Fallback for older browsers
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
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

/* ==========================================================================
   Project Data & Filter Management
   ========================================================================== */
const projectsData = [
  {
    id: 'conciliacao-contabil',
    title: 'Sistema de Conciliação Contábil & Auditoria',
    category: 'backend',
    subtitle: 'Solução Corporativa de Missão Crítica',
    company: 'Orprocon / Net Data Computadores',
    description: 'Sistema corporativo voltado para a automação e auditoria contábil. Responsável pela validação em lote de registros financeiros, reduzindo o tempo de conferência manual de horas para poucos minutos.',
    architecture: 'Arquitetura limpa em camadas (Controller, Service, Repository) com isolamento de regras fiscais complexas, transações ACID rigorosas no PostgreSQL e logs de auditoria detalhados.',
    impact: 'Redução de 85% no tempo de conferência contábil mensal e mitigação total de erros de digitação e duplicidade.',
    tags: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'Docker', 'Clean Architecture', 'JPA/Hibernate'],
    githubUrl: null,
    badge: 'Enterprise / Em Produção',
    isEnterprise: true
  },
  {
    id: 'rag-vector-search',
    title: 'RAG & Vector Search Engine (pgVector)',
    category: 'ai',
    subtitle: 'Busca Semântica e Ingestão de Documentos',
    company: 'DevFullCycle MBA IA & Open Source',
    description: 'Pipeline escalável de inteligência artificial generativa que ingere relatórios e manuais em PDF, divide em chunks semânticos, gera embeddings vetoriais de alta dimensionalidade e armazena em PostgreSQL com extensão pgVector.',
    architecture: 'Mecanismo RAG (Retrieval-Augmented Generation) com cálculo de similaridade de cosseno direto no banco relacional, garantindo respostas estritamente embasadas nos dados originais sem alucinações.',
    impact: 'Recuperação semântica instantânea em milissegundos com alta acurácia contextual para bases documentais volumosas.',
    tags: ['Python', 'PostgreSQL', 'pgVector', 'OpenAI Embeddings', 'RAG', 'Docker'],
    githubUrl: 'https://github.com/mauriciogoulart/mba-ia-desafio-ingestao-busca',
    badge: 'GitHub Open Source',
    isEnterprise: false
  },
  {
    id: 'gestao-pessoas-rbac',
    title: 'Sistema de Gestão de Pessoas & RBAC',
    category: 'fullstack',
    subtitle: 'Controle de Acesso Granular & Compliance',
    company: 'Orprocon / Net Data Computadores',
    description: 'Plataforma integrada de gestão de colaboradores com controle de acesso baseado em papéis (Role-Based Access Control), gerenciamento de permissões dinâmicas e relatórios analíticos.',
    architecture: 'Back-end em Spring Boot provendo API REST segura com JWT e Spring Security. Front-end reativo em React com componentes modulares e validações estritas de sessão.',
    impact: 'Padronização da segurança operacional de múltiplos setores internos e conformidade com requisitos de LGPD e segurança da informação.',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'React', 'PostgreSQL'],
    githubUrl: null,
    badge: 'Enterprise / Em Produção',
    isEnterprise: true
  },
  {
    id: 'llm-evaluation-prompt',
    title: 'LLM Pull Evaluation & Prompt Framework',
    category: 'ai',
    subtitle: 'Governança & Benchmarking de Modelos de Linguagem',
    company: 'DevFullCycle MBA IA',
    description: 'Framework de engenharia de prompts e avaliação automatizada de respostas de modelos de linguagem para validação de fluxos analíticos complexos.',
    architecture: 'Arquitetura modular orientada a testes automatizados de consistência, grading semântico e orquestração de parâmetros (temperature, top_p, structured schema).',
    impact: 'Auditoria e garantia de confiabilidade de modelos de linguagem antes de integrações em ambientes produtivos.',
    tags: ['Python', 'LLM Orchestration', 'Prompt Engineering', 'AI Evaluation', 'Docker'],
    githubUrl: 'https://github.com/mauriciogoulart/mba-ia-pull-evaluation-prompt',
    badge: 'GitHub Open Source',
    isEnterprise: false
  },
  {
    id: 'makerpixel-web-suite',
    title: 'Ecossistema Web Integrado & Geolocalização',
    category: 'fullstack',
    subtitle: 'Aplicações Web Responsivas de Alto Throughput',
    company: 'MakerPixel TechSystem',
    description: 'Desenvolvimento e manutenção de suíte de aplicações web integrando interfaces de usuário dinâmicas com APIs back-end resilientes e microsserviços geolocalizados.',
    architecture: 'Comunicação assíncrona entre serviços, autenticação centralizada JWT, modelagem relacional de alta performance e pipelines conteinerizadas com Docker.',
    impact: 'Redução significativa em chamadas redundantes e elevação comprovada na estabilidade de entregas contínuas em ciclos Scrum.',
    tags: ['React', 'Spring Boot', 'Docker', 'PostgreSQL', 'APIs REST', 'Scrum/Kanban'],
    githubUrl: null,
    badge: 'Enterprise Milestone',
    isEnterprise: true
  },
  {
    id: 'cloud-serverless-security',
    title: 'Serverless Cloud Architecture & Cognito',
    category: 'backend',
    subtitle: 'Microsserviços sem Servidor & Identidade Federada AWS',
    company: 'Digital Innovation One & AWS Labs',
    description: 'Implementação de arquitetura baseada em funções serverless e segurança em nuvem utilizando AWS Lambda, API Gateway e Amazon Cognito para autenticação e gestão de identidade de usuários.',
    architecture: 'Abordagem orientada a eventos (*event-driven*), escalabilidade elástica automática com custo zero em repouso e políticas IAM com privilégio mínimo.',
    impact: 'Arquitetura de microsserviços capaz de lidar com picos de tráfego instantâneos mantendo baixíssima latência e conformidade com padrões AWS.',
    tags: ['AWS Lambda', 'Amazon Cognito', 'JavaScript', 'Serverless', 'API Gateway', 'Cloud Security'],
    githubUrl: 'https://github.com/mauriciogoulart/dio-desafio-cognito',
    badge: 'GitHub Open Source',
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
<span class="text-emerald-400"># Engenheiro de Software Full Stack & Especialista Back-End</span>
<span class="text-slate-400">developer</span> = {
  <span class="text-sky-300">"name"</span>: <span class="text-amber-300">"Mauricio Goulart de Oliveira"</span>,
  <span class="text-sky-300">"location"</span>: <span class="text-amber-300">"Tubarão, SC - Brasil"</span>,
  <span class="text-sky-300">"status"</span>: <span class="text-emerald-300">"Disponível para novos desafios / Tech Lead / Sênior"</span>,
  <span class="text-sky-300">"specialties"</span>: [
    <span class="text-amber-300">"Arquitetura de Microsserviços & APIs REST"</span>,
    <span class="text-amber-300">"Ecossistema Java 17/21 & Spring Boot 3"</span>,
    <span class="text-amber-300">"RAG, Busca Vetorial & PostgreSQL pgVector"</span>,
    <span class="text-amber-300">"Modelagem Relacional de Alta Concorrência"</span>,
    <span class="text-amber-300">"Front-End Moderno com React & Tailwind"</span>
  ],
  <span class="text-sky-300">"core_principles"</span>: [<span class="text-cyan-300">"SOLID"</span>, <span class="text-cyan-300">"Clean Architecture"</span>, <span class="text-cyan-300">"Fail-Fast"</span>, <span class="text-cyan-300">"Observability"</span>]
};
    `.trim(),

    metrics: `
<span class="text-emerald-400"># Indicadores de Performance & Impacto</span>
<span class="text-purple-400">❯</span> Executando auditoria de impacto em produção...
  <span class="text-sky-400">● Conciliação Contábil:</span> Tempo reduzido de 4h diárias para ~3 minutos.
  <span class="text-sky-400">● Precisão & Governança:</span> 0 inconsistências contábeis em lotes auditados.
  <span class="text-sky-400">● Busca Semântica RAG:</span> Latência p95 &lt; 180ms em base vetorial pgVector.
  <span class="text-sky-400">● CI/CD & Deploy:</span> Esteiras conteinerizadas com Docker & zero-downtime.
    `.trim(),

    contact: `
<span class="text-emerald-400"># Contato Direto & Disponibilidade</span>
<span class="text-slate-400">canal_preferencial</span> = <span class="text-emerald-400">"WhatsApp (48) 98457-0272"</span>;
<span class="text-slate-400">email_corporativo</span> = <span class="text-sky-400">"mauriciogoulart.deoliveira37@gmail.com"</span>;
<span class="text-slate-400">linkedin</span> = <span class="text-indigo-400">"https://linkedin.com/in/mauriciogoulartdev"</span>;
<span class="text-slate-400">github</span> = <span class="text-purple-400">"https://github.com/mauriciogoulart"</span>;

<span class="text-emerald-400">Pronto para acelerar a entrega e robustez técnica do seu time.</span>
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
