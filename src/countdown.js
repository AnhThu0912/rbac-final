document.addEventListener("DOMContentLoaded", function () {
  // Xác định ngày đích của countdown
  const targetDate = new Date("Dec 31, 2024 23:59:59").getTime();

  // Cập nhật countdown mỗi giây
  const countdownInterval = setInterval(function () {
    // Lấy thời gian hiện tại
    const now = new Date().getTime();

    // Tính thời gian chênh lệch giữa hiện tại và thời gian đích
    const timeDifference = targetDate - now;

    // Tính toán ngày, giờ, phút, giây còn lại
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Đảm bảo tất cả giá trị có 2 chữ số
    const paddedHours = String(hours).padStart(2, "0");
    const paddedMinutes = String(minutes).padStart(2, "0");
    const paddedSeconds = String(seconds).padStart(2, "0");

    // Cập nhật HTML với giá trị mới
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = paddedHours;
    document.getElementById("minutes").textContent = paddedMinutes;
    document.getElementById("seconds").textContent = paddedSeconds;

    // Nếu countdown đã hoàn thành
    if (timeDifference < 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown-timer").innerHTML =
        "<p>Countdown Finished!</p>";
    }
  }, 1000); // Cập nhật mỗi giây
});
