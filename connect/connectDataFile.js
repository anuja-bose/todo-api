var fs = require('fs');
var pjson = require('../package.json');

const initilizeDataFile = () => {

    let data = {
        "author": "Anuja Bose",
        "version": pjson.version,
        "time_stamp": "",
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


module.exports = {
    initilizeDataFile
};
