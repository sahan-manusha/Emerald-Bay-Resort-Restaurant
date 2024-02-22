import React from 'react'
import '../../App.css';
import NavBar from '../../components/Navbar';
import ImageSlider from "../../components/ImageSlider";
import { SliderData } from "../../components/images/sliderData";
import '../../components/css/home.css';
import aboutimg from '../../components/images/IMG_501.avif';
import foodstock from '../../components/images/foodstock.png';
import foodimg from '../../components/images/IMG_503.jpeg';
import FormExample from '../../components/contactForm';





export const Home = () => {
  return (
    <div style={{backgroundColor:'black'}}>
        
        <NavBar/>
        
        <div className="welcome">
          <h1>EMERALD BAY RESTAURANT</h1>
          <h3>Bringing the authentic Sri Lankan culinary experience to the Heart of Mirissa.🌴 </h3>
        </div>

        

        <div className="aboutsec">
          <div className="leftsection">
            <h3 className='abouth3'>Two Simple reasons , One Simple Answer</h3>
            <h1 className='abouth1'>Why EMERALD BAY?</h1>
            <p className="aboutdescription">
            Designed to be the Culinary epicenter, We try to uphold the traditions of the Local Household while bringing out the avours of Sri Lanka with a bounty of fresh seasonal ingredients. We take extra care to deliver fresh farm produce to a local classy table cuisine with an emphasis on seasonal & locally sourced ingredients and with the freshest Seafood.
            </p>
          </div>

          <div className="rightsection">
            <img src={aboutimg} alt="about food" style={{width:'800px'}} />
          </div>
        </div>

        <div className="offersec">
          
          <div className="leftsection">
          <img  src={foodstock} style={{width:'1000px', height:'500px'}} alt='foodstock'/>
          </div>

          <div className="rightsection" style={{backgroundColor:'black'}}>
           <h1 className='offerh1' style={{fontFamily:'cursive', fontWeight:'1000', color:'yellow'}}>We Offer</h1> <br />
           <br />
           <h1 className='offerh12'>WONDERFUL <br /> FLAVOURS</h1>
           <hr className="flavours-line" />
           <p className="offerp">
           We want you to sit down and enjoy your meal just like the way you enjoy your homemade dishes! We have embarked on this journey and e are glad that you have taken the time off of your schedule to know our story to experience our experience.
           </p>
          </div>
          
        </div>

      <br />

       <ImageSlider slides={SliderData}/>

        <div className="review">
          <div className="review1">
            
            <img src={foodimg} style={{width:'650px', marginLeft:'150px'}} alt="foodimg" />
            <div className="leftsection">
            
            </div>

            <div className=" righthand" style={{backgroundColor:'black'}}>
            
            <h1 className='offerh12'> Latest  <br /> Reviews</h1>
            
                <div className="reviewtag">
                  <div className="reviewname">
                      <h1 style={{marginTop:'20px'}}>Iresh Eranga</h1>
                  </div>

                  <div className="reviewtype">
                        <h2>Amazing Food</h2>
                  </div>

                  <div className="reviewdescription">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error dolorum, deleniti architecto suscipit, assumenda, similique a tempora hic officia blanditiis eius neque corrupti sit reprehenderit nisi? Eum, nostrum. Ipsum minima accusantium ab, voluptatem fugiat aspernatur officia. Impedit, dolor dolorum qui culpa sunt perferendis, earum consequatur tenetur voluptates esse dolore sapiente?</p>
                  </div>
                </div>

            </div>
            
          </div>
        </div>

        <div className="contactussection">
          <div className="gmapframe">
          <iframe id='gmapcanvas' title="Map" width="720" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=Emerald%20Bay%20Resort%20Badugoda%20Junction,%20Harbour%20Road,%20Mirissa%2081740+(Emerald%20Bay%20Restaurant)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=C&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe>
          </div>

          <div className="contactform">
            <div className="leftupper">
              <h2>Contact Us</h2><br />
              <h1>STAY IN TOUCH</h1>
              <div className="boder"></div>
              <br /><br /><br /><br />
              <FormExample />
            </div>
            <div className="lower">
  
</div>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        


    </div>

    
       
  )
}
