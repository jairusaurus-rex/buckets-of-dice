export function speak(text: string) {
  // Stop any currently playing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.volume = 1;

  utterance.lang = "en-US";

  window.speechSynthesis.speak(utterance);
}