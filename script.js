// Update spreadPositivity() function
function spreadPositivity() {
    const positiveMessages = [
      {text: "DOMAIN EXPANSION: INFINITE POSITIVITY", emoji: "🌀"},
      {text: "YOU'RE STRONGER THAN SUKUNA!", emoji: "💪"},
      {text: "STAND PROUD... YOU'RE AWESOME!", emoji: "👑"},
      {text: "BLACK FLASH OF MOTIVATION!", emoji: "⚡"},
      {text: "POSITIVE ENERGY OVERFLOW!", emoji: "💥"}
    ];
  
    const {text, emoji} = positiveMessages[Math.floor(Math.random() * positiveMessages.length)];
    const buttonRect = document.querySelector('.funky-button').getBoundingClientRect();
  
    // Create message element
    const floatMsg = document.createElement('div');
    floatMsg.className = 'float-message';
    floatMsg.innerHTML = `
      <span style="font-size: 1.8rem">${text}</span>
      <span style="font-size: 2rem; margin-left: 10px">${emoji}</span>
    `;
  
    // Position at button center
    floatMsg.style.top = `${buttonRect.top + window.scrollY}px`;
    floatMsg.style.left = `${buttonRect.left + buttonRect.width/2}px`;
  
    document.body.appendChild(floatMsg);
    
    // Remove after animation
    setTimeout(() => floatMsg.remove(), 2000);
  
    // Add button pulse
    const button = document.querySelector('.funky-button');
    button.style.transform = 'scale(1.1)';
    setTimeout(() => button.style.transform = 'scale(1)', 200);
  }