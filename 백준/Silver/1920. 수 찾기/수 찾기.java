// https://www.acmicpc.net/problem/1920


import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // 첫 번째 줄: 수의 개수
        int n = scanner.nextInt();
        int[] arr = new int[n];

        // 배열 입력 받기
        for (int i = 0; i < n; i++) {
            arr[i] = scanner.nextInt();
        }

        // 배열을 정렬
        Arrays.sort(arr);

        // 두 번째 줄: 찾고자 하는 수의 개수
        int m = scanner.nextInt();
        
        // 결과를 저장할 StringBuilder
        StringBuilder result = new StringBuilder();

        // 각각의 수에 대해 이진 검색 수행
        for (int i = 0; i < m; i++) {
            int target = scanner.nextInt(); // 찾고자 하는 수

            // 이진 검색을 통해 인덱스 찾기
            int index = Arrays.binarySearch(arr, target);

            // 결과를 확인하고 StringBuilder에 추가
            if (index >= 0) {
                result.append("1\n"); // 수가 존재하면 1 추가
            } else {
                result.append("0\n"); // 수가 존재하지 않으면 0 추가
            }
        }

        // 결과 출력
        System.out.print(result.toString());

        scanner.close(); // 스캐너 닫기
    }
}
