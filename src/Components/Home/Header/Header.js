import React from 'react';
import Footer from '../../SameComponent/Footer/Footer';

import Navbar from '../../SameComponent/Navbar/Navbar';
import Chart from '../Chart/Chart';
import Cover from '../Cover/Cover';
import Review from '../Review/Review';
import SpecialOffer from '../SpecialOffer/SpecialOffer';
import TourpackAge from '../TourpackAge/TourpackAge';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
             <Cover></Cover>
             <TourpackAge></TourpackAge>
             <SpecialOffer></SpecialOffer>
             <Chart></Chart>
             <Review></Review>
             <Footer></Footer>

        </div>
    );
};

export default Header;