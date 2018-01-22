$('#submit').click(function(){
  jQuery.ajax({
      type: "POST",
      url: 'email.php',
      dataType: 'json',

      success: function (obj, textstatus) {
                    
              }
  });
});
