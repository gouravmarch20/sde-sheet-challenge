#include <iostream>
using namespace std;
int main()
{
   vector<int> arr;

   cout << arr.size() << endl;
   cout << arr.capacity() << endl;
   arr.push_back(5);
   arr.push_back(6);
   arr.push_back(7);
   cout << arr.size() << endl;
   cout << arr.capacity() << endl;
   return 0;
}