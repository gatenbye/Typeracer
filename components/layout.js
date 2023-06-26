import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Hastighetstest för bredband'
export const siteTitle = 'Hastighetstest för bredband'
const str = `<span id="countdown" class="red"> 3 </span>
<span id="previous-words"></span>
<span id="highlighted-word" class="green"></span>
<span id="text"></span>
<br>
<br>
<div id="text-centerer">
    <input type="text" id="input" autofocus></input>
    <span id="wpm"> 0 wpm </span>
</div>
<script>
texts = ["Space is big. Really big. You just won't believe how vastly hugely mindbogglingly big it is. I mean you may think it's a long way down the road to the chemist, but that's just peanuts to space.", "The example of painting can teach us not only how to manage our own work, but how to work together. A lot of the great art of the past is the work of multiple hands, though there may only be one name on the wall next to it in the museum.", "No matter how bad things are, you can always make things worse. At the same time, it is often within your power to make them better. I learned this lesson well on New Year's Eve, 2001.", "She's got eyes of the bluest skies as if they thought of rain. I hate to look into those eyes and see an ounce of pain. Her hair reminds me of a warm safe place where as a child I'd hide and pray for the thunder and the rain to quietly pass me by.", "Keying text quickly is important, but it is more important to be able to make it look professional. Making the text readable involves positioning, style, and size."];
text = texts[3];
wordsAr = text.split(' ');
alpha = 'abcdefghijklmnopqrstuvwxyz';
upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
alphaAr = alpha.split('');
upperAlphaAr = upperAlpha.split('');
keyMap = {};
for(i = 65; i < 91; i++) {
    keyMap[alphaAr[i - 65]] = i;
}
for(i = 265; i < 291; i++) {
    keyMap[upperAlphaAr[i - 265]] = i;
}
nums = '0123456789';
numsAr = nums.split('');
for(i = 48; i < 58; i++) {
    keyMap[numsAr[i - 48]] = i;
}
keyMap[','] = 188;
keyMap['.'] = 190;
keyMap['?'] = 191;
keyMap[':'] = 186 + 200;
keyMap[';'] = 186;
keyMap["'"] = 192;
oppositeMap = {};
Object.keys(keyMap).forEach(function (key) { 
    oppositeMap[keyMap[key]] = key;
})
codes = [];
for(i = 0; i < wordsAr.length; i++) {
  codes.push([]);
  for(j = 0; j < wordsAr[i].length; j++) {
      codes[i].push(keyMap[wordsAr[i][j]]);
  };
}
noWords = codes.length;
input = document.getElementById('input');
currentIndex = 0;
currentWord = codes[currentIndex];
userWord = [];
caps = false;
countdownFinished = false;
firstLetter = false;
finished = false;
document.getElementById('highlighted-word').innerHTML = wordsAr[0]
document.getElementById('text').innerHTML = wordsAr.slice(1, wordsAr.length).join(' ');
document.getElementById('countdown').className = "red";
countdownTime = 0;
countdownTimer = setInterval(function(){
    countdownTime += 100;
    if(countdownTime == 1000) {
        countdown = document.getElementById('countdown');
        countdown.className = "orange";
        countdown.innerHTML = "2";
    } else if(countdownTime == 2000) {
        countdown = document.getElementById('countdown');
        countdown.className = "green";
        countdown.innerHTML = "1";
    } else if(countdownTime == 3000) {
        document.getElementById('input').style.opacity = 1.0;
        countdown = document.getElementById('countdown');
        countdown.className = "green";
        countdown.innerHTML = "0";
        startTime = (new Date()).getTime();
        countdownFinished = true;
    } else if(countdownTime == 3100) {
        document.getElementById('countdown').style.display = 'none';
        gameTimer = setInterval(gameTimer, 2000);
        clearInterval(countdownTimer);
    }
}, 100);
gameTime = 0;
gameTimer = function() {
                gameTime += 2;
                 if(!finished) {
                    wpm = document.getElementById('wpm');
                    wpm.innerHTML = Math.floor(currentIndex/gameTime * 60) + ' wpm';
                 } else {
                     clearInterval(gameTimer);
                 }
            }
updateColor = function() {
    if(checkIfMatching()) {
        document.getElementById('highlighted-word').className = "green";
    } else {
        document.getElementById('highlighted-word').className = "red";
    }
}
checkIfMatching = function() {
    matching = true;
    for(i = 0; i < userWord.length; i++) {
        if(userWord[i] != currentWord[i]) {
            matching = false;
        }
    }
    return matching;
}
checkIfWordsMatch = function() {
    if(currentWord.length == userWord.length && checkIfMatching()) {
        return true;   
    } else {
        return false;
    }
}
checkIfCapsOn = function(e) {
    if(countdownFinished) {
        s = String.fromCharCode(e.keyCode);
        if (s.toUpperCase() === s && e.keyCode >= 65 && e.keyCode <= 91) {
            if(!e.shiftKey) {
                caps = true;
            }
            userWord.push(e.keyCode + 200);
        } else {
            if(e.shiftKey) {
                caps = true;    
            }
            userWord.push(e.keyCode);
        }
        firstLetter = true;
        input.removeEventListener('keypress', checkIfCapsOn);
        updateColor();
    } else {
        e.preventDefault();
    }
};
input.addEventListener("keypress", checkIfCapsOn);
input.onkeydown = function(event) {
    if(firstLetter) {    
        if(currentIndex < noWords) {
            if(event.keyCode == 20) {
                caps = !caps;
            } else if(event.keyCode == 8) {
                userWord.pop();
                updateColor();
            } else if(event.keyCode == 32) {
                if(checkIfWordsMatch()) {
                    currentIndex++;
                    currentWord = codes[currentIndex];
                    userWord = [];
                    previousWords = document.getElementById('previous-words');
                    highlightedWord = document.getElementById('highlighted-word');
                    text = document.getElementById('text');
                    previousWords.innerHTML += " " + wordsAr[currentIndex - 1];
                    highlightedWord.innerHTML = wordsAr[currentIndex];
                    text.innerHTML = text.innerHTML.substring(wordsAr[currentIndex].length + 1);
                    document.getElementById('input').value = "";
                    event.preventDefault();
                } else {   
                    userWord.push(32);
                    updateColor();
                }
            } else {
                if(event.keyCode in oppositeMap || event.keyCode + 200 in oppositeMap) {
                    if(caps) {
                        if(event.shiftKey) {
                          userWord.push(event.keyCode);
                        } else {
                            userWord.push(event.keyCode + 200);
                        }
                    } else {
                        if(event.shiftKey) {
                          userWord.push(event.keyCode + 200);
                        } else {
                            userWord.push(event.keyCode);
                        }
                    }
                }
                updateColor();
                if(currentIndex == codes.length - 1) {
                    if(checkIfWordsMatch()) {
                        currentIndex++;
                        previousWords = document.getElementById('previous-words');
                        highlightedWord = document.getElementById('highlighted-word');
                        previousWords.innerHTML += " " + wordsAr[currentIndex - 1];
                        highlightedWord.innerHTML = "";
                        document.getElementById('input').value = "";
                        console.log(startTime);
                        wpm = document.getElementById('wpm');
                        wpm.innerHTML = Math.floor((currentIndex/((new Date()).getTime() - startTime) * 1000) * 60) + ' wpm';
                        finished = true;
                        event.preventDefault();
                    }
                }
            }
        }
    } else if(firstLetter) {
        event.preventDefault();
    }
};
document.onload = function() {  
  document.getElementById("input").focus();
}
</script>
<style>
.green {
    color: green;
}
.red {
    color: red;
}
.orange {
    color: orange;
}
#text-centerer {
    text-align: center;
}
#countdown {
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: -webkit-xxx-large;   
}
#input {
    opacity: 0.5;
    margin-right: 5px;
}
#wpm {
    position: absolute;
}
</style>
`

export default function Layout({ children, home }) {
  return (
    <div>
    <div dangerouslySetInnerHTML={{ __html: str }} />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to reduce your energy consumption with El Tok"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

    </div>
  )
}