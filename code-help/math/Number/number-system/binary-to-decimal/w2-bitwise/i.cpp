#include <iostream>
using namespace std;
int main()
{
   int deciNo = 0;
   int n = 111;//^ issue it conversion in binary of 111 
   int i = 0;
   while (n != 0)
   {
      cout << pow(2, i) << endl;
      if (n & 1)
      {
         deciNo = deciNo + pow(2, i);
      }
      i++;
      n >>= 1;
   }
   cout << deciNo << endl;
   return 0;
}