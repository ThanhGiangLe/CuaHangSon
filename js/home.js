// JS Menu
function menuList(){
    var x = document.getElementById("productID");            
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}




function showTinTuc(){
    var xemthem = document.getElementById("showMore");
    if(xemthem.style.display == 'none') {
        xemthem.style.display = 'block';
        this.innerHTML = 'Hide';
    } else {
        xemthem.style.display = 'none';
        this.innerHTML = 'Show More';
    }
}



