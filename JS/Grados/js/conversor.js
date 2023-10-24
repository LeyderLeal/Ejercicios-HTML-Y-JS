function calcular(){
    var cel=0;
    var farh=0;
    var kel=0;

    cel=document.getElementById("cel").value;
    farh=parseFloat(farh);
    kel=parseFloat(kel);

    farh = (cel * 1,8) + 32;
    kel = cel*273.15;

    document.getElementById("farh").value=farh
    document.getElementById("kel").value=kel
}