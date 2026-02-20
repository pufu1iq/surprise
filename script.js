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
        const size = Math.random() * 20 + 20 + "px"; // 20-40px range
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

    // --- 4. QR Code Generator ---
    // (Removed from UI as per request, ensuring standalone file usage instead)

    // --- 5. Card Flip Logic ---
    const cards = document.querySelectorAll('.memory-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    // --- 6. 50 Reasons Logic ---
    const reasons = [
        "Pentru felul în care mă privești.",
        "Pentru zâmbetul tău care luminează orice încăpere.",
        "Pentru că mă faci să râd cu poftă în fiecare zi.",
        "Pentru că ești cel mai bun prieten al meu.",
        "Pentru că mă asculți fără să mă judeci.",
        "Pentru că îmi oferi cele mai calde îmbrățișări.",
        "Pentru felul în care îți pasă de oamenii din jur.",
        "Pentru că alături de tine pot fi eu însumi, 100%.",
        "Pentru cât de ambițioasă ești.",
        "Pentru blândețea vocii tale.",
        "Pentru felul în care mă încurajezi mereu.",
        "Pentru diminețile în care ne trezim împreună.",
        "Pentru parfumul tău de care pur și simplu nu mă satur.",
        "Pentru că ești refugiul meu în zilele grele.",
        "Pentru glumele noastre pe care doar noi le înțelegem.",
        "Pentru modul drăgălaș în care te superi uneori.",
        "Pentru că știi exact cum să mă calmezi.",
        "Pentru plimbările noastre lungi.",
        "Pentru că faci ca fiecare zi banală să pară o aventură.",
        "Pentru pasiunea cu care povestești despre lucrurile care îți plac.",
        "Pentru curajul tău de a visa măreț.",
        "Pentru modul în care ne completăm unul pe celălalt.",
        "Pentru felul în care iubești animalele.",
        "Pentru nopțile în care stăm de vorbă până târziu.",
        "Pentru că simpla ta prezență îmi aduce liniște.",
        "Pentru că mă înveți mereu ceva nou.",
        "Pentru răbdarea pe care o ai cu mine.",
        "Pentru felul în care te bucuri de lucrurile mărunte.",
        "Pentru mesajele tale curajoase de bună dimineața.",
        "Pentru că mă faci să vreau să devin o versiune mai bună a mea.",
        "Pentru susținerea ta necondiționată.",
        "Pentru cât de inteligentă și descurcăreață ești.",
        "Pentru surprizele mici cu care îți place să mă bucuri.",
        "Pentru modul în care te uiți la mine când crezi că nu te văd.",
        "Pentru felul în care te joci cu părul meu.",
        "Pentru toate amintirile minunate pe care le-am creat împreună.",
        "Pentru stilul tău de a te îmbrăca și de a fi.",
        "Pentru că îmi dai cel mai bun sentiment de 'acasă'.",
        "Pentru cum îmi iei apărarea în orice situație.",
        "Pentru că ești partenerul meu perfect de călătorii.",
        "Pentru felul în care găsim mereu motive să râdem.",
        "Pentru sinceritatea și loialitatea ta.",
        "Pentru că visurile noastre se potrivesc la fix.",
        "Pentru energia ta frumoasă.",
        "Pentru că în prezența ta dispare orice frică.",
        "Pentru sărutările tale perfecte.",
        "Pentru că ești cea mai frumoasă persoană pe care o cunosc.",
        "Pentru modul în care apreciezi micile mele eforturi.",
        "Pentru cum reușesc să mă pierd în ochii tăi.",
        "Pentru că aduci culoare în zilele mele."
    ];

    const reasonsContainer = document.getElementById('reasonsContainer');
    if (reasonsContainer) {
        reasons.forEach((reason, index) => {
            const reasonEl = document.createElement('div');
            reasonEl.className = 'reason-item';

            const numEl = document.createElement('div');
            numEl.className = 'reason-number';
            numEl.textContent = `${index + 1}.`;

            const textEl = document.createElement('div');
            textEl.className = 'reason-text';
            textEl.textContent = reason;

            reasonEl.appendChild(numEl);
            reasonEl.appendChild(textEl);
            reasonsContainer.appendChild(reasonEl);
        });
    }

});
