// package x-java.C2;

public class TypeCase {
   public static void main(String[] args) {
      char alpha = 'A';
      char alpha1 = 'X';
      // + nm
      System.out.println("form A to  " + (char) (alpha + 32));// ! m1 > char in bracket
      System.out.println(" " + (alpha + alpha1));// ^ + operator work on number so acii ka addition

      // ~ string mai concat
      String s1 = "i m ";
      String s2 = "the best";
      System.out.println(s1 + s2);// ! m1 > char in bracket

   }
}
