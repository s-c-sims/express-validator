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
                password: $('#password').val()

            },
            success: (result) => 
            {
                $('#alert-danger').addClass('d-none');
                $('#alert-success').removeClass('d-none');
                $('#success').html(result);
           
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
                $('#alert-danger').removeClass('d-none');

                errorsContainer.html(errorsList);
            }

        });

      });

      $('.btn-close').click( () =>
      {
          $('#alert-danger').addClass('d-none');
          $('#alert-success').addClass('d-none');

      });

     
      

});