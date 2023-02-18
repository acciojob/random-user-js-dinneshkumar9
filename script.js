//your code here
const getUserButton = document.getElementById('getUser');
const userPhoto = document.getElementById('user-photo');
const userName = document.getElementById('user-name');
const ageButton = document.querySelector('button[data-attr="age"]');
const emailButton = document.querySelector('button[data-attr="email"]');
const phoneButton = document.querySelector('button[data-attr="phone"]');
const ageInfo = document.getElementById('age');
const emailInfo = document.getElementById('email');
const phoneInfo = document.getElementById('phone');
const additionalInfo = document.getElementById('additional-info');

function displayUserInfo(userData) {
    
  userPhoto.src = userData.picture.large;
  userName.textContent = `${userData.name.first} ${userData.name.last}`;
  ageInfo.textContent = `Age: ${userData.dob.age}`;
  emailInfo.textContent = `Email: ${userData.email}`;
  phoneInfo.textContent = `Phone: ${userData.phone}`;
}

function getUser() {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      const userData = data.results[0];
      displayUserInfo(userData);
    });
}

getUserButton.addEventListener('click', getUser);

ageButton.addEventListener('click', function() {
  additionalInfo.innerHTML = '';
  additionalInfo.appendChild(ageInfo);
});

emailButton.addEventListener('click', function() {
  additionalInfo.innerHTML = '';
  additionalInfo.appendChild(emailInfo);
});

phoneButton.addEventListener('click', function() {
  additionalInfo.innerHTML = '';
  additionalInfo.appendChild(phoneInfo);
});
