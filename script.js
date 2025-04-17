window.addEventListener('load', () => {
  document.body.classList.remove('loading');
});

document.getElementById('playButton').addEventListener('click', () => {
  const audio = document.getElementById('audioPlayer');
  audio.play();
  
  document.getElementById('playButton').style.display = 'none';
  document.getElementById('pauseButton').style.display = 'inline-block';
});

document.getElementById('pauseButton').addEventListener('click', () => {
  const audio = document.getElementById('audioPlayer');
  audio.pause();
  
  document.getElementById('playButton').style.display = 'inline-block';
  document.getElementById('pauseButton').style.display = 'none';
});

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "size": {
      "value": 8,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 4
      }
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    },
    "shape": {
      "type": "image",
      "image": {
        "src": "https://cdn-icons-png.flaticon.com/128/833/833472.png",
        "width": 100,
        "height": 100 
      }
    },
    "color": {
      "value": "#FF00FF"
    },
    "opacity": {
      "value": 0.3,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1
      }
    },
    "line_linked": {
      "enable": false
    }
  },
  "retina_detect": true
});
