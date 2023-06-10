import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

/**
 * ArrayListMulti
 */
public class ArrayListMulti {

   public static void main(String[] args) {
      Scanner in = new Scanner(System.in);
      ArrayList<ArrayList<Integer>> list = new ArrayList<>(4);
      //

      for (int i = 0; i < 3; i++) {
         list.add(new ArrayList<>(3));
      }
      // ^ add element
      for (int i = 0; i < 3; i++) {
         for (int j = 0; j < 3; j++) {
            // ! m1 : using nextLine for integer ==> Int
            list.get(i).add(in.nextInt());
         }
      }

      System.out.println(list);

   }
}