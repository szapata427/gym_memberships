import React, { Component } from "react";

class PriceRange extends Component {
  state = {
    price: 100
  };

  sliderValue = e => {
    this.setState(
      {
        price: e.target.value
      }
    );
  };


  handleBudgetSubmit = (e, price) => {
    fetch(`http://localhost:4000/gyms`)
    .then(response => response.json())
    .then(data => console.log(data.data))



  }

  render() {
    return (
      <div class="main-container-price-range-home">
        <div class="container-monthly-price-range-title-home">
          <label for="volume" id="monthly-price-range-title-home">
            Monthly Price Range
          </label>
        </div>
        <div class="sliderContainer">
          <span id="lowest-range" class="range-prices">
            $10
          </span>
          <input
            type="range"
            id="start"
            name="volume"
            min="10"
            max="300"
            class="slider"
            onChange={e => this.sliderValue(e)}
            value={this.state.value}
          />
          <span id="highest-range" class="range-prices">
            $300
          </span>
          <div>
            <span id="budget-price-home-page"> ${this.state.price}</span>
          </div>
          <button class="monthly-price-range-submitbtn" onClick={(e, state) => this.handleBudgetSubmit(e, this.state.price)}>Select Budget</button>
        </div>
      </div>
    );
  }
}

export default PriceRange;
