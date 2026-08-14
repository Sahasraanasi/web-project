const users = [
    {
        name: "John Doe",
        gender: "Male",
        image: "john.png"
    },
    {
        name: "Jane Doe",
        gender: "Female",
        image: "jane.png"
    }
];

let currentUser = 0;

const userImage = document.getElementById("userImage");
const userName = document.getElementById("userName");
const userGender = document.getElementById("userGender");

function displayUser(index) {
    currentUser = index;

    userImage.src = users[index].image;
    userName.textContent = users[index].name;
    userGender.textContent = "Gender: " + users[index].gender;
}

// Toggle between John and Jane
document.getElementById("toggleBtn").addEventListener("click", () => {
    if (currentUser === 0) {
        displayUser(1);
    } else {
        displayUser(0);
    }
});

// Select a random user
// Get a random user from API
document.getElementById("randomBtn").addEventListener("click", () => {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];

            userImage.src = user.picture.large;
            userName.textContent = `${user.name.first} ${user.name.last}`;
            userGender.textContent = `Gender: ${user.gender}`;
        })
        .catch(error => console.log(error));
});