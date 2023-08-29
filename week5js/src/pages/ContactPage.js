import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import Container from 'react-bootstrap/Container';


const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (

    <div
      style={{
        minHeight: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>

      {/* Contacts Page heading*/}

      <div>
        <h3>Contact Us</h3>

        <form onSubmit={handleSubmit}
          style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '5px',
            maxWidth: '450px'
          }}>

          <div className="container">


            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <h4>Get In Touch...</h4>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <p> Please message us using the form below and we will get back to you as
                soon as we can.We look forward to your comments and feedback on the site.</p>
            </div>

            {/* Name Field and Styling */}

            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <label htmlFor="name" style={{ textAlign: 'right', marginRight: '10px' }}>Name: </label>
            </div>
            <input type="text" id="name" required style={{ width: '100%', marginBottom: '10px' }} />

            {/* Email and Styling */}

            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <label htmlFor="email">Email: </label>
            </div>
            <input type="email" id="email" required style={{ width: '100%', marginBottom: '10px' }} />

            {/* Telephone and Styling and Styling */}

            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <label htmlFor="Telephone">Telephone: </label>
            </div>
            <input type="Telephone" id="Telephone" required style={{ width: '100%', marginBottom: '10px' }} />



            {/* Your Message and Styling */}

            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <label htmlFor="message">Message:</label>
            </div>
            <textarea id="message" required style={{ width: '100%', marginBottom: '10px' }}></textarea>

            {/*Catagory and Styling */}


            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <label htmlFor="category">Category:</label>
            </div>

            <select id="category" style={{ width: '100%', marginBottom: '10px' }}>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="sales">Sales</option>
            </select>
            {/*Send Button and Styling */}

            <button type="submit" style={{ width: '100%', marginBottom: '10px', marginTop: '20px', backgroundColor: '#b861b0' }}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
