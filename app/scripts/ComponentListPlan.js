/**
 * 组件列表面板
 * 获取可用的组件列表
 */
define("ComponentListPlan" , ["F_glue" , "jquery" ,"Application" , "myTemplate"] , function(glue , $ , app , template){

	var ComponentListPlan = function(){

		var selectItem = null;
		/**
		 * 面板启动
		 */
		this.start = function(){
		}

		/**
		 * 装载模板
		 */
		this.solveTemplate = function(){
			
		}

		/**
		 * 绑定事件
		 */
		this.bindEvent = function(){
			$('').on('' , "click" , function(e){
				//绑定组件的item选择事件
				//1、设置item为选中样式
				//2、unselected 事件
				$(this).addClass("");
				//2、获取组件信息
				var compInfo = $(this).data('cinfo');
				//如果是已经选择的事件则是unselect事件，需要通知出去
			});
		}

		/**
		 * 选择某个组件
		 */
		function selectItem(componentInfo){
			//发送组件选择消息
		}
	}
	return new ComponentListPlan();
});