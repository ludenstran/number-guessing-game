# TODO List - Number Guessing Game

Danh sách chi tiết các vấn đề cần fix và cải tiến cho project, được sắp xếp theo mức độ ưu tiên.

## 🚨 CRITICAL BUGS - Cần fix ngay lập tức

### 1. Fix Scoring Logic Bug
**File**: `script.js` - Dòng 167-172  
**Vấn đề**: Điểm số bị trừ kể cả khi đoán đúng  
**Impact**: Game logic hoàn toàn sai  
**Priority**: CRITICAL  

- [ ] Sửa function `updateScore()` chỉ trừ điểm khi đoán SAI
- [ ] Test: Đoán đúng → điểm không bị trừ
- [ ] Test: Đoán sai → điểm bị trừ 10

### 2. Fix HTML Consistency 
**File**: `index.html`  
**Vấn đề**: Inconsistent tags và lang attribute sai  
**Priority**: HIGH  

- [ ] Đổi `lang="en"` → `lang="vi"` (dòng 2)
- [ ] Sửa `<P>` → `<p>` (dòng 21, 25, 29) 
- [ ] Đổi `attemps-used` → `attempts-used` (dòng 25)
- [ ] Update DOM reference trong JavaScript tương ứng

### 3. Add Input Validation
**File**: `script.js`  
**Vấn đề**: Không kiểm tra input hợp lệ  
**Priority**: HIGH  

- [ ] Tạo function `validateInput()` check 1-100 và phải là số
- [ ] Add error messages khi input invalid
- [ ] Prevent submit khi validation fail
- [ ] Test với text, số âm, số >100

### 4. Fix Variable Naming Typo
**File**: `script.js` + `index.html`  
**Vấn đề**: `attemps` thay vì `attempts`  
**Priority**: MEDIUM  

- [ ] Rename `updateAttemps()` → `updateAttempts()`
- [ ] Update DOM reference `attemptStatEl`
- [ ] Ensure consistency across all code

## ⚡ UX IMPROVEMENTS - Cải thiện trải nghiệm

### 5. Add Enter Key Support
**File**: `script.js`  
**Benefit**: UX tốt hơn, không cần click button  
**Priority**: MEDIUM  

- [ ] Add keypress event listener cho Enter key
- [ ] Prevent submit khi button disabled
- [ ] Test: Enter key hoạt động như click button

### 6. Auto-Clear Input After Guess
**File**: `script.js`  
**Benefit**: Không cần manual clear input  
**Priority**: MEDIUM  

- [ ] Clear input field sau mỗi guess
- [ ] Auto-focus input để tiếp tục nhập
- [ ] Test: Input cleared và focused sau submit

### 7. Enhanced Error Messages
**File**: `script.js`  
**Benefit**: Feedback rõ ràng hơn cho user  
**Priority**: MEDIUM  

- [ ] Specific messages cho từng loại error
- [ ] Visual styling cho error states
- [ ] Clear instructions cho user fix errors

## 🎨 POLISH & ENHANCEMENTS - Hoàn thiện

### 8. Add CSS Hover Effects
**File**: `style.css`  
**Benefit**: Interactive experience tốt hơn  
**Priority**: LOW  

- [ ] Hover effects cho buttons
- [ ] Transition animations
- [ ] Focus states improvement

### 9. Mobile Optimization
**File**: `style.css`  
**Benefit**: Better mobile experience  
**Priority**: LOW  

- [ ] Add breakpoints cho mobile nhỏ (<480px)
- [ ] Touch-friendly button sizes
- [ ] Mobile-specific layouts

### 10. Smart Range Display (Optional)
**File**: `script.js`  
**Benefit**: Giúp user đoán thông minh hơn  
**Priority**: LOW  

- [ ] Narrow range based on previous guesses
- [ ] Update range display dynamically
- [ ] Reset range on new game

## 🧪 TESTING CHECKLIST

### Critical Tests
- [ ] Scoring: Đoán đúng không trừ điểm
- [ ] Scoring: Đoán sai trừ 10 điểm
- [ ] Input validation: Reject text input
- [ ] Input validation: Reject numbers outside 1-100
- [ ] Game end: Win condition works correctly
- [ ] Game end: Lose condition (10 attempts) works

### UX Tests  
- [ ] Enter key submits guess
- [ ] Input clears after each guess
- [ ] Error messages display clearly
- [ ] Buttons disabled when appropriate
- [ ] History updates correctly

### Cross-browser Tests
- [ ] Chrome: All functionality works
- [ ] Firefox: All functionality works  
- [ ] Safari: All functionality works
- [ ] Mobile browsers: Touch interactions work

### Accessibility Tests
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Color contrast sufficient
- [ ] Focus indicators visible

## 📊 COMPLETION CRITERIA

### Code Quality
- [ ] 0 critical bugs
- [ ] HTML validates
- [ ] Consistent naming conventions
- [ ] Proper error handling

### User Experience  
- [ ] Game logic 100% correct
- [ ] Clear feedback for all actions
- [ ] Responsive design works on all devices
- [ ] Accessible to users with disabilities

### Performance
- [ ] Load time <2 seconds
- [ ] Smooth interactions
- [ ] No console errors
- [ ] Efficient DOM updates

## 🚀 READY FOR PRODUCTION

Khi tất cả items trong CRITICAL BUGS section được complete:
- [ ] All critical bugs fixed
- [ ] Basic testing passed  
- [ ] CHANGELOG.md updated
- [ ] Ready for user testing

Khi tất cả items trong UX IMPROVEMENTS được complete:
- [ ] Enhanced user experience implemented
- [ ] Comprehensive testing completed
- [ ] Ready for production deployment

---

**Next Action**: Bắt đầu với item #1 (Scoring Logic Bug) - đây là vấn đề nghiêm trọng nhất ảnh hưởng đến core game logic.