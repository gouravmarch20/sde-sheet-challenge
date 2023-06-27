#include <iostream>
using namespace std;
void hallowPyramid(int n)
{
   for (int r = 0; r < n; r++)
   {
      for (int i = 0; i < n - 1 - r; i++)
      {
         cout << "-";
      }

      for (int k = 0; k < 2 * r + 1; k++)
      {
         if (k == 0 || k == 2 * r)
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
}
void hallowInvertedPyramid(int n)
{
   for (int i = n; i > 0; i--)
   {
      int spaceLimit = n - i;
      for (int k = 0; k < spaceLimit; k++)
      {
         cout << "_";
      }

      for (int j = 0; j < 2 * i - 1; j++)
      {
         if (j == 0 || j == 2 * (i - 1))
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
}
void hallowDiamond(int n)
{
   hallowPyramid(n);
   hallowInvertedPyramid(n);
}
int main()
{
   hallowDiamond(4);
   return 0;
}