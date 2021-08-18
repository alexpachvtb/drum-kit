const notes = document.querySelector('.notes')
      keys = notes.querySelectorAll('.note'),
      fullScreenBtn = document.querySelector('.fullscreen'),
      change = document.querySelector('.change_background'),
      html = document.documentElement;
let key,
    count = 1;

fullScreenBtn.addEventListener('click', () => {
    openFullscreen(html);
    closeFullscreen();
});

keys.forEach(item => {
    item.addEventListener('mousedown', () => {
        audioPlay(item);
        item.classList.add('note_active');
    });
    item.addEventListener('mouseup', () => {
        item.classList.remove('note_active');
    });
    item.addEventListener('mouseout', () => {
        item.classList.remove('note_active');
    });
})

document.addEventListener('keydown', (e) => {
    if (e.repeat == false) {
        key = document.querySelector(`[data-key="${e.code}"]`);
        audioPlay(key);
        key.classList.add('note_active');
    }
});
document.addEventListener('keyup', (e) => {
    key = document.querySelector(`[data-key="${e.code}"]`);
    key.classList.remove('note_active');
});

change.addEventListener('click', () => {
    if (count == 3) {
        count = 1;
    } else {
        count++;
    }
    html.style.background = `url("../assets/background/concert${count}.jpg") bottom center / cover`;
});

const audioPlay = (item) => {
    let audio = new Audio();
    span = item.querySelector('span');
    audio.src = `assets/sounds/${span.textContent}.wav`; 
    audio.play();
}

const openFullscreen = (elem) => {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { 
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { 
      elem.msRequestFullscreen();
    }
}

const closeFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { 
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { 
      document.msExitFullscreen();
    }
}