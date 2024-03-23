const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".btn");

window.onload = () => {
  insertColors(generateRandomColors(9));
};

refreshBtn.addEventListener("click", () => {
  insertColors(generateRandomColors(9));
});

function insertColors(colors) {
  container.innerHTML = "";

  colors.forEach((color) => {
    const colorMarkup = `
            <div class="box" style="cursor: pointer; background-color: ${color};" onclick="handleBoxClick('${color}')">
            ${color}
            </div>`;

    container.innerHTML += colorMarkup;
  });
}

function handleBoxClick(color) {
  navigator.clipboard.writeText(color); // jimmedar to copy
  toastr.success("Now you can use it!", "Copied to clipboard", {
    timeOut: 3000,
  });
}

function generateRandomColors(count) {
  const colors = [];

  for (let i = 1; i <= count; i++) {
    colors.push(generateRandomColor());
  }

  return colors;
}

function generateRandomColor() {
  return (
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padEnd(6, "0")
  );
}
