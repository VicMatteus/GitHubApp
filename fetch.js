// fetch('https://api.github.com/users/ronaldaraujo')
// .then((response) => response.json())
// .then((data) => console.log(data))

// fetch('https://api.github.com/users/ronaldaraujo/followers')
// .then((response) => response.json())
// .then((data) => console.log(data[0]))

// fetch('https://api.github.com/users/ronaldaraujo/orgs')
// .then((response) => response.json())
// .then((data) => console.log(data))

fetch('https://api.github.com/users/ronaldaraujo/repos')
.then((response) => response.json())
.then((data) => console.log(data[0]))