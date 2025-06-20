const fullImgBox =document.getElementById("fullImgBox");
const fullImg=document.getElementById("fullImg");
const galleryImages=document.querySelectorAll(".img-gallery img");

let currentIndex = 0;

function openFullImg(Index){
    currentIndex= Index;
    fullImgBox.style.display= "flex";
    fullImgBox.src =galleryImages[currentIndex].src;

}
function closeFullImg(){
    fullImgBox.style.display = "none";

}

function prevImg(){
    currentIndex= (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    fullImg.src = galleryImages[currentIndex].src;
}
function nextImg(){
    currentIndex = (currentIndex + 1) % galleryImages.length;
    fullImg.src = galleryImages[currentIndex].src;
}


