#include <iostream>
using namespace std;
int fac(int n)
{
   if (n == 0)
   {
      return 1;
   }
   int smallerProblem = fac(n - 1);
   int bigProblem = n * smallerProblem;
   return bigProblem;
}
int main()
{

   int res = fac(5);
   cout << res << endl;
   return 0;
}