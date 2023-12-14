import java.util.Scanner;
public class main{
	public static void main(String args[]){
		Scanner sc = new Scanner(System.in);
		int baris, kolom;
		System.out.print("Masukka jumlah Baris yang anda inginkan: ");
		baris = sc.nextInt();
		System.out.print("Masukkan jumlah Kolom yang anda inginkan: ");
		kolom = sc.nextInt();
		for (int i = 0; 1 <= baris; i++){
			for (int j = 0; j <= kolom; j++){
				System.out.print("\n");
			}
			System.out.print("* ");
		}
	}
}