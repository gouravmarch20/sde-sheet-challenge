#include <iostream>
using namespace std;
void print(int arr[], int s)
{

   for (int i = 0; i < s; i++)
   {
      cout << arr[i] << " ";
   }
   cout << endl;
}
void refTest(int arr[])
{
   arr[0] = 5;
   arr[1] = 10;
   arr[2] = 15;
   cout << "ref test fun done" << endl;
}
int main()
{
   int s = 3;
   int arr[3] = {1, 5, 9};
   print(arr, s);

   refTest(arr);
   print(arr, s);
   return 0;
}