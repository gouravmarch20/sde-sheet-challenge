#include <iostream>
using namespace std;
int deciToBinary(int no)
{
   int binaryNo = 0;
   int i = 0;
   while (no != 0)
   {
      int bit = no & 1;
      binaryNo = bit * pow(10, i) + binaryNo;
      no = no >> 1;
      i++;
   }
   return binaryNo;
}
int main()
{

   cout << deciToBinary(7) << endl;
   return 0;
}