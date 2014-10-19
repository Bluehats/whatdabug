#include <iostream>
using namespace std;

int main()
{
    int x;
    cin >> x;

    switch (x)
    {
    case 1:
        x += 1;

    case 2:
        x -= 2;
    }
    cout << x;
    return 0;
}
