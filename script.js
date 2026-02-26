document.addEventListener('DOMContentLoaded', () => {

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

    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.year-section');
    sections.forEach(section => {
        observer.observe(section);
    });

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');


        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 4 + "s";


        const size = Math.random() * 20 + 20 + "px";
        heart.style.width = size;
        heart.style.height = size;

        document.querySelector('.hearts-container').appendChild(heart);


        setTimeout(() => {
            heart.remove();
        }, 8000);
    }

    setInterval(createHeart, 500);



    const currentUrl = window.location.href;


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
        "Pentru că mă faci să râd cu poftă.",
        "Pentru că ești cel mai bun prieten al meu.",
        "Pentru că mă asculți fără să mă judeci.",
        "Pentru că îmi oferi cele mai calde îmbrățișări.",
        "Pentru felul în care îți pasă de oamenii din jur.",
        "Pentru că alături de tine pot fi eu însumi.",
        "Pentru cât de ambițioasă ești.",
        "Pentru blândețea vocii tale.",
        "Pentru felul în care mă încurajezi mereu.",
        "Pentru diminețile în care ne trezim împreună.",
        "Pentru iubirea ta fata de animale.",
        "Pentru că ești casa mea  în zilele grele.",
        "Pentru glumele noastre pe care doar noi le înțelegem.",
        "Pentru modul drăgălaș în care te superi uneori.",
        "Pentru că știi exact cum să mă calmezi.",
        "Pentru plimbările noastre lungi.",
        "Pentru abilitatea ta de a te reinventa.",
        "Pentru pasiunea cu care povestești despre lucrurile care îți plac.",
        "Pentru curajul tău.",
        "Pentru modul în care ne completăm unul pe celălalt.",
        "Pentru felul în care iubești animalele.",
        "Pentru nopțile în care stăm de vorbă până târziu.",
        "Pentru că simpla ta prezență îmi aduce liniște.",
        "Pentru că mă înveți mereu ceva nou.",
        "Pentru răbdarea pe care o ai cu mine.",
        "Pentru felul în care te bucuri de lucrurile mărunte.",
        "Pentru mesajele tale de bună dimineața.",
        "Pentru că mă faci să vreau să devin o versiune mai bună a mea.",
        "Pentru susținerea ta necondiționată.",
        "Pentru cât de inteligentă și descurcăreață ești.",
        "Pentru surprizele mici cu care îți place să mă bucuri.",
        "Pentru modul în care te uiți la mine când crezi că nu te văd.",
        "Pentru felul în care te joci cu părul meu.",
        "Pentru toate amintirile minunate pe care le-am creat împreună.",
        "Pentru stilul tău de a te îmbrăca și de a fi.",
        "Pentru că îmi dai cel mai bun sentiment de 'acasă'.",
        "Pentru cum îmi iei apărarea.",
        "Pentru că știu ca vei fi partenerul meu perfect de călătorii.",
        "Pentru felul în care găsim mereu motive să râdem.",
        "Pentru modul în care mă faci să mă simt special în fiecare zi.",
        "Pentru visurile noastre.",
        "Pentru energia ta frumoasă.",
        "Pentru că în prezența ta dispare orice frică.",
        "Pentru sărutările tale perfecte.",
        "Pentru că ești cea mai frumoasă persoană pe care o cunosc.",
        "Pentru modul în care apreciezi micile mele eforturi.",
        "Pentru cum reușesc să mă pierd în ochii tăi.",
        "Pur si simplu, pentru ca esti tu.",
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
