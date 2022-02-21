const initialState={
    items:[]
}

const setPizzas = (state=initialState,action) => {

  switch (action.type){
      case 'SET_PIZZAS':{
          return {...state,
              items:action.payload}
      }
      default:return state
  }

}

export default setPizzas

export const setPizzasAC = (payload) => {
  return{
      type:'SET_PIZZAS',
      payload:payload
  }
}
