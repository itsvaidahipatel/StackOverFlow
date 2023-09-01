import * as api from '../api'
import { setCurrentUser } from './currentUser';

export const signup=(authData,navigate)=>async(dispatch)=>{
    try {
        const response=await api.signUp(authData)
        let data=response.data;
        dispatch({type:"AUTH", data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}
export const login=(authData,navigate)=>async(dispatch)=>{
    try {
        const response=await api.logIn(authData)
        let data=response.data;
        dispatch({type:"AUTH", data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}
