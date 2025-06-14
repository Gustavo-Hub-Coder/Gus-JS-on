export default function hamburguerMenu(panelBtn, panel) {
    const d = document;
    d.addEventListener("click", e => {
        if((e.target.matches(panelBtn) || e.target.closest(panelBtn)) ) {
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        }
    });
}
