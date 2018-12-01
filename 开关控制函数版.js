/*打开手电筒3秒后关闭手电筒，然后返回主页
 1、手机必须解锁。
 2、手机任务栏中五个图标一行。
 3、图标排列
    1、飞行模板
    2、WiFi
    3、移动数据
 */

let devices = Device.connectAll();
//获得主设备
let device = Device.getMain();

OpenAndCloseSwitch(device, 155, 455);
print("打开第一个图标");
delay(2000);

OpenAndCloseSwitch(device, 348, 455);
print("打开第二个图标");
delay(2000);

OpenAndCloseSwitch(device, 538, 455);
print("打开关闭第三个图标");
delay(2000);

//打开浏览器
return;

function OpenAndCloseSwitch(device, positionX, positionY) {
    device.swipe([
        [555, 18, 30],
        [555, 400, 100],
        [555, 900, 100]
    ]);
    delay(1000);
    //点击第一个图标(打开)
    device.click(positionX, positionY, sigmaConst.STATE_PRESS);
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
    device.click(positionX, positionY, sigmaConst.STATE_PRESS);
    delay(1000);
    //按下返回键并弹起
    //device.send(sigmaConst.KEY_BACK, sigmaConst.STATE_PRESS);
    //按下主页键并弹起
    device.send(sigmaConst.KEY_HOME, sigmaConst.STATE_PRESS);
}