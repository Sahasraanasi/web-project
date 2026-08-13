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
document.getElementById("randomBtn").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * users.length);
    displayUser(randomIndex);
});