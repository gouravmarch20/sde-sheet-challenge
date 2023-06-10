#include <iostream>
using namespace std;
int main(){
   int arr[10] = {7 , 11 , 33 , 55 , 66};
   cout << "address arr stating " << arr << endl;
   cout << "address arr stating " << arr + 1 << endl;// +1 increase by 4 bit
   cout << "address arr 0 index " << &arr[0] << endl;
   cout << "value at index " << arr[0] << endl;
   cout << "value at index third " << *(arr+2) << endl;
   return 0;
}