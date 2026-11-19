class student{
    private String name;
    private int age;
    private static student obj;
    private student(){  // if making private   then s1 = new student() will show error 
        name = "xyz";
        age = 0;
    }
    private student(String name, int age){
        this.name = name;
        this.age = age;
    }

    static student getObject(){
        if(obj == null) obj = new student();
        return obj;
    }
}

public class singleton_class {
    public static void main(String[] args) {
        student s1, s2;
        s1 = student.getObject();  // if 
        s2 = student.getObject();
        if(s1 ==s2){
            System.out.println("both obj same");
        }else{
            System.out.println("both obj diff");
        }
    }
}
