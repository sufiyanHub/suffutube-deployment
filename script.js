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

// Your original video data
const videos = [
    {
        thumbnail: 'https://i.ytimg.com/vi/aQZJ1fK72tA/hqdefault.jpg',
        title: 'The Angrez 2 Comedy Scenes Back to Back',
        channelName: 'Gaming Nexus',
        channelAvatar: 'https://i.pravatar.cc/30?img=1',
        views: '5.2M',
        uploaded: '3 weeks ago'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/W_aV_uJ8t_U/hqdefault.jpg',
        title: 'PATNI NANAND AUR WEDDING ANNIVERSARY!',
        channelName: 'Sufiyan Mohd',
        channelAvatar: 'https://i.pravatar.cc/30?img=68',
        views: '10.8M',
        uploaded: '2 years ago'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/Go8y0V6h_Hk/hqdefault.jpg',
        title: 'Action Blockbuster 2025 - "Urban Warfare" Final Trailer',
        channelName: 'Cinema Central',
        channelAvatar: 'https://i.pravatar.cc/30?img=3',
        views: '7.1M',
        uploaded: '1 month ago'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/V_fGg4IeP2E/hqdefault.jpg',
        title: 'Hilarious Gaming Moments - Stream Highlights #42',
        channelName: 'Pro Gamer Livestream',
        channelAvatar: 'https://i.pravatar.cc/30?img=4',
        views: '2.9M',
        uploaded: '4 days ago'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/PkZNo7MFoBs/hqdefault.jpg',
        title: 'Soulful Acoustic Cover - "Fading Lights"',
        channelName: 'Acoustic Vibes',
        channelAvatar: 'https://i.pravatar.cc/30?img=5',
        views: '1.5M',
        uploaded: '5 days ago'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/nu_pC_CUEiE/hqdefault.jpg',
        title: 'Pokémon: DP Sinnoh League Victors | EP32 The Semi-Final Frontier!',
        channelName: 'Sufiyan Mohd',
        channelAvatar: 'https://i.pravatar.cc/30?img=68',
        views: '3.4M',
        uploaded: '3 weeks ago'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/lQ0gQp9k3-g/hqdefault.jpg',
        title: 'Indie Game Gem: "Pixel Adventures" Full Review',
        channelName: 'Indie Gamers Unite',
        channelAvatar: 'https://i.pravatar.cc/30?img=7',
        views: '800K',
        uploaded: '1 week ago'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5sks/hqdefault.jpg',
        title: 'Nanal Nagar STREET FOOD | Tolichowki, Quba Masjid',
        channelName: 'K-Pop Zone',
        channelAvatar: 'https://i.pravatar.cc/30?img=8',
        views: '9.1M',
        uploaded: '6 days ago'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/qdsz66kU3iY/hqdefault.jpg',
        title: 'Powerful Documentary - "The Ocean\'s Cry" Trailer',
        channelName: 'Sufiyan Mohd',
        channelAvatar: 'https://i.pravatar.cc/30?img=68',
        views: '1.1M',
        uploaded: '2 months ago'
    },
    {
        thumbnail: 'https://i.ytimg.com/vi/rfscVS0vtbw/hqdefault.jpg',
        title: 'Top Esports Plays of the Month - Pro League Highlights',
        channelName: 'Esports Arena',
        channelAvatar: 'https://i.pravatar.cc/30?img=10',
        views: '4.8M',
        uploaded: '1 month ago'
    }
];

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
let currentUserName, userAvatar, logoutBtn, videoGrid, subscriptionsList;

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    
    // Get DOM elements
    initializeElements();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize YouTube app components
    initializeYouTubeApp();
    
    // Check if user is already logged in (for persistence)
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
    
    console.log('Elements initialized');
}

function setupEventListeners() {
    // Login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Demo user buttons
    const demoUsers = document.querySelectorAll('.demo-user');
    demoUsers.forEach(button => {
        button.addEventListener('click', function() {
            const email = this.getAttribute('data-email');
            const password = this.getAttribute('data-password');
            fillDemoUser(email, password);
        });
    });
    
    // Logout button
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
    
    console.log('Event listeners set up');
}

function fillDemoUser(email, password) {
    console.log('Filling demo user:', email);
    if (emailInput && passwordInput) {
        emailInput.value = email;
        passwordInput.value = password;
        
        // Add visual feedback
        const demoButton = document.querySelector(`[data-email="${email}"]`);
        if (demoButton) {
            demoButton.style.background = 'rgba(102, 126, 234, 0.3)';
            setTimeout(() => {
                demoButton.style.background = 'rgba(102, 126, 234, 0.1)';
            }, 200);
        }
    }
}

function handleLogin(e) {
    e.preventDefault();
    console.log('Login form submitted');
    
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    console.log('Login attempt for:', email);
    
    // Validate inputs
    if (!email || !password) {
        showError('Please fill in all fields');
        return;
    }
    
    // Hide error message and show loading
    hideError();
    showLoading();
    
    // Simulate API call delay
    setTimeout(() => {
        hideLoading();
        
        // Check credentials
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            console.log('Login successful for:', user.name);
            storeUserSession(user);
            showYouTubeApp(user);
        } else {
            console.log('Login failed - invalid credentials');
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
    // Store user in memory and localStorage for persistence
    window.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    console.log('User session stored:', user.name);
}

function getCurrentUser() {
    // Check memory first, then localStorage
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
        console.log('Existing login found for:', user.name);
        showYouTubeApp(user);
    }
}

function showYouTubeApp(user) {
    console.log('Showing YouTube app for:', user.name);
    
    // Hide login page
    if (loginPage) {
        loginPage.style.display = 'none';
    }
    
    // Show YouTube app
    if (youtubeApp) {
        youtubeApp.style.display = 'block';
    }
    
    // Update body background
    document.body.style.background = '#f9f9f9';
    
    // Update user info in header
    if (currentUserName) {
        currentUserName.textContent = user
