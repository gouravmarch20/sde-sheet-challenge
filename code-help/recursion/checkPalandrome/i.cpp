#include <iostream>
using namespace std;
bool isPalindrome(string &str, int i, int j)
{
   if (i > j)
   {
      return true;
   }
   if (str[i] != str[j])
   {
      return false;
   }
   else
   {
      i++;
      j--;
      return isPalindrome(str, i, j);
   }
}
int main()
{

   string str = "abcdcba";
   cout << isPalindrome(str, 0, str.length() - 1);
   return 0;
}