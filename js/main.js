/* =========================================================
   Service Ciro — interacciones
   ========================================================= */
(function () {
  'use strict';

  // WhatsApp va al 11 2872-4860; las llamadas, al 11 7033-2439
  var WHATSAPP = '5491128724860';

  /* ---------- año del footer ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- header al hacer scroll ---------- */
  var header = document.getElementById('header');
  var onScroll = function () {
    header.classList.toggle('is-stuck', window.scrollY > 12);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- menú mobile ---------- */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');

  var closeNav = function () {
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Abrir menú');
  };

  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });

  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') closeNav();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) closeNav();
  });

  /* ---------- formulario -> WhatsApp ---------- */
  var form = document.getElementById('form');
  if (!form) return;

  var setError = function (input, message) {
    var field = input.closest('.field');
    field.classList.add('is-error');
    if (!field.querySelector('.field__err')) {
      var span = document.createElement('span');
      span.className = 'field__err';
      span.textContent = message;
      field.appendChild(span);
    }
    input.setAttribute('aria-invalid', 'true');
  };

  var clearError = function (input) {
    var field = input.closest('.field');
    field.classList.remove('is-error');
    var err = field.querySelector('.field__err');
    if (err) err.remove();
    input.removeAttribute('aria-invalid');
  };

  Array.prototype.forEach.call(form.querySelectorAll('input, select, textarea'), function (input) {
    input.addEventListener('input', function () { clearError(input); });
    input.addEventListener('change', function () { clearError(input); });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var campos = [
      { el: form.elements.nombre, msg: 'Necesitamos tu nombre.' },
      { el: form.elements.zona, msg: 'Contanos en qué localidad estás.' },
      { el: form.elements.equipo, msg: 'Elegí qué equipo es.' },
      { el: form.elements.detalle, msg: 'Contanos brevemente qué le pasa.' }
    ];

    var primerError = null;

    campos.forEach(function (c) {
      clearError(c.el);
      if (!c.el.value.trim()) {
        setError(c.el, c.msg);
        if (!primerError) primerError = c.el;
      }
    });

    if (primerError) {
      primerError.focus();
      return;
    }

    var texto =
      'Hola, quiero pedir un presupuesto.\n\n' +
      'Nombre: ' + form.elements.nombre.value.trim() + '\n' +
      'Zona: ' + form.elements.zona.value.trim() + '\n' +
      'Equipo: ' + form.elements.equipo.value + '\n' +
      'Problema: ' + form.elements.detalle.value.trim();

    window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(texto), '_blank', 'noopener');
  });
})();
