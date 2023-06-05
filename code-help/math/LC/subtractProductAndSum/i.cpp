#include <iostream>
using namespace std;
class Solution
{
public:
   int subtractProductAndSum(int n)
   {
      int sum = 0;
      int product = 1;
      while (n !=  0)
      {
         int temp;
         temp = n % 10;
         sum += temp;
         product *= temp;
         //
         n = n / 10;
      }

      return product - sum;
   }
};

int main()
{
   Solution solution;

   int result = solution.subtractProductAndSum(1234);
   std::cout << "Result: " << result << std::endl;
   return 0;
}