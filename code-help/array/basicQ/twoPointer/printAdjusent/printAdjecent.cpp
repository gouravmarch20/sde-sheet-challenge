#include <iostream>
using namespace std;
int main()
{
   int arr[7] = {3, 4, 5, 6, 7, 8, 9};
   int size = 7;
   int start = 0;
   int end = size - 1;

   //
   while (start <= end)
   {
      if (start == end)
      {
         cout << arr[start]<<"__";
         start++;
      }
      else
      {
         cout << arr[start++] <<"_";
         cout << arr[end--];
         cout << " ";
      }
   }

   return 0;
}