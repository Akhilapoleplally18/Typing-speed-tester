/* jshint esversion: 6 */
// Alphabets Section
// Alphabets Section
const easyTexts = [
  "abcdefg hijklmn opqrstu vwxyz",
  "zxywvut srqponm lkjihgf edcba",
  "abcdefghijklmnopqrstuvwxyz",
  "qwertyuiop asdfghjkl zxcvbnm",
  "a b c d e f g h i j k l m n o p q r s t u v w x y z"
];
const alphaText = document.getElementById("alphaText");
const alphaInput = document.getElementById("alphaInput");
const alphaStartBtn = document.getElementById("alphaStartBtn");
const alphaTime = document.getElementById("alphaTime");
const alphaWpm = document.getElementById("alphaWpm");
const alphaAccuracy = document.getElementById("alphaAccuracy");

let alphaInterval = null;
let alphaStartTime = null;
let alphaCurrentText = '';

function startAlphaTest() {
  alphaCurrentText = easyTexts[Math.floor(Math.random() * easyTexts.length)];
  alphaText.textContent = alphaCurrentText;
  alphaInput.value = "";
  alphaInput.disabled = false;
  alphaInput.focus();
  alphaTime.textContent = "0";
  alphaWpm.textContent = "0";
  alphaAccuracy.textContent = "0";
  if (alphaInterval) clearInterval(alphaInterval);
  alphaStartTime = Date.now();
  alphaInterval = setInterval(updateAlphaStats, 1000);
}

function updateAlphaStats() {
  const elapsed = Math.floor((Date.now() - alphaStartTime) / 1000);
  alphaTime.textContent = elapsed;
  updateAlphaPerformance();
  if (elapsed >= 60) endAlphaTest();
}

function endAlphaTest() {
  clearInterval(alphaInterval);
  alphaInput.disabled = true;
  updateAlphaPerformance();
}

function updateAlphaPerformance() {
  const typed = alphaInput.value;
  let correct = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === alphaCurrentText[i]) correct++;
  }
  const accuracy = typed.length > 0 ? (correct / typed.length) * 100 : 0;
  const words = typed.trim().length ? typed.trim().split(/\s+/).length : 0;
  const min = (Date.now() - alphaStartTime) / 60000;
  const wpm = min > 0 ? Math.round(words / min) : 0;
  alphaAccuracy.textContent = accuracy.toFixed(2);
  alphaWpm.textContent = wpm;
}

alphaInput.addEventListener("input", () => {
  updateAlphaPerformance();
  if (alphaInput.value === alphaCurrentText) endAlphaTest();
});
alphaStartBtn.addEventListener("click", startAlphaTest);

// Paragraphs Section
const mediumTexts = [
  "Technology enables communication across the globe.",
  "Healthy living involves proper sleep and nutrition.",
  "Typing quickly requires consistent practice and focus.",
  "Education empowers people to reach their goals successfully.",
  "Travel allows us to experience diverse cultures and ideas."
];

const hardTexts = [
  "Environmental conservation necessitates global cooperation and innovative solutions for a sustainable future.",
  "Precise experimentation and critical reasoning distinguish scientific advancement throughout history.",
  "Time management and self-discipline epitomize successful professionals in challenging working environments.",
  "Profound respect and thoughtful dialogue foster enduring relationships across cultures and generations.",
  "Complex algorithms and cryptographic methods ensure digital security in today’s interconnected society."
];

const paraText = document.getElementById("paraText");
const paraInput = document.getElementById("paraInput");
const paraStartBtn = document.getElementById("paraStartBtn");
const paraTime = document.getElementById("paraTime");
const paraWpm = document.getElementById("paraWpm");
const paraAccuracy = document.getElementById("paraAccuracy");
const levelSelect = document.getElementById("level");

let paraInterval = null;
let paraStartTime = null;
let paraCurrentText = '';

function getParagraphByLevel(level) {
  let texts;
  if (level === "medium") texts = mediumTexts;
  else texts = hardTexts;
  return texts[Math.floor(Math.random() * texts.length)];
}

function startParaTest() {
  const level = levelSelect.value;
  paraCurrentText = getParagraphByLevel(level);
  paraText.textContent = paraCurrentText;
  paraInput.value = "";
  paraInput.disabled = false;
  paraInput.focus();
  paraTime.textContent = "0";
  paraWpm.textContent = "0";
  paraAccuracy.textContent = "0";
  if (paraInterval) clearInterval(paraInterval);
  paraStartTime = Date.now();
  paraInterval = setInterval(updateParaStats, 1000);
}

function updateParaStats() {
  const elapsed = Math.floor((Date.now() - paraStartTime) / 1000);
  paraTime.textContent = elapsed;
  updateParaPerformance();
  if (elapsed >= 60) endParaTest();
}

function endParaTest() {
  clearInterval(paraInterval);
  paraInput.disabled = true;
  updateParaPerformance();
}

function updateParaPerformance() {
  const typed = paraInput.value;
  let correct = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === paraCurrentText[i]) correct++;
  }
  const accuracy = typed.length > 0 ? (correct / typed.length) * 100 : 0;
  const words = typed.trim().length ? typed.trim().split(/\s+/).length : 0;
  const min = (Date.now() - paraStartTime) / 60000;
  const wpm = min > 0 ? Math.round(words / min) : 0;
  paraAccuracy.textContent = accuracy.toFixed(2);
  paraWpm.textContent = wpm;
}

paraInput.addEventListener("input", () => {
  updateParaPerformance();
  if (paraInput.value === paraCurrentText) endParaTest();
});
paraStartBtn.addEventListener("click", startParaTest);
