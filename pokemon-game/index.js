const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const collissionMap = []
for (let i =0; i<collission.length; i+=60){
    collissionMap.push(collission.slice(i,i+60))
}
class Boundary{
    static width = 32;
    static height = 32;
constructor({position}){
 this.position = position,
 this.width = Boundary.width,
 this.height = Boundary.width
}
draw(){
    c.fillStyle= 'rgba(255,255,0,0)'
    c.fillRect(this.position.x,this.position.y,this.width,this.height)
}
}
const offset = {
    x: -463,
    y: -950
}
const boundaries = []

collissionMap.forEach((row, index) => {
    row.forEach((element, j)=>{
       if(element=== 2057)
        boundaries.push(new Boundary({position:
        {
            x:j*Boundary.width + offset.x,
            y:index*Boundary.height + offset.y,
        }}))
    })
})

const image = new Image()
image.src = './assets/pokemon-battle-map.png'

const playerImage = new Image()
playerImage.src = './assets/playerDown.png'

class Sprite {
    constructor({position, velocity, image, frames={max: 1}, sizeOffset = 0}){
        this.position = position,
        this.image = image
        this.frames = {...frames, val:0, elapsed: 0}
        this.sizeOffset = sizeOffset
        this.moving = false
    }
    draw(){
        c.drawImage(this.image,
            this.frames.val * this.image.width,
            0,
            this.image.width/this.frames.max, 
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width/this.frames.max - this.sizeOffset ,
            this.image.height - this.sizeOffset)
            
                if(this.frames.max > 1){
                    this.frames.elapsed++
                    if(this.frames.elapsed %10 ===0){
                        if(this.frames.val < this.frames.max-1) this.frames.val++
                        else{
                            this.frames.val = 0
                        }
                    }
                }
                
            
    }
}
const player = new Sprite({
    position: {
        x: canvas.width/2 - 192 / 4 /2,
        y: canvas.height/2 - 68 /2
    },
    image: playerImage,
    frames: {
        max:4
    },
    sizeOffset:12
})
const background = new Sprite({
    position: {
        x: offset.x,
        y:offset.y,
    },
    image: image
})

const keys = {
    w: {
        pressed: false
    },
    s: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
}
const testBoundary = new Boundary({
    position: {
        x: 400,
        y: 400
    }
})

const movables = [background, ...boundaries];
function checkCollision({object1, object2}){
    return (object1.position.x + 192/4 -20 >= object2.position.x 
    && object1.position.x <= object2.position.x + object2.width
    && object1.position.y <= object2.position.y + object2.height
    && object1.position.y + 68 - 15 >= object2.position.y)
}
function animate(){
    window.requestAnimationFrame(animate)
    background.draw()
    boundaries.forEach(boundary =>{
        boundary.draw()
        
    })
    player.draw()
    let moving = true;
       if(keys.w.pressed && lastKey === 'w'){
        for(let i =0; i< boundaries.length; i++){
            const boundary = boundaries[i]
            if(checkCollision({object1: player, object2: {...boundary, position: {
                x: boundary.position.x,
                y: boundary.position.y + 3
            }}})){
                console.log("colliding")
                moving= false
                break;
            }
        }
        if(moving)
        movables.forEach(movable => movable.position.y +=2)
       }
       else if(keys.s.pressed && lastKey === 's'){
        for(let i =0; i< boundaries.length; i++){
            const boundary = boundaries[i]
            if(checkCollision({object1: player, object2: {...boundary, position: {
                x: boundary.position.x + 3,
                y: boundary.position.y 
            }}})){
                console.log("colliding")
                moving= false
                break;
            }
        }
        if(moving)
        movables.forEach(movable => movable.position.y -=2)
       }
       else if(keys.a.pressed && lastKey === 'a'){
        for(let i =0; i< boundaries.length; i++){
            const boundary = boundaries[i]
            if(checkCollision({object1: player, object2: {...boundary, position: {
                x: boundary.position.x ,
                y: boundary.position.y -3 
            }}})){
                console.log("colliding")
                moving= false
                break;
            }
        }
        if(moving)
        movables.forEach(movable => movable.position.x +=2)
       }
       else if(keys.d.pressed && lastKey === 'd'){
        for(let i =0; i< boundaries.length; i++){
            const boundary = boundaries[i]
            if(checkCollision({object1: player, object2: {...boundary, position: {
                x: boundary.position.x - 3,
                y: boundary.position.y 
            }}})){
                console.log("colliding")
                moving= false
                break;
            }
        }
        if(moving)
        movables.forEach(movable => movable.position.x -=2)
       }

}
animate()
let lastKey = ''
window.addEventListener('keydown', (e)=>{
    switch(e.key){
        case 'w': 
        keys.w.pressed  = true
        lastKey='w'
        break;
        case 's': 
        keys.s.pressed  = true
        lastKey='s'
        break;
        case 'a': 
        keys.a.pressed  = true
        lastKey='a'
        break;
        case 'd': 
        keys.d.pressed  = true
        lastKey='d'
        break;
    }
})
window.addEventListener('keyup', (e)=>{
    switch(e.key){
        case 'w': 
        keys.w.pressed  = false
        break;
        case 's': 
        keys.s.pressed  = false
        break;
        case 'a': 
        keys.a.pressed  = false
        break;
        case 'd': 
        keys.d.pressed  = false
        break;
    }
})