#include <iostream>
using namespace std;

double average(int arr[], int n) {
  int sum = 0;
  for (int i = 0; i < n; i++)
  {
    sum += arr[i];
  }
  return sum/n;
}