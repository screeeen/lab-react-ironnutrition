import React, { Component } from 'react';
import foods from './data/foods.json'
import 'bulma/css/bulma.css';
import './App.css';
import Foodbox from './components/Foodbox.js';
import AddFood from './components/AddFood.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      // name: 'salad',
      // calories: 30,
      // image: 'https://i.imgur.com/DupGBz5.jpg',
      // quantity: 50

      myFoods : foods
    }
  }


  addFoodHandler = (newFood) => {
    const foodsCopy = [...this.state.myFoods];
    foodsCopy.push(newFood);
    
    this.setState({ myFoods : foodsCopy })
  }




  render() {
    return (
      <div className="App">
          <AddFood AddFood={this.addFoodHandler} />
        {
          this.state.myFoods.map((oneFood, index) => {
            console.log()
            return (
              <Foodbox
                key={index}
                name={oneFood.name}
                calories={oneFood.calories}
                image={oneFood.image}
                quantity={oneFood.quantity}
              />
            )
          })
        }


      </div>
    );
  }
}

export default App;
