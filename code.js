$( document ).ready(function() {

    jQuery('.upload-wrap input[type=file]').change(function(){
        var id = jQuery(this).attr("id");
        var newimage = new FileReader();
        newimage.readAsDataURL(this.files[0]);
        newimage.onload = function(e){
          jQuery('.uploadpreview.' + id ).css('background-image', 'url(' + e.target.result + ')' );
        }
      });

});