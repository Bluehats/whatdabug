#include <iostream>
#include <string>

using namespace std;

int x = 2;

int main()
{
    string full_message = message(2);
    cout << full_message;
}

string message(int x){
  string msg1 = "Hello, world";
  string msg2 = "Bye, world";

  if(x==1)
    msg1 += "!";
    return msg1;
  if(x==2)
    msg2 += "!";
    return msg2;
}
