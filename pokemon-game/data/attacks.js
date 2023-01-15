const attacks = {
    Tackle:{
        name: 'Tackle',
        damage: 1000,
        type:'Normal',
        effect: 'None',
        offset:{
            x:0,
            y:0
        },
        projectile: 'None'
    },
    EnergyBall:{
        name: 'Energy Ball',
        damage:25,
        type: 'Electric',
        effect: 'EnergyBallBlast14F',
        effectFrames: 14,
        offset:{
            x:0,
            y:-10
        },
        projectile: 'Yes',
        projectileName: 'EnergyBall12F',
        projectileFrames: 12
    },
    Explosion:{
        name:'Explosion',
        damage:20,
        type:'Fire',
        effect:'Explosion16F',
        effectFrames:16,
        offset:{
            x:0,
            y:20
        },
        projectile: 'Yes',
        projectileName: 'ExplosionProjectile12F',
        projectileFrames:12
    },
    WaterPulse:{
        name:'Water Pulse',
        damage:15,
        type:'Water',
        effect:'WaterEffect13F',
        effectFrames: 13,
        offset:{
            x:30,
            y:80
        },
        projectile: 'Yes',
        projectileName: 'WaterAttack15F',
        projectileFrames: 15
    }
}