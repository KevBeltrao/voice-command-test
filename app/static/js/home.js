const btn = document.querySelector('.talk');
const content = document.querySelector('.written-command');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = () => {
  console.log('Speak');
  btn.style.backgroundColor = 'red';
}

recognition.onresult = (e) => {
  btn.style.backgroundColor = '#fff';
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

/******************************************************************************************/


const httpGet = (url, callback) => {
  const request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      callback(request.responseText);
    } else {
      // We reached our target server, but it returned an error
      console.log('server error');
    }
  };

  request.onerror = () => {
    // There was a connection error of some sort
    console.log('connection error');
  };

  request.send();
}

setInterval(() => {
  httpGet('/msgs', (res) => {
    const divMsgs = document.querySelector('.list');
    divMsgs.innerHTML = '';
    const msgs = JSON.parse(res);

    Object.keys(msgs).reverse().forEach((key) => {
      divMsgs.innerHTML += `
        <li class="item">${msgs[key]}</li>
      `;
    });
  });
}, 100);
