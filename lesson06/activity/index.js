

$(submit).submit(); 
$(submit).attr('disabled', true);  

$(clickme).click(function(){ 
  $('#submit').removeAttr('disabled'); 
  $('[data-toggle="tooltip"]').tooltip('disable'); 

}) )
