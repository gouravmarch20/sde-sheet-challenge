#include <iostream>
using namespace std;
void hallowRectangle(int n1, int n2)
{
   for (int r = 0; r < n1; r++)
   {

      for (int c = 0; c < n2; c++)
      {
         if (r == 0 || r == n1 - 1 || c == 0 || c == n2 - 1)
         {
            cout << "*";
         }
         else
         {
            cout << "_";
         }
      }

      cout << endl;
   }
}
int main()
{
   hallowRectangle(4, 4);
   return 0;
}