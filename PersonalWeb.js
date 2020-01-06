"use strict";




// $( document ).ready(function() {
//     $(document).mouseenter(function(){
//         $("#M").toggle("slide");
//
//
//
//     });
//
//
//     // $( "p" ).toggleClass( "slider" );
//     $( "#M" ).toggle( "slide" );



    // $(document).ready(function() {
    //     var divWidth = $("#M").width();
    //
    //     $(".acronym").mouseenter(function(){
    //         $(this).animate({
    //             width: "300"
    //         });
    //     }).mouseleave(function(){
    //         $(this).animate({
    //             width: divWidth
    //         });
    //     });
    // });



// }

// $(document).ready(function(){
//     var boxWidth = $("#MSkew").width();
//     $("#MSkew").hover(function(){
//         $("#word1").show();
//         $(this).animate({
//             width: "200"
//         });
//     });
//
// });
//

$(document).ready(function(){
    var boxWidth = $("#MSkew").width();
    $("#MSkew").show(function(){
        $("#word1").show();
        $(this).animate({
            delay:100,
            width: "120"
        });
    });

});


$(document).ready(function() {
    var boxWidth = $("#ESkew").width();
    $("#ESkew").show(function(){
        $("#word2").show();
        $(this).animate({
            delay: 9000,
            // duration: 3000,
            width: "190"

        });
    });
});



$(document).ready(function(){
    var boxWidth = $("#LSkew").width();
    $("#LSkew").show(function(){
        $("#word3").show();
        $(this).animate({
            delay:200,
            width: "230"
        });
    });

});


$(document).ready(function(){
    var boxWidth = $("#ISkew").width();
    $("#ISkew").show(function(){
        $("#word3").show();
        $(this).animate({
            delay:200,
            width: "270"
        });
    });

});

$(document).ready(function(){
    var boxWidth = $("#NSkew").width();
    $("#NSkew").show(function(){
        $("#word4").show();
        $(this).animate({
            delay:200,
            width: "310"
        });
    });

});

$(document).ready(function(){
    var boxWidth = $("#DSkew").width();
    $("#DSkew").show(function(){
        $("#word4").show();
        $(this).animate({
            delay:200,
            width: "350"
        });
    });

});

$(document).ready(function(){
    var boxWidth = $("#ASkew").width();
    $("#ASkew").show(function(){
        $("#word4").show();
        $(this).animate({
            delay:900,
            width: "390"
        });
    });

});




    // }).mouseleave(function(){
    //     $(this).animate({
    //         width: boxWidth
    //     });


$(document).ready(function() {
    var boxWidth = $(".title").width();
    $(".title").hover(function () {
        $("#word2").show();
        $(this).animate({
            width: "220"
        });
    });
});




// $(document).ready(function () {
//
//     var timer;
//     $('.title').slideDown('slow', function () {
//         timer = setTimeout(function () {
//             $('.title').slideUp("slow");
//         }, 5000);
//     });
// });





    // $(".acronym").hover(function(){
    //     $("#M", $(this)).slideToggle(100, 'linear').display
    // });
    //
    //



