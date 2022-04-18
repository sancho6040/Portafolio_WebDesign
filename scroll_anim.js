const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const circle1 = entry.target.querySelector('.circleScroll-html');
        const circle2 = entry.target.querySelector('.circleScroll-css');
        const circle3 = entry.target.querySelector('.circleScroll-js');
        const circle4 = entry.target.querySelector('.circleScroll-cs');

        if (entry.isIntersecting) {
            circle1.classList.add('circle-html');
            circle2.classList.add('circle-css');
            circle3.classList.add('circle-js');
            circle4.classList.add('circle-cs');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        circle1.classList.remove('circle-html');
        circle2.classList.remove('circle-css');
        circle3.classList.remove('circle-js');
        circle4.classList.remove('circle-cs');
    });
});

observer.observe(document.querySelector('.container__progressbars'));