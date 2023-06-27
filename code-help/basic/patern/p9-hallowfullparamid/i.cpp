#include <iostream>
using namespace std;
int main()
{

   int n;
   cin >> n;
   for (int r = 0; r < n; ++r)
   {
      int k = 0;
      for (int j = 0; j < (n * 2) - 1; ++j)
      {
         if (j < n - r - 1)
         {
            cout << "_";
         }
         else if (k < 2 * r + 1)
         {
            if (k == 0 || k == 2 * r || r == n - 1)
            {
               cout << "*";
            }
            else
            {
               cout << "~";
            }
            k++;
         }
         else
         {
            cout << "_";
         }
      }
      cout << endl;
   }

   return 0;
}