
window.onload = function() {
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        autoplay: 3000,
        hoverpause: true,
        animationDuration: 800,
        animationTimingFunc: 'ease-in-out',
        swipeThreshold: 80, // Swipe threshold for touch screens
        dragThreshold: 120, // Drag threshold for desktop
    }).mount();
};


