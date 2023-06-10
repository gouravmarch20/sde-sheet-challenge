#include <iostream>
using namespace std;

int getSum(int *arr, int n)
{
   cout << endl
        << arr << endl;
   cout << "size of " << sizeof(arr) << endl; //** address ka size length
   int sum = 0;
   for (int i = 0; i < n; i++)
   {
      sum += arr[i];
   }

   return sum;
}

int main()
{
   int arr[7] = {4, 8, 4, 4, 2, 2, 2};
   cout << "sum is " << getSum(arr + 2, 5) << endl;
   return 0;
}