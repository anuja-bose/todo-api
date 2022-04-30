var fs = require('fs');
var {getInitialFileContent} = require('../util/util');

const initilizeDataFile = () => {
   if(fileExists('data.json') === false){
        let data = getInitialFileContent();
        fs.writeFile ("data.json", JSON.stringify(data), function(err) {
            if (err) throw err;
                console.log('**** Initilizing data file ****');
            }
        );  
   }
}

/* Utility functions  */

const fileExists = (path) => {
    let flag = false;
    
    try {
        if (fs.existsSync(path)) {
            flag = true;
        }
      } catch(err) {
        console.error(err)
      }
      return flag;
}


module.exports = {
    initilizeDataFile
};
