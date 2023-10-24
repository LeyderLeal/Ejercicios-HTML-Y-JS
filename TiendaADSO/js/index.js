function eliminarObjeto(valor) {
    var tr = document.getElementById(valor);
    var tbody = document.getElementById("cuerpoTabla");
    tbody.removeChild(tr);

}

function aumentarCantidad(registro) {

    var quantity = celdaCantidad.innerHTML;
    quantity = parseInt(quantity);
    quantity++;
    celdaCantidad.innerHTML = quantity;
}

var cont = 1;

function registrarProducto() {
    
    
    var code = document.getElementById("Code").value;
    var description = document.getElementById("Description").value;
    var price = document.getElementById("Price").value;
    var amount = document.getElementById("Amount").value;

    var tbody = document.getElementById("cuerpoTabla");

    var tr = document.createElement("tr");
    tr.id = "tr" + code;

    var cId = document.createElement("td");
    cId.innerHTML = cont++;             

    var celCode = document.createElement("td");
    celCode.innerHTML = code;
    var celDescription = document.createElement("td");
    celDescription.innerHTML = description;
    var celPrice = document.createElement("td");
    celPrice.innerHTML = price;
    var celAmount = document.createElement("td");
    celAmount.innerHTML = amount;
    
    var celActions = document.createElement("td");

    var btnAdd = document.createElement("button");
    btnAdd.value = "tr" + code;
    btnAdd.innerHTML = "+";
    btnAdd.value = "tr" + code;
    btnAdd.addEventListener("click",
        (e) => {
            var quantity = celAmount.innerHTML;

            quantity = parseInt(quantity);
            quantity++;
            celAmount.innerHTML = quantity;

        },
        false);
    celActions.appendChild(btnAdd);

    var btnSubtract = document.createElement("button");
    btnSubtract.value = "tr" + code;
    btnSubtract.innerHTML = "-";
    btnSubtract.value = "tr" + code;
    btnSubtract.addEventListener("click",
        (e) => {
            var quantity = celAmount.innerHTML;
            if (quantity > 0) {
                quantity = parseInt(quantity);
                quantity--;
                celAmount.innerHTML = quantity;
            }
        },
        false);
    celActions.appendChild(btnSubtract);

    var btnDelete = document.createElement("button");
    btnDelete.value = "tr" + code;
    btnDelete.innerHTML = "Eliminar";
    btnDelete.value = "tr" + code;
    btnDelete.addEventListener("click",
        (e) => {if(confirm("¿Deseas eliminar este producto?")) eliminarObjeto(e.target.value); },
        false);
    celActions.appendChild(btnDelete);

    tr.appendChild(cId);
    tr.appendChild(celCode);
    tr.appendChild(celDescription);
    tr.appendChild(celPrice);
    tr.appendChild(celAmount);
    tr.appendChild(celActions);
    tbody.appendChild(tr);

}
