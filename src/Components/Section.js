import React from "react";


const Section = ({title, des}) => {



    return(
        <div className="section">
            <hr />
            <h1>{title}</h1>
            <p>{des}</p>
        </div>
    )
}

export default Section;