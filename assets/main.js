/* ============================================================
   Trekking Capital — JavaScript
   Versão: 1.0
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     FAQ — Acordeão
  ---------------------------------------------------------- */
  function initFaq() {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const item = btn.closest('.faq-item');
        const isOpen = item.classList.contains('open');

        // Fecha todos
        document.querySelectorAll('.faq-item').forEach(function (i) {
          i.classList.remove('open');
        });

        // Abre o clicado (se estava fechado)
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    });
  }

  /* ----------------------------------------------------------
     NAVEGAÇÃO — Highlight da seção ativa ao scroll
  ---------------------------------------------------------- */
  function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navLinks.forEach(function (link) {
              link.classList.remove('active');
              if (link.getAttribute('href') === '#' + entry.target.id) {
                link.classList.add('active');
              }
            });
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ----------------------------------------------------------
     NAVEGAÇÃO — Scroll suave para âncoras internas
  ---------------------------------------------------------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ----------------------------------------------------------
     MENU MOBILE — Toggle do menu em telas pequenas
  ---------------------------------------------------------- */
  function initMobileMenu() {
    const toggle = document.querySelector('.nav-mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.contains('nav-links--open');
      navLinks.classList.toggle('nav-links--open', !isOpen);
      toggle.setAttribute('aria-expanded', String(!isOpen));
    });

    // Fecha ao clicar em um link
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('nav-links--open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ----------------------------------------------------------
     ANIMAÇÕES — Fade-in ao entrar na viewport
  ---------------------------------------------------------- */
  function initFadeIn() {
    const elements = document.querySelectorAll(
      '.method-step, .risco-card, .ind-card, .prop-card, .qs-card, .faq-item, .res-card'
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach(function (el, i) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      el.style.transition = 'opacity 0.45s ease ' + (i * 0.05) + 's, transform 0.45s ease ' + (i * 0.05) + 's';
      observer.observe(el);
    });

    // Classe que dispara a animação
    document.head.insertAdjacentHTML('beforeend',
      '<style>.is-visible{opacity:1!important;transform:translateY(0)!important}</style>'
    );
  }

  /* ----------------------------------------------------------
     WHATSAPP — Abre link direto com mensagem pré-definida
  ---------------------------------------------------------- */
  function initWhatsApp() {
    const btn = document.querySelector('.whatsapp-btn');
    if (!btn) return;

    // Números dos dois diretores — usa o da Cíntia (comercial) por padrão
    var phone = '5511996210179';
    var message = encodeURIComponent('Olá! Vim pelo site da Trekking Capital e gostaria de saber mais sobre a metodologia de investimentos imobiliários.');

    btn.setAttribute('href', 'https://wa.me/' + phone + '?text=' + message);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
    btn.setAttribute('aria-label', 'Fale conosco pelo WhatsApp');
  }

  /* ----------------------------------------------------------
     INIT — Chama todas as funções ao carregar
  ---------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    initFaq();
    initNavHighlight();
    initSmoothScroll();
    initMobileMenu();
    initFadeIn();
    initWhatsApp();
  });

})();
