const initialState = {
    category: 0,
}


const filterReducer = (state = initialState, action) => {
 switch (action.type) {
     case 'SET_CATEGORY':{
         return {...state,
         category: action.payload.activeCategory}
     }
     default:return state
 }

}

export const filterAC=(activeCategory)=>{
    return{
        type:'SET_CATEGORY',
        payload:{
            activeCategory
        }
    }
}


export default filterReducer