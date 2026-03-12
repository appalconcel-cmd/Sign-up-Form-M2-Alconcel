document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('idForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Use Event Object to prevent default submit

        // Access Elements
        const fullName = document.getElementById('fullName').value;
        const nickname = document.getElementById('nickname').value;
        const dob = document.getElementById('dob').value;
        const address = document.getElementById('address').value;
        const email = document.getElementById('email').value;

        // Basic Validation
        if (!fullName || !nickname || !dob || !address || !email) {
            alert("Please fill in all fields.");
            return;
        }

        // Update ID Preview (Modifying Element Content)
        document.getElementById('outName').textContent = fullName;
        document.getElementById('outNick').textContent = nickname;
        document.getElementById('outDob').textContent = dob;
        document.getElementById('outAddr').textContent = address;
        document.getElementById('outEmail').textContent = email;

        // Final ID Info Popup
        const fullInfo = `ID Info:\nName: ${fullName}\nNickname: ${nickname}\nDOB: ${dob}\nAddress: ${address}\nEmail: ${email}`;
        alert(fullInfo);
    });
});
