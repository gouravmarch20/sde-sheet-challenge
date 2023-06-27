#include <iostream>
using namespace std;
int main()
{
   int a = 5, b = 10, c, d;
   c = a, b;
   d = (a, b);
   cout << c << d << endl;
   return 0;
}