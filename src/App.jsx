import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Stripes from './components/Stripes';
import Products from './components/Products';
import Marquess from './components/Marquess';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
    const [loading, setLoading] = useState(true); // Loading state
    const [isMobile, setIsMobile] = useState(false); // Mobile detection state

    // Check if the user is on a mobile device
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Mobile breakpoint (you can adjust this)
        };

        // Initial check on component mount
        handleResize();

        // Event listener to detect window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Simulate a loading delay (e.g., wait for content to be ready)
        const timeout = setTimeout(() => {
            setLoading(false); // Hide loader after 10.7 seconds
        }, 10700);

        // Cleanup timeout when component unmounts
        return () => clearTimeout(timeout);
    }, []);

    // Mobile message to show on mobile devices
    const mobileMessage = (
        <div style={styles.messageContainer}>
            <h2>For the best experience, please use a desktop to view this website. 💻✨</h2>
            <p>Our animations and transitions are designed to shine on a larger screen! 🌟</p>
        </div>
    );

    // Don't load any components on mobile devices
    if (isMobile) {
        return mobileMessage; // Show the mobile message and stop further rendering
    }

    // Show Loader until loading is complete
    if (loading) {
        return <Loader />;
    }

    // Desktop view: Show the full app once loading is complete
    return (
        <div className='w-full min-h-screen bg-zinc-900 text-white font-[satoshi variable]'>
            <Navbar />
            <Work />
            <Stripes />
            <Products />
            <Marquess />
            <Cards />
            <Footer />
        </div>
    );
}

// Inline styles for the message container
const styles = {
    messageContainer: {
        textAlign: 'center',
        marginTop: '50px',
        padding: '20px',
        fontSize: '18px',
        backgroundColor: '#f0f0f0',
        color: '#333',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
};

export default App;
