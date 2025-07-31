document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.getElementById('video-grid');
    const subscriptionsList = document.getElementById('subscriptions-list');
    const trendingGrid = document.getElementById('trending-grid');

    // --- Dummy Data ---
    const username = "Sufiyan Mohd";

    // Regular videos (can be a mix, still include some tech/educational)
    const videos = [
        {
            thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg', // Placeholder for a generic video
            title: 'Learn HTML in 10 Minutes - Basics for Beginners',
            channelName: 'Sufiyan Mohd',
            channelAvatar: 'https://i.pravatar.cc/30?img=68', // Sufiyan Mohd's avatar
            views: '1.2M',
            uploaded: '1 year ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/qdsz66kU3iY/hqdefault.jpg',
            title: 'CSS Grid Crash Course 2024 | Modern CSS Layouts',
            channelName: 'Web Dev Simplified',
            channelAvatar: 'https://i.pravatar.cc/30?img=33',
            views: '850K',
            uploaded: '6 months ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5sks/hqdefault.jpg',
            title: 'JavaScript Tutorial for Beginners | Full Course 2024',
            channelName: 'freeCodeCamp.org',
            channelAvatar: 'https://i.pravatar.cc/30?img=22',
            views: '3.5M',
            uploaded: '2 years ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/PkZNo7MFoBs/hqdefault.jpg',
            title: 'React JS Crash Course 2024 | Build a Portfolio Website',
            channelName: 'Traversy Media',
            channelAvatar: 'https://i.pravatar.cc/30?img=11',
            views: '1.1M',
            uploaded: '9 months ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/ZY3JjV5Lw5k/hqdefault.jpg',
            title: 'Node.js Express & MongoDB Tutorial - Full Stack Guide',
            channelName: 'The Net Ninja',
            channelAvatar: 'https://i.pravatar.cc/30?img=55',
            views: '700K',
            uploaded: '1 year ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/Pj7qsU-292k/hqdefault.jpg',
            title: 'Python for Everybody - Full University Course',
            channelName: 'Sufiyan Mohd',
            channelAvatar: 'https://i.pravatar.cc/30?img=68',
            views: '2.5M',
            uploaded: '3 years ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/y-lF044r6Jc/hqdefault.jpg',
            title: 'Deep Learning Specialization - Andrew Ng (Full Course)',
            channelName: 'DeepLearning.AI',
            channelAvatar: 'https://i.pravatar.cc/30?img=77',
            views: '900K',
            uploaded: '1.5 years ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/rfscVS0vtbw/hqdefault.jpg',
            title: 'Linux Command Line Tutorial for Beginners',
            channelName: 'Sufiyan Mohd',
            channelAvatar: 'https://i.pravatar.cc/30?img=68',
            views: '450K',
            uploaded: '8 months ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/nu_pC_CUEiE/hqdefault.jpg',
            title: 'Figma UI UX Design Tutorial for Beginners 2024',
            channelName: 'DesignCode',
            channelAvatar: 'https://i.pravatar.cc/30?img=88',
            views: '300K',
            uploaded: '4 months ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/hQn0e1qCj90/hqdefault.jpg',
            title: 'Web Components Crash Course - Build Reusable UI',
            channelName: 'Brad Traversy',
            channelAvatar: 'https://i.pravatar.cc/30?img=11',
            views: '180K',
            uploaded: '2 months ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/lQ0gQp9k3-g/hqdefault.jpg',
            title: 'How to build a SaaS application with Next.js',
            channelName: 'Sufiyan Mohd',
            channelAvatar: 'https://i.pravatar.cc/30?img=68',
            views: '75K',
            uploaded: '1 month ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/V_fGg4IeP2E/hqdefault.jpg',
            title: 'The Future of AI: What to Expect in 2025',
            channelName: 'AI Explorer',
            channelAvatar: 'https://i.pravatar.cc/30?img=99',
            views: '1.5M',
            uploaded: '3 months ago'
        }
    ];

    // Dummy Trending Videos Data - Now with more Songs and Movies!
    const trendingVideos = [
        {
            thumbnail: 'https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg', // Placeholder for music video
            title: 'Top 10 Trending Bollywood Songs - July 2025 Chartbusters',
            channelName: 'Music Hits India',
            channelAvatar: 'https://i.pravatar.cc/30?img=18',
            views: '15.2M',
            uploaded: '2 days ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/d_ePzV5s40M/hqdefault.jpg', // Placeholder for movie trailer
            title: 'Epic Sci-Fi Thriller 2025 - Official Trailer (Coming Soon)',
            channelName: 'Movie Mania Trailers',
            channelAvatar: 'https://i.pravatar.cc/30?img=28',
            views: '8.1M',
            uploaded: '5 days ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/O_o7k5pXf_E/hqdefault.jpg', // Placeholder for song cover
            title: 'Viral Pop Song - Acoustic Cover (You won\'t believe it!)',
            channelName: 'Melody Makers',
            channelAvatar: 'https://i.pravatar.cc/30?img=38',
            views: '4.5M',
            uploaded: '1 day ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/D0yY10E0dOM/hqdefault.jpg', // Placeholder for movie review
            title: 'Top 5 Must-Watch Action Movies of the Year - Review',
            channelName: 'Film Fanatics',
            channelAvatar: 'https://i.pravatar.cc/30?img=48',
            views: '1.5M',
            uploaded: '3 days ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/A1B2C3D4E5F/hqdefault.jpg', // Placeholder for song lyrics video
            title: 'Trending Hip-Hop Track - Official Lyric Video',
            channelName: 'Global Beats',
            channelAvatar: 'https://i.pravatar.cc/30?img=58',
            views: '7.2M',
            uploaded: '1 week ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/Xg9E5e_F9gU/hqdefault.jpg', // Placeholder for movie clip
            title: 'Comedy Movie Highlight Reel - Best Scenes of 2025',
            channelName: 'Laugh Out Loud Films',
            channelAvatar: 'https://i.pravatar.cc/30?img=60',
            views: '3.9M',
            uploaded: '4 days ago'
        }
    ];

    const subscriptions = [
        {
            name: 'Web Dev Simplified',
            avatar: 'https://i.pravatar.cc/30?img=33'
        },
        {
            name: 'freeCodeCamp.org',
            avatar: 'https://i.pravatar.cc/30?img=22'
        },
        {
            name: 'Traversy Media',
            avatar: 'https://i.pravatar.cc/30?img=11'
        },
        {
            name: 'The Net Ninja',
            avatar: 'https://i.pravatar.cc/30?img=55'
        },
        {
            name: 'DeepLearning.AI',
            avatar: 'https://i.pravatar.cc/30?img=77'
        },
        {
            name: 'DesignCode',
            avatar: 'https://i.pravatar.cc/30?img=88'
        },
        {
            name: 'AI Explorer',
            avatar: 'https://i.pravatar.cc/30?img=99'
        },
         {
            name: username, // Add Sufiyan Mohd to subscriptions
            avatar: 'https://i.pravatar.cc/30?img=68'
        },
        {
            name: 'Music Hits India',
            avatar: 'https://i.pravatar.cc/30?img=18'
        },
        {
            name: 'Movie Mania Trailers',
            avatar: 'https://i.pravatar.cc/30?img=28'
        },
        {
            name: 'Melody Makers',
            avatar: 'https://i.pravatar.cc/30?img=38'
        },
        {
            name: 'Film Fanatics',
            avatar: 'https://i.pravatar.cc/30?img=48'
        }
    ];


    // Function to create a video card (unchanged)
    function createVideoCard(video) {
        const videoCard = document.createElement('div');
        videoCard.classList.add('video-card');

        videoCard.innerHTML = `
            <img src="${video.thumbnail}" alt="Video Thumbnail" class="video-thumbnail">
            <div class="video-details">
                <img src="${video.channelAvatar}" alt="Channel Avatar" class="channel-avatar-small">
                <div class="video-info">
                    <h3 class="video-title">${video.title}</h3>
                    <p class="channel-name">${video.channelName}</p>
                    <p class="video-meta">${video.views} views &bull; ${video.uploaded}</p>
                </div>
            </div>
        `;
        return videoCard;
    }

    // Function to create a subscription item (unchanged)
    function createSubscriptionItem(subscription) {
        const subscriptionItem = document.createElement('div');
        subscriptionItem.classList.add('sidebar-item');

        subscriptionItem.innerHTML = `
            <img src="${subscription.avatar}" alt="Channel Avatar" class="channel-avatar">
            <span>${subscription.name}</span>
        `;
        return subscriptionItem;
    }

    // Render videos (main grid)
    videos.forEach(video => {
        videoGrid.appendChild(createVideoCard(video));
    });

    // Render trending videos
    trendingVideos.forEach(video => {
        trendingGrid.appendChild(createVideoCard(video));
    });


    // Render subscriptions
    subscriptions.forEach(sub => {
        subscriptionsList.appendChild(createSubscriptionItem(sub));
    });

    // Basic Sidebar Toggle (unchanged)
    const menuIcon = document.querySelector('.menu-icon');
    const sidebar = document.querySelector('.sidebar');
    const videoGridElement = document.querySelector('.video-grid');
    const trendingSectionElement = document.querySelector('.trending-section');

    menuIcon.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        if (sidebar.classList.contains('collapsed')) {
            sidebar.style.width = '70px';
            sidebar.querySelectorAll('span:last-child, h3').forEach(el => el.style.display = 'none');
            sidebar.querySelectorAll('.sidebar-item').forEach(item => item.style.justifyContent = 'center');
            videoGridElement.style.marginLeft = '0px';
            if (trendingSectionElement) {
                trendingSectionElement.style.marginLeft = '0px';
            }
        } else {
            sidebar.style.width = '240px';
            sidebar.querySelectorAll('span:last-child, h3').forEach(el => el.style.display = 'block');
            sidebar.querySelectorAll('.sidebar-item').forEach(item => item.style.justifyContent = 'flex-start');
            videoGridElement.style.marginLeft = '20px';
            if (trendingSectionElement) {
                trendingSectionElement.style.marginLeft = '20px';
            }
        }
    });

    // Handle dummy search (not functional, just an alert) (unchanged)
    const searchButton = document.querySelector('.search-button');
    const searchBar = document.querySelector('.search-bar');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchBar.value.trim();
        if (searchTerm) {
            alert(`Searching for: "${searchTerm}"\n(This is a dummy search, no actual results will be shown.)`);
        }
    });

    // Add a placeholder click event for video cards (optional) (unchanged)
    document.body.addEventListener('click', (event) => {
        const videoCard = event.target.closest('.video-card');
        if (videoCard) {
            const title = videoCard.querySelector('.video-title').textContent;
            // IMPORTANT: This is a front-end only clone.
            // These videos are NOT actually clickable to play or view full content.
            // This alert is just a placeholder to show interaction.
            alert(`You clicked on: "${title}"\n(In a real YouTube, this would take you to the video page for playback.)`);
        }
    });
});
