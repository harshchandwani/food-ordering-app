import React from "react";
import { Shimmer } from "react-shimmer";


const Loading = () => {
    return (
        <div className="flex flex-wrap px-20 py-20">
            <Shimmer className="m-10" width={250} height={350}/>
            <Shimmer className="m-10" width={250} height={350}/>
            <Shimmer className="m-10" width={250} height={350}/>
            <Shimmer className="m-10" width={250} height={350}/>
            <Shimmer className="m-10" width={250} height={350}/>
            <Shimmer className="m-10" width={250} height={350}/>
            <Shimmer className="m-10" width={250} height={350}/>
            <Shimmer className="m-10" width={250} height={350}/>
            <Shimmer className="m-10" width={250} height={350}/>
        </div>
    )
}

export default Loading;