import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  
  static async getItems() {
    const itemArray = []
    const items = ['drinks', 'snacks']


    const fetchUrl = item => axios.get(`${BASE_API_URL}/${item}`)
    const promiseArray = items.map(fetchUrl)

    await Promise.all(promiseArray).then((data =>{
      console.log('inside api js')
      itemArray.push(data)
    }))

    // items.forEach(async item => {
    //   const result = await axios.get(`${BASE_API_URL}/${item}`);
    //   console.log(result)
    //   console.log(result.data)
    //   itemArray.push(result.data)
    // })

   
    return itemArray;
   
  }


 

}

export default SnackOrBoozeApi;
