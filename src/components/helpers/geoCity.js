import React, { useState } from "react";
import GetPos from "./getPos";

export default function GeoCity() {
    const [myCity, setCity] = useState(-1);

    console.log(myCity,"GeoCity");
    GetPos(myCity, setCity);
    console.log(myCity.name,"GeoCity");

    return (
        <div>
            <h1>{myCity.name}</h1>
        </div>
    )
}