function toggleResearch(header) {
    const item = header.parentElement;
    const details = item.querySelector('.research-details');
    const arrow = header.querySelector('.toggle-arrow');
    
    details.classList.toggle('active');
    arrow.classList.toggle('rotated');
}
