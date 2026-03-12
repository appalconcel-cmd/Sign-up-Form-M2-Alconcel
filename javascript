document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('idForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Using JavaScript Event Object [cite: 10]

        // Accessing elements and values [cite: 6]
        const fullName = document.getElementById('fullName').value;
        const nickname = document.getElementById('nickname').value;
        const dob = document.getElementById('dob').value;
        const address = document.getElementById('address').value;
        const email = document.getElementById('email').value;

        // Simple Form Validation [cite: 11]
        if (!fullName || !nickname || !dob || !address || !email) {
            alert("Please fill in all fields!");
            return;
        }

        // Updating ID Card Content [cite: 7]
        document.getElementById('resName').textContent = fullName;
        document.getElementById('resNick').textContent = nickname;
        document.getElementById('resDob').textContent = dob;
        document.getElementById('resAddr').textContent = address;
        document.getElementById('resEmail').textContent = email;

        // Popup with full ID info
        alert(`ID Generated!\nName: ${fullName}\nNickname: ${nickname}\nDOB: ${dob}\nAddress: ${address}\nEmail: ${email}`);
    });
});
