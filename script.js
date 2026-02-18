document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Audio Player Logic ---
    const playBtn = document.getElementById('playBtn');
    const audio = document.getElementById('bgMusic');
    let isPlaying = false;

    playBtn.addEventListener('click', () => {
        if (!isPlaying) {
            audio.play().then(() => {
                isPlaying = true;
                playBtn.textContent = "⏸ Pauză Melodie";
            }).catch(error => {
                console.log("Audio play failed:", error);
                alert("Te rog interacționează cu pagina prima dată!");
            });
        } else {
            audio.pause();
            isPlaying = false;
            playBtn.textContent = "🎵 Ascultă Piesa Noastră";
        }
    });

    // --- 2. Scroll Animations (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.2 // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.year-section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // --- 3. Floating Hearts Generator ---
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Random Position & Animation Duration
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 4 + "s"; // 4-7 seconds

        // Random Size
        const size = Math.random() * 10 + 10 + "px"; // 10-20px (default CSS is 30, we'll scale it)
        heart.style.width = size;
        heart.style.height = size;

        document.querySelector('.hearts-container').appendChild(heart);

        // Remove after animation
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }

    setInterval(createHeart, 500); // New heart every 500ms


    // --- 4. QR Code Generator ---
    // Uses the embedded QRCode.js library
    const currentUrl = window.location.href; // Points to current page

    // For local dev, this might be file://... which won't work on mobile well.
    // If user deploys, this will work.

    new QRCode(document.getElementById("qrcode"), {
        text: currentUrl,
        width: 128,
        height: 128,
        colorDark: "#d02090",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

});
