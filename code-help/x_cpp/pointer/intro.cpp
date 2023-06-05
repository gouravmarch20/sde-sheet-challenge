#include <iostream>
using namespace std;
int main()
{
   int a = 4;
   //& >> address of
   // * > pointer demotion to store address only
   int *b = &a;
   //
   cout << "A address" << &a << endl;
   cout << "A address" << b << endl;
   //  dereference operator : tell value at pointer address
   cout << "the value at b variable" << *b << endl;

   // pointer to pointer
   int **c = &b;
   cout << "the  address of b " << &b << endl;
   cout << "the  address of b " << c << endl;
   cout << "  the value at c  " << *c << endl;
   cout << "  value of c  " << **c << endl;

   return 0;
}