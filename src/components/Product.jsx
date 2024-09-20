import React from 'react';
import Button from '../components/Button';

function Product({ val, mover, resetHover, indexx }) {
    return (
        <div
            className={`w-full py-16 text-white h-[45vh] ${val.bgc} `}
            onMouseEnter={() => mover(indexx)}
            onMouseLeave={resetHover}
        >
            <div className='w-full mx-auto flex items-center justify-between pl-[5vh] pr-[5vh]'>
                <h1 className='text-6xl capitalize font-medium'>{val.title}</h1>
                <div className='dets w-1/3'>
                    <p className='mb-10'>{val.description}</p>
                    <div className='flex items-center gap-5'>
                        {val.live && <Button />}
                        {val.case && <Button title='Case study' />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
