/*
* @Author: 赵少坤
* @Date:   2017-01-12 19:17:28
* @Last Modified by:   赵少坤
* @Last Modified time: 2017-01-13 16:53:18
*/
(function (angular){
'use strict';
	angular.module('myApp')
		.service("serviceTodo", function($window){
			// 假设本地缓存中有数据就使用该数据，并且需要转换。没有则为[]
			var list = $window.localStorage["my_todo_list"]?JSON.parse($window.localStorage["my_todo_list"]):[];
			this.todoList = list;
			//同步到本地存储
			this.syncLocalData = function(todoList) {
				$window.localStorage["my_todo_list"] = JSON.stringify(todoList);
			}

		// 添加数据
		var self = this;
		this.addTodo = function(todo){
			var addobj = {
					text:todo,
					isCompleted: false,
					id: self.todoList.length+1
				}
				self.todoList.push(addobj);
				todo = "";
				console.log(todo);
				self.syncLocalData(self.todoList);
		}

		//删除数据
		this.deleteTodo = function(todo){

			self.todoList.splice(self.todoList.indexOf(todo), 1)
			self.syncLocalData(self.todoList);
		}

		//编辑
		// this.editTodo = function(todo){
		// 	self.currentEditTodoId = null;
		// 	console.log(todo.id);
		// 	self.currentEditTodoId = angular.copy(todo.id);
		// 	console.log(self.currentEditTodoId);
		// }
		// 
		//删除所有
		this.removeAllCompleted = function(){
			for(var i = 0; i < self.todoList.length; i++) {
				if(self.todoList[i].isCompleted) {
					self.todoList.splice(i--, 1);
				}else {
					
				}
			}
			self.syncLocalData(self.todoList);
		}
		//全选功能
		this.checkAllTodo = function(toggleStatus) {
			if(toggleStatus) {
				for (var i = 0; i < self.todoList.length; i++) {
					self.todoList[i].isCompleted = true;							
				}
			}else{
				for (var i = 0; i < self.todoList.length; i++) {
					self.todoList[i].isCompleted = false;							
				}
			}
			self.syncLocalData(self.todoList);
		}

		})
})(angular);