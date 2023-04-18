function scrollToTitle(titleId) {
    var titleElement = document.getElementById(titleId);
    titleElement.scrollIntoView({
        behavior: 'smooth'
    });
}