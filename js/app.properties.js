Object.defineProperty(myApp, "altura", {
    get: function () {
        if (this.formGetData('Usuario') && this.formGetData('Usuario').altura)
            return parseFloat(parseFloat(this.formGetData('Usuario').altura).toFixed(2))
        else
            return null;
    }
});
Object.defineProperty(myApp, "fechaInicio", {
    get: function () {
        if (this.formGetData('Usuario') && this.formGetData('Usuario').fechaInicio)
            return new Date(this.formGetData('Usuario').fechaInicio);
        else
            return new Date();
    }
});
Object.defineProperty(myApp, "fechaNacimiento", {
    get: function () {
        if (this.formGetData('Usuario') && this.formGetData('Usuario').fechaNacimiento)
            return new Date(this.formGetData('Usuario').fechaNacimiento);
        else
            return null;
    }
});
Object.defineProperty(myApp, "IMC", {
    get: function () {
        if (this.peso && this.altura)
            return parseFloat((this.peso / Math.pow(this.altura, 2)).toFixed(2));
        else
            return null;
    }
});
Object.defineProperty(myApp, "peso", {
    get: function () {
        if (this.formGetData('Usuario') && this.formGetData('Usuario').peso)
            return parseFloat(parseFloat(this.formGetData('Usuario').peso).toFixed(2));
        else
            return null;
    }
});
Object.defineProperty(myApp, "pesos", {
    get: function () {
        if (this.formGetData('Usuario') && this.formGetData('Usuario').pesos) {
            var pesos = this.formGetData('Usuario').pesos;
            pesos.forEach(function (peso, i) {
                pesos[i] = parseFloat(parseFloat(peso).toFixed(2));
            });
            return pesos;
        } else
            return null;
    },
    set: function (pesos) {
        var i, Usuario;
        /* Validamos los datos */
        if (!this.formGetData('Usuario'))
        /* Si no existe entrada de Usuario */
            return;
        if (!isArray(pesos))
        /* Si pesos no es un array */
            return;
        for (i = 0; i < pesos.length; i++) {
            /* Por cada peso */
            for (property in pesos[i]) {
                /* Por cada propiedad de cada peso */
                if (property != 'fecha' && !property == 'peso')
                /* Si la propiedad no se llama ni fecha ni peso */
                    return;
                if (property == 'fecha' && !isDate(pesos[i].fecha))
                /* Si la propiedad fecha no es una fecha */
                    return;
                if (property == 'peso' && !isNumber(pesos[i].peso))
                /* Si la propiedad peso no es un número */
                    return;
            }
            /* Parseamos la fecha para que tenga en un formato string yyyy-mm-dd */
            pesos[i].fecha = dateToJSON(pesos[i].fecha);
        }
        /* Guardamos los datos */
        Usuario = this.formGetData('Usuario');
        Usuario.pesos = pesos;
        this.formStoreData('Usuario', Usuario);
    }
});
Object.defineProperty(myApp, "pesoIdeal", {
    get: function () {
        if (this.altura)
            return parseFloat((21.75 * Math.pow(this.altura, 2)).toFixed(2));
        else
            return null;
    }
});
Object.defineProperty(myApp, "rangoIMC", {
    get: function () {
        if (this.IMC) {
            if (this.IMC < 18.5)
                return 'delgado';
            if (this.IMC >= 18.5 && this.IMC < 25)
                return 'saludable';
            if (this.IMC >= 25 && this.IMC < 30)
                return 'sobrepeso';
            if (this.IMC >= 30 && this.IMC < 40)
                return 'obeso';
            if (this.IMC >= 40)
                return 'morbido';
        } else
            return null;
    }
});