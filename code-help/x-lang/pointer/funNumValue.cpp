#include <iostream>
using namespace std;

void update(int *p)
{
   *p = *p + 1;
}

int main()
{
   int num = 10;
   int *p = &num;
   int **p2 = &p;
   cout << "before " << num << endl;
   update(p);
   cout << "after " << num << endl;

   return 0;
}