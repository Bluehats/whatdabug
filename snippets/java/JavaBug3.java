import java.util.ArrayList;

public class JavaBug3 {
	
	public static void main(String[] args) {
	    long x = 67;
        int y = 33;

        y = x % y;
	}
}
