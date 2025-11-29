/**
 * 题目1：自动打开小红书APP，进入直播间。
 */

auto.waitFor();
app.launchApp("小红书");
sleep(5000);

// 1. 进入直播页面
enterLiveTab();

// 2. 进入直播间
enterLiveRoom();


// --- 辅助函数 ---

function enterLiveTab() {
    // 点击顶部“直播”标签
    click("直播")
    sleep(2000);
}

function enterLiveRoom() {
    // 点击带有“直播中”的卡片
    var liveItem = textContains("直播中").findOne(5000);
    if (!liveItem) {
        return;
    }
    var bounds = liveItem.bounds();
    click(bounds.centerX(), bounds.centerY());
    toast("已进入直播间");
}
