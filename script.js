// Quiz Answer Checker
    function checkAnswer(btn, isCorrect) {
      if (isCorrect) {
        btn.style.backgroundColor = "green";
        alert("Correct!");
      } else {
        btn.style.backgroundColor = "red";
        alert("Oops! Try again.");
      }
    }

    // Fetch Joke from API
    async function getJoke() {
      const jokeElement = document.getElementById('jokeDisplay');
      try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
        const data = await response.json();
        jokeElement.textContent = data.joke || "Couldn't fetch a joke. Try again!";
      } catch (error) {
        jokeElement.textContent = "Error fetching joke.";
      }
    }