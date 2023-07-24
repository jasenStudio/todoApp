export const todoReducer = ( initialState = [] , action ) => {


    console.log( initialState );
console.log( action )
    switch (action.type) {
        case '[TODO] Add todo':   

            return [
                ...initialState,action.payload
            ]

        case '[TODO] Remove todo':
            return  initialState.filter( todo => todo.id !== action.payload )
            
        case '[TODO] Toggle todo':
                return  initialState.map( todo => {


                    if( todo.id === action.payload ){
                        return {
                            ...todo,
                            done: !todo.done
                        }
                    }

                    return todo
                } ) 
    
        default:
            return initialState;
    }

    

}