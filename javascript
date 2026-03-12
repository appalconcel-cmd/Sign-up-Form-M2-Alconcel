document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('idForm');

    form.addEventListener('submit', (e) => {
        // Use the JavaScript Event Object to prevent page refresh
        e.preventDefault(); 

        // 1. Accessing Elements
        const fullName = document.getElementById('fullName').value;
        const nickname = document.getElementById('nickname').value;
        const dob = document.getElementById('dob').value;
        const address = document.getElementById('address').value;
        const email = document.getElementById('email').value;

        // 2. Form Validation Basics
        if (!fullName || !nickname || !dob || !address || !email) {
            alert("Please fill in all fields.");
            return;
        }

        // 3. Modifying Element Properties and Content
        // Map the inputs to the span elements in the ID card
        document.getElementById('outName').textContent = fullName;
        document.getElementById('outNick').textContent = nickname;
        document.getElementById('outDob').textContent = dob;
        document.getElementById('outAddr').textContent = address;
        document.getElementById('outEmail').textContent = email;

        // 4. Popup the full ID info
        const confirmationMessage = `ID Generated Successfully!\n\n` +
                                   `Name: ${fullName}\n` +
                                   `Nickname: ${nickname}\n` +
                                   `DOB: ${dob}\n` +
                                   `Address: ${address}\n` +
                                   `Email: ${email}`;
        
        alert(confirmationMessage);
    });
});
