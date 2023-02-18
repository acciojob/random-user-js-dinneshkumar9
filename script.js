const userPhoto = document.getElementById("user-photo");
const userName = document.getElementById("user-name");
const ageButton = document.querySelector('button[data-attr="age"]');
const emailButton = document.querySelector('button[data-attr="email"]');
const phoneButton = document.querySelector('button[data-attr="phone"]');
const ageInfo = document.getElementById("age");
const emailInfo = document.getElementById("email");
const phoneInfo = document.getElementById("phone");
const additionalInfo = document.getElementById("additional-info");

function displayUserInfo(userData) {
  userPhoto.src = userData.picture.large;
  userName.textContent = `${userData.name.first} ${userData.name.last}`;
}

function displayAgeInfo(userData) {
  additionalInfo.innerHTML = "";
  ageInfo.textContent = `Age: ${userData.dob.age}`;
  additionalInfo.appendChild(ageInfo);
}

function displayEmailInfo(userData) {
  additionalInfo.innerHTML = "";
  emailInfo.textContent = `Email: ${userData.email}`;
  additionalInfo.appendChild(emailInfo);
}

function displayPhoneInfo(userData) {
  additionalInfo.innerHTML = "";
  phoneInfo.textContent = `Phone: ${userData.phone}`;
  additionalInfo.appendChild(phoneInfo);
}

function getUser() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      const userData = data.results[0];
      displayUserInfo(userData);
      ageButton.addEventListener("click", function () {
        displayAgeInfo(userData);
      });
      emailButton.addEventListener("click", function () {
        displayEmailInfo(userData);
      });
      phoneButton.addEventListener("click", function () {
        displayPhoneInfo(userData);
      });
    });
}

getUser();
const getUserr = document.getElementById('getUser');
getUserr.addEventListener('click', getUser);