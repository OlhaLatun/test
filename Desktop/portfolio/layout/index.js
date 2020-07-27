const container = document.querySelector(".experience");
const bars = document.querySelectorAll(".purple_bar");

container.addEventListener("scroll", () => {
  bars.forEach((bar) => {
    bar.className = "animate_web_bar";
    bar.style.animationName = "bar" + bar.id;
  });

  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) =>
    setTimeout(function updateCount() {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const inc = 1;

      if (count < target) {
        counter.innerText = count + inc;
        setTimeout(updateCount, 40);
      } else {
        counter.innerText = target;
      }
    }, 500)
  );

  updateCount();
});

const testimonialsContainer = document.querySelector(".testimonials");
const testimonialCards = document.querySelectorAll(".card");

testimonialsContainer.addEventListener("scroll", updateCount);

function updateCount() {
  testimonialCards.forEach((card) => {
    const target = +card.getAttribute("data-target");
    const count = +card.innerText;
    const inc = 3;

    if (count < target) {
      card.innerText = count + inc;
      setTimeout(updateCount, 20);
    } else {
      card.innerText = target;
    }
  });
}
