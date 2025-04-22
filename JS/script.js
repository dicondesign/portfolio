const thumbnails = document.querySelectorAll(".project-thumb");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalDesc = document.getElementById("modal-desc");
const modalClose = document.getElementById("modal-close");

const projectData = {
  1: {
    img: "Assets/Branding.jpg.jpg",
    desc: "Pawpal Branding"
  },
  2: {
    img: "Assets/Packaging.jpg.jpg",
    desc: "Delizia Pasta packaging"
  },
  3: {
    img: "Assets/merch.jpg.jpg",
    desc: "Merchandise Design"
  },
  4: {
    img: "Assets/Menu.jpg.jpg",
    desc: "Evowallet wireframe and UX case study."
  },
  5: {
    img: "Assets/ux.jpg.jpg",
    desc: "Merchandise design for artist 92914."
  },
  6: {
    img: "Assets/Posters.jpg.jpg",
    desc: "Color Game UX challenge using Adobe XD."
  }
};

thumbnails.forEach(thumb => {
  thumb.addEventListener("click", () => {
    const id = thumb.dataset.project;
    const data = projectData[id];
    modalImg.src = data.img;
    modalDesc.textContent = data.desc;
    modal.style.display = "flex";
  });
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
