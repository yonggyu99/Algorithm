import java.util.Scanner;

public class Solution {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		int TestCase = sc.nextInt();			//테스트 케이스 갯수 입력받기
		
		for(int i = 1; i <= TestCase; i++ ) {
			
			int size = sc.nextInt();				//배열의 크기
			int[][] map = new int[size][size];		//이차원 배열 생성
			
			int[] dr = {0, 1, 0, -1};
			int[] dc = {1, 0, -1, 0};
			
			
		    int row = 0, col = 0, dir = 0;		//시작위치 & 시작 방향
		    
		    for(int k = 1; k <= size * size; k++) {
		    	map[row][col] = k;				//현재 위치에 숫자 넣기
		    	
		    	//다음 위치 계산
		    	int nextR = row + dr[dir];
		    	int nextC = col + dc[dir];
		    	
		    	//경계를 벗어나는경우, 숫자가 이미 채워져 있는 경우
		    	if(nextR < 0 || nextR >=size || nextC <0 || nextC >=size || map[nextR][nextC] != 0) {
		    		dir = (dir+1) % 4;		//방향 변경(시계 방향)
		    		nextR = row + dr[dir];
			    	nextC = col + dc[dir];
		    	}
		    	
		    	//위치 업데이트
		    	row = nextR;
		    	col = nextC;
		    }
		    
		    //테스트 케이스 출력
		    
		    
		    System.out.println("#" + i);
		    
		    //배열 결과 출력
		    for(int w = 0; w < size; w++) {
		    	for(int j = 0; j < size; j++) {
		    		System.out.print(map[w][j] + " ");
		   			}
		   		System.out.println();
		   		}
		    }
		
		
		sc.close();

	}

}
