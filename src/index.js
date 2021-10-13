import 'dotenv/config'
import express from 'express'
 
const app = express()
 
app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);

const userName = {firstName: 'Vlad'}
const userCredentials = {role: 'software developer'}

const user = {
    ...userName,
    ...userCredentials 
}

console.log(user)

console.log(process.env.MY_SECRET)