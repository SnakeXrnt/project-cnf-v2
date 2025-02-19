document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector('.runningtext');
    const text = textElement.textContent;
    const typingSpeed = 100; // Speed of typing (in milliseconds)
    const erasingSpeed = 50; // Speed of erasing (in milliseconds)
    const pauseDuration = 1000; // Pause before erasing (in milliseconds)

    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentText = textElement.textContent;

        if (!isDeleting) {
            // Typing logic
            textElement.textContent = text.slice(0, charIndex + 1);
            charIndex++;

            if (charIndex === text.length) {
                // Pause at the end of typing
                isDeleting = true;
                setTimeout(typeWriter, pauseDuration);
            } else {
                // Continue typing
                setTimeout(typeWriter, typingSpeed);
            }
        } else {
            // Erasing logic
            textElement.textContent = text.slice(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                // Reset and start typing again
                isDeleting = false;
                setTimeout(typeWriter, typingSpeed);
            } else {
                // Continue erasing
                setTimeout(typeWriter, erasingSpeed);
            }
        }
    }

    // Start the typing effect
    typeWriter();

    // Create the audio element
    const audio = new Audio('/blue.mp3');  // Make sure the file path is correct

    // Button click to hide the first box and show the second box
    document.querySelector('.buttonfirst').addEventListener('click', function() {
        // Hide the first box
        document.querySelector('.firstbox').style.display = 'none';

        // Show the second box
        document.querySelector('.secondbox').style.display = 'flex';
        audio.play();

        // Add delay to each paragraph to make them appear one by one for textbox1
        const paragraphs1 = document.querySelectorAll('.textbox1 .fade-text');
        let delay = 0;
        let displayedCount = 0;  // Variable to count the number of displayed paragraphs

        paragraphs1.forEach((p, index) => {
            // Apply a delay for each paragraph to make them appear one by one
            p.style.animationDelay = `${delay}ms`;
            delay += 6000;  // Adjust the delay between each paragraph's appearance
            displayedCount++;
        });

        // Once all paragraphs in the first textbox are displayed, hide it and start the second textbox
        setTimeout(() => {
            // Hide textbox1 after the last paragraph is printed
            document.querySelector('.textbox1').style.display = 'none';
            
            // Now animate the second textbox paragraphs
            const paragraphs2 = document.querySelectorAll('.textbox2 .fade-text');
            delay = 0;
            displayedCount = 0;

            paragraphs2.forEach((p, index) => {
                // Apply a delay for each paragraph in textbox2
                p.style.animationDelay = `${delay}ms`;
                delay += 6000;  // Adjust the delay between each paragraph's appearance
            });

            // Display textbox2 after the last animation delay
            document.querySelector('.textbox2').style.display = 'block';

            // Once all paragraphs in textbox2 are displayed, hide it and start textbox3
            setTimeout(() => {
                document.querySelector('.textbox2').style.display = 'none';
                
                // Animate textbox3 paragraphs
                const paragraphs3 = document.querySelectorAll('.textbox3 .fade-text');
                delay = 0;
                displayedCount = 0;

                paragraphs3.forEach((p, index) => {
                    // Apply a delay for each paragraph in textbox3
                    p.style.animationDelay = `${delay}ms`;
                    delay += 4000;  // Adjust the delay between each paragraph's appearance
                });

                // Display textbox3 after the last animation delay
                document.querySelector('.textbox3').style.display = 'block';

                // Once all paragraphs in textbox3 are displayed, hide it and start textbox4
                setTimeout(() => {
                    document.querySelector('.textbox3').style.display = 'none';

                    // Animate textbox4 paragraphs
                    const paragraphs4 = document.querySelectorAll('.textbox4 .fade-text');
                    delay = 0;

                    paragraphs4.forEach((p, index) => {
                        // Apply a delay for each paragraph in textbox4
                        p.style.animationDelay = `${delay}ms`;
                        delay += 5000;  // Adjust the delay between each paragraph's appearance
                    });

                    // Display textbox4 after the last animation delay
                    document.querySelector('.textbox4').style.display = 'block';
                }, delay); // Timeout for textbox3
            }, delay); // Timeout for textbox2
        }, delay); // Timeout for textbox1
    });
});
