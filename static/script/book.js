var id = location.href.split('?id=').pop();
$.get('/ajax/book?id='+id,function(d){
  new Vue({
    el:'#app',
    data: d,
    methods: {
      readerBook:function(){
        location.href='/reader';
      }  
    }
  })
},'json');