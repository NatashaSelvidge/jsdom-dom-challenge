let counter = document.querySelector("#counter");
let count = parseInt(counter.textContent.trim());



let plus = document.querySelector("#plus");
plus.addEventListener("click", handlePlus);

function handlePlus(Event) {
  Event.preventDefault();
  count += 1;
  counter.textContent = count;
}

let minus = document.querySelector("#minus");
minus.addEventListener("click", handleMinus);

function handleMinus(Event) {
  Event.preventDefault();
  count -= 1;
  if (counter < 0) {
    count = 0;
  }
  counter.textContent = count;
}

let pause = document.querySelector("#pause");
pause.addEventListener("click", handlePause);

function handlePause() {}

let heart = document.querySelector("#heart");
heart.addEventListener("click", handleLike);

function handleLike(Event) {
  Event.preventDefault();
  let likes = 0;
  likes += 1;

  let likesList = document.querySelector(".likes");
  let currentLikes = document.createElement("li");
  currentLikes.innerText =
    counter.innerText + " has been liked " + likes + " time(s)";

  likesList.appendChild(currentLikes);
}
