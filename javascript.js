let keys = document.querySelectorAll('.key');
let audios = document.querySelectorAll('audio');


window.addEventListener('keydown', function (e) {
    audios.forEach(audio => {
        if (e.keyCode == audio.getAttribute('data-key')) {
            audio.play()
        }
     })
        keys.forEach(key => {
            if (e.keyCode == key.getAttribute('data-key')) {
                key.classList.add('playing')
            }
        })
})

window.addEventListener('keyup', function (e) {
            keys.forEach(key => {
                if (e.keyCode == key.getAttribute('data-key')) {
                    setTimeout(() =>{
                    key.classList.remove('playing', 'sound')    
                    }, 300);
                    
                }
            })
})
