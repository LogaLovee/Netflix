
function search(){
let nickname = document.getElementById('nickname')
let avatar = document.getElementById('avatar')
let URLprofile = document.getElementById('URLprofile')
let userGit = document.getElementById('userGit').value

console.log(userGit)

    fetch(`https://api.github.com/users/${userGit}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)

        nickname.innerHTML = data.login
        avatar.src = data.avatar_url
        URLprofile.innerHTML = data.html_url
    })
}
//search()


    
                    
