#include <iostream>
using namespace std;
int main()
{
   int n = 6;
   for (int r = 0; r < n; r++)
   {
      for (int c = 0; c < n; c++)
      {
         if (r == 0 || c == 0 || c == n - 1 - r)
         {
            cout << "*";
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