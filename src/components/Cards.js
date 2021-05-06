import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
const Cards = () => {
    return (
        <div className='cards'>
          <h1>Check Out These EPIC Destinations!!!</h1>  
          <div className='cards_container'>
              <div className='cards_wrapper'>
                  <ul className='cards__items'>
                      <CardItem 
                      src='images/img-9.jpg'
                      text='Explore The Hidden Waterfall Deep Inside The Amazon Jungle'
                      label = 'Adventure'
                      path = '/services'
                      />
                      <CardItem 
                      src='images/img-2.jpg'
                      text='Travel Through The Islands Of Bali In A Private Cruise'
                      label = 'Luxury'
                      path = '/services'
                      />


                  </ul>
                  <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
              </div>
          </div>
        </div>
    )
}

export default Cards
