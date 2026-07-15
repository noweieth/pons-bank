const copyButton = document.querySelector("[data-copy]");
const toast = document.querySelector(".toast");
const updatedTime = document.querySelector("[data-updated]");

let toastTimer;

copyButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(copyButton.dataset.copy);
    toast.textContent = "Contract copied";
  } catch {
    toast.textContent = "Copy unavailable";
  }

  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 1800);
});

window.setInterval(() => {
  if (updatedTime) updatedTime.textContent = "1 min ago";
}, 60000);
