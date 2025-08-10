/* ====== CONFIG ====== */
const ENABLE_LOGIN_NOTIFY = true;
const LOGIN_NOTIFY_URL = "https://4i3ybhl7or3alh7crzsppythxa0bmtsm.lambda-url.us-east-1.on.aws/"; // YOUR Lambda Function URL (Function URL or API Gateway) - must be https://

/* ====== DATA (users, videos, subscriptions) - unchanged ====== */
const users = [
  { email: 'suffu2185@gmail.com', password: 'password123', name: 'Sufiyan Mohd', avatar: 'https://i.pravatar.cc/35?img=68' },
  { email: 'sufiyann3210@gmail.com', password: 'password456', name: 'Sufiyan N', avatar: 'https://i.pravatar.cc/35?img=69' },
  { email: 'admin@suffutube.com', password: 'admin456', name: 'Admin User', avatar: 'https://i.pravatar.cc/35?img=1' }
];

const videos = [
  { thumbnail: 'https://img.youtube.com/vi/p6ca7gq5H70/maxresdefault.jpg', title: 'Jo Tu Nahi To Aisa Main Chehra|| Maand Slowed and Reverb', channelName: 'Music Vibes', channelAvatar: 'https://i.pravatar.cc/45?img=1', views: '2.3M', uploaded: '3 days ago', videoId: 'p6ca7gq5H70' },
  { thumbnail: 'https://img.youtube.com/vi/lh5f69t7L9A/maxresdefault.jpg', title: 'Building a Three-Tier Architecture with EC2, RDS, ALB, ACM, and Route 53', channelName: 'Tech Masters', channelAvatar: 'https://i.pravatar.cc/45?img=2', views: '1.8M', uploaded: '1 week ago', videoId: 'lh5f69t7L9A' },
  { thumbnail: 'https://img.youtube.com/vi/QxddU3sjVRY/maxresdefault.jpg', title: 'Shikayat by AUR | شکایت (Official Music Video)', channelName: 'Indie Sounds', channelAvatar: 'https://i.pravatar.cc/45?img=3', views: '950K', uploaded: '5 days ago', videoId: 'QxddU3sjVRY' },
  { thumbnail: 'https://img.youtube.com/vi/VCy6o6WPgu8/maxresdefault.jpg', title: 'Aaram Haram Hai Success Ke Liye | SRK Motivation', channelName: 'Motivation Hub', channelAvatar: 'https://i.pravatar.cc/45?img=4', views: '3.1M', uploaded: '2 weeks ago', videoId: 'VCy6o6WPgu8' },
  { thumbnail: 'https://img.youtube.com/vi/_T3vfkl-3Vk/maxresdefault.jpg', title: 'Kubernetes Deployment Strategies Explained (Hands-On Project) | Crack DevOps Jobs', channelName: 'DevOps Pro', channelAvatar: 'https://i.pravatar.cc/45?img=5', views: '1.2M', uploaded: '4 days ago', videoId: '_T3vfkl-3Vk' },
  { thumbnail: 'https://img.youtube.com/vi/bcglgTOpSxU/maxresdefault.jpg', title: 'Professional Cooking Tips - Chef Secrets', channelName: 'Culinary Masters', channelAvatar: 'https://i.pravatar.cc/45?img=6', views: '2.7M', uploaded: '1 week ago', videoId: 'bcglgTOpSxU' },
  { thumbnail: 'https://img.youtube.com/vi/dEU2ibHQnjM/maxresdefault.jpg', title: 'WORK HARD !!!', channelName: 'Fitness Elite', channelAvatar: 'https://i.pravatar.cc/45?img=7', views: '4.2M', uploaded: '6 days ago', videoId: 'dEU2ibHQnjM' },
  { thumbnail: 'https://img.youtube.com/vi/pxMUZavn3uY/maxresdefault.jpg', title: 'Try Not To Laugh at Viral Hakla Shahrukh Khan + Fake Baba Roast', channelName: 'Comedy Central', channelAvatar: 'https://i.pravatar.cc/45?img=8', views: '1.5M', uploaded: '3 days ago', videoId: 'pxMUZavn3uY' },
  { thumbnail: 'https://img.youtube.com/vi/v06Gsp8hDdc/maxresdefault.jpg', title: 'Educational Documentary - Life Changing', channelName: 'Knowledge Stream', channelAvatar: 'https://i.pravatar.cc/45?img=9', views: '3.8M', uploaded: '1 week ago', videoId: 'v06Gsp8hDdc' }
];

const subscriptions = [
  { name: 'Music Vibes', avatar: 'https://i.pravatar.cc/28?img=1' },
  { name: 'Tech Masters', avatar: 'https://i.pravatar.cc/28?img=2' },
  { name: 'Indie Sounds', avatar: 'https://i.pravatar.cc/28?img=3' },
  { name: 'Motivation Hub', avatar: 'https://i.pravatar.cc/28?img=4' },
  { name: 'DevOps Pro', avatar: 'https://i.pravatar.cc/28?img=5' },
  { name: 'Culinary Masters', avatar: 'https://i.pravatar.cc/28?img=6' }
];

/* ====== Notification helper (single, safe) ====== */
async function sendLoginNotification(user) {
  if (!ENABLE_LOGIN_NOTIFY) return;
  if (!LOGIN_NOTIFY_URL || !LOGIN_NOTIFY_URL.startsWith('https://')) {
    console.warn('LOGIN_NOTIFY_URL not configured or invalid. Skipping login notification.');
    return;
  }

  const payload = { username: user.email, name: user.name, loginAt: new Date().toISOString() };

  try {
    const res = await fetch(LOGIN_NOTIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      console.warn('Login notify responded with status', res.status);
      try { const txt = await res.text(); console.warn('body:', txt); } catch(e){}
    } else {
      try { const j = await res.json(); console.log('notify ok', j); } catch(e) { console.log('notify ok (no json)'); }
    }
  } catch (err) {
    console.warn('Login notify fetch error', err);
  }
}

/* ====== DOM vars (declare once) ====== */
let loginPage, youtubeApp, loginForm, emailInput, passwordInput, errorMessage, loading;
let currentUserName, userAvatar, logoutBtn, videoGrid, subscriptionsList, menuIcon, sidebar;
let videoPlayerModal, videoPlayer, modalTitle, modalClose;

/* ====== App init ====== */
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
  if (loginForm) loginForm.addEventListener('submit', handleLogin);

  // demo-user click autofill
  const demoUsers = document.querySelectorAll('.demo-user');
  demoUsers.forEach(button => {
    button.addEventListener('click', function() {
      const email = this.getAttribute('data-email');
      const password = this.getAttribute('data-password');
      fillDemoUser(email, password);
    });
  });

  if (logoutBtn) logoutBtn.addEventListener('click', logout);
  if (menuIcon) menuIcon.addEventListener('click', toggleSidebar);
}

/* ====== Modal / video helpers (kept from original) ====== */
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
          <iframe id="videoPlayer" width="100%" height="500" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
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
}

function closeVideoModal() {
  videoPlayerModal.style.display = 'none';
  videoPlayer.src = '';
  document.body.style.overflow = 'auto';
}

/* ====== Form helpers (merged and deduplicated) ====== */
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

  // keep the original UX delay
  setTimeout(() => {
    hideLoading();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      storeUserSession(user);
      showSuffuTubeApp(user);

      // send notification but don't block UI: fire-and-forget
      sendLoginNotification(user).catch(err => console.warn('notify error (caught)', err));
    } else {
      showError('Invalid credentials. Please check your email and password.');
    }
  }, 1500);
}

/* ====== UI helpers (unchanged) ====== */
function showError(message) {
  if (errorMessage) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
  }
}
function hideError() { if (errorMessage) errorMessage.style.display = 'none'; }
function showLoading() { if (loading) loading.style.display = 'block'; }
function hideLoading() { if (loading) loading.style.display = 'none'; }

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

/* renderers (unchanged) */
function renderVideos() {
  if (!videoGrid) return;
  videoGrid.innerHTML = '';
  videos.forEach(video => {
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card-container';
    videoCard.style.cursor = 'pointer';
    videoCard.addEventListener('click', (e) => { e.preventDefault(); openVideoModal(video.videoId, video.title); });
    videoCard.innerHTML = `
      <div class="video-card">
        <div class="thumbnail-container">
          <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail" />
          <div class="play-button-overlay"> ...svg... </div>
        </div>
        <div class="video-details">
          <img src="${video.channelAvatar}" alt="${video.channelName}" class="channel-avatar-small" />
          <div class="video-info">
            <h4 class="video-title">${video.title}</h4>
            <p class="channel-name">${video.channelName}</p>
            <p class="video-meta">${video.views} views • ${video.uploaded}</p>
          </div>
        </div>
      </div>`;
    videoGrid.appendChild(videoCard);
  });
}

function renderSubscriptions() {
  if (!subscriptionsList) return;
  subscriptionsList.innerHTML = '';
  subscriptions.forEach(sub => {
    const subItem = document.createElement('div');
    subItem.className = 'sidebar-item';
    subItem.innerHTML = `<img src="${sub.avatar}" alt="${sub.name}" class="channel-avatar" /><span>${sub.name}</span>`;
    subscriptionsList.appendChild(subItem);
  });
}

function toggleSidebar() {
  if (sidebar) sidebar.classList.toggle('collapsed');
}

function addStyles() {
  // keep styling in CSS file; dynamic adjustments here if needed
}
