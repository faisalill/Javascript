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

class islandAnimation{
    constructor({image,position,rowToAnimate=0,cropPosition = {x: 9,y:0,dx:29,dy:20},sizeOffset={x:0,y:0}}){
        this.image = image
        this.position = position
        this.framesElapsed = 0
        this.frames = 0
        this.rowToAnimate = rowToAnimate
        this.cropPosition  = cropPosition
        this.sizeOffset = sizeOffset
    }
    draw(){
        c.drawImage(
            this.image,
            // 0,// this.image.width/8/18*1,
            // this.image.height*0,
            // this.image.width/8/18*1,
            // this.image.height/2/9*2,
            // this.position.x,
            // this.position.y,
            // this.image.width/8/18*1,
            // this.image.height/2/9*2
            this.cropPosition.x+this.image.width/8*this.frames,
            this.cropPosition.y+this.rowToAnimate,
            this.cropPosition.dx,
            this.cropPosition.dy,
            this.position.x,
            this.position.y,
            58+this.sizeOffset.x,
            38+this.sizeOffset.y
        )
        if(1){
            this.framesElapsed++
         }
         if(this.framesElapsed %10 === 0){
             if(this.frames < 7){
                 this.frames++
             }
             else{
                 this.frames = 0
             }
         }
    }
}

const islandAnimationArray = []

const islandWaterImage = new Image()
islandWaterImage.src = './assets/Water Tileset.png'
for(let i = 0; i<=16; i++){
    const islandWaterAnimation1 = new islandAnimation({image: islandWaterImage, position: {
        x: 10+(58*i),
        y: 461
    }})
    islandAnimationArray.push(islandWaterAnimation1)
}
const dryLandYCoordinate = 80
for(let i = 0; i<=3; i++){
    const islandWaterAnimation1 = new islandAnimation({image: islandWaterImage, position: {
        x: 180+(58*i),
        y: -115
    },
    rowToAnimate:dryLandYCoordinate
})
    islandAnimationArray.push(islandWaterAnimation1)
}
for(let i = 0; i<=3; i++){
    const islandWaterAnimation1 = new islandAnimation({image: islandWaterImage, position: {
        x: 590+(58*i),
        y: -115
    },
    rowToAnimate:dryLandYCoordinate
})
    islandAnimationArray.push(islandWaterAnimation1)
}
for(let i = 0; i<=2; i++){
    const islandWaterAnimation1 = new islandAnimation({image: islandWaterImage, position: {
        x: 870+(58*i),
        y: -310
    },
    rowToAnimate:dryLandYCoordinate
})
    islandAnimationArray.push(islandWaterAnimation1)
}
for(let i = 0; i<=1; i++){
    const islandWaterAnimation1 = new islandAnimation({image: islandWaterImage, position: {
        x: 0+(58*i),
        y: -310
    },
    rowToAnimate:dryLandYCoordinate
})
    islandAnimationArray.push(islandWaterAnimation1)
}
for(let i = 0; i<=8; i++){
    const islandWaterAnimation1 = new islandAnimation({image: islandWaterImage, position: {
        x: -10,//0+(58*i),
        y: 440 -(28*i)
    },
    cropPosition: {
        x:35,
        y:15,
        dx:13,
        dy:10
    },
    sizeOffset: {
        x:-30,
        y:-10
    }
})
    islandAnimationArray.push(islandWaterAnimation1)
}
for(let i = 0; i<=8; i++){
    const islandWaterAnimation1 = new islandAnimation({image: islandWaterImage, position: {
        x: 1008,//0+(58*i),
        y: 427 -(28*i)
    },
    cropPosition: {
        x:45,
        y:15,
        dx:13,
        dy:10
    },
    sizeOffset: {
        x:-35,
        y:-10
    }
})
    islandAnimationArray.push(islandWaterAnimation1)
}
for(let i = 0; i<=5; i++){
    const islandWaterAnimation1 = new islandAnimation({image: islandWaterImage, position: {
        x: 120,//0+(58*i),
        y: -140 -(28*i)
    },
    cropPosition: {
        x:35,
        y:94,
        dx:13,
        dy:10
    },
    sizeOffset: {
        x:-30,
        y:-10
    }
})
    islandAnimationArray.push(islandWaterAnimation1)
}

for(let i = 0; i<=5; i++){
    const islandWaterAnimation1 = new islandAnimation({image: islandWaterImage, position: {
        x: 845,//0+(58*i),
        y: -140 -(28*i)
    },
    cropPosition: {
        x:46,
        y:94,
        dx:12,
        dy:10
    },
    sizeOffset: {
        x:-30,
        y:-10
    }
})
    islandAnimationArray.push(islandWaterAnimation1)
}
const energyBallImageProjectile = new Image()
energyBallImageProjectile.src = './assets/attacks/EnergyBall12F.png'
const energyBallBlast = new Image()
energyBallBlast.src = './assets/attacks/EnergyBallBlast14F.png'

const explosinProjectile = new Image()
explosinProjectile.src = './assets/attacks/ExplosionProjectile12F.png'
const explosionBlast = new Image()
explosionBlast.src = './assets/attacks/Explosion16F.png'

const waterPulseProjectile = new Image()
waterPulseProjectile.src = './assets/attacks/WaterAttack15F.png'
const waterPulseBlast = new Image()
waterPulseBlast.src = './assets/attacks/WaterEffect13F.png'



const battleSceneToDraw = []
const battleProjectionToDraw=[]
class animationSprite {
    constructor({image, rows,columns, position, sizeOffset,columnToAnimate=0,animationSpeed=10, opacity = 1}){
        this.image = image
        this.rows = rows
        this.columns = columns
        this.frames = 0
        this.framesElapsed = 0
        this.position = position
        this.sizeOffset = sizeOffset
        this.columnToAnimate = columnToAnimate
        this.animationSpeed = animationSpeed
        this.opacity = opacity
        this.health = 200
    }   
    draw(){
        c.save()
        c.globalAlpha = this.opacity
        c.drawImage(this.image,
           this.frames*(this.image.width/this.columns),
           this.columnToAnimate*this.image.height/this.rows,
           this.image.width/this.columns,
           this.image.height/this.rows,
           this.position.x,
           this.position.y,
           this.image.width/this.columns + this.sizeOffset,
           this.image.height/this.rows + this.sizeOffset
            )
            c.restore()
            if(this.rows >1 || this.columns >1){
               this.framesElapsed++
            }
            if(this.framesElapsed %this.animationSpeed === 0){
                if(this.frames < this.columns -1){
                    this.frames++
                }
                else{
                    this.frames = 0
                }
            }
        }
        faint({whoFainted}){
            const dialogue = document.querySelector('#dialogueBox')
            dialogue.innerHTML = 'Arceus Fainted'
            gsap.to(arceusDark.position,{
               y: arceusDark.position.y + 20,
               duration:1
            })
            gsap.to(arceusDark,{
                opacity:0,
                duration:1,
                onComplete(){
                    dialogue.addEventListener('click',()=>{
                        gsap.to('#overlay',{
                            opacity:1,
                            onComplete(){
                                var healthBarContianer  = document.querySelectorAll('.healthBarContainer')
                                var attackBarContianer  = document.querySelector('.attackBar')
                                var endingScreen = document.querySelector('#endingScreen')
                                gsap.to(healthBarContianer,{
                                    display: 'none'
                                   })
                                   gsap.to(attackBarContianer,{
                                    display: 'none'
                                   })
                               cancelAnimationFrame(battleSceneId)
                               gsap.to(endingScreen,{
                                display: 'block',
                                duration:2
                               })
                            //    gsap.to('#overlay',{
                            //     opacity:0
                            //    })
                            }
                        })
                    })
                }
            })
        }
       attack({attack,receiver,attacker}){
        const dialogue = document.querySelector('#dialogueBox')
        const playerHealthBar = document.querySelector('#playerHealth')
        const enemyHealthBar = document.querySelector('#enemyHealth')
        dialogue.style.display = 'block'
        let attackerName = '';
        if(receiver === arceusDark){
            attackerName = 'Mega Mewtwo Y'
        }
        else attackerName = 'Arceus'
        if(attacker === megaMewtwo){
            dialogue.textContent = `${attackerName} used ${attack.name} \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Click Here`
        }
        if(attacker === arceusDark){
            dialogue.textContent = `${attackerName} used ${attack.name} \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Click Here`
        }
        let movementDistance = -30;
        receiver.health -= attack.damage
        
        if(receiver === arceusDark){
           movementDistance = 30
      
        }
        
        switch(attack.name){
            case 'Tackle':
                const sequence = gsap.timeline()

                sequence.to(this.position,{
                    x:this.position.x-movementDistance,
                    // y:this.position.y-20
                    
                    
                }).to(this.position,{
                    x:this.position.x + movementDistance,
                    // y:this.position.y-40,
                    duration: 0.1,
                    onComplete:() => {
                        
                        // var healthBar = document.querySelector(`${receivingParty}`)
                        // healthBar.style.width=receiver.health + '%'
                        gsap.to(playerHealthBar,{
                            width: megaMewtwo.health  + 'px',
                        })
                        gsap.to(enemyHealthBar,{
                            width: arceusDark.health  + 'px',
                        })
                        gsap.to(receiver.position,{
                           x: receiver.position.x + 10,
                           yoyo :true,
                           repeat: 5,
                           duration: 0.075
                        })
                        gsap.to(receiver,{
                            opacity:0,
                            repeat:5,
                            yoyo:true,
                            duration:0.075,
                        })
                    }
                })
                .to(this.position,{
                    x:this.position.x,
                    // y:this.position.y
                    onComplete(){
                        
                        if(arceusDark.health <= 0){
                            arceusDark.faint({whoFainted: 'Arceus'})
                            audio.Battle.stop()
                            audio.Victory.play()
                         }
                    }
                })
            break
            case 'Energy Ball':
                const sequence2 = gsap.timeline()

                sequence2.to(this.position,{
                    x:this.position.x-movementDistance,
                    // y:this.position.y-20

                
                    
                    
                }).to(this.position,{
                    x:this.position.x + movementDistance,
                    // y:this.position.y-40,
                    duration: 0.1,
                    onComplete:() => {
                        if(attack.projectile !=='None'){
                        // var projectileImage = new Image()
                        // projectileImage.src=`./assets/attacks/${attack.projectileName}.png`
                        // console.log(projectileImage.src)
                        var projectile = new animationSprite({image:energyBallImageProjectile,
                        rows:1,columns:attack.projectileFrames,position:{
                            x:attacker.position.x,
                            y:attacker.position.y+20
                        },
                        sizeOffset:-320,
                        animationSpeed:10,
                        columnToAnimate:0,
                        })
                        battleProjectionToDraw.push(projectile)
                    }
                    gsap.to(projectile,{
                        sizeOffset: -220,
                        duration:1
                    })
                    gsap.to(projectile.position,{
                        x:receiver.position.x-150,
                        y:receiver.position.y-10,
                        duration:1.1,
                        onComplete:()=>{
                          battleProjectionToDraw.pop()
                          
                   if(attack.effect!=='None'){
                    // var AttackImage = new Image()
                    // AttackImage.src = `./assets/attacks/${attack.effect}.png`//'./assets/attacks/EnergyBallBlast14F.png'
                    var Attack = new animationSprite({image:energyBallBlast,rows:1,columns:attack.effectFrames,position:{
                        x:receiver.position.x-120+attack.offset.x,
                        y:receiver.position.y-30+attack.offset.y
                    },
                    sizeOffset: -200,
                    animationSpeed:5,
                    columnToAnimate:0})
                    battleSceneToDraw.push(Attack)
                    setTimeout(()=>{ battleSceneToDraw.pop()},1000)

                    gsap.to(playerHealthBar,{
                        width: megaMewtwo.health  + 'px',
                    })
                    gsap.to(enemyHealthBar,{
                        width: arceusDark.health  + 'px',
                    })
                    gsap.to(receiver.position,{
                       x: receiver.position.x + 10,
                       yoyo :true,
                       repeat: 5,
                       duration: 0.075
                    })
                    gsap.to(receiver,{
                        opacity:0,
                        repeat:5,
                        yoyo:true,
                        duration:0.075,
                    })
                   } 
                        }
                    })
                    }
                })
                .to(this.position,{
                    x:this.position.x,
                    // y:this.position.y
                    onComplete(){
                        if(arceusDark.health <= 0){
                            arceusDark.faint({whoFainted: 'Arceus'})
                            audio.Battle.stop()
                            audio.Victory.play()
                         }
                    }
                })
                   
            break
            case 'Explosion':
                const sequence3 = gsap.timeline()

            sequence3.to(this.position,{
                x:this.position.x-movementDistance,
                // y:this.position.y-20

            
                
                
            }).to(this.position,{
                x:this.position.x + movementDistance,
                // y:this.position.y-40,
                duration: 0.1,
                onComplete:() => {
                        if(attack.projectile !=='None'){
                    // var projectileImage = new Image()
                    // projectileImage.src=`./assets/attacks/${attack.projectileName}.png`
                    // console.log(projectileImage.src)
                    var projectile = new animationSprite({image:explosinProjectile,
                    rows:1,columns:attack.projectileFrames,position:{
                        x:attacker.position.x+50,
                        y:attacker.position.y-50
                    },
                    sizeOffset:-300,
                    animationSpeed:10,
                    columnToAnimate:0,
                    })
                    battleProjectionToDraw.push(projectile)
                }
                gsap.to(projectile,{
                    sizeOffset: -170
                })
                gsap.to(projectile.position,{
                    x:receiver.position.x-110,
                    y:receiver.position.y-130,
                    duration:1.1,
                    onComplete:()=>{
                      battleProjectionToDraw.pop()
                      
               if(attack.effect!=='None'){
                // var AttackImage = new Image()
                // AttackImage.src = `./assets/attacks/${attack.effect}.png`//'./assets/attacks/EnergyBallBlast14F.png'
                var Attack = new animationSprite({image:explosionBlast,rows:1,columns:attack.effectFrames,position:{
                    x:receiver.position.x-120+attack.offset.x,
                    y:receiver.position.y-30+attack.offset.y
                },
                sizeOffset: -200,
                animationSpeed:5,
                columnToAnimate:0})
                battleSceneToDraw.push(Attack)
                setTimeout(()=>{ battleSceneToDraw.pop()},1000)

                gsap.to(playerHealthBar,{
                    width: megaMewtwo.health  + 'px',
                })
                gsap.to(enemyHealthBar,{
                    width: arceusDark.health  + 'px',
                })
                gsap.to(receiver.position,{
                   x: receiver.position.x + 10,
                   yoyo :true,
                   repeat: 5,
                   duration: 0.075
                })
                gsap.to(receiver,{
                    opacity:0,
                    repeat:5,
                    yoyo:true,
                    duration:0.075,
                })
               } 
                    }
                })
                }
            })
            .to(this.position,{
                x:this.position.x,
                // y:this.position.y
                onComplete(){
                    if(arceusDark.health <= 0){
                        arceusDark.faint({whoFainted: 'Arceus'})
                        audio.Battle.stop()
                            audio.Victory.play()
                     }
                }
            })
            break
            case 'Water Pulse':
                const sequence4 = gsap.timeline()
                sequence4.to(this.position,{
                    x:this.position.x-movementDistance,
                    // y:this.position.y-20
                }).to(this.position,{
                    x:this.position.x + movementDistance,
                    // y:this.position.y-40,
                    duration: 0.1,
                    onComplete:() => {
                            if(attack.projectile !=='None'){
                        // var projectileImage = new Image()
                        // projectileImage.src=`./assets/attacks/${attack.projectileName}.png`
                        // console.log(projectileImage.src)
                        var projectile = new animationSprite({image:waterPulseProjectile,
                        rows:1,columns:attack.projectileFrames,position:{
                            x:attacker.position.x+50,
                            y:attacker.position.y-20
                        },
                        sizeOffset:-300,
                        animationSpeed:10,
                        columnToAnimate:0,
                        })
                        battleProjectionToDraw.push(projectile)
                    }
                    gsap.to(projectile,{
                        sizeOffset: -170
                    })
                    gsap.to(projectile.position,{
                        x:receiver.position.x-110,
                        y:receiver.position.y-80,
                        duration:1.5,
                        onComplete:()=>{
                          battleProjectionToDraw.pop()
                          
                   if(attack.effect!=='None'){
                    // var AttackImage = new Image()
                    // AttackImage.src = `./assets/attacks/${attack.effect}.png`//'./assets/attacks/EnergyBallBlast14F.png'
                    var Attack = new animationSprite({image:waterPulseBlast,rows:1,columns:attack.effectFrames,position:{
                        x:receiver.position.x-120+attack.offset.x,
                        y:receiver.position.y-30+attack.offset.y
                    },
                    sizeOffset: -200,
                    animationSpeed:5,
                    columnToAnimate:0})
                    battleSceneToDraw.push(Attack)
                    setTimeout(()=>{ battleSceneToDraw.pop()},1000)
    
                    gsap.to(playerHealthBar,{
                        width: megaMewtwo.health  + 'px',
                    })
                    gsap.to(enemyHealthBar,{
                        width: arceusDark.health  + 'px',
                    })
                    gsap.to(receiver.position,{
                       x: receiver.position.x + 10,
                       yoyo :true,
                       repeat: 5,
                       duration: 0.075
                    })
                    gsap.to(receiver,{
                        opacity:0,
                        repeat:5,
                        yoyo:true,
                        duration:0.075,
                    })
                   } 
                        }
                    })
                    }
                })
                .to(this.position,{
                    x:this.position.x,
                    // y:this.position.y
                    onComplete(){
                        if(arceusDark.health <= 0){
                            arceusDark.faint({whoFainted: 'Arceus'})
                            audio.Battle.stop()
                            audio.Victory.play()
                         }
                    }
                })
            break
        }
        
       }
       
            
    
}


const testWater = new animationSprite({image:waterAnimations,rows:5,columns:8,position:{
    x: 405,
    y: 490
},
sizeOffset:13,
columnToAnimate: 0
})

const arceusImage = new Image()
arceusImage.src = './assets/arceusSpritesheet.png'
const arceus = new animationSprite({image: arceusImage, rows:4, columns:4, position:{
    x: 430,
    y:-700
},
sizeOffset:0,
columnToAnimate:0
})


const chaliceImage  = new Image()
chaliceImage.src = './assets/chalice.png'

const chalice1 = new animationSprite({image: chaliceImage, rows:1, columns:8,position:{
    x:315,
    y:-490
},
sizeOffset:50,
columnToAnimate:0})

const chalice2 = new animationSprite({image: chaliceImage, rows:1, columns:8,position:{
    x:560,
    y:-490
},
sizeOffset:50,
columnToAnimate:0})



const bushImage = new Image()
bushImage.src = './assets/bushAnimation.png'
const bush = new animationSprite({image: bushImage,rows:1,columns:6,position:{
    x:60,
    y:235
},
sizeOffset:10,
columnToAnimate: 0})



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

const fountainImage = new Image()
fountainImage.src = './assets/shrine.png'
const fountain = new animationSprite({image: fountainImage, rows:1, columns:8, position:{
    x:0,
    y:-710
},
sizeOffset:130})



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
// const testBoundary = new Boundary({
//     position: {
//         x: 400,
//         y: 400
//     }
// })
let stuffToDraw = [altar,fountain,testWater,smith,bush,chalice1,chalice2,arceus,...islandAnimationArray]
let movables = [background, ...boundaries,...stuffToDraw];

function addAnimations(image,rows,columns,position,sizeOffset,columnToAnimate){
    const newNatureAnimation = new animationSprite({
      image: image,
      rows: rows, 
      columns: columns,
      position: position,
      sizeOffset: sizeOffset,
      columnToAnimate: columnToAnimate,    
    })
     stuffToDraw.push(newNatureAnimation)
     movables.push(newNatureAnimation)
  }

 const waterAnimationData = {
    waterAnimationPositions:   [
        {
            x:370,
            y:40
        },
        {
            x:40,
            y:-190
        },
        {
            x:40,
            y:-280,
            rowToAnimate: 3
        },
        {
            x:140,
            y:-60
        },
        {
            x:240,
            y:10,
            rowToAnimate:3
        },
        {
            x:680,
            y:-60
        },
        {
            x:880,
            y:-220
        },
        {
            x:950,
            y:-250,
            rowToAnimate: 2
        },
        {
            x:950,
            y:100,
            rowToAnimate: 2
        },
        {
            x:950,
            y:-100,
            rowToAnimate: 2
        },
        {
            x:800,
            y:0
        },
        {
            x:770,
            y:520
        },
        {
            x:110,
            y:520,
        },
        {
            x:70,
            y:490,
            rowToAnimate:2
        },
        {
            x:920,
            y:540,
            rowToAnimate:2
        },
        {
            x:595,
            y:490,
            rowToAnimate:2
        },
        {
            x:390,
            y:530,
            rowToAnimate:2
        },
        {
            x:230,
            y:-85,
            rowToAnimate:3
        },
        {
            x:830,
            y:-45,
            rowToAnimate:3
        },
        {
            x:380,
            y:-50,
            rowToAnimate:2
        },
        {
            x:580,
            y:-90,
            rowToAnimate:3
        },
        {
            x:590,
            y:0,
            rowToAnimate:2
        },
        {
            x:40,
            y:60,
            rowToAnimate:2
        },
      ],
 }

waterAnimationData.waterAnimationPositions.forEach(element => {
    addAnimations(waterAnimations,5,8,{x: element.x, y: element.y},13,element.rowToAnimate? element.rowToAnimate : Math.floor(Math.random()*2))
})

// addAnimations(waterAnimations,5,8,{x:370,y:40},13,0);
// addAnimations(waterAnimations,5,8,{x:370,y:40},13,0);

function checkCollision({object1, object2}){
    return (object1.position.x + 192/4 -20 >= object2.position.x 
    && object1.position.x <= object2.position.x + object2.width
    && object1.position.y <= object2.position.y + object2.height
    && object1.position.y + 68 - 15 >= object2.position.y)
}
let moving = true;
const battle = {
    initiated: false
}
var healthBarContainer = document.querySelectorAll('.healthBarContainer')
healthBarContainer.forEach(bar =>{
    bar.style.display = 'none'
})
var attackBar = document.querySelector('.attackBar')
attackBar.style.display= 'none'
var firstScene
function animate(){
    firstScene =  window.requestAnimationFrame(animate)
    background.draw()
    boundaries.forEach(boundary =>{
        boundary.draw()
        
    })
    
    stuffToDraw.forEach(object => object.draw())
    player.draw()
    console.log(firstScene)
    moving = true
    player.moving = false
    if(battle.initiated) return 
    if(background.position.y === -138){
        if(background.position.x>=-539 && background.position.x <=367){
            // console.log("battle started")
            window.cancelAnimationFrame(firstScene)
            audio.Map.stop()
            audio.Battle.play()
            battle.initiated = true
            
            gsap.to("#overlay", {
                opacity:1,
                repeat:6,
                yoyo: true,
                duration: 0.3,
                onComplete(){
                 gsap.to('#overlay',{
                    opacity:1,
                    duration:0.3,
                    onComplete(){
                        battleScene()
                        healthBarContainer.forEach(bar =>{
                            bar.style.display='block'
                        })
                        attackBar.style.display='flex'
                        gsap.to('#overlay',{
                            opacity: 0,
                            duration:0.3
                        })
                    }
                 })
                }
            })
        }
    }
    
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
        movables.forEach(movable => movable.position.y +=2)
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
        movables.forEach(movable => movable.position.y -=2)
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


const battleBackgroundImage = new Image()
battleBackgroundImage.src = './assets/battleBackground.jpg'
const battleBackground = new animationSprite({image: battleBackgroundImage,
rows:1, columns:1, position:{
    x:0,
    y:0
},
sizeOffset:-100,
columnToAnimate:0
})



const arceusDarkImage = new Image()
arceusDarkImage.src = './assets/DarkArceusSpriteSheet.png'
const arceusDark = new animationSprite({image: arceusDarkImage,columns:89,rows:1,position:{
    x:800,
    y:290
},
sizeOffset:30,
columnToAnimate:0,
animationSpeed:1 })

const megaMewtwoImage = new Image()
megaMewtwoImage.src = './assets/megaMewtwoY.png'
const megaMewtwo = new animationSprite({image:megaMewtwoImage,
rows:1,columns:89,position:{
    x:110,
    y:312
},
sizeOffset:60,
animationSpeed:1.5,
columnToAnimate:0})

var battleSceneId;
function battleScene(){
    battleSceneId = window.requestAnimationFrame(battleScene)
    battleBackground.draw()
    arceusDark.draw()
    megaMewtwo.draw()
    battleSceneToDraw.forEach((element)=>{
        element.draw()
    })
    battleProjectionToDraw.forEach((element)=>{
        element.draw()
    })
}
// battleScene()

const Buttons = document.querySelectorAll('button')
// Buttons.addEventListener('click',()=>{
// //     megaMewtwo.attack({attack:attacks.Tackle,
// //     receiver: arceusDark
// // })
// console.log(Buttons)
// })
const attackType = document.querySelector('#attackType')
const enemyAttackQueue = []

Buttons.forEach((button)=>{
    button.addEventListener('mouseover',()=>{
        if(button.name === 'Tackle'){
            attackType.innerHTML=attacks.Tackle.type
          }
           if(button.name === 'EnergyBall'){
            attackType.innerHTML=attacks.EnergyBall.type
          }
          if(button.name === 'Explosion'){
            attackType.innerHTML=attacks.Explosion.type
          }
          if(button.name === 'WaterPulse'){
            attackType.innerHTML=attacks.WaterPulse.type
          }
    })
    button.addEventListener('mouseleave',()=>{
        attackType.innerHTML= 'Attack Type'
    })
    button.addEventListener('click',()=>{
       if(button.name === 'Tackle'){
        megaMewtwo.attack({
            attack: attacks.Tackle,
            attacker: megaMewtwo,
            receiver: arceusDark
        })
        
        // arceusDark.attack({
        //     attack: attacks.Tackle,
        //     attacker: arceusDark,
        //     receiver: megaMewtwo
        // })
        
        if(arceusDark.health <= 0){
            return 
         }
         else{
            enemyAttackQueue.push(()=>{
                arceusDark.attack({
                    attack: attacks.Tackle,
                    attacker: arceusDark,
                    receiver: megaMewtwo
                })
            })
        }
       }
       if(button.name === 'EnergyBall'){
        megaMewtwo.attack({
            attack: attacks.EnergyBall,
            attacker: megaMewtwo,
            receiver: arceusDark
        })
       
        if(arceusDark.health <= 0){
            return 
         }
        else{
            enemyAttackQueue.push(()=>{
                arceusDark.attack({
                    attack: attacks.Tackle,
                    attacker: arceusDark,
                    receiver: megaMewtwo
                })
            })
        }
       }
       if(button.name === 'Explosion'){
        megaMewtwo.attack({
            attack: attacks.Explosion,
            attacker: megaMewtwo,
            receiver: arceusDark
        })
        if(arceusDark.health <= 0){
            return 
         }
        else{
            enemyAttackQueue.push(()=>{
                arceusDark.attack({
                    attack: attacks.Tackle,
                    attacker: arceusDark,
                    receiver: megaMewtwo
                })
            })
        }
      }
      if(button.name === 'WaterPulse'){
        megaMewtwo.attack({
            attack: attacks.WaterPulse,
            attacker: megaMewtwo,
            receiver: arceusDark
        })
        if(arceusDark.health <= 0){
         return 
        }
        else{
            enemyAttackQueue.push(()=>{
                arceusDark.attack({
                    attack: attacks.Tackle,
                    attacker: arceusDark,
                    receiver: megaMewtwo
                })
            })
        }
      }
    })
})

const dialogueBox = document.querySelector('#dialogueBox')
dialogueBox.addEventListener('click',(e)=>{
    if(enemyAttackQueue.length > 0){
        enemyAttackQueue[0]()
        enemyAttackQueue.shift()
    }
    else e.currentTarget.style.display = 'none'
})

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
function playAudio(){
    audio.Map.play()
}
setTimeout(playAudio(),100)
setTimeout(()=>{
    document.querySelector('.overlay').style.scale = 1
    document.querySelector('.attackBar').style.scale = 1
    document.querySelectorAll('.healthBarContainer').forEach(container => container.style.scale =1)
},4000)