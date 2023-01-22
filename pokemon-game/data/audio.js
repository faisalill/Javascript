const audio = {
    Map: new Howl({
        src: '../audio/map.mp3',
        html5: true
    }),
    Battle: new Howl({
        src: '../audio/battle.mp3',
        html5: true
    }),
    Victory: new Howl({
        src: '../audio/victory.webm',
        html5: true
    })
}

function playAudio(){
    audio.Map.play()
}

setTimeout(playAudio(),100)