import java.util.*;

public class Solution {
   public static void main(String[] args) {
      int[] nums = { 12, 345, 2, 6, 7896 };
      System.out.println(findNumbers(nums));

   }

   static boolean isEvenNoDigit(int no) {
      int c = 0;
      while (no != 0) {
         c++;
         no = no / 10;
      }
      return c % 2 == 0;

   }

   static int findNumbers(int[] nums) {

      int count = 0;
      for (int i = 0; i < nums.length; i++) {
         //
         if (isEvenNoDigit(nums[i])) {
            count++;
         }
      }
      return count;
   }
}
