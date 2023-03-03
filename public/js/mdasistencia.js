$(document).ready(function () {

    $(document).on('show.bs.modal', '.modal', function () {
        $("body").css("padding-right","0px");
    });
   
    $(document).on('hide.bs.modal', '.modal', function () {
        $("body").css("padding-right","0px");
    });
})