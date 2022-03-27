import { cartActions } from "./cartSlice"


export const  fetchData=()=>{
    return async (dispatch)=>{
        const fetchDataHandler=async()=>{
            const res = await fetch('https://react-http-561b5-default-rtdb.firebaseio.com/cartItems.json')
            const data= await res.json()
            return data
        }
        try{
            const cartData= await fetchDataHandler()
            dispatch(cartActions.replaceData(cartData))
            console.log(cartData)
        }catch(error){
            console.log(error)
        }
    }
}