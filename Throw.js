AFRAME.registerComponent("bowling-ball",{
    init:function(){
     this.rollBall()
    },
    rollBall:function(){
        window.addEventListener("keydown",(e)=> {
           if(e.key === "z"){
             var ball = document.createElement("a-entity");
             ball.setAttribute("geometry",{
                primitive:"sphere",
                radius:0.5
             });
             ball.setAttribute("material",{color:"black"});
             ball.setAttribute("visible",true);

             var camera = document.querySelector("#camera");
             pos = camera.getAttribute("position");
             ball.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z});

             var camera3D = document.querySelector("#camera").object3D;
             var direction = new THREE.Vector3();

             camera3D.getWorldDirection(direction);
             ball.setAttribute("velocity",direction.multiplyScalar(-10));

             var scene = document.querySelector("#scene");
             scene.appendChild(ball);
           }
        })  
    }
})