// function getSeparatedSum(sum) {
//     return String(sum).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")
// }

// function initInputRange(obj){
//     let sum = obj.max - obj.min,
//         current = obj.value - obj.min,
//         num = (current / sum) * 100,
//         form = obj.closest('form')
//     colorFilled = form.dataset.rangeBarColorFilled
//     colorEmpty = form.dataset.rangeBarColorEmpty
//     style = `
//         linear-gradient(
//             to right,
//             ${colorFilled} 0%,
//             ${colorFilled} ${num}%,
//             ${colorEmpty} ${num}%,
//             ${colorEmpty} 100%
//         )
//     `;
//     $(obj).css('background', style);
// }

// function editOldPrice(obj) {
//     if (document.getElementById("oldPrice")) {
//         oldPrice.innerHTML = Math.round(Number($( "#numSum" ).val().replace(/ +/g, ''))*1.1)+'  ₸';
//     }
// }
//
// function editNewPrice(obj) {
//     if (document.getElementById("newPrice")) {
//         newPrice.innerHTML = obj+'  ₸';
//     }
// }

// function initRange(){
//     let rangeSum = document.getElementById("rangeSum"),
//         numSum = document.getElementById("numSum"),
//         numDate = document.getElementById("numDate")
//         rangeTime = document.getElementById("rangeTime"),
//         numTime = document.getElementById("numTime"),
//         numValue = [
//             ['1', 'день', '1'],
//             ['2', 'дня', '2'],
//             ['3', 'дня', '3'],
//             ['4', 'дня', '4'],
//             ['5', 'дней', '5'],
//             ['6', 'дней', '6'],
//             ['7', 'дней', '7'],
//             ['8', 'дней', '8'],
//             ['9', 'дней', '9'],
//             ['10', 'дней', '10'],
//             ['11', 'дней', '11'],
//             ['12', 'дней', '12'],
//             ['13', 'дней', '13'],
//             ['14', 'дней', '14'],
//             ['15', 'дней', '15'],
//             ['16', 'дней', '16'],
//             ['17', 'дней', '17'],
//             ['18', 'дней', '18'],
//             ['19', 'дней', '19'],
//             ['20', 'дней', '20'],
//             ['21', 'день', '21'],
//             ['22', 'дня', '22'],
//             ['23', 'дня', '23'],
//             ['24', 'дня', '24'],
//             ['25', 'дней', '25'],
//             ['26', 'дней', '26'],
//             ['27', 'дней', '27'],
//             ['28', 'дней', '28'],
//             ['29', 'дней', '29'],
//             ['1', 'мес.', '60'],
//             ['2', 'мес.', '91'],
//             ['3', 'мес.', '120'],
//             ['4', 'мес.', '121'],
//             ['5', 'мес.', '152'],
//             ['6', 'мес.', '182'],
//             ['7', 'мес.', '212'],
//             ['8', 'мес.', '243'],
//             ['9', 'мес.', '273'],
//             ['10', 'мес.', '304'],
//             ['11', 'мес.', '334'],
//             ['1', 'год', '365'],
//         ];
//
//     if(rangeSum) {
//         numSum.value = getSeparatedSum(rangeSum.value * 1_000);
//
//         rangeSum.oninput = function() {
//             numSum.value = getSeparatedSum(rangeSum.value * 1_000);
//             if (document.getElementById("circsSum")) {
//                 document.getElementById("circsSum").innerHTML = this.value * 1_000;
//                 document.getElementById("circsSumEdit").value = this.value * 1_000;
//             }                         // сумма отрисовка ползунка
//             editOldPrice(numSum.value);
//             editNewPrice(numSum.value);
//         }
//
//         if ($.cookie('numSum')) {
//             numSum.value = $.cookie('numSum');
//             rangeSum.value = $.cookie('numSum').replace(/ +/g, '') / 1000;
//             initInputRange(rangeSum);
//             editOldPrice(numSum.value);
//             editNewPrice(numSum.value);
//         }
//
//         if ($.cookie('numMass') && $.cookie('numMass') < numValue.length) {
//             numTime.value = numValue[$.cookie('numMass')][0];
//             numDate.innerHTML = numValue[$.cookie('numMass')][1];
//             rangeTime.value = numValue[$.cookie('numMass')][2];
//             initInputRange(rangeTime);
//         }
//
//         rangeTime.oninput = function() {
//             let timeValue = numValue[this.value][0]
//             if (numTime.tagName == 'INPUT') {
//                 numTime.value = timeValue;
//             } else {
//                 numTime.innerHTML = timeValue;
//             }
//             numDate.innerHTML = numValue[this.value][1];
//             rangeTime.dataset.day = rangeTime.value;
//
//             if (document.getElementById("circsTime")) {
//                 document.getElementById("circsTime").innerHTML = this.value;
//                 let n = this.value;
//             }
//         }
//
//         // .chrome styling
//         $('.input-range ').on('input', function( ) {
//             initInputRange(this);
//         });
//
//         numSum.value = getSeparatedSum(numSum.value)
//     }
// }

// function editRangeSum(elm) {
//     if (elm < 10) {
//         elm = 10;
//     }
//     let sum = Math.round(elm * 1000)
//     $('#numSum').val(getSeparatedSum(sum));
//     $("#rangeSum").val(elm)
//     initInputRange(document.getElementById("rangeSum"));
// }

$(document).ready(function() {
    // initRange();

    // $( "body" ).on("click", ".on-scroll", function () {
    //     let elm = $(this).attr("data-scroll");
    //     $([document.documentElement, document.body]).animate({
    //         scrollTop: $("#"+elm).offset().top
    //     }, 500);
    // });

    // блокиратор отправки
    // $(document).on("click", "#id_is_agree_public_offer", function () {
    //     if ($(this).is(":checked")) {
    //         $("#submitCalculator").addClass("prevent-register");
    //     } else {
    //         $("#submitCalculator").removeClass("prevent-register");
    //     }
    // });

    // $("#submitCalculator").click(function (e) {
    //     e.preventDefault();
    //     let numSum = document.getElementById("numSum").value,                   // сумма
    //         numTime = document.getElementById("numTime").innerHTML,             // срок колличество дней
    //         numDate = document.getElementById("numDate").innerHTML,             // срок название
    //         numMass = rangeTime.dataset.day;                                    // срок по счету в массиве
    //
    //     // numSum = numSum.replace(/\s/g, "");
    //     $.cookie('numSum', numSum, { expires: 30, path: "/;SameSite=Lax"});     // сумма
    //     $.cookie('numTime', numTime, { expires: 30, path: "/;SameSite=Lax"});   // срок колличество дней
    //     $.cookie('numDate', numDate, { expires: 30, path: "/;SameSite=Lax"});   // срок название
    //     $.cookie('numMass', numMass, { expires: 30, path: "/;SameSite=Lax"});   // срок по счету в массиве
    //
    //     if (this.classList.contains("prevent-register")) {
    //         let href = this.href,
    //             showcaseLink = $('.submitRegistrationLink').data('link'),
    //             needCheckMobile = this.dataset.needCheckMobile,
    //             isAndroid = needCheckMobile && isMobile.Android();
    //         if (!href) {
    //             return
    //         }
    //         if (showcaseLink && !isAndroid) {
    //             window.open(href);
    //             window.location.href = showcaseLink;
    //         } else {
    //             window.location.href = href;
    //         }
    //         sendGTA('clickregistration');
    //     }
    //     else {
    //         if ($("#id_is_agree_public_offer").is(":checked")) {
    //             $("#id_is_agree_error").hide();
    //         } else {
    //             $("#id_is_agree_error").show();
    //         }
    //     }
    // });

    // $('span.reg-request').click(function(e) {
    //     e.preventDefault();
    //     let sum = this.dataset.sum;
    //     if (sum > 0) {
    //         editRangeSum(sum);
    //         sum *= 1000
    //         let inputSum = document.getElementById('numSum');
    //         inputSum.value = getSeparatedSum(sum);
    //     }
    // });

    // $("body").on("keyup", "#numSum", function(e) {
    //     this.value = this.value.replace(/^0+/, '');
    //     if (this.value > Number(this.max)) {
    //         this.value = Number(this.max)
    //     };
    //     let $this = $(this)
    //     if(e.keyCode == 13) {
    //         $this.val(
    //             getSeparatedSum($this.val())
    //         );
    //         editRangeSum($this.val().replace(/\s/g, "") / 1000);  // сумма отрисовка ползунка
    //     }
    // });

    // $("body").on("click", "#numSum", function(e) {
    //     this.value = this.value.replace(/ +/g, '');
    // });

    // $("body").on("focusout", "#numSum", function(e) {
    //     if (this.value > Number(this.max)) {
    //         this.value = Number(this.max)
    //     };
    //     let $this = $(this)
    //     $this.val(
    //         getSeparatedSum($this.val())
    //     );
    //     editRangeSum($this.val().replace(/\s/g, "") / 1000);
    // });

    // $( "#formCalculator" ).on("input", "[inputmode='numeric']", function() {
    //     if (!$( this ).hasClass('datepicker')) {
    //         this.value = this.value.replace(/\D/g,'');
    //     }
    // });

    // $("#formCalculator").submit(function (e) {
    //     e.preventDefault();
    // });
})