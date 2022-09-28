import React from "react";
import { allItems, graphicItems,processorItems, powersupplyItems, coolerItems,
  windowsItems,storageItems, memoryItems,gamingComponents, designComponents,
  codingComponentes, officeComponents, renderingComponents, otherComponents,
  possibleCheckoutItems} from "./models/dataScript";
import { useState } from "react";

const Checkout = ()=>{
    let possibleCheckoutItems=JSON.parse(localStorage.getItem("possibleCheckoutItems"));
    const getPrice=()=>{
      let totalPrice=0;
      for(let i=0;i<possibleCheckoutItems.length;i++){
          totalPrice+=possibleCheckoutItems[i].price;
      }
      return <span>{totalPrice}</span>;
  }
    const CheckoutCard = (name,price,img)=>{
    return <div className="content-advanced-buyCard" style={{backgroundColor:"rgba(0, 0, 0, 0.7)",color:"white"}}>
        <img src={img}/>
        <div className="content-advanced-buyCard-text">
        <p><b>{name}</b></p>
        <p className="content-advanced-buyCard-text-price">${price}</p>
        </div>
        </div>
    }
    const showCheckout = (click)=>{
        console.log(possibleCheckoutItems);
        const checkout=Array(possibleCheckoutItems.length).fill(0).map((_,index)=>{
            return CheckoutCard(possibleCheckoutItems[index].name,possibleCheckoutItems[index].price,possibleCheckoutItems[index].img,possibleCheckoutItems[index].order);
        })
        return checkout;
    }
     
 return <div id="content-margin" style={{width: "90%"}}>
  <div className="inline">
    <h1 style={{width: "50%"}}>Checkout</h1>
    
      <div style={{width: "100%"}}></div>
      <a href="/pre-checkout" style={{width:"15%",backgroundColor: "white",textAlign: "center",borderRadius:"10px",padding:"10px",marginRight: "20px"}}>
          <button style={{width:"100%"}}>  Back </button></a>
          <a style={{width:"20%",backgroundColor: "#ba68c8",textAlign: "center",borderRadius:"10px",padding:"10px",marginRight: "20px"}}>
              <button style={{width: "100%",color:"white"}}>Checkout </button></a>
  </div>
    <div className="row">
      <div className="col">
        <div style={{backgroundColor:"white",marginTop:"50px",borderRadius: "25px",color:"black",padding: "20px"}}>
        <p><span style={{color:"purple"}}>Cart</span> | Information | Shipping | Payment</p>
        <fieldset className="border rounded-3 p-3 float-none w-auto px-3" legend>
          <legend className="float-none" style={{width:"auto",textAlign:"center"}}>Express Checkout</legend>
          <div className="row" style={{display:"flex",justifyContent:"center"}}>
                <div className="col" ><button className="btn btn-default" style={{backgroundColor:"#f3e5f5",borderRadius:"10px"}}><img src="icons/shop_pay-logo.png" className="rounded" style={{width:"90%"}}/></button></div>
                  <div className="col" ><button className="btn btn-default" style={{backgroundColor:"#ffd54f",borderRadius:"10px"}}><img src="icons/paypal-logo.png" className="rounded" style={{width:"90%"}}/></button></div>
                  <div className="col" ><button className="btn btn-default" style={{backgroundColor:"black",borderRadius:"10px"}}><img src="icons/google_pay-logo.png" className="rounded" style={{width:"90%"}}/></button></div>
          </div>
        </fieldset>
        <div style={{width: "100%", height: "20px", borderBottom: "1px solid black", textAlign: "center",marginTop: "30px",marginBottom: "30px"}}>
          <span style={{fontSize: "20px", backgroundColor: "white", padding:" 0 10px"}}>
          </span>
        </div>
        <p>Contact Information</p>
        <div className="row" style={{width: "50%",display:"flex",alignItems: "center",marginBottom: "20px"}}>
          <div className="col-3"><p style={{borderRadius:"100px",backgroundColor:"lightblue",width:"50px",height: "50px"}}></p></div>
          <div className="col-9" style={{display:"flex",flexDirection: "column"}}>
            <p>andres.satodiaz@gmail.com</p>
            <p style={{color:"purple",marginTop:"-15px"}}>Logout</p>
          </div>
        </div>
        <div><input type="checkbox" style={{marginRight:"20px"}}/>Email me with news and offers</div>
        <p style={{marginTop:"50px"}}>Shipping address</p>

        <div style={{border:"1px solid lightgray",borderRadius:"10px",padding:"10px",marginBottom: "20px"}}>
        <p style={{marginBottom: "-2px"}}>Saved addresses</p>
        <select name="cars" id="cars" style={{width:"100%",border:"none"}}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>

      <div style={{border:"1px solid lightgray",borderRadius:"10px",padding:"10px"}}>
        <p style={{marginBottom: "-2px"}}>Country/Region</p>
        <select name="cars" id="cars" style={{width:"100%",border:"none"}}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      
      <div className="row" style={{marginTop:"20px"}}>
        <div className="col">
          <div style={{border:"1px solid lightgray",borderRadius:"10px",padding:"10px"}}>
            <p style={{marginBottom: "-2px"}}>Country/Region</p>
            <input type="text" style={{width:"100%",border:"none"}} placeholder="Andres"/>
          </div>
        </div>
        <div className="col">
          <div style={{border:"1px solid lightgray",borderRadius:"10px",padding:"10px"}}>
            <p style={{marginBottom: "-2px"}}>Country/Region</p>
            <input type="text" style={{width:"100%",border:"none"}}  placeholder="Sato"/>
          </div>
        </div>
      </div>

      <div style={{border:"1px solid lightgray",borderRadius:"10px",padding:"10px",marginTop: "20px"}}>
        <input type="text" style={{width:"100%",border:"none"}}  placeholder="Company (optional)"/>
      </div>

      <div style={{border:"1px solid lightgray",borderRadius:"10px",padding:"10px",marginTop: "20px"}}>
        <input type="text" style={{width:"100%",border:"none"}}  placeholder="Address"/>
      </div>

      <div style={{border:"1px solid lightgray",borderRadius:"10px",padding:"10px",marginTop: "20px"}}>
        <input type="text" style={{width:"100%",border:"none"}} placeholder="Apartment, suite, etc (optional)"/>
      </div>

      <div className="row" style={{marginTop:"20px"}}>
        <div className="col">
          <div style={{border:"1px solid lightgray",borderRadius:"10px",padding:"10px"}}>
            <p style={{marginBottom: "-2px"}}>Country/Region</p>
            <input type="text" style={{width:"100%",border:"none"}} placeholder="Andres"/>
          </div>
        </div>
        <div className="col">
          <div style={{border:"1px solid lightgray",borderRadius:"10px",padding:"10px"}}>
            <p style={{marginBottom: "-2px"}}>Country/Region</p>
            <input type="text" style={{width:"100%",border:"none"}}  placeholder="Sato"/>
          </div>
        </div>
        <div className="col">
          <div style={{border:"1px solid lightgray",borderRadius:"10px",padding:"10px"}}>
            <p style={{marginBottom: "-2px"}}>Zip code</p>
            <input type="text" style={{width:"100%",border:"none"}}  placeholder="018"/>
          </div>
        </div>
      </div>

      <div style={{border:"1px solid lightgray",borderRadius:"10px",padding:"10px",marginTop: "20px"}}>
        <input type="text" style={{width:"100%",border:"none" }} placeholder="Phone"/>
      </div>
      <div style={{width:"100%",display:"flex",justifyContent:"space-between",marginTop:"50px",marginBottom:"20px"}}>
        <button style={{color:"purple"}}>  Return to cart</button>
        <button style={{backgroundColor:"#ba68c8",color:"white",padding:"10px",borderRadius:"10px"}}>Continue to shipping</button>
      </div>

      </div>

      </div>
      
      <div className="col">
        <div style={{marginTop: "50px"}}>
          <div style={{borderTopLeftRadius: "10px",borderTopRightRadius: "10px",backgroundColor:"rgba(0, 0, 0, 0.7)",width: "30%",marginLeft: "auto",marginRight: "auto",textAlign: "center",padding:"20px"}}>Price: <b id="price">${getPrice()}</b></div>
          <div id="list-checkout" style={{width:"80%",marginLeft:"auto",marginRight:"auto",backgroundColor:"rgba(0, 0, 0, 0.5)",padding: "20px",borderRadius:"10px"}}>
            {showCheckout()}
          </div>
        </div>
      </div>
    </div>
</div>
}
export default Checkout;