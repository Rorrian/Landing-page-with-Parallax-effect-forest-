# Лендинг с параллакс-эффектом

* Параллакс-эффект с многослойным изображением при скролле
* Библиотека GSAP(библиотека JavaScript для веб-анимации)

Deployment:  
https://rorrian.github.io/Landing-page-with-Parallax-effect-forest-/

______

Суть параллакса на примере:  
 Есть общий div со слоями. В нем есть 3 слоя:  
 1 - дальний(цельная исходная картинка)  
 2 - средний(содержит часть исходного изображения)  
 3 - передний (небольшая часть исходного изображения)  
 Все слои позиционируются абсолютно относительно общего контейнера.  
 Мы считываем кол-во пикселей из JS и передаем это значение в CSS(добавляем значение px в стили тега <html> с помощью созданной переменной --scrollTop).
 Используем свойство transform для смещения по оси Y каждого слоя. Но смещаем на разные значения:  
 Для 1 дальнего слоя мы замедляем реальную скорость скролла в 2 раза = указываем значение в px, на кот. нужно сдвинуть вверх слой, меньше в 2 раза, чем то на кот. была прокручена страница. Каждый следующий слой замедляем еще сильнее.

 

Вот так можно:

<details>
 
[![введите сюда описание изображения][1]][1]
 
[1]: https://i.stack.imgur.com/AKtls.jpg
 
</details>
