#include <iostream>
using namespace std;
int main()
{
   int n = 5;
   for (int r = 0; r < n; r++)
   {
      for (int c = 0; c < r + 1; c++)
      {
         cout << "*";
      }

      cout << endl;
   }
   for (int r = 0; r < n; r++)
   {
      for (int c = n - 1 - r ; c > 0; c--)
      {
         cout << "*";
      }
      cout << endl;
   }

   return 0;
}