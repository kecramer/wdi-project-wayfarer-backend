var db = require('./models')

let now = new Date;

const testCity = {
  name: 'San Francisco',
  thumbnail: 'city.jpg'
}

const testUser = {
  email: 'user@username.user',
  password: 'plaintext_unsecured_password',
  join_date: now.valueOf(),
  profile_picture: 'picture.jpg',
  current_city: 'San Francisco'
}

const testPost = {
  title: 'Test Post Please Ignore',
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  created: now.valueOf()
}


db.City.remove({}, (err, success) => {
  console.log(success)

  db.Post.remove({}, (err, success) => {
    console.log(success)

    db.User.remove({}, (err, success) => {
      console.log(success)

      console.log('removed all from database')

      db.City.create(testCity, (err, newCity) => {
        if (err) { console.log (err) }
        console.log(newCity)

        db.User.create(testUser, (err, newUser) => {
          if (err) { console.log (err) }
          console.log(newUser)

          testPost.author = newUser
          testPost.city = newCity

          db.Post.create(testPost, (err, newPost) => {
            if (err) { console.log(err) }
            console.log(newPost)

            db.City.findById(newCity._id, (err, foundCity) => {
              if (err) { console.log(err) }
              foundCity.posts.push(newPost)
              foundCity.save()

              db.User.findById(newUser._id, (err, foundUser) => {
                if (err) { console.log(err) }
                foundUser.posts.push(newPost)
                foundUser.save()
              })
            })
          })
        })
      })
    })
  })
})
