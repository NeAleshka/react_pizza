import React, {useEffect} from "react"
import {Header} from './components'
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Basket from "./components/Basket"
import {useDispatch} from "react-redux";
import axios from "axios";
import {setPizzasAC} from "./redux/reducers/setPizzasReducer";

function App() {
    const dispatch=useDispatch()
    useEffect(()=>{
        axios.get('http://localhost:3000/db.json').then(({data: {pizzas: pizzasItems}})=>{
            console.log()
            dispatch (setPizzasAC((pizzasItems)))
        })
    },[])

    return (
        <div class='wrapper'>
            <Header/>
            <Routes>
                <Route path={'/*'} element={ <Home /> }/>
                <Route path={`/basket`} element={ <Basket/> }/>
            </Routes>
        </div>
    )
}
export default App
