/**
 * 环境
 */
define("Application" , ["F_glue" ,"jquery" , "RequestProxy"] , function( glue , $ , request){

    var AppFrameWork = function(){

        //组件实例列表
        var componentInstances = {};

        //当前选择的组件
    	var curSelectComponent = null;

    	//注册消息
    	//1、组件选择、取消选择消息
    	//设置鼠标状态
    	function setSelectedMousestatus(sleected){
    		if(curSelectComponent == null){
    			return;
    		}
    		//设置鼠标状态为选择组件状态
    		if(selected){
    			//
    		}else{
    			//发出通知组件取消选择，接收消息的组件自行处理
    		}
    	}

    	//初始化页面创建区域的事件
    	$('pageEditplan').on('click' , function(){
    		if(curSelectComponent != null){
    			//如果当前有选择的组件，单击则将组件放置到编辑容器中
    			//1、请求组件的js脚本
    			//2、
    			return;
    		}else{
                //如果curSelectCompnent==null,
                //首先判断是否选中的相应的组件，如果有，显示操作列表（配置，拖动）
                //
            }
    	});

    	$(document).mousedown(function(e){
    		if(3 == e.which){ 
               alert('这是右键单击事件'); 
            }
    	})
    	/**
    	 * 设置当前在组件面板中选择的组件
    	 */
    	this.setSelectComponent = function(componentInfo){
            curSelectComponent = componentInfo;
            //修改当前鼠标状态为选择
    	}

        /**
         * 重新计算组件属性，通过配置属性重新处理css、js文件，
         * 每个组件实例都有自己的js，css文件
         * @param componentId 组件id
         * @param componentProperties 组件属性
         */
        this.reCalculateCompProperties = function(componentId , componentProperties){
            //向服务器保存组件的配置信息
            //动态创建新的js,css脚本文件,通过动态装载新的脚本文件覆盖原有的配置文件

            //重新装载组件？
        }


        /**
         * 卸载一个组件实例
         */
        this.uninstallComponentInstance = function(componentId){
            //1、在EditPlan中删除组件
            //2、是否需要删除组件的实例
        }

        /*
         * 安装一个组件
         * @param compnentInfo 包含组件的定义信息
         * @param placeContainer 放置组件的容器
         */
        this.installComponent = function(componentInfo , placeContainer){
           //通过componentInfo创建一个组件实例
           //1、安装组件js文件
           //2、安装组件css组件
           //3、安装组件html到容器中
           //4、组件实例化，componentInstance.initDom(html);
           //var componentInstance = componentInfo.createInstance(componentInfo);
           //placeContainer.addChildren(componentInstance);
           //componentInstance.parent = placeContainer;
        }
    }

    return new AppFrameWork();
});