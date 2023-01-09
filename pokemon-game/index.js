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
    c.fillStyle= 'red'
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
    constructor({position, velocity, image}){
        this.position = position,
        this.velocity = velocity,
        this.image = image
    }
    draw(){
        c.drawImage(this.image,this.position.x,this.position.y)
    }
}


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
const movables = [background,testBoundary];
function animate(){
    window.requestAnimationFrame(animate)
    background.draw()
    // boundaries.forEach(boundary =>{
    //     boundary.draw()
    // })
    testBoundary.draw()
    c.drawImage(playerImage,
        0,
        0,
        playerImage.width/4,
        playerImage.height,
        canvas.width/2 -30,
        canvas.height/2,
        playerImage.width/4 - 13,
        playerImage.height - 13
       )
       if(keys.w.pressed && lastKey === 'w'){
        movables.forEach(movable => movable.position.y +=2)
       }
       if(keys.s.pressed && lastKey === 's'){
        movables.forEach(movable => movable.position.y -=2)
       }
       if(keys.a.pressed && lastKey === 'a'){
        movables.forEach(movable => movable.position.x +=2)
       }
       if(keys.d.pressed && lastKey === 'd'){
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