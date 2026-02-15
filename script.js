let current = 0;
const sections = document.querySelectorAll(".section");
const music = document.getElementById("bg-music");

/* NEXT SECTION */
function nextSection() {
  if (current < sections.length - 1) {
    sections[current].classList.remove("active");
    current++;
    sections[current].classList.add("active");

    if (current === 1) fadeMusic();
    if (current === 2) startPolaroidTyping();
    if (current === 4) startConfetti();
  }
}

/* FADE IN MUSIC */
function fadeMusic() {
  music.volume = 0;
  music.play();
  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 1) {
      vol += 0.05;
      music.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);
}

/* POLAROID TYPING */
function startPolaroidTyping() {
  const text = "nih bunga buat kamu hehe 🤍";
  let i = 0;
  const target = document.getElementById("typing-polaroid");

  function type() {
    if (i < text.length) {
      target.innerHTML += text[i];
      i++;
      setTimeout(type, 50);
    } else {
      document.getElementById("btn3").classList.remove("hidden");
    }
  }

  type();
}

/* ENVELOPE */
function openEnvelope() {
  document.querySelector(".envelope").classList.add("hidden");
  document.getElementById("letterBox").classList.remove("hidden");
  startTypingLetter();
}

/* SURAT PANJANG */
function startTypingLetter() {
  const text = `Hawwoo sayanggg 🤍

Happy Valentine yaa cantikkuu.
Aku bersyukur banget bisa kenal kamu dan punya kamu dalam hidupku.

Setiap hari bareng kamu itu selalu terasa spesial.
Kamu selalu bisa bikin aku senyum, bikin aku tenang,
dan bikin aku ngerasa jadi orang paling beruntung di dunia.

Terima kasih yaa udah selalu sabar sama aku,
udah selalu dengerin cerita aku,
udah selalu dukung aku walaupun kadang aku nyebelin.

Aku bener-bener bangga punya kamu.
Bangga sama cara kamu berpikir,
bangga sama cara kamu berjuang,
bangga sama kamu yang selalu kuat.

Semoga kita bisa terus bareng,
terus saling jaga,
terus saling dukung,
dan terus saling sayang tanpa kurang sedikitpun.

Aku sayang kamu lebih dari yang bisa aku jelasin dengan kata-kata 🤍✨`;

  let i = 0;
  const target = document.getElementById("typing-letter");
  const box = document.getElementById("letterBox");

  target.innerHTML = "";

  function typeWriter() {
    if (i < text.length) {
      target.innerHTML += text[i];
      i++;
      box.scrollTop = box.scrollHeight;
      setTimeout(typeWriter, 20);
    } else {
      document.getElementById("btn4").classList.remove("hidden");
    }
  }

  typeWriter();
}
