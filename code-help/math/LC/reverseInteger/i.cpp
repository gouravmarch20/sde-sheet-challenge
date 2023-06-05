#include <iostream>
#include <cmath>

using namespace std;
int reverseInt(int no)
{

   int ans = 0;
   cout << "kk " << (ans > pow(2, 30)) << endl;

   while (no != 0)
   {
      //     if (revNum > Math.pow(2, 31) / 10 || revNum < (Math.pow(-2, 31) - 1) / 10) {

      if ((ans > (pow(2, 31) / 10)) || (ans < ((pow(-2, 31) - 1) / 10)))
      {
         cout << "hii" << ((pow(-2, 30))) << endl;
         return 0;
      }
      int digit = no % 10;
      ans = ans * 10 + digit;
      no = no / 10;
   }

   return ans;
}
int main()
{
   int no = 123;
   int res = reverseInt(no);
   cout << res;
   return 0;
}