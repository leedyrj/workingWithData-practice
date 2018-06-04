//define database
const HomeInventoryDatabase = {}
//add keys to database, one for each set of data
HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []
//define data items
const vintageInkwell = {
    name: "Vintage Ink Well",
    location: "Writing desk",
    description: "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
  }
  
const writingDesk = {
    name: "Shaker Writing Desk",
    location: "Bedroom",
    description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
  }

  const fridge = {
      name: "Refrigerator",
      location: "Kitchen",
      description: "This large device keeps my delicious food cold and fresh."
  }
  //add data items to database
  HomeInventoryDatabase.crafts.push(vintageInkwell);
  HomeInventoryDatabase.furniture.push(writingDesk);
  HomeInventoryDatabase.electronics.push(fridge);

  console.log(HomeInventoryDatabase.crafts)
  console.log(HomeInventoryDatabase.furniture)
  console.log(HomeInventoryDatabase.electronics)

  //write function to store to local storage
  const saveDatabse = (databaseObject, localStorageKey) => {
        //convert object to JSON string
        const stringifiedDatabse = JSON.stringify(databaseObject);
        //create a key in local storage, store string version of database as value
        localStorage.setItem(localStorage, stringifiedDatabse)
  }

saveDatabse(HomeInventoryDatabase, 'localKey')

//JSON.parse to read data
const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}