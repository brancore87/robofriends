import React, { useState } from 'react';
import 'tachyons';

const Card = ({ id, name }) => {
    const [count, setCount] = useState(1)
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            
            <img  src={`https://robohash.org/${id}?set=set${count}`} alt='robots' />
            <div>
                <h2 className='tc br3'>{name}</h2>
                <button
                    className="tc pill pa3 ma3 grow br3 b--light-purple bg-black white"
                    onClick={() => setCount(count <= 0? 1 : count - 1)}>
                        Prev
                </button>
                <button className="tc pill pa3 ma3 grow br3 b--light-purple bg-black white"
                            onClick={() => setCount(count >= 5? 1 : count + 1)}>
                        Next
                    </button>
            </div>
        </div>
    );
}

export default Card;