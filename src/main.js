const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function bulkDelete(ids) { // I put all promises within the promise.all function
  return Promise.all(ids.map((id) => {
    const URL = `${BASE_URL}/${id}`
    return axios.delete(URL) //I mapped out all of the delete request
  })).then((response) => {
    return Promise.resolve(ids.map((id) => { // I than returned a resolved promise remapping all of the ids
      return {id: id}
    }))
    }
   )
  }
    
    
      
    
    
    
    


module.exports = {
  bulkDelete,
};
