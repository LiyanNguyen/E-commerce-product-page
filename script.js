let mainImage = document.querySelector("#mainImage");
let lightBoxImage = document.querySelector("#lightBoxImage");
let lightBox = document.querySelector(".lightBox");
let closeLightBox = document.querySelector("#closeLightBox");
let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");
let countDisplay = document.querySelector("#count");
let count = 0;
let allThumbnails = document.querySelectorAll(".thumbnail");
let currentMainImagePath = "images/image-product-1.jpg";

allThumbnails.forEach((el, index) => {
	el.addEventListener("click", () => {
		currentMainImagePath = `images/image-product-${index + 1}.jpg`;
    mainImage.src = currentMainImagePath;
    lightBoxImage.src = currentMainImagePath;
    allThumbnails.forEach((thumbnails) => {
      thumbnails.classList.remove("selected");
    });
    el.classList.add("selected");
	})
});

mainImage.onclick = () => {
	lightBox.classList.add("active")
}

closeLightBox.onclick = () => {
	lightBox.classList.remove("active")
}

minus.onclick = () => {
	if (count > 0) {
		count--;
		countDisplay.innerText = count;
	}
}

plus.onclick = () => {
	count++;
  countDisplay.innerText = count;
};