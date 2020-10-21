import http from "../utils/http";
//
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
let resquest = "http://jujuul.com:4000";

// get请求
export default {
  // 个性推荐页
  // banner图
  getBanners(params) {
    return http.get(`${resquest}/Banner`, params);
  },
  // 推荐歌单
  getRecommend(params) {
    return http.get(`${resquest}/personalized?limit=10`, params);
  },
  // 独家放送
  getPersonalized(params) {
    return http.get(`${resquest}/personalized/privatecontent`, params);
  },
  // 最新音乐
  getNewestSong(params) {
    return http.get(`${resquest}/personalized/newsong`, params);
  },
  // 最新mv
  getNewestMv(params) {
    return http.get(`${resquest}/personalized/mv`, params);
  },
  getSongUrl(params) {
    return http.get(`${resquest}/song/url`, params);
  },
  // 歌单列表
  getSongList(params) {
    return http.get(`${resquest}/top/playlist?limit=10&order=new`, params);
  },
  getNewSong(params) {
    return http.get(`${resquest}/top/song`, params);
  },
  // 推荐歌单
  getRecommendList(params) {
    return http.get(`${resquest}/top/playlist/highquality&limit=1`, params);
  },
  getRecommendTopList(params) {
    return http.get(`${resquest}/top/playlist/highquality`, params);
  },
  getAllMv(params) {
    return http.get(`${resquest}/mv/all/?limit=48`, params);
  },
  getRecommendTypeList(params) {
    return http.get(`${resquest}/playlist/catlist`, params);
  },
  // 歌单页
  // 歌单分类
  getRecommendType(params) {
    return http.get(`${resquest}/playlist/hot`, params);
  },
  // 排行榜页
  // 排行榜列表
  getToplist(params) {
    return http.get(`${resquest}/toplist`, params);
  },
  // 榜单摘要
  getTopListDetail(params) {
    return http.get(`${resquest}/toplist/detail`, params);
  },

  // 歌手页
  // 全部歌手信息
  getSingerList(params){
    return http.get(`${resquest}/artist/list`, params);
  },
  // 发现音乐页面下路由
  getRecommendMv(params) {
    // 获取推荐MV信息
    return http.get(`${resquest}/personalized/mv`, params);
  },

  // 推荐歌单页面下的路由
  // 获取歌单详细信息
  getPlayListDetails(params) {
    return http.get(`${resquest}/playlist/detail?id=${params}`);
  },
  getMusicTag(params) {
    // 获取歌曲标签
    return http.get(`${resquest}/top/playlist`, params);
  },
  getMusicDetails(params) {
    // 获取歌曲详细信息
    return http.get(`${resquest}/song/detail`, params);
  },
  getMusicComments(params) {
    // 获取歌单评论
    return http.get(`${resquest}/comment/playlist`, params);
  },
  getSongUrl(params) {
    // 获取歌曲url
    return http.get(`${resquest}/song/url`, params);
  },
  getSimPlayList(params) {
    // 获取相似歌单
    return http.get(`${resquest}/related/playlist`, params);
  },
  getLikePlayList(params) {
    // 获取喜欢这个歌单的人
    return http.get(`${resquest}/playlist/subscribers`, params);
  },

  // 歌单详情页下路由
  getUserDetails(params) {
    // 获取用户详细信息
    return http.get(`${resquest}/user/detail`, params);
  },

  // mv详情页路由
  getMvDetails(params) {
    // 获取mv详细信息
    return http.get(`${resquest}/mv/detail`, params);
  },
  getMvUrl(params) {
    // 获取mvUrl路径
    return http.get(`${resquest}/mv/url`, params);
  },
  getSimMv(params) {
    // 获取mv相关视频
    return http.get(`${resquest}/simi/mv`, params);
  },
  getMvInfo(params) {
    // 获取mv点赞转发评论数数据
    return http.get(`${resquest}/mv/detail/info`, params);
  },
  getMvComment(params) {
    // 获取mv评论数据
    return http.get(`${resquest}/comment/mv`, params);
  },
  getMvCommentPage(params) {
    // 获取mv评论数据
    return http.get(`${resquest}/comment/mv`, params);
  },

  getHotSelect(params) {
    // 获取热搜榜
    return http.get(`${resquest}/search/hot`, params);
  },

  // 查询页面下的路由
  getSearchDetail(params) {
    // 查询
    return http.get(`${resquest}/search`, params);
  },
  getAlbums(params) {
    // 查询歌曲封面
    return http.get(`${resquest}/album`, params);
  },

  // 登录路由
  login(params) {
    return http.get(`${resquest}/login/cellphone`, params);
  },
  postFormAPI(params) {
    return http.post(`${resquest}/`, params);
  },
};
