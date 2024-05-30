change = () => {
  let tap = document.getElementById("btn").value;
  let r = Math.trunc(Math.random() * (255 - 0)) + 0;
  let g = Math.trunc(Math.random() * (255 - 0)) + 0;
  let b = Math.trunc(Math.random() * (255 - 0)) + 0;
  document.getElementById(
    "change"
  ).style.backgroundColor = `RGB(${r},${g},${b})`;
};
