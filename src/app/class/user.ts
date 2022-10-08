export class User {
  // アイコンの名前の一文字目
  initial: string

  // ユーザーはインスタンス化する際にパラメータを2つ受け取る
  constructor(public uid: number, public name: string) {
    // 名前の最初の一文字目をsliceメソッドで受けとり、initialプロパティに保存
    this.initial = name.slice(0, 1)
  }
}
