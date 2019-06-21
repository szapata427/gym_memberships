import React, {Component} from 'react'
// import PriceRange from './priceRangeSearch'



class GymImages extends Component {



    
gymImagesProps = () => {
  let allgyminfo = this.props.gyminfo
  let allgymimages = this.props.gymImages

let mgymsarray = []
    if (allgymimages && allgyminfo) {

       this.props.gyminfo.filter(gym => {
                    allgymimages.map(gymimage => {
                  if (gymimage["gym_id"] == gym["id"]) {
                    let matchingobject =  {url: gymimage.mainImageUrl, name: gym.name, value: gym.value, locations: gym.numLocations}
                    mgymsarray.push(matchingobject)
                  }
              }) 
              
          })
    
          return mgymsarray.map(gyminfo => {
              return <div class="home-page-image-container">
                 <img class="home-page-gym-logoimage" src={gyminfo.url}/>
                       <div class="individual-gym-info-container-home-page"> 
                           <ul class="individual-gym-info-home-page">
                               {gyminfo.name}
                           </ul>
                           <ul class="individual-gym-info-home-page">
                               {gyminfo.value}
                           </ul>
                           <ul class="individual-gym-info-home-page">
                               {gyminfo.locations}
                           </ul>
                       </div>
                   </div> 
          })
}

  
}




render() {
    return (
        <React.Fragment>
            <div class="selected-price-popup">You have Selected a budget of ${this.props.price}</div>
            {this.gymImagesProps()}
        </React.Fragment>
        
    )
}
}

export default GymImages