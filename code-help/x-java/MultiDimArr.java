
/**
 * MultiDimArr
 */
import java.util.Arrays;

public class MultiDimArr {

   public static void main(String[] args) {
      // ^ primitive : stack
      int[][] arr = {
            { 1, 2, 3 },
            { 4, 5, 5 },
            { 1, 2, 3 },
      };

      System.out.println(arr[0][2]);
      for (int[] i : arr) {
         System.out.println(Arrays.toString(i));

      }
   }
}