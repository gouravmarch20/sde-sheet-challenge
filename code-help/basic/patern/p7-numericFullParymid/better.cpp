#include <iostream>
using namespace std;
int main()
{
   int n = 5;

   for (int r = 0; r < n; r++)
   {
      //^ space
      for (int c = 0; c < n - r - 1; c++)
      {
         cout << "_";
      }
      //^ number
      for (int c = 0; c < r + 1; c++)
      {
         cout << r + c + 1;
      }
      // ^ reverse number
    
      int start = 2 * r;
      for (int c = 0; c < r; c++)
      {
         cout << start;
         start--;
      }

      cout << endl;
   }

   return 0;
}