const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    navLinks.classList.remove('open');
    menuBtnIcon.setAttribute('class', 'ri-menu-3-line');
  });
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});
ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".faq__item", {
  ...scrollRevealOption,
  interval: 250,
});

ScrollReveal().reveal(".blog__card", {
  duration: 1000,
  interval: 500,
});
const typingTexts = document.querySelectorAll('.typing-text');
const typeText = (typingText, speed) => {
  const fullText = typingText.dataset.text || typingText.textContent.trim();
  typingText.textContent = '';
  let index = 0;

  const typingInterval = setInterval(() => {
    typingText.textContent += fullText.charAt(index);
    index += 1;
    if (index >= fullText.length) {
      clearInterval(typingInterval);
    }
  }, speed);
};

const aboutSection = document.querySelector('#about');
if (aboutSection && typingTexts.length) {
  typingTexts.forEach((typingText) => {
    typingText.textContent = '';
  });

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          typingTexts.forEach((typingText, idx) => {
            const speed = idx === 0 ? 20 : 40;
            typeText(typingText, speed);
          });
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(aboutSection);
}

const faqItems = document.querySelectorAll('.faq__item');
faqItems.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    if (!item.classList.contains('locked')) {
      item.classList.add('active');
    }
  });

  item.addEventListener('mouseleave', () => {
    if (!item.classList.contains('locked')) {
      item.classList.remove('active');
    }
  });

  item.addEventListener('click', () => {
    const locked = item.classList.toggle('locked');
    if (locked) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});

const portfolioSection = document.querySelector('#portfolio');
if (portfolioSection) {
  const portfolioImages = portfolioSection.querySelectorAll('.portfolio__grid img');
  const portfolioObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          portfolioImages.forEach((img, index) => {
            setTimeout(() => {
              img.classList.add('active');
            }, index * 500);
          });
          portfolioObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  portfolioObserver.observe(portfolioSection);
}

const typingLoop = document.querySelector('.typing-loop');
if (typingLoop) {
  const phrases = [
    'Austin, Texas',
    'Capturing raw emotions',
    'Capturing treasured memories',
    'Capturing "The Moment"',
    'Glad you stopped by!',
    'Let\'s capture your story.',
    'Your vision, my lens.',
    'Ready when you are.'
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;

  const updateText = () => {
    const currentPhrase = phrases[phraseIndex];
    typingLoop.textContent = currentPhrase.slice(0, charIndex);

    if (!isDeleting && charIndex < currentPhrase.length) {
      charIndex += 1;
      typingDelay = 100;
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingDelay = 1200;
    } else if (isDeleting && charIndex > 0) {
      charIndex -= 1;
      typingDelay = 50;
    } else {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingDelay = 500;
    }

    setTimeout(updateText, typingDelay);
  };

  updateText();
}

ScrollReveal().reveal(".blog__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".contact__image img", {
  ...scrollRevealOption,
});