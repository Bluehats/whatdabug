public class JavaBug5
{
        public String my_member_variable = "somedata";
        public static void main (String args[])
        {
                System.out.println ("This generates a compiler error" +
			my_member_variable );
        }
}
