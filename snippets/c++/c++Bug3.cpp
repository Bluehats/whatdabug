#include <iostream>

int minval(int *A, int n) {
  int currmin;

  for (int i=0; i<n; i++)
      if (A[i] < currmin)
          currmin = A[i];
  return currmin;
}