import React from 'react';
import '../App.css';
// import './HomePage.css';

function HomePage() {
  return (

    <main className="App-content">

        <img src="/images/oshcake.jpg" alt="osh cake" />
        <div className="desc"><b>Freshly Baked Cakes!! Order Online..</b></div> 
                  {/* <div class="clearfix"></div>    */}


      <div> 
        <div className="responsive">
          <div className="image-container">
            <img src="/images/Weddingcake2.jpg" alt="Wedding cake" style={{ width: '50%' }} />
            <div className="desc">Wedding cake</div> 

           </div>
           {/* </div>  */}

          <img src="/images/hbcake1.jpg" alt="Happy Birthday cake" style={{ width: '50%', marginRight: '10px' }} />
          <div className="desc">Happy Birthday cake</div> 

          <img src="/images/cupcakes.jpg" alt="cup cakes" style={{ width: '50%', marginRight: '10px'}} />
          <div className="desc">Cup cakes</div>  

           {/* <img src="/images/christmascake.jpg" alt="Christmas cake" style={{ width: '50%'}} /> */}
                   {/* <div className="desc">Christmas cake</div>   */}

          </div>

            <div className="clearfix"></div>  

        <h2>Beautiful Cakes for Every Occasion</h2>
        <div className="center-content">
        <p>Choose one of our ready-made designs or create your own bespoke masterpiece! Fresh from The Cake Shop,
          customised for you.
        </p>
        <p> Due to the intricate and fragile nature of our creations, all our cakes can be collected from our
          Cambridge or Maidenhead shops or delivered within a 30-mile radius by our dedicated Cake Shop drivers.
          Check here to see if you are inside our delivery area. If you’re not within our delivery area,
          please call to discuss options.
        </p>
        <p> We also have a specially selected range of cost-effective quick cakes which are available for delivery
          or collection.
        </p>
        <p> Order a birthday, wedding or special occasion cake from our selection online or
          contact our shop on 01995 678910 to arrange a free consultation for a bespoke creation.
        </p>
        </div>
      </div>

    </main>
  );

}

export default HomePage;





