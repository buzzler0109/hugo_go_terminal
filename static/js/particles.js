// Particle Network Animation
(function() {
  var width, height, canvas, ctx, particles;
  var particleCount = 100;
  var particleSpeed = 0.4;
  var particleBaseSize = 2;
  var particleMaxSize = 6;
  var lineLength = 150;
  var particleColor = '#fff';

  function init() {
    canvas = document.getElementById('particle-canvas');
    ctx = canvas.getContext('2d');
    resize();
    createParticles();
    drawParticles();
    window.addEventListener('resize', resize);
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }

  function createParticles() {
    particles = [];
    for (var i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * particleSpeed,
        vy: (Math.random() - 0.5) * particleSpeed,
        size: Math.random() * (particleMaxSize - particleBaseSize) + particleBaseSize
      });
    }
  }

  function drawParticles() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = particleColor;
    ctx.strokeStyle = particleColor;

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      for (var j = i + 1; j < particles.length; j++) {
        var p2 = particles[j];
        var dx = p.x - p2.x;
        var dy = p.y - p2.y;
        var distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < lineLength) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(drawParticles);
  }

  window.addEventListener('load', init);
})();