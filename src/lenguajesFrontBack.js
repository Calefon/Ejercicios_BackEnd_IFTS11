let infoLenguajes = {
    frontend:[
        {
            id: 1,
            nombre: "JavaScript",
            turno: "mañana",
            comision: "A",
            cantidadAlumnos: 30
        },
        {
            id: 2,
            nombre: "JavaScript",
            turno: "tarde",
            comision: "B",
            cantidadAlumnos: 45
        },
        {
            id: 3,
            nombre: "JavaScript",
            turno: "noche",
            comision: "C",
            cantidadAlumnos: 33
        },
        {
            id: 4,
            nombre: "JavaScript",
            turno: "mañana",
            comision: "A",
            cantidadAlumnos: 65
        },
        {
            id: 4,
            nombre: "JavaScript",
            turno: "mañana",
            comision: "C",
            cantidadAlumnos: 12
        },
        {
            id: 5,
            nombre: "HTML",
            turno: "noche",
            comision: "A",
            cantidadAlumnos: 22
        },
        {
            id: 2,
            nombre: "HTML",
            turno: "mañana",
            comision: "A",
            cantidadAlumnos: 43
        },
        {
            id: 2,
            nombre: "HTML",
            turno: "noche",
            comision: "A",
            cantidadAlumnos: 30
        },
        {
            id: 3,
            nombre: "CSS",
            turno: "noche",
            comision: "A",
            cantidadAlumnos: 30
        }
    ],
    backend:[
        {
            id: 1,
            nombre: "JavaScript",
            turno: "noche",
            comision: "A",
            cantidadAlumnos: 30
        },
        {
            id: 2,
            nombre: "TypeScript",
            turno: "noche",
            comision: "A",
            cantidadAlumnos: 30
        },
        {
            id: 3,
            nombre: "C-Sharp",
            turno: "noche",
            comision: "A",
            cantidadAlumnos: 30
        },
        {
            id: 4,
            nombre: "PHP",
            turno: "noche",
            comision: "A",
            cantidadAlumnos: 30
        }
    ],
    _filtrarPorKeyArray: function (key, filtro, selector){
        if (filtro.length > 1){
            return this._filtrarPorKeyArray(key.slice(1), filtro.slice(1),selector).filter(
                (valor) => {
                    if (typeof valor[key[0]] === "string"){
                        return valor[key[0]].toLocaleLowerCase() === filtro[0].toLocaleLowerCase();
                    }else{
                        return valor[key[0]] === filtro[0];
                    }
                }
            )
        }
        return this[selector].filter( 
            (valor) => {
                if (typeof valor[key[0]] === "string"){
                    return valor[key[0]].toLocaleLowerCase() === filtro[0].toLocaleLowerCase();
                }else{
                    return valor[key[0]] === filtro[0];
                }
        })
    }
    ,
    filtrarBackPorKey: function (key, filtro) {
        if(!Array.isArray(filtro)){
            return this._filtrarPorKeyArray([key],[filtro], "backend");
        }

        return this._filtrarPorKeyArray(key, filtro, "backend");                                      
    },
    filtrarFrontPorKey: function (key, filtro){
        if(!Array.isArray(filtro)){
            return this._filtrarPorKeyArray([key],[filtro], "frontend");
        }
        return this._filtrarPorKeyArray(key, filtro, "frontend");
    }
}

module.exports.infoLenguajes = infoLenguajes;