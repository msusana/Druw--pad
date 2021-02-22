let keys = document.querySelectorAll('.key');
let audios = document.querySelectorAll('audio');
let beat= document.querySelector('#beat')


window.addEventListener('keydown', function (e) {
    audios.forEach(audio => {
        if (e.keyCode == audio.getAttribute('data-key')) {
            audio.play()
        }
     })
        keys.forEach(key => {
            if (e.keyCode == key.getAttribute('data-key')) {
                key.classList.add('playing')
                key.addEventListener("transitionend" , function (e){
                    key.classList.remove('playing', 'sound')    
                    }, 300);
            }
        })
})

beat.addEventListener('click', beatbox)
function beatbox(){
    function simulateKey(keyCode){ 
        var eventokey = new Event ('keydown',{ 
        bubbles:true
        });
        eventokey.keyCode = keyCode;

        window.dispatchEvent(eventokey);
    }
    function playBeat(time, keyCode){
        return new Promise((resolve, reject)=>{
        setTimeout(function(){resolve(simulateKey(keyCode))}, time);
                
        })
    }
 
    
    playBeat(400,70).then(()=>{
        return playBeat(400,70)
    })  
    .then(()=>{
        return playBeat(300,65)
    })
   
    .then(()=>{
        return playBeat(300,67)
    })
    .then(()=>{
        return playBeat(300,67)
    })
    .then(()=>{
        return playBeat(300,77)
    })
    .then(()=>{
        return playBeat(300,71)
    }) 

}