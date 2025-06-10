document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery-grid img");

  
    images.forEach(img => {
      img.addEventListener("click", () => {
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = "100vw";
        overlay.style.height = "100vh";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.zIndex = 9999;
  
        const largeImg = document.createElement("img");
        largeImg.src = img.src;
        largeImg.style.maxWidth = "90%";
        largeImg.style.maxHeight = "90%";
        largeImg.style.borderRadius = "10px";
  
        overlay.appendChild(largeImg);
        document.body.appendChild(overlay);
  
        overlay.addEventListener("click", () => {
          document.body.removeChild(overlay);
        });
      });
    });
  });


  
// JavaScript: dynamic image loading for gallery
const imageList = [
  "cafe-interior.jpeg",
  "cafe-exterior.jpeg",
  "coffee-cup.jpeg",
];

const gallery = document.getElementById("image-gallery");

imageList.forEach((imgName) => {
  const img = document.createElement("img");
  img.src = `images/${imgName}`;
  img.alt = imgName.replace(/[-_]/g, ' ').replace(/\.[^/.]+$/, '');
  img.classList.add("gallery-image");
  gallery.appendChild(img);
});

  