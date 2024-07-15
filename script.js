const myTags = [
  'JavaScript', 'CSS', 'HTML', 'API',
  'Bootstrap', 'WordPress', 'React',
  'Figma', 'GSAP', 'Flexbox', 'Ajax', 'Node.js', 'Redux', 'Github'
  ];
  var tagCloud = TagCloud('.content', myTags,{
  radius: 300,
  maxSpeed: 'normal',
  initSpeed: 'slow',
  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  keep: true
  });


  function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
  }
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
  var btn = $('#up'); //создаем переменную для кнопки
  $(window).scroll(function() {
  if ($(window).scrollTop() > 500) { //отслеживаем высоту от верха страницы в 500px
  btn.addClass('show'); // присваиваем кнопке класс show для управления видимостью
  } else {
  btn.removeClass('show'); // если меньше 500px от верха страницы убираем класс show
  }
  });
  btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300'); //при клике на кнопку плавно прокручиваем до верха body
  });
  AOS.init({
  delay: 200,
  duration: 2000,
  }
  );