#include <iostream>
using namespace std;
void fancyPattern2(int n)
{
   for (int r = 0; r < n; r++)
   {
      for (int c = 0; c < r + 1; c++)
      {
         cout << r + 3;
      }
      cout << endl;
   }
   for (int r = n - 1; r > 0; r--)
   {
      for (int c = 0; c < r; c++)
      {
         cout << r + 2;
      }
      cout << endl;
   }
}
int main()
{
   fancyPattern2(3);
   return 0;
}