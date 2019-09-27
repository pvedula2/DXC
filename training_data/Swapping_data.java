package training_data;
import java.util.Scanner;


public class Swapping_data {
	
	public static void main(String[] args) {
		int a,b;
		System.out.println("Enter two numbers that you wish to add");
		Scanner in = new Scanner(System.in);
		 
		a=in.nextInt();
		b=in.nextInt();
		a=a+b;
		b=a-b;
		a=a-b;
		System.out.println("The value of 1st number is :"+a+("The value of 1st number is :")+b);
		
		
		
		
	}

}
