document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.getElementById('video-grid');
    const subscriptionsList = document.getElementById('subscriptions-list');

    // --- Dummy Data ---
    const username = "Sufiyan Mohd";

    const videos = [
        {
            thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg', // Placeholder image
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
            channelAvatar: 'https://i.pravatar.cc/30?img=68', // Sufiyan Mohd's avatar
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
            channelAvatar: 'https://i.pravatar.cc/30?img=68', // Sufiyan Mohd's avatar
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
            channelName: 'Brad Traversy', // Another channel by Traversy Media
            channelAvatar: 'https://i.pravatar.cc/30?img=11',
            views: '180K',
            uploaded: '2 months ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/lQ0gQp9k3-g/hqdefault.jpg',
            title: 'How to build a SaaS application with Next.js',
            channelName: 'Sufiyan Mohd',
            channelAvatar: 'https://i.pravatar.cc/30?img=68', // Sufiyan Mohd's avatar
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
        }
    ];


    // Function to create a video card
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

    // Function to create a subscription item
    function createSubscriptionItem(subscription) {
        const subscriptionItem = document.createElement('div');
        subscriptionItem.classList.add('sidebar-item');

        subscriptionItem.innerHTML = `
            <img src="${subscription.avatar}" alt="Channel Avatar" class="channel-avatar">
            <span>${subscription.name}</span>
        `;
        return subscriptionItem;
    }

    // Render videos
    videos.forEach(video => {
        videoGrid.appendChild(createVideoCard(video));
    });

    // Render subscriptions
    subscriptions.forEach(sub => {
        subscriptionsList.appendChild(createSubscriptionItem(sub));
    });

    // Basic Sidebar Toggle (Optional)
    const menuIcon = document.querySelector('.menu-icon');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const videoGridContainer = document.querySelector('.video-grid');

    menuIcon.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        // Adjust main content margin based on sidebar state
        if (sidebar.classList.contains('collapsed')) {
            sidebar.style.width = '70px';
            sidebar.querySelectorAll('span:last-child, h3').forEach(el => el.style.display = 'none');
            sidebar.querySelectorAll('.sidebar-item').forEach(item => item.style.justifyContent = 'center');
            videoGridContainer.style.marginLeft = '0px'; // Remove margin
        } else {
            sidebar.style.width = '240px';
            sidebar.querySelectorAll('span:last-child, h3').forEach(el => el.style.display = 'block');
            sidebar.querySelectorAll('.sidebar-item').forEach(item => item.style.justifyContent = 'flex-start');
            videoGridContainer.style.marginLeft = '20px'; // Re-add margin
        }
    });

    // Handle dummy search (not functional, just an alert)
    const searchButton = document.querySelector('.search-button');
    const searchBar = document.querySelector('.search-bar');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchBar.value.trim();
        if (searchTerm) {
            alert(`Searching for: "${searchTerm}"\n(This is a dummy search, no actual results will be shown.)`);
        }
    });

    // Add a placeholder click event for video cards (optional)
    videoGrid.addEventListener('click', (event) => {
        const videoCard = event.target.closest('.video-card');
        if (videoCard) {
            const title = videoCard.querySelector('.video-title').textContent;
            alert(`You clicked on: "${title}"\n(In a real clone, this would take you to the video page.)`);
        }
    });
});
