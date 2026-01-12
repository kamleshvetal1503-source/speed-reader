let words = [];
let index = 0;
let interval = null;

function formatWord(word) {
  const len = word.length;
  const pivotIndex = Math.floor(len / 2);

  return `
    ${word.slice(0, pivotIndex)}
    <span class="pivot">${word[pivotIndex]}</span>
    ${word.slice(pivotIndex + 1)}
  `;
}

function start() {
  if (interval) return;

  const text = document.getElementById("textInput").value;
  if (!text) {
    alert("Please paste some text to read.");
    return;
  }

  words = text.split(/\s+/);
  const wpm = document.getElementById("wpm").value;
  const delay = 60000 / wpm;

  interval = setInterval(() => {
    if (index >= words.length) {
      pause();
      return;
    }
    document.getElementById("word").innerHTML = formatWord(words[index]);
    index++;
  }, delay);
}

function pause() {
  clearInterval(interval);
  interval = null;
}

function resetReader() {
  pause();
  index = 0;
  document.getElementById("word").textContent = "Ready?";
}
