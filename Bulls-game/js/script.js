"use strict";
//////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
/// Year date
const currentYear = new Date().getFullYear();
const yearEl = document.getElementById("year");
yearEl.textContent = currentYear;
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//// SHOW ADDITIONAL IMG BY HOVER CENTER IMG

const imgCenter = document.querySelector(".img-center");
const imgAdd = document.querySelector(".img-add");

imgCenter.addEventListener("mouseover", function () {
  imgAdd.style.opacity = "1";
});

imgCenter.addEventListener("mouseleave", function () {
  imgAdd.style.opacity = "0";
});
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////// COMPARE HEIGHT //////////////
const heightSection = document.querySelector(".height-section");
let heightYou = document.querySelector(".img-compare-you");
let heightPlayer = document.querySelector(".img-compare-player");
let heightInput = document.querySelector(".input-height");
const submitHeight = document.querySelector(".input-submit");
let heightAlert = document.querySelector(".alert-p");

const checkHeight = function (e) {
  if (Number(heightInput.value) <= 250 && Number(heightInput.value) > 0) {
    document.body.clientWidth > 590
      ? (heightYou.style.height = `${Number(heightInput.value) * 1.7}px`)
      : (heightYou.style.height = `${Number(heightInput.value) * 1.1}px`);
    // heightYou.style.height = `${Number(heightInput.value) * 1.7}px`;
    heightYou.style.opacity = "1";
    heightAlert.textContent = "";
  } else {
    heightAlert.textContent = `250cm is maximum and you must type at least 1cm!`;
  }
};
submitHeight.addEventListener("click", checkHeight);

const heightEnter = function (entries, observe) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    return;
  } else {
    entry.target.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        checkHeight();
      }
    });
  }
  observe.unobserve(entry.target);
};

const heightObserver = new IntersectionObserver(heightEnter, {
  root: null,
  threshold: 0.5,
});

heightObserver.observe(heightSection);
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/* PLAYER NAME HOVER*/
// AND PLAYER OBJECT
/////////////////////////////////////////////////
const playerName = document.querySelector(".player-name");
const addPlayerName = document.querySelector(".add-player-name");

const roseHover = document.querySelector(".img-render-rose");
const rose = {
  fullName: "Derrick Rose",
  height: 191,
  mvpNumber: 1,
};
roseHover.addEventListener("mouseover", function () {
  playerName.style.opacity = "0.7";
  playerName.textContent = `${rose.fullName}`;
  roseHover.addEventListener("mouseleave", function () {
    playerName.style.opacity = "0";
  });
});

const pippenHover = document.querySelector(".img-render-pippen");
const pippen = {
  fullName: "Scottie Pippen",
  height: 203,
  mvpNumber: 0,
};
pippenHover.addEventListener("mouseover", function () {
  playerName.style.opacity = "0.7";
  playerName.textContent = `${pippen.fullName}`;
  pippenHover.addEventListener("mouseleave", function () {
    playerName.style.opacity = "0";
  });
});

const jordanHover = document.querySelector(".img-render-jordan");
const jordan = {
  fullName: "Michael Jordan",
  height: 198,
  mvpNumber: 5,
};
const rodman = {
  fullName: "Dennis Rodman",
  height: 201,
  mvpNumber: 0,
};
jordanHover.addEventListener("mouseover", function () {
  playerName.style.opacity = "0.7";
  addPlayerName.style.opacity = "0.7";
  playerName.textContent = `${jordan.fullName}`;
  addPlayerName.textContent = `${rodman.fullName}`;
  jordanHover.addEventListener("mouseleave", function () {
    playerName.style.opacity = "0";
    addPlayerName.style.opacity = "0";
  });
});

const derozanHover = document.querySelector(".img-render-derozan");
const derozan = {
  fullName: "DeMar Derozan",
  height: 198,
  mvpNumber: 0,
};
derozanHover.addEventListener("mouseover", function () {
  playerName.style.opacity = "0.7";
  playerName.textContent = `${derozan.fullName}`;
  derozanHover.addEventListener("mouseleave", function () {
    playerName.style.opacity = "0";
  });
});

const lavineHover = document.querySelector(".img-render-lavine");
const lavine = {
  fullName: "Zach Lavine",
  height: 196,
  mvpNumber: 0,
};
lavineHover.addEventListener("mouseover", function () {
  playerName.style.opacity = "0.7";
  playerName.textContent = `${lavine.fullName}`;
  lavineHover.addEventListener("mouseleave", function () {
    playerName.style.opacity = "0";
  });
});
/////////////////////////////////////////////////
///// HEIGHT COMPARE BULLS PLAYERS///////////////
// ALL PLAYERS AND BUTTONS RESETS (THERE CAN BE ONLY ONE PLAYER IMG TO COMPARE) //
let compPlayers = document.querySelectorAll(".img-compare-player");
let btnPlayers = document.querySelectorAll(".btn-choose-compare");
btnPlayers.forEach((btnPLayer) => {
  btnPLayer.addEventListener("click", function () {
    compPlayers.forEach((compPlayer) => {
      compPlayer.classList.add("img-hidden");
    });
  });
});
// BULLS PLAYERS BTNS
const compJordan = document.querySelector(".img-compare-jordan");
const btnJordan = document.querySelector(".btn-choose-jordan");
compJordan.style.height = `${jordan.height * 1.7 + 3}px`;
btnJordan.addEventListener("click", function () {
  compJordan.classList.remove("img-hidden");
});

const compDerozan = document.querySelector(".img-compare-derozan");
compDerozan.style.height = `${derozan.height * 1.7 + 3}px`;
const btnDerozan = document.querySelector(".btn-choose-derozan");
btnDerozan.addEventListener("click", function () {
  compDerozan.classList.remove("img-hidden");
});

const compLavine = document.querySelector(".img-compare-lavine");
compLavine.style.height = `${lavine.height * 1.7 + 3}px`;
const btnLavine = document.querySelector(".btn-choose-lavine");
btnLavine.addEventListener("click", function () {
  compLavine.classList.remove("img-hidden");
});

const compRose = document.querySelector(".img-compare-rose");
compRose.style.height = `${rose.height * 1.7 + 3}px`;
const btnRose = document.querySelector(".btn-choose-rose");
btnRose.addEventListener("click", function () {
  compRose.classList.remove("img-hidden");
});

const compPippen = document.querySelector(".img-compare-pippen");
compPippen.style.height = `${pippen.height * 1.7 + 3}px`;
const btnPippen = document.querySelector(".btn-choose-pippen");
btnPippen.addEventListener("click", function () {
  compPippen.classList.remove("img-hidden");
});

const compRodman = document.querySelector(".img-compare-rodman");
compRodman.style.height = `${rodman.height * 1.7 + 3}px`;
const btnRodman = document.querySelector(".btn-choose-rodman");
btnRodman.addEventListener("click", function () {
  compRodman.classList.remove("img-hidden");
});
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////
// GUESS THE PLAYER
const imgPLayers = document.querySelector(".img-guess");
const guessSection = document.querySelector(".guess-box");

const guessRodman = document.querySelector(".img-guess-rodman");
const heightRodman = document.querySelector(".guess-height-rodman");
const tipRodman = document.querySelector(".guess-height-rodman");
tipRodman.textContent = rodman.height + "cm";

const guessLavine = document.querySelector(".img-guess-lavine");
const heightLavine = document.querySelector(".guess-height-lavine");
const tipLavine = document.querySelector(".guess-height-lavine");
tipLavine.textContent = lavine.height + "cm";

const guessRose = document.querySelector(".img-guess-rose");
const heightRose = document.querySelector(".guess-height-rose");
const tipRose = document.querySelector(".guess-height-rose");
tipRose.textContent = rose.height + "cm";

const guessJordan = document.querySelector(".img-guess-jordan");
const heightJordan = document.querySelector(".guess-height-jordan");
const tipJordan = document.querySelector(".guess-height-jordan");
tipJordan.textContent = jordan.height + "cm";

const guessPlayer = document.querySelector(".guess-name");
const btnGuess = document.querySelector(".input-submit-guess");

const guessAlert = document.querySelector(".alert-guess");
const guessEndText = document.querySelector(".guess-endtext");

const guessScore = document.querySelector(".guess-score");
const guessHighScore = document.querySelector(".guess-highscore");
const btnAgain = document.querySelector(".btn-again");
let trials = 4;
let score = 0;
guessScore.textContent = trials;
guessHighScore.textContent = score;
//////////////////////////////////////////////////////////////
// GAME
const gameGuess = function () {
  if (trials <= 0) {
    trials = 0;
    guessScore.textContent = `${trials * 0}`;
    guessEndText.textContent = `You lost!`;
  } else if (score !== 4) {
    if (
      guessPlayer.value.trim().toLowerCase() === "dennis rodman" &&
      heightRodman.style.opacity != "0"
    ) {
      guessRodman.style.filter =
        "brightness(1) drop-shadow(0 0 5px rgba(255, 255, 255, 0.2))";
      guessAlert.textContent = "Dennis the menace!";
      heightRodman.style.opacity = "0";
      heightRodman.style.transform = "translateX(10rem)";
      score++;
      guessHighScore.textContent = `${score}`;
      guessPlayer.value = "";
      if (score === 4) {
        guessEndText.textContent = "Great! You won!";
      }
    } else if (
      guessPlayer.value.trim().toLowerCase() === "derrick rose" &&
      heightRose.style.opacity != "0"
    ) {
      guessRose.style.filter =
        "brightness(1) drop-shadow(0 0 5px rgba(255, 255, 255, 0.2))";
      guessAlert.textContent = "Too big, too strong, too fast, too good!";
      heightRose.style.opacity = "0";
      heightRose.style.transform = "translateX(10rem)";
      score++;
      guessHighScore.textContent = `${score}`;
      guessPlayer.value = "";
      if (score === 4) {
        guessEndText.textContent = "Great! You won!";
      }
    } else if (
      guessPlayer.value.trim().toLowerCase() === "michael jordan" &&
      heightJordan.style.opacity != "0"
    ) {
      guessJordan.style.filter =
        "brightness(1) drop-shadow(0 0 5px rgba(255, 255, 255, 0.2))";
      guessAlert.textContent = "The G.O.A.T himself!";
      heightJordan.style.opacity = "0";
      heightJordan.style.transform = "translateX(10rem)";
      score++;
      guessHighScore.textContent = `${score}`;
      guessPlayer.value = "";
      if (score === 4) {
        guessEndText.textContent = "Great! You won!";
      }
    } else if (
      guessPlayer.value.trim().toLowerCase() === "zach lavine" &&
      heightLavine.style.opacity != "0"
    ) {
      guessLavine.style.filter =
        "brightness(1) drop-shadow(0 0 5px rgba(255, 255, 255, 0.2))";
      guessAlert.textContent = "Show time!";
      heightLavine.style.opacity = "0";
      heightLavine.style.transform = "translateX(10rem)";
      score++;
      guessHighScore.textContent = `${score}`;
      guessPlayer.value = "";
      if (score === 4) {
        guessEndText.textContent = "Great! You won!";
      }
    } else {
      guessAlert.textContent = "Wrong!";
      trials--;
      guessScore.textContent = `${trials}`;
      if (trials === 0) {
        trials = 0;
        guessScore.style.color = "#aa1036";
        guessScore.textContent = `${trials}`;
        guessEndText.textContent = `You lost!`;
      }
    }
  }
};

btnGuess.addEventListener("click", gameGuess);
//////////////////////////////////////////////////////////////
// Game restart
const gameGuessRestart = function () {
  trials = 4;
  guessScore.textContent = `${trials}`;
  score = 0;
  guessHighScore.textContent = `${score}`;
  guessScore.style.color = "inherit";
  guessRodman.style.filter =
    "brightness(0) drop-shadow(0 0 5px rgba(255, 255, 255, 0.05))";
  guessRose.style.filter =
    "brightness(0) drop-shadow(0 0 5px rgba(255, 255, 255, 0.05))";
  guessJordan.style.filter =
    "brightness(0) drop-shadow(0 0 5px rgba(255, 255, 255, 0.05))";
  guessLavine.style.filter =
    "brightness(0) drop-shadow(0 0 5px rgba(255, 255, 255, 0.05))";
  heightRodman.style.opacity = "1";
  heightRose.style.opacity = "1";
  heightJordan.style.opacity = "1";
  heightLavine.style.opacity = "1";
  guessAlert.textContent = "Guess!";
  guessPlayer.value = "";
  guessEndText.textContent = "";
  heightRodman.style.transform = "translateX(-50%) translateY(-50%)";
  heightRose.style.transform = "translateX(-50%) translateY(-50%)";
  heightJordan.style.transform = "translateX(-50%) translateY(-50%)";
  heightLavine.style.transform = "translateX(-50%) translateY(-50%)";
};

btnAgain.addEventListener("click", gameGuessRestart);
//////////////////////////////////////////////////////////////
// CHECK AND AGAIN KEYS
const guessKeys = function (entries, observe) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    return;
  } else {
    entry.target.addEventListener("keydown", function (e) {
      if (e.key === "Escape") gameGuessRestart();
    });
    entry.target.addEventListener("keydown", function (e) {
      if (e.key === "Enter") gameGuess();
    });
  }
  observe.unobserve(entry.target);
};

const guessObserver = new IntersectionObserver(guessKeys, {
  root: null,
  threshold: 0,
});

guessObserver.observe(guessSection);
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// Smooth scrolling

const navLinks = document.querySelectorAll(".nav-links");

navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("nav-link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Sticky nav
const sectionHero = document.querySelector(".section-hero");
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;

const headerSticky = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    header.classList.add("sticky-nav");
  } else {
    header.classList.remove("sticky-nav");
  }
};

const headerObserver = new IntersectionObserver(headerSticky, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});

headerObserver.observe(sectionHero);

// Mobile NAV

const btnMobile = document.querySelector(".btn-mobile-nav");
const navLink = document.querySelectorAll(".nav-link");
const headerNav = document.querySelector(".header-nav");

btnMobile.addEventListener("click", function () {
  header.classList.toggle("nav-open");
  headerNav.addEventListener("click", function () {
    header.classList.remove("nav-open");
  });
});

navLink.forEach((link) =>
  link.addEventListener("click", function () {
    header.classList.remove("nav-open");
  })
);

//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/// Resize observer

// const resizeThat = function () {
//   if (document.body.clientWidth < 590) {
//     document.querySelector(".test").textContent = "chuj";
//     compLavine.style.height = `${lavine.height * 1.2 + 3}px`;
//     compJordan.style.height = `${lavine.height * 1.2 + 3}px`;
//     compDerozan.style.height = `${lavine.height * 1.2 + 3}px`;
//     compRodman.style.height = `${lavine.height * 1.2 + 3}px`;
//     compRose.style.height = `${lavine.height * 1.2 + 3}px`;
//     compPippen.style.height = `${lavine.height * 1.2 + 3}px`;
//   } else {
//     compLavine.style.height = `${lavine.height * 1.7 + 3}px`;
//     compJordan.style.height = `${lavine.height * 1.7 + 3}px`;
//     compDerozan.style.height = `${lavine.height * 1.7 + 3}px`;
//     compRodman.style.height = `${lavine.height * 1.7 + 3}px`;
//     compRose.style.height = `${lavine.height * 1.7 + 3}px`;
//     compPippen.style.height = `${lavine.height * 1.7 + 3}px`;
//   }
// };

const heightArr = [
  { comp: compDerozan, player: derozan.height },
  { comp: compLavine, player: lavine.height },
  { comp: compRodman, player: rodman.height },
  { comp: compRose, player: rose.height },
  { comp: compJordan, player: jordan.height },
  { comp: compPippen, player: pippen.height },
];

const resizeArr = function () {
  heightArr.forEach((e, i) => {
    e.comp.style.height = `${e.player * 1.1 + 3}px`;
    console.log(e.comp);
  });
};

const resizeHeightObserver = new ResizeObserver((entries) => {
  const [entry] = entries;
  if (entry.contentRect.width > 590) {
    return;
  } else {
    // resizeThat();
    resizeArr();
  }
});

resizeHeightObserver.observe(document.body);

// Reveal

const sections = document.querySelectorAll(".class-box");

const sectionsReveal = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    return;
  }
  entry.target.classList.remove("reveal");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(sectionsReveal, {
  root: null,
  threshold: 0.1,
});

sections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("reveal");
});
