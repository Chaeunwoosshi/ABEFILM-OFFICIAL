// Predefined list of valid users
const users = [
  { username: "eunwoo", 
    password: "eunwoo"}, 
  { username: "geolliyaah", 
    password: "143saranghae"}
  
];



// Function to set a cookie with expiration time (1 day in this case)
function setCookie(name, value, days = 1) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Expiration date
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// Function to get a cookie by name
function getCookie(name) {
  const nameEq = name + "=";
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEq) == 0) return c.substring(nameEq.length, c.length);
  }
  return "";
}


// Function to check if the user is logged in
function checkLoginStatus() {
  const savedUsername = getCookie('username');
  const savedPassword = getCookie('password');

  if (savedUsername && savedPassword) {
    // Validate cookies with script data
    const validUser = users.find(u => u.username === savedUsername && u.password === savedPassword);

    if (validUser) {
      document.getElementById('login-overlay').style.display = 'none'; // Hide login overlay
    } else {
      // If credentials are invalid, clear cookies and show login overlay
      clearCookies();
      document.getElementById('login-overlay').style.display = 'block'; // Show login overlay
    }
  } else {
    // If no saved cookies, show login overlay
    document.getElementById('login-overlay').style.display = 'block'; // Show login overlay
  }
}

// Function to clear cookies
function clearCookies() {
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// Handle login submission
document.getElementById('login-submit').addEventListener('click', function () {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  const errorMessage = document.getElementById('login-error');

  // Validate user credentials
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Hide error message if login is successful
    errorMessage.style.display = 'none';
    document.getElementById('login-overlay').style.display = 'none'; // Hide overlay

    // Save credentials in cookies
    setCookie('username', username);
    setCookie('password', password);
  } else {
    // Show error message if login fails
    errorMessage.style.display = 'block';
  }
});

window.addEventListener('load', checkLoginStatus);

