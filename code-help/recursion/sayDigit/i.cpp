#include <iostream>
using namespace std;
void sayDigit(int no, string arr[])
{
   if (no == 0)
   {
      return;
   }
   // processing
   int d = no % 10;
   no = no / 10;
   // recursive call
   sayDigit(no, arr);
   cout << arr[d] << endl;
}

//    // base case
//    if (no == 0){
//       return
//    }
//           // processing
// int d = no % 10;
//    no = no / 10;
//    // recursive call
//    sayDigit(no, arr);
//    cout << arr[d] << endl;

int main()
{
   string arr[10] = {"zero", "one", "two", "three",
                     "four", "five", "six", "seven", "eight", "nine"};
   int no;
   cin >> no;
   cout << endl
        << endl
        << endl;
   sayDigit(no, arr);

   return 0;
}