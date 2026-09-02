# Task11

`my-task-front-rep` の Task11 を単体で動かせるように切り出した、独立した React プロジェクトです。

## 使い方

このフォルダを開いて、ターミナルで次の順に実行してください。

```bash
npm install
```

```bash
npm start
```

ブラウザで [http://localhost:3000](http://localhost:3000) が開き、Task11 のページが表示されます。

## フォルダ構成

```
task11/
├── public/                     … HTML やアイコンなどの静的ファイル
└── src/
    ├── App.tsx                 … Task11 を表示するだけのルート
    ├── index.tsx               … アプリの入口
    ├── task11/
    │   └── Task11.tsx          … ページ本体
    └── images/
        └── task11Images/       … Task11 で使う画像一式
```

## メモ

- 元の `my-task-front-rep` にあった Task11 はそのまま残しています。こちらはコピーして独立させたものです。
- 画面表示に使うライブラリ（MUI）だけに絞っているため、元リポジトリより軽量です。
- ページ内の Google マップ部分は元コードのままダミー URL になっています。実際に表示したい場合は `src/task11/Task11.tsx` の iframe の `src` を差し替えてください。
