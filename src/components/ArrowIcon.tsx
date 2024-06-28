const ArrowIcon = ({route}: {route?: string}) => {
    return(
        <button>
            <a href={route ?? "/"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-10 h-18 hover:fill-yellow-200">
            <title>Back Arrow</title>
            <path fill-Rule="evenodd"   d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" />
            </svg>
            </a>
        </button>
    );
}

export default ArrowIcon;