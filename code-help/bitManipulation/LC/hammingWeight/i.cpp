#include <iostream>
using namespace std;
int hammingWeight(int no)
{
   int count = 0;
   while (no != 0)
   {
      if (no & 1)
      {
         count++;
      }
      no = no >> 1;
   }
   return count;
}
int main()
{
   cout << hammingWeight(11) << endl;
   // cout >> res;
   return 0;
}