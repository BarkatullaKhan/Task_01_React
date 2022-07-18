import React from 'react';
import Banner from './Banner';
import CofeeLockdown from './Cofee_Lockdown';
import PerfectBean from './Perfect_Bean';
import Roasters from './Roasters';
import Teaser from './Teaser';



const Home = (props) => {
    console.log(props.response);  
    return ( 
        <div>
            {/* <h1>Home component</h1> */}
            <Banner banner={props.response.banner} />
            <Teaser teaser={props.response.teaser_new} />
            {/* <h3>{props.response.banner.bannerTitle}</h3> */}
            <Roasters roasters={props.response.roasters}/>
            <PerfectBean perfect_bean={props.response.perfect_bean} />
            <CofeeLockdown cofee_lockdown={props.response.cofee_lockdown} />
            {/* <Slider /> */}
        </div>
     );
}
 
export default Home;