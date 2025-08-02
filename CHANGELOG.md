# CHANGELOG

Tất cả thay đổi quan trọng của dự án Number Guessing Game sẽ được ghi lại trong file này.

Format dựa trên [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
và dự án này tuân theo [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### 🚨 Critical Fixes Needed
- Fix scoring logic bug: điểm số bị trừ khi đoán đúng
- Fix HTML consistency: lang attribute, tag casing, typo fixes
- Add input validation: kiểm tra input 1-100, chỉ nhận số

### ⚡ UX Improvements Planned
- Add Enter key support cho submit
- Auto-clear input sau mỗi guess
- Add error feedback messages
- Implement loading states

### 📈 Code Quality Improvements Planned
- Fix variable naming typos (attemps → attempts)
- Add CSS hover effects
- Implement empty function stubs
- Add CSS custom properties

## [1.0.0] - 2025-08-02

### ✅ Added
- **Core Game Features**:
  - 6-phase architecture với documentation chi tiết
  - Random number generation (1-100)
  - Guess comparison với feedback emoji
  - Score system bắt đầu từ 100, trừ 10 mỗi lần sai
  - Attempts tracking (0/10)
  - History tracking trong UI
  - Win/lose detection với game end logic

- **UI/UX Features**:
  - Responsive design với gradient backgrounds
  - Stats display: Điểm số, Lần thử, Phạm vi
  - History section với real-time updates
  - Professional styling với modern CSS
  - Vietnamese localization hoàn chỉnh
  - Emoji indicators cho feedback

- **Technical Implementation**:
  - Semantic HTML structure
  - Component-based CSS organization
  - Event-driven JavaScript architecture
  - Mobile-first responsive design
  - Professional color system

### 📋 Code Review Results
- **Architecture**: 9/10 - Excellent structure and documentation
- **UI/UX**: 8/10 - Beautiful, responsive design
- **Code Quality**: 8/10 - Good organization, some bugs present
- **Functionality**: 6/10 - Core works but has critical bugs
- **Overall Score**: 7.5/10

### 🐛 Known Issues
- Scoring logic incorrectly subtracts points on correct guesses
- HTML lang attribute mismatch with Vietnamese content
- Input validation missing for invalid entries
- Variable naming inconsistencies (attemps vs attempts)

### 📝 Documentation
- Complete CLAUDE.md với development guidelines
- Comprehensive code comments trong tiếng Việt
- Architecture explanation với 6-phase breakdown
- Clear testing instructions

---

## Template cho future releases:

### Added
- Tính năng mới được thêm vào

### Changed
- Thay đổi trong tính năng hiện có

### Deprecated
- Tính năng sẽ bị loại bỏ trong tương lai

### Removed
- Tính năng đã bị loại bỏ

### Fixed
- Bug fixes

### Security
- Cập nhật bảo mật

---

## Release Notes Template

### [Version] - YYYY-MM-DD

**🎯 Highlights**: Tóm tắt ngắn về release này

**📊 Performance**: Cải thiện performance metrics (nếu có)

**🔧 Technical Changes**: Thay đổi kỹ thuật quan trọng

**📱 User Experience**: Cải tiến trải nghiệm người dùng

**🐛 Bug Fixes**: Danh sách bugs đã fix

**⚠️ Breaking Changes**: Thay đổi phá vỡ compatibility (nếu có)

**🔄 Migration Guide**: Hướng dẫn migrate (nếu cần)

**📈 Stats**: Code coverage, performance benchmarks, etc.

**🙏 Contributors**: Danh sách contributors (nếu có)