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
        return {
            gifts: [
                { name: band.getName(), num: band.getNum() * 4 },
                { name: stone.getName(), num: stone.getNum() * 14 },
                { name: glass.getName(), num: glass.getNum() * 14 },
                { name: special.getName(), num: band.getNum() * 1 }
            ],
            breakdown: "补发 3, 7, 15, 21, 28 天奖励"
        };
    } else if (chargeDay >= 3 && chargeDay < 7) {
        return {
            gifts: [
                { name: band.getName(), num: band.getNum() * 3 },
                { name: stone.getName(), num: stone.getNum() * 12 },
                { name: glass.getName(), num: glass.getNum() * 12 },
                { name: special.getName(), num: band.getNum() * 1 }
            ],
            breakdown: "补发 7, 15, 21, 28 天奖励"
        };
    } else if (chargeDay >= 7 && chargeDay < 15) {
        return {
            gifts: [
                { name: band.getName(), num: band.getNum() * 2 },
                { name: stone.getName(), num: stone.getNum() * 10 },
                { name: glass.getName(), num: glass.getNum() * 10 },
                { name: special.getName(), num: band.getNum() * 1 }
            ],
            breakdown: "补发 15, 21, 28 天奖励"
        };
    } else if (chargeDay >= 15 && chargeDay < 21) {
        return {
            gifts: [
                { name: band.getName(), num: band.getNum() * 1 },
                { name: stone.getName(), num: stone.getNum() * 7 },
                { name: glass.getName(), num: glass.getNum() * 7 },
                { name: special.getName(), num: band.getNum() * 1 }
            ],
            breakdown: "补发 21, 28 天奖励"
        };
    } else if (chargeDay >= 21 && chargeDay < 28) {
        return {
            gifts: [
                { name: special.getName(), num: band.getNum() * 1 },
                { name: stone.getName(), num: stone.getNum() * 4 },
                { name: glass.getName(), num: glass.getNum() * 4 }
            ],
            breakdown: "补发 28 天奖励"
        };
    }
    return { gifts: [], breakdown: "" };
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
        return {
            gifts: [
                { name: soul.getName(), num: soul.getNum() * 3 },
                { name: shoes.getName(), num: shoes.getNum() * 14 },
                { name: ride.getName(), num: ride.getNum() * 14 },
                { name: light.getName(), num: light.getNum() * 1 },
                { name: special.getName(), num: special.getNum() * 1 }
            ],
            breakdown: "补发 3, 7, 15, 21, 28 天奖励"
        };
    } else if (chargeDay >= 3 && chargeDay < 7) {
        return {
            gifts: [
                { name: soul.getName(), num: soul.getNum() * 2 },
                { name: shoes.getName(), num: shoes.getNum() * 12 },
                { name: ride.getName(), num: ride.getNum() * 12 },
                { name: light.getName(), num: light.getNum() * 1 },
                { name: special.getName(), num: special.getNum() * 1 }
            ],
            breakdown: "补发 7, 15, 21, 28 天奖励"
        };
    } else if (chargeDay >= 7 && chargeDay < 15) {
        return {
            gifts: [
                { name: soul.getName(), num: soul.getNum() * 1 },
                { name: shoes.getName(), num: shoes.getNum() * 10 },
                { name: ride.getName(), num: ride.getNum() * 10 },
                { name: light.getName(), num: light.getNum() * 1 },
                { name: special.getName(), num: special.getNum() * 1 }
            ],
            breakdown: "补发 15, 21, 28 天奖励"
        };
    } else if (chargeDay >= 15 && chargeDay < 21) {
        return {
            gifts: [
                { name: soul.getName(), num: soul.getNum() * 1 },
                { name: shoes.getName(), num: shoes.getNum() * 7 },
                { name: ride.getName(), num: ride.getNum() * 7 },
                { name: special.getName(), num: special.getNum() * 1 }
            ],
            breakdown: "补发 21, 28 天奖励"
        };
    } else if (chargeDay >= 21 && chargeDay < 28) {
        return {
            gifts: [
                { name: shoes.getName(), num: shoes.getNum() * 4 },
                { name: ride.getName(), num: ride.getNum() * 4 },
                { name: special.getName(), num: special.getNum() * 1 }
            ],
            breakdown: "补发 28 天奖励"
        };
    }
    return { gifts: [], breakdown: "" };
}

// 显示结果
function displayResult(result) {
    const resultSection = document.getElementById('resultSection');
    const contentDiv = document.getElementById('resultContent');
    const breakdownDiv = document.getElementById('breakdown');
    
    if (result.gifts.length === 0) {
        contentDiv.innerHTML = '<p class="error-message">未计算到奖励</p>';
        breakdownDiv.innerHTML = '';
    } else {
        let html = '';
        result.gifts.forEach(gift => {
            html += `<span class="gift-item">${gift.name} × ${gift.num}</span>`;
        });
        contentDiv.innerHTML = html;
        breakdownDiv.innerHTML = `<strong>补发说明：</strong>${result.breakdown}`;
    }
    
    resultSection.style.display = 'block';
    resultSection.classList.remove('success-animation');
    void resultSection.offsetWidth;
    resultSection.classList.add('success-animation');
}

// 计算按钮点击事件
document.getElementById('calculateBtn').addEventListener('click', function() {
    const chargeDay = parseInt(document.getElementById('chargeDay').value);
    const giftType = document.querySelector('input[name="giftType"]:checked').value;
    
    // 验证输入
    if (isNaN(chargeDay) || chargeDay < 0 || chargeDay >= 28) {
        const resultSection = document.getElementById('resultSection');
        const contentDiv = document.getElementById('resultContent');
        const breakdownDiv = document.getElementById('breakdown');
        contentDiv.innerHTML = '<p class="error-message">请输入有效的充值天数（0-27天）</p>';
        breakdownDiv.innerHTML = '';
        resultSection.style.display = 'block';
        return;
    }
    
    // 计算奖励
    let result;
    if (giftType === 'love') {
        result = getLoveGift(chargeDay);
    } else {
        result = getDailyGift(chargeDay);
    }
    
    displayResult(result);
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

// 数字输入框限制
document.getElementById('chargeDay').addEventListener('input', function(e) {
    const value = parseInt(e.target.value);
    if (value > 27) {
        e.target.value = 27;
    } else if (value < 0) {
        e.target.value = 0;
    }
});