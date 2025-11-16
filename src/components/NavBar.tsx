import type { Component } from "solid-js";

const NavBar: Component = () => {
  return (
    <nav class="flex justify-center flex-col">
      {[
        ["ABOUT", "/about"],
        ["SOCIALS", "/socials"],
        ["TECH", "/tech"],
        ["PROJECTS", "/projects"],
        ["BLOGS", "/blogs"],
      ].map(([title, url]) => (
        <a
          class="rounded-lg px-3 py-3 text-white group text-6xl font-medium font-futura overflow-hidden animate-fade-in-text hover:text-yellow-200 text-shadow-[0_66px_0_white]"
          href={url}
        >
          <LetterSegment title={title} />
        </a>
      ))}
    </nav>
  );
};

const LetterSegment: Component<{ title: string }> = (props) => {
  // @ts-ignore
  const segmenter = new Intl.Segmenter({ granularity: "letter" });
  const letters = Array.from(segmenter.segment(props.title));

  return letters.map((letter: Intl.SegmentData) => (
    <span class="relative inline-block group-hover:rolling-text">
      {letter.segment}
    </span>
  ));
};

export default NavBar;
