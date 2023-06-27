#include <iostream>
using namespace std;
void hallowRectangle(int n1, int n2)
{
   for (int r = 0; r < n1; r++)
   {
      if (r == 0 || r == n1 - 1)
      {
         for (int c = 0; c < n2; c++)
         {
            cout << "*";
         }
      }
      else
      {
         cout << "*";
         for (int i = 0; i < n2 - 2; i++)
         {
            cout << " ";
         }
         cout << "*";
      }
      cout << endl;
   }
}
int main()
{
   hallowRectangle(6, 5);
   return 0;
}