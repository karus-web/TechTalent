import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function OrderPage() {
  const [cakeFlavor, setCakeFlavor] = useState('');
  const [cakeSize, setCakeSize] = useState('');
  const [cakeShape, setCakeShape] = useState('');
  const [cakeDecoration, setCakeDecoration] = useState('');
  const [cakeType, setCakeType] = useState('');
  const [cakeMessage, setCakeMessage] = useState('');

  const handleFlavorChange = (event) => {
    setCakeFlavor(event.target.value);
  };

  const handleSizeChange = (event) => {
    setCakeSize(event.target.value);
  };



  const handleShapeChange = (event) => {
    setCakeShape(event.target.value);
  };

  const handleDecorationChange = (event) => {
    setCakeDecoration(event.target.value);
  };



  const handleTypeChange = (event) => {
    setCakeType(event.target.value);
  };

  const handleMessageChange = (event) => {
    setCakeMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Cake Order: \nFlavor: ${cakeFlavor}\nSize: ${cakeSize}\nShape: ${cakeShape}\nDecoration: ${cakeDecoration}\nType:    ${cakeType}\nMessage:${cakeMessage}`);

    //  Process the order here
    // You can access the selected Flavor, Size, Shape,Decoration, Type and Merssage in the state variables.
    // Reset the form after submission
    setCakeFlavor('');
    setCakeSize('');
    setCakeShape('');
    setCakeDecoration('');
    setCakeType('');
    setCakeMessage('');
  };

  return (

    /*Order Page Heading*/
    <div className="App">
      <h3>Cake Order Online</h3>

      <div
        style={{
          minHeight: '50vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>

        <form onSubmit={handleSubmit}
          style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '5px',
            minWidth: '400px',
            maxWidth: '600px'
          }}>
          { /*Cake Flavor List and Styles*/}


          <div style={{ display: 'flex', justifyContent: 'flex-align' }}>
            <label htmlFor="cakeflavor" style={{ textAlign: 'right', marginRight: '10px' }}>Cake Flavor:
            </label>
          </div>

          <select value={cakeFlavor} onChange={handleFlavorChange}>

            <option value="">Select Flavour</option>
            <option value="Vanilla">Vanilla</option>
            <option value="Chocolate">Chocolate</option>
            <option value="Strawberry">Strawberry</option>
            <option value="Lemon">Lemon</option>
            <option value="Caramel Toffee"></option>

          </select>

          { /*Cake Size List and Styles*/}


          <div style={{ display: 'flex', justifyContent: 'flex-align' }}>
            <label htmlFor="cakeSize" style={{ textAlign: 'right', marginRight: '10px', marginTop: '10px' }}>Cake Size:
            </label>
          </div>

          <select value={cakeSize} onChange={handleSizeChange}>
            <option value="">Select Size and Price</option>
            <option value="6 inch">6 inch (feeds10) (+£15)</option>
            <option value="8 inch">8 inch (feeds 20) (+£25)</option>
            <option value="10 inch">10 inch (feeds 30) (+£30)</option>
            <option value="6 Cup Cakes">6 Cup Cakes (+£5)</option>
            <option value="12 Cup Cakes">12 Cup Cakes  (+£9)</option>

          </select>

          { /*Cake Shape List and Styles*/}


          <div style={{ display: 'flex', justifyContent: 'flex-align' }}>
            <label htmlFor="cakeflavor" style={{ textAlign: 'right', marginRight: '10px', marginTop: '10px' }}>Cake Shape:
            </label>
          </div>

          <select value={cakeShape} onChange={handleShapeChange}>

            <option value="">Select Shape</option>
            <option value="Square">Square</option>
            <option value="Round">Round</option>
            <option value="Rectangular">Rectangular</option>
            <option value="Two-Tier">Two-Tire</option>
            <option value="Heart-Shaped">Heart-Shaped</option>

          </select>

          { /*Cake Decoration List and Styles*/}


          <div style={{ display: 'flex', justifyContent: 'flex-align' }}>
            <label htmlFor="cakeDecorationr" style={{ textAlign: 'right', marginRight: '10px', marginTop: '10px' }}>Cake Decoration:
            </label>
          </div>

          <select value={cakeDecoration} onChange={handleDecorationChange}>

            <option value="">Select Decoration</option>
            <option value="Our Signature Style">Our Signature Style</option>
            <option value="Spatula Icing">Spatula Icing</option>
            <option value="piping">Piping</option>
            <option value="Fondant Work">Fondant Work</option>
            <option value="Hand Painting">Hand Painting</option>
            <option value="Mirror Glaze">Mirror Glaze</option>
            <option value="Airbrushing">Airbrushing</option>

          </select>

          { /*Cake Type List and Styles*/}

          <div style={{ display: 'flex', justifyContent: 'flex-align' }}>
            <label htmlFor="cakeType" style={{ textAlign: 'right', marginRight: '10px', marginTop: '10px' }}>Cake Type:
            </label>
          </div>

          <select value={cakeType} onChange={handleTypeChange}>

            <option value="">Select Type</option>
            <option value="Our Signature Style">Our Signature Style</option>
            <option value="Cup Cakes">Cup Cakes</option>
            <option value="Butter Cake">Butter Cake</option>
            <option value="Pound Cake">Pound Cake</option>
            <option value="Sponge Cake">Sponge Cake</option>
            <option value="Baked Flourless Cake">Baked Flourless Cake</option>
            <option value="Chiffon Cake">Chiffon Cake</option>
            <option value="Unbaked Flourless Cake">Unbaked Flourless Cake</option>

          </select>

          { /*Your Message with Text box and Styles */}

          <div style={{ display: 'flex', justifyContent: 'flex-align' }}>
            <label htmlFor="cakeMessage" style={{ textAlign: 'right', marginRight: '10px', marginTop: '10px' }}>Cake Message:
            </label>
          </div>

          <textarea value={cakeMessage} onChange={handleMessageChange} write your message here />

          { /*Send Button with Message */}


          <button type="submit" style={{ width: '100%', marginBottom: '10px', marginTop: '30px', backgroundColor: '#e398bd' }}>Place Order</button>


        </form>
      </div>
    </div >

  );
}

export default OrderPage;




