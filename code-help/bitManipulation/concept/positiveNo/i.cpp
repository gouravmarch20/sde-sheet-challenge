#include <iostream>
using namespace std;
int main()
{
   int n = 7;
   int c = 0;
   while (n != 0)
   {
      if (n & 1)
      {
         c++;
      }
      n >>= 1;
      // n = n >> 1;
   }
   cout << "no of set bit " << c << endl;
   return 0;
}