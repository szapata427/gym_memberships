import React, {Component} from 'react'
// import PriceRange from './priceRangeSearch'



class GymImages extends Component {


render() {
    console.log(this.props.gyms)
    return (
        <div>

            <img src={this.props} />
        </div>
    )
}
}

export default GymImages