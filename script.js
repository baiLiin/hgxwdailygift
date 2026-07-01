// 礼物类
class Gift {
    constructor(name, num) {
        this.name = name || '';
        this.num = num || 0;
    }

    getName() {
        return this.name;
    }

    getNum() {
        return this.num;
    }
}

// 奖励数据管理器
const GiftManager = {
    // 情缘连冲奖励箱
    loveGiftBox: [
        new Gift("绑元", 1),
        new Gift("三生石", 30),
        new Gift("爱的结晶", 30),
        new Gift("贵重道具", 1)
    ],
    
    // 天天连冲奖励箱
    dailyGiftBox: [
        new Gift("宝具精魄", 1),
        new Gift("足迹升级丹", 30),
        new Gift("坐骑升级丹", 30),
        new Gift("星辉装备箱", 1),
        new Gift("贵重道具", 1)
    ]
};

// 获取情缘奖励
function getLoveGift(chargeDay) {
    const loveGiftBox = GiftManager.loveGiftBox;
    const band = loveGiftBox[0];
    const stone = loveGiftBox[1];
    const glass = loveGiftBox[2];
    const special = loveGiftBox[3];
    
    if (chargeDay < 3) {
        return [
            { name: band.getName(), num: band.getNum() * 4 },
            { name: stone.getName(), num: stone.getNum() * 14 },
            { name: glass.getName(), num: glass.getNum() * 14 },
            { name: special.getName(), num: band.getNum() * 1 }
        ];
    } else if (chargeDay >= 3 && chargeDay < 7) {
        return [
            { name: band.getName(), num: band.getNum() * 3 },
            { name: stone.getName(), num: stone.getNum() * 12 },
            { name: glass.getName(), num: glass.getNum() * 12 },
            { name: special.getName(), num: band.getNum() * 1 }
        ];
    } else if (chargeDay >= 7 && chargeDay < 15) {
        return [
            { name: band.getName(), num: band.getNum() * 2 },
            { name: stone.getName(), num: stone.getNum() * 10 },
            { name: glass.getName(), num: glass.getNum() * 10 },
            { name: special.getName(), num: band.getNum() * 1 }
        ];
    } else if (chargeDay >= 15 && chargeDay < 21) {
        return [
            { name: band.getName(), num: band.getNum() * 1 },
            { name: stone.getName(), num: stone.getNum() * 7 },
            { name: glass.getName(), num: glass.getNum() * 7 },
            { name: special.getName(), num: band.getNum() * 1 }
        ];
    } else if (chargeDay >= 21 && chargeDay < 28) {
        return [
            { name: special.getName(), num: band.getNum() * 1 },
            { name: stone.getName(), num: stone.getNum() * 4 },
            { name: glass.getName(), num: glass.getNum() * 4 }
        ];
    }
    return [];
}

// 获取每日奖励
function getDailyGift(chargeDay) {
    const dailyGiftBox = GiftManager.dailyGiftBox;
    const soul = dailyGiftBox[0];
    const shoes = dailyGiftBox[1];
    const ride = dailyGiftBox[2];
    const light = dailyGiftBox[3];
    const special = dailyGiftBox[4];
    
    if (chargeDay < 3) {
        return [
            { name: soul.getName(), num: soul.getNum() * 3 },
            { name: shoes.getName(), num: shoes.getNum() * 14 },
            { name: ride.getName(), num: ride.getNum() * 14 },
            { name: light.getName(), num: light.getNum() * 1 },
            { name: special.getName(), num: special.getNum() * 1 }
        ];
    } else if (chargeDay >= 3 && chargeDay < 7) {
        return [
            { name: soul.getName(), num: soul.getNum() * 2 },
            { name: shoes.getName(), num: shoes.getNum() * 12 },
            { name: ride.getName(), num: ride.getNum() * 12 },
            { name: light.getName(), num: light.getNum() * 1 },
            { name: special.getName(), num: special.getNum() * 1 }
        ];
    } else if (chargeDay >= 7 && chargeDay < 15) {
        return [
            { name: soul.getName(), num: soul.getNum() * 1 },
            { name: shoes.getName(), num: shoes.getNum() * 10 },
            { name: ride.getName(), num: ride.getNum() * 10 },
            { name: light.getName(), num: light.getNum() * 1 },
            { name: special.getName(), num: special.getNum() * 1 }
        ];
    } else if (chargeDay >= 15 && chargeDay < 21) {
        return [
            { name: soul.getName(), num: soul.getNum() * 1 },
            { name: shoes.getName(), num: shoes.getNum() * 7 },
            { name: ride.getName(), num: ride.getNum() * 7 },
            { name: special.getName(), num: special.getNum() * 1 }
        ];
    } else if (chargeDay >= 21 && chargeDay < 28) {
        return [
            { name: shoes.getName(), num: shoes.getNum() * 4 },
            { name: ride.getName(), num: ride.getNum() * 4 },
            { name: special.getName(), num: special.getNum() * 1 }
        ];
    }
    return [];
}

// 显示结果
function displayResult(gifts) {
    const resultDiv = document.getElementById('result');
    const contentDiv = document.getElementById('resultContent');
    
    if (gifts.length === 0) {
        contentDiv.innerHTML = '<p class="error-message">未计算到奖励</p>';
    } else {
        let html = '';
        gifts.forEach(gift => {
            html += `<span class="gift-item">${gift.name} × ${gift.num}</span>`;
        });
        contentDiv.innerHTML = html;
    }
    
    resultDiv.style.display = 'block';
}

// 计算按钮点击事件
document.getElementById('calculateBtn').addEventListener('click', function() {
    const chargeDay = parseInt(document.getElementById('chargeDay').value);
    const giftType = document.querySelector('input[name="giftType"]:checked').value;
    
    // 验证输入
    if (isNaN(chargeDay) || chargeDay < 0 || chargeDay >= 28) {
        const resultDiv = document.getElementById('result');
        const contentDiv = document.getElementById('resultContent');
        contentDiv.innerHTML = '<p class="error-message">请输入有效的充值天数（0-27天）</p>';
        resultDiv.style.display = 'block';
        return;
    }
    
    // 计算奖励
    let gifts;
    if (giftType === 'love') {
        gifts = getLoveGift(chargeDay);
    } else {
        gifts = getDailyGift(chargeDay);
    }
    
    displayResult(gifts);
});

// 标签切换
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // 移除所有active类
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
        
        // 添加当前active类
        this.classList.add('active');
        const tabId = this.dataset.tab + 'Tab';
        document.getElementById(tabId).classList.remove('hidden');
    });
});