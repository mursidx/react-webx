import React, { useEffect } from 'react';

function Loader() {

    // Disable right-click for the Loader component
    useEffect(() => {
        const disableRightClick = (e) => {
            if (e.target.tagName === 'VIDEO') {
                e.preventDefault(); // Disable right-click on video
            }
        };

        document.addEventListener('contextmenu', disableRightClick);

        return () => {
            document.removeEventListener('contextmenu', disableRightClick); // Cleanup
        };
    }, []);

    return (
        <div 
            className="fixed top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center bg-zinc-900 z-50"
            onContextMenu={(e) => e.preventDefault()} // Disable right-click globally on the loader
        >
            <video
                className="w-[50%] object-cover hidden-video" // You can use a disguised class name
                src="https://gplclub.co/wp-content/uploads/2024/09/loader3.mp4"
                autoPlay
                muted
                loop
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback" // Disable download and fullscreen
            />
        </div>
    );
}

export default Loader;
