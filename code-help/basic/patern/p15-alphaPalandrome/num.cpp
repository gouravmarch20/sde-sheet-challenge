#include <iostream>
using namespace std;
void alphaPalindrome(int n)
{
   for (int r = 0; r < n; r++)
   {
      for (int c = 0; c < r + 1; c++)
      {
         cout << c + 1;
      }
      for (int c = r; c > 0; c--)
      {
         cout << c ;
      }
      cout << endl;
   }
}
int main()
{
   alphaPalindrome(4);
   return 0;
}