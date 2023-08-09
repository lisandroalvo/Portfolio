$(document).ready(function() {
    // Your JavaScript code goes here


    const dynamicText = document.getElementById('dynamic-text');
    const words = ['UX-UI Designer', 'UX Researcher', 'UI Motion', 'Developer', 'Illustrator', ];
    let i = 0;

    function changeText() {
        dynamicText.textContent = words[i];
        i = (i + 1) % words.length;

    }

    setInterval(changeText, 2000); // Change every 2000 milliseconds, or 2 seconds

    /* Project cards */

    // Animate the project title on page load
    const hamburgerMenu = document.querySelector('#hamburgerMenu');
    const navLinks = document.querySelector('#navLinks');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.style.left = navLinks.style.left === '0%' ? '-100%' : '0%';
    });

    /* menu animation logo */
    function toggleMenu() {
        var menu = document.getElementById("hamburgerMenu");
        menu.classList.toggle("change");
    }

    /* Reviews */

    $(document).ready(function() {
        var testimonialIndex = 0;
        var intervalTime = 5000; // This is the time for each slide, in milliseconds. Here it's set to 5 seconds.

        function showTestimonial(index) {
            var testimonials = $('.testimonial');
            testimonials.hide();
            testimonials.eq(index).show();
        }

        function nextTestimonial() {
            testimonialIndex++;
            if (testimonialIndex >= $('.testimonial').length) {
                testimonialIndex = 0;
            }
            showTestimonial(testimonialIndex);
        }

        function prevTestimonial() {
            testimonialIndex--;
            if (testimonialIndex < 0) {
                testimonialIndex = $('.testimonial').length - 1;
            }
            showTestimonial(testimonialIndex);
        }

        showTestimonial(testimonialIndex); // Show the first testimonial when page loads

        // Automatic slide change every intervalTime milliseconds
        var intervalId = setInterval(nextTestimonial, intervalTime);

        // When next or previous buttons are clicked, reset the timer
        $('#nextBtn, #prevBtn').click(function() {
            clearInterval(intervalId);
            intervalId = setInterval(nextTestimonial, intervalTime);
        });

        $('#nextBtn').click(function() {
            nextTestimonial();
        });

        $('#prevBtn').click(function() {
            prevTestimonial();
        });
    });


});