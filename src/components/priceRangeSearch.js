import React, {Component} from 'react';


class PriceRange extends Component {

    state = {
        price: 150
    }


sliderValue = (e) => {
    console.log(e.target.value)
this.setState({
    price: e.target.value
}, () => console.log(this.state.price))

}
    render() {
        
            return <div>
                <div class="sliderContainer">
                <input type="range" id="start" name="volume" min="10" max="300" class="slider" onClick={(e) => this.sliderValue(e)} value={this.state.value}></input>
                <div>
                    Budget <span>{this.state.price}</span>
                </div>
                <label for="volume">Price Range</label>

                </div>
            </div>

    }


}

export default PriceRange 