#include <iostream>
using namespace std;
void fancy(int n)
{
   for (int r = 0; r < n; r++)
   {
      for (int c = 0; c < r + 1; c++)
      {
         cout << r + 1;
         if (r != c)
         {
            cout << "*";
         }
      }
      cout << endl;
   }
   //^ inverse
   for (int r = 0; r < n; r++)
   {
      for (int c = 0; c < n - r; c++)
      {
         cout << n - r;
         if (n - r - 1 != c)
         {
            cout << "*";
         }
      }
      cout << endl;
   }
}
int main()
{
   fancy(4);
   return 0;
}