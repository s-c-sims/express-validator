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
                lastName: $('#lastName').val(),
                email: $('#email').val(),

            },
            success: (result) => 
            {
                $('#alert').addClass('d-none');

                $('#alert-success').addClass('alert-success');
                $('#alert-success').removeClass('d-none');
                $('#success').html(result)
           
            },
            error: (result) => 
            {
                const errors = JSON.parse(result.responseText);

                var errorsContainer = $('#errors');

                var errorsList = '';

                for (var i = 0; i < errors.length; i++)
                {
                    errorsList += '<li>' + errors[i].msg + '</li>';
                }
                $('#alert-success').addClass('d-none');
                $('#alert').addClass('alert-danger');
                $('#alert').removeClass('d-none');

                errorsContainer.html(errorsList);
            }


        });

      });
      

});