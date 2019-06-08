const btn = document.querySelector('.talk');
const content = document.querySelector('.written-command');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = () => {
  console.log('Speak');
}

recognition.onresult = (e) => {
  const resultIndex = e.resultIndex;
  const result = e.results[resultIndex][0].transcript;
  content.textContent = result;
  voice(result.toLowerCase());
}

//listener
btn.addEventListener('click', () => {
  recognition.start();
});

const voice = (msg) => {
  const speech = new SpeechSynthesisUtterance();
  let finalText = 'I did not understand';
  if(msg.includes('all websites')) {
    finalText = 'Ok';
    window.open('https://www.facebook.com/');
    window.open('https://web.whatsapp.com/');
    window.open('https://youtube.com');
    window.open('https://outlook.live.com/mail/inbox');
    window.open('https://mail.google.com/mail/u/0/#inbox');
    window.open('https://trello.com/kevinbeltraodemelo/boards');
    window.open('https://github.com/');
  }
  else if(
    msg.includes('basic websites')) {
    finalText = 'Ok';
    window.open('https://www.facebook.com/');
    window.open('https://web.whatsapp.com/');
    window.open('https://youtube.com');
    window.open('https://outlook.live.com/mail/inbox');
  }
  else if(
    msg.includes('workspace')) {
    finalText = 'Ok';
    window.open('https://github.com/');
    window.open('https://trello.com/kevinbeltraodemelo/boards');
    window.open('https://mail.google.com/mail/u/0/#inbox');
  }
  else if(
    msg.includes('how are you') || 
    msg.includes('how you doing')
    ) {
    finalText = 'I\'m fine, thanks';
  }
  else if(
    msg.includes('good')
    ) {
    finalText = 'Amazing';
  }
  else if(
    msg.includes('hi') ||
    msg.includes('hello')
  ) {
    finalText = 'Hello!';
  }

    speech.text = finalText;

  window.speechSynthesis.speak(speech);
}