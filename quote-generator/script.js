const quoteContainer = document.getElementById("quote-generator");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];

// Show New Quote

function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  // Check if Author field is blank and replace it with 'Unknown'
  if (!quote.author || quote.author === "") {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  // Check Quote length to determine styling
  if (quote.text.length > 100) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;

  //   console.log(quote);
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

// *************************************  Local Directory  *************************************

const quoteData = [
  {
    q: "While some of us act without thinking, too many of us think without acting.",
    a: "Dan Millman",
    c: "75",
    h: "<blockquote>&ldquo;While some of us act without thinking, too many of us think without acting.&rdquo; &mdash; <footer>Dan Millman</footer></blockquote>",
  },
  {
    q: "Things turn out best for the people who make the best of the way things turn out.",
    a: "John Wooden",
    c: "81",
    h: "<blockquote>&ldquo;Things turn out best for the people who make the best of the way things turn out.&rdquo; &mdash; <footer>John Wooden</footer></blockquote>",
  },
  {
    q: "You must find the place inside yourself where nothing is impossible.",
    a: "Deepak Chopra",
    c: "68",
    h: "<blockquote>&ldquo;You must find the place inside yourself where nothing is impossible.&rdquo; &mdash; <footer>Deepak Chopra</footer></blockquote>",
  },
  {
    q: "He who cheats the earth will be cheated by the earth.",
    a: "Chinese Proverb",
    c: "53",
    h: "<blockquote>&ldquo;He who cheats the earth will be cheated by the earth.&rdquo; &mdash; <footer>Chinese Proverb</footer></blockquote>",
  },
  {
    q: "You live by what you thrill to, and there's the end of it.",
    a: "D. H. Lawrence",
    c: "58",
    h: "<blockquote>&ldquo;You live by what you thrill to, and there's the end of it.&rdquo; &mdash; <footer>D. H. Lawrence</footer></blockquote>",
  },
  {
    q: "Nature loves to hide.",
    a: "Heraclitus",
    c: "21",
    h: "<blockquote>&ldquo;Nature loves to hide.&rdquo; &mdash; <footer>Heraclitus</footer></blockquote>",
  },
  {
    q: "Where there is no struggle, there is no strength. ",
    a: "Oprah Winfrey",
    c: "50",
    h: "<blockquote>&ldquo;Where there is no struggle, there is no strength. &rdquo; &mdash; <footer>Oprah Winfrey</footer></blockquote>",
  },
  {
    q: "Do it with passion, or not at all.",
    a: "Rosa Nouchette Carey",
    c: "34",
    h: "<blockquote>&ldquo;Do it with passion, or not at all.&rdquo; &mdash; <footer>Rosa Nouchette Carey</footer></blockquote>",
  },
  {
    q: "Do not stop thinking of life as an adventure.",
    a: "Eleanor Roosevelt",
    c: "45",
    h: "<blockquote>&ldquo;Do not stop thinking of life as an adventure.&rdquo; &mdash; <footer>Eleanor Roosevelt</footer></blockquote>",
  },
  {
    q: "The mirror is a worthless invention. The only way to truly see yourself is in the reflection of someone elses. eyes.",
    a: "Voltaire",
    c: "116",
    h: "<blockquote>&ldquo;The mirror is a worthless invention. The only way to truly see yourself is in the reflection of someone elses. eyes.&rdquo; &mdash; <footer>Voltaire</footer></blockquote>",
  },
  {
    q: "If you focus on success, you'll have stress. But if you pursue excellence, success will be guaranteed.",
    a: "Deepak Chopra",
    c: "102",
    h: "<blockquote>&ldquo;If you focus on success, you'll have stress. But if you pursue excellence, success will be guaranteed.&rdquo; &mdash; <footer>Deepak Chopra</footer></blockquote>",
  },
  {
    q: "Your greatest asset is your earning ability. Your greatest resource is your time.",
    a: "Brian Tracy",
    c: "81",
    h: "<blockquote>&ldquo;Your greatest asset is your earning ability. Your greatest resource is your time.&rdquo; &mdash; <footer>Brian Tracy</footer></blockquote>",
  },
  {
    q: "The older you get, the more you understand how your conscience works.",
    a: "Criss Jami",
    c: "69",
    h: "<blockquote>&ldquo;The older you get, the more you understand how your conscience works.&rdquo; &mdash; <footer>Criss Jami</footer></blockquote>",
  },
  {
    q: "There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.",
    a: "Denis Waitley",
    c: "122",
    h: "<blockquote>&ldquo;There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.&rdquo; &mdash; <footer>Denis Waitley</footer></blockquote>",
  },
  {
    q: "The most courageous act is still to think for yourself. Aloud.",
    a: "Coco Chanel",
    c: "62",
    h: "<blockquote>&ldquo;The most courageous act is still to think for yourself. Aloud.&rdquo; &mdash; <footer>Coco Chanel</footer></blockquote>",
  },
  {
    q: "Happiness is not something ready made. It comes from your own actions.",
    a: "Dalai Lama",
    c: "70",
    h: "<blockquote>&ldquo;Happiness is not something ready made. It comes from your own actions.&rdquo; &mdash; <footer>Dalai Lama</footer></blockquote>",
  },
  {
    q: "He who can no longer pause to wonder and stand rapt in awe, is as good as dead; his eyes are closed. ",
    a: "Albert Einstein",
    c: "101",
    h: "<blockquote>&ldquo;He who can no longer pause to wonder and stand rapt in awe, is as good as dead; his eyes are closed. &rdquo; &mdash; <footer>Albert Einstein</footer></blockquote>",
  },
  {
    q: "People do not decide their futures, they decide their habits and their habits decide their futures.",
    a: "Gary Keller",
    c: "99",
    h: "<blockquote>&ldquo;People do not decide their futures, they decide their habits and their habits decide their futures.&rdquo; &mdash; <footer>Gary Keller</footer></blockquote>",
  },
  {
    q: "I hear and I forget. I see and I remember. I do and I understand. ",
    a: "Confucius",
    c: "66",
    h: "<blockquote>&ldquo;I hear and I forget. I see and I remember. I do and I understand. &rdquo; &mdash; <footer>Confucius</footer></blockquote>",
  },
  {
    q: "Focus is a matter of deciding what things you're not going to do.",
    a: "John Carmack",
    c: "65",
    h: "<blockquote>&ldquo;Focus is a matter of deciding what things you're not going to do.&rdquo; &mdash; <footer>John Carmack</footer></blockquote>",
  },
  {
    q: "Without the confidence, nothing can be accomplished.",
    a: "Sathya Sai Baba",
    c: "52",
    h: "<blockquote>&ldquo;Without the confidence, nothing can be accomplished.&rdquo; &mdash; <footer>Sathya Sai Baba</footer></blockquote>",
  },
  {
    q: "Nothing you do is going to matter that much in the long run. Don't take yourself so seriously.",
    a: "Naval Ravikant",
    c: "94",
    h: "<blockquote>&ldquo;Nothing you do is going to matter that much in the long run. Don't take yourself so seriously.&rdquo; &mdash; <footer>Naval Ravikant</footer></blockquote>",
  },
  {
    q: "Yesterday is but today's memory, tomorrow is today's dream.",
    a: "Kahlil Gibran",
    c: "59",
    h: "<blockquote>&ldquo;Yesterday is but today's memory, tomorrow is today's dream.&rdquo; &mdash; <footer>Kahlil Gibran</footer></blockquote>",
  },
  {
    q: "A real decision is measured by the fact that you've taken a new action. If there's no action, you haven't truly decided.",
    a: "Tony Robbins",
    c: "120",
    h: "<blockquote>&ldquo;A real decision is measured by the fact that you've taken a new action. If there's no action, you haven't truly decided.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>",
  },
  {
    q: "Definiteness of purpose is the starting point of all achievement. ",
    a: "W. Clement Stone",
    c: "66",
    h: "<blockquote>&ldquo;Definiteness of purpose is the starting point of all achievement. &rdquo; &mdash; <footer>W. Clement Stone</footer></blockquote>",
  },
  {
    q: "If you want to be successful, you have to jump, there's no way around it.",
    a: "Steve Harvey",
    c: "73",
    h: "<blockquote>&ldquo;If you want to be successful, you have to jump, there's no way around it.&rdquo; &mdash; <footer>Steve Harvey</footer></blockquote>",
  },
  {
    q: "Don't look for meaning in the words. Listen to the silences.",
    a: "Samuel Beckett",
    c: "60",
    h: "<blockquote>&ldquo;Don't look for meaning in the words. Listen to the silences.&rdquo; &mdash; <footer>Samuel Beckett</footer></blockquote>",
  },
  {
    q: "What you become is far more important than what you get.",
    a: "Jim Rohn",
    c: "56",
    h: "<blockquote>&ldquo;What you become is far more important than what you get.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>",
  },
  {
    q: "Have the courage to be ignorant of a great number of things, in order to avoid the calamity of being ignorant of everything.",
    a: "Sydney Smith",
    c: "124",
    h: "<blockquote>&ldquo;Have the courage to be ignorant of a great number of things, in order to avoid the calamity of being ignorant of everything.&rdquo; &mdash; <footer>Sydney Smith</footer></blockquote>",
  },
  {
    q: "Fear not the path of Truth for the lack of People walking on it.",
    a: "Robert F. Kennedy",
    c: "64",
    h: "<blockquote>&ldquo;Fear not the path of Truth for the lack of People walking on it.&rdquo; &mdash; <footer>Robert F. Kennedy</footer></blockquote>",
  },
  {
    q: "Honesty is the first chapter in the book of wisdom.",
    a: "Thomas Jefferson",
    c: "51",
    h: "<blockquote>&ldquo;Honesty is the first chapter in the book of wisdom.&rdquo; &mdash; <footer>Thomas Jefferson</footer></blockquote>",
  },
  {
    q: "The less people know, the more stubbornly they know it.",
    a: "Osho",
    c: "55",
    h: "<blockquote>&ldquo;The less people know, the more stubbornly they know it.&rdquo; &mdash; <footer>Osho</footer></blockquote>",
  },
  {
    q: "It doesn't matter where you are coming from. All that matters is where you are going. ",
    a: "Brian Tracy",
    c: "86",
    h: "<blockquote>&ldquo;It doesn't matter where you are coming from. All that matters is where you are going. &rdquo; &mdash; <footer>Brian Tracy</footer></blockquote>",
  },
  {
    q: "Obstacles don't block the path, they are the path.",
    a: "Zen Proverb",
    c: "50",
    h: "<blockquote>&ldquo;Obstacles don't block the path, they are the path.&rdquo; &mdash; <footer>Zen Proverb</footer></blockquote>",
  },
  {
    q: "Formal education will make you a living, self-education will make you a fortune.",
    a: "Jim Rohn",
    c: "80",
    h: "<blockquote>&ldquo;Formal education will make you a living, self-education will make you a fortune.&rdquo; &mdash; <footer>Jim Rohn</footer></blockquote>",
  },
  {
    q: "Everything you look at can become a fairy tale and you can get a story from everything you touch.",
    a: "Hans Christian Andersen",
    c: "97",
    h: "<blockquote>&ldquo;Everything you look at can become a fairy tale and you can get a story from everything you touch.&rdquo; &mdash; <footer>Hans Christian Andersen</footer></blockquote>",
  },
  {
    q: "A dream doesn't become reality through magic it takes sweat, determination and hard work.",
    a: "Colin Powell",
    c: "89",
    h: "<blockquote>&ldquo;A dream doesn't become reality through magic it takes sweat, determination and hard work.&rdquo; &mdash; <footer>Colin Powell</footer></blockquote>",
  },
  {
    q: "Our joy does not have to be based on our circumstances.",
    a: "Joyce Meyer",
    c: "55",
    h: "<blockquote>&ldquo;Our joy does not have to be based on our circumstances.&rdquo; &mdash; <footer>Joyce Meyer</footer></blockquote>",
  },
  {
    q: "Do not be so open-minded that your brains fall out.",
    a: "Gilbert Chesterton",
    c: "51",
    h: "<blockquote>&ldquo;Do not be so open-minded that your brains fall out.&rdquo; &mdash; <footer>Gilbert Chesterton</footer></blockquote>",
  },
  {
    q: "It's what you do in the present that will redeem the past and thereby change the future.",
    a: "Paulo Coelho",
    c: "88",
    h: "<blockquote>&ldquo;It's what you do in the present that will redeem the past and thereby change the future.&rdquo; &mdash; <footer>Paulo Coelho</footer></blockquote>",
  },
  {
    q: "Don't talk about what you have done or what you are going to do.",
    a: "Thomas Jefferson",
    c: "64",
    h: "<blockquote>&ldquo;Don't talk about what you have done or what you are going to do.&rdquo; &mdash; <footer>Thomas Jefferson</footer></blockquote>",
  },
  {
    q: "It is often safer to be in chains than to be free. ",
    a: "Franz Kafka",
    c: "51",
    h: "<blockquote>&ldquo;It is often safer to be in chains than to be free. &rdquo; &mdash; <footer>Franz Kafka</footer></blockquote>",
  },
  {
    q: "You are a function of what the whole universe is doing in the same way that a wave is a function of what the whole ocean is doing.",
    a: "Alan Watts",
    c: "130",
    h: "<blockquote>&ldquo;You are a function of what the whole universe is doing in the same way that a wave is a function of what the whole ocean is doing.&rdquo; &mdash; <footer>Alan Watts</footer></blockquote>",
  },
  {
    q: "Pleasure in the job puts perfection in the work.",
    a: "Aristotle",
    c: "48",
    h: "<blockquote>&ldquo;Pleasure in the job puts perfection in the work.&rdquo; &mdash; <footer>Aristotle</footer></blockquote>",
  },
  {
    q: "Not all of us can do great things. But we can do small things with great love.",
    a: "Mother Teresa",
    c: "78",
    h: "<blockquote>&ldquo;Not all of us can do great things. But we can do small things with great love.&rdquo; &mdash; <footer>Mother Teresa</footer></blockquote>",
  },
  {
    q: "The scariest moment is always just before you start. After that, things can only get better.",
    a: "Stephen King",
    c: "92",
    h: "<blockquote>&ldquo;The scariest moment is always just before you start. After that, things can only get better.&rdquo; &mdash; <footer>Stephen King</footer></blockquote>",
  },
  {
    q: "It is not what we get. But who we become, what we contribute... that gives meaning to our lives.",
    a: "Tony Robbins",
    c: "96",
    h: "<blockquote>&ldquo;It is not what we get. But who we become, what we contribute... that gives meaning to our lives.&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>",
  },
  {
    q: "The purpose of life is the expansion of happiness.",
    a: "Deepak Chopra",
    c: "50",
    h: "<blockquote>&ldquo;The purpose of life is the expansion of happiness.&rdquo; &mdash; <footer>Deepak Chopra</footer></blockquote>",
  },
  {
    q: "Help others for all the times that you have been ignored. Be kind to others, for all the times that you have been scorned.",
    a: "Ming-Dao Deng",
    c: "122",
    h: "<blockquote>&ldquo;Help others for all the times that you have been ignored. Be kind to others, for all the times that you have been scorned.&rdquo; &mdash; <footer>Ming-Dao Deng</footer></blockquote>",
  },
  {
    q: "Those who attain the middle Dominate the whole.",
    a: "Ming-Dao Deng",
    c: "47",
    h: "<blockquote>&ldquo;Those who attain the middle Dominate the whole.&rdquo; &mdash; <footer>Ming-Dao Deng</footer></blockquote>",
  },
];

function randomQuote() {
  const randomPick = quoteData[Math.floor(Math.random() * quoteData.length)];
  const justQuote = randomPick.q;
  console.log(justQuote);
}

// On page load
randomQuote();
