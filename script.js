const myTags = [
  'JavaScript', 'CSS', 'HTML', 'API',
  'Bootstrap', 'WordPress', 'React',
  'Figma', 'GSAP', 'Flexbox', 'Ajax', 'Node.js', 'Redux', 'Github'
];

function getRadius() {
  return window.innerWidth < 540 ? 150 : 200;
}

function createTagCloud() {
  const radius = getRadius();
  return TagCloud('.content', myTags, {
    radius: radius,
    maxSpeed: 'normal',
    initSpeed: 'slow',
    direction: 90,
    keep: true
  });
}

let tagCloud = createTagCloud();

window.addEventListener('resize', function() {
  tagCloud.destroy();  
  tagCloud = createTagCloud();  
});
  

function menuOnClick() {
  const menu = document.getElementById('menu');
  const nav = document.getElementById('nav');
  const menuBg = document.getElementById('menu-bg');

  menu.classList.toggle('change');
  nav.classList.toggle('change');
  menuBg.classList.toggle('change-bg');
}

window.addEventListener('click', function(event) {
  const menu = document.getElementById('menu');
  const nav = document.getElementById('nav');
  const menuBg = document.getElementById('menu-bg');
  const isClickInsideMenu = menu.contains(event.target);

  if (!isClickInsideMenu) {
      menu.classList.remove('change');
      nav.classList.remove('change');
      menuBg.classList.remove('change-bg');
  }
});


  gsap.to("#myText", {duration: 3, text: "&lt&gt My name is Olga Makeikina &lt/&gt", delay: 2});



  const back = document.querySelector('#back');
  const next = document.querySelector('#next');
  const photos = ["2.png", "3.jpg", "4.jpg"];
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



