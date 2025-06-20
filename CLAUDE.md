# 映画なにみる？ - 映画情報検索アプリ

## プロジェクト概要
TMDb APIを使用した映画情報検索アプリケーション。React + TypeScript + Viteで構築。

## 開発サーバーの起動
```bash
npm run dev
```

## ビルド
```bash
npm run build
```

## 型チェックとリント
```bash
npm run typecheck
npm run lint
```

## 主要機能
- 人気映画の表示
- 映画タイトルによる検索
- ジャンル別検索
- 映画詳細情報の表示（キャスト、あらすじ、評価など）
- ページネーション
- レスポンシブデザイン

## 環境変数
`.env`ファイルに以下を設定：
- `VITE_TMDB_API_KEY`: TMDb APIキー
- `VITE_TMDB_BASE_URL`: https://api.themoviedb.org/3
- `VITE_TMDB_IMAGE_BASE_URL`: https://image.tmdb.org/t/p

## 技術スタック
- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router v7
- Axios
- ESLint + Prettier