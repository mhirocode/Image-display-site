// 表示する画像のURLを配列で定義
const images = [
    'https://via.placeholder.com/400x300/FF5733/ffffff?text=Image+1',
    'https://via.placeholder.com/400x300/33FF57/ffffff?text=Image+2',
    'https://via.placeholder.com/400x300/3357FF/ffffff?text=Image+3',
    'https://via.placeholder.com/400x300/FF33A1/ffffff?text=Image+4'
];

const gallery = document.getElementById('gallery');

// 画像を動的に生成して表示
images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'ギャラリー画像';
    gallery.appendChild(img);
});