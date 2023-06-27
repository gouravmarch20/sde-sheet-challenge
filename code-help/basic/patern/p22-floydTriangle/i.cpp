#include <iostream>
using namespace std;
int main()
{
   int i = 1;
   int n = 7;
   for (int r = 0; r < n; r++)
   {
      for (int c = 0; c < r + 1; c++)
      {
         cout << i;
         i++;
      }
      cout << endl;
   }

   return 0;
}