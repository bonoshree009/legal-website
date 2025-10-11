import React from 'react';
import Banner from '../../components/bannner/banner';
import WhyChoose from '../../components/whyChose/WhyChoose';
import Reviews from '../../components/reviews/Reviews';
import Ai from './Ai';


const Home = () => {
 
    return (
        <div>
            <Banner></Banner>
            <Ai></Ai>
            <WhyChoose></WhyChoose>
            <Reviews></Reviews>
             
            
        </div>
    );

};

export default Home;

