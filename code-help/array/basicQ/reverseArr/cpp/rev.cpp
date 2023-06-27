#include <iostream>
using namespace std;
int main()
{
   int arr[8] = {1, 4, 8, 9, 23, 43, 77, 88};
   int size = 8;
   int e = size - 1;
   int s = 0;

   while (s < e)
   {
      swap(arr[s++], arr[e--]);
   }
   for (int i = 0; i < size; i++)
   {
      cout << arr[i] << " ";
   }

   return 0;
}