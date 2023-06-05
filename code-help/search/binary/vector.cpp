#include <iostream>
#include <vector>
using namespace std;

int search(vector<int> &nums, int target)
{
   int n = nums.size() - 1;
   int s = 0;
   int e = n ;
   cout << nums[e] << endl ;

   while (s <= e)
   {
      int mid = (s + e) >> 1;

      if (nums[mid] == target)
      {
         return mid;
      }
      else if (nums[mid] > target)
      {
         e = mid - 1;
      }
      else
      {
         s = mid + 1;
      }
   }

   return -1;
}

int main()
{

   // vector<int> nums = {33, 44, 55, 66};
   vector<int> nums;
   nums.push_back(33);
   nums.push_back(44);
   nums.push_back(55);
   nums.push_back(66);
   int target = 66;
   int result = search(nums, target);

   if (result == -1)
   {
      cout << "Target element not found\n";
   }
   else
   {
      cout << "Target element found at index: " << result << "\n";
   }

   return 0;
}
