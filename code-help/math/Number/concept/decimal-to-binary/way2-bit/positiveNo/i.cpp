#include <iostream>
using namespace std;
int deciToBinary(int no)
{
   int ans = 0;
   int i = 0;
   while (no != 0)
   {
      int bit = no & 1;
      ans = bit * pow(10, i) + ans;
      no = no >> 1;
      i++;
   }
   return ans;
}
int main()
{

   cout << deciToBinary(9) << endl;
   return 0;
}