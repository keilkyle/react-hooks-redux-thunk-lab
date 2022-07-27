import React from "react";

function CatList ({catPics}) {
    return (
        catPics.map((pic) => <img alt="cat" src={pic.url}></img>)
    )
}

export default CatList