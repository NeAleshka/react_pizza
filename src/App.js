import React, {useEffect, useState} from "react"
import {Header} from './components'
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import Basket from "./Basket"
import axios from "axios";

function App() {
    const [pizzas,setPizzas]=useState([])


   useEffect(()=>{
     axios.get('http://localhost:3000/db.json').then(({data})=>{
         setPizzas(data.pizzas)
     })


      /* fetch('http://localhost:3000/db.json').then((res)=>res.json()).then((json)=>{
         setPizzas(json.pizzas)});*/
   },[])


    return (
        <div class='wrapper'>
            <Header/>
            <Routes>
                <Route path={'/'} element={ <Home pizzas={pizzas}/> }/>
                <Route path={`/basket`} element={ <Basket/> }/>
            </Routes>
        </div>
    )
}
export default App
