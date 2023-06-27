#include <iostream>
using namespace std;
void invertedPyramid(int n1)
{
   for (int r = 0; r < n1; r++)
   {
      for (int c = 0; c < n1 - r; c++)
      {
         cout << "*";
      }
      cout << endl;
   }
}
int main()
{
   invertedPyramid(5);
   return 0;
}