/**
 * 环境
 */
define("Application" , ["F_glue" ,"jquery" , "RequestProxy" , "AppConstant"] , function( glue , $ , request , AppConstant){

    var AppFrameWork = function(){

        //组件实例列表
        var componentInstances = {};

        //当前选择的组件
        var curSelectComponentInfo = null;

        var that = this;

        this.init = function(){
            glue.subscribe(AppConstant.MSG_SELECT_COMPNENT_INFO ,   this.setSelectComponentInfo , this);
            glue.subscribe(AppConstant.MSG_UNSELECT_COMPNENT_INFO , this.setSelectComponentInfo , this);
        }

    	//注册消息
    	//1、组件选择、取消选择消息
    	//设置鼠标状态
    	this.setSelectedMousestatus = function(sleected){
    		if(curSelectComponent == null){
    			return;
    		}
    		//设置鼠标状态为选择组件状态
    		if(selected){
    			//设置选择状态
    		}else{
    			//取消选择状态
    		}
    	}

    	//初始化页面创建区域的事件
    	$('pageEditplan').on('click' , function(e){
    		if(3 == e.which){ 
               glue.log('右键选择');
               if(curSelectComponent!=null){
                    glue.publish(AppConstant.MSG_UNSELECT_COMPNENT_INFO , {source:that , obj:null});
                    that.setSelectedMousestatus(false); //取消选择
               }
            }else{
               if(curSelectComponent!=null){
                    that.installComponent(curSelectComponentInfo);
               }
            }
            return false;
    	});

    	
    	/**
    	 * 设置当前在组件面板中选择的组件
    	 */
    	this.setSelectComponentInfo = function(componentInfo){
            curSelectComponentInfo = componentInfo;
            //修改当前鼠标状态为选择
            this.setSelectedMousestatus(typeof componentInfo != 'undefined');
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