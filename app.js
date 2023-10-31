// Header Animation

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.padding = "8px 5vw";
  } else {
    document.getElementById("header").style.padding = "25px 8vw";
  }
}

// Typing Text    ************************

const words = ["Video Editor", "Photo Editor"];
let j = 0;
let timer;

function typingEffect() {
  let word = words[j].split("");
  var loopTyping = function () {
    if (word.length > 0) {
      document.getElementById("word").innerHTML += word.shift();
    } else {
      deletingEffect();
      return false;
    }
    timer = setTimeout(loopTyping, 200);
  };
  loopTyping();
}

function deletingEffect() {
  let word = words[j].split("");
  var loopDeleting = function () {
    if (word.length > 0) {
      word.pop();
      document.getElementById("word").innerHTML = word.join("");
    } else {
      if (words.length > j + 1) {
        j++;
      } else {
        j = 0;
      }
      typingEffect();
      return false;
    }
    timer = setTimeout(loopDeleting, 100);
  };
  loopDeleting();
}

typingEffect();
