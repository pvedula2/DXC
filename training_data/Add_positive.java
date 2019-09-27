package training_data;
import java.util.Scanner;

public class Add_positive {
	public static void main(String[] args) {
		int a,b,sum;
		System.out.println("Enter two numbers that you wish to add");
		Scanner in = new Scanner(System.in);
		 
		a=in.nextInt();
		b=in.nextInt();
		if(a>0&&b>0)
		{
		sum=a+b;
		System.out.println("Your sum is:"+sum);
		}
		else
		{System.out.println("Cannot add negative numbers");

}
}
}
