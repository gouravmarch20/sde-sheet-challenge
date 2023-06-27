#include <iostream>
using namespace std;
void alphaPalindrome(int n)
{
   for (int r = 0; r < n; r++)
   {
      for (int c = 0; c < r + 1; c++)
      {
         int ans = c + 1;
         char ch = 'A' + ans - 1;
         cout << ch;
      }
      for (int c = r; c > 0; c--)
      {
         // cout << c;
         int ans = c;
         char ch = 'A' + c - 1;
         cout << ch;
      }
      cout << endl;
   }
}
int main()
{
   alphaPalindrome(4);
   return 0;
}