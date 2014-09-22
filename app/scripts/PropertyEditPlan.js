/**
 * 组件属性编辑面板
 */
define("PropertyEditPlan" , [ "F_glue" ,"jquery" ,"Application" , "myTemplate"] , function(glue , $ , app , template){

	var PropertyEditPlan = function(){
		 //1.注册一个PageStructure选择消息，
		 //2.当编辑框的数据发生变化则需要通知app数据发生变化
		 var componentId = ''
		 /**
		  * 刷新组件属性编辑框
		  * @param componentId 组件实例ID
		  * @param componentProperties 组件属性
		  */
		 this.refresh = function(componentId , componentProperties){
             componentId = componentId;
		 }

		 /**
		  * 组件数据发生变化
		  */
		 this.change = function(){
		 	app.calculateCompProperties();
		 }

	}

	return new PropertyEditPlan();
});