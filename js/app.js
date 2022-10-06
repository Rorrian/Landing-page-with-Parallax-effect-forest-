//----- Передаем значение из JS в CSS -----
window.addEventListener("scroll", (e) => {
    // ! Передаем значение из JS в CSS:
    // При скролле экрана мы добавляем тегу <html> стили:
    // переменная scrollTop(видимая из любого CSS-файла) = прокрученному кол-ву пикселей, чтобы использовать данное значение в CSS
    document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)
});

//----- Подключаем библиотеку для плавного скролла -----
// Регистрация плагина
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content"
});