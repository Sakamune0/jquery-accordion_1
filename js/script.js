$(function(){
  //#naviの中のfirstのli要素がクリックされたら
$("#navi").children("li").click(function(){
  //クリックされた.#naviの中のul要素が開いたり閉じたりする。
  $(this).children('ul').slideToggle();
});
});