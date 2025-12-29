document.addEventListener("DOMContentLoaded", function () {

  /* ===== ELEMENTS ===== */
  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");
  const startBtn = document.getElementById("startBtn");

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const catMsg = document.getElementById("catMsg");
  const catBox = document.getElementById("catBox");

  const noScreen = document.getElementById("noScreen");
  const rethinkBtn = document.getElementById("rethinkBtn");
  const stillNoBtn = document.getElementById("stillNoBtn");

  const heartsRain = document.getElementById("heartsRain");
  const envelopeScreen = document.getElementById("envelopeScreen");
  const envelope = document.getElementById("envelope");

  const finalMessage = document.getElementById("finalMessage");
  const specialPrompt = document.getElementById("specialPrompt");
  const specialBtn = document.getElementById("specialBtn");

  const photoReveal = document.getElementById("photoReveal");
  const photos = document.querySelectorAll(".reveal-photo");

  const song = document.getElementById("bgSong");

  const popup = document.getElementById("newYearPopup");
  const closePopup = document.getElementById("closePopup");

  /* ===== STEP 1 → STEP 2 ===== */
  startBtn.addEventListener("click", function () {
    step1.classList.add("hidden");
    step2.classList.remove("hidden");
  });

  /* ===== YES CLICK ===== */
  yesBtn.addEventListener("click", function () {
    catMsg.innerHTML = "Hehe 💜 Mujhe pata tha meri Kishmish YES hi bolegi 😽🎀";

    catBox.classList.add("fade-out");

    setTimeout(function () {
      catBox.style.display = "none";
      startHearts();
    }, 1200);
  });

  /* ===== HEARTS RAIN ===== */
  function startHearts() {
    heartsRain.classList.remove("hidden");

    for (let i = 0; i < 25; i++) {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerText = "💜";
      heart.style.left = Math.random() * 100 + "vw";
      heartsRain.appendChild(heart);

      setTimeout(() => heart.remove(), 3000);
    }

    setTimeout(function () {
      heartsRain.classList.add("hidden");
      envelopeScreen.classList.remove("hidden");
    }, 3000);
  }

  /* ===== ENVELOPE → LETTER ===== */
  envelope.addEventListener("click", function () {
    envelopeScreen.classList.add("hidden");

    finalMessage.innerHTML = "";
    finalMessage.classList.add("show");

    const letterText = 
`🎆 Happy New Year, my Kishmish 🎀💜

✨ This is not something fancy,
just something honest —
made specially for you.

🤍 I don’t want to impress you with big words,
I want to stay through actions.

🌿 No ego. No games. No pretending.
Just loyalty, respect & care.

🫶 I want to be someone
you feel safe with,
supported by,
and never alone around.

💫 This little surprise is my way of saying:
you matter to me… truly.

— Shivam 💜`;

    let i = 0;
    const typing = setInterval(function () {
      finalMessage.innerHTML += letterText.charAt(i);
      finalMessage.scrollTop = finalMessage.scrollHeight;
      i++;

      if (i >= letterText.length) {
        clearInterval(typing);
        specialPrompt.classList.remove("hidden");
      }
    }, 45);
  });

  /* ===== SPECIAL BUTTON → PHOTOS + SONG ===== */
  specialBtn.addEventListener("click", function () {
    specialPrompt.classList.add("hidden");
    photoReveal.classList.remove("hidden");

    song.volume = 0.7;
    song.play().catch(() => {});

    photos.forEach((photo, index) => {
      setTimeout(() => photo.classList.add("show"), index * 1200);
    });

    setTimeout(() => {
      popup.classList.add("show");
    }, 4000);
  });

  closePopup.addEventListener("click", function () {
    popup.classList.remove("show");
  });

  /* ===== NO FUN ===== */
  noBtn.addEventListener("click", function () {
    noScreen.classList.remove("hidden");
  });

  rethinkBtn.addEventListener("click", function () {
    noScreen.classList.add("hidden");
    catMsg.innerHTML = "😄 Koi pressure nahi… bas ek smile ka wait 💜";
  });

  stillNoBtn.addEventListener("click", function () {
    document.getElementById("noText").innerHTML =
      "😾 Okay okay… NO bol rahi ho 😌<br><br>Par ek baat sach hai…<br>tumhari smile hamesha YES hi bolti hai 💜🎀";
  });

});