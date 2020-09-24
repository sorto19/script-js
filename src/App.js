import React from 'react';
import {loadStripe} from '@stripe/stripe-js'
import {Elements, CardElement ,useStripe, useElements} from '@stripe/react-stripe-js'
import './App.css';
import "bootswatch/dist/lux/bootstrap.min.css";
import axios from 'axios'
const stripePromise = loadStripe("pk_test_51HUHITHB5hh3QC3PDERR2c8QYbaRO52PndWpZxZKrbTLTW7omV4MjVjxu3G73TUIGNhDS1mcyuiGq6B5EhfC7HcM00aMoALft2")
<h3


const checkoutForm = () =>{

const stripe = useElements();
  const elements = useStripe();
  const handleSubmmit = async (e) => {
     e.preventDefault();
   const {error, PaymentMethod} = await stripe.createPaymentMethod({
       type: "card",
       card: elements.getElement(cardElements),
     });
     //para que muestre si existe un error
     if (!error) {
       const {id} = PaymentMethod;
       await axios.post('http://localhost:3000/api/checkout', {
         id, 
         amount:100000
       })
     }
  };
  return(  
  <form obSubmit={handleSubmit} className="card card-body">
    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngocean.com%2Fgratis-png-clipart-acyji&psig=AOvVaw2zuXFl7jM63pltC86F_PKx&ust=1600894581609000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCT3J7T_esCFQAAAAAdAAAAABAF" alt="k60 keyboard" className ="img-fluid"/>
    <div className ="form-group">
    <CardElement className= "form-control"/>
    </div>
  <button className ="btn-btn-success"> buy </button>
</form>
);
};


function App() {
 return(
  <Elements stripe ={stripePromise}>
   <div className="container p-4">
    <div className="row">
    <CheckoutForm/>
    </div>
   </div>
     </Elements>
 ); 
}

export default App;
