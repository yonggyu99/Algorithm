
import java.util.*;

public class Solution {

    static int[] parent;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int tc = sc.nextInt();

        for (int t = 1; t <= tc; t++) {
            int N = sc.nextInt(); // 섬의 개수
            int[] x = new int[N];
            int[] y = new int[N];

            // 섬 좌표 입력 받기
            for (int i = 0; i < N; i++) x[i] = sc.nextInt();
            for (int i = 0; i < N; i++) y[i] = sc.nextInt();

            double E = sc.nextDouble(); // 환경 부담 세율

            // 모든 간선 생성
            List<Edge> edges = new ArrayList<>();
            for (int i = 0; i < N; i++) {
                for (int j = i + 1; j < N; j++) {
                    double cost = (Math.pow(x[i] - x[j], 2) + Math.pow(y[i] - y[j], 2)) * E;
                    edges.add(new Edge(i, j, cost));
                }
            }

            // edge 정렬
            Collections.sort(edges);

            // union-find 배열 본인 초기화
            parent = new int[N];
            for (int i = 0; i < N; i++) parent[i] = i;

            double mstCost = 0;
            int edgeCount = 0;

            // 크루스칼 알고리즘 수행
            for (Edge e : edges) {
                if (union(e.from, e.to)) {
                    mstCost += e.weight;
                    edgeCount++;
                    if (edgeCount == N - 1) break;
                }
            }

            System.out.printf("#%d %.0f\n", t, mstCost);
        }
        sc.close();
    }
    
    static class Edge implements Comparable<Edge> {
        int from, to;
        double weight;

        public Edge(int from, int to, double weight) {
            this.from = from;
            this.to = to;
            this.weight = weight;
        }

        @Override
        public int compareTo(Edge o) {
            return Double.compare(this.weight, o.weight);
        }
    }

    // 유니온 파인드 - 루트 찾기
    static int find(int x) {
        if (x != parent[x]) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    // 유니온 파인드 - 두 집합 합치기
    static boolean union(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);
        if (rootX == rootY) return false;
        parent[rootY] = rootX;
        return true;
    }
}
