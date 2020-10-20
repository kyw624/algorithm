import java.util.Scanner;
import java.util.ArrayList;
import java.util.Collections;

class Main {
  public static int[] dx = {-1, 0, 1, 0};
  public static int[] dy = {0, 1, 0, -1};
  public static int sum = 1;
  
  private static void solution(int sizeOfMatrix, int[][] matrix) {
    int[][] visited = new int[sizeOfMatrix][sizeOfMatrix];
    int count = 0;
    ArrayList<Integer> result = new ArrayList<Integer>();

    for (int i = 0; i < sizeOfMatrix; i++) {
      for (int j = 0; j < sizeOfMatrix; j++) {
        if (matrix[i][j] == 1 && visited[i][j] == 0) {
          dfs(i, j, sizeOfMatrix, visited, matrix);
          count++;
          result.add(sum);
          sum = 1;
        }
      }
    }
    
    System.out.println(count);
    
    if (!result.isEmpty()) {
      Collections.sort(result);
      for (int item: result) {
        System.out.print(item + " ");
      }
    }
  }
    
  public static void dfs(int x, int y, int size, int[][] visited, int[][] matrix) {
    visited[x][y] = 1;
    
    for (int i = 0; i < 4; i++) {
      int nx = x + dx[i];
      int ny = y + dy[i];
      
      if (nx < 0 || ny < 0 || nx >= size || ny >= size) {
        continue;
      }
      if (visited[nx][ny] == 1) {
        continue;
      }
      if (matrix[nx][ny] == 0) {
        visited[nx][ny] = 1;
        continue;
      }
      
      dfs(nx, ny, size, visited, matrix);
      sum++;
    }
  }
  
  private static class InputData {
    int sizeOfMatrix;
    int[][] matrix;
  }

  private static InputData processStdin() {
    InputData inputData = new InputData();

    try (Scanner scanner = new Scanner(System.in)) {
      inputData.sizeOfMatrix = Integer.parseInt(scanner.nextLine().replaceAll("\\s+", ""));      
      
      inputData.matrix = new int[inputData.sizeOfMatrix][inputData.sizeOfMatrix];
      for (int i = 0; i < inputData.sizeOfMatrix; i++) {
        String[] buf = scanner.nextLine().trim().replaceAll("\\s+", " ").split(" ");
        for (int j = 0; j < inputData.sizeOfMatrix; j++) {
          inputData.matrix[i][j] = Integer.parseInt(buf[j]);
        }
      }
    } catch (Exception e) {
      throw e;
    }

    return inputData;
  }

  public static void main(String[] args) throws Exception {
    InputData inputData = processStdin();

    solution(inputData.sizeOfMatrix, inputData.matrix);
  }
}