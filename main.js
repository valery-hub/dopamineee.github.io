onload = () =>{
        document.body.classList.remove("container");
};
window.addEventListener("load", function() {
  const audio = document.querySelector("audio");
  audio.play().catch(() => {
    document.body.addEventListener("click", () => {
      audio.play();
    });
  });
});
