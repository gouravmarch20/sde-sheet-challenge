#include <iostream>
using namespace std;
void invertedPyramid(int n)
{
   for (int r = 0; r < n; r++)
   {
      int starCounter = 0;
      for (int c = 0; c < (2 * n - 1); c++)
      {
         if (c < n - r - 1)
         {
            cout << "_";
         }
         else if (starCounter < 2 * r + 1)
         {
            cout << "*";
            starCounter++;
         }
         else
         {
            cout << "_";
         }
      }
      cout << endl;
   }
}
int main()
{
   invertedPyramid(5);
   return 0;
}