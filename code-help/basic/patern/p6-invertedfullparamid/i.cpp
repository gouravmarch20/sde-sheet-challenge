#include <iostream>
using namespace std;
void invertedFullPyramid(int n)
{
   for (int r = 0; r < n; r++)
   {
      int i = 0;
      while (i < r)
      {
         cout << " ";
         i++;
      }
      while (i < n)
      {
         cout << "*";
         i++;
      }
      cout << endl;
   }
}
int main()
{
   invertedFullPyramid(5);
   return 0;
}