function generateCard() {
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];
    
    const card = document.querySelector('.card');
    card.style.backgroundImage = `url('cards/${randomValue}${randomSuit}.png')`;
  }
  