#include <iostream>
using namespace std;
int main()
{
   int arr[5] = {};
   for (int i = 0; i < 3; i++)
   {
      cout << "enter array item " << i << " ";
      cin >> arr[i];
   }
   // ^ making double
   for (int i = 0; i < 5; i++)
   {
      arr[i] = arr[i] * 2;
   }
   // ^ print array
   for (int i = 0; i < 5; i++)
   {
      cout << arr[i] << endl;
   }

   return 0;
}