import React from 'react';
import PizzaCard from "../components/PizzaCard";
import {Categories, SortPopUp} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {filterAC} from "../redux/reducers/filterReducer";


const Home = () => {

    const pizzas=useSelector( ({setPizzas})=> setPizzas.items)
    const dispatch=useDispatch()
    const setCategory=index=>{
        dispatch(filterAC(index))
    }

    return (
        <div className='content'>
            <div className='container'>
                <div className='content__top'>
                    <Categories
                        items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые',]}
                        onClickItem={setCategory}
                    />
                    <SortPopUp items={["популярности", "цене", "алфавиту",]}/>
                </div>
                <h2 className='content__title'>Все пиццы</h2>
                <div className='content__items'>
                    {
                        pizzas.map((item,index)=>{
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
