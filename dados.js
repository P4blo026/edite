// Salvar o estado antes de a página ser descarregada
window.addEventListener('beforeunload', () => {
    const audio = document.getElementById('myAudio');
    localStorage.setItem('isPlaying', audio.paused ? 'paused' : 'playing');
    localStorage.setItem('currentTime', audio.currentTime);
  });
  
  // Carregar o estado ao carregar a página
  window.addEventListener('load', () => {
    const audio = document.getElementById('myAudio');
    const isPlaying = localStorage.getItem('isPlaying');
    const currentTime = localStorage.getItem('currentTime');
  
    if (isPlaying === 'playing') {
      audio.play();
      audio.currentTime = currentTime;
    }
  });