document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Example: Log the form data to the console
        console.log(Name: ${name});
        console.log(Email: ${email});
        console.log(Message: ${message});

        // Show a confirmation message (optional)
        alert('Thank you for your message!');

        // Optionally, you can send the form data to your server or an email service here
    });
});