#include <iostream>
using namespace std;
string reverseStr(string str, int i, int j)
{
   if (i > j)
   {
      return str;
   }
   swap(str[i], str[j]);
   i++;
   j--;
   return reverseStr(str, i, j);
}
int main()
{
   string name = "gourav";
   cout << reverseStr(name, 0, name.length() - 1) << endl;
   return 0;
}