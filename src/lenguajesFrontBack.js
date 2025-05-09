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
    _armarKeyFiltroArr: function (filtrosObj) {
        console.log(filtrosObj)
        if(filtrosObj == {})   
            return [[],[]]
        let arr = Object.entries(filtrosObj);
        let arrK = []; let arrF = []
        for ([k,v] of arr) {
            if(v !== undefined){
                arrK.push(k);
                arrF.push(v);
            }
        }
        return [arrK,arrF]
    }
    ,
    _filtroRecursion: function(keyArr, filtroArr, selector){
        if (filtroArr.length > 1){
            return this._filtroRecursion(keyArr.slice(1), filtroArr.slice(1),selector).filter(
                (v)=>this._callbackFilter(v,keyArr[0],filtroArr[0])
            )
        }
        
        return this[selector].filter( (v)=>this._callbackFilter(v,keyArr[0],filtroArr[0]) );
    }
    ,
    _filtrarPorKeyArray: function (filtrosObj, selector){
        let [keyArr, filtroArr] = this._armarKeyFiltroArr(filtrosObj);
        if(keyArr.length == 0 && filtroArr.length == 0)
            return this[selector];
        
        return this._filtroRecursion(keyArr,filtroArr,selector);  
    }
    ,
    _callbackFilter: (valor,key,filtro) => {
                switch (key){
                    case "id":
                        return valor[key] === filtro;
                    case "cantidadAlumnos":
                        return valor[key] >= filtro;
                    default:
                        return valor[key].toLocaleLowerCase() === filtro.toLocaleLowerCase();
                }
    }
    ,
    filtrarBackPorKey: function (filtrosObj) {
        return this._filtrarPorKeyArray(filtrosObj, "backend");                                      
    },
    filtrarFrontPorKey: function (filtrosObj) {
        return this._filtrarPorKeyArray(filtrosObj, "frontend");                                      
    }
}

module.exports.infoLenguajes = infoLenguajes;