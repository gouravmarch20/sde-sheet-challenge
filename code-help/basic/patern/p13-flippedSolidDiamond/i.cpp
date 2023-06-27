#include <iostream>
using namespace std;

void diamond(int n)
{
   for (int r = 0; r < n; r++)
   {
      //& half inverted pyramid
      for (int c = 0; c < n - r; c++)
      {
         cout << "*";
      }
      //& half pyramid
      for (int c = 0; c < 2 * r + 1; c++)
      {
         cout << "_";
      }
      //& half inverted pyramid

      for (int c = 0; c < n - r; c++)
      {
         cout << "*";
      }
      // if (r == n - 1)
      // {
      //    continue;
      // }
      cout << endl;
   }
}
void invertedDiamond(int n)
{
   for (int r = 0; r < n; r++)
   {

      //&  half pyramid
      for (int c = 0; c < r + 1; c++)
      {
         cout << "*";
      }

      //&  half pyramid
      for (int c = 0; c < ((2 * n) - (2 * r + 1)); c++)
      {
         cout << "_";
      }
      //&  half pyramid
      for (int c = 0; c < r + 1; c++)
      {
         cout << "*";
      }

      cout << endl;
   }
}

void flippedSolidDiamond(int n)
{
   diamond(n);
   invertedDiamond(n);
}
int main()
{
   flippedSolidDiamond(3);
   return 0;
}