const myTags = [
  'JavaScript', 'CSS', 'HTML', 'API',
  'Bootstrap', 'WordPress', 'React',
  'Figma', 'GSAP', 'Flexbox', 'Ajax', 'Node.js', 'Redux', 'Github'
];

function getAdaptiveRadius() {
  // Настройте коэффициент в зависимости от ваших предпочтений
  const factor = 0.3;
  return Math.min(window.innerWidth, window.innerHeight) * factor;
}

function createTagCloud() {
  const radius = getAdaptiveRadius();
  return TagCloud('.content', myTags, {
    radius: radius,
    maxSpeed: 'normal',
    initSpeed: 'slow',
    direction: 135,
    keep: true
  });
}

// Создаём начальное облако тегов
let tagCloud = createTagCloud();

// Обновляем облако тегов при изменении размера окна
window.addEventListener('resize', () => {
  tagCloud.destroy(); // Уничтожаем существующий экземпляр
  tagCloud = createTagCloud(); // Создаём новый экземпляр с обновлённым радиусом
});

  

  function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    }
    


    document.addEventListener('DOMContentLoaded', function () {
      // Функция для обработки клика
      function handleLinkClick(selector, target) {
        document.querySelector(selector).addEventListener('click', function (e) {
          e.preventDefault();
          gsap.to(window, {
            duration: 1.5,
            scrollTo: {
              y: target,
              offsetY: 70
            }
          });
        });
      }
    
      // Добавляем обработчики для ссылок
      handleLinkClick('.link[href="#contact"]', "#contact");
      handleLinkClick('.link[href="#home"]', "#home");
      handleLinkClick('.link[href="#portfolio"]', "#portfolio");
      handleLinkClick('.link[href="#about"]', "#about");
    });

  


  gsap.to("#myText", {duration: 3, text: "&lt&gt WELCOME &lt/&gt", delay: 2});



  const back = document.querySelector('#back');
  const next = document.querySelector('#next');
  const photos = ["2.jpg", "3.jpg", "4.jpg"];
  let i=0;
  next.addEventListener('click', () => {
  i++;
  if (i > photos.length-1) {
  i=0;
  }
  document.querySelector('#pictures').src=photos[i];
  })
  back.addEventListener('click', () => {
  i--;
  if (i<0) {
  i = photos.length-1;
  }
  document.querySelector('#pictures').src=photos[i];
  })



  // scroll to up

  const mybutton = document.querySelector("#toTop");

  window.addEventListener("scroll", function() {
      if (window.scrollY > 400) {
          mybutton.style.display = "block";
      } else {
          mybutton.style.display = "none";
      }
  });
  
  mybutton.addEventListener("click", function() {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('language-selector');

    languageSelector.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        loadTranslations(selectedLanguage);
    });

    // Load default language
    loadTranslations('en');
});

function loadTranslations(language) {
    fetch(`${language}.json`)
        .then(response => response.json())
        .then(translations => {
            document.getElementById('greeting').textContent = translations.greeting;
            document.getElementById('description').textContent = translations.description;
            document.getElementById('heading').textContent = translations.heading;
        })
        .catch(error => console.error('Error loading translations:', error));
}
