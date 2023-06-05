#include <iostream>
using namespace std;

int main()
{
   int num = 10;
   int *p = &num;
   cout << p;// having num address
   int *q = p;// num address assign 
   (*q)++;// update in num val
   cout << num;

   return 0;
}