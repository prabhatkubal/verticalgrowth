window.onload = animatelogo();
      
function animatelogo() {
  document.querySelector('.logoname').classList.add('logoappear');
};


const hamburgerAnime = document.querySelector('#hamburgerAnime');
const header = document.querySelector('.header');
const fallbackWindow = document.querySelector('.fallbackWindow');
const inVisible = document.querySelectorAll('.inVisible');
const body = document.querySelector('body');
const mainContent = document.querySelector('.tobeblured');

//For Navigation Links
var navLinks = document.querySelectorAll(".header_links a");

// Animated hamburger menu for tablet and mobile
var hamburger = document.querySelectorAll('.header_menu span');
hamburgerAnime.addEventListener('click', function () {

    if (header.classList.contains('menu')) { // close hamburger menu
        mainContent.classList.add('blur-out');
        mainContent.classList.remove('blur-in');
        body.classList.remove('scroll-lock');
        header.classList.remove('menu');
        inVisible.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
            hamburger[0].style.backgroundColor = "white";
            hamburger[2].style.backgroundColor = "white";
        });
    }
    else { // open hamburger menu
        mainContent.classList.add('blur-in');
        mainContent.classList.remove('blur-out');
        body.classList.add('scroll-lock');
        header.classList.add('menu');
        inVisible.forEach(function (element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
            hamburger[0].style.backgroundColor = "#fc6200";
            hamburger[2].style.backgroundColor = "#fc6200";
        });
    }
});

//Navigation Links
navLinks[3].addEventListener('click', function () {
    product[0].style.display = 'block';
    product[1].style.display = 'block';
    product[2].style.display = 'block';
    product[3].style.display = 'block';
    product[4].style.display = 'block';
    product[5].style.display = 'block';
    product[6].style.display = 'block';
});

// Animated Slider for feature section
const arrowPrev = document.querySelector('.f_left');
const arrowNext = document.querySelector('.f_right');

// for featureItem
const featureItem = document.querySelectorAll('.f_item');

var countFbutton = 0;
var maxCount = 3;
var minCount = 0;

if(arrowNext && arrowPrev) {
    arrowNext.addEventListener('click', () => {
        if (countFbutton < maxCount) {
            countFbutton++;
            console.log(countFbutton);
        }
        if (countFbutton == 0) {
            // featureItem[0].style.opacity = '1';
            // featureItem[1].style.opacity = '0';
            // featureItem[2].style.opacity = '0';
            // featureItem[3].style.opacity = '0';
            featureItem[0].style.display = 'block'
            featureItem[1].style.display = 'none';
            featureItem[2].style.display = 'none';
            featureItem[3].style.display = 'none';
        }
        if (countFbutton == 1) {
            // featureItem[0].style.opacity = '0';
            // featureItem[1].style.opacity = '1';
            // featureItem[2].style.opacity = '0';
            // featureItem[3].style.opacity = '0';
            featureItem[0].style.display = 'none';
            featureItem[1].style.display = 'block';
            featureItem[2].style.display = 'none';
            featureItem[3].style.display = 'none';
        }
        if (countFbutton == 2) {
            // featureItem[0].style.opacity = '0';
            // featureItem[1].style.opacity = '0';
            // featureItem[2].style.opacity = '1';
            // featureItem[3].style.opacity = '0';
            featureItem[0].style.display = 'none';
            featureItem[1].style.display = 'none';
            featureItem[2].style.display = 'block';
            featureItem[3].style.display = 'none';
        }
        if (countFbutton == 3) {
            // featureItem[0].style.opacity = '0';
            // featureItem[1].style.opacity = '0';
            // featureItem[2].style.opacity = '0';
            // featureItem[3].style.opacity = '1';
            featureItem[0].style.display = 'none';
            featureItem[1].style.display = 'none';
            featureItem[2].style.display = 'none';
            featureItem[3].style.display = 'block';
        }
    });
    arrowPrev.addEventListener('click', () => {
        if (countFbutton > minCount) {
            countFbutton--;
            console.log(countFbutton);
        }
        if (countFbutton == 0) {
            // featureItem[0].style.opacity = '1';
            // featureItem[1].style.opacity = '0';
            // featureItem[2].style.opacity = '0';
            // featureItem[3].style.opacity = '0';
            featureItem[0].style.display = 'block'
            featureItem[1].style.display = 'none';
            featureItem[2].style.display = 'none';
            featureItem[3].style.display = 'none';
        }
        if (countFbutton == 1) {
            // featureItem[0].style.opacity = '0';
            // featureItem[1].style.opacity = '1';
            // featureItem[2].style.opacity = '0';
            // featureItem[3].style.opacity = '0';
            featureItem[0].style.display = 'none';
            featureItem[1].style.display = 'block';
            featureItem[2].style.display = 'none';
            featureItem[3].style.display = 'none';
        }
        if (countFbutton == 2) {
            // featureItem[0].style.opacity = '0';
            // featureItem[1].style.opacity = '0';
            // featureItem[2].style.opacity = '1';
            // featureItem[3].style.opacity = '0';
            featureItem[0].style.display = 'none';
            featureItem[1].style.display = 'none';
            featureItem[2].style.display = 'block';
            featureItem[3].style.display = 'none';
        }
        if (countFbutton == 3) {
            // featureItem[0].style.opacity = '0';
            // featureItem[1].style.opacity = '0';
            // featureItem[2].style.opacity = '0';
            // featureItem[3].style.opacity = '1';
            featureItem[0].style.display = 'none';
            featureItem[1].style.display = 'none';
            featureItem[2].style.display = 'none';
            featureItem[3].style.display = 'block';
        }
    });
}

//Contact Form
// var firstName = document.getElementById('firstName').value;
// var lastName = document.getElementById('lastName').value;
// var email = document.getElementById('email').value;
// var phoneNumber = document.getElementById('phoneNumber').value;
// var subject = document.getElementById('subject').value;
// var message = document.getElementById('message').value;
// var form = document.getElementById("form");
// form.addEventListener('submit', function (e) {
//     console.log([firstName, lastName, email, phoneNumber, subject, message]);
// });
// function clearForm() {
//     document.getElementById("form").reset();
// }

//services Page
var numOfServBtn = document.querySelectorAll('.serv_button').length;
for (var i = 0; i < numOfServBtn; i++) {
    document.querySelectorAll('.serv_button')[i].addEventListener('click', function () {
        var servBtnVal = this.value;

        // document.cookie = 'serviceVal=' + servBtnVal;

        Cookies.set("serviceVal", servBtnVal, { sameSite: 'strict', secure: true }, { path: "/products.html" }, { expires: 2 });

        window.location.href = "/products.html", "_self";
    });
}

//Function for making cookies
function setCookie(name, value, options = {}) {

    options = {
      path: '/',
      // add other defaults here if necessary
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }
// function createCookie(name,value,days) {
//     if (days) {
//         var date = new Date();
//         date.setTime(date.getTime()+(days*24*60*60*1000));
//         var expires = "; expires="+date.toGMTString();
//     }
//     else var expires = "";
//     document.cookie = name+"="+value+expires+"; path=/";
// }

//For productlist.html and all products Num of Buttons or anchors
var numOfProbtns = document.querySelectorAll(".pro_btn").length;
var proBtn = document.querySelectorAll(".pro_btn");

if (proBtn) {
    for (var i = 0; i < numOfProbtns; i++) {
        document.querySelectorAll(".pro_btn")[i].addEventListener("click", function () {

            var proValue = this.value;

            //   document.cookie = 'productVal=; SameSite=None; Secure'; + proValue;
            // createCookie('theVal', proValue, 1); path="";
            Cookies.set("productVal", proValue, { sameSite: 'Lax', secure: true }, { path: "/productmain.html" }, { expires: 2 });

            window.location.href = "/productmain.html", "_self";

        });
    }
}


/*For productmain.html productvalue stored in productCookie Variable*/
proMain = document.querySelector('.productmain');

if (proMain) {
    var productCookie = Cookies.get('productVal');
    console.log(productCookie);
}

if (productCookie) {

    document.querySelectorAll('.promain_box')[0].style.display = "none";
    document.querySelectorAll('.promain_box')[1].style.display = "none";
    document.querySelectorAll('.promain_box')[2].style.display = "none";
    document.querySelectorAll('.promain_box')[3].style.display = "none";
    document.querySelectorAll('.promain_box')[4].style.display = "none";
    document.querySelectorAll('.promain_box')[5].style.display = "none";
    document.querySelectorAll('.promain_box')[6].style.display = "none";
    document.querySelectorAll('.promain_box')[7].style.display = "none";
    document.querySelectorAll('.promain_box')[8].style.display = "none";
    document.querySelectorAll('.promain_box')[9].style.display = "none";
    document.querySelectorAll('.promain_box')[10].style.display = "none";
    document.querySelectorAll('.promain_box')[11].style.display = "none";
    document.querySelectorAll('.promain_box')[12].style.display = "none";
    document.querySelectorAll('.promain_box')[13].style.display = "none";
    document.querySelectorAll('.promain_box')[14].style.display = "none";
    document.querySelectorAll('.promain_box')[15].style.display = "none";
    document.querySelectorAll('.promain_box')[16].style.display = "none";
    document.querySelectorAll('.promain_box')[17].style.display = "none";
    document.querySelectorAll('.promain_box')[18].style.display = "none";
    document.querySelectorAll('.promain_box')[19].style.display = "none";
    document.querySelectorAll('.promain_box')[20].style.display = "none";
    document.querySelectorAll('.promain_box')[21].style.display = "none";
    document.querySelectorAll('.promain_box')[22].style.display = "none";
    document.querySelectorAll('.promain_box')[23].style.display = "none";

    switch (productCookie) {
        case "1":
            document.querySelectorAll('.promain_box')[0].style.display = "block";
            break;

        case "2":
            document.querySelectorAll('.promain_box')[1].style.display = "block";
            break;

        case "3":
            document.querySelectorAll('.promain_box')[2].style.display = "block";
            break;

        case "4":
            document.querySelectorAll('.promain_box')[3].style.display = "block";
            break;

        case "5":
            document.querySelectorAll('.promain_box')[4].style.display = "block";
            break;

        case "6":
            document.querySelectorAll('.promain_box')[5].style.display = "block";
            break;

        case "7":
            document.querySelectorAll('.promain_box')[6].style.display = "block";
            break;

        case "8":
            document.querySelectorAll('.promain_box')[7].style.display = "block";
            break;

        case "9":
            document.querySelectorAll('.promain_box')[8].style.display = "block";
            break;

        case "10":
            document.querySelectorAll('.promain_box')[9].style.display = "block";
            break;

        case "11":
            document.querySelectorAll('.promain_box')[10].style.display = "block";
            break;

        case "12":
            document.querySelectorAll('.promain_box')[11].style.display = "block";
            break;

        case "13":
            document.querySelectorAll('.promain_box')[12].style.display = "block";
            break;

        case "14":
            document.querySelectorAll('.promain_box')[13].style.display = "block";
            break;

        case "15":
            document.querySelectorAll('.promain_box')[14].style.display = "block";
            break;

        case "16":
            document.querySelectorAll('.promain_box')[15].style.display = "block";
            break;

        case "17":
            document.querySelectorAll('.promain_box')[16].style.display = "block";
            break;

        case "18":
            document.querySelectorAll('.promain_box')[17].style.display = "block";
            break;

        case "19":
            document.querySelectorAll('.promain_box')[18].style.display = "block";
            break;

        case "20":
            document.querySelectorAll('.promain_box')[19].style.display = "block";
            break;

        case "21":
            document.querySelectorAll('.promain_box')[20].style.display = "block";
            break;

        case "22":
            document.querySelectorAll('.promain_box')[21].style.display = "block";
            break;

        case "23":
            document.querySelectorAll('.promain_box')[22].style.display = "block";
            break;

        case "24":
            document.querySelectorAll('.promain_box')[23].style.display = "block";
            break;

        default:
            break;
    }
}

//For productmain.html and all products Num of Buttons or anchors

// var numOfpromainBtn = document.querySelectorAll(".promainbtn").length;
// var promainBtn = document.querySelectorAll(".promainbtn");

// if (promainBtn) {
//     for (var i = 0; i < numOfpromainBtn; i++) {
//         document.querySelectorAll(".promainbtn")[i].addEventListener("click", function () {

//           var promainValue = this.value;

//         //   document.cookie = 'promainVal=' + promainValue;

//           Cookies.set("promainVal", promainValue, { sameSite: 'strict', secure: true }, {path:"/productdata.html"}, {expires: 2});

//           window.location.href = "/productdata.html", "_self";

//         });
//       }
//     }

// //For productdata.html and for displaying data of all the products by 
// //the value of that product button stored in cookies
// proData = document.querySelector('.productdata');

// /*Health Insurance Product Final Results Div*/
// var productResources = document.querySelectorAll(".prod_resources");
// /*Health Insurance Main Product Selected Options Result & Resources*/
// var resoSumInsProd = document.querySelector(".resourceSumInsProd");
// var resoPremProd = document.querySelector(".resourcePremProd");
// var resoGstProd = document.querySelector(".resourcesGstProd");
// var resoTotalProd = document.querySelector('.resourcesTotalProd');

// /*Get cookies of selected Values*/
// //Product1 selected option cokkie values
// var suminsprod = Cookies.get("suminsProd");
// var agebandprod = Cookies.get("agebandProd");


// /*Health Insurance Selected Options Results Values based on Selected Values*/



// if (proData) {
//     var productmain = Cookies.get('promainVal');
//     console.log(productmain);

//     if (productmain) {
//         switch (productmain) {
//             case "1":
//                 // Sum Insured 150000
//                 if (suminsprod == "150000" & agebandprod == "5-29") {
//                     resoSumInsProd.innerHTML = suminsprod;
//                     resoPremProd.innerHTML = "12250";
//                     resoGstProd.innerHTML = "2205";
//                     resoTotalProd.innerHTML = "14455";
//                 }
//                 else if (suminsprod == "150000" & agebandprod == "30-39") {
//                     resoSumInsProd.innerHTML = suminsprod;
//                     resoPremProd.innerHTML = "12650";
//                     resoGstProd.innerHTML = "2277";
//                     resoTotalProd.innerHTML = "14927";
//                 }
//                 else if (suminsprod == "150000" & agebandprod == "40-49") {
//                     resoSumInsProd.innerHTML = suminsprod;
//                     resoPremProd.innerHTML = "13750";
//                     resoGstProd.innerHTML = "2475";
//                     resoTotalProd.innerHTML = "16225";
//                 }
//                 else if (suminsprod == "150000" & agebandprod == "50-59") {
//                     resoSumInsProd.innerHTML = suminsprod;
//                     resoPremProd.innerHTML = "15850";
//                     resoGstProd.innerHTML = "2853";
//                     resoTotalProd.innerHTML = "18703";
//                 }
//                 else if (suminsprod == "150000" & agebandprod == "60-69") {
//                     resoSumInsProd.innerHTML = suminsprod;
//                     resoPremProd.innerHTML = "18050";
//                     resoGstProd.innerHTML = "3249";
//                     resoTotalProd.innerHTML = "21299";
//                 }
//                 else if (suminsprod == "150000" & agebandprod == "Above 69") {
//                     resoSumInsProd.innerHTML = suminsprod;
//                     resoPremProd.innerHTML = "20150";
//                     resoGstProd.innerHTML = "3627";
//                     resoTotalProd.innerHTML = "23777";
//                 }
//                 // Sum Insured 250000
//                 else if (suminsprod == "250000" & agebandprod == "5-29") {
//                     resoSumInsProd.innerHTML = suminsprod;
//                     resoPremProd.innerHTML = "18700";
//                     resoGstProd.innerHTML = "3366";
//                     resoTotalProd.innerHTML = "22066";
//                 }
//                 else if (suminsprod == "250000" & agebandprod == "30-39") {
//                     resoSumInsProd.innerHTML = suminsprod;
//                     resoPremProd.innerHTML = "19300";
//                     resoGstProd.innerHTML = "3474";
//                     resoTotalProd.innerHTML = "22774";
//                 }
//                 else if (suminsprod == "250000" & agebandprod == "40-49") {
//                     resoSumInsProd.innerHTML = suminsprod;
//                     resoPremProd.innerHTML = "20600";
//                     resoGstProd.innerHTML = "3708";
//                     resoTotalProd.innerHTML = "24308";
//                 }
//                 else if (suminsprod == "250000" & agebandprod == "50-59") {
//                     resoSumInsProd.innerHTML = suminsprod;
//                     resoPremProd.innerHTML = "23400";
//                     resoGstProd.innerHTML = "4212";
//                     resoTotalProd.innerHTML = "27612";
//                 }
//                 else if (suminsprod == "250000" & agebandprod == "60-69") {
//                     resoSumInsProd.innerHTML = suminsprod;
//                     resoPremProd.innerHTML = "26500";
//                     resoGstProd.innerHTML = "4770";
//                     resoTotalProd.innerHTML = "31270";
//                 }
//                 else if (suminsprod == "250000" & agebandprod == "Above 69") {
//                     resoSumInsProd.innerHTML = suminsprod;
//                     resoPremProd.innerHTML = "29700";
//                     resoGstProd.innerHTML = "5346";
//                     resoTotalProd.innerHTML = "35046";
//                 }
//                 // Sum Insured 300000
//                 else if (suminsprod == "300000" & agebandprod == "5-29") {
//                     resoSumInsProd.innerHTML = suminsprod;
//                     resoPremProd.innerHTML = "17400";
//                     resoGstProd.innerHTML = "3132";
//                     resoTotalProd.innerHTML = "20532";
//                 }
//                 else if (suminsprod == "300000" & agebandprod == "30-39") {
//                     resoSumInsProd.innerHTML = suminsprod;
//                     resoPremProd.innerHTML = "17800";
//                     resoGstProd.innerHTML = "3204";
//                     resoTotalProd.innerHTML = "21004";
//                 }
//                 else if (suminsprod == "300000" & agebandprod == "40-49") {
//                     resoSumInsProd.innerHTML = suminsprod;
//                     resoPremProd.innerHTML = "18900";
//                     resoGstProd.innerHTML = "3402";
//                     resoTotalProd.innerHTML = "22302";
//                 }
//                 else if (suminsprod == "300000" & agebandprod == "50-59") {
//                     resoSumInsProd.innerHTML = suminsprod;
//                     resoPremProd.innerHTML = "21000";
//                     resoGstProd.innerHTML = "3780";
//                     resoTotalProd.innerHTML = "24780";
//                 }
//                 else if (suminsprod == "300000" & agebandprod == "60-69") {
//                     resoSumInsProd.innerHTML = suminsprod;
//                     resoPremProd.innerHTML = "23200";
//                     resoGstProd.innerHTML = "4176";
//                     resoTotalProd.innerHTML = "27376";
//                 }
//                 else if (suminsprod == "300000" & agebandprod == "Above 69") {
//                     resoSumInsProd.innerHTML = suminsprod;
//                     resoPremProd.innerHTML = "25300";
//                     resoGstProd.innerHTML = "4554";
//                     resoTotalProd.innerHTML = "29854";
//                 }
//                 // Sum Insured 500000
//                 else if (suminsprod == "500000" & agebandprod == "5-29") {
//                     resoSumInsProd.innerHTML = suminsprod;
//                     resoPremProd.innerHTML = "27300";
//                     resoGstProd.innerHTML = "4914";
//                     resoTotalProd.innerHTML = "32214";
//                 }
//                 else if (suminsprod == "500000" & agebandprod == "30-39") {
//                     resoSumInsProd.innerHTML = suminsprod;
//                     resoPremProd.innerHTML = "27900";
//                     resoGstProd.innerHTML = "5022";
//                     resoTotalProd.innerHTML = "32922";
//                 }
//                 else if (suminsprod == "500000" & agebandprod == "40-49") {
//                     resoSumInsProd.innerHTML = suminsprod;
//                     resoPremProd.innerHTML = "29200";
//                     resoGstProd.innerHTML = "5256";
//                     resoTotalProd.innerHTML = "34456";
//                 }
//                 else if (suminsprod == "500000" & agebandprod == "50-59") {
//                     resoSumInsProd.innerHTML = suminsprod;
//                     resoPremProd.innerHTML = "32000";
//                     resoGstProd.innerHTML = "5760";
//                     resoTotalProd.innerHTML = "37760";
//                 }
//                 else if (suminsprod == "500000" & agebandprod == "60-69") {
//                     resoSumInsProd.innerHTML = suminsprod;
//                     resoPremProd.innerHTML = "35100";
//                     resoGstProd.innerHTML = "6318";
//                     resoTotalProd.innerHTML = "41418";
//                 }
//                 else if (suminsprod == "500000" & agebandprod == "Above 69") {
//                     resoSumInsProd.innerHTML = suminsprod;
//                     resoPremProd.innerHTML = "38300";
//                     resoGstProd.innerHTML = "6894";
//                     resoTotalProd.innerHTML = "45194";
//                 }

//             case "2":

//         }
//     }
// }








