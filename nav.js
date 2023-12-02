let flag = false
$("#menu").click(function(){
  $("nav").toggleClass("open")
  
  if (flag == false){
    
  $("#menu").html('<i class="fa-solid fa-xmark"></i> <p>Close Menu</p>')
  flag = true 
  }
  else{
  $("#menu").html('<i class="fa-solid fa-bars"></i></i> <p>Close Menu</p>')
  flag = false

  }
})