let username = document.querySelector(`#input`)
let btn = document.querySelector(`#loadDataBtn`)
let output = document.querySelector('#output');

btn.addEventListener('click', function() {
const url = `https://api.github.com/users/${username.value}`
    fetch(url)
        .then(response => response.json())
        .then(response => {
            output.innerHTML = `
            <p><strong>Name:</strong> ${response.name}</p>
            <p><strong>Username:</strong> ${response.login}</p>
            <p><strong>Location:</strong> ${response.location}</p>
            <p><strong>Public Repos:</strong> ${response.public_repos}</p>
            <p><strong>Bio:</strong> ${response.bio}</p>
            <p><strong> Follower:</strong> ${response.followers}</p>
            <img src="${response.avatar_url}" alt="Avatar" style="width:100px; height:100px;">
            `;
            
        })
        .catch(error => {
            output.innerHTML = `<h3> ${error} User Not Found</h3>`

        });
    });       
