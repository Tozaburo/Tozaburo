var lang = window.navigator.language;

window.addEventListener("DOMContentLoaded", function () {
  clang();
});

function clang() {
  if (lang != "ja") {
    document.querySelector("#title").innerHTML = "Tozaburo | Toe Kobayashi";
    document.querySelector(".main").innerHTML = `
    <div class="text">
      <div class="title">
        <h1>Tozaburo</h1>
        <h2>Toe Kobayashi</h2>
      </div>
      <div class="button-list">
<!--         <a href="https://tozaburo.github.io/who" class="button">Who Are You?</a> -->
        <a href="https://tozaburo.github.io/activity" class="button">What Are You Doing?</a>
        <a href="https://tozaburo.github.io/projects" class="button">What is Your Projects?</a>
      </div>
    </div>
    `;
  }
}
