var fs = require('fs');
exports.get_test_data = function() {
  var content = fs.readFileSync('./mock/test.json','utf-8');
  return content;
}

exports.get_chapter_data = function(){
  var content = fs.readFileSync('./mock/reader/chapter.json','utf-8');
  return content;
}

exports.get_index_data = function(){
  var content = fs.readFileSync('./mock/home.json','utf-8');
  return content;
}

exports.get_female_data = function(){
  var content = fs.readFileSync('./mock/channel/female.json','utf-8');
  return content;
}

exports.get_male_data = function(){
  var content = fs.readFileSync('./mock/channel/male.json','utf-8');
  return content;
}

exports.get_rank_data = function(){
  var content = fs.readFileSync('./mock/rank.json','utf-8');
  return content;
}

exports.get_bookbaket_data = function(){
  var content = fs.readFileSync('./mock/bookbaket.json','utf-8');
  return content;
}

exports.get_category_data = function(){
  var content = fs.readFileSync('./mock/category.json','utf-8');
  return content;
}

exports.get_book_data = function(id){
  if(!id){
    id = '18218';  
  }
  var content = fs.readFileSync('./mock/book/'+id+'.json','utf-8');
  return content;
}
exports.get_chapter_content_data = function(id){
  if(!id){
    id = '1';  
  }
  var content = fs.readFileSync('./mock/reader/data/data'+id+'.json','utf-8');
  return content;
}
