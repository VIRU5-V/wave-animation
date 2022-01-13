const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})


ctx.beginPath()
ctx.moveTo(0, canvas.height/2)
wave_len = 0.003
freq = 0.05
inc = freq
amplitude = 100
x = 500
y = 500
window.addEventListener('mousemove', (e)=>{
    x = e.x
    y = e.y
})
function wave(y){
    ctx.beginPath()
    for(let i=0; i <= canvas.width+10; i++){
        ctx.lineTo(
            i,
            y + Math.sin(i * wave_len + inc) * amplitude * Math.sin(inc)
        )
    }
    ctx.strokeStyle = `rgba(88, 52, 235, 1)` 
    ctx.lineWidth = 10;
    ctx.stroke()
    ctx.closePath()
}
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    wave(canvas.height/ 2)
    wave(canvas.height/2+100)
    inc+=freq*x*0.001
    requestAnimationFrame(animate)
}

animate()