'use client';

import { useState } from "react";

const Nav = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const items = [
        { text: 'ABOUT', href: '#' },
        { text: 'EXPERIENCE', href: '#' },
        { text: 'PROJECTS', href: '#' }
    ];

    return (
        <nav>
            {items.map((item, index) => {
                const lineStyle = {
                    width: hoveredIndex === index ? '4rem' : '2rem',
                    backgroundColor: hoveredIndex === index ? 'white' : '#6b7280',
                    transition: 'all 0.3s ease',
                };

                const textStyle = {
                    color: hoveredIndex === index ? 'white' : '#6b7280',
                    transition: 'color 0.3s ease',
                };

                return (
                    <div
                        key={index}
                        className="flex items-center cursor-pointer"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div style={lineStyle} className="h-1"></div>
                        <a href={item.href} style={textStyle} className="font-bold ml-3">
                            {item.text}
                        </a>
                    </div>
                );
            })}
        </nav>
    );
};

export default Nav;