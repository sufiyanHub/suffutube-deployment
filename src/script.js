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

// Working video data with popular YouTube videos
const videos = [
    {
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        title: 'Rick Astley - Never Gonna Give You Up (Official Video)',
        channelName: 'Rick Astley',
        channelAvatar: 'https://i.pravatar.cc/40?img=1',
        views: '1.4B',
        uploaded: '14 years ago',
        videoId: 'dQw4w9WgXcQ'
    },
    {
        thumbnail: 'https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg',
        title: 'PSY - GANGNAM STYLE(강남스타일) M/V',
        channelName: 'officialpsy',
        channelAvatar: 'https://i.pravatar.cc/40?img=2',
        views: '4.8B',
        uploaded: '11 years ago',
        videoId: '9bZkp7q19f0'
    },
    {
        thumbnail: 'https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg',
        title: 'Luis Fonsi - Despacito ft. Daddy Yankee',
        channelName: 'LuisFonsiVEVO',
        channelAvatar: 'https://i.pravatar.cc/40?img=3',
        views: '8.2B',
        uploaded: '6 years ago',
        videoId: 'kJQP7kiw5Fk'
    },
    {
        thumbnail: 'https://img.youtube.com/vi/fJ9rUzIMcZQ/maxresdefault.jpg',
        title: 'Queen – Bohemian Rhapsody (Official Video Remastered)',
        channelName: 'Queen Official',
        channelAvatar: 'https://i.pravatar.cc/40?img=4',
        views: '1.9B',
        uploaded: '13 years ago',
        videoId: 'fJ9rUzIMcZQ'
    },
    {
        thumbnail: 'https://img.youtube.com/vi/YQHsXMglC9A/maxresdefault.jpg',
        title: 'Adele - Hello (Official Music Video)',
        channelName: 'Adele',
        channelAvatar: 'https://i.pravatar.cc/40?img=5',
        views: '3.2B',
        uploaded: '8 years ago',
        videoId: 'YQHsXMglC9A'
    },
    {
        thumbnail: 'https://img.youtube.com/vi/JGwWNGJdvx8/maxresdefault.jpg',
        title: 'Ed Sheeran - Shape of You (Official Music Video)',
        channelName: 'Ed Sheeran',
        channelAvatar: 'https://i.pravatar.cc/40?img=6',
        views: '5.9B',
        uploaded: '7 years ago',
        videoId: 'JGwWNGJdvx8'
    },
    {
        thumbnail: 'https://img.youtube.com/vi/RgKAFK5djSk/maxresdefault.jpg',
        title: 'Wiz Khalifa - See You Again ft. Charlie Puth [Official Video]',
        channelName: 'Wiz Khalifa',
        channelAvatar: 'https://i.pravatar.cc/40?img=7',
        views: '5.8B',
        uploaded: '8 years ago',
        videoId: 'RgKAFK5djSk'
    },
    {
        thumbnail: 'https://img.youtube.com/vi/OPf0YbXqDm0/maxresdefault.jpg',
        title: 'Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars',
        channelName: 'Mark Ronson',
        channelAvatar: 'https://i.pravatar.cc/40?img=8',
        views: '4.7B',
        uploaded: '9 years ago',
        videoId: 'OPf0YbXqDm0'
    },
    {
        thumbnail: 'https://img.youtube.com/vi/pt8VYOfr8To/maxresdefault.jpg',
        title: 'Justin Bieber - Sorry (Official Music Video)',
        channelName: 'Justin Bieber',
        channelAvatar: 'https://i.pravatar.cc/40?img=9',
        views: '3.5B',
        uploaded: '8 years ago',
        videoId: 'pt8VYOfr8To'
    }
];

// Subscription data
const subscriptions = [
  { name: 'Rick Astley', avatar: 'https://i.pravatar.cc/30?img=1' },
  { name: 'officialpsy', avatar: 'https://i.pravatar.cc/30?img=2' },
  { name: 'LuisFonsiVEVO', avatar: 'https://i.pravatar.cc/30?img=3' },
  { name: 'Queen Official', avatar: 'https://i.pravatar.cc/30?img=4' },
  { name: 'Adele', avatar: 'https://i.pravatar.cc/30?img=5' },
  { name: 'Ed Sheeran', avatar: 'https://i.pravatar.cc/30?img=6' }
];

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
    showYouTubeApp(user);
  }
}

function showYouTubeApp(user) {
  if (loginPage) loginPage.style.display = 'none';
  if (youtubeApp) youtubeApp.style.display = 'block';
  
  document.body.style.background = '#f9f9f9';
  
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
  
  document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  
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
                <path d="M66.52 7.74C65.11 2.98 61.39 -0.75 56.63 -2.16C51.77 -3.88 30.16 -3.88 30.16 -3.88S8.54 -3.88 3.68 -2.16C-1.08 -0.75 -4.81 2.98 -6.22 7.74C-7.94 12.6 -7.94 23.02 -7.94 23.02S-7.94 33.44 -6.22 38.3C-4.81 43.06 -1.08 46.79 3.68 48.2C8.54 49.92 30.16 49.92 30.16 49.92S51.77 49.92 56.63 48.2C61.39 46.79 65.11 43.06 66.52 38.3C68.24 33.44 68.24 23.02 68.24 23.02S68.24 12.6 66.52 7.74Z" fill="red"/>
                <path d="M24.16 33.02L44.16 23.02L24.16 13.02V33.02Z" fill="white"/>
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
  const styles = `
    <style>
      .video-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .modal-content {
        background: white;
        border-radius: 8px;
        width: 90%;
        max-width: 900px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      }

      .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        border-bottom: 1px solid #eee;
        background: #f8f9fa;
      }

      .modal-title {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        color: #333;
      }

      .modal-close {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #666;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.2s;
      }

      .modal-close:hover {
        background-color: #e9ecef;
        color: #333;
      }

      .video-container {
        height: 500px;
        overflow: hidden;
      }

      .video-container iframe {
        width: 100%;
        height: 100%;
      }

      .video-card-container {
        transition: transform 0.2s ease;
        margin-bottom: 20px;
      }
      
      .video-card-container:hover {
        transform: translateY(-2px);
      }
      
      .video-card {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        transition: box-shadow 0.3s ease;
      }
      
      .video-card:hover {
        box-shadow: 0 4px 16px rgba(0,0,0,0.15);
      }
      
      .thumbnail-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        aspect-ratio: 16/9;
      }
      
      .play-button-overlay {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
        z-index: 2;
      }
      
      .video-card-container:hover .play-button-overlay {
        opacity: 0.9;
      }
      
      .video-thumbnail {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: filter 0.3s ease;
      }
      
      .video-card-container:hover .video-thumbnail {
        filter: brightness(0.8);
      }
      
      .video-details {
        display: flex;
        padding: 12px;
        gap: 12px;
      }
      
      .channel-avatar-small {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        flex-shrink: 0;
        object-fit: cover;
      }
      
      .video-info {
        flex: 1;
        min-width: 0;
      }
      
      .video-title {
        margin: 0 0 6px 0;
        font-size: 14px;
        font-weight: 600;
        line-height: 1.3;
        color: #333;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      
      .channel-name {
        margin: 0 0 4px 0;
        font-size: 13px;
        color: #666;
        font-weight: 500;
      }
      
      .video-meta {
        margin: 0;
        font-size: 13px;
        color: #888;
      }
      
      #video-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        padding: 20px;
      }
      
      @media (max-width: 768px) {
        .modal-content {
          width: 95%;
        }
        
        .video-container {
          height: 300px;
        }
        
        #video-grid {
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 15px;
          padding: 15px;
        }
        
        .video-title {
          font-size: 13px;
        }
        
        .channel-name, .video-meta {
          font-size: 12px;
        }
      }
    </style>
  `;

  document.head.insertAdjacentHTML('beforeend', styles);
}
