
var giohang = new Array();


function showCart(){
    showmycart()
    var show = document.getElementById("showCartID");
    if(show.style.display == 'none') {
        show.style.display = 'block';
    } else {
        show.style.display = 'none';
    }
}

function themVaoGioHang(){
    var imgSP = document.getElementById("hinhSP").src;
    var ten = document.getElementById("nameSP").innerText
    var gia = document.getElementById("giaBan").innerText;
    var soluong = document.getElementById("S_luong").innerText;

    var sp = new Array(imgSP, ten, gia, soluong);
  

    giohang.push(sp);
 
    console.log(sp);

    showCart()


}
function showmycart(){
    var ttgh = "";
    var tong = 0;
    for (let i = 0; i < giohang.length; i++){
        var tien = parseInt(giohang[i][2]) *  parseInt(giohang[i][3]);

        tong += tien;
        ttgh += '<tr>'+
            '<td>' + (i + 1 ) + ' </td> '+
            '<td><img src="'+giohang[i][0]+'" style="width: 100px; height: auto;"></td>'+ // Chỉnh kích thước của hình ảnh
            '<td>'+giohang[i][1]+'</td>'+
            '<td>'+giohang[i][2]+'</td>'+
            '<td>'+giohang[i][3]+'</td>'+
            '<td>'
            '<div>'+tien+'</div>'  
            '</td>'
        '</tr>'
    }

    ttgh += '<tr>'+
    '<th colspan="5">Tổng đơn hàng</th>'+
    '<th>'+tong+'</th>'+

    '</tr>';
    
    document.getElementById("mycart").innerHTML = ttgh;


}


