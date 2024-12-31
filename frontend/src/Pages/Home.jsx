import "../Styles/Home.css";
import { useEffect } from 'react';


const Home = () => {

    useEffect(() => {
        // Disable scrolling
        document.body.style.overflow = 'hidden';
    
        // Re-enable scrolling when leaving the page
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, []);
    return (
        <div className="home-container">
            {/* Welcome Section */}
            <div className="welcome-section">
            <h1>Welcome to My Personal Website</h1>
            <div class="separator"></div>
            <p>Explore my projects, learn more about me, or get in touch!</p>
            </div>

            {/* Cards Section */}
            <div className="cards-section">
            <div className="card" onClick={() => window.location.href = "/projects"}>
                <img src="https://cdn-icons-png.flaticon.com/512/1087/1087815.png" alt="Projects" />
                <h2>Projects</h2>
                <p>Discover my favorite projects and explore what I’ve been working on.</p>
            </div>
            <div className="card" onClick={() => window.location.href = "/about"}>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/indian-cricket-player-kissing-his-helmet-after-completing-the-century-2660169-2221071.png" alt="About Me" />
                <h2>About Me</h2>
                <p>Learn more about my background, skills, and interests.</p>
            </div>
            <div className="card" onClick={() => window.location.href = "/contact"}>
                <img src="https://logodix.com/logo/2092966.png" alt="Contact" />
                <h2>Contact</h2>
                <p>Reach out to collaborate or ask questions about my work.</p>
            </div>
            </div>
        </div>
    );
};

export default Home;