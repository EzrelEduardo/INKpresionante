using Systems;
using System.ling;
using systems.text;
using System.Collections.generics;
using System.Threading.Tasks;

namespace naval{
    public class program{
        public static void Main(string[] args){
            random rnd = new random();
            int horizontal, columna;
            int [,] mar = new int[10,10];

            for(int i = 0; i < 10; i++){
                for(int j = 0; j < 10; j++){
                    mar[i,j] = 0;
                console.write("\n\n ingresa la ubicacion del barco 1-10");
                horizontal = int.Parse(console.Readline());

                if (horizontal >= 1 && horizontal <= 10){
                    columna = rnd.Next(0,6);
                    for(int i = 0; i < 4; i++){
                        mar[horizontal - 1 ,columna + 1] = 1;
                        
                    for(int i = 0; i < 10; i++){
                        for(int j = 0; i < 10; j++);
                        console.write("\n");
                    }
                }
            }
            console.write("has ganado");
                }
            }
        }
    }
}
  
                
                