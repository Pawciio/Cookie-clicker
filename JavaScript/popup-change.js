
const images = document.querySelectorAll(".item-images");
const popup = document.querySelectorAll(".popup");

console.log(images[0]);

for(let i=0; i<images.length; i++){
    images[i].addEventListener("mouseover", function(){
        popup[i].style.display = "block";
    });
    
    images[i].addEventListener("mouseout", function(){
        popup[i].style.display = "none";
    });
}

