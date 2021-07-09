// Your web app's Firebase configuration

//ここは、githubには載せない
var firebaseConfig = {
    apiKey: "AIzaSyDxOIcKEoAXVmsJZPcjvIdvYAxLoRqioJ8",
    authDomain: "dev20chat-4a05d.firebaseapp.com",
    databaseURL: "https://dev20chat-4a05d-default-rtdb.firebaseio.com",
    projectId: "dev20chat-4a05d",
    storageBucket: "dev20chat-4a05d.appspot.com",
    messagingSenderId: "804163968106",
    appId: "1:804163968106:web:4df93c42b8839b91063e13"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const newPostRef = firebase.database().ref();

  // ここから下にjqueryの処理

// 送信ボタンをクリックされたら次の処理をする
$("#send").on("click", function () {
    //入力されていない時に、アラートを表示する
    let userNameValue = $("#username").val();
  
    if (userNameValue === ""){
      alert("入力してくだい")
      return;
    }
  
    //送信ボタンのクリックで、送信処理
    newPostRef.push({
      //どんな形式で送るかを指定
      username: $("#username").val(), //名前
      text: $("#text").val(),//テキストエリア
      good: $("#good_count").val()
    })
    $("#text").val("");
    $("#username").val("");
    $("#good_count").val("");
  
  });
  
  // 受信処理
  //child_added firebaseが用意しているもの
  //イベントを受信して、表示する、、など
  newPostRef.on("child_added", function (data) {
    let v = data.val();
    let k = data.key;
  
    let str = `
    <tr>
    <th>${v.username}</th>
    </tr>

    <tr>
    <td>${v.text}</td>
    </tr>
    `;
  
    //strを、prependで埋め込み
    $("#output").prepend(str);
    
  
  
    //userNameCountを0から開始
    $(function(){
      var userNameCount = 0;
  
      function cnt(){
        userNameCount += 1;//数値を＋１
        console.log(userNameCount)
        $("#disp_count").text(userNameCount); //数値をテキストとして入力
      }
      //クリックした時に、↑の関数が起動
      $("#good").on("click", function () {
        cnt();
    });
    })
  })
  
  //エンターキーのクリックで、送信処理
  //e =eventの省略形
  $("#text").on("keydown", function (e) {
    console.log(e, 'eventデータの塊');
  
    if(e.keyCode === 13){
      newPostRef.push({
      //どんな形式で送るかを指定
      username: $("#username").val(), //名前
      text: $("#text").val()//テキストエリア
    })
    $("#text").val("");
    $("#username").val("");
  }
  });
  

  $("#test").on("click", function () {
    newPostRef.on("child_added", function (data) {
      let v = data.val();
      let k = data.key;
    
      let str = `
      <tr>
      <th>${v.username}</th>
      <td>${v.text}</td> <br><br> 
      <td id="disp_count">0</td>
      </tr>
      `; 
      //strを、prependで埋め込み
      $("#change").prepend(str); 
  });
  })