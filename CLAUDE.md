# CLAUDE.md

Tài liệu này cung cấp hướng dẫn cho Claude Code (claude.ai/code) khi làm việc với mã nguồn trong repository này.

## Ngôn ngữ giao tiếp

**QUAN TRỌNG**: Khi làm việc với dự án này, Claude PHẢI sử dụng tiếng Việt trong tất cả các phản hồi, giải thích và hướng dẫn. Điều này để đảm bảo tính nhất quán với ngôn ngữ của dự án và tạo trải nghiệm tốt nhất cho nhà phát triển Việt Nam.

## Tổng quan dự án

Đây là game đoán số bằng tiếng Việt được xây dựng với HTML, CSS và JavaScript thuần. Game thử thách người chơi đoán một số ngẫu nhiên từ 1-100 trong vòng 10 lần thử, với hệ thống tính điểm bắt đầu từ 100 điểm và giảm 10 điểm cho mỗi lần đoán sai.

## Kiến trúc

### Cấu trúc cốt lõi

- **index.html**: Giao diện game chính với văn bản UI tiếng Việt
- **script.js**: Logic game và thao tác DOM
- **style.css**: Styling hoàn chỉnh với gradient backgrounds và thiết kế responsive

### Luồng game

Game tuân theo kiến trúc theo từng giai đoạn như được mô tả trong script.js:

1. **Foundation (Nền móng)**: Khai báo biến và tham chiếu DOM elements
2. **Core Logic (Logic chính)**: Tạo số ngẫu nhiên, validation input, logic so sánh
3. **State Management (Quản lý trạng thái)**: Theo dõi lịch sử, điều khiển trạng thái game, đếm lần thử
4. **User Interface (Giao diện)**: Cập nhật hiển thị, hệ thống thông báo, quản lý input
5. **Integration (Kết nối)**: Event handlers và game controller
6. **Polish (Hoàn thiện)**: Cải thiện trải nghiệm người dùng

### Các thành phần chính

**Biến trạng thái game** (script.js:60-64):

- `secretNumber`: Số cần đoán
- `currentScore`: Điểm hiện tại của người chơi (bắt đầu từ 100)
- `attemptsUsed`: Số lần đã thử (tối đa 10)
- `isAlive`: Trạng thái game đang hoạt động
- `guessesHistory`: Mảng theo dõi tất cả lần đoán (đã khai báo nhưng chưa implement đầy đủ)

**Các hàm cốt lõi**:

- `generateRandomNumber()`: Tạo số ngẫu nhiên 1-100
- `setGameState()`: Khởi tạo/reset trạng thái game
- `processGuess()`: So sánh input người dùng với số bí mật
- `updateScore()`: Giảm điểm 10 cho mỗi lần đoán sai
- `updateAttemps()`: Theo dõi số lần thử
- `renderGame()`: Controller luồng game chính

## Ghi chú phát triển

### Test game

Vì đây là ứng dụng web client-side:

- Mở `index.html` trong trình duyệt web để test
- Kiểm tra browser console để xem số bí mật (được log khi bắt đầu game)
- Không cần build process hay package manager

### Ngôn ngữ UI

- Tất cả văn bản người dùng thấy đều bằng tiếng Việt
- Game sử dụng emoji indicators (🎯, 🤔, 🎉, 📉, 📈, 💔, 📝)
- Hiển thị thống kê: Điểm số, Lần thử (0/10), Phạm vi (1-100)

### Vấn đề đã biết

- History tracking đã được khai báo (`guessesHistory` array) nhưng chưa implement trong UI
- Một số function như `limiter()` chỉ là stub trống
- Input validation có thể robust hơn (hiện tại dựa vào parseInt)

### Code Style

- Comment tiếng Việt chi tiết giải thích các giai đoạn và kiến trúc game
- Kết hợp tên function tiếng Anh với comment tiếng Việt
- CSS comprehensive với gradient styling và responsive design
