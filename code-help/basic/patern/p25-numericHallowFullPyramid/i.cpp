#include <iostream>
using namespace std;
int main()
{

   int n = 5;
   for (int r = 0; r < n; r++)
   {
      int start = 1;
      //^ space
      for (int c = 0; c < n - r - 1; c++)
      {
         cout << "_";
      }

      for (int c = 0; c < 2 * r + 1; c++)
      {
         //^ first last row of numeric pyramid
         if (r == 0 || r == n - 1)
         {
            if (c % 2 == 0)
            {
               // even
               cout << start;
               start++;
            }
            else
            {
               cout << "_";
            }
         }
         else
         {
            if (c == 0)
            {
               cout << start;
            }
            else if (c == 2 * r)
            {
               cout << r + 1;
            }
            else
            {
               cout << "_";
            }
         }
      }

      cout << endl;
   }

   return 0;
}