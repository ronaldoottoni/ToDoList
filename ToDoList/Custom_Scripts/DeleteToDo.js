$(document).ready(function () {

    $('.DeletarTarefa').click(function () {

        var self = $(this);
        var id = self.attr('id');

        $.ajax({
            url: '/ToDoes/AJAXDelete',
            data: {
                id: id
            },
            type: 'POST',
            success: function (result) {
                $('#tableDiv').html(result)
            }
        });
    });
})