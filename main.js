const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Do not wait for leaders; do it alone, person to person. - Mother Teresa",
  "The best way to predict the future is to create it. - Peter Drucker",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
  "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. - Thomas A. Edison",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
  "Every strike brings me closer to the next home run. - Babe Ruth",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Don't let yesterday take up too much of today. - Will Rogers",
  "The only source of knowledge is experience. - Albert Einstein",
  "Simplicity is the key to brilliance. - Bruce Lee",
  "A journey of a thousand miles begins with a single step. - Lao Tzu",
  "It always seems impossible until it's done. - Nelson Mandela",
  "The harder you work for something, the greater you'll feel when you achieve it. - Anonymous",
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  "Change your life today. Don't gamble on the future, act now, without delay. - Simone de Beauvoir",
  "Do one thing every day that scares you. - Eleanor Roosevelt",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "Life is short, and it is up to you to make it sweet. - Sarah Louise Delany",
  "Our lives begin to end the day we become silent about things that matter. - Martin Luther King Jr.",
  "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
  "Success is not in what you have, but who you are. - Bo Bennett",
  "The best time to plant a tree was 20 years ago. The second-best time is now. - Chinese Proverb",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
  "The secret of getting ahead is getting started. - Mark Twain",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
  "Dream big and dare to fail. - Norman Vaughan",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
];

const paragraph = document.getElementById("quotes");
const historyList = document.getElementById("historyList");

//generate ramdom
function generateRandom() {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  const randomValue = quotes[randomIndex];

  paragraph.textContent = randomValue;
  const history = JSON.parse(localStorage.getItem("quotesHistory")) || [];
  history.push(randomValue);
  localStorage.setItem("quotesHistory", JSON.stringify(history));

  return randomValue;
}

const view_btm = document.getElementById("view");
const viewHistory = document.getElementById("viewHistory");

view_btm.onclick = () => {
  const history = JSON.parse(localStorage.getItem("quotesHistory")) || [];

  historyList.innerHTML = ""; // clearing history
  history.forEach((quote, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Quote ${index + 1}: ${quote}`;
    historyList.appendChild(listItem);
  });
};

