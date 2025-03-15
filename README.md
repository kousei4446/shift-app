ShiftApp
シフト管理を簡単に行うための Web アプリケーション。
フロントエンドに React, バックエンドに Laravel を使用。

🚀 使用技術
Frontend: React, Vite, Inertia.js
Backend: Laravel, MySQL
Hosting: AWS
🛠️ 環境構築
1. 必要なツール
Node.js (v18 以上)
PHP (8.2 以上)
Composer (PHPパッケージマネージャ)
MySQL (5.7 以上)
Git（リポジトリ管理用）
2. クローン & インストール
リポジトリをクローンします：

git clone https://github.com/your-repo/shift-app.git
cd shift-app
依存パッケージをインストールします：

# PHPの依存パッケージ
composer install

# フロントエンドの依存パッケージ
npm install
.env ファイルを作成します： .env.example を .env としてコピーします：

cp .env.example .env
.env ファイルを編集して、データベース設定などを変更します：

DB_HOST や DB_DATABASE などの設定を自分の環境に合わせてください。
アプリケーションキーを生成します：
php artisan key:generate
マイグレーションを実行して、データベースをセットアップします：

php artisan migrate
3. 開発サーバーの起動
Laravelのバックエンドサーバーを起動します：

php artisan serve
サーバーが起動したら、http://127.0.0.1:8000 でバックエンドが確認できます。

フロントエンドを起動します：

npm run dev
フロントエンドが http://localhost:5173 で動作します。

4. データベース設定
使用するデータベースに必要なテーブルをマイグレーションで作成できます。
マイグレーションのコマンドは次の通りです：

php artisan migrate