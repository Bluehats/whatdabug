#include <iostream>
#include <string>

using namespace std;
int main(int argc, char *argv[]) {
  int l=1; //longitud de palo;
  int n;//numero de cortes
  int ci[1000]; //donde hacer los cortes
  int suma[1000];
  int wow[1000];
  int temp;
  int min[1000];
  int menor =1000000;
  int a[1000][1000];
  while (true) {
    cin >> l >> n;
    if (l == 0) {
      break;
    }
    //cin >> ci[0];
    for (int i = 0; i < n; i++) {
      cin >> ci[i+1];
    }
    //termina input
    //llena max TODO
    for (int i = 0; i <= n+10; i++) {
      for (int j = 0; j <=n+10; j++) {
        a[i][j]=99999;
      }
    }
    ci[0]=0;
    ci[n+1]=l;
    //llena primera digonal
    for (int i = 0; i <= n+1; i++) {
      a[i][i]=0;
      a[i][i+1] = 0;
      a[i][i+2]=ci[i+2]-ci[i];
    }
    for (int k = 3; k <= n+1; k++) {
      for (int i = 0; i <= n+1; i++) {
        for (int j=i+1; j<=i+k-1; j++) {
          if( a[i][i+k] > (a[i][j] + a[j][i+k] + ci[i+k] - ci[i])) {
            a[i][i+k] = a[i][j] + a[j][i+k] + ci[i+k] - ci[i];
          }
        }
      }
    }
    cout << "El corte minimo es " << a[0][n+1] << "." << endl;
  }
}
