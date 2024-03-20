
// Mô phỏng danh sách sản phẩm (có thể lấy từ server)
const products = [
    { name: 'MACBOOK', category: 'MACBOOK', status: 'Còn hàng', price: '12.000.000đ', originalPrice: '14.000.000đ', image: 'img/laptop-macbook.png' },
    { name: 'DELL Laptop', category: 'DELL', status: 'Còn hàng', price: '10.000.000đ', originalPrice: '12.000.000đ', image: 'img/dell1.jpg' },
    { name: 'HP Laptop', category: 'HP', status: 'Còn hàng', price: '10.000.000đ', originalPrice: '12.000.000đ', image: 'img/laptop-macbook.png' },
    { name: 'LENOVO Laptop', category: 'LENOVO', status: 'Còn hàng', price: '10.000.000đ', originalPrice: '12.000.000đ', image: 'img/laptop-macbook.png' },
    // Thêm các sản phẩm khác vào đây
];

// Hiển thị tất cả sản phẩm khi trang được tải
showProducts(products);

// Hàm lọc sản phẩm theo danh mục
function filterProducts(category) {
    const filteredProducts = category === 'Tất cả' ? products : products.filter(product => product.category === category);
    showProducts(filteredProducts);
}
// Hàm lọc và hiển thị một sản phẩm ngẫu nhiên theo danh mục
// function filterProducts(category) {
//     const filteredProducts = category === 'Tất cả' ? products : products.filter(product => product.category === category);
//     const randomIndex = Math.floor(Math.random() * filteredProducts.length);
//     const randomProduct = filteredProducts[randomIndex];
//     showProducts([randomProduct]);
// }

// Hiển thị danh sách sản phẩm
function showProducts(productsToShow) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    productsToShow.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('col-md-3', 'text-center');

        productDiv.innerHTML = /*html*/`
            <img src="${product.image}" style="width:220px; height: 140px" class="img-fluid" alt="">
            <h6>${product.name}</h6>
            <p>${product.status}</p>
            <p>${product.price}<del>${product.originalPrice}</del></p>
            <div class="btn btn-primary text-center mx-5 ">
                <a href="giohang.html"class="text-decoration-none text-white">Mua Ngay</a>
            </div>
        `;

        productList.appendChild(productDiv);
    });
}
