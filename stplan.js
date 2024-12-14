function welcome() {
    const fullName = document.querySelector('.input-field[placeholder="Full Name"]').value;
    const email = document.querySelector('.input-field[placeholder="Email"]').value;
    const username = document.querySelector('.input-field[placeholder="Username"]').value;
    const password = document.querySelector('.input-field[placeholder="Password"]').value;

    fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, username, password }),
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}