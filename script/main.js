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

// ----- Call Button Functionality -----

const callButtons = document.getElementsByClassName("btn-call");

const serviceNames = document.getElementsByClassName("service-name");

const serviceNumbers = document.getElementsByClassName("service-number");

const totalCoins = document.getElementById("coin");

const callHistory = document.getElementById("call-history-container");

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function () {
    const serviceName = serviceNames[i].innerText;
    const serviceNumber = serviceNumbers[i].innerText;

    let coin = parseInt(totalCoins.innerText);
    if (coin > 20) {
      alert(`☎️ Calling ${serviceName} ${serviceNumber}...`);
      coin -= 20;

      const time = new Date().toLocaleTimeString();

      const div = document.createElement("div");
      div.innerHTML = `
            <div
              class="flex justify-between items-center p-4 bg-gray-100 mt-4 rounded-lg"
            >
              <div>
                <h2>${serviceName}</h2>
                <p>${serviceNumber}</p>
              </div>
              <div>
                <p>${time}</p>
              </div>
            </div>`;

      callHistory.appendChild(div);
    } else {
      alert("Not enough coin");
    }
    totalCoins.innerText = coin;
  });
}
