import type { Component } from 'solid-js';

const NavBar: Component = () => {
    return (
        <nav class="flex justify-center flex-col">
            {[
            ['ABOUT', '/about'],
            ['SOCIALS', '/socials'],
            ['TECH', '/tech'],
            ['PROJECTS', '/projects'],
            ['BLOGS', '/blogs'],
            ].map(([title, url]) => (
            <a href={url} class="rounded-lg px-3 py-3 text-white text-6xl font-medium hover:text-yellow-200 font-futura animate-fade-in-text">{title}</a>
            ))}
        </nav>
    );
};

export default NavBar;