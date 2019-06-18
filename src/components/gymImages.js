import React, {Component} from 'react'
// import PriceRange from './priceRangeSearch'



class GymImages extends Component {


render() {
    let allgyms = this.props.gyms.map(gym => <div class="home-page-image-container"><img class="home-page-gym-logoimage" src={gym.mainImageUrl}/></div> )
    return (
        <React.Fragment>
            {allgyms}
        </React.Fragment>
        
    )
}
}

export default GymImages