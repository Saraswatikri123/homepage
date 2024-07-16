//navbar
//nav hide
//counter design
$(document).ready(function () {
    // Contact Us Button Click
    $("#contactUsBtn").click(function () {
        $("#contactFormModal").modal('show');
    });
    // Read More Button Click
    $("#readMoreBtn").click(function () {
        window.open("https://www.fylehq.com", "_blank");
    });
    // Change Project Image on Card Click
    $(".card").click(function () {
        var newImage = $(this).data("image");
        $("#projectImage").attr("src", newImage);
    });

});


//counter design
document.addEventListener("DOMContentLoaded", () => {

    function counter(id, start, end, duration) {

    let obj= document.getElementById(id),

     current= start,

     range= end- start,

     increment = end > start? 1: -1,
    
    step = Math.abs(Math.floor(duration / range)),

    timer =setInterval(() => {

    current += increment;

     obj.textContent = current;

          if (current == end) {

              clearInterval(timer);

        }

    }, step);

}
 counter("count1", 0, 199, 3000);
    counter("count2", 100, 1591, 2500);
        counter("count3", 0, 283, 500);
            counter("count4", 0, 75, 200);
});