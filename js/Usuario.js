'use strict';

function isFloat(n) {
    return n === +n && n !== (n | 0);
}

function isInteger(n) {
    return n === +n && n === (n | 0);
}

function isArray(n) {
    return Object.prototype.toString.call(n) === '[object Array]';
}

function isString(n) {
    return Object.prototype.toString.call(n) === '[object String]';
}

function isNull(n) {
    return Object.prototype.toString.call(n) === '[object Null]';
}

function isDate(n) {
    return Object.prototype.toString.call(n) === '[object Date]';
}

function isIntegerArray(n) {
    if (isArray(n)) {
        for (var i = 0; i < n.length; i++) {
            if (!(isInteger(n[i]) || !n[i]))
                return false;
        }
        return true;
    } else
        return false;
}

var Usuario = {
    /**
     * returns number
     */
    get actividad() {
        var actividad = JSON.parse(window.localStorage.getItem('actividad'));
        if (!actividad) throw new ReferenceError('window.localStorage.getItem(\'actividad\') not initialized');
        if (!isInteger(actividad)) throw new TypeError('window.localStorage.getItem(\'actividad\') not integer');
        return actividad;
    },
    /**
     * @altura number
     */
    set actividad(actividad) {
        if (!actividad) throw new ReferenceError('actividad not initialized');
        if (!isInteger(actividad)) throw new TypeError('actividad not integer');
        window.localStorage.setItem('actividad', JSON.stringify(actividad));
    },
    /**
     * returns number
     */
    get altura() {
        var altura = JSON.parse(window.localStorage.getItem('altura'));
        if (!altura) throw new ReferenceError('window.localStorage.getItem(\'altura\') not initialized');
        if (!isFloat(altura) && !isInteger(altura)) throw new TypeError('window.localStorage.getItem(\'altura\') not float or integer');
        return altura;
    },
    /**
     * @altura number
     */
    set altura(altura) {
        if (!altura) throw new ReferenceError('altura not initialized');
        if (!isFloat(altura) && !isInteger(altura)) throw new TypeError('altura not integer');
        window.localStorage.setItem('altura', JSON.stringify(altura));
    },
    /**
     * Hombres: (10 x peso en kg) + (6,25 × altura en cm) - (5 × edad en años) + 5
     * Mujeres: (10 x peso en kg) + (6,25 × altura en cm) - (5 × edad en años) - 161
     * returns number
     */
    get caloriasDiariasNecesarias() {
        var calorias;
        switch (this.actividad) {
        case 1: // Poco o ningún ejercicio
            calorias = this.TMB * 1.2;
            break;
        case 2: // Ejercicio ligero (1-3 días a la semana)
            calorias = this.TMB * 1.375;
            break;
        case 3: // Ejercicio moderado (3-5 días a la semana)
            calorias = this.TMB * 1.55;
            break;
        case 4: // Ejercicio fuerte (6-7 días a la semana)
            calorias = this.TMB * 1.725;
            break;
        case 5: // Ejercicio muy fuerte (dos veces al día, entrenamientos muy duros)
            calorias = this.TMB * 1.9;
            break;
        }
        return calorias;
    },
    /**
     * returns number
     */
    get edad() {
        var ahora = new Date();
        return Math.floor((ahora.getTime() - this.fechaNacimiento.getTime()) / (1000 * 60 * 60 * 24 * 365.25));
    },
    /**
     * returns Date
     */
    get fechaInicio() {
        var fechaInicio = JSON.parse(window.localStorage.getItem('fechaInicio'));
        if (!fechaInicio) throw new ReferenceError('window.localStorage.getItem(\'fechaInicio\') not initialized');
        fechaInicio = new Date(fechaInicio);
        fechaInicio.setHours(0, 0, 0);
        if (!isDate(fechaInicio)) throw new TypeError('window.localStorage.getItem(\'fechaInicio\') not Date');
        return fechaInicio;
    },
    /**
     * @fechaNacimiento Date
     */
    set fechaInicio(fechaInicio) {
        if (!fechaInicio) throw new ReferenceError('fechaInicio not initialized');
        fechaInicio = new Date(fechaInicio);
        fechaInicio.setHours(0, 0, 0);
        if (!isDate(fechaInicio)) throw new TypeError('fechaInicio not Date');
        window.localStorage.setItem('fechaInicio', JSON.stringify(fechaInicio));
    },
    /**
     * returns Date
     */
    get fechaNacimiento() {
        var fechaNacimiento = JSON.parse(window.localStorage.getItem('fechaNacimiento'));
        if (!fechaNacimiento) throw new ReferenceError('window.localStorage.getItem(\'fechaNacimiento\') not initialized');
        fechaNacimiento = new Date(fechaNacimiento);
        fechaNacimiento.setHours(0, 0, 0);
        console.log(fechaNacimiento);
        if (!isDate(fechaNacimiento)) throw new TypeError('window.localStorage.getItem(\'fechaNacimiento\') not Date');
        return fechaNacimiento;
    },
    /**
     * @fechaNacimiento Date
     */
    set fechaNacimiento(fechaNacimiento) {
        if (!fechaNacimiento) throw new ReferenceError('fechaNacimiento not initialized');
        fechaNacimiento = new Date(fechaNacimiento);
        fechaNacimiento.setHours(0, 0, 0);
        if (!isDate(fechaNacimiento)) throw new TypeError('fechaNacimiento not Date');
        window.localStorage.setItem('fechaNacimiento', JSON.stringify(fechaNacimiento));
    },
    /**
     * returns number
     */
    get IMC() {
        return this.peso / Math.pow(this.altura, 2);
    },
    /**
     * returns number
     */
    get mes() {
        return this.meses[this.meses.length - 1];
    },
    /**
     * returns number
     */
    get meses() {
        var meses = [];
        this.semanas.forEach(function (semana, index) {
            if (index % 4 == 0)
                meses.push(semana);
        });
        return meses;
    },
    /**
     * returns string
     */
    get nombre() {
        var nombre = JSON.parse(window.localStorage.getItem('nombre'));
        if (!nombre) throw new ReferenceError('window.localStorage.getItem(\'nombre\') not initialized');
        if (!isString(nombre)) throw new TypeError('window.localStorage.getItem(\'nombre\') not String');
        return nombre;
    },
    /**
     * @nombre string
     */
    set nombre(nombre) {
        if (!nombre) throw new ReferenceError('nombre not initialized');
        if (!isString(nombre)) throw new TypeError('nombre not String');
        window.localStorage.setItem('nombre', JSON.stringify(nombre));
    },
    /**
     * returns number
     */
    get peso() {
        var peso;
        var i = this.pesos.length;
        while (!peso && i--)
            peso = this.pesos[i];
        return peso;
    },
    /**
     * @peso number
     */
    set peso(peso) {
        if (!peso) throw new ReferenceError('peso not initialized');
        if (!isInteger(peso)) throw new TypeError('peso not integer');
        var pesos = this.pesos;
        if (pesos && this.semanas)
            if (pesos[this.semanas.length - 1] != peso) {
                pesos[this.semanas.length - 1] = peso;
                this.pesos = pesos;
            };
    },
    /**
     * returns [number]
     */
    get pesoIdeal() {
        return 21.75 * Math.pow(this.altura, 2);
    },
    /**
     * returns number
     */
    get pesoMaximoUltimoMes() {
        var pesoMaximoUltimoMes = 0;
        var pesos = this.pesos.splice(this.pesos.length - 4, this.pesos.length - 1);
        for (var i = 0; i < pesos.length; i++)
            if (pesos[i] > pesoMaximoUltimoMes)
                pesoMaximoUltimoMes = pesos[i];
        return pesoMaximoUltimoMes;
    },
    /**
     * returns number
     */
    get pesoMinimoUltimoMes() {
        var pesoMinimoUltimoMes = 1000;
        var pesos = this.pesos.splice(this.pesos.length - 4, this.pesos.length - 1);
        for (var i = 0; i < pesos.length; i++)
            if (pesos[i] < pesoMinimoUltimoMes)
                pesoMinimoUltimoMes = pesos[i];
        return pesoMinimoUltimoMes;
    },
    /**
     * returns number
     */
    get pesoObjetivo() {
        var pesoObjetivo;
        var i = this.pesosObjetivo.length;
        while (!pesoObjetivo && i--)
            pesoObjetivo = this.pesosObjetivo[i];
        return pesoObjetivo;
    },
    /**
     * @pesoObjetivo number
     */
    set pesoObjetivo(pesoObjetivo) {
        if (!pesoObjetivo) throw new ReferenceError('pesoObjetivo not initialized');
        if (!isInteger(pesoObjetivo)) throw new TypeError('pesoObjetivo not integer');
        var pesosObjetivo = this.pesosObjetivo;
        if (pesosObjetivo && this.meses)
            if (pesosObjetivo[this.meses.length - 1] != pesoObjetivo) {
                pesosObjetivo[this.meses.length - 1] = pesoObjetivo;
                this.pesosObjetivo = pesosObjetivo;
            };
    },
    /**
     * returns [number]
     */
    get pesos() {
        var pesos = JSON.parse(window.localStorage.getItem('pesos'));
        if (!pesos) throw new ReferenceError('window.localStorage.getItem(\'pesos\') not initialized');
        if (!isIntegerArray(pesos)) throw new TypeError('window.localStorage.getItem(\'pesos\') not Array');
        pesos.forEach(function (peso, i) {
            if (!peso)
                pesos[i] = pesos[i - 1];
        });
        return pesos;
    },
    /**
     * @pesos [number]
     */
    set pesos(pesos) {
        if (!pesos) throw new ReferenceError('pesos not initialized');
        if (!isIntegerArray(pesos)) throw new TypeError('pesos not integer Array');
        window.localStorage.setItem('pesos', JSON.stringify(pesos));
    },
    /**
     * returns [number]
     */
    get pesosObjetivo() {
        var pesosObjetivo = JSON.parse(window.localStorage.getItem('pesosObjetivo'));
        if (!pesosObjetivo) throw new ReferenceError('window.localStorage.getItem(\'pesosObjetivo\') not initialized');
        if (!isIntegerArray(pesosObjetivo)) throw new TypeError('window.localStorage.getItem(\'pesosObjetivo\') not Array');
        return pesosObjetivo;
    },
    /**
     * @pesosObjetivo [number]
     */
    set pesosObjetivo(pesosObjetivo) {
        if (!pesosObjetivo) throw new ReferenceError('pesosObjetivo not initialized');
        if (!isIntegerArray(pesosObjetivo)) throw new TypeError('pesosObjetivo not integer');
        if (this.meses) {
            for (var i = 0; i < pesosObjetivo.length; i++) {
                var j = i;
                if (j != this.meses.length - 1)
                    while (!pesosObjetivo[j])
                        j--;
                pesosObjetivo[i] = pesosObjetivo[j];
            }
            window.localStorage.setItem('pesosObjetivo', JSON.stringify(pesosObjetivo));
        }
    },
    /**
     * returns number
     */
    get semana() {
        return this.semanas[this.semanas.length - 1];
    },
    /**
     * returns [Date]
     */
    get semanas() {
        var semanas = [];
        var fecha = new Date(+this.fechaInicio);
        console.log(fecha);
        for (var i = 0; i <= Math.ceil((((new Date() - this.fechaInicio) / 86400000) + 1) / 7) - 1; i++) {
            semanas.push(new Date(+fecha));
            fecha.setDate(fecha.getDate() + 7);
        }
        return semanas;
    },
    /**
     * returns boolean
     */
    get seHaPesadoEstaSemana() {
        return this.pesos[this.semanas.length - 1] != null;
    },
    /**
     * returns string
     */
    get sexo() {
        var sexo = JSON.parse(window.localStorage.getItem('sexo'));
        if (!sexo) throw new ReferenceError('window.localStorage.getItem(\'sexo\') not initialized');
        if (!isString(sexo)) throw new TypeError('window.localStorage.getItem(\'sexo\') not String');
        return sexo;
    },
    /**
     * @sexo string
     */
    set sexo(sexo) {
        if (!sexo) throw new ReferenceError('sexo not initialized');
        if (!isString(sexo)) throw new TypeError('sexo not String');
        window.localStorage.setItem('sexo', JSON.stringify(sexo));
    },
    /**
     * returns number
     */
    get TMB() {
        return (10 * this.peso) + (6.25 * this.altura * 100) - (5 * this.edad) + ((this.sexo === 'Masculino') ? 5 : -161);
    }
}