$('.reviews-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  fade: false,
  infinite: true,
  dots: false,
  autoplay: true,
  prevArrow: $('.reviews-arrowleft'),
  nextArrow: $('.reviews-arrowright'),
});

/*
function initMap (){
    map = new ymaps.Map("map", {
    center: [55.114363,36.610781],
    zoom: 15,
    controls: []
    });
}

function newMetka (){
    var myPlacemark = new ymaps.Placemark([55.114363,36.610781], {}, {
    preset: 'img/map_clip.svg'
});
    map.geoObjects.add(myPlacemark); 
}

ymaps.ready(initMap);
ymaps.ready(newMetka);
*/



if(document.querySelector('#map')) {
    ymaps.ready(function () {
    var myMap = new ymaps.Map(
      "map",
      {
      center: [55.780536, 37.590872],
      zoom: 19,
      controls: []
      },
      {
      searchControlProvider: "yandex#search",
      }
    ),
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(
      myMap.getCenter(),
      {
      hintContent: "600014, г.Владимир, пос. РТС, д. 1.",
      balloonContent: "600014, г.Владимир, пос. РТС, д. 1.",
      },
      {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: "default#image",
      // Своё изображение иконки метки.
      iconImageHref: "img/marker.png",
      // Размеры метки.
      iconImageSize: [104, 104],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-150, -100],
      }
    );

    myMap.geoObjects.add(myPlacemark);
  });  
}














let listitem1 = document.getElementsByClassName('documents-content-list-item-childrenlink');
let wrapinfo1 = document.getElementsByClassName('wrapinfo1');
let listitem2 = document.getElementsByClassName('documents-content-list-item-inostrlink');
let wrapinfo2 = document.getElementsByClassName('wrapinfo2');
let button_arrow1 = document.getElementsByClassName('button_arrow1');
let button_arrow2 = document.getElementsByClassName('button_arrow2');

listitem1[0].addEventListener('click', function() {
  wrapinfo1[0].classList.toggle("wrapinfo1_block");
  button_arrow1[0].classList.toggle("wrapinfo1btn_act");
});

listitem2[0].addEventListener('click', function() {
 wrapinfo2[0].classList.toggle("wrapinfo2_block");
 button_arrow2[0].classList.toggle("wrapinfo2btn_act");
});







/*-----input number mask------*/
document.addEventListener("DOMContentLoaded", function () {
    var phoneInputs = document.querySelectorAll('input[data-tel-input]');
    
    var getInputNumbersValue = function (input) {
        // Return stripped input value â€” just numbers
        return input.value.replace(/\D/g, '');
    }

    var onPhonePaste = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        var pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            var pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                // Attempt to paste non-numeric symbol â€” remove all non-numeric symbols,
                // formatting will be in onPhoneInput handler
                input.value = inputNumbersValue;
                return;
            }
        }
    }

    var onPhoneInput = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length != selectionStart) {
            // Editing in the middle of input, not last symbol
            if (e.data && /\D/g.test(e.data)) {
                // Attempt to input non-numeric symbol
                input.value = inputNumbersValue;
            }
            return;
        }

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
            var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    }
    var onPhoneKeyDown = function (e) {
        // Clear input after remove last symbol
        var inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            e.target.value = "";
        }
    }
    for (var phoneInput of phoneInputs) {
        phoneInput.addEventListener('keydown', onPhoneKeyDown);
        phoneInput.addEventListener('input', onPhoneInput, false);
        phoneInput.addEventListener('paste', onPhonePaste, false);
    }
})






