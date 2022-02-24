const username = 'karinnordkvist'
const testUser = 'molbimien'
let reponame = ''
const API_URL = `https://api.github.com/users/${username}/repos`


const API_TOKEN = TOKEN || process.env.API_KEY;

const options = {
    method: 'GET', // POST, PATCH, DELETE
    headers: {
          Authorization: `token ${API_TOKEN}`
      }
    }

fetch(API_URL, options)
.then(res => res.json())
.then(data => {
    console.log(data)
    reponame = data[8].name
    
    const API_URL_PR = `https://api.github.com/repos/Technigo/${data[8].name}/pulls`

    fetch(API_URL_PR, options)
        .then(res => res.json())
        .then(data2 => {
            console.log(data2)

            const allPRs = data2.filter(item => item.head.user.login === testUser)
            console.log()

            const COMMENTS_URL = allPRs[0].commits_url
            fetch(COMMENTS_URL)
            .then(res => res.json())
            .then(data3 => console.log(data3))

        })
    })