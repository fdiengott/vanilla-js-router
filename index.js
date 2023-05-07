window.addEventListener("DOMContentLoaded", () => {
    document
        .querySelectorAll(".page:not(#home)")
        .forEach((page) => page.classList.add("hidden"));
});

const closeAllOtherPages = (pageIdToRemainOpen) => {
    document
        .querySelectorAll(`.page:not(#${pageIdToRemainOpen})`)
        .forEach((page) => page.classList.add("hidden"));
};

window.addEventListener("hashchange", () => {
    console.log("hash", window.location.hash);

    const location = window.location.hash.substring(1);
    document.querySelector(`#${location || "home"}`).classList.remove("hidden");
    closeAllOtherPages(location);
});
