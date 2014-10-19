#include <iostream>
using namespace std;

int main(){
    float i = 7;
    float j = 3;
    float x = i/j;

    if(x % 2  == 0){
        cout << "pair";
    }
    else{
        cout << "odd";
    }
    return 0;
}
