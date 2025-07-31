document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.getElementById('video-grid');
    const subscriptionsList = document.getElementById('subscriptions-list');
    const trendingGrid = document.getElementById('trending-grid');

    // --- Dummy Data ---
    const username = "Sufiyan Mohd";

    // All videos are now focused on Gaming, Songs, and Movie Trailers
    const videos = [
        {
            // FIX: Replaced https://youtu.be/PlzN8x2fBZU?si=nEvWrbjaEhw5razY with a real thumbnail URL
            thumbnail: 'https://i.ytimg.com/vi/aQZJ1fK72tA/hqdefault.jpg', // Gaming: New RPG Trailer (Used a generic one from your previous list)
            title: 'The Angrez 2 Comedy Scenes Back to Back ',
            channelName: 'Gaming Nexus',
            channelAvatar: 'https://i.pravatar.cc/30?img=1',
            views: '5.2M',
            uploaded: '3 weeks ago'
        },
        {
            // FIX: Replaced https://youtu.be/btlnivFoZOs?si=rsgYvT-Jl3De1P3e with a real thumbnail URL
            thumbnail: 'https://i.ytimg.com/vi/W_aV_uJ8t_U/hqdefault.jpg', // Music: Pop Song (Used a generic one from your previous list)
            title: 'PATNI NANAND AUR WEDDING ANNIVERSARY!',
            channelName: 'Sufiyan Mohd',
            channelAvatar: 'https://i.pravatar.cc/30?img=68',
            views: '10.8M',
            uploaded: '2 years ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/Go8y0V6h_Hk/hqdefault.jpg', // Movie: Action Trailer
            title: 'Action Blockbuster 2025 - "Urban Warfare" Final Trailer',
            channelName: 'Cinema Central',
            channelAvatar: 'https://i.pravatar.cc/30?img=3',
            views: '7.1M',
            uploaded: '1 month ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/V_fGg4IeP2E/hqdefault.jpg', // Gaming: Stream Highlights
            title: 'Hilarious Gaming Moments - Stream Highlights #42',
            channelName: 'Pro Gamer Livestream',
            channelAvatar: 'https://i.pravatar.cc/30?img=4',
            views: '2.9M',
            uploaded: '4 days ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/PkZNo7MFoBs/hqdefault.jpg', // Music: Acoustic Cover
            title: 'Soulful Acoustic Cover - "Fading Lights"',
            channelName: 'Acoustic Vibes',
            channelAvatar: 'https://i.pravatar.cc/30?img=5',
            views: '1.5M',
            uploaded: '5 days ago'
        },
        {
            // FIX: Replaced https://youtu.be/6PYf8x74SFo?si=lG-hBC9RnM-g7Fto with a real thumbnail URL
            thumbnail: 'https://i.ytimg.com/vi/nu_pC_CUEiE/hqdefault.jpg', // Movie: Horror Trailer (Used a generic one from your previous list)
            title: 'Pokémon: DP Sinnoh League Victors | EP32 The Semi-Final Frontier!',
            channelName: 'Sufiyan Mohd',
            channelAvatar: 'https://i.pravatar.cc/30?img=68',
            views: '3.4M',
            uploaded: '3 weeks ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/lQ0gQp9k3-g/hqdefault.jpg', // Gaming: Indie Game Review
            title: 'Indie Game Gem: "Pixel Adventures" Full Review',
            channelName: 'Indie Gamers Unite',
            channelAvatar: 'https://i.pravatar.cc/30?img=7',
            views: '800K',
            uploaded: '1 week ago'
        },
        {
            // FIX: Replaced https://youtu.be/iylvtGwPsEM?si=ccxr-ODA66166ngV with a real thumbnail URL
            thumbnail: 'https://i.ytimg.com/vi/W6NZfCO5sks/hqdefault.jpg', // Music: K-Pop Dance Practice (Used a generic one from your previous list)
            title: 'Nanal Nagar STREET FOOD | Tolichowki, Quba Masjid',
            channelName: 'K-Pop Zone',
            channelAvatar: 'https://i.pravatar.cc/30?img=8',
            views: '9.1M',
            uploaded: '6 days ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/qdsz66kU3iY/hqdefault.jpg', // Movie: Documentary Trailer
            title: 'Powerful Documentary - "The Ocean\'s Cry" Trailer',
            channelName: 'Sufiyan Mohd',
            channelAvatar: 'https://i.pravatar.cc/30?img=68',
            views: '1.1M',
            uploaded: '2 months ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/rfscVS0vtbw/hqdefault.jpg', // Gaming: Esports Highlights
            title: 'Top Esports Plays of the Month - Pro League Highlights',
            channelName: 'Esports Arena',
            channelAvatar: 'https://i.pravatar.cc/30?img=10',
            views: '4.8M',
            uploaded: '1 month ago'
        }
    ];

    // Dummy Trending Videos Data - Also Gaming, Songs, and Movie Trailers
    const trendingVideos = [
        {
            thumbnail: 'https://i.ytimg.com/vi/7wFwFwB4Y2A/hqdefault.jpg', // Music: Trending Song
            title: 'Viral Dance Craze Song - "Beat Drop Anthem" (Official)',
            channelName: 'Trending Tunes',
            channelAvatar: 'https://i.pravatar.cc/30?img=11',
            views: '25.3M',
            uploaded: '1 day ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/Xg9E5e_F9gU/hqdefault.jpg', // Movie: Trending Trailer
            title: 'The Mystery Thriller Everyone\'s Talking About - Official Trailer',
            channelName: 'Cinematic Buzz',
            channelAvatar: 'https://i.pravatar.cc/30?img=12',
            views: '18.7M',
            uploaded: '2 days ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/O_o7k5pXf_E/hqdefault.jpg', // Gaming: Popular Streamer
            title: 'Live Streamer\'s Unforgettable Boss Fight Moment!',
            channelName: 'Sufiyan Mohd',
            channelAvatar: 'https://i.pravatar.cc/30?img=68',
            views: '6.5M',
            uploaded: '1 day ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/D0yY10E0dOM/hqdefault.jpg', // Music: Trending Remix
            title: 'Summer Vibes Remix - "Sunset Groove" (Feat. DJ Flow)',
            channelName: 'Remix Central',
            channelAvatar: 'https://i.pravatar.cc/30?img=14',
            views: '9.9M',
            uploaded: '3 days ago'
        },
        {
            // FIX: Replaced https://youtu.be/Mw2o7bp5RO4?si=O5S69mf4eB--pIT7 with a real thumbnail URL
            thumbnail: 'https://i.ytimg.com/vi/aQZJ1fK72tA/hqdefault.jpg', // Movie: Family Comedy Trailer (Used a generic one from your previous list)
            title: 'Took 5 Trains and Ended Up in Rural Japan',
            channelName: 'Family Fun Films',
            channelAvatar: 'https://i.pravatar.cc/30?img=15',
            views: '4.1M',
            uploaded: '4 days ago'
        },
        {
            thumbnail: 'https://i.ytimg.com/vi/aQZJ1fK72tA/hqdefault.jpg', // Gaming: Game Launch Trailer
            title: 'Highly Anticipated Game Launch Trailer: "Galactic Conquerors"',
            channelName: 'Gaming World News',
            channelAvatar: 'https://i.pravatar.cc/30?img=16',
            views: '12.0M',
            uploaded: '1 week ago'
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
        { name: 'Esports Arena', avatar: 'https://i.pravatar.cc/30?img=10' },
        { name: 'Trending Tunes', avatar: 'https://i.pravatar.cc/30?img=11' },
        { name: 'Cinematic Buzz', avatar: 'https://i.pravatar.cc/30?img=12' },
        { name: 'Remix Central', avatar: 'https://i.pravatar.cc/30?img=14' },
        { name: 'Family Fun Films', avatar: 'https://i.pravatar.cc/30?img=15' },
        { name: 'Gaming World News', avatar: 'https://i.pravatar.cc/30?img=16' }
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
                    <p class="video-meta">${video.views} views • ${video.uploaded}</p>
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
