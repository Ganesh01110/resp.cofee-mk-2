import { createSlice} from "@reduxjs/toolkit";


const fetchstatusSlice = createSlice({
    name:'fetchStatus',
    initialState:  {
        fetchDone: false, //false:'PENDING' AND true:'DONE'
        currentlyFetching: false,
       } ,
    reducers: {
       markFetchDone: (state) =>{
            state.fetchDone = true ;
        },
        markFetchingStarted: (state) =>{
            state.currentlyFetching = true;
        },
        markFetchingEndeded: (state) =>{
            state.currentlyFetching = false;
        }
    }
});

export const fetchstatusActions = fetchstatusSlice.actions;

export default fetchstatusSlice;


