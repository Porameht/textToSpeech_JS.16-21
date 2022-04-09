(() => {
  const message = new SpeechSynthesisUtterance();

  function onVoicesChanged() {
    const voices = speechSynthesis.getVoices();
    const thVoice = voices.find((voice) => voice.lang === "th-TH");
    message.voice = thVoice;
  }

  function onClick(event) {
    message.text = event.target.getAttribute("alt");
    speechSynthesis.speak(message);
  }
  function run() {
    speechSynthesis.addEventListener("voiceschanged", onVoicesChanged);
    const imgElem = Array.from(document.querySelectorAll("img"));
    imgElem.forEach((imgElem) => addEventListener("click", onClick));
  }
  run();
})();
