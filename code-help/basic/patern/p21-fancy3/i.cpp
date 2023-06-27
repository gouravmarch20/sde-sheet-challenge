#include <iostream>
using namespace std;
int main()
//!   TODO:
{
   int n = 4;
   for (int r = 0; r < n; r++)
   {
      int i = 0;
      int revC = i;

      for (int c = 0; c < 2 * r + 1; c++)
      {

         if (c == 0 || c == 2 * r)
         {
            cout << "*";
         }
         else if (i < r)
         {
            i++;
            revC = i;
            cout << i;
         }
         else if (revC > 0)
         {
            cout << revC - 1;
            revC--;
         }
      }

      cout << endl;
   }

   return 0;
}