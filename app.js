let GroceryList = ['plums', 'peaches', 'apples', 'cherries', 'blueberries'];

// Implemented using separate item functions
var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryListItem />
  </div>
);
var GroceryListItem = () => (
  <ul>
  <Peaches />
  <Plums />
  </ul>
)
var Peaches = () => (
  <li>{GroceryListItem[1]}</li>
)
var Plums = () => (
  <li>{GroceryListItem[0]}</li>
)
ReactDOM.render(<App />, document.getElementById("app"));

//Implemented Using Props
var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryListItem groceryList={['plums', 'peaches']}/>
  </div>
);
var GroceryListItem = (prop) => (
  <ul>
  <li>{prop.groceryList[0]}</li>
  <li>{prop.groceryList[1]}</li>
  </ul>
)
ReactDOM.render(<App />, document.getElementById("app"));

//Implemented Using Dynamic List
var GroceryListItem = (item) => (
  <li>{item}</li>
)
const listItems = GroceryList.map(GroceryListItem);
ReactDOM.render(<ul>{listItems}</ul>, document.getElementById("app"));



