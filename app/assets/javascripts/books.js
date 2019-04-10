function show()
{
    $.ajax({
        url: "authors.json",
        cache: false,
        success: function(response){
            console.log(response);
        }
    });
}

$(document).ready(function(){
    show();
$('.destroy_button').on('click', function(e) {

    var btn = $(this);
    var id = $(this).data('id');
        $.ajax ({
           url: "books/" + id + ".json",
            method: "delete",
            success: function (response){
               console.log( btn.parent().parent().remove());
            }


        });


});
    setInterval('show()',30000);
});