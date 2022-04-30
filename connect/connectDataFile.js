var fs = require('fs');
var pjson = require('../package.json');
var moment = require('moment');

const initilizeDataFile = () => {
    //18 June 2019 at 9:00 AM
    let dateCreated = moment().format("DD MMMM YYYY") +" at " + moment().format("LT");
    let data = {
        "author": "Anuja Bose",
        "version": pjson.version,
        "time_stamp": dateCreated,
        "to_do_list": [
            { "id": "01", "task": "Shopping", "status": "Completed" },
            { "id": "02", "task": "Cleaning", "status": "In-progress" }
        ]
    }

    fs.writeFile ("data.json", JSON.stringify(data), function(err) {
        if (err) throw err;
        console.log('complete');
        }
    );
}


const getToDoListFromFile = () =>{
    let data = [];
    try {
        let bufferData = fs.readFileSync('data.json')
        let stData = bufferData.toString()
        data = JSON.parse(stData)
        
      } catch (err) {
        console.error(err);
      }
      return data.to_do_list;
}

module.exports = {
    initilizeDataFile,
    getToDoListFromFile
};
