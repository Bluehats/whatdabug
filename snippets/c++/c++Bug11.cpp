#include <iostream>
#include <math.h>
using namespace std;

int main()
{
   int y = 0;
   do
   {
       int x = 0;
       y++;
       x += y;
   }while (x<10);

    cout <<x;
    return 0;
}
