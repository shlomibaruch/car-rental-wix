import React from 'react';
import Hero from '../components/template/Hero';
import Button from '@material-ui/core/Button'
import Bunner from '../components/template/Bunner';
import '../components/css/navbar.css';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedCars from '../components/FeaturedCars';

export default function Home() {
    return (
        <>
            <Hero>
                <Bunner title="Welcome" subtite="Here you can find the vehicle you were looking for all the time">

                  <div className='homeBanner'>
                  
                  <Button variant="contained" size="large"><Link to='/cars'>go to cars</Link></Button>

                  </div>
                </Bunner>

            </Hero>
            <Services />
            <FeaturedCars />
            
        </>
    )
}
