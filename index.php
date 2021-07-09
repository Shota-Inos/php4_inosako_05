<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>データ登録</title>
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <style>div{padding: 10px;font-size:16px;}</style>
</head>
<body>

<!-- Head[Start] -->
<header>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
    <div class="navbar-header"><a class="navbar-brand" href="select.php">データ一覧</a></div>
    </div>
  </nav>
</header>
<!-- Head[End] -->

<!-- Main[Start] -->
<!-- ここからinsert.phpにデータを送ります -->
<form method="post" action="insert.php">
  <div class="jumbotron">
   <fieldset>
    <legend>日記</legend>
     <label>タイトル：<input type="text" name="name"></label><br>
     <label>Email：<input type="text" name="email"></label><br>
     <label>Emotion：<input type="checkbox" name="emotion" value=1>喜</label>
     <label>：<input type="checkbox" name="emotion" value=-1>怒</label>
     <label>：<input type="checkbox" name="emotion" value=-1>哀</label>
     <label>：<input type="checkbox" name="emotion" value=1>楽</label><br>
     <label><textArea name="naiyou" rows="4" cols="40"></textArea></label><br>
     <input type="submit" value="送信">
     <input type='hidden' name="id" value="<?=$row["id"]?>">
    </fieldset>
  </div>
</form>
<!-- Main[End] -->


</body>
</html