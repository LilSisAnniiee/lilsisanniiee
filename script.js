(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let birthday = "Jun 06 2024, 00:00:00",
      countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");

          headline.innerText = "It's my birthday!";
          countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)
  }());


  (function () {
    const loveSymbols = ['❤️', '💖', '💕', '💞', '💗', '😍']; // Array of different love symbols
    let previousLoveSymbolIndex = -1; // Initialize the index of the previously displayed symbol
  
    // Function to generate random positions
    function getRandomPosition() {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      return { x, y };
    }
  
    // Function to create and display a love symbol
    function createLoveSymbol() {
      // Remove existing love symbol if any
      const existingLoveSymbol = document.querySelector('.love-symbol');
      if (existingLoveSymbol) {
        existingLoveSymbol.remove();
      }
  
      let randomIndex;
      // Ensure the new symbol is different from the previous one
      do {
        randomIndex = Math.floor(Math.random() * loveSymbols.length);
      } while (randomIndex === previousLoveSymbolIndex);
  
      // Update the index of the previous love symbol
      previousLoveSymbolIndex = randomIndex;
  
      // Create and style the love symbol
      const loveSymbol = document.createElement('span');
      loveSymbol.className = 'love-symbol';
      loveSymbol.innerHTML = loveSymbols[randomIndex];
      const { x, y } = getRandomPosition();
      loveSymbol.style.left = `${x}px`;
      loveSymbol.style.top = `${y}px`;
      document.body.appendChild(loveSymbol);
    }
  
    // Function to show love message
    function showLoveMessage(event) {
      const loveMessage = document.getElementById('loveMessage');
      loveMessage.style.display = 'block';
      loveMessage.style.top = `${event.clientY}px`;
      loveMessage.style.left = `${event.clientX}px`;
    }
  
    // Function to hide love message
    function hideLoveMessage() {
      document.getElementById('loveMessage').style.display = 'none';
    }
  
    // Create a love symbol initially and then periodically
    createLoveSymbol();
    setInterval(createLoveSymbol, 5000); // Adjust the interval as needed
  
    // Add event listener for mouseover to show love message
    document.body.addEventListener('mousemove', showLoveMessage);
  
    // Add event listener for mouseout to hide love message
    document.body.addEventListener('mouseout', hideLoveMessage);
  })();
        
  
  