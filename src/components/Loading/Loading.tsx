import spinner from "./loading.png"
import "./loading.css"
export const Loading=()=>{
    return(
        <div>
            <img className="spinner" width="4%" src={spinner} alt=""/>
        </div>
    )
}