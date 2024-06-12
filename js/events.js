console.log("I am the console!");

function reservationAlert(){
    alert("You are about to take a place to this event, please confirm")
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dataForm').addEventListener('submit', handleFormSubmit);
});

function handleFormSubmit(e) {
    e.preventDefault();
    const form = document.getElementById('dataForm');
    const formData = new FormData(form);

    // Set checkbox values to "true" if checked, "false" if not checked
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        formData.set(checkbox.name, checkbox.checked ? 'true' : 'false');
    });

    // Convert FormData to plain object
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Log the form data to the console
    console.log('Form Data:', data);

    // Send the form data to the Google Apps Script
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwP88e4TaU2-8vvViWSmWOT5CIFGvKr_d4l5bRK--R8HxKKDppsbJXGq2JSbk6-S0_b/exec'; // Replace with your Google Apps Script URL
    fetch(scriptURL, { 
        method: 'POST', 
        body: JSON.stringify(data), 
        headers: { 'Content-Type': 'application/json' } 
    })
    .then(response => console.log('Form submitted successfully!', response))
    .catch(error => console.error('Error submitting form!', error));
}
