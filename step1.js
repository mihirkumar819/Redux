//action  type is a constant name of event
//action creator is function that returns an action object
// reducer is a function which has switch cases to call function based on action type
//initial state is initial value of storeobject
// store is an object that stores all shared states of your application
// subscribe /unsubscrbe to listen to change of the store
//dispatch is a method that can take action object


let redux=require("redux");
let createStore =redux.legacy_createStore;

//ACTION

const ADDHERO="ADDHERO";




// ACTION CREATOR
let addhero=function(){
    return{
    type:ADDHERO
    }
};


//INITIAL STATE
let initialState={
    numberOfHeroes:0
}


//Reducer
let reducer=(state=initialState,action)=>{
    switch(action.type){
        case ADDHERO:return {numberOfHeroes:state.numberOfHeroes +1}
        default : return state
    }
};

let store=createStore(reducer);
console.log("Initial  value of stores",store.getState());

let unsubscribe=store.subscribe(()=>console.log("subscibed", store.getState()));
store.dispatch(addhero());
store.dispatch(addhero());
store.dispatch(addhero());
store.dispatch(addhero());
store.dispatch(addhero());
store.dispatch(addhero());

