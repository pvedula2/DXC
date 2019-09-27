package training_data;
import java.util.Scanner;

public class Leap_year {
	public static void main(String[] args) {
		System.out.println("Enter year that you wish to check");
		Scanner sc=new Scanner(System.in);
		int year=sc.nextInt();
		if((year % 4 )==0) {
		System.out.println(year+"is a Leap year:");
		}
		else {System.out.println(year+"not a leap year:");
		
		}
	}
}
		
		
		
	


