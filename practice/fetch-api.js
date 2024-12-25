function fetchAndDisplayUsever() {
    fetch("https://jsonplaceholder.typicode.com/users") // เป็น string
        .then(response => {
            if(!response.ok) {
                throw new Error("Network reponse was not ok" + response.statusText);
            }
            return response.json();//แปลงจากstring เป็น javascript อ๊อปเจค
        })
        .then(date => {
            console.log(date);
            const usersContainer = document.getElementById("user-container");
            usersContainer.innerHTML= ""; // Clear any existing content

            date.forEach(user => {
                const userDiv = document.createElement("div");
                userDiv.innerHTML = `
                    <h2>${user.name}</h2>
                    <p><strong>Email: </strong> ${user.email}</p>
                    <p><strong>Phone: </strong> ${user.phone}</p>
                    <p><strong>Website: </strong> ${user.website}</p>
                    <p><strong>Address: </strong> ${user.address.city} ,<strong> Zipcode : </strong> ${user.address.zipcode} </p>

                `;
                usersContainer.appendChild(userDiv);
            });
        })
        .catch(error => {
            console.log("There was a problem with the fetch operation "),error;
        });
}

fetchAndDisplayUsever();

