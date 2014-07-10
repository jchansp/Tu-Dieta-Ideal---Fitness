Object.defineProperty(myApp, 'User', {
    get: function () {
        if (this.formGetData && this.formGetData('User')) return this.formGetData('User');
    },
    set: function (User) {
        this.formStoreData('User', User);
    }
});
Object.defineProperty(myApp, 'height', {
    get: function () {
        if (this.User && this.User.height) return JSONtoNumber(this.User.height);
    }
});
//Object.defineProperty(myApp, 'initialDate', {
//    get: function () {
//        if (this.User && this.User.initialDate) return new Date(this.User.initialDate);
//    }
//});
//Object.defineProperty(myApp, 'dateOfBirth', {
//    get: function () {
//        if (this.User && this.User.dateOfBirth) return new Date(this.User.dateOfBirth);
//    }
//});
Object.defineProperty(myApp, 'bodyMassIndex', {
    get: function () {
        if (this.weight && this.height) return round(this.weight / Math.pow(this.height, 2));
    }
});
Object.defineProperty(myApp, 'weight', {
    get: function () {
        if (this.User && this.User.weights && this.User.weights.length > 0) return JSONtoNumber(this.User.weights[this.User.weights.length - 1].weight);
    }
});
//Object.defineProperty(myApp, 'initialWeight', {
//    get: function () {
//        if (this.User && this.User.weight) return round(this.User.weight);
//    }
//});
Object.defineProperty(myApp, 'weights', {
    get: function () {
        if (this.User && this.User.weights) {
            var weights = this.User.weights;
            weights.forEach(function (weight, i) {
                for (property in weight) {
                    if (property === 'date') weight.date = JSONtoDate(weight.date);
                    if (property === 'weight') weight.weight = JSONtoNumber(weight.weight);
                }
            });
            return weights;
        }
    },
    set: function (weights) {
        if (this.User && isArray(weights)) {
            weights.forEach(function (weight, i) {
                for (property in weight) {
                    if (property === 'date') weight.date = dateToJSON(weight.date);
                    if (property === 'weight') weight.weight = numberToJSON(weight.weight);
                }
            });
            var User = this.User;
            User.weights = weights;
            this.User = User;
        }
    }
});
Object.defineProperty(myApp, 'idealWeight', {
    get: function () {
        if (this.height) return round(21.75 * Math.pow(this.height, 2));
    }
});
Object.defineProperty(myApp, 'bodyMassIndexRange', {
    get: function () {
        if (this.bodyMassIndex) {
            if (this.bodyMassIndex < 18.5)
                return 'delgado';
            if (this.bodyMassIndex >= 18.5 && this.bodyMassIndex < 25)
                return 'saludable';
            if (this.bodyMassIndex >= 25 && this.bodyMassIndex < 30)
                return 'sobreweight';
            if (this.bodyMassIndex >= 30 && this.bodyMassIndex < 40)
                return 'obeso';
            if (this.bodyMassIndex >= 40)
                return 'morbido';
        }
    }
});