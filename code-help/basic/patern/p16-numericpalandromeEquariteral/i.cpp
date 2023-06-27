#include <iostream>
using namespace std;
int main()
{
   int n = 5;
   for (int r = 0; r < n; r++)
   {
      int k = 0;
      for (int c = 0; c < n; c++)
      {
         if (c < n - 1 - r)
         {
            cout << "_";
         }
         else
         {
            cout << k + 1;
            k++;
         }
      }
      k--;
      for (; k > 0; k--)
      {
         cout << k;
      }

      cout << endl;
   }

   return 0;
}