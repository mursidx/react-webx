import React, { useState, useEffect } from 'react';
import Product from './Product';
import { motion } from 'framer-motion';
import './product.css'

function Products() {
    const products = [
        {
            title: "Cula",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
            live: true,
            case: false,
            video: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/cula-43.webm",
            image: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b25022fc05f8e14ffabe57_zoom-04.webp",
            bgc: 'hover:bg-[#B7C2CE]'
        },
        {
            title: "BCG Platinion",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
            live: true,
            case: true,
            video: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/bcgp-43.webm",
            image: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d738822bacbaf65e4066_Starred%20-4%203.webp",
            bgc: 'hover:bg-[#005337]'
        },
        {
            title: "Arqitel",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
            live: true,
            case: false,
            video: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-43.webm",
            image: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b37f3012646db8fca81105_arqitel-special-feature-01-p-800.webp",
            bgc: 'hover:bg-[#5355EE]'
        },
        {
            title: "Sevdesk",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
            live: true,
            case: false,
            video: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/sevdesk-43.webm",
            image: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66a2ce8f3cc141895908bf6d_64cd6ec7666ac6009cfcb7db_11.webp",
            bgc: 'hover:bg-[#FB523B]'
        },
        {
            title: "Layout Land",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
            live: true,
            case: false,
            video: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/layoutland-169.webm",
            image: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b23a60fdf0bddb06264ef1_zoom-04.webp",
            bgc: 'hover:bg-[#1626F3]'
        },
        {
            title: "Singularity",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
            live: true,
            case: false,
            video: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/singularity-169.webm",
            image: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6696814af2061d7dbb54a8da_zoom-04.webp",
            bgc: 'hover:bg-[#4C20CF]'
        },
        {
            title: "Brightwave",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
            live: true,
            case: false,
            video: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/brightwave-169.webm",
            image: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b238384cc00b5a07e68d71_zoom-04.webp",
            bgc: 'hover:bg-[#686800]'
        },
        {
            title: "Botify",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
            live: true,
            case: false,
            video: "https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/botify-169.webm",
            image: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b23939a33cdceac8111bbb_zoom-04.webp",
            bgc: 'hover:bg-[#51249D]'
        },
    ];

    const [pos, setPos] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        // Preload videos as before
    }, []);

    const mover = (val) => {
        setPos(val * 45);
        setHoveredIndex(val);
        setShowVideo(false);
        setTimeout(() => {
            setShowVideo(true);
        }, 1000);
    };

    const resetHover = () => {
        setHoveredIndex(null);
        setShowVideo(false);
    };

    return (
        <div className='mt-32 relative'>
            <div className='absolute top-0 w-full h-full pointer-events-none'>
                <motion.div
                    initial={{ y: pos }}
                    animate={{ y: pos + 'vh' }}
                    style={{
                        border: hoveredIndex !== null ? '1px solid white' : 'none',
                    }}
                    className='window absolute w-[30vw] h-[45vh] rounded-xl left-[30vw] overflow-hidden' 
                >
                    {hoveredIndex !== null && (
                        <>
                            {!showVideo && (
                                <img
                                    className='w-full h-full object-cover'
                                    src={products[hoveredIndex].image}
                                    alt={products[hoveredIndex].title}
                                />
                            )}
                            {showVideo && (
                                <video
                                    className='w-full h-full object-cover'
                                    src={products[hoveredIndex].video}
                                    autoPlay
                                    muted
                                    loop
                                />
                            )}
                        </>
                    )}
                </motion.div>
            </div>
            {products.map((item, index) => (
                <Product mover={mover} resetHover={resetHover} indexx={index} key={index} val={item} />
            ))}
        </div>
    );
}

export default Products;