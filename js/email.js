alert('in email.js');
$(document).ready(function() {
  $('#submit').click(function(){
    alert('HERE');
    jQuery.ajax({
        type: "POST",
        url: 'email.php',
        dataType: 'json',

        success: function (obj, textstatus) {

                }
    });
  });
});
