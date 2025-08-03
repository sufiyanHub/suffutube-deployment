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
let videoPlayerModal, videoPlayer, modalTitle, modalClose;

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeElements();
  setupEventListeners();
  checkExistingLogin();
  createVideoModal();
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

// Create video player modal
function createVideoModal() {
  // Check if modal already exists
  if (document.getElementById('videoPlayerModal')) {
    return;
  }

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

  // Add CSS styles for the modal
  const modalStyles = `
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
        position: relative;
        padding-bottom: 0;
        height: 500px;
        overflow: hidden;
      }

      .video-container iframe {
        width: 100%;
        height: 100%;
      }

      @media (max-width: 768px) {
        .modal-content {
          width: 95%;
        }
        
        .video-container {
          height: 300px;
        }
      }
    </style>
  `;

  document.head.insertAdjacentHTML('beforeend', modalStyles);

  // Get modal elements
  videoPlayerModal = document.getElementById('videoPlayerModal');
  videoPlayer = document.getElementById('videoPlayer');
  modalTitle = document.getElementById('modalTitle');
  modalClose = document.getElementById('modalClose');

  // Add event listeners
  modalClose.addEventListener('click', closeVideoModal);
  videoPlayerModal.addEventListener('click', function(e) {
    if (e.target === videoPlayerModal) {
      closeVideoModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && videoPlayerModal.style.display === 'block') {
      closeVideoModal();
    }
  });
}

function openVideoModal(videoId, title) {
  if (videoPlayer && modalTitle && videoPlayerModal) {
    // Set the iframe source to YouTube embed URL
    videoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    modalTitle.textContent = title;
    videoPlayerModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }
}

function closeVideoModal() {
  if (videoPlayerModal && videoPlayer) {
    videoPlayerModal.style.display = 'none';
    videoPlayer.src = ''; // Stop the video
    document.body.style.overflow = 'auto'; // Restore scrolling
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
  // Using in-memory storage instead of localStorage for compatibility
  window.sessionData = { currentUser: user };
}

function getCurrentUser() {
  if (window.currentUser) {
    return window.currentUser;
  }
  // Check session data
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
  window.sessionData = null;
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
  // Close video modal if open
  closeVideoModal();
}

// UPDATED renderVideos function to open videos in modal instead of redirecting
function renderVideos() {
  if (videoGrid) {
    videoGrid.innerHTML = ''; // Clear existing content
    videos.forEach((video, index) => {
      // Create a div element instead of anchor to prevent redirection
      const videoCard = document.createElement('div');
      videoCard.className = 'video-card-container';
      videoCard.style.cursor = 'pointer';
      videoCard.style.textDecoration = 'none';
      videoCard.style.color = 'inherit';

      // Add click event to open video in modal
      videoCard.addEventListener('click', function(e) {
        e.preventDefault();
        openVideoModal(video.videoId, video.title);
      });

      // Populate the card with the video's HTML content
      videoCard.innerHTML = `
        <div class="video-card">
          <div class="thumbnail-container">
            <img src="${video.thumbnail}" 
                 alt="Video Thumbnail for ${video.title}" 
                 class="video-thumbnail"
                 loading="lazy"
                 onerror="this.src='https://via.placeholder.com/320x180/cccccc/666666?text=Video+Thumbnail'; console.log('Failed to load thumbnail for video ${index + 1}: ${video.title}');"
                 onload="console.log('Successfully loaded thumbnail for: ${video.title}');" />
            <div class="play-button-overlay">
              <svg width="68" height="48" viewBox="0 0 68 48" fill="none">
                <path d="M66.52 7.74C65.11 2.98 61.39 -0.75 56.63 -2.16C51.77 -3.88 30.16 -3.88 30.16 -3.88S8.54 -3.88 3.68 -2.16C-1.08 -0.75 -4.81 2.98 -6.22 7.74C-7.94 12.6 -7.94 23.02 -7.94 23.02S-7.94 33.44 -6.22 38.3C-4.81 43.06 -1.08 46.79 3.68 48.2C8.54 49.92 30.16 49.92 30.16 49.92S51.77 49.92 56.63 48.2C61.39 46.79 65.11 43.06 66.52 38.3C68.24 33.44 68.24 23.02 68.24 23.02S68.24 12.6 66.52 7.74Z" fill="red"/>
                <path d="M24.16 33.02L44.16 23.02L24.16 13.02V33.02Z" fill="white"/>
              </svg>
            </div>
          </div>
          <div class="video-details">
            <img src="${video.channelAvatar}" 
                 alt="Channel Avatar for ${video.channelName}" 
                 class="channel-avatar-small"
                 onerror="this.src='https://via.placeholder.com/30x30/007bff/ffffff?text=${video.channelName.charAt(0)}'" />
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

// Add additional CSS for the play button overlay and thumbnail styling
const additionalStyles = `
  <style>
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
      aspect-ratio: 16/9; /* Ensures consistent aspect ratio */
      background: #f0f0f0; /* Fallback background while loading */
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
      object-fit: cover; /* Ensures image fills container properly */
      display: block;
      transition: filter 0.3s ease;
      background: #e0e0e0; /* Fallback color */
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
      min-width: 0; /* Allows text to truncate properly */
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
    
    /* Responsive grid layout */
    #video-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
      padding: 20px;
    }
    
    @media (max-width: 768px) {
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
    
    /* Loading state for images */
    .video-thumbnail[src=""], .video-thumbnail:not([src]) {
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
    }
    
    @keyframes loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  </style>
`;

// Add the styles to the document head when the page loads
document.addEventListener('DOMContentLoaded', function() {
  document.head.insertAdjacentHTML('beforeend', additionalStyles);
});
