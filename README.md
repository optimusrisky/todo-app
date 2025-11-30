# Todo App

Next.js と Tailwind CSS で作られたシンプルな Todo アプリケーションです。

## 機能

- ✅ タスクの追加
- ✅ タスクの完了/未完了の切り替え
- ✅ タスクの削除
- 🔍 フィルタリング機能（完了/未完了でフィルタ）
- 📅 ソート機能（作成日で昇順/降順）
- 💾 ローカルストレージにデータを自動保存

## 技術スタック

- **フレームワーク**: Next.js 16.0.3 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS 4
- **UI ライブラリ**: React Icons
- **ユーティリティ**: clsx

## セットアップ

### 必要な環境

- Node.js 18 以上
- pnpm（推奨）または npm/yarn/bun

### インストール

```bash
# 依存関係のインストール
pnpm install
```

### 開発サーバーの起動

```bash
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

### ビルド

```bash
pnpm build
```

### 本番環境での起動

```bash
pnpm start
```

## プロジェクト構成

```
todo-app/
├── app/
│   ├── page.tsx          # メインページ
│   ├── layout.tsx        # ルートレイアウト
│   ├── TaskAddForm.tsx   # タスク追加フォームコンポーネント
│   ├── Tasks.tsx         # タスク一覧表示コンポーネント
│   └── Filters.tsx       # フィルタリング/ソーティングコンポーネント
├── types/
│   └── types.ts          # TypeScript型定義
├── styles/
│   └── globals.css       # グローバルスタイル
└── public/               # 静的ファイル
```

## 主な機能の説明

### タスク管理

- タスクはブラウザの localStorage に自動保存されます
- ページをリロードしてもタスクは保持されます
- タスクには作成日が自動的に記録されます

### フィルタリング

URL パラメータを使用してフィルタリングを行います：

- `?isCompleted=true` - 完了済みタスクのみ表示
- `?isCompleted=false` - 未完了タスクのみ表示

### ソート

URL パラメータを使用してソートを行います：

- `?createdAt=asc` - 作成日昇順
- `?createdAt=desc` - 作成日降順

フィルタとソートは組み合わせて使用できます。

## ライセンス

このプロジェクトはプライベートプロジェクトです。
