//create an engine
var engine= Matter.Engine.create();
//create a renderer
var render = Matter.Render.create({
    element: document.body,
    engine: engine,
    options:{
        wireframes: false,
        background: "#33FFFD",
    }
});
//create world
var ground = Matter.Bodies.rectangle(400, 610, 810, 200, { isStatic: true });
var circle1= Matter.Bodies.rectangle(500,500,50,50, {label:"mario"});
var square1= Matter.Bodies.rectangle(300, 500,50,50, {label:"luigi"});
var plat1 = Matter.Bodies.rectangle(400, 100, 200, 10, { isStatic: true ,});
var plat2 = Matter.Bodies.rectangle(200, 300, 200, 10, { isStatic: true });
var plat3 = Matter.Bodies.rectangle(600, 300, 200, 10, { isStatic: true});
var win =Matter.Bodies.rectangle(400,50,10,10, {label:"winpoint", isStatic: true});
// add all of the bodies to the world
Matter.World.add(engine.world, [ground, circle1, square1, plat1, plat2, plat3,win]);
// run the engine
Matter.Engine.run(engine);

// run the renderer
Matter.Render.run(render);


square1.render.sprite.texture = "luigi2.png";
square1.render.sprite.xScale = 0.03;
square1.render.sprite.yScale= 0.03;

circle1.render.sprite.texture = "mario2.png";
circle1.render.sprite.xScale = 0.03;
circle1.render.sprite.yScale= 0.03;

document.addEventListener("keydown",function(event){
    if(event.keyCode== 38){
        circle1.force.y=-0.065; 
    }
    if(event.keyCode== 37){
        circle1.force.x=-0.065;
    }
    if(event.keyCode== 40){
        circle1.force.y=0.065; 
    }
    if(event.keyCode== 39){
        circle1.force.x=0.065;
    }
    

    if(event.keyCode==87){
        square1.force.y=-0.065; 
    }
    if(event.keyCode== 65){
        square1.force.x=-0.065;
    }
    if(event.keyCode== 83){
        square1.force.y=0.065; 
    }
    if(event.keyCode== 68){
        square1.force.x=0.065;
    }
});

function handleCollision(e){
    e.pairs.forEach(pair =>{
       const{label:labelA}=pair.bodyA;
       const{label:labelB}=pair.bodyB;
       if(labelA=="mario"&&labelB=="winpoint"){
           alert("mario wins");
           location.reload();
       }
        if(labelA=="luigi"&&labelB=="winpoint"){
           alert("luigi wins");
           location.reload();
       }
    });
}

Matter.Events.on(engine,'collisionStart',handleCollision);