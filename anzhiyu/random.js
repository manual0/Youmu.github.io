var posts=["2025/12/05/Linux系统配置安装MySQL/","2025/12/05/二叉树算法纲领/","2025/12/05/动态规划/","2025/12/05/回溯算法/","2025/12/05/图论/","2025/12/05/波兰式/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };