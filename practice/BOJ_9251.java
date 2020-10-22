import java.util.Scanner;
import java.lang.Math;

public class Main {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        
        String A, B;
        int[][] memo;
        
        A = sc.next();
        B = sc.next();
        memo = new int[A.length() + 1][B.length() + 1];
        
        for (int i = 1; i <= A.length(); i++) {
            for (int j = 1; j <= B.length(); j++) {
                if (A.charAt(i - 1) == B.charAt(j - 1)) {
                    memo[i][j] = memo[i - 1][j - 1] + 1;
                } else {
                    memo[i][j] = Math.max(memo[i - 1][j], memo[i][j - 1]);
                }
            }
        }
        
        System.out.println(memo[A.length()][B.length()]);
    }
}