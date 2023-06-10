#include <iostream>
using namespace std;
int main()
{
   // ** char array print whole
   char ch[6] = "abcde";
   char *c = &ch[0];
   cout << ch << endl;
   cout << c << endl;
   c = c + 2;
   cout << c << endl;
   return 0;
}