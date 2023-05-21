const url = "https://api.github.com/users/D1ogooo"

function getInfo() {
  axios
    .get(url)
    .then((response) => {
      const data = response.data
      const followers = data.followers
      const following = data.following
      const public_repos = data.public_repos
      const location = data.location

      const content_API_followers = document.getElementById(
        "content_API_followers"
      )
      const content_API_following = document.getElementById(
        "content_API_following"
      )
      const content_API_repository = document.getElementById(
        "content_API_repository"
      )
      const content_API_company = document.getElementById("content_API_company")
      const content_API_location = document.getElementById(
        "content_API_location"
      )

      content_API_followers.innerHTML = followers
      content_API_following.innerHTML = following
      content_API_repository.innerHTML = public_repos
      content_API_location.innerHTML = location
    })

    .catch((error) => {
      console.log("Ocorreu um erro:", error)
    })
}
getInfo()

// Função para gerar uma cor aleatória em formato hexadecimal
function getRandomColor() {
  var letters = "0123456789ABCDEF"
  var color = "#"
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

// Função para mudar o background para uma cor aleatória
let capa = document.getElementsByClassName("celular_capa_pai")[0]
function changeBackground() {
  var color = getRandomColor()
  capa.style.backgroundColor = color
}
