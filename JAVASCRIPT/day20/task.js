const output = document.getElementById("output");

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((users) => {

        users.forEach((user) => {

            output.innerHTML += `
                <div>
                    <h2>${user.name}</h2>
                    <p>${user.email}</p>
                </div>
            `;

        });

    })
    .catch((error) => {
        console.log(error);
    });