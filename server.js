const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send("KhajaBot rolling...")
})

function keepalive() {
  server.listen(3000, () => {
    console.log("Server dispatched...")
  })
}

module.exports = keepalive









