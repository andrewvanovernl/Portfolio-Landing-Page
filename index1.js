particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 300, // Number of particles
      "density": {
        "enable": true,
        "value_area": 900 // Density is bigger with smaller number
      }
    },
    "color": { // Color only for nodes
      "value": ["#0fbcc6", "#6361ac", "#bebf28", "#c905d6"]  // You can add one more more colors
    },
    "opacity": { // Node opacity
      "value": 0.5, 
      "random": false,
      "anim": { // Node opacity animation, with speed and min opacity
        "enable": false,
        "speed": 0.3,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": { // Node size
      "value": 9,
      "random": true,
      "anim": { // Node size animation, with speed and min size
        "enable": true,
        "speed": 5,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": { // Lines between nodes
      "enable": true,
      "distance": 100, // Distance between node when line will be added
      "color": "#ffffff",
      "opacity": 0.2,
      "width": 1
    },
    "move": { // Node movementm with speed, directions..
      "enable": true,
      "speed": 1.8,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    },
  }
});