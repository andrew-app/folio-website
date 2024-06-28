export function expand(details, summary, content, animation, isExpanding, isCollapsing) {
    details.style.height = `${details.offsetHeight}px`;
    details.open = true;

    window.requestAnimationFrame(() => {
        isExpanding = true;
        if (animation) animation.cancel();

        const start = `${details.offsetHeight}px`;
        const end = `${summary.offsetHeight + content.offsetHeight}px`;
        animation = details.animate({ height: [start, end] }, { duration: 300, easing: 'ease-in-out' });

        animation.onfinish = () => onFinish(true);
        animation.oncancel = () => (isExpanding = false);
    });

    function onFinish(isOpen) {
        details.open = isOpen;
        animation = null;
        isCollapsing = false;
        isExpanding = false;
        details.style.height = null;
        details.style.overflow = 'visible';
    }
};

export function collapse(details, summary, animation, isCollapsing, isExpanding) {
    isCollapsing = true;

    window.requestAnimationFrame(() => {
    if (animation) animation.cancel();

    const start = `${details.offsetHeight}px`;
    const end = `${summary.offsetHeight}px`;
    animation = details.animate({ height: [start, end] }, { duration: 300, easing: 'ease-in-out' });

    animation.onfinish = () => onFinish(false);
    animation.oncancel = () => (isCollapsing = false);
    });

    function onFinish(isOpen) {
        details.open = isOpen;
        animation = null;
        isCollapsing = false;
        isExpanding = false;
        details.style.height = null;
        details.style.overflow = 'visible';
    }
};

