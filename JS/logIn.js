window.onload = function () {
    const username = localStorage.getItem('username');

    if (username) {
        document.querySelector('.login-btn').style.display = 'none';
        document.querySelector('.user-icon').style.display = 'inline-block';
        document.querySelector('.user-name').textContent = username;
    } else {
        document.querySelector('.login-btn').style.display = 'inline-block';
        document.querySelector('.user-icon').style.display = 'none';
    }
}

const toggleLink = document.getElementById('toggle-link');
const formTitle = document.getElementById('form-title');
const authForm = document.getElementById('auth-form');

toggleLink.addEventListener('click', () => {
    const isLogin = formTitle.textContent === 'Login';

    formTitle.textContent = isLogin ? 'Sign Up' : 'Login';
    authForm.innerHTML = isLogin
        ? `<div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name" required>
           </div>
           <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" required>
           </div>
           <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" required>
           </div>
           <button type="submit" class="btn">Sign Up</button>`
        : `<div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" required>
           </div>
           <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" required>
           </div>
           <button type="submit" class="btn">Login</button>`;

    toggleLink.textContent = isLogin
        ? 'Already have an account? Login'
        : "Don't have an account? Sign Up";
});

function submitForm(event) {
    event.preventDefault(); 
    const name = document.getElementById('name') ? document.getElementById('name').value : '';
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (formTitle.textContent === 'Sign Up') {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('username', name); 
        alert('Registration successful. You can now login.');
        window.location.reload(); 
    } else if (formTitle.textContent === 'Login') {
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (email === storedEmail && password === storedPassword) {
            localStorage.setItem('username', email); 
            window.location.href = "index.html"; 
        } else {
            alert('Invalid User name or Password . Please try again.');
        }
    }
}

function closeAndNavigate() {
    window.close(); 
    window.location.href = "index.html";
}