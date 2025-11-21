import { useRouteError } from "react-router-dom"
 const Error =() => {

    const err  : unknown = useRouteError();
    return (
        <div>
            <h1>Oops! Something went Wrong</h1>
            <h2>Status : {err.status}</h2>
            <h2>Issue : {err.statusText}</h2>
        </div>
    )
 }


 export default Error;