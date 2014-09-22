define("myTemplate" , ["artTemplate"] , function(artTemplate){
   var _template = {};
   var prototypetoolstestTemplate = [];
   prototypetoolstestTemplate.push('<div>我在测试</div>')

   _template.test = artTemplate("prototypetoolstest" , prototypetoolstestTemplate.join(''));

   _template.helper = function(name, helper){
      artTemplate.helper(name, helper);
   }
   return _template;
});