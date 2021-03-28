document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    var sceneOne = document.querySelector(".scene-one-text-content");
	var sceneOneImg = document.querySelector(".scene-one-bg-img");
	var sceneTwo = document.querySelector(".scene-two-text-content");
	var sceneTwoImg = document.querySelector(".scene-two-bg-img");
	document.addEventListener("scroll", function (e) {
		if (window.pageYOffset  <= 650) {
			sceneOne.classList.remove(`scene-one-text-content`);
			sceneOne.classList.add(`scene-one-text-animation`);
			sceneOneImg.classList.remove(`scene-one-bg-img`);
			sceneOneImg.classList.add(`scene-one-bgimg-animation`);
		} else {
			sceneOne.classList.remove(`scene-one-text-animation`);
			sceneOneImg.classList.remove(`scene-one-bgimg-animation`);
		}
		if (window.pageYOffset  >= 651 && window.pageYOffset  <= 1300) {
			sceneTwoImg.classList.add(`scene-two-bgimg-animation`);
			sceneTwo.classList.add(`scene-two-text-animation`);
		} else {
			sceneTwo.classList.remove(`scene-two-text-animation`);
			sceneTwoImg.classList.remove(`scene-two-bgimg-animation`);
		}
	});
  }
}