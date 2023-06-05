#include <iostream>
using namespace std;
int bitwiseComplement(int no)
{
   int mask = 0;
   int tempNo = no;
   int com = 0;
   //** edge case 
   if (no == 0)
   {
      return 1;
   }
   // 
   while (tempNo != 0)
   {
      mask = (mask << 1) | 1;
      tempNo = tempNo >> 1;
   }

   return (~no & mask);
}
int main()
{
   cout << bitwiseComplement(5);
   return 0;
}