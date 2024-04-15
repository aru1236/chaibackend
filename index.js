require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "aru1236",
    "id": 124913371,
    "node_id": "U_kgDOB3IG2w",
    "avatar_url": "https://avatars.githubusercontent.com/u/124913371?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/aru1236",
    "html_url": "https://github.com/aru1236",
    "followers_url": "https://api.github.com/users/aru1236/followers",
    "following_url": "https://api.github.com/users/aru1236/following{/other_user}",
    "gists_url": "https://api.github.com/users/aru1236/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/aru1236/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/aru1236/subscriptions",
    "organizations_url": "https://api.github.com/users/aru1236/orgs",
    "repos_url": "https://api.github.com/users/aru1236/repos",
    "events_url": "https://api.github.com/users/aru1236/events{/privacy}",
    "received_events_url": "https://api.github.com/users/aru1236/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Arti Sharma",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-02-09T16:59:18Z",
    "updated_at": "2024-04-15T07:45:40Z"
  }


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('aroodotcom')
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})


app.get('/login',(req,res)=>{
    res.send('<h1> Please login at chai or code</h1>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})