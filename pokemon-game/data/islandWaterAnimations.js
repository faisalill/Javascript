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

