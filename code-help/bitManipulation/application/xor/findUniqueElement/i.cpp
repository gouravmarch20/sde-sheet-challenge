#include <iostream>
#include <vector>

using namespace std;
int findUnique(vector<int> arr)
{
   int ans = 0;//^ why assign 0 ==> zor 0 so no overlap 
   for (int i = 0; i < arr.size(); i++)
   {
      ans = ans ^ arr[i];
   }
   return ans;
}

int main()
{
   vector<int> arr;
   arr.push_back(1);
   arr.push_back(2);
   arr.push_back(3);
   arr.push_back(2);
   arr.push_back(1);
   cout << findUnique(arr) << endl;
   return 0;
}