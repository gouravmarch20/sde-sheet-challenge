#include <iostream>
using namespace std;
void fullPyramid(int n)
{
   for (int r = 0; r < n; r++)
   {
      int i = 0;
      for (int c = 0; c < n; c++)
      {
         if (i < n - 1 - r)
         {
            cout << "_";
            i++;
         }
         else
         {
            cout << "* ";
         }
      }

      cout << endl;
   }
}
void invertedFullPyramid(int n)
{
   for (int r = n; r > 0; r--)
   {
      int i = 0;
      for (int c = 0; c < n; c++)
      {
         if (i < n - r)
         {
            cout << "_";
            i++;
         }
         else
         {
            cout << "* ";
         }
      }
      cout << endl;
   }
}
void solidDiamond(int n)
{
   fullPyramid(n);
   invertedFullPyramid(n);
}
int main()
{
   solidDiamond(5);
   return 0;
}