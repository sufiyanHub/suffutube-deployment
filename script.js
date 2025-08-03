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

// CORRECTED video data with working thumbnails and video IDs
const videos = [
    {
        thumbnail: 'https://i.ytimg.com/vi/aQZJ1fK72tA/hqdefault.jpg',
        title: 'The Angrez 2 Comedy Scenes Back to Back',
        channelName: 'Gaming Nexus',
        channelAvatar: 'https://i.pravatar.cc/30?img=1',
        views: '5.2M',
        uploaded: '3 weeks ago',
        videoId: 'aQZJ1fK72tA'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/W_aV_uJ8t_U/hqdefault.jpg',
        title: 'PATNI NANAND AUR WEDDING ANNIVERSARY!',
        channelName: 'Sufiyan Mohd',
        channelAvatar: 'https://i.pravatar.cc/30?img=68',
        views: '10.8M',
        uploaded: '2 years ago',
        videoId: 'W_aV_uJ8t_U'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/Go8y0V6h_Hk/hqdefault.jpg',
        title: 'Action Blockbuster 2025 - "Urban Warfare" Final Trailer',
        channelName: 'Cinema Central',
        channelAvatar: 'https://i.pravatar.cc/30?img=3',
        views: '7.1M',
        uploaded: '1 month ago',
        videoId: 'Go8y0V6h_Hk'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/V_fGg4IeP2E/hqdefault.jpg',
        title: 'Hilarious Gaming Moments - Stream Highlights #42',
        channelName: 'Pro Gamer Livestream',
        channelAvatar: 'https://i.pravatar.cc/30?img=4',
        views: '2.9M',
        uploaded: '4 days ago',
        videoId: 'V_fGg4IeP2E'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/LpG4a5o4YmU/hqdefault.jpg',
        title: "MADINA'S MOST DELICIOUS Street Food Secrets Revealed!",
        channelName: 'ABDUL MALIK FAREED vlogs',
        channelAvatar: 'https://i.pravatar.cc/30?img=1',
        views: '376.8K',
        uploaded: '3 weeks ago',
        videoId: 'LpG4a5o4YmU'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/Tq-K8X5YV7U/hqdefault.jpg',
        title: 'Building a Three-Tier Architecture with EC2, RDS, ALB, ACM, and Route 53',
        channelName: 'Aviz Academy | AWS with Avinash Reddy',
        channelAvatar: 'https://i.pravatar.cc/30?img=2',
        views: '14.0K',
        uploaded: '3 weeks ago',
        videoId: 'Tq-K8X5YV7U'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/K5z0l2Dq1kU/hqdefault.jpg',
        title: '90 Percent DevOps Engineers do these 7 learning mistakes',
        channelName: 'Abhishek.Veeramalla',
        channelAvatar: 'https://i.pravatar.cc/30?img=3',
        views: '795',
        uploaded: '3 weeks ago',
        videoId: 'K5z0l2Dq1kU'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/9g9wW5p9h3M/hqdefault.jpg',
        title: 'Aaram Haram Hai Success Ke Liye | SRK Motivation | King Khan Motivation',
        channelName: 'Keep Marching',
        channelAvatar: 'https://i.pravatar.cc/30?img=4',
        views: '10.0M',
        uploaded: '3 years ago',
        videoId: '9g9wW5p9h3M'
    }
];

// Dummy subscription data
const subscriptions = [
  { name: 'Gaming Nexus', avatar: 'https://i.pravatar.cc/30?img=1' },
  { name: 'Sufiyan Mohd', avatar: 'https://i.pravatar.cc/30?img=68' },
  { name: 'Cinema Central', avatar: 'https://i.pravatar.cc/30?img=3' },
  { name: 'Pro Gamer Livestream', avatar: 'https://i.pravatar.cc/30?img=4' },
  { name: 'Acoustic Vibes', avatar: 'https://i.pravatar.cc/30?img=5' },
  { name: 'Indie Gamers Unite', avatar: 'https://i.pravatar.cc/30?img=7' },
  { name: 'K-Pop Zone', avatar: 'https://i.pravatar.cc/30?img=8' },
  { name: 'Esports Arena', avatar: 'https://i.pravatar.cc/30?img=10' }
];

// DOM Elements
let loginPage, youtubeApp, loginForm, emailInput, passwordInput, errorMessage, loading;
let currentUserName, userAvatar, logoutBtn, videoGrid, subscriptionsList, menuIcon, sidebar;

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeElements();
  setupEventListeners();
  checkExistingLogin();
});

function initializeElements() {
  loginPage = document.getElementById('loginPage');
  youtubeApp = document.getElementById('youtubeApp');
  loginForm = document.getElementById('loginForm');
  emailInput = document.getElementById('email');
  passwordInput = document.getElementById('password');
  errorMessage = document.getElementById('errorMessage');
  loading = document.getElementById('loading');
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
  if (loginPage) {
    loginPage.style.display = 'none';
  }
  if (youtubeApp) {
    youtubeApp.style.display = 'block';
  }
  document.body.style.background = '#f9f9f9';
  if (currentUserName) {
    currentUserName.textContent = user.name;
  }
  if (userAvatar) {
    userAvatar.src = user.avatar;
  }
  renderVideos();
  renderSubscriptions();
}

function logout() {
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

// CORRECTED renderVideos function with a valid YouTube URL
function renderVideos() {
  if (videoGrid) {
    videoGrid.innerHTML = ''; // Clear existing content
    videos.forEach(video => {
      // Create an anchor (<a>) element to make the video card clickable
      const videoLink = document.createElement('a');

      // *** THIS IS THE CORRECT URL FORMAT. IT USES THE OFFICIAL YOUTUBE DOMAIN. ***
      videoLink.href = `https://www.youtube.com/watch?v=${video.videoId}`;

      videoLink.target = '_blank'; // Opens the link in a new tab
      videoLink.style.textDecoration = 'none'; // Removes the default underline
      videoLink.style.color = 'inherit'; // Ensures text color is inherited

      // Populate the link with the video card's HTML content
      videoLink.innerHTML = `
        <div class="video-card">
          <img src="${video.thumbnail}" alt="Video Thumbnail" class="video-thumbnail" />
          <div class="video-details">
            <img src="${video.channelAvatar}" alt="Channel Avatar" class="channel-avatar-small" />
            <div class="video-info">
              <h4 class="video-title">${video.title}</h4>
              <p class="channel-name">${video.channelName}</p>
              <p class="video-meta">${video.views} views • ${video.uploaded}</p>
            </div>
          </div>
        </div>
      `;

      videoGrid.appendChild(videoLink);
    });
  }
}

function renderSubscriptions() {
  if (subscriptionsList) {
    subscriptionsList.innerHTML = '';
    subscriptions.forEach(sub => {
      const subItem = document.createElement('div');
      subItem.className = 'sidebar-item';
      subItem.innerHTML = `
        <img src="${sub.avatar}" alt="Channel Avatar" class="channel-avatar" />
        <span>${sub.name}</span>
      `;
      subscriptionsList.appendChild(subItem);
    });
  }
}

function toggleSidebar() {
  if (sidebar) {
    sidebar.classList.toggle('collapsed');
  }
}
