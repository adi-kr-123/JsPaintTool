let size=1;
let ispressed=false;
let color="black";
let x=undefined;
let y=undefined;

const canvas=document.getElementById("canvas");
const increaseButton =document.getElementById("increase");
const decreaseButton=document.getElementById("decrease");
const sizeElement=document.getElementById("size");
const colorElement=document.getElementById("color");
const resetCanvaElement=document.getElementById("clear");

const ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",(e)=>{
    ispressed=true;
    x=e.offsetX;
    y=e.offsetY;
});

canvas.addEventListener("mouseup",(e)=>{
    ispressed=false;
    x=undefined;
    y=undefined;
});

canvas.addEventListener("mousemove",(e)=>{
    if(ispressed)
    {
        const x2=e.offsetX;
        const y2=e.offsetY;
        circle(x2,y2);
        lines(x,y,x2,y2)
        x=x2;
        y=y2;
    }

});

function circle(x,y)
{
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI*2);
    ctx.fillstyle=color;
    ctx.fill();

}

function lines(x1,y1,x2,y2)
{
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineWidth = 2*size;
    ctx.lineTo(x2,y2);
    ctx.strokeStyle=color;
    
    ctx.stroke();
}

function updateNumber()
{
    sizeElement.innerText=size;
}
increaseButton.addEventListener("click",()=>
{
    size+=1;
    if(size>100)
    {
        size=100;
    }
    updateNumber();

});
decreaseButton.addEventListener("click",()=>
{
    size-=1;
    if(size<0)
    {
        size=1;
    }
    updateNumber();
    
});
resetCanvaElement.addEventListener("click",()=>{
    console.log("Clicked");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.resetCanvaRect(0,0,canvas.width,canvas.height);
});

colorElement.addEventListener("change",(e)=>
{
    color=e.target.value;
});

