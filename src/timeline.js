document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".timeline-item h3");

  timelineItems.forEach((item) => {
    const parentItem = item.closest(".timeline-item");
    const content = parentItem.querySelector(".content");
    const timelineDate = parentItem.previousElementSibling; // Chọn div.timeline-date
    const borderExpand = timelineDate.querySelector(".border-expand"); // Chọn đường viền border-expand

    // Lấy chiều cao ban đầu của timeline-item khi collapsed
    function setInitialCollapsedHeight() {
      const collapsedHeight = parentItem.scrollHeight + "px"; // Lấy chiều cao thực tế của toàn bộ timeline-item khi collapsed
      borderExpand.style.height = collapsedHeight; // Đặt chiều cao của border-expand khi collapsed
      timelineDate.style.height = collapsedHeight; // Đồng bộ chiều cao của timeline-date với timeline-item khi collapsed
    }

    // Đặt chiều cao khi collapsed về trạng thái ban đầu
    const initialHeight = parentItem.scrollHeight + "px";

    // Thiết lập chiều cao ban đầu khi trang được tải
    setInitialCollapsedHeight();

    // Khi người dùng click vào timeline-item
    item.addEventListener("click", () => {
      if (content.classList.contains("expanded")) {
        // Collapse: Thu gọn nội dung
        content.classList.remove("expanded");
        content.style.maxHeight = null;

        // Trả về chiều cao ban đầu của border-expand và timeline-date sau khi collapse
        borderExpand.style.height = initialHeight; // Trả về chiều cao ban đầu
        timelineDate.style.height = initialHeight; // Trả về chiều cao ban đầu
      } else {
        // Expand: Mở rộng nội dung và đồng bộ chiều cao
        content.classList.add("expanded");
        content.style.maxHeight = content.scrollHeight + "px";

        // Cập nhật chiều cao ngay lập tức sau khi expand mà không có độ trễ
        const expandedHeight = parentItem.scrollHeight; // Lấy chiều cao thực tế của timeline-item sau khi expanded
        borderExpand.style.height = expandedHeight + "px"; // Đặt chiều cao của border-expand bằng với timeline-item khi expanded
        timelineDate.style.height = expandedHeight + "px"; // Đồng bộ chiều cao của timeline-date khi expanded
      }
    });
  });
});
