export interface TreeNode<T> {
  id: string;
  data: T;
  parentId: string;
  children: TreeNode<T>[];
}
