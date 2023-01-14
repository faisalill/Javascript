const attacks = {
    Tackle:{
        name: 'Tackle',
        damage: 10,
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
        damage:30,
        type: 'Psychic',
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
        damage:40,
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
    }
}