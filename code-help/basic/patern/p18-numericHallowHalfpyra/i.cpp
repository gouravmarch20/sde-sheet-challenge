#include <iostream>
using namespace std;
int main()
{
   int n = 5;
   for (int r = 0; r < n; r++)
   {
      for (int c = 0; c < n; c++)
      {
         if (r == n - 1 || r == c || c == 0)
         {
            cout << c + 1;
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