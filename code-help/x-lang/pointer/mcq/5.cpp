#include <iostream>
using namespace std;

int main()
{
   char c1 = 'a';
   char *ptr = &c1;
   // (*ptr)++;
   c1++;
   cout << *ptr << endl;

   return 0;
}