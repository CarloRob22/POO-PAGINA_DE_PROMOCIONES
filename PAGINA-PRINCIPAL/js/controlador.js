var arreglo=[
    {
        img:'img/img.jpg',
        titulo:'promo-1',
        descripcion:'descripcion-1'
    },
    {
        img:'img/img.jpg',
        titulo:'promo-2',
        descripcion:'descripcion-2'
    },
    {
        img:'img/img.jpg',
        titulo:'promo-3',
        descripcion:'descripcion-3'
    },
    {
        img:'img/img.jpg',
        titulo:'promo-4',
        descripcion:'descripcion-4'
    },
    {
        img:'img/img.jpg',
        titulo:'promo-5',
        descripcion:'descripcion-5'
    },
    {
        img:'img/img.jpg',
        titulo:'promo-6',
        descripcion:'descripcion-6'
    }
]

function mostrarPromo(){
    document.getElementById("div-hogar").innerHTML = '';
    for(let i=0;i<arreglo.length;i++){
        document.getElementById("div-hogar").innerHTML += 
            `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div class="card">
                    <img src="${arreglo[i].img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${arreglo[i].titulo}</h5>
                        <p class="card-text">${arreglo[i].descripcion}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>`;

    console.log(arreglo);
    }
}

mostrarPromo();