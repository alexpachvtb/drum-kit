const notes = document.querySelector('.notes')
      keys = notes.querySelectorAll('.note');
let key = '';

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



const audioPlay = (item) => {
    let audio = new Audio();
    span = item.querySelector('span');
    audio.src = `assets/sounds/${span.textContent}.wav`; 
    audio.play();
}