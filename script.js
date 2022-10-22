let mainImage = document.querySelector("#mainImage");
let lightBoxImage = document.querySelector("#lightBoxImage");
let lightBox = document.querySelector(".lightBox");
let closeLightBox = document.querySelector("#closeLightBox");
let thumb1 = document.querySelector("#thumb1");
let thumb2 = document.querySelector("#thumb2");
let thumb3 = document.querySelector("#thumb3");
let thumb4 = document.querySelector("#thumb4");
let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");
let countDisplay = document.querySelector("#count");
let count = 0;
let allThumbnails = document.querySelectorAll(".thumbnail");
let currentMainImagePath = "images/image-product-1.jpg";

let removeSelectedStateInAllThumbnails = () => {
	allThumbnails.forEach((el) => {
		el.classList.remove("selected");
	})
};

mainImage.onclick = () => {
	lightBox.classList.add("active")
}

closeLightBox.onclick = () => {
	lightBox.classList.remove("active")
}

thumb1.onclick = () => {
	currentMainImagePath = "images/image-product-1.jpg";
	mainImage.src = currentMainImagePath;
	lightBoxImage.src = currentMainImagePath;
	removeSelectedStateInAllThumbnails();
	thumb1.classList.add("selected")
};

thumb2.onclick = () => {
	currentMainImagePath = "images/image-product-2.jpg";
	mainImage.src = currentMainImagePath;
	lightBoxImage.src = currentMainImagePath;
	removeSelectedStateInAllThumbnails();
  thumb2.classList.add("selected");
};

thumb3.onclick = () => {
	currentMainImagePath = "images/image-product-3.jpg";
	mainImage.src = currentMainImagePath;
  lightBoxImage.src = currentMainImagePath;
	removeSelectedStateInAllThumbnails();
  thumb3.classList.add("selected");
};

thumb4.onclick = () => {
	currentMainImagePath = "images/image-product-4.jpg";
	mainImage.src = currentMainImagePath;
  lightBoxImage.src = currentMainImagePath;
	removeSelectedStateInAllThumbnails();
  thumb4.classList.add("selected");
};

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