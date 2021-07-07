$(document).ready(function() {

var carousels = $(".carouselItem");
var colors = ['#88A486', '#88A486', '#88A486'];

function changeCarousel(i) {
    if (i === 0) {
        carousels.eq(2).hide();
    }
    else {
        carousels.eq(i - 1).hide();
    }

    carousels.eq(i).css('color', colors[i]);
    carousels.eq(i).show();
}

var index = 0;
setInterval(function() {
    changeCarousel(index);
    index = index < 2 ? index + 1 : 0;
}, 3000);

});


