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


// Implemented Using Props & ES6 Classes
class GroceryListItems extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
   return <li>{this.props.groceryItem}</li>;
  }
}

var GroceryListRender = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem => <GroceryListItems groceryItem={groceryItem} />)}
  </ul>
);

ReactDOM.render(<GroceryListRender groceryItems={['peaches', 'plums', 'cherries', 'bananas']} />, document.getElementById("app"));


// Implemented State
class GroceryListItemMultiple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }
  onHover() {
    this.setState({
      done: !this.state.done
    });
  }
  render () {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseOver={this.onHover.bind(this)}>{this.props.groceryItem}</li>
    );
  }
}

var GroceryListRender = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem => <GroceryListItemMultiple groceryItem={groceryItem} />)}
  </ul>
);

ReactDOM.render(<GroceryListRender groceryItems={['peaches', 'plums', 'cherries', 'bananas']} />, document.getElementById("app"));


