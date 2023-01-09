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
class Sprite {
    constructor({position, velocity, image, frames={max: 1}, sizeOffset = 0, sprites}){
        this.position = position,
        this.image = image
        this.frames = {...frames, val:0, elapsed: 0}
        this.sizeOffset = sizeOffset
        this.image.onload=()=>{
            this.width = this.image.width/ this.frames.max
            this.height = this.image.height
        }
        this.sprites = sprites
        this.moving = false
    }
    draw(){
        c.drawImage(this.image,
            this.frames.val * this.width,
            0,
            this.image.width/this.frames.max, 
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width/this.frames.max - this.sizeOffset ,
            this.image.height - this.sizeOffset)
            if(this.moving){
            if(this.frames.max >1){
                this.frames.elapsed++
            }
            if(this.frames.elapsed % 10 ===0){
                if(this.frames.val < this.frames.max -1) this.frames.val++
                else this.frames.val = 0
            }
        }
            
            
    }
}

const image = new Image()
image.src = './assets/pokemon-battle-map.png'

const playerDownImage = new Image()
playerDownImage.src = './assets/playerDown.png'

const playerUpImage = new Image()
playerUpImage.src = './assets/playerUp.png'

const playerLeftImage = new Image()
playerLeftImage.src = './assets/playerLeft.png'

const playerRightImage = new Image()
playerRightImage.src = './assets/playerRight.png'

const player = new Sprite({
    position: {
        x: canvas.width/2 - 192 / 4 /2,
        y: canvas.height/2 - 68 /2
    },
    image: playerDownImage,
    frames: {
        max:4
    },
    sizeOffset:12,
    sprites: {
        up: playerUpImage,
        down: playerDownImage,
        left: playerLeftImage,
        right: playerRightImage
    }
})

const waterAnimations = new Image()
waterAnimations.src = './assets/water_animations.png'

class animationSprite {
    constructor({image, rows,columns, position, sizeOffset}){
        this.image = image
        this.rows = rows
        this.columns = columns
        this.frames = 0
        this.framesElapsed = 0
        this.position = position
        this.sizeOffset = sizeOffset
    }
    draw(){
        c.drawImage(this.image,
           this.frames*(this.image.width/this.columns),0,this.image.width/this.columns,this.image.height/this.rows,
           this.position.x,this.position.y,this.image.width/this.columns + this.sizeOffset,this.image.height/this.rows + this.sizeOffset
            )
            if(this.rows >1 || this.columns >1){
               this.framesElapsed++
            }
            if(this.framesElapsed %10 === 0){
                if(this.frames < this.columns -1){
                    this.frames++
                }
                else{
                    this.frames = 0
                }
            }
        }

        // if(this.frames.max >1){
        //     this.frames.elapsed++
        // }
        // if(this.frames.elapsed % 10 ===0){
        //     if(this.frames.val < this.frames.max -1) this.frames.val++
        //     else this.frames.val = 0
        // }

        // c.drawImage(this.image,
        //     this.frames.val * this.width,
        //     0,
        //     this.image.width/this.frames.max, 
        //     this.image.height,
        //     this.position.x,
        //     this.position.y,
        //     this.image.width/this.frames.max - this.sizeOffset ,
        //     this.image.height - this.sizeOffset)
        // }
            
            
    
}

const testWater = new animationSprite({image:waterAnimations,rows:5,columns:8,position:{
    x: 400,
    y: 400
},
sizeOffset:10
})
const smithImage = new Image()
smithImage.src = './assets/smith.png'
const smith = new animationSprite({image:smithImage,rows:1, columns:8,position:{
    x:835,
    y:100
},
sizeOffset:32
})

const altarImage = new Image()
altarImage.src = './assets/altar.png'
const altar = new animationSprite({image:altarImage, rows:1, columns:39, position: {
    x:285,
    y:-830,
},
sizeOffset:200})

const background = new Sprite({
    position: {
        x: offset.x,//-463
        y:offset.y,//-950
        // x:-400,
        // y:-150
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

const movables = [background, ...boundaries,testWater,smith,altar];
function checkCollision({object1, object2}){
    return (object1.position.x + 192/4 -20 >= object2.position.x 
    && object1.position.x <= object2.position.x + object2.width
    && object1.position.y <= object2.position.y + object2.height
    && object1.position.y + 68 - 15 >= object2.position.y)
}
let moving = true;
function animate(){
    window.requestAnimationFrame(animate)
    background.draw()
    boundaries.forEach(boundary =>{
        boundary.draw()
        
    })
    altar.draw()
    player.draw()
    testWater.draw()
    smith.draw()
    
    moving = true
    player.moving = false
       if(keys.w.pressed && lastKey === 'w'){
        player.moving = true
        player.image = player.sprites.up
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
        movables.forEach(movable => movable.position.y +=20)
       }
       else if(keys.s.pressed && lastKey === 's'){
        player.moving = true
        player.image = player.sprites.down
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
        movables.forEach(movable => movable.position.y -=20)
       }
       else if(keys.a.pressed && lastKey === 'a'){
        player.moving = true
        player.image = player.sprites.left
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
        player.moving = true
        player.image = player.sprites.right
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