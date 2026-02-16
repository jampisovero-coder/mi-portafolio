const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let particles = [];
let mouse = { x: null, y: null };

const colors = ['#00f3ff', '#0078d4', '#4285F4', '#ffffff']; // Cyan, Azure, Google Blue, White

window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    init();
});

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.dx = (Math.random() - 0.5) * 1;
        this.dy = (Math.random() - 0.5) * 1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        if (this.x + this.size > width || this.x - this.size < 0) this.dx = -this.dx;
        if (this.y + this.size > height || this.y - this.size < 0) this.dy = -this.dy;

        // Interaction
        if (mouse.x) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // "Follow" effect (Attraction)
            // We want them to move towards the mouse.
            const maxDistance = 300; // Larger radius

            if (distance < maxDistance) {
                // Calculate pull force
                const force = (maxDistance - distance) / maxDistance;
                const directionX = (dx / distance) * force * 2; // Pull strength
                const directionY = (dy / distance) * force * 2;

                this.x += directionX;
                this.y += directionY;
            } else {
                // Gently drift back to original random movement if too far? 
                // Or just keep drifting.
            }
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

function init() {
    particles = [];
    const numberOfParticles = (width * height) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
    }
}

init();
animate();
