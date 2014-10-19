#include <iostream>
using namespace std;

void displaySum(int a, int b, int c){
    int result = a+b+c;
    cout << result;
}
int main(){
    int x = 1;
    int y = 1;
    displaySum(x, y);
    return 0;
}
