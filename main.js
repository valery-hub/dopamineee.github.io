window.addEventListener("load", () => {
    const audio = document.getElementById("bgm");
    audio.muted = false;
    audio.play().catch(() => {
        document.body.addEventListener("click", () => audio.play(), { once: true });
    });
});
