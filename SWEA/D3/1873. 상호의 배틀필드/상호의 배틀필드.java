import java.util.Scanner;

public class Solution {
	static int H, W;
	static char[][] map;
	static int tankRow, tankCol;
	static int tankDir;
	static char[] tankIcon = {'^', 'v', '<', '>'};
	
	static int[] dr = {-1, 1, 0, 0};	//상하좌우
	static int[] dc = {0, 0, -1, 1};
	
	

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int TestCase = sc.nextInt();
		
		for(int TC = 1; TC <= TestCase; TC++) {
			H = sc.nextInt();
			W = sc.nextInt();
			map = new char[H][W];
		
			//맵입력(전차 자리 찾기 + 평지 만들기 포함)
			for(int i = 0; i < H; i++) {
				String row = sc.next();
				for(int j = 0; j < W; j++) {
					map[i][j] = row.charAt(j);
					if(map[i][j] == '^' || map[i][j] == 'v' || map[i][j] == '<' || map[i][j] == '>') {
						tankRow = i;
						tankCol = j;
						tankDir = "^v<>".indexOf(map[i][j]);
						map[i][j] = '.';
					}
				}
			}
		
			//명령어 입력갯수, 명령어 입력
			int command_N = sc.nextInt();
			String command = sc.next();
		
			//명령어 수행
			for(char c : command.toCharArray()) {
				process_C(c);
			}
			
			//현재 탱크 위치
			map[tankRow][tankCol] = tankIcon[tankDir];
			
			//출력
			System.out.print("#" + TC + " ");
			for(char[] row : map) {
				System.out.println(row);
			}
		}
		
		sc.close();

	}

	//명령수행
	private static void process_C(char command) {
		//Shoot
		if(command =='S') {
			shoot();
		}
		//탱크 이동
		else {
			int newDir = "UDLR".indexOf(command);
			int newRow = tankRow + dr[newDir];
			int newCol = tankCol + dc[newDir];
			
			tankDir= newDir;
			
			if((newRow>=0 && newRow<map.length &&newCol >=0 && newCol<map[0].length)&&map[newRow][newCol] == '.') {
				tankRow = newRow;
				tankCol = newCol;
			}
			
		}
	}

	private static void shoot() {
		int row = tankRow;
		int col = tankCol;
		
		while(true) {
			row = row + dr[tankDir];
			col = col + dc[tankDir];
			
			//맵 밖을 벗어나면
			if(row<0 || row >= H || col < 0 || col>=W) {
				break;
			}
			
			//강철벽을 만나면
			if(map[row][col] == '#') {
				break;
			}
			
			//벽돌벽 파괴
			if(map[row][col] == '*') {
				map[row][col] = '.';
				break;
			}
		}
	}
}
