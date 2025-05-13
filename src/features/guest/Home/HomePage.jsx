import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Simplified animation variants
const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const titleVariants = {
    hidden: { opacity: 0, y: 80, filter: "blur(8px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

const textVariants = {
    hidden: { opacity: 0, y: 60, filter: "blur(4px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

// Simplified icon variants - reduced animations
const floatingIconVariants = {
    hidden: { opacity: 0, scale: 0.4 },
    show: {
        opacity: 0.8,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

function HomePage() {
    const controls = useAnimation();
    const containerRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoaded(true);
            controls.start("show");
        }, 300);

        return () => clearTimeout(timeout);
    }, [controls]);

    // Reduced number of financial icons
    const icons = [
        { name: "💰", x: "10%", y: "20%", delay: 0.8 },
        { name: "💳", x: "85%", y: "15%", delay: 1.2 },
    ];

    return (
        <div
            className="relative w-full h-screen overflow-hidden"
            ref={containerRef}
        >
            {/* Background with static positioning for better performance */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/homepage.jpg')",
                }}
            />

            {/* Gradient overlay - static for performance */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30" />

            {/* Floating icons - reduced number */}
            <AnimatePresence>
                {isLoaded &&
                    icons.map((icon, index) => (
                        <motion.div
                            key={index}
                            className="absolute text-4xl md:text-5xl"
                            style={{ left: icon.x, top: icon.y }}
                            variants={floatingIconVariants}
                            initial="hidden"
                            animate="show"
                            transition={{ delay: icon.delay }}
                        >
                            {icon.name}
                        </motion.div>
                    ))}
            </AnimatePresence>

            {/* Main content container */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-12 max-w-5xl mx-auto"
            >
                {/* Animated logo accent - simplified */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80px" }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                    className="h-2 bg-green-400 rounded-full mb-4"
                />

                {/* Main heading with larger text */}
                <motion.h1
                    variants={titleVariants}
                    className="text-white text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-2xl"
                >
                    Chào mừng đến với{" "}
                    <span className="text-green-400 inline-block">6P Bank</span>
                </motion.h1>

                {/* Description with larger text */}
                <motion.p
                    variants={textVariants}
                    className="text-white text-xl md:text-2xl leading-relaxed drop-shadow-lg max-w-3xl"
                >
                    6P Bank là một tổ chức tài chính tiên phong, cung cấp các
                    dịch vụ ngân hàng hiện đại, an toàn và tiện lợi nhằm thúc
                    đẩy sự phát triển bền vững và thịnh vượng cho khách hàng.
                </motion.p>
            </motion.div>
        </div>
    );
}

export default HomePage;
