#include <iostream>
#include <math.h>
using namespace std;
int decimalToBinary(int binaryNo)
{

   int i = 0;
   int deciNo = 0;
   cout << binaryNo << endl;
   while (binaryNo != 0)
   {
      int digit = binaryNo % 10;
      if (digit)
      {
         deciNo = pow(2, i) + deciNo;
      }
      binaryNo = binaryNo / 10;
      i++;
   }
   return deciNo;
}
int main()
{

   cout << decimalToBinary(111) << endl;
   return 0;
}