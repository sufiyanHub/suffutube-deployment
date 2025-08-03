// Dummy user data
const users = [
  {
    email: 'sufiyan@youtube.com',
    password: 'password123',
    name: 'Sufiyan Mohd',
    avatar: 'https://i.pravatar.cc/30?img=68'
  },
  {
    email: 'admin@youtube.com',
    password: 'admin456',
    name: 'Admin User',
    avatar: 'https://i.pravatar.cc/30?img=1'
  }
];

// Your video and subscription data... (I'll keep this part brief for clarity)
const videos = [
  // ...your video objects
];
const subscriptions = [
  // ...your subscription objects
];

// DOM Elements
let loginPage, youtubeApp, loginForm, emailInput, passwordInput, errorMessage, loading;
let currentUserName, userAvatar, logoutBtn, videoGrid, subscriptionsList, menuIcon, sidebar;

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeElements();
  setupEventListeners();
  initializeYouTubeApp();
  checkExistingLogin();
});

function initializeElements() {
  // Login elements
  loginPage = document.getElementById('loginPage');
  youtubeApp = document.getElementById('youtubeApp');
  loginForm = document.getElementById('loginForm');
  emailInput = document.getElementById('email');
  passwordInput = document.getElementById('password');
  errorMessage = document.getElementById('errorMessage');
  loading = document.getElementById('loading');

  // YouTube app elements
  currentUserName = document.getElementById('currentUserName');
  userAvatar = document.getElementById('userAvatar');
  logoutBtn = document.getElementById('logoutBtn');
  videoGrid = document.getElementById('video-grid');
  subscriptionsList = document.getElementById('subscriptions-list');
  menuIcon = document.querySelector('.menu-icon');
  sidebar = document.querySelector('.sidebar');
}

function setupEventListeners() {
  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  }
  const demoUsers = document.querySelectorAll('.demo-user');
  demoUsers.forEach(button => {
    button.addEventListener('click', function() {
      const email = this.getAttribute('data-email');
      const password = this.getAttribute('data-password');
      fillDemoUser(email, password);
    });
  });
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logout);
  }
  if (menuIcon) {
    menuIcon.addEventListener('click', toggleSidebar);
  }
}

function fillDemoUser(email, password) {
  if (emailInput && passwordInput) {
    emailInput.value = email;
    passwordInput.value = password;
  }
}

function handleLogin(e) {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  hideError();
  showLoading();

  setTimeout(() => {
    hideLoading();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      storeUserSession(user);
      showYouTubeApp(user);
    } else {
      showError('Invalid email or password. Please try again.');
    }
  }, 1500);
}

function showError(message) {
  if (errorMessage) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
  }
}

function hideError() {
  if (errorMessage) {
    errorMessage.style.display = 'none';
  }
}

function showLoading() {
  if (loading) {
    loading.style.display = 'block';
  }
}

function hideLoading() {
  if (loading) {
    loading.style.display = 'none';
  }
}

function storeUserSession(user) {
  window.currentUser = user;
  localStorage.setItem('currentUser', JSON.stringify(user));
}

function getCurrentUser() {
  if (window.currentUser) {
    return window.currentUser;
  }
  const storedUser = localStorage.getItem('currentUser');
  if (storedUser) {
    try {
      window.currentUser = JSON.parse(storedUser);
      return window.currentUser;
    } catch (e) {
      console.error('Error parsing stored user:', e);
      localStorage.removeItem('currentUser');
    }
  }
  return null;
}

function checkExistingLogin() {
  const user = getCurrentUser();
  if (user) {
    showYouTubeApp(user);
  }
}

function showYouTubeApp(user) {
  // Hide the login page and display the main app
  if (loginPage) {
    loginPage.style.display = 'none';
  }
  if (youtubeApp) {
    youtubeApp.style.display = 'block';
  }
  document.body.style.background = '#f9f9f9';

  // Update user info in the header
  if (currentUserName) {
    currentUserName.textContent = user.name;
  }
  if (userAvatar) {
    userAvatar.src = user.avatar;
  }

  // Render the videos and subscriptions
  renderVideos();
  renderSubscriptions();
}

function logout() {
  // Clear user data and show the login page
  window.currentUser = null;
  localStorage.removeItem('currentUser');
  if (youtubeApp) {
    youtubeApp.style.display = 'none';
  }
  if (loginPage) {
    loginPage.style.display = 'flex';
  }
  document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  if (loginForm) {
    loginForm.reset();
  }
}

function renderVideos() {
  if (videoGrid) {
    videoGrid.innerHTML = '';
    // ... (rest of your video rendering logic)
  }
}

function renderSubscriptions() {
  if (subscriptionsList) {
    subscriptionsList.innerHTML = '';
    // ... (rest of your subscription rendering logic)
  }
}

function initializeYouTubeApp() {
  // Any initial setup for the YouTube page can go here
}

function toggleSidebar() {
  if (sidebar) {
    sidebar.classList.toggle('collapsed');
  }
}
