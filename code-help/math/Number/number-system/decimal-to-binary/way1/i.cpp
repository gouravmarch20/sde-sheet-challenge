#include <iostream>
using namespace std;
int main()
{
   int binaryNo = 0;
   int n = 5;
   int i = 0;
   while (n != 0)
   {
      int reminder = n % 2;
      binaryNo = reminder * pow(10, i++) + binaryNo;

      n >>= 1;
   }
   cout << binaryNo << endl;
   return 0;
}