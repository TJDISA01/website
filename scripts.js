$(document).ready(function(){
  $("div.food").hide();
  $("div.gaming").hide();
  $("div.music").hide();

  $("button#food").click(function(){
    $("div.food").toggle(100);
  });

  $("button#gaming").click(function(){
    $("div.gaming").toggle(100);
  });

  $("button#music").click(function(){
    $("div.music").toggle(100);
  });

  $(".my_name").hover(function(){
    $("a.easter_egg").css("color", "black");
  });

});