// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      function onYouTubeIframeAPIReady() {
        new YT.Player('player', { // player 아이디 값 찾음
          videoId: 'An6LvWQuj_8', // 최초재생할 youtube 동영상 url 마지막 아이디 부분
          playerVars: { // 영상을 재생하기위한 여러가지 변수들
            autoplay: true, // 실제로 유튜브사이트 들어가서 영상하나 재생시켜야 적용됨
            loop: true,
            playlist: 'An6LvWQuj_8'
          },
          events: {
            onReady: function(event) { // 영상이 준비되면 실행되는 함수
              event.target.mute(); // 음소거
            },
          },
        });
      }
