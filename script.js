// Mật khẩu
const CORRECT_PASSWORD = '12112022';

// Lyrics - lời nhạc (bạn có thể thay đổi)
const lyrics = [
    "Út à...",
    "I love you so much",
    "I have been such busy recently",
    "I truly sorry...",
    "But you know what?",
    "Even when I'm busy",
    "You are always in my thoughts",
    "Every single day",
    "3 years together",
    "3 years of beautiful memories",
    "3 years of growing together",
    "You are my everything",
    "My sunshine, my happiness",
    "Thank you for being patient with me",
    "Thank you for understanding",
    "Thank you for loving me",
    "I promise to make more time for us",
    "I promise to cherish every moment",
    "Because you deserve all the love in the world",
    "Happy 3 Year Anniversary, my love ❤️",
    "I love you more than words can say"
];

// Số lượng ảnh kỷ niệm (42 ảnh)
const TOTAL_PHOTOS = 42;

// Các đuôi file hỗ trợ (cả chữ hoa và chữ thường)
const IMAGE_EXTENSIONS = [
    '.jpg', '.JPG', 
    '.jpeg', '.JPEG', 
    '.png', '.PNG', 
    '.gif', '.GIF', 
    '.webp', '.WEBP'
];

// Lấy danh sách ảnh từ folder images (tự động load 42 ảnh)
function getMemoryImages() {
    const images = [];
    
    // Tạo danh sách tất cả các đường dẫn có thể cho 42 ảnh
    for (let i = 1; i <= TOTAL_PHOTOS; i++) {
        IMAGE_EXTENSIONS.forEach(ext => {
            images.push(`images/photo${i}${ext}`);
        });
    }
    
    return images;
}

// DOM Elements
const passwordScreen = document.getElementById('passwordScreen');
const initialButton = document.getElementById('initialButton');
const passwordForm = document.getElementById('passwordForm');
const passwordInput = document.getElementById('passwordInput');
const submitPassword = document.getElementById('submitPassword');
const errorMessage = document.getElementById('errorMessage');
const cakeScreen = document.getElementById('cakeScreen');
const blowCandleButton = document.getElementById('blowCandleButton');
const mainContent = document.getElementById('mainContent');
const lyricsDisplay = document.getElementById('lyricsDisplay');
const memoriesContainer = document.getElementById('memoriesContainer');
const backgroundMusic = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');
const volumeControl = document.getElementById('volumeControl');

// Màu sắc cho pháo hoa
const fireworkColors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ff6b9d', '#c44569', '#f8b500', '#6c5ce7', '#a29bfe', '#ffffff', '#ffd93d'];

// Xử lý nút ban đầu
initialButton.addEventListener('click', function() {
    initialButton.style.display = 'none';
    passwordForm.classList.remove('hidden');
    passwordInput.focus();
});

// Xử lý submit password
submitPassword.addEventListener('click', checkPassword);
passwordInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

function checkPassword() {
    const inputPassword = passwordInput.value.trim();
    
    if (inputPassword === CORRECT_PASSWORD) {
        errorMessage.textContent = '';
        unlockGift();
    } else {
        errorMessage.textContent = 'Mật khẩu không đúng! Vui lòng thử lại.';
        passwordInput.value = '';
        passwordInput.focus();
    }
}

// Mở khóa gift
function unlockGift() {
    // Ẩn màn hình password
    passwordScreen.classList.add('hidden');
    
    // Bắt đầu phát nhạc
    startMusic();
    
    // Hiện màn hình bánh kem (nền đen)
    setTimeout(() => {
        cakeScreen.classList.remove('hidden');
        
        // Bắt đầu pháo hoa ngay lập tức
        startFireworks();
    }, 500);
}

// Bắt đầu phát nhạc
function startMusic() {
    // Đặt volume
    backgroundMusic.volume = volumeControl.value / 100;
    
    // Load nhạc trước
    backgroundMusic.load();
    
    // Thử phát nhạc (có thể bị chặn bởi browser policy)
    const playPromise = backgroundMusic.play();
    
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                // Nhạc đã phát thành công
                updateMusicButtonIcon();
                console.log('Nhạc đã bắt đầu phát!');
            })
            .catch(error => {
                // Browser yêu cầu user interaction
                console.log('Nhạc cần user interaction để phát. Click vào nút để bật nhạc.');
                updateMusicButtonIcon();
            });
    }
}

// Thử phát nhạc khi user tương tác lần đầu
document.addEventListener('click', function tryPlayMusic() {
    if (backgroundMusic.paused && !musicToggle.classList.contains('user-interacted')) {
        startMusic();
        musicToggle.classList.add('user-interacted');
    }
}, { once: true });

// Cập nhật icon nút nhạc
function updateMusicButtonIcon() {
    if (backgroundMusic.paused) {
        musicToggle.textContent = '▶️';
        musicToggle.classList.add('paused');
        musicToggle.title = 'Phát nhạc';
    } else {
        musicToggle.textContent = '⏸️';
        musicToggle.classList.remove('paused');
        musicToggle.title = 'Tạm dừng nhạc';
    }
}

// Xử lý nút play/pause nhạc
musicToggle.addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play().then(() => {
            updateMusicButtonIcon();
        }).catch(error => {
            console.log('Không thể phát nhạc:', error);
        });
    } else {
        backgroundMusic.pause();
        updateMusicButtonIcon();
    }
});

// Cập nhật icon khi nhạc thay đổi trạng thái
backgroundMusic.addEventListener('play', updateMusicButtonIcon);
backgroundMusic.addEventListener('pause', updateMusicButtonIcon);
backgroundMusic.addEventListener('ended', updateMusicButtonIcon);

// Xử lý điều chỉnh volume
volumeControl.addEventListener('input', function() {
    backgroundMusic.volume = this.value / 100;
});

// Xử lý nút thổi bánh
blowCandleButton.addEventListener('click', function() {
    // Vô hiệu hóa nút để tránh click nhiều lần
    blowCandleButton.disabled = true;
    blowCandleButton.style.opacity = '0.5';
    
    // Lấy tất cả nến
    const candles = document.querySelectorAll('.candle');
    
    // Thổi nến từng cái một
    candles.forEach((candle, index) => {
        setTimeout(() => {
            candle.classList.add('blown');
        }, index * 200); // Mỗi nến cách nhau 200ms
    });
    
    // Sau khi thổi hết nến, chuyển cảnh
    setTimeout(() => {
        // Ẩn màn hình bánh kem
        cakeScreen.classList.add('hidden');
        
        // Hiện nội dung chính (ảnh kỷ niệm + lyrics)
        setTimeout(() => {
            mainContent.classList.remove('hidden');
            
            // Hiển thị ảnh kỷ niệm
            displayMemories();
            
            // Bắt đầu lyrics
            startLyrics();
            
            // Tiếp tục pháo hoa
            continueFireworks();
        }, 500);
    }, candles.length * 200 + 800); // Đợi thổi hết nến + thêm 800ms
});

// Tạo pháo hoa
function createFirework(x, y) {
    const particleCount = 40;
    const angleIncrement = (Math.PI * 2) / particleCount;
    const velocity = 150 + Math.random() * 100;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const color = fireworkColors[Math.floor(Math.random() * fireworkColors.length)];
        particle.style.background = color;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`;

        const angle = angleIncrement * i;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);

        document.body.appendChild(particle);

        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, 1000);
    }
}

// Biến để lưu interval pháo hoa
let fireworkInterval = null;

// Bắt đầu pháo hoa
function startFireworks() {
    // Pháo hoa ban đầu khi mở (nhiều hơn)
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            createFirework(x, y);
        }, i * 100);
    }
    
    // Tiếp tục pháo hoa ngẫu nhiên (nhiều hơn)
    fireworkInterval = setInterval(() => {
        // Tạo 2-3 pháo hoa cùng lúc
        const count = Math.floor(Math.random() * 2) + 2; // 2-3 pháo hoa
        for (let j = 0; j < count; j++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                createFirework(x, y);
            }, j * 50);
        }
    }, 800); // Mỗi 0.8 giây
}

// Tiếp tục pháo hoa (sau khi thổi bánh)
function continueFireworks() {
    // Pháo hoa đặc biệt khi thổi bánh (nhiều hơn)
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            createFirework(x, y);
        }, i * 80);
    }
    
    // Firework interval đã được set ở startFireworks, không cần set lại
}

// Hiển thị ảnh kỷ niệm
let photosDisplayed = false;
let photoCheckInProgress = false;

function displayMemories() {
    if (photosDisplayed || photoCheckInProgress) return;
    photoCheckInProgress = true;
    
    const loadedImages = [];
    const checkedPhotos = new Set(); // Để tránh check trùng lặp
    
    // Kiểm tra từng ảnh (photo1 đến photo42)
    let checkedCount = 0;
    const totalToCheck = TOTAL_PHOTOS;
    
    function checkPhoto(photoNumber) {
        if (photoNumber > TOTAL_PHOTOS) {
            // Đã check xong tất cả
            if (loadedImages.length > 0) {
                showMemoryPhotos(loadedImages);
            } else {
                // Nếu không có ảnh nào, dùng placeholder
                showMemoryPhotos([
                    'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=300',
                    'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=300',
                    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=300'
                ]);
            }
            photosDisplayed = true;
            photoCheckInProgress = false;
            return;
        }
        
        // Thử tất cả các đuôi file cho ảnh này
        let found = false;
        let extIndex = 0;
        
        function tryNextExtension() {
            if (extIndex >= IMAGE_EXTENSIONS.length) {
                // Không tìm thấy ảnh với bất kỳ đuôi nào, chuyển sang ảnh tiếp theo
                checkedCount++;
                checkPhoto(photoNumber + 1);
                return;
            }
            
            const imgPath = `images/photo${photoNumber}${IMAGE_EXTENSIONS[extIndex]}`;
            const img = new Image();
            
            img.onload = function() {
                if (!found && !loadedImages.includes(imgPath)) {
                    loadedImages.push(imgPath);
                    found = true;
                }
                // Đã tìm thấy, chuyển sang ảnh tiếp theo
                checkedCount++;
                checkPhoto(photoNumber + 1);
            };
            
            img.onerror = function() {
                // Thử đuôi tiếp theo
                extIndex++;
                tryNextExtension();
            };
            
            img.src = imgPath;
        }
        
        tryNextExtension();
    }
    
    // Bắt đầu check từ photo1
    checkPhoto(1);
    
    // Timeout để đảm bảo hiển thị ảnh ngay cả khi một số ảnh load chậm
    setTimeout(() => {
        if (!photosDisplayed && loadedImages.length > 0) {
            showMemoryPhotos(loadedImages);
            photosDisplayed = true;
            photoCheckInProgress = false;
        }
    }, 3000);
}

// Biến để lưu các ảnh
let allLoadedPhotos = [];
let photoIndex = 0;
let photoInterval = null;

// Tạo pattern hình trái tim
function getHeartPositions(count, centerX, centerY, scale) {
    const positions = [];
    
    for (let i = 0; i < count; i++) {
        const t = (i / count) * 2 * Math.PI;
        // Công thức hình trái tim
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
        
        positions.push({
            x: centerX + x * scale / 16,
            y: centerY + y * scale / 16
        });
    }
    
    return positions;
}

// Tạo nhiều trái tim
function createMultipleHearts(images) {
    if (!images || images.length === 0) {
        console.log('Không có ảnh để tạo trái tim');
        return;
    }
    
    const totalImages = images.length;
    const numHearts = 1; // Chỉ 1 trái tim lớn và rõ ràng
    const imagesPerHeart = totalImages; // Tất cả ảnh vào 1 trái tim
    
    // Vị trí 1 trái tim: ở giữa màn hình
    const heartConfigs = [
        { centerX: window.innerWidth * 0.5, centerY: window.innerHeight * 0.5, scale: 0.5 }
    ];
    
    let imageIndex = 0;
    
    heartConfigs.forEach((config, heartIndex) => {
        // Tính số ảnh cho trái tim này
        let imagesForThisHeart = imagesPerHeart;
        if (heartIndex < remainingImages) {
            imagesForThisHeart += 1; // Phân bổ ảnh thừa cho các trái tim đầu
        }
        
        // Lấy ảnh cho trái tim này
        const heartImages = images.slice(imageIndex, imageIndex + imagesForThisHeart);
        imageIndex += imagesForThisHeart;
        
        if (heartImages.length === 0) return;
        
        // Tạo vị trí cho trái tim này
        const scaleValue = Math.min(window.innerWidth, window.innerHeight) * config.scale;
        const heartPositions = getHeartPositions(
            heartImages.length,
            config.centerX,
            config.centerY,
            scaleValue
        );
        
        // Sắp xếp ảnh vào trái tim với animation
        heartImages.forEach((img, index) => {
            if (index < heartPositions.length && img.parentNode) {
                const pos = heartPositions[index];
                img.classList.add('in-heart');
                
                // Animation mượt mà
                setTimeout(() => {
                    img.style.left = `${pos.x - 50}px`; // 50 = width/2 (100px/2)
                    img.style.top = `${pos.y - 50}px`; // 50 = height/2 (100px/2)
                    img.style.transform = 'translate(0, 0)';
                    img.style.opacity = '1';
                }, index * 15); // Stagger animation
            }
        });
    });
    
    console.log(`Đã tạo ${numHearts} trái tim từ ${totalImages} ảnh`);
}

function showMemoryPhotos(images) {
    // Reset
    allLoadedPhotos = [];
    photoIndex = 0;
    
    // Tính toán khoảng cách: animation 6s, mỗi ảnh cách nhau 1s để không chồng lên nhau
    // Với ảnh rộng 120px, cần khoảng cách tối thiểu 150px giữa các ảnh
    const intervalTime = 1000; // 1 giây giữa mỗi ảnh
    
    // Bắt đầu chạy ảnh liên tục, cách đều nhau
    photoInterval = setInterval(() => {
        if (photoIndex >= images.length) {
            clearInterval(photoInterval);
            // Khi đã load hết ảnh, đợi một chút rồi sắp xếp thành trái tim
            setTimeout(() => {
                arrangeInHeart();
            }, 7000); // Đợi ảnh cuối chạy xong (6s animation + 1s buffer)
            return;
        }
        
        // Tạo ảnh mới
        const img = document.createElement('img');
        img.src = images[photoIndex];
        img.className = 'memory-photo';
        img.alt = `Kỷ niệm ${photoIndex + 1}`;
        img.dataset.index = photoIndex;
        
        // Xử lý lỗi ảnh
        img.onerror = function() {
            this.style.display = 'none';
            photoIndex++;
        };
        
        img.onload = function() {
            // Thêm vào container
            memoriesContainer.appendChild(img);
            allLoadedPhotos.push(img);
            
            // Hiện ảnh và bắt đầu animation chạy
            setTimeout(() => {
                img.classList.add('visible');
            }, 50);
            
            photoIndex++;
        };
    }, intervalTime); // Mỗi 1 giây tạo một ảnh mới (cách đều)
}

function arrangeInHeart() {
    // Dừng tất cả animation
    allLoadedPhotos.forEach(img => {
        img.style.animation = 'none';
    });
    
    // Lấy tất cả ảnh hợp lệ
    const validPhotos = allLoadedPhotos.filter(img => img.style.display !== 'none');
    
    // Tạo nhiều trái tim từ ảnh
    createMultipleHearts(validPhotos);
}

// Bắt đầu lyrics
function startLyrics() {
    let currentIndex = 0;
    
    function showNextLine() {
        if (currentIndex >= lyrics.length) {
            // Lặp lại từ đầu
            currentIndex = 0;
            lyricsDisplay.innerHTML = '';
        }
        
        const line = document.createElement('div');
        line.className = 'lyrics-line';
        line.textContent = lyrics[currentIndex];
        lyricsDisplay.innerHTML = '';
        lyricsDisplay.appendChild(line);
        
        currentIndex++;
        
        // Hiển thị dòng tiếp theo sau 4 giây
        setTimeout(showNextLine, 4000);
    }
    
    // Bắt đầu sau 1 giây
    setTimeout(showNextLine, 1000);
}

// Load ảnh từ folder images khi trang load
window.addEventListener('load', function() {
    // Preload ảnh để kiểm tra
    const testImage = new Image();
    testImage.onerror = function() {
        console.log('Không tìm thấy ảnh trong folder images/. Sẽ dùng ảnh placeholder.');
    };
    testImage.src = 'images/photo1.jpg';
});
