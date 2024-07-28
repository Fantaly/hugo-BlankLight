document.addEventListener('scroll', function () {
    const posts = document.querySelectorAll('.post-entry');
    const centerY = window.innerHeight / 2;
    const threshold = window.innerHeight * 0.05; // 5% of the viewport height

    posts.forEach(post => {
        const rect = post.getBoundingClientRect();
        const postCenterY = rect.top + rect.height / 2;
        const distanceToCenter = Math.abs(centerY - postCenterY);
        const maxDistance = window.innerHeight / 2;

        let opacity;
        if (distanceToCenter <= threshold) {
            opacity = 1;
        } else {
            opacity = 1 - Math.min((distanceToCenter - threshold) / (maxDistance - threshold), 1);
        }

        post.style.opacity = opacity;
    });
});