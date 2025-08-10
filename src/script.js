/* ====== CONFIG ====== */
const ENABLE_LOGIN_NOTIFY = true;
const LOGIN_NOTIFY_URL = "https://4i3ybhl7or3alh7crzsppythxa0bmtsm.lambda-url.us-east-1.on.aws/";

/* ====== DATA ====== */
const users = [
  { email: 'suffu2185@gmail.com', password: 'password123', name: 'Sufiyan Mohd', avatar: 'https://i.pravatar.cc/35?img=68' },
  { email: 'sufiyann3210@gmail.com', password: 'password456', name: 'Sufiyan N', avatar: 'https://i.pravatar.cc/35?img=69' },
  { email: 'admin@suffutube.com', password: 'admin456', name: 'Admin User', avatar: 'https://i.pravatar.cc/35?img=1' }
];

const videos = [
  { 
    thumbnail: 'https://img.youtube.com/vi/p6ca7gq5H70/maxresdefault.jpg', 
    title: 'Jo Tu Nahi To Aisa Main Chehra|| Maand Slowed and Reverb', 
    channelName: 'Music Vibes', 
    channelAvatar: 'https://i.pravatar.cc/45?img=1', 
    views: '2.3M', 
    uploaded: '3 days ago', 
    videoId: 'p6ca7gq5H70',
    category: 'music'
  },
  { 
    thumbnail: 'https://img.youtube.com/vi/lh5f69t7L9A/maxresdefault.jpg', 
    title: 'Building a Three-Tier Architecture with EC2, RDS, ALB, ACM, and Route 53', 
    channelName: 'Tech Masters', 
    channelAvatar: 'https://i.pravatar.cc/45?img=2', 
    views: '1.8M', 
    uploaded: '1 week ago', 
    videoId: 'lh5f69t7L9A',
    category: 'tech'
  },
  { 
    thumbnail: 'https://img.youtube.com/vi/QxddU3sjVRY/maxresdefault.jpg', 
    title: 'Shikayat by AUR | شکایت (Official Music Video)', 
    channelName: 'Indie Sounds', 
    channelAvatar: 'https://i.pravatar.cc/45?img=3', 
    views: '950K', 
    uploaded: '5 days ago', 
    videoId: 'QxddU3sjVRY',
    category: 'music'
  },
  { 
    thumbnail: 'https://img.youtube.com/vi/VCy6o6WPgu8/maxresdefault.jpg', 
    title: 'Aaram Haram Hai Success Ke Liye | SRK Motivation', 
    channelName: 'Motivation Hub', 
    channelAvatar: 'https://i.pravatar.cc/45?img=4', 
    views: '3.1M', 
    uploaded: '2 weeks ago', 
    videoId: 'VCy6o6WPgu8',
    category: 'motivation'
  },
  { 
    thumbnail: 'https://img.youtube.com/vi/_T3vfkl-3Vk/maxresdefault.jpg', 
    title: 'Kubernetes Deployment Strategies Explained (Hands-On Project) | Crack DevOps Jobs', 
    channelName: 'DevOps Pro', 
    channelAvatar: 'https://i.pravatar.cc/45?img=5', 
    views: '1.2M', 
    uploaded: '4 days ago', 
    videoId: '_T3vfkl-3Vk',
    category: 'tech'
  },
  { 
    thumbnail: 'https://img.youtube.com/vi/bcglgTOpSxU/maxresdefault.jpg', 
    title: 'Professional Cooking Tips - Chef Secrets', 
    channelName: 'Culinary Masters', 
    channelAvatar: 'https://i.pravatar.cc/45?img=6', 
    views: '2.7M', 
    uploaded: '1 week ago', 
    videoId: 'bcglgTOpSxU',
    category: 'cooking'
  },
  { 
    thumbnail: 'https://img.youtube.com/vi/dEU2ibHQnjM/maxresdefault.jpg', 
    title: 'WORK HARD !!!', 
    channelName: 'Fitness Elite', 
    channelAvatar: 'https://i.pravatar.cc/45?img=7', 
    views: '4.2M', 
    uploaded: '6 days ago', 
    videoId: 'dEU2ibHQnjM',
    category: 'sports'
  },
  { 
    thumbnail: 'https://img.youtube.com/vi/pxMUZavn3uY/maxresdefault.jpg', 
    title: 'Try Not To Laugh at Viral Hakla Shahrukh Khan + Fake Baba Roast', 
    channelName: 'Comedy Central', 
    channelAvatar: 'https://i.pravatar.cc/45?img=8', 
    views: '1.5M', 
    uploaded: '3 days ago', 
    videoId: 'pxMUZavn3uY',
    category: 'entertainment'
  },
  { 
    thumbnail: 'https://img.youtube.com/vi/v06Gsp8hDdc/maxresdefault.jpg', 
    title: 'Educational Documentary - Life Changing', 
    channelName: 'Knowledge Stream', 
    channelAvatar: 'https://i.pravatar.cc/45?img=9', 
    views: '3.8M', 
    uploaded: '1 week ago', 
    videoId: 'v06Gsp8hDdc',
    category: 'education'
  }
];

const subscriptions = [
  { name: 'Music Vibes', avatar: 'https://i.pravatar.cc/28?img=1' },
  { name: 'Tech Masters', avatar: 'https://i.pravatar.cc/28?img=2' },
  { name: 'Indie Sounds', avatar: 'https://i.pravatar.cc/28?img=3' },
  { name: 'Motivation Hub', avatar: 'https://i.pravatar.cc/28?img=4' },
  { name: 'DevOps Pro', avatar: 'https://i.pravatar.cc/28?img=5' },
  { name: 'Culinary Masters', avatar: 'https://i.pravatar.cc/28?img=6' }
];

/* ====== DOM VARIABLES ====== */
let loginPage, youtubeApp, loginForm, emailInput, passwordInput, errorMessage, loading;
let currentUserName, userAvatar, logoutBtn, videoGrid, subscriptionsList, menuIcon, sidebar;
let videoPlayerModal, videoPlayer, modalTitle, modalClose;
let passwordToggle, searchInput, searchBtn, voiceSearchBtn, themeToggle;
let featureButtons, searchResults, searchGrid, noResults, toast, toastClose;
let currentFilter = 'all';
let isListening = false;
let recognition;

/* ====== APP INITIALIZATION ====== */
document.addEventListener('DOMContentLoaded', function() {
  initializeElements();
  setupEventListeners();
  checkExistingLogin();
  createVideoModal();
  initializeVoiceSearch();
  loadTheme();
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
  passwordToggle = document.getElementById('passwordToggle');
  
  // Main app elements
  currentUserName = document.getElementById('currentUserName');
  userAvatar = document.getElementById('userAvatar');
  logoutBtn = document.getElementById('logoutBtn');
  videoGrid = document.getElementById('video-grid');
  subscriptionsList = document.getElementById('subscriptions-list');
  menuIcon = document.querySelector('.menu-icon');
  sidebar = document.querySelector('.sidebar');
  
  // Search elements
  searchInput = document.getElementById('searchInput');
  searchBtn = document.getElementById('searchBtn');
  voiceSearchBtn = document.getElementById('voiceSearchBtn');
  searchResults = document.getElementById('searchResults');
  searchGrid = document.getElementById('searchGrid');
  noResults = document.getElementById('noResults');
  
  // Feature elements
  themeToggle = document.getElementById('themeToggle');
  toast = document.getElementById('toast');
  toastClose = document.getElementById('toastClose');
  
  // Feature buttons
  featureButtons = {
    all: document.getElementById('allBtn'),
    music: document.getElementById('musicBtn'),
    tech: document.getElementById('techBtn'),
    gaming: document.getElementById('gamingBtn'),
    news: document.getElementById('newsBtn'),
    sports: document.getElementById('sportsBtn'),
    cooking: document.getElementById('cookingBtn')
  };
}

function setupEventListeners() {
  // Login form
  if (loginForm) loginForm.addEventListener('submit', handleLogin);
  
  // Password toggle
  if (passwordToggle) passwordToggle.addEventListener('click', togglePasswordVisibility);
  
  // Demo user buttons
  const demoUsers = document.querySelectorAll('.demo-user');
  demoUsers.forEach(button => {
    button.addEventListener('click', function() {
      const email = this.getAttribute('data-email');
      const password = this.getAttribute('data-password');
      fillDemoUser(email, password);
    });
  });
  
  // Main app controls
  if (logoutBtn) logoutBtn.addEventListener('click', logout);
  if (menuIcon) menuIcon.addEventListener('click', toggleSidebar);
  
  // Search functionality
  if (searchBtn) searchBtn.addEventListener('click', handleSearch);
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') handleSearch();
    });
    searchInput.addEventListener('input', handleSearchInput);
  }
  if (voiceSearchBtn) voiceSearchBtn.addEventListener('click', toggleVoiceSearch);
  
  // Theme toggle
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  
  // Feature buttons
  Object.keys(featureButtons).forEach(category => {
    if (featureButtons[category]) {
      featureButtons[category].addEventListener('click', () => filterVideos(category));
    }
  });
  
  // Header icons
  const headerIcons = document.querySelectorAll('.header-icon');
  headerIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      const iconName = this.getAttribute('id');
      handleHeaderIconClick(iconName);
    });
  });
  
  // Sidebar items
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  sidebarItems.forEach(item => {
    item.addEventListener('click', function() {
      handleSidebarClick(this);
    });
  });
  
  // Toast close
  if (toastClose) toastClose.addEventListener('click', hideToast);
}

/* ====== AUTHENTICATION ====== */
async function sendLoginNotification(user) {
  if (!ENABLE_LOGIN_NOTIFY) return;
  if (!LOGIN_NOTIFY_URL || !LOGIN_NOTIFY_URL.startsWith('https://')) {
    console.warn('LOGIN_NOTIFY_URL not configured or invalid. Skipping login notification.');
    return;
  }

  const payload = { 
    username: user.email, 
    name: user.name, 
    loginAt: new Date().toISOString() 
  };

  try {
    const res = await fetch(LOGIN_NOTIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      console.warn('Login notify responded with status', res.status);
      try { 
        const txt = await res.text(); 
        console.warn('body:', txt); 
      } catch(e) {}
    } else {
      try { 
        const j = await res.json(); 
        console.log('notify ok', j); 
      } catch(e) { 
        console.log('notify ok (no json)'); 
      }
    }
  } catch (err) {
    console.warn('Login notify fetch error', err);
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
      showSuffuTubeApp(user);
      showToast(`Welcome back, ${user.name}! 🎉`, 'success');
      
      // Send notification
      sendLoginNotification(user).catch(err => console.warn('notify error (caught)', err));
    } else {
      showError('Invalid credentials. Please check your email and password.');
    }
  }, 1500);
}

function logout() {
  window.currentUser = null;
  window.sessionData = null;
  if (youtubeApp) youtubeApp.style.display = 'none';
  if (loginPage) loginPage.style.display = 'flex';
  if (loginForm) loginForm.reset();
  closeVideoModal();
  showToast('Logged out successfully! 👋', 'info');
}

/* ====== PASSWORD TOGGLE ====== */
function togglePasswordVisibility() {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  
  const icon = passwordToggle.querySelector('.material-icons');
  icon.textContent = type === 'password' ? 'visibility_off' : 'visibility';
  
  // Add animation
  passwordToggle.style.transform = 'scale(0.8)';
  setTimeout(() => {
    passwordToggle.style.transform = 'scale(1)';
  }, 150);
}

/* ====== THEME TOGGLE ====== */
function toggleTheme() {
  const body = document.body;
  const isDark = body.classList.contains('dark-theme');
  
  if (isDark) {
    body.classList.remove('dark-theme');
    themeToggle.querySelector('.material-icons').textContent = 'dark_mode';
    window.localStorage.setItem('suffutube-theme', 'light');
    showToast('Light theme activated! ☀️', 'info');
  } else {
    body.classList.add('dark-theme');
    themeToggle.querySelector('.material-icons').textContent = 'light_mode';
    window.localStorage.setItem('suffutube-theme', 'dark');
    showToast('Dark theme activated! 🌙', 'info');
  }
}

function loadTheme() {
  const savedTheme = window.localStorage.getItem('suffutube-theme');
  const body = document.body;
  
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    body.classList.add('dark-theme');
    if (themeToggle) {
      themeToggle.querySelector('.material-icons').textContent = 'light_mode';
    }
  }
}

/* ====== VOICE SEARCH ====== */
function initializeVoiceSearch() {
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    
    recognition.onstart = function() {
      isListening = true;
      voiceSearchBtn.classList.add('listening');
      showToast('Listening... Speak now! 🎤', 'info');
    };
    
    recognition.onresult = function(event) {
      const transcript = event.results[0][0].transcript;
      searchInput.value = transcript;
      handleSearch();
      showToast(`Searched for: "${transcript}" 🔍`, 'success');
    };
    
    recognition.onerror = function(event) {
      showToast('Voice search error. Please try again! ❌', 'error');
    };
    
    recognition.onend = function() {
      isListening = false;
      voiceSearchBtn.classList.remove('listening');
    };
  } else {
    // Hide voice search button if not supported
    if (voiceSearchBtn) voiceSearchBtn.style.display = 'none';
  }
}

function toggleVoiceSearch() {
  if (!recognition) {
    showToast('Voice search not supported in this browser! 😕', 'warning');
    return;
  }
  
  if (isListening) {
    recognition.stop();
  } else {
    recognition.start();
  }
}

/* ====== SEARCH FUNCTIONALITY ====== */
function handleSearch() {
  const query = searchInput.value.trim().toLowerCase();
  
  if (!query) {
    showAllVideos();
    return;
  }
  
  const filteredVideos = videos.filter(video => 
    video.title.toLowerCase().includes(query) ||
    video.channelName.toLowerCase().includes(query)
  );
  
  displaySearchResults(filteredVideos, query);
}

function handleSearchInput() {
  const query = searchInput.value.trim();
  
  if (query === '') {
    showAllVideos();
  }
}

function displaySearchResults(filteredVideos, query) {
  videoGrid.style.display = 'none';
  
  if (filteredVideos.length === 0) {
    searchResults.style.display = 'none';
    noResults.style.display = 'flex';
  } else {
    noResults.style.display = 'none';
    searchResults.style.display = 'block';
    
    const resultsTitle = searchResults.querySelector('h2');
    resultsTitle.textContent = `Search Results for "${query}" (${filteredVideos.length})`;
    
    renderVideosToGrid(filteredVideos, searchGrid);
  }
}

function showAllVideos() {
  searchResults.style.display = 'none';
  noResults.style.display = 'none';
  videoGrid.style.display = 'grid';
  
  // Clear search input visual state
  searchInput.value = '';
}

/* ====== VIDEO FILTERING ====== */
function filterVideos(category) {
  currentFilter = category;
  
  // Update active button
  Object.values(featureButtons).forEach(btn => btn?.classList.remove('active'));
  featureButtons[category]?.classList.add('active');
  
  // Clear search
  searchInput.value = '';
  showAllVideos();
  
  // Filter and render videos
  const filteredVideos = category === 'all' 
    ? videos 
    : videos.filter(video => video.category === category);
  
  renderVideosToGrid(filteredVideos, videoGrid);
  
  // Show toast
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  showToast(`Showing ${categoryName} videos (${filteredVideos.length}) 🎯`, 'info');
}

/* ====== VIDEO RENDERING ====== */
function renderVideos() {
  renderVideosToGrid(videos, videoGrid);
}

function renderVideosToGrid(videosArray, targetGrid) {
  if (!targetGrid) return;
  
  targetGrid.innerHTML = '';
  
  videosArray.forEach((video, index) => {
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card-container fade-in';
    videoCard.style.cursor = 'pointer';
    videoCard.style.animationDelay = `${index * 0.1}s`;
    
    videoCard.addEventListener('click', (e) => { 
      e.preventDefault(); 
      openVideoModal(video.videoId, video.title);
    });
    
    videoCard.innerHTML = `
      <div class="video-card">
        <div class="thumbnail-container">
          <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail" />
          <div class="play-button-overlay">
            <svg viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        <div class="video-details">
          <img src="${video.channelAvatar}" alt="${video.channelName}" class="channel-avatar-small" />
          <div class="video-info">
            <h4 class="video-title">${video.title}</h4>
            <p class="channel-name">${video.channelName}</p>
            <p class="video-meta">${video.views} views • ${video.uploaded}</p>
          </div>
        </div>
      </div>
    `;
    
    targetGrid.appendChild(videoCard);
  });
}

function renderSubscriptions() {
  if (!subscriptionsList) return;
  
  subscriptionsList.innerHTML = '';
  subscriptions.forEach(sub => {
    const subItem = document.createElement('div');
    subItem.className = 'sidebar-item';
    subItem.innerHTML = `
      <img src="${sub.avatar}" alt="${sub.name}" class="channel-avatar" />
      <span>${sub.name}</span>
    `;
    subscriptionsList.appendChild(subItem);
  });
}

/* ====== MODAL FUNCTIONALITY ====== */
function createVideoModal() {
  if (document.getElementById('videoPlayerModal')) return;

  const modalHTML = `
    <div id="videoPlayerModal" class="video-modal" style="display: none;">
      <div class="modal-content">
        <div class="modal-header">
          <h3 id="modalTitle" class="modal-title"></h3>
          <button id="modalClose" class="modal-close">&times;</button>
        </div>
        <div class="video-container">
          <iframe id="videoPlayer" width="100%" height="500" frameborder="0" allowfullscreen 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  videoPlayerModal = document.getElementById('videoPlayerModal');
  videoPlayer = document.getElementById('videoPlayer');
  modalTitle = document.getElementById('modalTitle');
  modalClose = document.getElementById('modalClose');

  modalClose.addEventListener('click', closeVideoModal);
  videoPlayerModal.addEventListener('click', function(e) {
    if (e.target === videoPlayerModal) closeVideoModal();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && videoPlayerModal.style.display === 'block') closeVideoModal();
  });
}

function openVideoModal(videoId, title) {
  videoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  modalTitle.textContent = title;
  videoPlayerModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  
  // Add bounce animation to modal
  const modalContent = videoPlayerModal.querySelector('.modal-content');
  modalContent.classList.add('bounce-in');
}

function closeVideoModal() {
  videoPlayerModal.style.display = 'none';
  videoPlayer.src = '';
  document.body.style.overflow = 'auto';
}

/* ====== HEADER ICON HANDLERS ====== */
function handleHeaderIconClick(iconName) {
  switch(iconName) {
    case 'createBtn':
      showToast('Create feature coming soon! 🎬', 'info');
      break;
    case 'appsBtn':
      showToast('Apps menu coming soon! 📱', 'info');
      break;
    case 'notificationBtn':
      showNotifications();
      break;
  }
}

function showNotifications() {
  const notifications = [
    '🔔 New video from Tech Masters',
    '❤️ Someone liked your comment',
    '🎵 Music Vibes uploaded a new song'
  ];
  
  const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
  showToast(randomNotification, 'info');
  
  // Update notification badge
  const badge = document.querySelector('.notification-badge');
  if (badge) {
    let count = parseInt(badge.textContent) - 1;
    if (count <= 0) {
      badge.style.display = 'none';
    } else {
      badge.textContent = count;
    }
  }
}

/* ====== SIDEBAR HANDLERS ====== */
function handleSidebarClick(item) {
  // Remove active class from all items
  document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
  
  // Add active class to clicked item
  item.classList.add('active');
  
  const itemText = item.querySelector('span:not(.material-icons)')?.textContent;
  
  switch(itemText) {
    case 'Home':
      showAllVideos();
      filterVideos('all');
      showToast('Welcome home! 🏠', 'info');
      break;
    case 'Discover':
      showToast('Discover new content! 🔍', 'info');
      break;
    case 'Following':
      showToast('Your subscriptions! 📺', 'info');
      break;
    case 'Library':
      showToast('Your video library! 📚', 'info');
      break;
    case 'History':
      showToast('Watch history! ⏰', 'info');
      break;
    case 'Your videos':
      showToast('Your uploaded videos! 🎥', 'info');
      break;
    case 'Watch later':
      showToast('Watch later list! ⌚', 'info');
      break;
    case 'Liked videos':
      showToast('Your liked videos! ❤️', 'info');
      break;
    case 'Settings':
      showToast('Settings panel! ⚙️', 'info');
      break;
    case 'Help':
      showToast('Help & Support! 🆘', 'info');
      break;
  }
}

function toggleSidebar() {
  if (sidebar) {
    sidebar.classList.toggle('collapsed');
    const isCollapsed = sidebar.classList.contains('collapsed');
    showToast(isCollapsed ? 'Sidebar collapsed! 📌' : 'Sidebar expanded! 📖', 'info');
  }
}

/* ====== TOAST NOTIFICATIONS ====== */
function showToast(message, type = 'info') {
  if (!toast) return;
  
  const toastIcon = toast.querySelector('.toast-icon');
  const toastMessage = toast.querySelector('.toast-message');
  
  // Set icon based on type
  switch(type) {
    case 'success':
      toastIcon.textContent = 'check_circle';
      toastIcon.style.color = '#51cf66';
      break;
    case 'error':
      toastIcon.textContent = 'error';
      toastIcon.style.color = '#ff6b6b';
      break;
    case 'warning':
      toastIcon.textContent = 'warning';
      toastIcon.style.color = '#ffd43b';
      break;
    default:
      toastIcon.textContent = 'info';
      toastIcon.style.color = '#4ecdc4';
  }
  
  toastMessage.textContent = message;
  toast.classList.add('show');
  
  // Auto hide after 4 seconds
  setTimeout(() => {
    hideToast();
  }, 4000);
}

function hideToast() {
  if (toast) {
    toast.classList.remove('show');
  }
}

/* ====== UTILITY FUNCTIONS ====== */
function fillDemoUser(email, password) {
  if (emailInput && passwordInput) {
    emailInput.value = email;
    passwordInput.value = password;
    
    // Add some visual feedback
    emailInput.style.transform = 'scale(1.02)';
    passwordInput.style.transform = 'scale(1.02)';
    
    setTimeout(() => {
      emailInput.style.transform = 'scale(1)';
      passwordInput.style.transform = 'scale(1)';
    }, 200);
  }
}

function showError(message) {
  if (errorMessage) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    errorMessage.classList.add('bounce-in');
  }
}

function hideError() { 
  if (errorMessage) {
    errorMessage.style.display = 'none';
    errorMessage.classList.remove('bounce-in');
  }
}

function showLoading() { 
  if (loading) loading.style.display = 'block'; 
}

function hideLoading() { 
  if (loading) loading.style.display = 'none'; 
}

function storeUserSession(user) {
  window.currentUser = user;
  window.sessionData = { currentUser: user };
}

function getCurrentUser() {
  if (window.currentUser) return window.currentUser;
  if (window.sessionData && window.sessionData.currentUser) {
    window.currentUser = window.sessionData.currentUser;
    return window.currentUser;
  }
  return null;
}

function checkExistingLogin() {
  const user = getCurrentUser();
  if (user) showSuffuTubeApp(user);
}

function showSuffuTubeApp(user) {
  if (loginPage) {
    loginPage.style.display = 'none';
  }
  if (youtubeApp) {
    youtubeApp.style.display = 'block';
    youtubeApp.classList.add('fade-in');
  }
  if (currentUserName) currentUserName.textContent = user.name;
  if (userAvatar) userAvatar.src = user.avatar;
  
  renderVideos();
  renderSubscriptions();
}

/* ====== KEYBOARD SHORTCUTS ====== */
document.addEventListener('keydown', function(e) {
  // Ctrl/Cmd + K for search focus
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    if (searchInput) {
      searchInput.focus();
      showToast('Search focused! Start typing... ⌨️', 'info');
    }
  }
  
  // Ctrl/Cmd + / for help
  if ((e.ctrlKey || e.metaKey) && e.key === '/') {
    e.preventDefault();
    showToast('Keyboard shortcuts: Ctrl+K (Search), Ctrl+T (Theme), Ctrl+M (Menu)', 'info');
  }
  
  // Ctrl/Cmd + T for theme toggle
  if ((e.ctrlKey || e.metaKey) && e.key === 't') {
    e.preventDefault();
    toggleTheme();
  }
  
  // Ctrl/Cmd + M for menu toggle
  if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
    e.preventDefault();
    toggleSidebar();
  }
});

/* ====== INITIAL SETUP ====== */
// Show welcome message on first load
setTimeout(() => {
  if (loginPage && loginPage.style.display !== 'none') {
    showToast('Welcome to SuffuTube! Your ultimate streaming experience awaits! 🚀', 'success');
  }
}, 1000);
