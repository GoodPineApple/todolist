package kr.or.connect.todo.utils;

/**
 * Created by taemi on 2017-06-04.
 */
public class Utils {
    public static String simpleFilter(String todo){
        todo = todo.replaceAll("<", "&lt;");
        todo = todo.replaceAll(">", "&gt;");
        return todo;
    }
}