onload = () =>{
        document.body.classList.remove("container");
};
<script>
  window.addEventListener("load", function() {
    const audio = document.querySelector("audio");
    audio.play().catch(() => {
      document.body.addEventListener("click", () => {
        audio.play();
      }, { once: true });
    });
  });
</script>
