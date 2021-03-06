package kr.or.connect.todo.domain;

/**
 * Created by taemi on 2017-06-04.
 */

public class Todo {
    private Integer id;
    private Integer completed;
    private String todo;
    private String date;

    public Todo(Integer id, Integer completed, String todo, String date) {
        this.id = id;
        this.completed = completed;
        this.todo = todo;
        this.date = date;
    }
    public Todo() {}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCompleted() {
        return completed;
    }

    public void setCompleted(Integer completed) {
        this.completed = completed;
    }

    public String getTodo() {
        return todo;
    }

    public void setTodo(String todo) {
        this.todo = todo;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
