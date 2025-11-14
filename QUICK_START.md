# 🚀 Hướng Dẫn Nhanh - Chạy Website

## Cách 1: Enable GitHub Pages (Khuyến nghị - Miễn phí, có link công khai)

### Bước 1: Enable GitHub Pages
1. Vào repository của bạn trên GitHub: `https://github.com/nguyenquangminhfptu/3-yearCeremony`
2. Click vào tab **Settings** (ở thanh menu trên cùng)
3. Scroll xuống phần **Pages** (ở sidebar bên trái)
4. Trong phần **Source**:
   - Chọn branch: **main**
   - Chọn folder: **/ (root)**
5. Click **Save**
6. Đợi 1-2 phút để GitHub build website

### Bước 2: Truy cập website
- Website của bạn sẽ có tại:
  ```
  https://nguyenquangminhfptu.github.io/3-yearCeremony/
  ```
- Copy link này và chia sẻ cho người yêu! ❤️

---

## Cách 2: Chạy Local (Trên máy tính của bạn)

### Option A: Double-click (Đơn giản nhất)
1. Mở folder `3-yearCeremony`
2. Double-click vào file `index.html`
3. Website sẽ mở trong trình duyệt

**Lưu ý:** Một số tính năng có thể không hoạt động (như autoplay audio) do browser security.

### Option B: Dùng Live Server (Khuyến nghị cho development)

**Nếu dùng VS Code:**
1. Cài extension "Live Server"
2. Right-click vào `index.html`
3. Chọn "Open with Live Server"
4. Website sẽ mở tại `http://127.0.0.1:5500`

**Nếu dùng Python:**
1. Mở Terminal/Command Prompt
2. Chạy lệnh:
   ```bash
   cd 3-yearCeremony
   python -m http.server 8000
   ```
3. Mở browser và vào: `http://localhost:8000`

---

## ⚠️ Lưu ý quan trọng:

### Nếu dùng GitHub Pages:
- ✅ Tất cả hiệu ứng hoạt động bình thường
- ✅ Có link công khai để chia sẻ
- ✅ HTTPS tự động
- ⚠️ Cần đảm bảo đã commit TẤT CẢ file ảnh (42 ảnh trong folder `images/`)
- ⚠️ File nhạc cũng cần commit vào folder `music/`

### Kiểm tra file đã upload đủ chưa:
1. Vào repository trên GitHub
2. Click vào folder `images/`
3. Đếm xem có đủ 42 ảnh không
4. Nếu thiếu, cần upload thêm và commit

---

## 🎯 Checklist nhanh:

- [ ] Đã enable GitHub Pages trong Settings
- [ ] Đã chọn branch `main` và folder `/ (root)`
- [ ] Đã đợi 1-2 phút sau khi save
- [ ] Đã kiểm tra link: `https://nguyenquangminhfptu.github.io/3-yearCeremony/`
- [ ] Đã test password: `12112022`
- [ ] Tất cả 42 ảnh đã có trong folder `images/`

---

## 💡 Nếu website không hiển thị:

1. **Kiểm tra GitHub Pages đã enable chưa:**
   - Settings → Pages → Xem có hiển thị link chưa

2. **Kiểm tra file có đủ không:**
   - Phải có: `index.html`, `style.css`, `script.js`
   - Phải có folder `images/` với 42 ảnh

3. **Kiểm tra Console (F12):**
   - Mở Developer Tools (F12)
   - Xem tab Console có lỗi gì không

4. **Clear cache:**
   - Ctrl + F5 để refresh lại trang

---

**Chúc bạn thành công! 🎉**
