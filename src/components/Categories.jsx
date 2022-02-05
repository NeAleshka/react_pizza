import React from 'react';


//class component
class Categories extends React.Component {
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
}

//functional component
/*const Categories = ({items}) => {
   const [activeItem,setActiveItem]=useState('Все')
    return (
        <div className='categories'>
            <ul>
                {
                    items.map((item,index)=><li
                        className={activeItem===item?'active':''}
                        onClick={()=>setActiveItem(item)}
                        key={`${item}__${index}`}>{item}</li>)
                }
            </ul>
        </div>
    );
};*/

export default Categories;
