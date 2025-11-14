# Hướng Dẫn Deploy Lên GitHub Pages

## ✅ Các hiệu ứng sẽ hoạt động bình thường!

GitHub Pages hỗ trợ đầy đủ HTML/CSS/JavaScript, nên tất cả hiệu ứng sẽ hoạt động:
- ✅ Pháo hoa
- ✅ Animation ảnh
- ✅ Lyrics chạy
- ✅ Hình trái tim
- ✅ Tất cả hiệu ứng khác

## 📋 Các bước deploy:

### 1. Tạo Repository trên GitHub
- Vào GitHub.com
- Tạo repository mới (ví dụ: `3-year-anniversary`)
- **KHÔNG** tích vào "Initialize with README"

### 2. Upload code lên GitHub

**Cách 1: Sử dụng GitHub Desktop**
- Download GitHub Desktop
- Add repository → chọn folder `3-yearCeremony`
- Commit và Push

**Cách 2: Sử dụng Git Command Line**
```bash
cd 3-yearCeremony
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/3-year-anniversary.git
git push -u origin main
```

### 3. Enable GitHub Pages
- Vào repository trên GitHub
- Settings → Pages
- Source: chọn `main` branch
- Folder: `/ (root)`
- Click Save
- Đợi vài phút, website sẽ có tại: `https://YOUR_USERNAME.github.io/3-year-anniversary/`

## ⚠️ Lưu ý quan trọng:

### 1. File ảnh và nhạc
- **PHẢI commit tất cả file ảnh** trong folder `images/`
- **PHẢI commit file nhạc** trong folder `music/` (nếu có)
- GitHub có giới hạn file size: 100MB/file, 1GB/repo

### 2. Đường dẫn file
- Đảm bảo tất cả đường dẫn là **relative path** (đã đúng trong code)
- Ví dụ: `images/photo1.jpg` ✅ (đúng)
- Ví dụ: `C:/Users/.../images/photo1.jpg` ❌ (sai)

### 3. Autoplay Audio
- Một số trình duyệt chặn autoplay audio
- Người dùng cần click vào nút 🎵 để bật nhạc (đã có xử lý trong code)

### 4. HTTPS
- GitHub Pages tự động dùng HTTPS
- Một số tính năng (như camera, microphone) yêu cầu HTTPS → đã có sẵn ✅

## 📁 Cấu trúc file cần upload:

```
3-yearCeremony/
├── index.html          ✅
├── style.css           ✅
├── script.js           ✅
├── README.md           ✅
├── images/             ✅ (quan trọng!)
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── ... (42 ảnh)
└── music/              ✅ (nếu có)
    └── background.mp3
```

## 🎯 Checklist trước khi deploy:

- [ ] Tất cả 42 ảnh đã có trong folder `images/`
- [ ] File nhạc đã có trong folder `music/` (nếu muốn)
- [ ] Test thử trên local (double-click index.html)
- [ ] Đảm bảo không có đường dẫn tuyệt đối (C:/, D:/)
- [ ] Commit tất cả file (không bỏ sót)

## 🚀 Sau khi deploy:

1. Truy cập: `https://YOUR_USERNAME.github.io/3-year-anniversary/`
2. Test lại tất cả tính năng
3. Chia sẻ link cho người yêu! ❤️

## 💡 Tips:

- Nếu website không hiển thị, kiểm tra:
  - GitHub Pages đã enable chưa?
  - Đã đợi vài phút để GitHub build chưa?
  - Console có lỗi gì không? (F12 → Console)

- Để update website:
  - Chỉnh sửa file
  - Commit và Push
  - GitHub tự động update (có thể mất 1-2 phút)

---

**Chúc bạn deploy thành công! 🎉**
