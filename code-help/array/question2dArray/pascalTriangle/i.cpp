
// #include <iostream>
// #include <vector>

// using namespace std;
// class Solution
// {
// public:
//    vector<vector<int>> generate(int numRows)
//    {
//       int sum = 1;
//       vector<vector<int>> res;
//       for (int i = 0; i < numRows; i++)
//       {
//          vector<int> temp(i + 1, 1);
//          for (int j = 1; j < i; j++)
//          {
//             temp[j] = res[i - 1][j - 1] + res[i - 1][j];
//          }
//          res.push_back(temp);
//       }
//       return res;
//    }
// };

// int main()
// {
//    Solution solution;
//    int numRows;
//    cout << "Enter the number of rows: ";
//    cin >> numRows;
//    vector<vector<int>> result = solution.generate(numRows);
//    cout << "Pascal's Triangle:\n";
//    for (const vector<int> &row : result)
//    {
//       for (int num : row)
//       {
//          cout << num << " ";
//       }
//       cout << endl;
//    }
//    return 0;
// }

