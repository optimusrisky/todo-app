export interface Task {
  /** タスクID */
  id: number;
  /** タスクタイトル */
  title: string;
  // category: string
  // dueDate: string
  /** 完了/未完了 */
  isCompleted: boolean;
  /** 作成日 */
  createdAt: string;
}
