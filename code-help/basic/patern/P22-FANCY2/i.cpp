#include <iostream>
using namespace std;
//!      TODO: REVERSE NOT ABLE TO THINK
int main()
{
   int n = 4;
   int count = 1;
   for (int r = 0; r < n; r++)
   {
      for (int c = 0; c < 2 * r + 1; c++)
      {
         if (c % 2 == 0)
         {
            cout << count;
            count++;
         }
         else
         {
            cout << "*";
         }
      }
      cout << endl;
   }
   // for (int r = n; r < n; r++)
   // {
   //    for (int c = 0; c < 2 * r + 1; c++)
   //    {
   //       if (c % 2 == 0)
   //       {
   //          cout << count;
   //          count++;
   //       }
   //       else
   //       {
   //          cout << "*";
   //       }
   //    }
   //    cout << endl;
   // }

   return 0;
}