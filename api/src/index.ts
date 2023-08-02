const express = require("xpress")
const server = express()
const PORT = 300

server.use(express.json())

server.listen(PORT, () => {
    console.log(`server listen in ${PORT}`);
    
})
