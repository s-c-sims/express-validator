$(function() 
{
    $('#signup-btn').click( () => 
    {
        $.ajax
        ({
            url: '/register/submit',
            type: 'POST',
            cache: false,
         
            data: 
            {
                firstName: $('#firstName').val(),
                lastName: $('#lastName').val()

            },
            success: (result) => alert(result),
            error: (result) => 
            {
      
                const errors = JSON.parse(result.responseText);

                var errorsContainer = $('#errors');

                var errorsList = '';

                for (var i = 0; i < errors.length; i++)
                {
                    errorsList += '<li>' + errors[i].msg + '</li>';
                }
                
                $('#error-alert').removeClass('d-none')
                errorsContainer.html(errorsList);

            }


        });

      });
      

});