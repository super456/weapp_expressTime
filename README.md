微信小程序里面开发的商城模块还挺多的，刚好写了一个物流状态的时间轴，简单分享一下哈。

### （一）实现效果
真机测试的结果（图片忘记缩小了）

![效果图](/images/01.png)


### （二）实现分析
页面布局拆分：

![布局拆分](/images/02.png)

简单的说：就是父级容器下，左边的子级容器是设置绝对定位（记得父级要设置相对定位哈），然后自己调位置，中间子级容器下放三个子容器（设置时间轴线、点的样式），右边的子级容器设置；**wxml代码有备注信息**。

### （三）实现代码
1、wxml代码：

```html
<view class='g_con'>

  <view class='topExpress'>

    <view class='topExpress-left'>
      <image src='/images/Exchange_goods_map_1.png' style='width:60rpx;height:60rpx;border-radius:50%;'></image>
    </view>
    <view class='topExpress-right'>
      <view class='topExpress-right-top'>圆通速递</view>
      <view class='topExpress-right-middle'>运单号：813291235464788594</view>
      <view class='topExpress-right-bottom'>官方电话 95554 ></view>
    </view>

  </view>

  <!-- 物流时间轴 -->
  <view class='expressRecord'>


    <!-- 顶部收货地址 -->
    <view class='expressRecord-getAddress'>
      <view class='expressRecord-top'>
        <view class='getAddress-icon'>
          收
        </view>
        <view class='getAddress-text'>[收货地址] 广东省深圳市南山区 南山街道 亿利达大厦</view>
      </view>
    </view>

    <!-- 顶部收货地址半个时间轴线 -->
    <view class='noReach-online-top-close'></view>


    <!-- 单个物流记录点时间轴：当前正在进行的物流状态 -->
    <view class='expressRecord-single-close'>

      <!-- 左边子容器 -->
      <view class='expressRecord-single-noReach-online-top-close'>
        <!-- 正在进行的时间轴上半个时间线 -->
        <view class='online-top-closing'></view>
        <!-- 正在进行的时间轴点 -->
        <view class='dot-closing'></view>
        <!-- 正在进行的时间轴下半个时间线 -->
        <view class='online-bottom'></view>
      </view>

      <!-- 右边子容器 -->
      <view class='expressRecord-text'>
        <view class='expressRecord-statusing'>运输中</view>
        <view class='expressRecord-status-addressing'>武汉转运中心公司 已发出，下一站 深圳转运中心</view>
      </view>

      <!-- 相对父级容器绝对定位的日期 -->
      <view class='expressRecord-dating'>
        <view class='expressRecord-date-text'>
          昨天
        </view>
        <view class='expressRecord-date-time'>
          20:39
        </view>
      </view>
    </view>


    <!-- 单个物流记录点时间轴：已经过去的物流状态 -->
    <view class='expressRecord-single-close'>
      <view class='expressRecord-single-noReach-online-top-close'>
        <view class='online-top-close'></view>
        <view class='dot-close'></view>
        <view class='online-bottom'></view>
      </view>

      <view class='expressRecord-text'>
        <view class='expressRecord-status'></view>
        <view class='expressRecord-status-address'>武汉转运中心公司 已收入</view>
      </view>

      <view class='expressRecord-date'>
        <view class='expressRecord-date-text'>
          昨天
        </view>
        <view class='expressRecord-date-time'>
          20:37
        </view>
      </view>
    </view>




    <view class='expressRecord-single-close'>
      <view class='expressRecord-single-noReach-online-top-close'>
        <view class='online-top-close'></view>
        <view class='dot-close'></view>
        <view class='online-bottom'></view>
      </view>

      <view class='expressRecord-text'>
        <view class='expressRecord-status'></view>
        <view class='expressRecord-status-address'>湖北省孝感市汉川市公司 已打包</view>
      </view>

      <view class='expressRecord-date'>
        <view class='expressRecord-date-text'>
          昨天
        </view>
        <view class='expressRecord-date-time'>
          14:37
        </view>
      </view>
    </view>




    <view class='expressRecord-single-close'>
      <view class='expressRecord-single-noReach-online-top-close'>
        <view class='online-top-close'></view>
        <view class='dot-close'></view>
        <view class='online-bottom'></view>
      </view>

      <view class='expressRecord-text'>
        <view class='expressRecord-status'>已揽件</view>
        <view class='expressRecord-status-address'>湖北省孝感市汉川市公司 已收件</view>
      </view>

      <view class='expressRecord-date'>
        <view class='expressRecord-date-text'>
          昨天
        </view>
        <view class='expressRecord-date-time'>
          14:17
        </view>
      </view>
    </view>





    <view class='expressRecord-single-close'>
      <view class='expressRecord-single-noReach-online-top-close'>
        <view class='online-top-close'></view>
        <view class='dot-close'></view>
        <!-- 起始位置，下半个时间轴线不用 -->
        <view class='online-bottom-start'></view>
      </view>

      <view class='expressRecord-text'>
        <view class='expressRecord-status'>已发货</view>
        <view class='expressRecord-status-address'>卖家发货</view>
      </view>

      <view class='expressRecord-date'>
        <view class='expressRecord-date-text'>
          昨天
        </view>
        <view class='expressRecord-date-time'>
          13:50
        </view>
      </view>
    </view>








  </view>



</view>
```


2、wxss代码：

```css
page {
  background: #f4f4f4;
}

.g_con {
  width: 100vw;
  overflow-x: hidden;
}

.topExpress {
  width: 710rpx;
  height: 155rpx;
  background: #fff;
  margin: 10rpx auto;
  display: flex;
  border-radius: 10rpx;
}

.topExpress-left {
  width: 100rpx;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.topExpress-right {
  font-size: 26rpx;
  color: #333;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: flex-start;
  padding: 20rpx 0;
}

.topExpress-right-middle {
  font-size: 22rpx;
}

.topExpress-right-bottom {
  font-size: 20rpx;
  color: #666;
}

.expressRecord {
  width: 710rpx;
  padding-top: 30rpx;
  padding-bottom: 200rpx;
  background: #fff;
  margin: 0 auto;
  border-radius: 10rpx;
}

.expressRecord-getAddress {
  width: 100%;
  font-size: 22rpx;
  color: #999;
  display: flex;
}

.expressRecord-top {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.getAddress-icon {
  width: 30rpx;
  height: 30rpx;
  border-radius: 50%;
  background: #999;
  font-size: 18rpx;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 80rpx;
}

.getAddress-text {
  margin-left: 20rpx;
}

.noReach-online-top-close {
  width: 1rpx;
  height: 50rpx;
  background: #d7d7d7;
  margin-left: 95rpx;
}

.expressRecord-single-close {
  width: 100%;
  height: 122rpx;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}

.expressRecord-single-noReach-online-top-close {
  display: flex;
  flex-direction: column;
}

.online-top-closing {
  width: 1rpx;
  height: 50rpx;
  background: #d7d7d7;
  margin-left: 95rpx;
}

.online-top-close {
  width: 1rpx;
  height: 50rpx;
  background: #999;
  margin-left: 95rpx;
}

.dot-closing {
  width: 10rpx;
  height: 10rpx;
  border-radius: 50%;
  margin-left: 90rpx;
  margin-top: 6rpx;
  margin-bottom: 6rpx;
  background: #fe4f33;
}

.dot-close {
  width: 10rpx;
  height: 10rpx;
  border-radius: 50%;
  margin-left: 90rpx;
  margin-top: 6rpx;
  margin-bottom: 6rpx;
  background: #999;
}

.online-bottom {
  width: 1rpx;
  height: 50rpx;
  background: #999;
  margin-left: 95rpx;
}

.online-bottom-start {
  width: 1rpx;
  height: 50rpx;
  /* background: #999; */
  margin-left: 95rpx;
}

.expressRecord-text {
  margin-left: 30rpx;
}

.expressRecord-statusing {
  font-size: 26rpx;
  color: #333;
}

.expressRecord-status-addressing {
  font-size: 22rpx;
  color: #333;
}


.expressRecord-status {
  font-size: 26rpx;
  color: #999;
}

.expressRecord-status-address {
  font-size: 22rpx;
  color: #999;
}

.expressRecord-dating {
  position: absolute;
  height: 100%;
  /* top: 0;
  bottom: 0; */
  left: 20rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #333;
}

.expressRecord-date {
  position: absolute;
  height: 100%;
  /* top: 0;
  bottom: 0; */
  left: 20rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #999;
}

.expressRecord-date-text {
  font-size: 24rpx;
}

.expressRecord-date-time {
  font-size: 18rpx;
}

```

**如果感觉有用的话，点个赞呗，支持一下我哈。**

