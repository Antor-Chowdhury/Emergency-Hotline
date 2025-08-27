// ----- Heart Icon Functionality -----

// reading the input
const hearts = document.getElementsByClassName("heart-icon");
const heartIconCounter = document.getElementById("heart-icon-counter");

for (const heart of hearts) {
  heart.addEventListener("click", function () {
    const currentHeartCount = parseInt(heartIconCounter.innerText);

    // updating the count value
    const updatedHeartCount = currentHeartCount + 1;

    // initializing the new count value
    heartIconCounter.innerText = updatedHeartCount;
  });
}
