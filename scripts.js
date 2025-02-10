document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Responsive navigation menu
    const nav = document.querySelector('nav');
    const toggleMenu = document.querySelector('.toggle-menu');

    toggleMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

    // Show tips for different court areas
    window.showTip = (event, area) => {
        event.preventDefault();
        const tips = {
            '3-point': 'Tips for 3-Point Line: Focus on your shooting form and follow-through. Practice shooting from different spots beyond the arc.',
            'free-throw': 'Tips for Free Throw Line: Maintain a consistent routine. Focus on your stance, grip, and follow-through.',
            'defense': 'Defensive Tips: Stay low and maintain a good defensive stance. Work on your lateral quickness and footwork.',
            'layup': 'Tips for Layup Area: Practice different types of layups. Use both hands and work on finishing through contact.'
        };
        document.getElementById('tip-text').innerText = tips[area];
    };
});
