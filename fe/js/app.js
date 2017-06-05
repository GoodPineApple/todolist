(function (window) {
    'use strict';

})(window);

$(document).ready(function(){
    $todoInput = $('.new-todo');
    $todoList = $('.todo-list');
    $leftTodoCount = $('.todo-count').children('strong');
    $selectedFilter = $('ul.filters a.selected');
    $todoDetailContainer = $('.todo-detail-container');
    $toggleAllBtn = $('input[type=checkbox].toggle-all');

    // 웹 페이지 처음 로드시 todo list를 가져와서 뿌려줌
    $.ajax({
        url: "/api/todos",
        method: "GET",
        dataType: "json",
        success: function(data){
            var leftTodoCount = 0;
            $.each(data, function(idx, todo){

                if(todo.completed === 0) leftTodoCount++;

                var newTodo = makeNewTodo(todo);
                $todoList.append(newTodo);
            });
            $leftTodoCount.text(leftTodoCount);
        }
    }).fail(function(){
        console.log('Todo리스트 목록을 가져올 수 없습니다.\n');
    });

    // 새로운 할일 추가
    $todoInput.keypress(function(e){
        if(e.keyCode === 13){
            if($todoInput.val().trim().length === 0){
                alert('할 일을 입력하세요.');
                $todoInput.val('');
                $todoInput.focus();
            }else{
                if(confirm($todoInput.val() + ' 을 todo리스트에 등록하시겠습니까?')){
                    $.ajax({
                        url: "/api/todos",
                        method: "POST",
                        data: {
                            'todo': $todoInput.val()
                        },
                        success: function(todo){
                            var newTodo = makeNewTodo(todo);
                            $todoList.prepend(newTodo);
                            $todoInput.val('');
                            $todoInput.focus();
                            $leftTodoCount.text(parseInt($leftTodoCount.text())+1);
                        }
                    }).fail(function(){
                        alert('등록에 실패 하였습니다. 다시 시도해 주세요.');
                    }).done(function(){
                        todoFilter($selectedFilter);
                    });
                }
            }
        }
    });

});