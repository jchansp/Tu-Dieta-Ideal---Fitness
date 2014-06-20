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
            return parseFloat(parseFloat(this.formGetData('Usuario').peso).toFixed(2))
        else
            return null;
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