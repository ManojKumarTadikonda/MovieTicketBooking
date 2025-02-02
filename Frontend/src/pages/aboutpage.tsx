import React from 'react';
import './AboutPage.css'; // Assuming styles will be moved to this CSS file

const AboutPage: React.FC = () => {
    return (
        <div>
            <div className="hero">
                <h1>About Movies 🎥</h1>
                <p>Discover the magic of cinema, from timeless classics to modern masterpieces.</p>
            </div>
            <div className="about">
                <h2>Our Love for Cinema ❤️</h2>
                <p>Movies have always been a powerful medium for storytelling, bringing emotions, adventures, and culture to life on the big screen. From the silent era to high-tech CGI, the industry continues to evolve, pushing the boundaries of creativity and imagination.</p>
                <h2>The Art of Filmmaking 🎬</h2>
                <p>Behind every great movie is a team of talented writers, directors, actors, and crew members who work together to craft unforgettable experiences. Genres such as drama, action, sci-fi, and documentaries allow for a diverse range of storytelling techniques.</p>
            </div>
            <div className="testimonial">
                <h3>What Our Viewers Say 😊</h3>
                <p>"Movies bring stories to life like no other medium. I love how they transport us to different worlds!" – Alex P.</p>
            </div>
            <div className="cta">
                <button>🎥 Explore More 🍿</button>
            </div>
            <div className="footer">
                <p>&copy; 2025 Movie Hub. All Rights Reserved. 🎬</p>
            </div>
        </div>
    );
};

export default AboutPage;
