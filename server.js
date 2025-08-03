const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Dummy user data (in real app, use database)
const users = [
    { 
        id: 1,
        email: 'sufiyan@youtube.com', 
        password: 'password123', 
        name: 'Sufiyan Mohd', 
        avatar: 'https://i.pravatar.cc/30?img=68' 
    },
    { 
        id: 2,
        email: 'admin@youtube.com', 
        password: 'admin456', 
        name: 'Admin User', 
        avatar: 'https://i.pravatar.cc/30?img=1' 
    }
];

// Active sessions (in real app, use Redis or database)
const sessions = new Map();

// Generate simple session token
function generateToken() {
    return Math.random().toString(36).substr(2) + Date.now().toString(36);
}

// Routes

// Serve main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Login endpoint
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    
    console.log('Login attempt:', email);
    
    // Validate input
    if (!email || !password) {
        return res.status(400).json({ 
            success: false, 
            message: 'Email and password are required' 
        });
    }
    
    // Find user
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
        return res.status(401).json({ 
            success: false, 
            message: 'Invalid email or password' 
        });
    }
    
    // Generate session token
    const token = generateToken();
    
    // Store session
    sessions.set(token, {
        userId: user.id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
        loginTime: new Date()
    });
    
    console.log('User logged in:', user.name);
    
    // Return success with user data and token
    res.json({
        success: true,
        message: 'Login successful',
        token: token,
        user: {
            id: user.id,
            email: user.email,
            name: user.name,
            avatar: user.avatar
        }
    });
});

// Logout endpoint
app.post('/api/logout', (req, res) => {
    const { token } = req.body;
    
    if (token && sessions.has(token)) {
        const session = sessions.get(token);
        sessions.delete(token);
        console.log('User logged out:', session.name);
    }
    
    res.json({ success: true, message: 'Logged out successfully' });
});

// Verify session endpoint
app.post('/api/verify', (req, res) => {
    const { token } = req.body;
    
    if (!token || !sessions.has(token)) {
        return res.status(401).json({ 
            success: false, 
            message: 'Invalid or expired session' 
        });
    }
    
    const session = sessions.get(token);
    
    res.json({
        success: true,
        user: {
            id: session.userId,
            email: session.email,
            name: session.name,
            avatar: session.avatar
        }
    });
});

// Get videos endpoint (for future API integration)
app.get('/api/videos', (req, res) => {
    const videos = [
        {
            id: 1,
            thumbnail: 'https://i.ytimg.com/vi/aQZJ1fK72tA/hqdefault.jpg',
            title: 'The Angrez 2 Comedy Scenes Back to Back',
            channelName: 'Gaming Nexus',
            channelAvatar: 'https://i.pravatar.cc/30?img=1',
            views: '5.2M',
            uploaded: '3 weeks ago'
        },
        {
            id: 2,
            thumbnail: 'https://i.ytimg.com/vi/W_aV_uJ8t_U/hqdefault.jpg',
            title: 'PATNI NANAND AUR WEDDING ANNIVERSARY!',
            channelName: 'Sufiyan Mohd',
            channelAvatar: 'https://i.pravatar.cc/30?img=68',
            views: '10.8M',
            uploaded: '2 years ago'
        }
        // Add more videos as needed
    ];
    
    res.json({ success: true, videos });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        success: false, 
        message: 'Something went wrong!' 
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ 
        success: false, 
        message: 'Route not found' 
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 YouTube Clone server running on http://localhost:${PORT}`);
    console.log('📁 Serving static files from public directory');
    console.log('🔐 Demo users available:');
    console.log('   - sufiyan@youtube.com / password123');
    console.log('   - admin@youtube.com / admin456');
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('🛑 Server shutting down...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('🛑 Server shutting down...');
    process.exit(0);
});
