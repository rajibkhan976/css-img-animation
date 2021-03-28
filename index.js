document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    var sceneOne = document.querySelector(".scene-one-text-content");
	var sceneOneImg = document.querySelector(".scene-one-bg-img");
	var sceneTwo = document.querySelector(".scene-two-text-content");
	var sceneTwoImg = document.querySelector(".scene-two-bg-img");
	var sceneThree = document.querySelector(".scene-three-text-content");
	var sceneThreeImg = document.querySelector(".scene-three-bg-img");
	var sceneThreeBottom = document.querySelector(".scene-three-bottom-content");
	var sceneFour = document.querySelector(".scene-four-text-content");
	var sceneFourImg = document.querySelector(".scene-four-bg-img");
	document.addEventListener("scroll", function (e) {
		if (window.pageYOffset  >= 0 && window.pageYOffset  <= 650) {
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
			sceneTwoImg.classList.remove(`scene-two-bgimg-animation`);
			sceneTwo.classList.remove(`scene-two-text-animation`);
		}
		if (window.pageYOffset  >= 1301 && window.pageYOffset  <= 1950) {
			sceneThree.classList.add(`scene-three-text-animation`);
			sceneThreeImg.classList.add(`scene-three-bgimg-animation`);
			sceneThreeBottom.classList.add(`scene-three-bottom-animation`);
		} else {
			sceneThree.classList.remove(`scene-three-text-animation`);
			sceneThreeImg.classList.remove(`scene-three-bgimg-animation`);
			sceneThreeBottom.classList.remove(`scene-three-bottom-animation`);
		}
		if (window.pageYOffset  >= 1951 && window.pageYOffset  <= 2850) {
			sceneFour.classList.add(`scene-four-text-animation`);
			sceneFourImg.classList.add(`scene-four-bgimg-animation`);
		} else {
			sceneFour.classList.remove(`scene-four-text-animation`);
			sceneFourImg.classList.remove(`scene-four-bgimg-animation`);
		}
	});
  }
}