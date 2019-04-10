$(document).ready(function() {
    var id = 0;
    $('#add-book').on('click', function () {
        id +=1;
        var add = '<div class="field"><p>Title</p><input type="text" name="author[books_attributes]['+ id +'][title]" id="author_books_attributes_'+ id +'_title">'
            + '<p>Number of pages</p><input type="text" name="author[books_attributes]['+ id +'][number_of_page]" id="author_books_attributes_'+ id +'_number_of_page">'+ '<input type="button" class="btn_remove" value="Удалить"></div><br>';
        $('#new_author').append(add);
    });
    $('#new_author').on('click', '.btn_remove', function(event) {

        event.currentTarget.parentNode.remove();

    });
});