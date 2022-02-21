import React from 'react';
import PizzaCard from "../components/PizzaCard";
import {Categories, SortPopUp} from "../components";
import {useSelector} from "react-redux";


const Home = () => {

    const pizzas=useSelector( ({setPizzas})=> {
        return{
            items:setPizzas.items,
        }
    })

    return (
        <div className='content'>
            <div className='container'>
                <div className='content__top'>
                    <Categories
                        items={['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые',]}
                    />
                    <SortPopUp items={["популярности", "цене", "алфавиту",]}/>
                </div>
                <h2 className='content__title'>Все пиццы</h2>
                <div className='content__items'>
                    {
                        pizzas.items.map((item,index)=>{
                            return <PizzaCard
                                key={`${item}__${index}`}
                                {...item}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    );
};


export default Home;
