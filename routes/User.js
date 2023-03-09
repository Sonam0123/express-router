let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]
const express = require("express")
const {check, validationResult} = require('express-validator')

const router = express.Router()

router.get("/", (req, res) => {
    res.send(users)
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(user)
})

router.post("/", [check('name').not().isEmpty().trim().escape()], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()})
    }
    const {name, age} = req.body
    users.push({name, age})
    res.json(users)
})


router.put('/:id', (req, res) => {
    const id = req.params.id
    const {name, age} = req.body
    users[id] = {name, age}
    res.json(users)

})
router.delete('/:id', (req, res) => {
    const id = req.params.id
    users.splice(id, 1)
    res.json(users)
})


module.exports = router;
