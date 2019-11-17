(function(){
  let container = document.querySelector('.rating');
  let items = container.querySelectorAll('.rating-item');
  container.onclick = function(e) {
    if( sessionStorage.getItem('check') !=  null ){
      alert('Вы уже голосовали в данном опросе!');
      return false;
    };
    sessionStorage.setItem('check', 1);
    if( ! e.target.classList.contains('active') ){
      items.forEach(function(item){
        item.classList.remove('active');
      });
      e.target.classList.add('active');
    }
  }
})();