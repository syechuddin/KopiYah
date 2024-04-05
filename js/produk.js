baris_produk.innerHTML = "";

var data_mentah = {
  Arabica: [
    {
      nama: "Arabica Gayo",
      foto: "images/produk/product_capuchino.jpg",
      harga: "15.000",
      size: "250 Ml",
      link: "https://shopee.co.id/eaifjlesjfi",
    },
    {
      nama: "Arabica Papua",
      foto: "images/produk/product_espresso.jpg",
      harga: "15.000",
      size: "250 Ml",
      link: "https://shopee.co.id/eaifjlesjfi",
    },
    {
      nama: "Arabica Lampung",
      foto: "https://bumame.com/wp-content/uploads/2023/02/dampakminumkopi.jpg",
      harga: "15.000",
      size: "250 Ml",
      link: "https://shopee.co.id/eaifjlesjfi",
    },
    {
      nama: "Arabica Toraja",
      foto: "https://res.cloudinary.com/dk0z4ums3/image/upload/v1594099345/attached_image/ini-manfaat-konsumsi-kopi-hitam-dan-efek-sampingnya-untuk-kesehatan.jpg",
      harga: "15.000",
      size: "250 Ml",
      link: "https://shopee.co.id/eaifjlesjfi",
    },
  ],
  Robusta: [
    {
      nama: "Robusta Papua",
      foto: "https://allofresh.id/blog/wp-content/uploads/2023/10/kopi-sachet-terenak-4-780x470.jpg",
      harga: "10.000",
      size: "250 Ml",
      link: "https://shopee.co.id/eaifjlesjfi",
    },
    {
      nama: "Robusta Temanggung",
      foto: "https://res.cloudinary.com/dk0z4ums3/image/upload/v1599470897/attached_image/potensi-manfaat-kopi-terkandung-di-tiap-kenikmatan-seruputnya.jpg",
      harga: "10.000",
      size: "250 Ml",
      link: "https://shopee.co.id/eaifjlesjfi",
    },
    {
      nama: "Robusta Flores",
      foto: "https://www.blibli.com/friends-backend/wp-content/uploads/2023/02/B200135-cover-cara-membuat-kopi-robusta-scaled.jpg",
      harga: "10.000",
      size: "250 Ml",
      link: "https://shopee.co.id/eaifjlesjfi",
    },
    {
      nama: "Robusta Toraja",
      foto: "https://www.starjogja.com/assets/2018/11/Secangkir-Kopi-Luwak-Mataram.jpg",
      harga: "10.000",
      size: "250 Ml",
      link: "https://shopee.co.id/eaifjlesjfi",
    },
  ],
  "Non Kopi": [
    {
      nama: "Es Teh Manis",
      foto: "https://fajar.co.id/wp-content/uploads/2023/09/IMG_0741.jpg",
      harga: "10.000",
      size: "250 Ml",
      link: "https://shopee.co.id/eaifjlesjfi",
    },
    {
      nama: "Jus Jeruk",
      foto: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/akurat/gallery/2021/11/big/gal_618dd692a19465-28576895-85708281.JPG",
      harga: "10.000",
      size: "250 Ml",
      link: "https://shopee.co.id/eaifjlesjfi",
    },
    {
      nama: "Jus Alpukat",
      foto: "https://i2.wp.com/resepkoki.id/wp-content/uploads/2021/02/Jus-Alpukat.jpg?fit=1125%2C1500&ssl=1",
      harga: "10.000",
      size: "250 Ml",
      link: "https://shopee.co.id/eaifjlesjfi",
    },
    {
      nama: "Jus Mangga",
      foto: "https://cdn1-production-images-kly.akamaized.net/IXwkGoxNo1fBdDms9BullOXvjLg=/1191x0:3681x3319/469x625/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2952663/original/065258500_1572335694-2019-10-29.jpg",
      harga: "10.000",
      size: "250 Ml",
      link: "https://shopee.co.id/eaifjlesjfi",
    },
  ],
  Cemilan: [
    {
      nama: "Gorengan",
      foto: "https://awsimages.detik.net.id/community/media/visual/2021/07/20/ilustrasi-gorengan-dan-cabai-rawit_169.jpeg?w=650",
      harga: "10.000",
      size: "250 Ml",
      link: "https://shopee.co.id/eaifjlesjfi",
    },
    {
      nama: "Roti Bakar",
      foto: "https://circlekindo.com/files/media/2023/09/roti-bakar-cokelat-keju-circle-k-korner.jpg",
      harga: "10.000",
      size: "250 Ml",
      link: "https://shopee.co.id/eaifjlesjfi",
    },
    {
      nama: "Dimsum",
      foto: "https://img.kurio.network/ckDo03FIdO_Hw3NneCJXKYkHhXc=/1200x1200/filters:quality(80)/https://kurio-img.kurioapps.com/21/03/15/5498fd77-7620-4514-91fb-766147f9469f.jpe",
      harga: "10.000",
      size: "250 Ml",
      link: "https://shopee.co.id/eaifjlesjfi",
    },
    {
      nama: "Piscok",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXxprnrbLoDCUjYD5v1lLkMBwjc6-FwPmQXGWQQtc_7A&s",
      harga: "10.000",
      size: "250 Ml",
      link: "https://shopee.co.id/eaifjlesjfi",
    },
  ],
};

console.log("data mentah:", data_mentah);

var sumber = "https://rikikurnia.com/prakerja/api/kopi";
var sumber2 = "data.json";
$.getJSON(sumber2).then(function (data) {
  console.log;
  data;
  data_mentah = data;
  updateSelect();
});

function updateSelect() {
  select_kopi.innerHTML = "<option selected disabled>-</option>";
  Object.keys(data_mentah).forEach(function (opsi) {
    select_kopi.innerHTML +=
      '<option value="' + opsi + '">' + opsi + "</option>";
  });
  console.log("Melakukan Update Select");
}
updateSelect();

var data_kopi = [];
select_kopi.onchange = function () {
  var pilihan = select_kopi.value;
  console.log("Customer Memilih " + pilihan);
  data_kopi = data_mentah[pilihan];
  console.log("isi data_kopi = ", data_kopi);
  updateTampilan();
};

function updateTampilan() {
  baris_produk.innerHTML = "";
  data_kopi.forEach((kopi) => {
    baris_produk.innerHTML += `<div class="col mb-4">
                <div class="card">
                    <img src="${kopi.foto}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${kopi.nama}</h5>
                        <div class="row hargasize my-4">
                            <div class="col">
                                ${kopi.size}
                            </div>
                            <div class="col text-primary fw-bold">
                                ${kopi.harga}
                            </div>
                        </div>
                        <a href="${kopi.link}" class="btn btn-primary w-100"><i class="bi bi-cart4"></i> Beli</a>
                    </div>
                </div>
            </div>`;
  });
}

var sumber = "https://rikikurnia.com/prakerja/api/kopi";
var sumber2 = "data.json";

$.getJSON(sumber2).then((data) => {
  console.log("Data dari getJSON ", data);
  data_mentah = data;
  updateSelect();
});
