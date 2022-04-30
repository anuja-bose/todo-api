var pjson = require('../package.json');
var moment = require('moment');

const getVersion = () =>{
    return pjson.version;
}

const getCurrentDateFormatted = () => {
    return moment().format("DD MMMM YYYY") +" at " + moment().format("LT");
}
const getInitialFileContent = () => {
    let data = {
        "author": "Anuja Bose",
        "version": getVersion(),
        "time_stamp": getCurrentDateFormatted(),
        "to_do_list": []
    }
    return data;
}


module.exports = {
    getInitialFileContent
};
