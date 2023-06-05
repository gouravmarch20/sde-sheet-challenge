#include <iostream>
using namespace std;

int linearSearch(int arr[], int s, int target)
{
   if (s == 0)
   {
      return false;
   }
   if (arr[0] == target)
   {
      return true;
   }

   return linearSearch(arr + 1, s - 1, target);
}
int main()
{
   int arr[5] = {0, 9, 33, 1, 88};
   cout << linearSearch(arr, 5, 1) << endl;

   return 0;
}