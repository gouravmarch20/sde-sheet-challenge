
/**
 * Array
 */
import java.util.Arrays;

public class Array {

   public static void main(String[] args) {
      // ^ primitive : stack
      int[] r = { 787, 3, 4, 4, 3 };
      System.out.println(r);
      for (int i : r) {
         System.out.println(i);
      }
      // ^ heap

      String[] str = { "ki", "kit" };
      System.out.println(Arrays.toString(str));// array as string

   }
}