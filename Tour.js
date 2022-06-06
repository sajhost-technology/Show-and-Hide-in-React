import React, { useState } from 'react'

const Tour = ({id, name, info, image, price}) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <div>
            <img src={image} alt={name} />
            <h4>name</h4>
            <h4>${price}</h4>
            <p>
                {
                    readMore ? info : `${info.substring(0, 200)} ...`
                }

                <button onClick={()=>setReadMore(!readMore)}>
                    {readMore ? 'show less' : 'show more'}
                </button>
            </p>
        </div>
    )
}

export default Tour;