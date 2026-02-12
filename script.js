// Elements
console.log('script.js loaded');
const envelope = document.getElementById('envelope-container');
const envelopeImg = document.getElementById('envelope');
const letter = document.getElementById('letter-container');
const noBtn = document.querySelector('.no-btn');
const yesBtn = document.querySelector('.yes-btn');

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope
if (envelope) {
    envelope.addEventListener("click", () => {
        console.log('envelope container clicked');
        envelope.style.display = "none";
        if (letter) letter.style.display = "flex";

        setTimeout(() => {
            const lw = document.querySelector(".letter-window");
            if (lw) lw.classList.add("open");
        }, 50);
    });
}

if (envelopeImg) {
    envelopeImg.addEventListener('click', () => {
        console.log('envelope image clicked');
        if (envelope) envelope.style.display = 'none';
        if (letter) letter.style.display = 'flex';

        setTimeout(() => {
            const lw = document.querySelector('.letter-window');
            if (lw) lw.classList.add('open');
        }, 50);
    });
}

// Logic to move the NO btn

if (noBtn) {
    noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

        noBtn.style.transition = "transform 0.3s ease";
        noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
}

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

if (yesBtn) {
    yesBtn.addEventListener("click", () => {
        if (title) title.textContent = "Yippeeee!";

        if (catImg) catImg.src = "cat_dance.gif";

        const lw = document.querySelector(".letter-window");
        if (lw) lw.classList.add("final");

        if (buttons) buttons.style.display = "none";

        if (finalText) finalText.style.display = "block";
    });
}