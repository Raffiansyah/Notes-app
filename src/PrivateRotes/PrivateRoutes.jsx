import { Navigate } from "react-router-dom"
import { getAccessToken } from "../utils/api"

const PrivateRoutes = (props) =>{
    const user = getAccessToken()
    
    if(user === null) return <Navigate to='/login' />

    return props.children
}

export default PrivateRoutes