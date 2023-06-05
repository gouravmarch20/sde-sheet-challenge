#include <iostream>
using namespace std;

int main()
{
   int *p = 0;
   int num = 44;
   p = &num;
   cout << *p << endl;

   return 0;
}