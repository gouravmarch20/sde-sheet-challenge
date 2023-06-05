#include <iostream>
using namespace std;
int powerOfTwo(int no)
{
   int powerof2 = 1;
   for (int i = 0; i <= 30; i++)
   {
      if (no == powerof2)
      {
         return true;
      }
      // EDGE CASE : NUMBER EXCEED 32 BIT ==> SO DIV BY 2 LATER *2 NO EXCEED
      if (powerof2 < INT_MAX / 2)
      {
         powerof2 = 2 * powerof2;
      }
   }
   return false;
}
int main()
{
   cout << powerOfTwo(1024) << endl;
   return 0;
}