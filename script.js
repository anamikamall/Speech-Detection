window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;  //if not set then when u stop speaking then only it gives output
recognition.lang = 'en-US';

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');

    //   const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
      p.textContent = transcript;
      if(e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
      }

      if(transcript.includes('Unicorn')){
        console.log("🦄");
      }
    console.log(transcript);
});

recognition.addEventListener('end', recognition.start);
recognition.start();