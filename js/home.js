document.getElementById('support').addEventListener('click',()=>{
    window.open('https://t.me/checkcoin', '_blank');
})

document.getElementById('work').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('howitworks').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('buy').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('all-card').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('withdraw').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('withdrawVideo').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('feedback').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('feedbackz').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('work').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('howitworks').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('contract').addEventListener('click',()=>{
    window.open('https://t.me/checkcoin', '_blank');
})


const ids = ['buy-btc', 'buy-super-multichain', 'buy-version-phone','buy-super-multichain-ult'];
ids.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener('click', () => {
            window.location.href = './pay.html'
        });
    }
});

class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
        this.currentItem = 0; // Khởi tạo phần tử hiện tại
        this.newSources = []; // Danh sách các nguồn hình ảnh mới
        this.updateGallery();
    }

    // Phương thức để cập nhật hình ảnh mới
    updateImageSources(sources) {
        this.newSources = sources;
        this.updateGallery();
    }

    updateGallery() {
        // Đảm bảo hiển thị đúng 3 phần tử
        this.carouselArray.forEach((el, i) => {
            const img = el.querySelector('img');
            if (img) {
                // Cập nhật thuộc tính src của hình ảnh
                img.src = this.newSources[i] || img.src;
            }
        });
    }

    nextItem() {
        this.carouselArray.unshift(this.carouselArray.pop());
        this.updateGallery();
    }
}
