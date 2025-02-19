import java.util.*;

class Solution {
    public int[][] solution(int[][] data, String ext, int val_ext, String sort_by) {
        
        List<int[]> list = new ArrayList<>();
        
        int index = getIndex(ext);
        
        // 받아온ext이 val_ext보다 작으면 리스트에 추가
        for (int i = 0; i < data.length; i++) {
            int[] row = data[i];
            if (row[index] < val_ext) {
                list.add(row);
            }
        }
        
        // 정렬 기준 인덱스 찾기
        int sortIndex = getIndex(sort_by);
        
        // 정렬 기준 인덱스 기준으로 오름차순 정렬
        Collections.sort(list, (o1, o2) -> o1[sortIndex] - o2[sortIndex]);
        
        // 2차원 배열 변환
        int[][] answer = list.toArray(new int[list.size()][]);
        return answer;
    }
    
    
    // 인덱스 반환 메서드
    private static int getIndex(String s){
        switch(s){
            case "code": return 0;
            case "date": return 1;
            case "maximum": return 2;
            case "remain": return 3;
            default: return -1;
        } 
    }
}