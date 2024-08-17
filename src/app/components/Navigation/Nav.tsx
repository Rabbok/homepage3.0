'use client';

import { useState, useEffect } from "react";

const Nav = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            let newIndex = 0;
            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (scrollY + windowHeight / 2 >= sectionTop && scrollY + windowHeight / 2 < sectionTop + sectionHeight) {
                    newIndex = index;
                }
            });

            setActiveIndex(newIndex);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const items = [
        { text: 'ABOUT', href: '#about' },
        { text: 'EXPERIENCE', href: '#experience' },
        { text: 'PROJECTS', href: '#projects' }
    ];

    const handleNavClick = (href: string) => {
        const section = document.querySelector(href);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav>
            {items.map((item, index) => {
                const isActive = activeIndex === index || hoveredIndex === index;
                const lineStyle = {
                    width: isActive ? '4rem' : '2rem',
                    backgroundColor: isActive ? 'white' : '#6b7280',
                    transition: 'all 0.3s ease',
                };

                const textStyle = {
                    color: isActive ? 'white' : '#6b7280',
                    transition: 'color 0.3s ease',
                };

                return (
                    <div
                        key={index}
                        className="flex items-center cursor-pointer"
                        onClick={() => handleNavClick(item.href)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div style={lineStyle} className="h-1"></div>
                        <span style={textStyle} className="font-bold ml-3">
                            {item.text}
                        </span>
                    </div>
                );
            })}
        </nav>
    );
};

export default Nav;