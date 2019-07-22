/* var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	spaceBetween: 30
}); */
 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true
    });
// 点击右键加载网页
var count = 0;
var next = document.getElementById('next');
var power = document.getElementById('power');
var works = document.getElementById('works');
next.onclick = function() {
	if (count === 0) {
		power.innerHTML = '<iframe src="./power.html" width="100%" height="100%" scrolling="no"></iframe>';
		count++;
	}
	if (count === 1) {
		works.innerHTML = '<iframe src="./works.html" width="100%" height="100%" scrolling="no"></iframe>';
		count++;
	}

}
