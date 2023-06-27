#include <iostream>
using namespace std;
int main()
{

   int no = 2345;
   while (no > 0)
   {
      int res = no % 10;
      cout << res;
      no = no / 10;

   }

   return 0;
}