// comment.js 파일
// Firebase Realtime Database 참조
var database = firebase.database("https://data-462f4-default-rtdb.firebaseio.com/");
var commentsRef = database.ref("comments");

// 댓글 폼 제출 시 처리
document.getElementById("comment-form").addEventListener("submit", function(event) {
  event.preventDefault(); // 폼 제출 기본 동작 막기
  
  // 입력값 가져오기
  var name = document.getElementById("name").value;
  var comment = document.getElementById("comment").value;
  
  if (name && comment) {
    // 댓글 데이터 생성
    var newCommentRef = commentsRef.push();
    var commentData = {
      name: name,
      comment: comment
    };
    // 댓글 데이터 저장
    newCommentRef.set(commentData);
    
    // 입력값 초기화
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
  }
});

// 댓글 데이터 변경 감지
commentsRef.on("child_added", function(snapshot) {
  var commentData = snapshot.val();
  var name = commentData.name;
  var comment = commentData.comment;
  
  // 댓글 생성
  var newComment = document.createElement("div");
  newComment.innerHTML = "<h3>" + name + "</h3><p>" + comment + "</p>";
  
  // 댓글 목록에 추가
  document.getElementById("comment-list").appendChild(newComment);
});
