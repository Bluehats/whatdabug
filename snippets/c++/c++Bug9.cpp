#include <iostream>
using namespace std;

int main(){
    int x; 
    cin >> x;

    switch (x){
    case 1:
        int y = 4;
        break;
    case 2:
        y = 9;
        break;
    }
    cout << y;
    return 0;
}
