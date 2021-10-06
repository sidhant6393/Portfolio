export const scrollWithOffset = (el, offset) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = offset || 0;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
}