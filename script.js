$(document).ready(function() {
    // Your JavaScript code goes here


    const dynamicText = document.getElementById('dynamic-text');
    const words = ['UX-UI Designer', 'UX Researcher', ' Web Developer', 'Illustrator', ];
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

/* cursor  */

// Create a div element for the custom cursor
const cursor = document.createElement('div');
cursor.className = 'cursor';
document.body.appendChild(cursor);

// Update the cursor's position when the mouse moves
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

/* about me bar status */

$(document).ready(function() {

    $('.skill').hover(
        function() {
            // Mouse enter
            const percentage = $(this).data('percentage');
            $(this).find('.fill').animate({
                width: percentage + "%"
            }, 300);

            $(this).animate({
                fontSize: "205%" // Increases font size by 5% on hover
            }, 200);

        },
        function() {
            // Mouse leave
            $(this).find('.fill').animate({
                width: "0%"
            }, 300);

            $(this).animate({
                fontSize: "100%" // Returns font size to default on mouse leave
            }, 200);
        }
    );

});
/* tOOLS */
$(document).ready(function() {

    $('.tool').hover(
        function() {
            // Mouse enter
            $(this).animate({
                fontSize: "105%" // Increases size by 5% on hover
            }, 200).animate({
                fontSize: "100%" // Returns to normal size for a bounce effect
            }, 100);
        }
    );

});

/* Chatbot */

function toggleChatbot() {
    var chatbotBody = document.querySelector('.chatbot-body');
    chatbotBody.style.display = (chatbotBody.style.display === "none" || chatbotBody.style.display === "") ? "block" : "none";
}

function downloadResume() {
    var link = document.createElement('a');
    link.href = '../web-2023/img/RESUMEAgost.pdf';
    target = "_blank"
    link.download = '../web-2023/img/RESUMEAgost.pdf'
    target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    target = "_blank"
}

function handleShortcut(action) {
    var userQuery = "";

    switch (action) {

        case 'downloadResume':
            downloadResume();
            userQuery = "You selected: Downloading Lisandro's resume...";
            break;

        case 'downloadResume':
            userQuery = "You selected: Downloading Lisandro's resume...";

            // Add actual download link here
            break;
        case 'scheduleMeeting':
            userQuery = "You selected: Scheduling a meeting...";
            break;
        case 'viewProjects':
            userQuery = "You selected: Viewing projects...";
            redirectToProjects();
            break;
        case 'sendEmail':
            userQuery = "You selected: Sending an email...";
            sendEmailToLisandro();
            break;
        case 'viewLinkedIn':
            userQuery = "You selected: Viewing LinkedIn...";
            redirectToLinkedIn();
            break;
        default:
            userQuery = "I'm not sure about that selection.";
            break;
    }

    // Display the selection in the chat messages
    addMessageToChat('user-message', userQuery);
}

function sendEmailToLisandro() {
    window.open("mailto:lisandroalvo2@gmail.com?subject=Contact from Website&body=Hello Lisandro,", '_blank');
}

function redirectToProjects() {
    window.location.href = "../web-2023/sections/projects.html"; // This will navigate to the projects section on the same page.
}

function redirectToLinkedIn() {
    window.open("https://www.linkedin.com/in/lisandroalvo/", '_blank'); // Replace with your LinkedIn profile URL
}


function addMessageToChat(sender, message) {
    var chatMessagesDiv = document.querySelector('.chatbot-messages');
    var messageDiv = document.createElement('div');
    messageDiv.className = sender; // This can be 'user-message' or 'chatbot-response'
    messageDiv.innerText = message;
    chatMessagesDiv.appendChild(messageDiv);
}

function handleUserInput(event) {
    if (event.key === 'Enter') {
        var message = event.target.value;
        if (message.trim() !== '') {
            addMessageToChat('user-message', message);
            var response = getChatbotResponse(message);
            addMessageToChat('chatbot-response', response);
            event.target.value = ''; // Clear the input field
        }
    }
}

function getChatbotResponse(userText) {
    // This function can be as simple or complex as you want. For now, it just echoes back the user's message.
    return "You said: " + userText;
}

document.querySelector('.chatbot-body').addEventListener('click', function(event) {
    event.stopPropagation();
});

document.addEventListener('click', function(event) {
    if (!document.getElementById('chatbot').contains(event.target)) {
        toggleChatbot();
    }
});

function getChatbotResponse(userText) {
    // Convert userText to lowercase for easier matching
    userText = userText.toLowerCase();


    if (userText.includes("schedule a meeting")) {
        return "Sure! Please pick a slot from my availability here: [Calendly Link](https://calendly.com/lisandroalvo2)"; // Replace 'yourname' with your Calendly username
    }
    // Here are some basic patterns and responses
    var responses = {
        "hello": "Hi there! How can I help you?",
        "hi": "Hi there! How can I help you?",
        "how are you": "I'm just a chatbot, so I don't have feelings, but thanks for asking! How can I assist you?",
        "download resume": "Sure! Click [here](#) to download Lisandro's resume.",
        "schedule a meeting": "Alright! Please click [here](#) to schedule a meeting.",
        "see projects": "You can check out Lisandro's projects [here](#).",
        "send an email": "Sure! You can email Lisandro at lisandro@email.com.",
        "view linkedin": "You can check out Lisandro's LinkedIn profile [here](#).",
        "bye": "Goodbye! If you have any other questions, feel free to ask.",
        "thank you": "You're welcome! Let me know if there's anything else."
    };

    // Search for a matching user input
    for (var pattern in responses) {
        if (userText.includes(pattern)) {
            return responses[pattern];
        }
    }

    // Default response if no match is found
    return "I'm sorry, I didn't understand that. Can you please rephrase or ask something else?";
}