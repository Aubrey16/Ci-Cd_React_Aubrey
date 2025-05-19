import { useState, useEffect } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const [FallingStars, setFallingStars] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();
        generateFallingStars();

        const handleResize = () => {
            generateStars();
            generateFallingStars();
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);

        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }

        setStars(newStars);
    };

        const generateFallingStars = () => {
        const numberOfFallingStars = Math.floor(window.innerWidth * window.innerHeight / 10000);

        const newFallingStars = [];
        for (let i = 0; i < numberOfFallingStars; i++) {
            newFallingStars.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });
        }

        setFallingStars(newFallingStars);
    };

        const generateMeteors = () => {
        const numberOfMeteors = 4


        const newMeteors = [];
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });
        }

        setMeteors(newMeteors);
    };

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        position: "absolute",
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: star.opacity,
                        backgroundColor: "white",
                        borderRadius: "50%",
                        animationDuration: `${star.animationDuration}s`,
                    }}
                />
            ))}
                {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        position: "absolute",
                        width: meteor.size * 50 + "px",
                        height: `${meteor.size}px`,
                        left: `${meteor.x}%`,
                        top: `${meteor.y}%`,
                        animationDelay: meteor.delay,
                        backgroundColor: "white",
                        borderRadius: "50%",
                        animationDuration: `${meteor.animationDuration}s`,
                    }}
                />
            ))}

                {FallingStars.map((Fallingstar) => (
                <div
                    key={Fallingstar.id}
                    className="meteor animate-meteor"
                    style={{
                        position: "absolute",
                        width:Fallingstar.size + "px",
                        height: `${Fallingstar.size}px`,
                        left: `${Fallingstar.x}%`,
                        top: `${Fallingstar.y}%`,
                        animationDelay: Fallingstar.delay,
                        backgroundColor: "white",
                        borderRadius: "50%",
                        animationDuration: `${Fallingstar.animationDuration}s`,
                    }}
                />
            ))}
        </div>
    );
};
