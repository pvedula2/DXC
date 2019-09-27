package training_data;
import java.util.Scanner;

public class Vowels {
	public static void main(String[] args) {
		System.out.println("Enter letter:");
		Scanner sc=new Scanner(System.in);
		char letter=sc.next().charAt(0);
		if(letter=='a'||letter=='e'||letter=='i'||letter=='o'||letter=='u')
		{System.out.println("Your letter is a vowel");
		
		}
		else {
			System.out.println("Not a vowel");
		}
		
	}

}
