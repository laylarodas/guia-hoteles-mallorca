$(function () {
    $("[data-toggle='tooltop']").tooltip();
    $("[data-toggle='popover']").popover();
    $(".carousel']").carousel({
        interval: 2000,
        touch: false
    });

    $('#contactHotel').on('show.bs.modal', function (e) {
        $('#reserveBtn1').on("click", function (e) {
            $('#reserveBtn1').removeClass('btn-click');
            $('#reserveBtn1').addClass('btn-primary');
            $('#reserveBtn1').prop("disabled",true);
        });
        $('#reserveBtn2').on("click", function (e) {
            $('#reserveBtn2').removeClass('btn-click');
            $('#reserveBtn2').addClass('btn-primary');
            $('#reserveBtn2').prop("disabled",true);
        });
        $('#reserveBtn3').on("click", function (e) {
            $('#reserveBtn3').removeClass('btn-click');
            $('#reserveBtn3').addClass('btn-primary');
            $('#reserveBtn3').prop("disabled",true);
        });
        $('#reserveBtn4').on("click", function (e) {
            $('#reserveBtn4').removeClass('btn-click');
            $('#reserveBtn4').addClass('btn-primary');
            $('#reserveBtn4').prop("disabled",true);
        });
        $('#reserveBtn5').on("click", function (e) {
            $('#reserveBtn5').removeClass('btn-click');
            $('#reserveBtn5').addClass('btn-primary');
            $('#reserveBtn5').prop("disabled",true);
        });
        $('#reserveBtn6').on("click", function (e) {
            $('#reserveBtn6').removeClass('btn-click');
            $('#reserveBtn6').addClass('btn-primary');
            $('#reserveBtn6').prop("disabled",true);
        });
        $('#reserveBtn7').on("click", function (e) {
            $('#reserveBtn7').removeClass('btn-click');
            $('#reserveBtn7').addClass('btn-primary');
            $('#reserveBtn7').prop("disabled",true);
        });
                
    });
           
    $('#contactHotel').on('shown.bs.modal', function (e) {
        console.log("El modal se mostró");
    });
    $('#contactHotel').on('hide.bs.modal', function (e) {
        console.log("El modal se oculta");
    });
    $('#contactHotel').on('hidden.bs.modal', function (e) {
        $('#reserveBtn1').on("click", function (e) {
            $('#reserveBtn1').removeClass('btn-primary');
            $('#reserveBtn1').addClass('btn-click');
        });
        $('#reserveBtn1').prop("disabled",false);
        $('#reserveBtn2').on("click", function (e) {
            $('#reserveBtn2').removeClass('btn-primary');
            $('#reserveBtn2').addClass('btn-click');
        });
        $('#reserveBtn2').prop("disabled",false);
        $('#reserveBtn3').on("click", function (e) {
            $('#reserveBtn3').removeClass('btn-primary');
            $('#reserveBtn3').addClass('btn-click');
        });
        $('#reserveBtn3').prop("disabled",false);
        $('#reserveBtn4').on("click", function (e) {
            $('#reserveBtn4').removeClass('btn-primary');
            $('#reserveBtn4').addClass('btn-click');
        });
        $('#reserveBtn4').prop("disabled",false);
        $('#reserveBtn5').on("click", function (e) {
            $('#reserveBtn5').removeClass('btn-primary');
            $('#reserveBtn5').addClass('btn-click');
        });
        $('#reserveBtn5').prop("disabled",false);
        $('#reserveBtn6').on("click", function (e) {
            $('#reserveBtn6').removeClass('btn-primary');
            $('#reserveBtn6').addClass('btn-click');
        });
        $('#reserveBtn6').prop("disabled",false);
        $('#reserveBtn7').on("click", function (e) {
            $('#reserveBtn7').removeClass('btn-primary');
            $('#reserveBtn7').addClass('btn-click');
        });
        $('#reserveBtn7').prop("disabled",false);
    });

});


