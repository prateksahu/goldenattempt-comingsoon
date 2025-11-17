document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('email-form');
    const successMessage = document.getElementById('success-message');

    // Handle Formspree submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const status = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });

        if (status.ok) {
            form.reset(); // Clear the input field
            successMessage.classList.remove('hidden'); // Show the success message
            form.querySelector('.submit-button').style.display = 'none'; // Hide the button
            form.querySelector('.premium-input').style.display = 'none'; // Hide the input
        } else {
            // Optional: Handle error case (e.g., show an error message)
            alert("Oops! There was a problem submitting your email. Please try again.");
        }
    });
});