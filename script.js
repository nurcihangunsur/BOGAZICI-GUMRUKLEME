const benefitsItems = document.querySelectorAll('.benefitsItem');
const chooseUsItems = document.querySelectorAll('.chooseUsItem');
const companyInfo = document.querySelector('.company-details');

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const dotsContainer = document.querySelector(".dots");


  let index = 0;

  function updateSlider() {
      const slides = document.querySelectorAll('.slide');
      slides.forEach((slide, i) => {
          if (i === index && slide.querySelector('img')) {
              slide.classList.add('active');
          } else {
              slide.classList.remove('active');
          }
      });

      const images = slides[index].querySelectorAll('img');
      let loadedImagesCount = 0;

      images.forEach((image) => {
          const src = image.getAttribute('src');
          const newSrc = image.getAttribute('data-src');

          if (newSrc && src !== newSrc) {
              image.onload = function () {
                  loadedImagesCount++;

                  if (loadedImagesCount === images.length) {
                      slider.addEventListener('transitionend', function transitionEndHandler() {
                          // İşlemler burada yer alacak
                          slider.removeEventListener('transitionend', transitionEndHandler);
                      });
                  }
              };

              image.setAttribute('src', newSrc);
          }
      });

      slider.style.transform = `translateX(${-index * 100}vw)`;
  }

  function updateDots() {
      const dots = Array.from(dotsContainer.children);
      dots.forEach((dot, i) => {
          dot.classList.toggle("active", i === index);
      });
  }

  function prevSlide() {
      index = (index - 1 + 5) % 5;
      updateSlider();
      updateDots();
  }

  function nextSlide() {
      index = (index + 1) % 5;
      updateSlider();
      updateDots();
  }

  function createDot() {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dotsContainer.appendChild(dot);
      dot.addEventListener("click", () => {
          index = dotsContainer.children.indexOf(dot);
          updateSlider();
          updateDots();
      });
  }

  for (let i = 0; i < 5; i++) {
      createDot();
  }

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  updateDots();
  checkVisibility();
});

window.addEventListener("scroll", function () {
 
});

function checkVisibility() {
  const benefitsItems = document.querySelectorAll('.benefitsItem');
  const chooseUsItems = document.querySelectorAll('.chooseUsItem');
  
  benefitsItems.forEach((item) => {
    const position = item.getBoundingClientRect();
    const screenHeight = window.innerHeight;

    if (position.top < screenHeight * 0.8 && position.bottom >= 0) {
      item.classList.add('fade-in', 'visible');
    } else {
      item.classList.remove('fade-in', 'visible');
    }
  });

  chooseUsItems.forEach((item) => {
    const position = item.getBoundingClientRect();
    const screenHeight = window.innerHeight;

    if (position.top < screenHeight * 0.8 && position.bottom >= 0) {
      item.classList.add('fade-in', 'visible');
    } else {
      item.classList.remove('fade-in', 'visible');
    }
  });
}
function performSearch() {
  var searchText = document.getElementById('searchInput').value.toLowerCase();
  var pageContent = document.body.innerHTML;
  var regex = new RegExp(searchText, 'gi');

  // Önceki vurgulamaları temizle
  var highlightedElements = document.querySelectorAll('.highlighted');
  highlightedElements.forEach(function (element) {
    element.classList.remove('highlighted');
  });

  // Eşleşen kelimeleri vurgula
  pageContent = pageContent.replace(regex, function(match) {
    return '<span class="highlighted">' + match + '</span>';
  });

  document.body.innerHTML = pageContent;

  checkVisibility(); // Arama işlemi sonrasında görünürlüğü kontrol et
}
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
window.addEventListener('resize', checkVisibility);


window.addEventListener('scroll', () => {
  checkVisibility();
});

window.addEventListener('load', () => {
  checkVisibility();
});

window.addEventListener('resize', () => {
  checkVisibility();
});


function hoverEffect(element) {
  element.style.transition = 'background-color 0.3s ease-in-out, color 0.3s ease-in-out';
}

function unhoverEffect(element) {
  element.style.transition = 'background-color 0.3s ease-in-out, color 0.3s ease-in-out';
}

window.onscroll = function () {
  scrollFunction();
};


// Butonun konumunu güncelleyen fonksiyon
document.addEventListener("DOMContentLoaded", function() {
  var dropdown2 = document.querySelector('.dropdown2');
  var dropdownContent = document.querySelector('.dropdown2-content');

  dropdown2.addEventListener('click', function(event) {
    event.stopPropagation(); // Dropdown2'ye tıklandığında sayfa tıklamalarını durdur
    dropdownContent.classList.toggle('show');
  });

  // Sayfa üzerine tıklandığında dropdown'ı kapat
  document.addEventListener('click', function(event) {
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  });

  // Alt sayfalara yönlendirme
  var subPages = document.querySelectorAll('.dropdown2-content a');
  subPages.forEach(function(subPage) {
    subPage.addEventListener('click', function(event) {
      event.stopPropagation(); // Alt sayfalara tıklandığında sayfa tıklamalarını durdur
      var pageLink = subPage.getAttribute('href');
      window.location.href = pageLink;
    });
  });
});
function changePage(pageName) {
  window.location.href = pageName;
}
function toggleAnswer(index) {
  const faqBox = document.querySelector(`.faq-section .faq-box:nth-child(${index})`);
  faqBox.classList.toggle('active');
}

// Sağ taraftaki sorular için ayrı bir fonksiyon ekleyelim
function toggleAnswerRight(index) {
  const faqBox = document.querySelector(`.faq-section .faq-column:last-child .faq-box:nth-child(${index})`);
  faqBox.classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', function () {
  const rightColumn = document.querySelector('.faq-column:last-child');

  rightColumn.querySelectorAll('.faq-box').forEach(function (box, index) {
      box.addEventListener('click', function () {
          toggleAnswerRight(index + 1);
      });
  });
});
function toggleContent(contentId) {
  var content = document.getElementById(contentId);
  var title = content.previousElementSibling; // Başlığı al

  if (content.style.display === "" || content.style.display === "none") {
    // Tıklanınca içeriği göster, başlığı gizle
    content.style.display = "block";
    title.style.display = "none";
  } else {
    // Tıklanınca içeriği gizle, başlığı göster
    content.style.display = "none";
    title.style.display = "block";
  }
}
function toggleAboutDropdown() {
  var dropdownContent = document.getElementById("aboutDropdownContent");
  dropdownContent.classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn5')) {
      var dropdowns = document.getElementsByClassName("dropdown5-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}
var video = document.getElementById("myVideo");
var playButton = document.getElementById("play-button");

function playPause() {
    if (video.paused) {
        video.play();
        playButton.style.display = "none";
    } else {
        video.pause();
        playButton.style.display = "block";
    }
}
function redirectToService(page) {
  window.location.href = page;
}
document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.getElementById("sliderContainer");
  let isMouseOver = false;

  sliderContainer.addEventListener('mouseenter', () => {
    isMouseOver = true;
  });

  sliderContainer.addEventListener('mouseleave', () => {
    isMouseOver = false;
  });

  document.addEventListener('mousemove', (e) => {
    if (isMouseOver) {
      const x = e.pageX - sliderContainer.offsetLeft;
      const containerWidth = sliderContainer.offsetWidth;

      if (x > containerWidth / 2) {
        // Fare sağ yarıda
        sliderContainer.scrollLeft += 10; // İsterseniz kaydırma miktarını artırabilirsiniz
      } else {
        // Fare sol yarıda
        sliderContainer.scrollLeft -= 10; // İsterseniz kaydırma miktarını artırabilirsiniz
      }
    }
  });
});function changeLanguage(lang) {
  try {
    localStorage.setItem('language', lang);
    translatePage(lang);
  } catch (error) {
    console.error("Dil değiştirme hatası:", error);
  }
}
function performSearch() {
  var searchText = document.getElementById('searchInput').value.toLowerCase();
  var pageContent = document.body.innerHTML;
  var regex = new RegExp(searchText, 'gi');
  
  // Önceki vurgulamaları temizle
  var highlightedElements = document.querySelectorAll('.highlighted');
  highlightedElements.forEach(function (element) {
    element.classList.remove('highlighted');
  });

  // Eşleşen kelimeleri vurgula
  pageContent = pageContent.replace(regex, function(match) {
    return '<span class="highlighted">' + match + '</span>';
  });

  document.body.innerHTML = pageContent;
}
document.addEventListener('DOMContentLoaded', function () {
  // ... Diğer kodlar ...

  // Enter tuşuna basıldığında performSearch fonksiyonunu çağır
  document.getElementById('searchInput').addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
          performSearch();
      }
  });
});
function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.classList.toggle('show');
}
document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopButton = document.getElementById("scroll-to-top");
  var mailButton = document.querySelector(".mail-button");
  var phoneButton = document.querySelector(".phone-button");

  // Sayfa kaydırıldıkça butonların görünürlüğünü kontrol et
  window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopButton.style.display = "block";
      mailButton.style.display = "block";
      phoneButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
      mailButton.style.display = "none";
      phoneButton.style.display = "none";
    }
  };

  // Başa Dön butonuna tıklandığında sayfayı en üstüne kaydır
  scrollToTopButton.addEventListener("click", function () {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Diğer tarayıcılar
  });
});

function redirectToEmail() {
  window.location.href = "mailto:info@example.com";
}

function redirectToPhone() {
  window.location.href = "tel:+901234567890";
}

function navigateToPage(page) {
  window.location.href = page;
}
