
class DemoReactServices {
  
  static async fetchPageData(HOST, PORT, PATH) {
    const URL = HOST + ":" + PORT + PATH;
    const response =  await fetch(URL)
    return response.json();

    
  }


}

export default DemoReactServices;
