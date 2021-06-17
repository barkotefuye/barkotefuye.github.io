const http = require("http");
const axios = require("axios");

let driverAppHandler = (req, res) => {
    (req, res, next) => {
        console.log("'/test' call");
        axios.get("http://localhost:3001")
            .then(response => res.json(response.data))
            .catch(err => res.secn(err));
        res.send
    }
  }


  exports.driverAppHandler = driverAppHandler;