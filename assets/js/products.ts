

document.getElementById("product-item")

fetch(" https://api.npoint.io/858bf843bc15b22f7294")
    .then(res => res.json())
    .then(res => console.log(res))

// <div class="col-xl-4 cl-lg-4 col-md-6">
// <div class="product-03-wrapper grey-2-bg pos-rel text-center mb-30">
//     <div class="badge-tag">
//         <span class="product-tag pro-tag hot-1">Hot</span>
//     </div>
//     <div class="product-02-img pos-rel">
//         <a href="product-details.html">
//             <img src="assets/img/products/f-01.png" alt="">
//         </a>
//         <div class="product-action">
//             <a class="action-btn" href="#"><i class="far fa-eye"></i></a>
//         </div>
//     </div>
//     <div class="product-text">
//         <h5>disable chair</h5>
//         <h4><a href="product-details.html">Wheelchair-Disabled</a></h4>
//         <span>$250.99</span>
//     </div>
// </div>
// </div>
