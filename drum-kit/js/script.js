const notes = document.querySelector('.notes')
      keys = notes.querySelectorAll('.note'),
      fullScreenBtn = document.querySelector('.fullscreen'),
      change = document.querySelector('.btn_background'),
      playBit = document.querySelector('.btn_play'),
      html = document.documentElement;
let count = 1;

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
        let key = document.querySelector(`[data-key="${e.code}"]`);
        audioPlay(key);
        key.classList.add('note_active');
    }
});
document.addEventListener('keyup', (e) => {
    let key = document.querySelector(`[data-key="${e.code}"]`);
    key.classList.remove('note_active');
});

change.addEventListener('click', () => {
    if (count == 3) {
        count = 1;
    } else {
        count++;
    }
    html.style.background = `url("assets/background/concert${count}.jpg") bottom center / cover`;
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

const play = (key, sound) => {
    keys.forEach(item => {
        item.classList.remove('note_active');
    });
    document.querySelector(`[data-key="Key${key}"]`).classList.add('note_active');
    let audio = new Audio();
    audio.src = `assets/sounds/${sound}.wav`; 
    audio.play();
};

playBit.addEventListener('click', () => {
    playBit.disabled = true;
    bit();
    let timer = setInterval(bit, 2400);
    setTimeout(() => {clearInterval(timer)}, 12000);
    setTimeout(() => {playBit.disabled = false}, 14400);
});

function bit() {
    setTimeout(() => {play('D', 'kick')}, 300);
    setTimeout(() => {play('S', 'hihat')}, 600);
    setTimeout(() => {play('A', 'clap')}, 900);
    setTimeout(() => {play('S', 'hihat')}, 1200);
    setTimeout(() => {play('D', 'kick')}, 1500);
    setTimeout(() => {play('D', 'kick')}, 1800);
    setTimeout(() => {play('A', 'clap')}, 2100);
    setTimeout(() => {play('S', 'hihat')}, 2400);
    setTimeout(() => {
        keys.forEach(item => {
            item.classList.remove('note_active');
        });
    }, 2700);
}
    
