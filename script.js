let words = [];
let index = 0;
let interval = null;

function formatWord(word) {
  const maxPivot = 10; // fixed ORP position (character-based)
  const len = word.length;
  const pivotIndex = Math.floor(len / 2);

  const before = word.slice(0, pivotIndex);
  const pivot = word[pivotIndex];
  const after = word.slice(pivotIndex + 1);

  const padCount = maxPivot - before.length;
  const padding = padCount > 0 ? "&nbsp;".repeat(padCount) : "";

  return `${padding}${before}<span class="pivot">${pivot}</span>${after}`;
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


