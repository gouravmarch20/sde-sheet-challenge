#include <iostream>
#include <vector>
using namespace std;

int findUnique(vector<int> arr)
{
   int ans = 0;

   for (int i = 0; i < arr.size(); i++)
   {
      ans = ans ^ arr[i];
   }

   return ans;
}
void printArray(vector<int> arr)
{
   for (auto i : arr)
   {
      cout << i << " ";
   }
   cout << endl;
}
int main()
{

   // //create vector
   // vector<int> arr;

   // // int ans = (sizeof(arr)/sizeof(int)) ;
   // // cout << ans << endl;

   // cout << arr.size() << endl;
   // cout << arr.capacity() << endl;

   // //insert
   // arr.push_back(5);
   // arr.push_back(6);

   // //print
   // for(int i=0; i<arr.size(); i++) {
   // 	cout << arr[i] << " ";
   // }
   // cout << endl;

   // //remove / delete
   // arr.pop_back();

   // //print
   // for(int i=0; i<arr.size(); i++) {
   // 	cout << arr[i] << " ";
   // }
   // cout << endl;

   // int n ;
   // cout<<"Enter the value of n " << endl;

   // cin >> n;

   // vector<int> brr(n, -101);
   // cout << "Size of b " << brr.size() << endl;
   // cout << "Capacity of b " << brr.capacity() << endl;

   // for(int i=0; i<brr.size(); i++) {
   // 	cout << brr[i] << " ";
   // }
   // cout << endl;

   // cout << "Printing crr" << endl;
   // vector<int> crr{10,20,30,50};

   // for(int i=0; i<crr.size(); i++) {
   // 	cout << crr[i] << " ";
   // }
   // cout << endl;

   // cout << "Vector crr is Empty or not " <<crr.empty() << endl;

   // vector<int> drr;
   // cout << "Vector drr is empty or not " << drr.empty() << endl;

   // UNique Element

   // int n;
   // cout << "Enter the size of array " << endl;
   // cin >> n;

   // vector<int> arr(n);
   // cout << "Enter the elements " << endl;
   // //taking input
   // for(int i=0; i<arr.size(); i++) {
   // 	cin >> arr[i];
   // }

   // int uniqueElement = findUnique(arr);

   // cout << "Unique Element is  " << uniqueElement << endl;

   // UNION
   //  int arr[] = {1,3,5,7,9};
  
   // INTERSECTION

   // vector<int> arr{1,2,3,3,4,6,8};
   // vector<int> brr{3,3,4,10};

   // vector<int> ans ;

   // //outer loop on arr vector
   // for(int i=0; i<arr.size(); i++) {

   // 	int element = arr[i];
   // 	// for every element, run loop on brr
   // 	for(int j=0; j<brr.size(); j++) {
   // 		if(element == brr[j]) {
   // 			//mark
   // 			brr[j] = -1;
   // 			ans.push_back(element);
   // 		}
   // 	}
   // }

   // //print ans
   // for(auto value: ans) {
   // 	cout << value << " ";
   // }

   // cout << endl;

   // Pair Sum
   //  vector<int> arr{10,20,40,60,70};
   //  int sum = 80;

   // //print all pairs
   // //outer loop will traverse for each element
   // for(int i=0; i<arr.size(); i++) {
   // 	int element = arr[i] ;

   // 	//for every element, will traverse on aage wale elements
   // 	for(int j=i+1; j<arr.size(); j++) {
   // 		if(element + arr[j] == sum ){
   // 			cout << "Pair FOund " << element <<"," << arr[j] << endl;
   // 		}
   // 	}

   // }

   // TRIPLET

   // vector<int> arr{10,20,30,40};
   // int sum = 80;

   // for(int i=0; i<arr.size(); i++) {
   // 	int element1 = arr[i];

   // 	for(int j=i+1; j<arr.size(); j++) {
   // 		int element2 = arr[j];

   // 		for(int k=j+1; k<arr.size(); k++) {
   // 			int element3 = arr[k];

   // 			if(element1 + element2 + element3 == sum) {
   // 				cout << element1 <<","<< element2 <<","<< element3 << endl;
   // 			}
   // 		}
   // 	}
   // }

 

   vector<int> arr{0, 1, 0, 1, 1, 0, 1, 0, 1, 1};
 
  

   return 0;
}