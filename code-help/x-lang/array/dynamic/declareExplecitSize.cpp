#include <iostream>
using namespace std;
int main()
{
   vector<int> arr(3); //^ 0 assign in each default [0 , 0 , 0]
   cout << arr.size() << endl;
   cout << arr.capacity() << endl;
   arr.push_back(4);  //^ [0 , 0 , 0 , 4]
   arr.push_back(14); //^ [0 , 0 , 0 , 4 , 14]
   cout << arr.size() << endl;
   cout << arr.capacity() << endl;
   for (int i = 0; i < arr.size(); i++)
   {
      cout << arr[i] << " ";
   }

   return 0;
}