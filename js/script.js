document.addEventListener('DOMContentLoaded', function() {
    // ヒーローセクションのアニメーション
    const hero = document.querySelector('.hero');
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        hero.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }, 100);

    // CTAボタンのクリックイベント
    const ctaButton = document.getElementById('cta-btn');
    ctaButton.addEventListener('click', function() {
        alert('無料トライアルにお申し込みいただき、ありがとうございます！');
    });

    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // スクロールアニメーション
    const features = document.querySelectorAll('.feature');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    features.forEach(feature => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(20px)';
        feature.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(feature);
    });

    // お問い合わせフォームの送信処理
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            console.log('送信されたデータ:', { name, email, message });
            
            alert('お問い合わせありがとうございます。メッセージが送信されました。');
            contactForm.reset();
        });
    }
});

