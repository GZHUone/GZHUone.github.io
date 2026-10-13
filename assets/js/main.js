'use strict';

(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const themeMeta = document.querySelector('meta[name="theme-color"]');

  function updateThemeButton() {
    const dark = root.dataset.theme === 'dark';
    themeButton.setAttribute('aria-label', dark ? '切换到浅色模式' : '切换到深色模式');
    themeButton.setAttribute('aria-pressed', String(dark));
    themeMeta.content = dark ? '#1c2024' : '#ffffff';
  }
  updateThemeButton();
  themeButton.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = theme;
    try { localStorage.setItem('gzhu-theme', theme); } catch (_) {}
    updateThemeButton();
  });

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.navigation');
  function closeMenu() {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', '打开导航菜单');
  }
  menuButton.addEventListener('click', () => {
    const open = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? '关闭导航菜单' : '打开导航菜单');
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('click', event => {
    if (!event.target.closest('.masthead')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
      closeMenu();
      menuButton.focus();
    }
  });
  window.matchMedia('(min-width: 768px)').addEventListener('change', closeMenu);

  document.querySelectorAll('.project-details').forEach(details => {
    details.addEventListener('toggle', () => {
      details.querySelector('summary').textContent = details.open ? '收起项目详情' : '展开项目详情';
    });
  });

  const dialog = document.querySelector('#media-dialog');
  const dialogImage = document.querySelector('#media-dialog-image');
  const dialogTitle = document.querySelector('#media-dialog-title');
  const dialogCaption = document.querySelector('#media-dialog-caption');
  let previousFocus = null;

  document.querySelectorAll('[data-lightbox], [data-wechat]').forEach(link => {
    link.addEventListener('click', event => {
      if (typeof dialog.showModal !== 'function') return;
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const wechat = link.hasAttribute('data-wechat');
      const image = link.querySelector('img');
      previousFocus = link;
      dialog.classList.toggle('media-dialog--wechat', wechat);
      dialogImage.src = link.href;
      dialogImage.alt = wechat ? '朱冠全的微信二维码' : image.alt;
      dialogTitle.textContent = wechat ? '微信 · 朱冠全' : '项目图片';
      dialogCaption.textContent = wechat ? '使用微信扫一扫，欢迎交流。' : link.closest('figure').querySelector('figcaption').textContent;
      dialog.showModal();
      document.body.classList.add('dialog-open');
    });
  });
  dialog.querySelector('[data-close-dialog]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    dialogImage.removeAttribute('src');
    if (previousFocus) previousFocus.focus({ preventScroll: true });
  });

  const navigationLinks = [...navigation.querySelectorAll('a')];
  const sections = navigationLinks.map(link => document.querySelector(link.hash));
  let scheduled = false;
  function updateNavigation() {
    const threshold = document.querySelector('.masthead').offsetHeight + 100;
    let active = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= threshold) active = section;
    }
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) active = sections[sections.length - 1];
    navigationLinks.forEach(link => {
      const current = link.hash === `#${active.id}`;
      link.classList.toggle('is-active', current);
      if (current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scheduled = false;
  }
  window.addEventListener('scroll', () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(updateNavigation);
    }
  }, { passive: true });
  window.addEventListener('resize', updateNavigation);
  window.addEventListener('load', updateNavigation);
  updateNavigation();
})();
