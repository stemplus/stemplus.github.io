$(document).ready(function() {
$('.tabnav-links').click(function(e){
    e.preventDefault();
    var tab = $(this).attr("data-tab-target");
    //mark tab active
    $('.tabnav-links').removeClass('active');
    $(this).addClass('active');
    $(".tab-content").hide();
    $(tab).show();
});
});
