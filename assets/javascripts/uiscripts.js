$(document).ready(function(){
  $('.icon').on('click', function(e){
    console.log("detected");
    e.preventDefault();
    var url = $(this).data('url');
    window.location.replace(url);
  });
});
