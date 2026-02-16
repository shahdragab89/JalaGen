document.addEventListener('DOMContentLoaded', () => {
    // 1. Typewriter Animation for the Title
    const el = document.querySelector('.typewriter');
    const text = el.getAttribute('data-text');
    let i = 0;

    function typeEffect() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();

    // 2. Facebook-style Like System
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const countSpan = btn.querySelector('.count');
            let count = parseInt(countSpan.textContent);
            
            if (btn.classList.contains('liked')) {
                count--;
                btn.classList.remove('liked');
            } else {
                count++;
                btn.classList.add('liked');
            }
            countSpan.textContent = count;
        });
    });
});

// 3. Robust Share Function
// Function to open the modal
function copyShareLink() {
    const modal = document.getElementById('shareModal');
    const pageUrl = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Check out this article on JalaGen!");

    // Update Social Links
    document.getElementById('fbShare').href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
    document.getElementById('waShare').href = `https://api.whatsapp.com/send?text=${text}%20${pageUrl}`;

    modal.style.display = "flex";
}

// Function to close the modal
function closeShareModal() {
    document.getElementById('shareModal').style.display = "none";
}

// Function to copy link
function copyToClipboard() {
    const pageUrl = window.location.href;
    navigator.clipboard.writeText(pageUrl).then(() => {
        alert("Link copied to clipboard!");
        closeShareModal();
    });
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('shareModal');
    if (event.target == modal) {
        closeShareModal();
    }
}