/**
 * 组件列表面板
 * 获取可用的组件列表
 * TODO 需要做一个基类，处理消息触发，如果是自己发送的消息不需要处理
 */
define("ComponentListPlan" , ["F_glue" , "jquery" ,"Application" , "myTemplate" , "AppConstant"] , 
	function(glue , $ , app , template , AppConstant){

	var ComponentListPlan = function(){

		var selectItem = null;

		var that = this;
		/**
		 * 面板启动
		 */
		this.init = function(){
			glue.subscribe(AppConstant.MSG_UNSELECT_COMPNENT_INFO, this.unselectItem , this);
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
				if(compInfo){
					that.selectItem(compInfo);
				}
			});
		}

		/**
		 * 选择某个组件
		 */
		this.selectItem = function(componentInfo){
			//发送组件选择消息
			glue.publish(AppConstant.MSG_SELECT_COMPNENT_INFO , {source:that , obj : componentInfo})
		}

		this.unselectItem = function(component){
			glue.log(this);
			glue.log('component : '+component);
		}
	}
	return new ComponentListPlan();
});