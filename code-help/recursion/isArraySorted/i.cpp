#include <iostream>
using namespace std;

bool isSortedArr(int arr[], int s)
{
   if (s == 0 || s == 1)
   {
      return true;
   }
   if (arr[0] > arr[1])
   {
      return false;
   }
   else
   {
    return  isSortedArr(arr + 1, s - 1);
   }
}
int main()
{
   int arr[5] = {0, 9, 33, 1, 88};
   // cout << << endl;
   bool ans = isSortedArr(arr, sizeof(arr) / sizeof(arr[0]));
   cout << ans << endl;
   return 0;
}