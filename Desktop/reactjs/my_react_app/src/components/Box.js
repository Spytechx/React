import React from 'react'
import images from '../photos/images'
import DATA from '../data/data_data';
import { arrCollection, objCollection } from '../photos/images.js';


const img_url = 'https://picsum/photos/200';

const BoxComp = () => {
    return (
        <div>
            <h1> Dealing with Images</h1>
            <p>No Import</p>
            <img src='images/logo192.png' alt='lg'/>
            <img src='logo512.png' alt='xx'/>


            <p>the Using Require function</p>
            <img src={require('../photos/logo192.png')} alt='jdf' />

            <p>Using External Image Link</p>
            <img src='https://picsum/photos/200' alt='ext_img' />
            <img src={img_url} alt='ext_img2' />

            {/* <p>Let's keep going down sha, Using Objects</p>
            <img src={images.logo3} alt='Obj-img' />


            <p>Using an Array</p>
            <img src={images[0]} alt='array_obj'/>
        <img src={images[1]} alt='array_obj2'/> */}


        <p> Using Images as exported Constant - Array </p>
        <img src={arrCollection[0]} alt='arr_img1'/>
        <img src={arrCollection[1]} alt='arr_img2'/>

        <p> Using Images as exported Constant - Objects </p>
        <img src={objCollection.logo1} alt='arr_img1'/>
        <img src={objCollection.logo2} alt='arr_img2'/>


        <p> MApping Through Picture Array</p>

        <div>
            {
                DATA.map ((item) => {
                    return(
                    <div key={item.id}>
                        <img src={item.img_url} alt="" />
                        <p>{item.caption}</p>
                    </div>
                    )
                }
                )
            }
       

        </div>
    </div>
    )
}
export default BoxComp