#include <iostream>
using namespace std;
int main()
{
   int n = 5;
   for (int r = 0; r < n; r++)
   {
      //^ space
      int space = n + 3 - r;
      while (space > 0)
      {
         cout << "_";
         space--;
      }
      int py = 0;
      while (py < 2 * r + 1)
      {
         if (py % 2 == 0)
         {
            cout << r + 1;
         }
         else
         {
            cout << "*";
         }
         py++;
      }
      space = n + 3 - r;
      while (space > 0)
      {
         cout << "_";
         space--;
      }
      cout << endl;
      //
   }

   return 0;
}