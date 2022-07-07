// ファイル関連の操作を提供する（ストリーム）オブジェクトを取得
var fh = new ActiveXObject( "ADODB.Stream" );
 
// 読み込むファイルのタイプを指定
fh.Type    = 2;         // -1:Binary, 2:Text
 
// 読み込むファイルの文字コードを指定
fh.charset = "UTF-8";   // Shift_JIS, EUC-JP, UTF-8、等々
 
// 読み込むファイルの改行コードを指定
fh.LineSeparator = 10;  // ' -1 CrLf , 10 Lf , 13 Cr
 
// ストリームを開く
fh.Open();
 
// ファイルに格納したいテキストをストリームに登録
fh.WriteText( "Text to write to file", 1);  // 第2引数が 0:改行なし, 1:改行あり
 
// ファイルを指定して書き込み
fh.SaveToFile( "example.txt", 2);           // 第2引数が 1:新規作成, 2:上書き
 
// ストリームをクローズ
fh.Close();
 
// オブジェクトを破棄
fh = null;
