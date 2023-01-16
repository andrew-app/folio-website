import type { Component } from 'solid-js';

const NavBar: Component = () => {
    return (
    <div class="grid place-items-center h-screen">
        <nav class="flex sm:justify-center space-x-4">
            {[
            ['ABOUT', '/about'],
            ['SOCIALS', '/socials'],
            ['TECH', '/tech'],
            ['PROJECTS', '/projects'],
            ].map(([title, url]) => (
            <a href={url} class="rounded-lg px-3 py-3 text-white text-6xl font-medium hover:text-yellow-200 font-oswald animate-fade-in-text">{title}</a>
            ))}
        </nav>
    </div>
    );
};

export default NavBar;