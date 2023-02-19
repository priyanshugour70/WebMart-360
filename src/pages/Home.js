import React from 'react'
import Banner from '../components/home/Banner'
import MobileCarousel from '../components/product/MobileCarousel'
import CollectionCarousel from '../components/product/CollectionCarousel'

const Home = () => {
  return (
    <div>
        <Banner />
        <MobileCarousel title="Mobiles" />
        <CollectionCarousel title="Add some character to your home | New collection from local shops" />

    </div>
  )
}

export default Home