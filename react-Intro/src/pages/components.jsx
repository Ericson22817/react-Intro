import React from 'react'
import Buttons from '../components/buttons'
import Kids from '../components/valueProps/kids'


function Components() {
  return (
    <div>
        <Buttons label="Get Started" primary/>
        <Buttons label="Sign In" />
        <Kids paragraph="Send kids on adventures with their favorite characters in a space made just for them—free with your membership." text="Create profiles for kids." image="" reverse />
        <Kids paragraph="Save your favorites easily and always have something to watch." text="Download your shows to watch offline." image=""  />
        <Kids paragraph="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more." text="Enjoy on your TV." image=""reverse />
        <Kids paragraph="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more." text="Watch everywhere." image=""/>

        
    </div>
    
  )
}

export default Components;