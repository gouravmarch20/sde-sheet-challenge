#include <iostream>
using namespace std;
void numericPyramid(int n)
{
   for (int r = 0; r < n; r++)
   {
      int i = 0;
      // ^ space
      while (i < n - r - 1)
      {
         cout << "_";
         i++;
      }
      //^ print
      int k = r + 1;
      while (i < n)
      {
         cout << k;
         k++;
         i++;
      }
      //^ print reverse

      int j = 0;
      int l = k - 2;
      while (j < r)
      {
         cout << l;
         l--;
         j++;
      }
      cout << endl;
   }
}
int main()
{
   numericPyramid(5);
   return 0;
}