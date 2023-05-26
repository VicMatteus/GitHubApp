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
.then((data) => {
    data.map((repositorio)=>{
        let data = new Date(repositorio.created_at)
        console.log(repositorio.name)
        console.log(repositorio.private)
        console.log(repositorio.html_url)
        console.log(repositorio.description)
        console.log(data.getDay()+"/"+data.getMonth()+"/"+data.getFullYear())
        console.log(repositorio.git_url)
    })
})
