import React,{useState} from 'react';

//functional component
const Categories = ({items,onClickItem}) => {
   const [activeItem,setActiveItem]=useState(null)

    const selectItemHandler = (index) => {
        setActiveItem(index)
        onClickItem(index)
    }


    return (
        <div className='categories'>
            <ul>
                <li
                    className={activeItem===null?'active':''}
                    onClick={()=>selectItemHandler(null)}>Все</li>
                {
                    items.map((item,index)=><li
                        className={activeItem===index?'active':''}
                        onClick={()=>selectItemHandler(index)}
                        key={`${item}__${index}`}>{item}</li>)
                }
            </ul>
        </div>
    );
};

export default Categories;


//class component
/*class Categories extends React.Component {
    state = {
        activeItem: 0
    }

    clickedCategory = (index) => {
        this.setState({
            activeItem: index
        })
    }
    render() {
        const {items} = this.props
        return (
            <div className='categories'>
                <ul>
                    {
                        items.map((item, index) => <li
                            className={this.state.activeItem === index ? 'active' : ''}
                            onClick={() => this.clickedCategory(index)}
                            key={`${item}__${index}`}>{item}</li>)
                    }
                </ul>
            </div>
        )
    }
}*/