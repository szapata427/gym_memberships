import React, { Component } from "react";
import GymImages from "./gymImages";

class PriceRange extends Component {
  state = {
    price: 100,
    gymImages: "",
    gymInfo: "",
    membershipInfo: ""
  };

  sliderValue = e => {
    this.setState({
      price: e.target.value
    });
  };


  handleBudgetSubmit = (e, price) => {
    e.preventDefault();
    let pricematchgyms = []

    fetch(`http://localhost:4000/memberships`)
    .then(res => res.json())
    .then(data =>  {
      let allmembs = data.data
      allmembs.filter(mem => {
        if (mem.monthlyPrice <= this.state.price) {
          pricematchgyms.push(mem.gym_id)
        }
      })
    })

    fetch(`http://localhost:4000/images`)
      .then(response => response.json())
      .then(data => {
        let gymimages = data.data;
        let selectedImages = gymimages.filter(gym => {
          if (pricematchgyms.includes(gym.gym_id))
          return gym
        })
        console.log(selectedImages)
        this.setState({
          gymImages: selectedImages
        });
      });


    fetch(`http://localhost:4000/gyms`)
      .then(response => response.json())
      .then(data => {
        let gymdata = data.data;
        let selectedGyms = gymdata.filter(gym => {
          if (pricematchgyms.includes(gym.id))
          return gym
        })
        this.setState({
          gymInfo: selectedGyms
        });
      });

  };

  render() {
    return (
      <React.Fragment>
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
            <button
              class="monthly-price-range-submitbtn"
              onClick={(e, state) =>
                this.handleBudgetSubmit(e, this.state.price)
              }
            >
              Select Your Budget!
            </button>
          </div>
          {this.state.gymImages ? (
            <GymImages
              gymImages={this.state.gymImages}
              price={this.state.price}
              gyminfo={this.state.gymInfo}
            />
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

export default PriceRange;
