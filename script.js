let mainImage = document.querySelector("#mainImage");
let lightBoxImage = document.querySelector("#lightBoxImage");
let lightBox = document.querySelector(".lightBox");
let closeLightBox = document.querySelector("#closeLightBox");
let lightBoxCircleLeft = document.querySelector(".lightBox .circle.left");
let lightBoxCircleRight = document.querySelector(".lightBox .circle.right");
let MobileCircleLeft = document.querySelector(".circle.left");
let MobileCircleRight = document.querySelector(".circle.right");
let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");
let countDisplay = document.querySelector("#count");
let count = 0;
let allThumbnails = document.querySelectorAll(".thumbnail");
let currentMainImagePath = "images/image-product-1.jpg";
let imageCount = 1;

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

let changeLightBoxImage = () => {
	currentMainImagePath = `images/image-product-${imageCount}.jpg`;
	mainImage.src = currentMainImagePath;
	lightBoxImage.src = currentMainImagePath;
	allThumbnails.forEach((thumbnails) => {
		thumbnails.classList.remove("selected");
	});
	allThumbnails.forEach((el, index) => {
		if (index == imageCount - 1) {
			el.classList.add("selected");
		}
	});
}

let previousImage = () => {
	if (imageCount == 1) {
    imageCount = 5;
  }
  imageCount--;
  changeLightBoxImage();
}

let nextImage = () => {
	if (imageCount == 4) {
    imageCount = 0;
  }
  imageCount++;
  changeLightBoxImage();
}

lightBoxCircleLeft.addEventListener("click", previousImage);
lightBoxCircleRight.addEventListener("click", nextImage);

MobileCircleLeft.addEventListener("click", previousImage);
MobileCircleRight.addEventListener("click", nextImage);