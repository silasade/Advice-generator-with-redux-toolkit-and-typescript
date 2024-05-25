import { useEffect, useState } from "react"
import dice from "../images/icon-dice.svg"
import divider from "../images/pattern-divider-mobile.svg"
import { Loading } from "../Loading/Loading"
import { fetchAdvice } from "../../features/Advice/AdviceSlice"
import { useAppDispatch,useAppSelector } from "../../app/Hooks"
import { Error } from "./Error"
import "./Advice.css"
const Advice=()=>{
   const advice=useAppSelector(state=>state.advice)
   const dispatch=useAppDispatch()
    function handleclick(){
        dispatch(fetchAdvice())
    }
    useEffect(()=>{
        handleclick()
    },[])
    return(
        <>
        {advice.loading && <Loading/>}
        {(!advice.loading && advice.data.slip.id>0) &&
        <div className="advice">
           
            <div><h4>{`ADVICE # ${advice.data.slip.id}`}</h4></div>
            
            <div><h3>{`"${advice.data.slip.advice}"`}</h3></div>
            
            <div><img src={divider} className="divider" alt="divider"/></div>
            <div><img className="dice" onClick={handleclick} src={dice} alt="divider"/></div>
           
        </div>
}
        {(!advice.loading && advice.error) && <Error errorMsg={advice.error}/>}
        </>
    )
}
export default Advice