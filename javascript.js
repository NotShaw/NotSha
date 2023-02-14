document.addEventListener('play', function(element){
  var audios = document.getElementsByTagName('audio');
  
  for(var i = 0, len = audios.length; i < len; i++){
      
      if(audios[i] != element.target){
       // console.log("audio paused");
          audios[i].pause();
      }
  }

}, true);