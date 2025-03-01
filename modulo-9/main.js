$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        $(`<li>${novaTarefa}</li>`).appendTo('ul');
        $('#nova-tarefa').val('');
    });

    $('ul').on('click', 'li', function() {
        $(this).css({
            'text-decoration': 'line-through',
            'color': 'red'
        });
    });
});