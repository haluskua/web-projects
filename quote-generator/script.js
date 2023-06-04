let apiQuotes = [];

// Show New Quote

function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}
// Get Quotes From API

async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    //   fetch request
    const response = await fetch(apiUrl);
    // global variable
    apiQuotes = await response.json();
    // console.log(apiQuotes[12]);
    newQuote();
  } catch (error) {
    //   Catch Error Here
  }
}

// On Load
getQuotes();
