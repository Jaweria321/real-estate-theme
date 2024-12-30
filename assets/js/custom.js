$(document).ready(function () {
    $("#spinner").hide();
});
// loader testing
    // document.querySelector("body").style.visibility = "hidden";
    // document.querySelector("#spinner").style.visibility = "visible";
// loader testing
$('.newsfeed-owl-carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    dots: false,
    navText:["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
    navClass:['owl-prev', 'owl-next'],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
})
// Date Picker JQuery Ui
$( function() {
    // $( "#datepicker" ).datepicker();
    $( ".datepicker" ).datepicker({
        selectOtherMonths: true,
        dateFormat: "d MM, yy",
        minDate: new Date(),

    });
} );
// fancy box
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});
// testimonial owlcarousel
$('.testimonial-owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }
    }
})

// team members owlcarousel
$('.team-members-owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        575:{
            items:2
        },
        992:{
            items:3
        },
        1025:{
            items:4
        }
    }
})
// password show hide
function showHidePassword(field, icon) {
    var passswordField = document.getElementById(field);
    var passswordFieldIcon = document.getElementById(icon);
    if (passswordField.type === "password") {
      passswordField.type = "text";
      passswordFieldIcon.classList.add("show-password");
    } else {
      passswordField.type = "password";
      passswordFieldIcon.classList.remove("show-password");
    }
}

function showHidePassword(field, icon) {
    var passswordField = $('#' + field);
    var passswordFieldIcon = $('#' + icon);
    if (passswordField.attr('type') === "password") {
        passswordField.attr('type', "text");
        passswordFieldIcon.addClass("show-password");
    } else {
      passswordField.attr('type', "password");
      passswordFieldIcon.removeClass("show-password");
    }
}
// Gallery Plugin Initialize
$('.gallery').mauGallery({
    columns: {
        xs: 1,
        sm: 2,
        md: 3
    },
    lightBox: true,
    lightboxId: 'myAwesomeLightbox',
    showTags: true,
    tagsPosition: 'top'
});