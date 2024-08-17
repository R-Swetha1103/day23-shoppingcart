
import React,{useState} from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
function App() {
  let [cart, setCart] = useState(0);
  let data =[
    {
      isSale:false,
      sale:"sale",
      productName:"Fancy Product",
      isPrice1:false,
      price1:"$40.00 -",
      isPrice2:true,
      price2:" $80.00",
      
    },
    {
      isSale:true,
      sale:"sale",
      productName:"Special Item",
      isPrice1:true,
      price1:"$20.00",
      isPrice2:true,
      price2:" $18.00",
    },
    {
      isSale:true,
      sale:"sale",
      productName:"Sale Item",
      isPrice1:true,
      price1:"$50.00",
      isPrice2:true,
      price2:" $25.00",
    },
    {
      isSale:false,
      sale:"sale",
      productName:"Popular Item",
      isPrice1:true,
      price1:null,
      isPrice2:true,
      price2:" $40.00",
    },
    {
      isSale:true,
      sale:"sale",
      productName:"Sale Item",
      isPrice1:true,
      price1:"$50.00",
      isPrice2:true,
      price2:" $25.00",
    },
    {
      isSale:false,
      sale:"sale",
      productName:"Fancy Product",
      isPrice1:false,
      price1:"$120.00 -",
      isPrice2:true,
      price2:" $280.00",
    },
    {
      isSale:true,
      sale:"sale",
      productName:"Special Item",
      isPrice1:true,
      price1:"$20.00",
      isPrice2:true,
      price2:" $18.00",
    },
    {
      isSale:false,
      sale:"sale",
      productName:"Popular Item",
      isPrice1:true,
      price1:null,
      isPrice2:true,
      price2:" $40.00",
    }
  ]
  return <>
  
      <TopBar cart={cart} setCart={setCart}/>
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {
        data.map((e,i)=>{
          return  <Card cart={cart} setCart={setCart} data={e} key={i}/> 
        })
      }
            
          </div>
        </div>
      </section>
    <footer className="py-5 bg-dark">
    <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
</footer>
</>
}

export default App;
