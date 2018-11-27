function onMessage(event){
  var said = event.massage.text; 
  var msg;
  if(said === "test"){
    msg = "test OK";
  }else if(said === "hello"){
    msg = "Hello!";
  }else{
    msg = "I don't know.";
  }
  return {text: msg};
}
