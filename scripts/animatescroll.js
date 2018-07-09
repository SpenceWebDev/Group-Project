// Javascript Document
// when the window is scrolled, make text and images appear

// get HTML element
const $fadeIn = $('.fade-in');

// run function when window is scrolled
$(window).scroll(function(){

    // get more than half the height of the window 
    const midHeight = $(window).height() / 1.4;
    // get the position (more than half way from the top) of the screen as the user scrolls
    const winPos = $(window).scrollTop() + midHeight;

    // for each item with the class .fade-in, run the following
    $fadeIn.each(function(){

        // Use offset to get the top coordiate of the element (relative to the page)
        const topElem = $(this).offset().top;

        // if the position of the window (from the middle) is greater than the top of the element, fade in the contents
        if (winPos > topElem) {
            $(this).css({'opacity' : '1',
                        'transition' : '1.5s'});
        }
    })
})