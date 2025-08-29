// ----- Heart Icon Functionality -----

// reading the input
const hearts = document.getElementsByClassName("heart-icon");
const heartIconCounter = document.getElementById("heart-icon-counter");

for (const heart of hearts) {
  heart.addEventListener("click", function () {
    const currentHeartCount = parseInt(heartIconCounter.innerText);

    // filling the heart color when it's clicked and when clicked again decreasing the count number and removing the filled color

    if (heart.classList.contains("fa-solid")) {
      heart.classList.remove("fa-solid", "text-red-500");
      heart.classList.add("fa-regular");

      const updatedHeartCount = currentHeartCount - 1;
      heartIconCounter.innerText = updatedHeartCount;
    } else {
      heart.classList.remove("fa-regular");
      heart.classList.add("fa-solid", "text-red-500");
      // updating the count value
      const updatedHeartCount = currentHeartCount + 1;

      // initializing the new count value
      heartIconCounter.innerText = updatedHeartCount;
    }
  });
}

// ----- Call Button Functionality -----

const callButtons = document.getElementsByClassName("btn-call");

const serviceNames = document.getElementsByClassName("service-name");

const serviceNumbers = document.getElementsByClassName("service-number");

const totalCoins = document.getElementById("coin");

const callHistory = document.getElementById("call-history");

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
      alert(`❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।`);
    }
    totalCoins.innerText = coin;
  });
}

// Clear History Section

const clearHistoryButton = document.getElementById("btn-clear-history");

clearHistoryButton.addEventListener("click", function () {
  callHistory.innerHTML = "";
});

// copy button section --> Challenge Part

const copyCount = document.getElementById("copy-count");
const copyButtons = document.getElementsByClassName("btn-copy");

for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener("click", function () {
    const currentCopyCount = parseInt(copyCount.innerText);

    const updatedCopyCount = currentCopyCount + 1;

    copyCount.innerText = updatedCopyCount;

    // copy alert text

    const serviceNumber = serviceNumbers[i].innerText;
    alert(`নম্বর কপি হয়েছে: ${serviceNumber}`);

    // copy number to clipboard

    navigator.clipboard
      .writeText(serviceNumber)
      .then(() => console.log(`Copied: ${serviceNumber}`))
      .catch((err) => console.error("Failed to copy: ", err));
  });
}
