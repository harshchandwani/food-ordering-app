import { useRouteError } from "react-router-dom";
//use is a hook

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Sorry yrrr!!!! this is an error page</h1>
            <h2>WE WILL SOON MAKING THIS PAGE</h2>
        </div>
    )
}

export default Error;