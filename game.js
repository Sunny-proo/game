const canvas=document.querySelector("#canvas");
canvas.width=innerWidth;

canvas.height=innerHeight;
canvas.style.background="yellow"
const context=canvas.getContext("2d");
function player(){
    context.beginPath();
    context.arc(canvas.width/2,canvas.height/2,20,0,2*Math.PI);
    context.fillStyle="white";
    context.fill()
}
player();
class projectile{
    constructor(x,y,sx,sy){
        this.x=x;
        this.y=y;
        this.sx=sx;
       this.sy=sy;

        
    }
    
    draw(){ 

    context.beginPath();
    context.arc(this.x,this.y,10,0,2*Math.PI);
        context.fillStyle="red";
        context.fill();
    
   
    }
    update(){
        
        
        player();
        this.draw();
        this.x+=this.sx;
        this.y+=this.sy;
        
}}
Enemies=[];
const prj=[];
 let projects=new projectile();
 let updaterec=function(){
    context.clearRect(0,0,innerWidth,innerHeight)
    requestAnimationFrame(updaterec);
    player()
   for(pr of prj){

    pr.update();
    
   }
   for(e of Enemies){
    e.update();
   }
}

 canvas.addEventListener("click",(event)=>{
     
      console.log(event)
     const angle=Math.atan2(event.clientY-canvas.height/2,event.clientX-canvas.width/2);
     
     const speed={
        x:Math.cos(angle),
        y:Math.sin(angle)
     }
     
     
    prj.push(new projectile(canvas.width/2,canvas.height/2,speed.x*5,speed.y*5))
    
    
 });
 updaterec();
 class Enemy{
    constructor(x,y,r,color,sx,sy){
        this.x=x;
        this.y=x;
        this.r=r;
        this.sx=sx;
        this.sy=sy
       this.color=color;
       

        
    }
    
    draw(){ 

    context.beginPath();
    context.arc(this.x,this.y,this.r,0,2*Math.PI);
        context.fillStyle=this.color;
        context.fill();
    
   
    }
    update(){
        
        
        player();
        this.draw();
        this.x+=this.sx;
        this.y+=this.sy;
        
}}

function spawnEnemies(){
    alert("hi")
    setInterval(()=>{
        const r=Math.random()*30+10
        const x=100
    const y=100
 
    let color="rgb(x,y,r)"
    const angle=Math.atan2(canvas.height/2-y,canvas.width/2-x);
     
     const speed={
        lx:Math.cos(angle),
        ly:Math.sin(angle)
     }
        x+=50;
        y+=50;
        Enemies.push(new Enemy(x,y,r,color,speed.lx*5,speed.ly*5))
    },1000)
}
spawnEnemies();
