const button = document.querySelector("button");
button.addEventListener("click", () => {
  fetch("http://localhost:3000/create-checkout-session", {
    method: "POST",
  })
    .then((res) => res.json())
    .then(({ url }) => {
      window.location.href = "http://localhost:3000/todo"; // Change the URL here
    })
    .catch((e) => {
      console.error(e.error);
    });
});
