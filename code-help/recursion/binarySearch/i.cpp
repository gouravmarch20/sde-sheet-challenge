#include <iostream>
using namespace std;
int binarySearch(int arr[], int s, int e, int target)
{
   if (s > e)
   {
      return -1;
   }
   int m = (s + e) / 2;

   if (arr[m] == target)
   {
      return m;
   }
   else if (arr[m] < target)
   {
      return binarySearch(arr, m + 1, e, target);
   }
   else
   {
      return binarySearch(arr, s, m - 1, target);
   }
}
int main()
{
   int arr[5] = {1, 3, 8, 11, 33};
   int target = 33;
   cout << binarySearch(arr, 0, 5, target) << endl;
   return 0;
}