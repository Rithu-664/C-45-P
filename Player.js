class Player{
    constructor(){
        animate = loadAnimation("pc-running-1.png","pc-running-2.png","pc-running-3.png","pc-running-4.png","pc-running-5.png","pc-running-6.png","pc-running-7.png","pc-running-8.png","pc-running-9.png")
    }

    display(){
        pc_1 = createSprite(600,250,10,10)
        pc_1.addAnimation("running",animate)
    }

}