var db = require('./models')

const testCity = {
  name: 'San Francisco',
  thumbnail: 'city.jpg'
}

db.City.create(testCity, (err, newCity) => {
  if (err) { console.log (err) }
  console.log(newCity)
})
