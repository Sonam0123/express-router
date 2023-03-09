let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

// Define an express router for the users route. One for getting all the users on the list of users and one for getting a particular user on the list of users (e.g. /users/2 returns the 2nd user).
const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
    res.send(fruits)
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    const fruit = fruits[id]
    res.send(fruit)
})

router.post('/', (req, res) => {
    const {name, color} = req.body
    fruits.push({name, color})
    res.json(fruits)
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const {name, color} = req.body
    fruits[id] = {name, color}
    res.json(fruits)
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    fruits.splice(id, 1)
    res.json(fruits)
})

module.exports = router;