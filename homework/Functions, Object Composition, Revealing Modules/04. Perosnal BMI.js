function personalBMI(name, age, weight, height) {
        let obj =  {
            name: name,
            personalInfo: {
                age: age,
                weight: weight,
                height: height
            },
            BMI: (function(weight, height) {
                return Math.round(weight / Math.pow(height / 100, 2));
            })(weight, height),
            status: (function(weight, height) {
                let result = (weight / Math.pow(height / 100, 2)).toFixed(2);
                if (result < 18.5) {
                    return 'underweight';
                } else if (result < 25) {
                    return 'normal';
                } else if (result < 30) {
                    return 'overweight';
                } else return 'obese';
            }(weight, height)),
        }
        if (obj.status == 'obese') {
            obj.recommendation = 'admission required';
        }
        return obj;

}

personalBMI(
    "Honey Boo Boo", 9, 57, 137
);