function checkPostsVisibility() {
    const posts = document.querySelectorAll('.post-content'); 
    const windowHeight = window.innerHeight; 

    posts.forEach(post => { 
        const rect = post.getBoundingClientRect(); 
        const postTop = rect.top;
        const postBottom = rect.bottom;

        // Calculate the visible height of the post
        const visibleHeight = Math.min(postBottom, windowHeight) - Math.max(postTop, 0);
        const postHeight = rect.height;
        
        // Check if at least 10% of the post is visible  and user has at least scrolled once (if scrollable)
        if (visibleHeight / postHeight >= 0.1 && window.scrollY > 0) { 
            post.classList.remove('post-opacity'); 
        } else {
            post.classList.add('post-opacity'); 
        }
    });
}

// Run the check immediately on page load
document.addEventListener('DOMContentLoaded', function() {
    checkPostsVisibility(); // Apply visibility check immediately
});

// Also run the check on scroll
document.addEventListener('scroll', function () { 
    checkPostsVisibility(); 
});
