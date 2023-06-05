#include <iostream>
using namespace std;
int main()
{
   int num = 5;
   float num1 = 4.4;
   double num2 = 10.555;
   char str = 4;
   bool isValid = true; 


   cout << " bool :  " << sizeof(isValid) << endl;
   cout << " int  byte :  " << sizeof(num) << endl;
   cout << " float datatype :  " << sizeof(num1) << endl;
   cout << " double datatype byte :  " << sizeof(num2) << endl;
   cout << "size of char datatype : " << sizeof(str) << endl;

   return 0;
}