function sendContact() {
    var fields = {};

    document.addEventListener("DOMContentLoaded", function () {
        fields.firstName = document.getElementById('firstName');
        fields.lastName = document.getElementById('lastName');
        fields.email = document.getElementById('email');
        fields.phoneNumber = document.getElementById('phoneNumber');
        fields.subject = document.getElementById('subject');
        fields.message = document.getElementById('message');
    })

    function isNotEmpty(value) {
        if (value == null || typeof value == 'undefined') return false;
        return (value.length > 0);
    }

    function isNumber(num) {
        return (num.length > 0) && !isNaN(num);
    }

    function isEmail(email) {
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return regex.test(String(email).toLowerCase());
    }

    function fieldValidation(field, validationFunction) {
        if (field == null) return false;

        let isFieldValid = validationFunction(field.value)
        if (!isFieldValid) {
            field.className = 'placeholderRed';
        } else {
            field.className = '';
        }

        return isFieldValid;
    }

    let genderValue = male.checked ? "male" : "female"

    function getGender() {
        return document.querySelector('input[name="gender"]:checked')
    }

    function isValid() {
        var valid = true;

        valid &= fieldValidation(fields.firstName, isNotEmpty);
        valid &= fieldValidation(fields.lastName, isNotEmpty);
        valid &= fieldValidation(fields.gender, isNotEmpty);
        valid &= fieldValidation(fields.email, isEmail);
        valid &= fieldValidation(fields.phoneNumber, isNumber);
        valid &= fieldValidation(fields.subject, isNotEmpty);
        valid &= fieldValidation(fields.message, isNotEmpty);
        valid &= arePasswordsEqual();

        return valid;
    }

    class User {
        constructor(firstName, lastName, gender, address, country, email, newsletter, question) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.gender = gender;
            this.subject = subject;
            this.email = email;
            this.phoneNumber = phoneNumber;
            this.message = message;
        }
    }
}



    /*Health Insurance Main Product classes of Selected Options Values*/
    var sumInsPro1 = document.querySelectorAll(".sumInsPros")[0];
    var sumInsPro2 = document.querySelectorAll(".sumInsPros")[1];
    var sumInsPro3 = document.querySelectorAll(".sumInsPros")[2];
    var sumInsPro4 = document.querySelectorAll(".sumInsPros")[3];
    var sumInsPro5 = document.querySelectorAll(".sumInsPros")[4];
    var sumInsPro6 = document.querySelectorAll(".sumInsPros")[5];
    var sumInsPro7 = document.querySelectorAll(".sumInsPros")[6];
    var sumInsPro8 = document.querySelectorAll(".sumInsPros")[7];
    var sumInsPro10 = document.querySelectorAll(".sumInsPros")[8];
    var sumInsPro12 = document.querySelectorAll(".sumInsPros")[9];
    var sumInsPro13 = document.querySelectorAll(".sumInsPros")[10];
    var sumInsPro14 = document.querySelectorAll(".sumInsPros")[11];
    var sumInsPro17 = document.querySelectorAll(".sumInsPros")[12];
    var sumInsPro18 = document.querySelectorAll(".sumInsPros")[13];
    var sumInsPro19 = document.querySelectorAll(".sumInsPros")[14];
    var sumInsPro20 = document.querySelectorAll(".sumInsPros")[15];
    var sumInsPro21 = document.querySelectorAll(".sumInsPros")[16];
    var sumInsPro22 = document.querySelectorAll(".sumInsPros")[17];
    var sumInsPro23 = document.querySelectorAll(".sumInsPros")[18];

    var ageBandPro1 = document.querySelectorAll(".ageBandPros")[0];
    var ageBandPro2 = document.querySelectorAll(".ageBandPros")[1];
    var ageBandPro3 = document.querySelectorAll(".ageBandPros")[2];
    var ageBandPro5 = document.querySelectorAll(".ageBandPros")[3];
    var ageBandPro6 = document.querySelectorAll(".ageBandPros")[4];
    var ageBandPro7 = document.querySelectorAll(".ageBandPros")[5];
    var ageBandPro8 = document.querySelectorAll(".ageBandPros")[6];
    var ageBandPro9 = document.querySelectorAll(".ageBandPros")[7];
    var ageBandPro10 = document.querySelectorAll(".ageBandPros")[8];
    var ageBandPro11 = document.querySelectorAll(".ageBandPros")[9];
    var ageBandPro12 = document.querySelectorAll(".ageBandPros")[10];
    var ageBandPro13 = document.querySelectorAll(".ageBandPros")[11];
    var ageBandPro16 = document.querySelectorAll(".ageBandPros")[12];
    var ageBandPro17 = document.querySelectorAll(".ageBandPros")[13];
    var ageBandPro18 = document.querySelectorAll(".ageBandPros")[14];

    var policyTermPro4 = document.querySelectorAll(".policyTermPros")[0];
    var policyTermPro6 = document.querySelectorAll(".policyTermPros")[1];
    var policyTermPro8 = document.querySelectorAll(".policyTermPros")[2];
    var policyTermPro17 = document.querySelectorAll(".policyTermPros")[3];
    var policyTermPro18 = document.querySelectorAll(".policyTermPros")[4];
    var policyTermPro20_1 = document.querySelectorAll(".policyTermPros")[5];
    var policyTermPro20_2 = document.querySelectorAll(".policyTermPros")[6];
    var policyTermPro21 = document.querySelectorAll(".policyTermPros")[7];
    var policyTermPro23 = document.querySelectorAll(".policyTermPros")[8];

    var policyTypePro6 = document.querySelectorAll(".policyTypePros")[0];
    var policyTypePro7 = document.querySelectorAll(".policyTypePros")[1];
    var policyTypePro8 = document.querySelectorAll(".policyTypePros")[2];
    var policyTypePro9 = document.querySelectorAll(".policyTypePros")[3];
    var policyTypePro10 = document.querySelectorAll(".policyTypePros")[4];
    var policyTypePro11 = document.querySelectorAll(".policyTypePros")[5];
    var policyTypePro13 = document.querySelectorAll(".policyTypePros")[6];
    var policyTypePro18 = document.querySelectorAll(".policyTypePros")[7];

    var zonePro7 = document.querySelectorAll(".zonePros")[0]
    var zonePro18 = document.querySelectorAll(".zonePros")[1]
     
    //Ony for product with value 21
    var insuredAgePro21 = document.getElementById("insuredAgePros");
    var members2AgePro21 = document.getElementById("members2AgePros");
    var members3AgePro21 = document.getElementById("members3AgePros");
    var members4AgePro21 = document.getElementById("members4AgePros");

    var planTypePro2 = document.querySelectorAll(".planTypePros")[0];
    var planTypePro3 = document.querySelectorAll(".planTypePros")[1];
    var planTypePro12 = document.querySelectorAll(".planTypePros")[2];
    var planTypePro14 = document.querySelectorAll(".planTypePros")[3];
    var planTypePro17 = document.querySelectorAll(".planTypePros")[4];

    //only for product with value 12
    var ChildPro12 = document.getElementById("ChildPros");
    var P1AgePro12 = document.getElementById("P1AgePros");
    var P2AgePro12 = document.getElementById("P2AgePros");
    var P3AgePro12 = document.getElementById("P3AgePros");
    var P4AgePro12 = document.getElementById("P4AgePros");
    
    var deductiblePro13 = document.getElementById("deductiblePros");

    var membersPro13 = document.querySelectorAll(".membersPros")[0]
    var membersPro14 = document.querySelectorAll(".membersPros")[1]

    var schemePro22 = document.getElementById("schemePros");
