document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section"); // Chọn tất cả các section
  const menuLinks = document.querySelectorAll(".menu-link"); // Chọn tất cả các mục menu

  // Hàm để xóa tất cả các class active trên menu
  function removeActiveClasses() {
    menuLinks.forEach((link) => {
      link.classList.remove("active");
    });
  }

  // Sử dụng IntersectionObserver để theo dõi các section
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`a[href="#${id}"]`);

        if (entry.isIntersecting) {
          // Khi section xuất hiện trên màn hình, thêm class active
          removeActiveClasses();
          menuLink.classList.add("active");
        }
      });
    },
    {
      threshold: 0.3, // Tỉ lệ phần trăm của section phải hiện trên màn hình trước khi kích hoạt
    }
  );

  // Gán observer cho tất cả các section
  sections.forEach((section) => {
    observer.observe(section);
  });
});
