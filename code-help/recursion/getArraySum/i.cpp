#include <iostream>
using namespace std;
int getSum(int *arr, int s)
{
   if (s == 0)
   {
      return 0;
   }
   if (s == 1)
   {
      return arr[0];
   }
   return arr[0] + getSum(arr + 1, s - 1);
}
int main()
{
   int arr[3] = {5, 5, 7};
   int size = sizeof(arr) / sizeof(arr[0]);
   cout << "the sum is " << getSum(arr, 3) << endl;

   return 0;
}