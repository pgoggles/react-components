let GroceryList = ['plums', 'peaches', 'apples', 'cherries', 'blueberries'];

// Implemented using separate item functions
var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList />
  </div>
);
var TodoList = () => (
  <ul>
  <Peaches />
  <Plums />
  </ul>
)
var Peaches = () => (
  <li>{GroceryList[1]}</li>
)
var Plums = () => (
  <li>{GroceryList[0]}</li>
)
ReactDOM.render(<App />, document.getElementById("app"));

//Implemented Using Props
var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['plums', 'peaches']}/>
  </div>
);
var TodoList = (prop) => (
  <ul>
  <li>{prop.todos[0]}</li>
  <li>{prop.todos[1]}</li>
  </ul>
)
ReactDOM.render(<App />, document.getElementById("app"));

//Implemented Using Dynamic List
var GroceryListItem = (item) => (
  <li>{item}</li>
)
const listItems = GroceryList.map(GroceryListItem);
ReactDOM.render(<ul>{listItems}</ul>, document.getElementById("app"));
