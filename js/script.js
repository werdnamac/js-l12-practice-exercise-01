const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("#users");

const getData = async function(numUsers) {
    const usersRequest = await fetch (`https://randomuser.me/api?results=${numUsers}`);
    let data = await usersRequest.json();
    const userResults = data.results;
    displayUsers(userResults)
};

const displayUsers = function(userResults) {
    randomFolks.innerHTML = "";
    for (let user of userResults) {
        let country = user.nat;
        let name = user.name.first;
        let imageUrl = user.picture.medium;
        let userDiv = document.createElement("div");
        userDiv.innerHTML = `
            <h3>${name}</h3>
            <p>${country}</p>
            <img src=${imageUrl} alt="User avatar" />
        `;
        randomFolks.append(userDiv);
    }
}


selectUserNumber.addEventListener("change", function (e) {
    let numUsers = e.target.value;
    getData(numUsers);
});

getData(1);