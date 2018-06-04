function sendMail($this) {

	var ovoj = $this;
	var tatko = $($this).parent();
    // Get the form.
    var form = $($this).parent('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // TODO: The rest of the code will go here...


			 if(validateForm(tatko) == false){
			 	return false;
			 }

			// Serialize the form data.
			var formData = $(form).serialize();
			alert(formData);
			// Submit the form using AJAX.
			$.ajax({
			    type: 'POST',
			    url: $(form).attr('action'),
			    data: formData
			}).done(function(response) {
				alert(response);
			    // Make sure that the formMessages div has the 'success' class.
			    $(formMessages).removeClass('error');
			    $(formMessages).addClass('success');

			    // Set the message text.
			    $(formMessages).text(response);

			    // Clear the form.
			    $('#name').val('');
			    $('#email').val('');
			    $('#message').val('');
			}).fail(function(data) {
			    // Make sure that the formMessages div has the 'error' class.
			    $(formMessages).removeClass('success');
			    $(formMessages).addClass('error');

			    // Set the message text.
			    if (data.responseText !== '') {
			        $(formMessages).text(data.responseText);
			    } else {
			        $(formMessages).text('Oops! An error occured and your message could not be sent.');
			    }
			});


};

function jsShow(id) {
  // document.getElementById(id).style.display = 'block';
  $("."+id).show();
}

function jsHide(id) {
	$("."+id).hide();
  // document.getElementById(id).style.display = 'none';
}

function validateName($this = null, $form = null) {
	if($this == null){
		 var name = $($form).children("#name").val();
	}else{
		var name = $($this).val();
	}

 
  if(name.length == 0) {
    producePrompt('Name is required', 'name-error' , 'red')
    return false;

  }

  producePrompt('', 'name-error', 'green');
  return true;

}


function validateEmail ($this = null, $form = null) {

	if($this == null){
			 var email = $($form).children("#email").val();
	}else{
			var email = $($this).val();
	}

	  if(email.length == 0) {

	    producePrompt('Email Invalid','email-error', 'red');
	    return false;

	  }

	  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

	    producePrompt('Email Invalid', 'email-error', 'red');
	    return false;

	  }

	  producePrompt('', 'email-error', 'green');
	  return true;

}



function validateMessage($this = null, $form = null) {
	if($this == null){
			 var message = $($form).children("#message").val();
	}else{
			var message = $($this).val();
	}


	  var required = 30;
	  var left = required - message.length;

	  if (left > 0) {
		  	console.log(left);
		    producePrompt(left + ' more characters required','message-error','red');
		    return false;
	  }

	  producePrompt('', 'message-error', 'green');
	  return true;

}


function validateForm($this) {
	
    if (!validateName(null, $this) ||  !validateEmail(null, $this) || !validateMessage(null, $this)) {
    	
        jsShow('submit-error');
        producePrompt('Please fix errors to submit.', 'submit-error', 'red');
        setTimeout(function(){jsHide('submit-error');}, 2000);
        return false;
    }
}

function producePrompt(message, promptLocation, color) {
	$("."+promptLocation).html(message);
	$("."+promptLocation).attr("style", "color: "+color);
}

// Set up an event listener for the contact form.
