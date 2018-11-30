/*打开手电筒3秒后关闭手电筒，然后返回主页
 1、手机必须解锁。
 2、手机任务栏中五个图标一行。
 3、第三个图标是手电筒。
 */

//屏幕网络按钮位置
let NetButtonX = 538;
let NetButtonY = 456;
//连接所有设备
let devices = Device.connectAll();
//获得主设备
let device = Device.getMain();
//下滑
device.swipe([[555,18,30],[555,400,100],[555,900,100]]);
//打开手电
device.click(538, 456, sigmaConst.STATE_PRESS);
delay(3000);
//关闭手电
device.click(538, 456, sigmaConst.STATE_PRESS);
//按下返回键并弹起
device.send(sigmaConst.KEY_BACK, sigmaConst.STATE_PRESS);
//按下主页键并弹起
device.send(sigmaConst.KEY_HOME, sigmaConst.STATE_PRESS);
