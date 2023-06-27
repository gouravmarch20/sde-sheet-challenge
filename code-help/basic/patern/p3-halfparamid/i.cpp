#include <iostream>
using namespace std;
void halfPyramid(int n1)
{
   for (int r = 0; r < n1; r++)
   {
      for (int c = 0; c < r + 1; c++)
      {
         cout << "*";
      }
      cout << endl;
   }
}
int main()
{
   halfPyramid(3);
   return 0;
}