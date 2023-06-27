#include <iostream>
using namespace std;
void invertedPyramid(int n)
{
   for (int r = 0; r < n; r++)
   {
      int i = 0;
      int starCounter = 0;
      while (i < n - 1 - r)
      {
         cout << "_";
         i++;
      }
      cout << i ;
      while (starCounter < 2 * r + 1)
      {
         cout << "*";
         starCounter++;
      }
      // i--;
      while (i > 0)
      {
         cout << "_";
         i--;
      }
      cout << endl;
   }
}
int main()
{
   invertedPyramid(4);
   return 0;
}