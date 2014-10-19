#include <iostream>

using namespace std;
int main()
{
int numrows = 100;
int numcols = 100;
int pixels = 0;

    for (int j = 0; j<numrows; j++);
    {
        for (int i= 0; i<numcols; i++)
        {
        pixels++;
        }
    }
cout << pixels;
   return 0;
}
