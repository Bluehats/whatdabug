#include <iostream>

using namespace std;
int main(int argc, char *argv[]) {

   double number = 0;
	char letter;
	char answer;
	
	do{
		cout<<"Enter your favorite number."<<endl;
		cin>>number;
		cout<<"Enter your favorite letter."<<endl;
		cin>>letter;
		cout<<"Want to do it again??? (y/n)"<<endl;
		cin>>answer;
	}wh	ile(answer == 'Y' || answer == "y");
	
	cout<<"THE END!"<<endl;
	return 0;
}