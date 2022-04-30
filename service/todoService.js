var fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const getData = (opt) => {
    let data = [];
    try {
        let bufferData = fs.readFileSync("data.json");
        let stData = bufferData.toString();
        data = JSON.parse(stData);
    } catch (err) {
        console.error(err);
    }

    if(opt==='data'){
      return data
    }
    if(opt==='todolist'){
      return data.to_do_list
    }
};

const createTask = (body) => {
    let nid = uuidv4();
    body.id = nid;

    let data = getData('data');

    let todoTaskList = data.to_do_list;
    const { task, status, id } = body;
    let taskData = {
        task: task,
        status: status,
        id: id,
    };
    todoTaskList.push(taskData);
    data.to_do_list = todoTaskList;

    let returnData = { message: "success", data: taskData };
    try {
        fs.writeFileSync("data.json", JSON.stringify(data));
    } catch (e) {
        returnData.message = "Error while creatiing the data";
    }
    return returnData;
};

module.exports = {
    getData,
    createTask,
};
