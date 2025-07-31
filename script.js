// GUIDELINE //
// Phase 1: 🏗️ Foundation (Nền móng)

// Declare variables - Tất cả data game cần nhớ
// Get DOM elements - Lấy tất cả HTML elements cần control
// Setup constants - Các giá trị không đổi (maxAttempts, startScore...)

// Phase 2: ⚙️ Core Logic (Logic chính)

// Random number generator - Tạo số bí mật 1-100
// Input validation - Kiểm tra input hợp lệ (1-100, là số)
// Comparison logic - So sánh guess với secret number
// Score calculation - Tính điểm, trừ điểm khi sai

// Phase 3: 💾 State Management (Quản lý trạng thái)

// History tracking - Lưu tất cả lần đoán vào array
// Game state control - Track game đang chạy hay kết thúc
// Attempts counting - Đếm số lần đã đoán
// Win/lose detection - Kiểm tra điều kiện thắng/thua

// Phase 4: 🎨 User Interface (Giao diện)

// Display updater - Cập nhật tất cả số liệu trên UI
// Message system - Hiển thị thông báo với colors khác nhau
// History renderer - Render list lịch sử đoán
// Input management - Clear input, focus, disable khi cần

// Phase 5: 🔗 Integration (Kết nối)

// Main game controller - Function chính điều khiển game flow
// Event handlers - Gắn click, keypress events
// Game initialization - Start/restart game function

// Phase 6: ✨ Polish (Hoàn thiện)

// Smart range display - Hiển thị phạm vi thu hẹp?

// 🎯 Build Order (Thứ tự làm):

// Foundation → Test: Variables declared đúng chưa?
// Core Logic → Test: Random number + validation work chưa?
// State Management → Test: Data được track chính xác chưa?
// UI → Test: Display update đúng khi data thay đổi chưa?
// Integration → Test: Click button có trigger đúng flow chưa?
// Polish → Test: User experience smooth chưa?

// 💡 Key Questions mỗi Phase:

// Foundation: "Tôi cần lưu trữ data gì?"
// Core Logic: "Business rules của game là gì?"
// State: "Game cần nhớ gì trong quá trình chơi?"
// UI: "User cần thấy thông tin gì, khi nào?"
// Integration: "Các parts connect với nhau như thế nào?"
// Polish: "Làm sao để UX tốt hơn?"

// 🚀 Success Criteria: Sau mỗi phase, bạn có thể demo một phần functionality cho người khác thấy.

// Khai báo biến //
let secretNumber = 0;
let currentScore = 100;
let attemptsUsed = 0;
let isAlive = true;
let guessesHistory = [];

// DOM refs //
const submitBtnEl = document.getElementById("submit-btn");
const resetBtnEl = document.getElementById("new-game-btn");
const scoreStatEl = document.getElementById("current-stat-score");
const attemptStatEl = document.getElementById("attemps-used");
const gameStateEl = document.getElementById("game-state");
const userInputEl = document.getElementById("user-input");

// Random number generator - Tạo số bí mật 1-100
function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber;
}

// Tạo kết quả ngẫu nhiên //
function setGameState() {
  currentScore = 100;
  secretNumber = generateRandomNumber();
  attemptsUsed = 0;
  attemptStatEl.textContent = attemptsUsed + "/10";
  scoreStatEl.textContent = currentScore;
  gameStateEl.textContent = '🤔 Hãy nhập một số từ 1 đến 100 và bấm "Đoán"!';
  console.log("Số ngẫu nhiên là" + " " + secretNumber);
}

// Bắt đầu game
setGameState();

// Reset game
function resetGame() {
  submitBtnEl.disabled = false;
  userInputEl.value = "";
  isAlive = true;
}

// Lấy input từ user
function getUserInput() {
  const userGuess = userInputEl.value;
  return userGuess;
}

// Limit input //
function limiter(input) {}

// Đối chiếu input với secret Number //
function processGuess() {
  const userValue = parseInt(getUserInput());
  if (userValue === secretNumber) {
    gameStateEl.textContent =
      "🎉 Xuất sắc! Số bí mật là " +
      secretNumber +
      ". Bạn đã thắng với" +
      " " +
      currentScore +
      " điểm";
    isAlive = false;
  } else if (userValue < secretNumber) {
    gameStateEl.textContent =
      "📉 Số bạn đoán THẤP quá! Thử số lớn hơn" + " " + userValue;
  } else {
    gameStateEl.textContent =
      "📈 Số bạn đoán CAO quá! Thử số nhỏ hơn" + " " + userValue;
  }
}

// Cập nhật điểm //

function updateScore() {
  if (isAlive) {
    currentScore -= 10;
    scoreStatEl.textContent = currentScore;
  }
}

// Update số lượt còn lại //

function updateAttemps() {
  if (isAlive) {
    attemptsUsed += 1;
    attemptStatEl.textContent = attemptsUsed + "/10";
  }

  if (!isAlive) {
    attemptsUsed += 1;
    attemptStatEl.textContent = attemptsUsed + "/10";
  }
}

// Trả kết quả //
function returnResult() {
  if (!isAlive) {
    endGame();
  }

  if (attemptsUsed === 10) {
    gameStateEl.textContent =
      "💔 Hết lượt rồi! Số bí mật là " +
      secretNumber +
      ". Chúc bạn may mắn lần sau!";
    endGame();
  }
}

// Render game //
function renderGame() {
  getUserInput();
  processGuess();
  updateScore();
  updateAttemps();
  returnResult();
}

// Kết thúc game //

function endGame() {
  submitBtnEl.disabled = true;
}

// Thực thi hành động Guess //

submitBtnEl.addEventListener("click", function () {
  renderGame();
  console.log(attemptsUsed);
});

// Reset Game //
resetBtnEl.addEventListener("click", function () {
  resetGame();
  setGameState();
});
