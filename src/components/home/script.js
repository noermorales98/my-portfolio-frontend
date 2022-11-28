document.addEventListener("mousemove", parallax);
function parallax(event) {
    this.querySelectorAll(".move").forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;

        console.log(x, y);
        if(y>= -11){
            shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        }
        else{
            shift.style.transform = `translateX(${x}px) translateY(-11px)`;
        }
    })
}