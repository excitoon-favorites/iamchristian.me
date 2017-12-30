var $contactForm = $('#contact-form');
$contactForm.validate({
  submitHandler: function(form) {
    $.ajax({
      url: form.action,
      method: form.method,
      data: $(form).serialize(),
      dataType: 'json',
      beforeSend: function() {
        // console.log( $(form).serialize() );
        $contactForm.find('ul.actions').append('<li class="loading">Sending message&hellip;</li>');
      },
      complete: function(data) {
        // console.log( data );
        $contactForm.find('ul.actions li.loading').remove();
        $contactForm.find('ul.actions').append('<li class="valid">Message sent!</li>');
        $contactForm.find('ul.actions li.valid').fadeOut(5000, function() { $(this).remove(); });
        $contactForm[0].reset();
      }
    });
  }
});
