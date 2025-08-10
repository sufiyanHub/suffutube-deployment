// ===== CONFIG =====
const LAMBDA_URL = "https://4i3ybhl7or3alh7crzsppythxa0bmtsm.lambda-url.us-east-1.on.aws/"; // Replace with your Function URL

// ===== ELEMENTS =====
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");
const loading = document.getElementById("loading");
const loginPage = document.getElementById("loginPage");
const youtubeApp = document.getElementById("youtubeApp");
const currentUserName = document.getElementById("currentUserName");
const demoUsers = document.querySelectorAll(".demo-user");

// ===== DEMO USERS AUTO-FILL =====
demoUsers.forEach(user => {
  user.addEventListener("click", () => {
    emailInput.value = user.getAttribute("data-email");
    passwordInput.value = user.getAttribute("data-password");
  });
});

// ===== FORM SUBMIT =====
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  errorMessage.style.display = "none";
  loading.style.display = "block";

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Simple dummy login validation
  if (!email || !password) {
    loading.style.display = "none";
    errorMessage.style.display = "block";
    return;
  }

  try {
    // Call Lambda to send SNS notification
    const res = await fetch(LAMBDA_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: email })
    });

    if (!res.ok) throw new Error("Lambda request failed");

    // Simulate login success after Lambda notification
    setTimeout(() => {
      loading.style.display = "none";
      loginPage.style.display = "none";
      youtubeApp.style.display = "block";
      currentUserName.textContent = email.split("@")[0];
    }, 1000);

  } catch (err) {
    console.error("Login error:", err);
    loading.style.display = "none";
    errorMessage.style.display = "block";
  }
});




// Updated video data with your provided video IDs
const videos = [
    {
        thumbnail: 'https://img.youtube.com/vi/p6ca7gq5H70/maxresdefault.jpg',
        title: 'Jo Tu Nahi To Aisa Main Chehra|| Maand Slowed and Reverb',
        channelName: 'Music Vibes',
        channelAvatar: 'https://i.pravatar.cc/45?img=1',
        views: '2.3M',
        uploaded: '3 days ago',
        videoId: 'p6ca7gq5H70'
    },
    {
        thumbnail: 'https://img.youtube.com/vi/lh5f69t7L9A/maxresdefault.jpg',
        title: 'Building a Three-Tier Architecture with EC2, RDS, ALB, ACM, and Route 53',
        channelName: 'Tech Masters',
        channelAvatar: 'https://i.pravatar.cc/45?img=2',
        views: '1.8M',
        uploaded: '1 week ago',
        videoId: 'lh5f69t7L9A'
    },
    {
        thumbnail: 'https://img.youtube.com/vi/QxddU3sjVRY/maxresdefault.jpg',
        title: 'Shikayat by AUR | شکایت (Official Music Video)',
        channelName: 'Indie Sounds',
        channelAvatar: 'https://i.pravatar.cc/45?img=3',
        views: '950K',
        uploaded: '5 days ago',
        videoId: 'QxddU3sjVRY'
    },
    {
        thumbnail: 'https://img.youtube.com/vi/VCy6o6WPgu8/maxresdefault.jpg',
        title: 'Aaram Haram Hai Success Ke Liye | SRK Motivation',
        channelName: 'Motivation Hub',
        channelAvatar: 'https://i.pravatar.cc/45?img=4',
        views: '3.1M',
        uploaded: '2 weeks ago',
        videoId: 'VCy6o6WPgu8'
    },
    {
        thumbnail: 'https://img.youtube.com/vi/_T3vfkl-3Vk/maxresdefault.jpg',
        title: 'Kubernetes Deployment Strategies Explained (Hands-On Project) | Crack DevOps Jobs',
        channelName: 'DevOps Pro',
        channelAvatar: 'https://i.pravatar.cc/45?img=5',
        views: '1.2M',
        uploaded: '4 days ago',
        videoId: '_T3vfkl-3Vk'
    },
    {
        thumbnail: 'https://img.youtube.com/vi/bcglgTOpSxU/maxresdefault.jpg',
        title: 'Professional Cooking Tips - Chef Secrets',
        channelName: 'Culinary Masters',
        channelAvatar: 'https://i.pravatar.cc/45?img=6',
        views: '2.7M',
        uploaded: '1 week ago',
        videoId: 'bcglgTOpSxU'
    },
    {
        thumbnail: 'https://img.youtube.com/vi/dEU2ibHQnjM/maxresdefault.jpg',
        title: 'WORK HARD !!!',
        channelName: 'Fitness Elite',
        channelAvatar: 'https://i.pravatar.cc/45?img=7',
        views: '4.2M',
        uploaded: '6 days ago',
        videoId: 'dEU2ibHQnjM'
    },
    {
        thumbnail: 'https://img.youtube.com/vi/pxMUZavn3uY/maxresdefault.jpg',
        title: 'Try Not To Laugh at Viral Hakla Shahrukh Khan + Fake Baba Roast',
        channelName: 'Comedy Central',
        channelAvatar: 'https://i.pravatar.cc/45?img=8',
        views: '1.5M',
        uploaded: '3 days ago',
        videoId: 'pxMUZavn3uY'
    },
    {
        thumbnail: 'https://img.youtube.com/vi/v06Gsp8hDdc/maxresdefault.jpg',
        title: 'Educational Documentary - Life Changing',
        channelName: 'Knowledge Stream',
        channelAvatar: 'https://i.pravatar.cc/45?img=9',
        views: '3.8M',
        uploaded: '1 week ago',
        videoId: 'v06Gsp8hDdc'
    }
];

// Subscription data
const subscriptions = [
  { name: 'Music Vibes', avatar: 'https://i.pravatar.cc/28?img=1' },
  { name: 'Tech Masters', avatar: 'https://i.pravatar.cc/28?img=2' },
  { name: 'Indie Sounds', avatar: 'https://i.pravatar.cc/28?img=3' },
  { name: 'Motivation Hub', avatar: 'https://i.pravatar.cc/28?img=4' },
  { name: 'DevOps Pro', avatar: 'https://i.pravatar.cc/28?img=5' },
  { name: 'Culinary Masters', avatar: 'https://i.pravatar.cc/28?img=6' }
];

// ===== Login notification helper (SNS via Lambda) =====
async function sendLoginNotification(user) {
  if (!ENABLE_LOGIN_NOTIFY) return;

  if (!LOGIN_NOTIFY_URL || LOGIN_NOTIFY_URL.includes('<your-lambda')) {
    console.warn('LOGIN_NOTIFY_URL not configured. Skipping login notification.');
    return;
  }

  const payload = {
    to: user.email,
    name: user.name,
    loginAt: new Date().toISOString()
  };

  try {
    // non-blocking call — do not await UI changes
    fetch(LOGIN_NOTIFY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-client-secret': LOGIN_NOTIFY_SECRET
      },
      body: JSON.stringify(payload)
    }).then(async (res) => {
      if (!res.ok) {
        console.warn('Login notify responded with status', res.status);
      } else {
        // optionally log small response
        try { const body = await res.json(); console.log('notify ok', body); } catch(e){}
      }
    }).catch(err => {
      console.warn('Login notify fetch error', err);
    });
  } catch (err) {
    console.warn('sendLoginNotification error', err);
  }
}

// DOM Elements
let loginPage, youtubeApp, loginForm, emailInput, passwordInput, errorMessage, loading;
let currentUserName, userAvatar, logoutBtn, videoGrid, subscriptionsList, menuIcon, sidebar;
let videoPlayerModal, videoPlayer, modalTitle, modalClose;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  initializeElements();
  setupEventListeners();
  checkExistingLogin();
  createVideoModal();
  addStyles();
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
          <iframe id="videoPlayer" 
                  width="100%" 
                  height="500" 
                  frameborder="0" 
                  allowfullscreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
          </iframe>
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
    if (e.target === videoPlayerModal) {
      closeVideoModal();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && videoPlayerModal.style.display === 'block') {
      closeVideoModal();
    }
  });
}

function openVideoModal(videoId, title) {
  videoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  modalTitle.textContent = title;
  videoPlayerModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
  videoPlayerModal.style.display = 'none';
  videoPlayer.src = '';
  document.body.style.overflow = 'auto';
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
      showSuffuTubeApp(user);

      // notify (non-blocking)
      try { sendLoginNotification(user); } catch (err) { console.warn('notify error', err); }

    } else {
      showError('Invalid credentials. Please check your email and password.');
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
  window.sessionData = { currentUser: user };
}

function getCurrentUser() {
  if (window.currentUser) {
    return window.currentUser;
  }
  if (window.sessionData && window.sessionData.currentUser) {
    window.currentUser = window.sessionData.currentUser;
    return window.currentUser;
  }
  return null;
}

function checkExistingLogin() {
  const user = getCurrentUser();
  if (user) {
    showSuffuTubeApp(user);
  }
}

function showSuffuTubeApp(user) {
  if (loginPage) loginPage.style.display = 'none';
  if (youtubeApp) youtubeApp.style.display = 'block';
  
  if (currentUserName) currentUserName.textContent = user.name;
  if (userAvatar) userAvatar.src = user.avatar;
  
  renderVideos();
  renderSubscriptions();
}

function logout() {
  window.currentUser = null;
  window.sessionData = null;
  
  if (youtubeApp) youtubeApp.style.display = 'none';
  if (loginPage) loginPage.style.display = 'flex';
  
  if (loginForm) loginForm.reset();
  closeVideoModal();
}

function renderVideos() {
  if (videoGrid) {
    videoGrid.innerHTML = '';
    
    videos.forEach(video => {
      const videoCard = document.createElement('div');
      videoCard.className = 'video-card-container';
      videoCard.style.cursor = 'pointer';

      videoCard.addEventListener('click', function(e) {
        e.preventDefault();
        openVideoModal(video.videoId, video.title);
      });

      videoCard.innerHTML = `
        <div class="video-card">
          <div class="thumbnail-container">
            <img src="${video.thumbnail}" 
                 alt="${video.title}" 
                 class="video-thumbnail" />
            <div class="play-button-overlay">
              <svg width="68" height="48" viewBox="0 0 68 48" fill="none">
                <path d="M66.52 7.74C65.11 2.98 61.39 -0.75 56.63 -2.16C51.77 -3.88 30.16 -3.88 30.16 -3.88S8.54 -3.88 3.68 -2.16C-1.08 -0.75 -4.81 2.98 -6.22 7.74C-7.94 12.6 -7.94 23.02 -7.94 23.02S-7.94 33.44 -6.22 38.3C-4.81 43.06 -1.08 46.79 3.68 48.2C8.54 49.92 30.16 49.92 30.16 49.92S51.77 49.92 56.63 48.2C61.39 46.79 65.11 43.06 66.52 38.3C68.24 33.44 68.24 23.02 68.24 23.02S68.24 12.6 66.52 7.74Z" fill="url(#playGradient)"/>
                <path d="M24.16 33.02L44.16 23.02L24.16 13.02V33.02Z" fill="white"/>
                <defs>
                  <linearGradient id="playGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b6b;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#4ecdc4;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#45b7d1;stop-opacity:1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div class="video-details">
            <img src="${video.channelAvatar}" 
                 alt="${video.channelName}" 
                 class="channel-avatar-small" />
            <div class="video-info">
              <h4 class="video-title">${video.title}</h4>
              <p class="channel-name">${video.channelName}</p>
              <p class="video-meta">${video.views} views • ${video.uploaded}</p>
            </div>
          </div>
        </div>
      `;

      videoGrid.appendChild(videoCard);
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
        <img src="${sub.avatar}" alt="${sub.name}" class="channel-avatar" />
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

function addStyles() {
