# TAmeBlogNeo

TAmeBlogNeoはシンプルさとパフォーマンスを重視した現代的なブログプラットフォームです。

## 目次

- [機能](#features)
- [必要条件](#requirements)
- [インストール](#installation)
- [ビルド](#build)
- [デプロイメント](#deployment)
- [貢献](#contributing)
- [ライセンス](#license)

## 機能

- レスポンシブデザイン
- Markdownサポート
- SEO最適化
- 高速読み込み
- カスタマイズ可能なテーマ

## 必要条件

- Node.js（v14.0以降）
- npm（v6.0以降）
- Git

## インストール

1. リポジトリをクローンする：
   ```bash
   git clone https://github.com/yourusername/TAmeBlogNeo.git
   cd TAmeBlogNeo
   ```

2. 依存関係をインストールする：
   ```bash
   npm install
   ```

3. 環境変数を設定する：
   ```bash
   cp .env.example .env
   ```
   `.env`ファイルを編集して設定を行ってください。

## Build

To build the project for development:

```bash
npm run dev
```

For production build:

```bash
npm run build
```

The built files will be located in the `dist/` directory.

## Deployment

### Option 1: Traditional Hosting

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the contents of the `dist/` directory to your web server.

### Option 2: Vercel Deployment

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

### Option 3: Netlify Deployment

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Deploy:
   ```bash
   netlify deploy
   ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.