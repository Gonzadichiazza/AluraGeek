const videos = document.querySelector(".videos"); 
const primerVideo = document.querySelectorAll(".videos__seccion")[0]; 
const botones = document.querySelectorAll(".botones"); 
let presionado = false, prevPageX, prevScrollLeft, positionDiff; 
let anchoPrimerVideo = primerVideo.clientWidth + 1; 
console.log(primerVideo);

const autoSlide = () => {
    positionDiff = Math.abs(positionDiff); 
    anchoPrimerVideo = primerVideo.clientWidth; 
    let valDifference = anchoPrimerVideo - positionDiff;
    
    if (videos.scrollLeft > prevScrollLeft) {
        return videos.scrollLeft += (positionDiff > anchoPrimerVideo / 3) ? valDifference : -positionDiff;
    }
    videos.scrollLeft -= (positionDiff > anchoPrimerVideo / 3) ? valDifference : -positionDiff;
};

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        videos.scrollLeft += (boton.id == "left") ? -anchoPrimerVideo : anchoPrimerVideo;
    });
});

const dragStart = (e) => {
    presionado = true; 
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = videos.scrollLeft; 
};

const dragStop = () => {
    presionado = false; 
    autoSlide(); 
};

const dragging = (e) => {
    if (!presionado) return;
    e.preventDefault(); 
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX; 
    videos.scrollLeft = prevScrollLeft - positionDiff;
};

videos.addEventListener("mousedown", dragStart);
videos.addEventListener("mousemove", dragging);
videos.addEventListener("mouseup", dragStop);

