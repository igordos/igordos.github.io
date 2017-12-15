$(document).ready(function () {

    $( "#formContact" ).submit(function( e ) {
        e.preventDefault();

        var msg   = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: '#',
            data: msg,
            success: function(data) {
                // $('#results').html(data);
                liteModal.close('#formCall');
            },
            error:  function(xhr, str){
                alert('Возникла ошибка: ' + xhr.responseCode);
            }
        });
    });

});
