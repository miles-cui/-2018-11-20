/*打开手电筒3秒后关闭手电筒，然后返回主页
 1、手机必须解锁。
 2、手机任务栏中五个图标一行。
 3、第三个图标是手电筒。
    图标排列
    1、飞行模板
    2、WiFi
    3、移动数据
 */

//屏幕网络按钮位置
let NetButtonX = 538;
let NetButtonY = 456;
//连接所有设备
let devices = Device.connectAll();
//获得主设备
let device = Device.getMain();


//第个图标操作
//下滑
device.swipe([
    [555, 18, 30],
    [555, 400, 100],
    [555, 900, 100]
]);
delay(1000);
//点击第一个图标(打开)
device.click(155, 455, sigmaConst.STATE_PRESS);
delay(1000);
//按下返回键并弹起
device.send(sigmaConst.KEY_BACK, sigmaConst.STATE_PRESS);
delay(2000);
//下滑
device.swipe([
    [555, 18, 30],
    [555, 400, 100],
    [555, 900, 100]
]);
delay(1000);
//点击第一个图标(关闭)
device.click(155, 455, sigmaConst.STATE_PRESS);
delay(1000);
//按下返回键并弹起
//device.send(sigmaConst.KEY_BACK, sigmaConst.STATE_PRESS);
//按下主页键并弹起
device.send(sigmaConst.KEY_HOME, sigmaConst.STATE_PRESS);
print("打开第一个图标");
delay(3000);

//第二个图标操作
//下滑
device.swipe([
    [555, 18, 30],
    [555, 400, 100],
    [555, 900, 100]
]);
delay(1000);
//点击第二个图标（打开）
device.click(348, 456, sigmaConst.STATE_PRESS);
delay(1000);
//按下主页键并弹起
device.send(sigmaConst.KEY_BACK, sigmaConst.STATE_PRESS);
delay(2000);
//下滑
device.swipe([
    [555, 18, 30],
    [555, 400, 100],
    [555, 900, 100]
]);
delay(1000);
//再次点击第二个图标（关闭）
device.click(348, 456, sigmaConst.STATE_PRESS);
delay(1000);
//按下返回键并弹起
//device.send(sigmaConst.KEY_BACK, sigmaConst.STATE_PRESS);
//按下主页键并弹起
device.send(sigmaConst.KEY_HOME, sigmaConst.STATE_PRESS);
print("打开第二个图标");

//第三个图标操作
//下滑
device.swipe([
    [555, 18, 30],
    [555, 400, 100],
    [555, 900, 100]
]);
delay(1000);
//点击第三个图标（打开）
device.click(538, 456, sigmaConst.STATE_PRESS);
delay(1000);
//按下主页键并弹起
device.send(sigmaConst.KEY_BACK, sigmaConst.STATE_PRESS);
delay(2000);
//下滑
device.swipe([
    [555, 18, 30],
    [555, 400, 100],
    [555, 900, 100]
]);
delay(1000);
//再次点击第三个图标（关闭）
device.click(538, 456, sigmaConst.STATE_PRESS);
delay(1000);
//按下返回键并弹起
//device.send(sigmaConst.KEY_BACK, sigmaConst.STATE_PRESS);
//按下主页键并弹起
device.send(sigmaConst.KEY_HOME, sigmaConst.STATE_PRESS);
print("打开第三个图标");
//进行打开浏览器