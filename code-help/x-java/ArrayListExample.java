import java.util.ArrayList;
import java.util.Arrays;

/**
 * ArrayListExample
 */
public class ArrayListExample {

   public static void main(String[] args) {
      ArrayList<Integer> list = new ArrayList<>(4);
      for (int i = 0; i < 4; i++) {
         list.add(i + 3);
      }
      //^ multi array direct print possible
      System.out.println(list);
      // for (int i = 0; i < list.length; i++) {
      // System.out.println(list[i]);

      // }
   }
}