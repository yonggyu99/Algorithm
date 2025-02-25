import java.util.*;


public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt(); // 학생 수
        int M = sc.nextInt(); // 비교 횟수

        List<List<Integer>> graph = new ArrayList<>(N + 1);
        for (int i = 0; i <= N; i++) {
            graph.add(new ArrayList<>());
        }

        int[] inDegree = new int[N + 1]; // 진입 차수 배열

        // 간선 입력 받기
        for (int i = 0; i < M; i++) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            graph.get(a).add(b);
            inDegree[b]++;
        }

        // **우선순위 큐 사용 (숫자가 작은 정점이 우선)**
        PriorityQueue<Integer> pq = new PriorityQueue<>();

        // **초기 진입 차수가 0인 노드를 우선순위 큐에 삽입**
        for (int i = 1; i <= N; i++) {
            if (inDegree[i] == 0) {
                pq.offer(i);
            }
        }

        List<Integer> result = new ArrayList<>();

        // **위상 정렬 진행**
        while (!pq.isEmpty()) {
            int current = pq.poll();
            result.add(current);

            // 현재 노드와 연결된 노드들 처리
            for (int neighbor : graph.get(current)) {
                inDegree[neighbor]--;
                
                // **진입 차수가 0이 된 노드를 즉시 우선순위 큐에 삽입**
                if (inDegree[neighbor] == 0) {
                    pq.offer(neighbor);
                }
            }
        }

        // 결과 출력
        for (int problem : result) {
            System.out.print(problem + " ");
        }
        sc.close();
    }
}
