const jwt = require('jsonwebtoken')

const createToken = (username) => {
    return jwt.sign(
        {
            username
        },
        "donttellanyone", //this is typically a SECRET .env value
        {
            expiresIn: '2 minutes'
        }
    )
}

module.exports = {
    login: async (req, res) => {
        const {username} = req.body
        const token = createToken(username)
        res.status(200).send(token)
    }, 
    test: async (req, res) => {
        const {token} = req.body
        
        if(!token) {
            return res.status(400).send("No token")
        }

        try {
            let authenticToken = jwt.verify(token, "donttellanyone")
            return res.status(200).send("Good token")
        }
        catch (err) {
            return res.status(400).send("Bad token")
        }
    }
}