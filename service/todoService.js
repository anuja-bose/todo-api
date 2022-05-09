var fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const getTasks = () =>{
 return getData("tasks");
}
const createTask = (body) => {
    // Generating a id for the task
    let nid = uuidv4();
    body.id = nid;

    //Getting the data from the data.json file
    let data = getData("data");
    let todoTaskList = data.to_do_list;
    let result = {};
    const { task, status, id } = body;
    let taskData = {
        task: task,
        status: status,
        id: id,
    };
    todoTaskList.push(taskData);
    data.to_do_list = todoTaskList;

    
    try {
        fs.writeFileSync("data.json", JSON.stringify(data));
        result.statusCode = 201;
        result.message =  {"message": "record created successfully", "success" : true , "data" : taskData} ;
    } catch (e) {
        result.statusCode = 404;
        result.message =  {"message": "Error while creating record" + e, "success" : false } ;
    }
    
    return result;
};

const updateTask = async (newRecord,id) => {
    let data = getData("data");
    let todoTaskList = data.to_do_list;
    data.to_do_list = todoTaskList;
    let result = {}
    if(recordExists(todoTaskList,id)){
       todoTask = updateRecord(todoTaskList,id,newRecord);
       data.to_do_list = todoTask
        try {
            fs.writeFileSync("data.json", JSON.stringify(data));
            result.message =  {"message": "record updated successfully", "success" : true} ;
        } catch (e) {
            result.message =  {"message": "Error while updating data", "success" : false} ;
        }
       result.statusCode = 202;
    }else {
        result.statusCode = 404;
        result.message =  {"message": "record Not found", "success" : false} ;
    }
    return result;
};
const deleteTask = async (id) => {
    let data = getData("data");
    let todoTaskList = data.to_do_list;
    
    data.to_do_list = todoTaskList;
    let result = {}
    
    if(recordExists(todoTaskList,id)){
       
       todoTask = deleteRecord(todoTaskList,id);
       data.to_do_list = todoTask
        try {
            fs.writeFileSync("data.json", JSON.stringify(data));
            result.message =  {"message": "record deleted successfully", "success" : true} ;
            result.statusCode = 202
        } catch (e) {
            
            result.message =  {"message": "Error while deleted record "+e, "success" : false} ;
            result.statusCode = 404
        }
       
    }else {
        result.statusCode = 404
        result.message =  {"message": "record Not found", "success" : false} ;
    }
    return result;
};


const getData = (opt) => {
    let data = [];
    try {
        let bufferData = fs.readFileSync("data.json");
        let stData = bufferData.toString();
        data = JSON.parse(stData);
    } catch (err) {
        console.error(err);
    }

    if (opt === "data") {
        return data;
    }
    if (opt === "tasks") {
        return data.to_do_list;
    }
};

const saveData = (fileName,data) =>{
    try {
        fs.writeFileSync(fileName, JSON.stringify(data));
        return true;
    } catch (e) {
        console.log("Error while saving the file"+e);
        return false;
    }

}

const recordExists = (todolist, id) => {
    let flag = false;
    todolist.forEach(ele => {
        if (ele.id === id){
            flag = true;
        }
    });
    return flag;
}


const updateRecord = (todolist, id, newRecord) => {
    let newTaskList = new Array();
    todolist.forEach(ele => {
        if (ele.id === id){
            newTaskList.push(newRecord);
        }else{
            newTaskList.push(ele);
        }
    });
    return newTaskList;
}
const deleteRecord = (todolist, id) => {
    let newTaskList = new Array();
    todolist.forEach(ele => {
        if (ele.id !== id){
            newTaskList.push(ele);
        }
    });
    return newTaskList;
}



module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
};
