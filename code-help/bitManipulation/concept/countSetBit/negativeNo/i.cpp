#include <iostream>
//!TODO: HOW MASK variable working
using namespace std;
int countSetBits(int num)
{
   int count = 0;
   unsigned int mask = 1; //^ only +ve no to hold 1 bit extra than negative no

   while (mask != 0)
   {
      if (num & mask)
      //^ 11111111111111111111111111110110 & 0001 => 00000000000000000000000000000001
      //^ 11111111111111111111111111110110 & 0010 => 00000000000000000000000000000000
      //^ 11111111111111111111111111110110 & 0100 => 00000000000000000000000000000000
      //^ 11111111111111111111111111110110 & 1000 => 00000000000000000000000000001000
      { // Check if the corresponding bit is set
         count++;
      }
      // cout << ( mask) << endl;
      cout << ( num & mask) << endl;
      mask = mask << 1; // Left shift the bitmask by 1 bit
   }
   return count;
}

int main()
{
   int number = -7; // Example negative number
   int setBits = countSetBits(number);

   std::cout << "Number of set bits in " << number << ": " << setBits << std::endl;

   return 0;
}
