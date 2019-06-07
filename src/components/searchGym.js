import React, {Component} from 'react'
import PriceRange from './priceRangeSearch'



class SearchGym extends Component {
render() {
    return (
        <div>
           Search Type of Gym You are looking for
           <PriceRange />
        </div>
    )
}
}

export default SearchGym