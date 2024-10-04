// JavaScript để xử lý trạng thái active khi nhấp vào ảnh
document
  .querySelector(".image-container")
  .addEventListener("click", function () {
    this.classList.toggle("active"); // Toggle class "active" mỗi khi nhấp vào
  });
