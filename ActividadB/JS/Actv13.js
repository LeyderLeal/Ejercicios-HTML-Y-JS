form.addEventListener("submit", e=>{
    e.preventDefault();

        const nameR = document.getElementById("name").value;
        const emailR = document.getElementById("email").value;
        const idR = document.getElementById("id").value;
        const cursoR = document.getElementById("curso").value;

        var tbody = document.getElementById("cuerpoTabla");

        var tr = document.createElement("tr");
        tr.id = "tr" + nameR;                                                
        
        
        var celidR = document.createElement("td");
        celidR.innerHTML = idR;                     
        var celnameR = document.createElement("td");
        celnameR.innerHTML = nameR;
        var celEmailR = document.createElement("td");
        celEmailR.innerHTML = emailR;
        var celCursoR = document.createElement("td");
        celCursoR.innerHTML = cursoR.innerHTML = `<b>${cursoR}</b>`;
        
        tr.appendChild(celidR);
        tr.appendChild(celnameR);
        tr.appendChild(celEmailR);
        tr.appendChild(celCursoR);
        tbody.appendChild(tr);
    });

