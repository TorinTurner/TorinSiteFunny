var $form = $('form#HTMLtest'),
    url = 'https://script.google.com/macros/s/AKfycbxnWhlZZZz-DLxMgllsg-LUYAErhfnH9hIzPgu04k-44dp6olvg/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})