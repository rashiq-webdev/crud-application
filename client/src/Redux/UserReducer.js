import {createSlice} from '@reduxjs/toolkit'


const userSlice=createSlice({
    name:'user',
    initialState:{
        value:[{id:'',name:'',age:'',email:'',contact:''}]
    },
    reducers:{
        Edit:(state,action)=>{
            state.value=action.payload
        },
    }

})

export const {Edit}=userSlice.actions;
export default userSlice.reducer;
