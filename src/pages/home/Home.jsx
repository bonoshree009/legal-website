import React from 'react';
import Banner from '../../components/bannner/banner';
import Advocates from '../advocates/advocates';
import Legals from '../legals/legals';
import WhyChoose from '../../components/whyChose/WhyChoose';
import Reviews from '../../components/reviews/Reviews';
//import { useLoaderData } from 'react-router';

const Home = () => {
 
    return (
        <div>
            <Banner></Banner>
            <WhyChoose></WhyChoose>
            <Reviews></Reviews>
             {/* <Advocates advocatesData={advocatesData}></Advocates> */}
            <Legals></Legals>
        </div>
    );

};

export default Home;

