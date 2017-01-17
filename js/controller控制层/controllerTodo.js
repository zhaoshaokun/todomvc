/*
* @Author: 赵少坤
* @Date:   2017-01-12 19:17:28
* @Last Modified by:   赵少坤
* @Last Modified time: 2017-01-14 09:45:48
*/
(function (angular){
'use strict';
	angular.module('myApp')
		.controller("controllerTodo", ["$scope", "$window", "serviceTodo", function($scope, $window, serviceTodo){
			var obj = {
				//同步到本地存储
				syncLocalData: serviceTodo.syncLocalData,
				//修改原本的输入框中的值
				todoList:serviceTodo.todoList,
				//添加数据
				inputText: '',
				addTodo: function(event, text){
					if(!text){
						return;
					}
					var keyCode = event.keyCode || event.which;
					if(keyCode ===13 || keyCode === 108){
						//调用serviceTodo文件中的addTodo方法
						serviceTodo.addTodo(text);
						this.inputText = '';
					}else{
						return;
					}
				},
				//删除数据
				deleteTodo: serviceTodo.deleteTodo,
				//编辑
				currentEditTodoId : null,
				editTodo: function(todo){
					this.currentEditTodoId = angular.copy(todo.id);
				},
				// editTodo:serviceTodo.editTodo
				
				//确认编辑完成
				ensureTodo: function(text){
					if (!text) {
						console.log("sada");
						return;
					}
					var keyCode = event.keyCode || event.which;
					if(keyCode === 13 || keyCode === 108) {
						//$scope.currentEditTodoId置为NULL，退出编辑状态
						this.currentEditTodoId = null;

						console.log("编辑完成");
						console.log(this.currentEditTodoId);
					}else {
						return;
					}
				},
				//取消编辑
				unsureTodo: function(todo,text){
					//形参text即为item.text
					// console.log(text);
					var keycode = event.keyCode || event.which;
						
					
					if(keycode === 27) {
						
						this.currentEditTodoId = null;
						console.log("取消编辑")
					}else {
						return;
					}

				},
				//删除全部
				removeAllCompleted: serviceTodo.removeAllCompleted,
				//全选功能
				checkAllTodo: serviceTodo.checkAllTodo
			}
			
			$scope.todoAllApi = obj;
			//选择
			$scope.selector = {};
			$scope.routeHash = "#!/home";
			function handelHashChange() {
				
				if($window.location.hash === "#!/home") {
					//所有的
					$scope.selector = {};
					//选中界面的样式
					$scope.routeHash = "#!/home";
				}else if($window.location.hash === "#!/active"){
					//没有被选中的
					$scope.selector = {
						isCompleted: false
					};
					//选中界面的样式
					$scope.routeHash = "#!/active";
				}else if($window.location.hash === "#!/completed") {
					//选中的
					$scope.selector = {
						isCompleted: true
					};
					//选中界面的样式
					$scope.routeHash = "#!/completed";
				}else {
					$scope.selector = {};
					$window.location.hash = "#!/home";
					$scope.routeHash = "#!/home";
				}

			}
			//监听hashchange事件
			$window.addEventListener('hashchange', function() {
				handelHashChange();
				// $scope.$apply();
				$scope.$digest();
			});
			handelHashChange();
		}])
})(angular);