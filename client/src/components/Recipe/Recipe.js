import React, { useState } from 'react';
import './Recipe1.css'; 


const Recipe = () => {
  

  return (
    <>
    <div className='main' id ="recipe"> 
      <div className="header">
        <h1 className='h1'> Our Delicious and special recipe </h1>
        <h1 className='h2'><b>Apslay Arms Hotel</b></h1>
        <p> Food is any substance consumed by an organism for nutritional support.</p>
        
      </div>

      <div className="recipe">
        <div className="rec1">
          <div className="price">
            <p>$12</p>
          </div>
          <div><img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/363897659_1425534414958635_6313094595192288624_n.png?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=aee45a&_nc_ohc=tykdrCY1OakAX9VUlfP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTai8pA1X2uwOaOljrzA_0KYncS2VLmDabKORj0OyslIg&oe=64F8718D" alt="Image 1" /></div>
          <div classname="descripton">

            <h1 className="desh1">Lamb Cutlet</h1>

            <p>Lamb Cutlets’ with beetroot purée miso paste, pestoand mash by Chef Sammy.</p>
          </div>
        </div>

        <div className="rec2">
          <div className="price">
            <p>$12</p>
          </div>
          <div><img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/359906928_1356589641879512_4157505613936760735_n.png?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=aee45a&_nc_ohc=ylail5OPuD8AX-3QWrd&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdR0IhszQDRG9CoLYz0R7R-kx60KBYTziWXLWCJILHQ86w&oe=64F80C44" alt="Image 1" /></div>
          <div classname="descripton">

            <h1 className="desh1"> Blanched Broccolin</h1>

            <p>Food is any substance consumed by an organism for nutritional support </p>
          </div>


        </div>
        <div className="rec3">
          <div className="price">
            <p>$12</p>
          </div>
          <div><img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/363895270_3590542177851818_7367993885042564425_n.png?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=aee45a&_nc_ohc=YxzOQO5WgfUAX939JkX&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRcVnPA9PBh_G7Z8GR9znij1_IH6ZVhh1ENJ2zjz16Vig&oe=64F850D0" alt="Image 1" /></div>
          <div classname="descripton">

            <h1 className="desh1">Fish Salad</h1>

            <p>Food is any substance consumed by an organism for nutritional support.        </p>
          </div>


        </div>

        <div className="rec4">
          <div className="price">
              <p>$12</p>
            </div>
            <div><img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/364405151_667874094901690_6182837148569042424_n.png?_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=aee45a&_nc_ohc=rpEikWpPtcMAX-H6jJS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRpszlUg_VsKqnGJc-t9wNPGO1jH3b12n0770UruzX80w&oe=64F86B44" alt="Image 1" /></div>
            <div classname="descripton">

              <h1 className="desh1">Pizza</h1>

              <p>Food is any substance consumed by an organism for nutritional support.</p>
            </div>

        </div>
        


      </div>
    
      
      <div className="inner">
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="86"
          height="48"
          viewBox="0 0 86 48"
          fill="none"
          className="firstSvg"
        >
          <path
            d="M82.6078 2.50606L58.4402 31.3715L34.4064 11.7846L3 45.1616"
            stroke="#DAE952"
            strokeWidth="7"
        />
          
        </svg>
        <div className="first">
          <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/363954265_1600167237173272_2407188222629908158_n.png?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=510075&_nc_ohc=5Rmo0DnWXRwAX86tAlC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQwadEki9Un4ujm9ZmF6WxIyKtjGvvXcFhNbXqt8PMLPg&oe=64F88465" alt="Image 1" />
        </div>

        <div className="second">
          <h1><b>Welcome to our <br></br>Apseley Arms Hotel</b></h1>
          <p>The Apseley Arms Hotel is a charming and<br></br> luxurious establishment located in the heart of<br></br> a picturesque countryside. Nestled amidst <br></br>rolling hills and surrounded by lush greenery,<br></br> this hotel offers a serene and idyllic retreat for<br></br> travelers seeking both relaxation and <br></br>adventure.</p>
          <br />
          <button className="button">Find more</button>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="20"
          viewBox="0 0 86 48"
          fill="none"
          className="secondSvg"
        >
          <path
            d="M82.6078 2.50606L58.4402 31.3715L34.4064 11.7846L3 45.1616"
            stroke="#DAE952"
            strokeWidth="7"
          />
          
        </svg>

      </div>
    </div>
    
    </>
  );
};

export default Recipe;