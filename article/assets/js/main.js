/**
 * CodeForge Enterprise - Core Global JavaScript
 * Handles navigation, mobile drawers, modals, statistic animations & interactive elements
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initStatsObserver();
  initBackToTop();
  initGlobalModals();
});

// 1. Mobile Menu Drawer
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  const hamIcon = document.getElementById('hamburgerIcon');
  const closeIcon = document.getElementById('closeIcon');

  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
      menu.classList.remove('hidden');
      if (hamIcon) hamIcon.classList.add('hidden');
      if (closeIcon) closeIcon.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
      if (hamIcon) hamIcon.classList.remove('hidden');
      if (closeIcon) closeIcon.classList.add('hidden');
    }
  });

  // Close mobile menu on clicking any link inside
  const links = menu.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      if (hamIcon) hamIcon.classList.remove('hidden');
      if (closeIcon) closeIcon.classList.add('hidden');
    });
  });
}

// 2. Statistics Counter with IntersectionObserver
function initStatsObserver() {
  let hasAnimated = false;
  const statNumbers = document.querySelectorAll('.stat-number');
  const statSection = document.getElementById('statistics');

  if (!statNumbers.length || !statSection) return;

  const runAnimation = () => {
    statNumbers.forEach(el => {
      const target = parseInt(el.getAttribute('data-target'), 10) || 0;
      const duration = 1600;
      const start = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(progress * target);
        el.innerText = current;
        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.innerText = target;
        }
      }
      requestAnimationFrame(update);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        runAnimation();
      }
    });
  }, { threshold: 0.25 });

  observer.observe(statSection);
}

// 3. Back to Top Button
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
      btn.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
    } else {
      btn.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
      btn.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// 4. Global Modals (SSO Login, Enterprise Demo, Course Enrollment)
function initGlobalModals() {
  window.openModal = function(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeModal = function(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  };

  // Close modals on backdrop click
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      e.target.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  });
}

// 5. Code Window Tab Switcher
window.switchHeroTab = function(tabName) {
  const tabs = ['html', 'react', 'js'];
  tabs.forEach(t => {
    const codeEl = document.getElementById(`code-${t}`);
    const tabBtn = document.getElementById(`tab-${t}`);
    if (!codeEl || !tabBtn) return;

    if (t === tabName) {
      codeEl.classList.remove('hidden');
      tabBtn.classList.add('bg-slate-800', 'text-sky-400', 'border-sky-500/40');
      tabBtn.classList.remove('text-slate-400', 'hover:bg-slate-900');
    } else {
      codeEl.classList.add('hidden');
      tabBtn.classList.remove('bg-slate-800', 'text-sky-400', 'border-sky-500/40');
      tabBtn.classList.add('text-slate-400', 'hover:bg-slate-900');
    }
  });
};

// 6. Copy Code Button
window.triggerCopyCode = function() {
  const copyText = document.getElementById('copyText');
  if (copyText) {
    copyText.innerText = 'Copied!';
    setTimeout(() => {
      copyText.innerText = 'Copy';
    }, 1800);
  }
};

// 7. Auth Form Submit Handlers
window.handleEnterpriseAuth = function(e, type) {
  e.preventDefault();
  const alertMsg = type === 'sso' 
    ? 'Single Sign-On (SSO) authentication initialized. Redirecting to Enterprise Identity Provider...'
    : 'Corporate access request submitted! Your assigned Technical Account Manager will reach out shortly.';
  alert(alertMsg);
  closeModal('ssoModal');
  closeModal('demoModal');
};
