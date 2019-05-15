import React, { Component } from 'react';

class AddFood extends Component {
  constructor(props){
      super(props);
    
      this.state = { 
        name: '',
        image: '',
        calories: 0,
        quantity: 0,
        display: false
      }
  }





  handleNameInput = (event) => {
    this.setState({ name: event.target.value })
  }
  handleImgInput = (event) => {
    this.setState( { image: event.target.image} )
  }
  handleCaloriesInput = (event) => {
    this.setState( { calories: event.target.number } )
  }
  handleQuantityInput = (event) => {
    this.setState( { quantity: event.target.number} )
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.AddFood(this.state);
    // Reset the state
    this.setState({ name: '', image: '', calories: '', quantity: '' });  	
  };
  // All our inputs have same `name` as the `state` property name.
    // let { [name], value } = event.target;
    
    // if (name === "hasOscars" && this.state.hasOscars === false) value = true; 
    // else if (name === "hasOscars" && this.state.hasOscars === true) value = false;

    // this.setState( { [name]: value } );

    toggleTheForm = () => {
      !this.state.display ? this.setState({display:this.state.display = true}) : this.setState({display:this.state.display = false}); 
    }

  render(){
    return (
      <div>
      <button onClick={this.toggleTheForm}> Add a food </button>
      {
        (!this.state.display) ?
        null
      :
     <form onSubmit={this.handleFormSubmit}>
            <label>Name:</label>
            <input name="name" type="text" placeholder='name' value={this.state.name} onChange={(e) => this.handleNameInput(e)} />

            <label>Calories:</label>
            <input name="calories" type="number" placeholder='calories'value={this.state.calories} onChange={(e) => this.handleCaloriesInput(e)} />

            <label>Image:</label>
            <input name="image" alt='' type="image" checked={this.state.image} onChange={(e) => this.handleImgInput(e)} />

            <label>Quantity</label>
            <input name="quantity" type="number" placeholder='quantity' value={this.state.quantity} onChange={(e) => this.handleQuantityInput(e)} />
            
            <button type="submit"> Submit </button>
        </form>
      }
      </div>

    )
  }
}

export default AddFood;