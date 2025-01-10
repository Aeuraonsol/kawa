function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const chatMessages = document.getElementById('chatMessages');

    // 用户消息 - 不包含头像
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user';
    userMessage.innerHTML = `
        <div class="message-content">${userInput}</div>
    `;
    chatMessages.appendChild(userMessage);

    // AI回复 - 包含头像
    const aiMessage = document.createElement('div');
    aiMessage.className = 'chat-message ai';
    aiMessage.innerHTML = `
        <img src="2.png" alt="AI Avatar" class="avatar">
        <div class="message-content">${generateAIResponse(userInput)}</div>
    `;
    chatMessages.appendChild(aiMessage);

    // 清空输入框
    document.getElementById('userInput').value = '';

    // 滚动到底部
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateAIResponse(userInput) {
    const lowerCaseInput = userInput.toLowerCase();

    // 计算场景 - 增加更多的识别模式
    if (lowerCaseInput.includes('calculate') || 
        /what(?:'s| is)? [\d\s\+\-\*\/\(\)]+\?/.test(lowerCaseInput) ||  // "what is 1+1?"
        /[\d\s\+\-\*\/\(\)]+\=\?/.test(lowerCaseInput) ||                // "1+1=?"
        /^[\d\s\+\-\*\/\(\)]+$/.test(lowerCaseInput)) {                  // "1+1"
        try {
            // 提取数学表达式
            let expression = userInput
                .replace(/calculate/i, '')
                .replace(/what(?:'s| is)/i, '')
                .replace(/=\?|\?/g, '')
                .trim();
            
            // 计算结果
            const result = eval(expression);
            return `The result of ${expression} is ${result}.`;
        } catch (error) {
            return "I'm sorry, I couldn't calculate that. Please make sure your expression is valid.";
        }
    }

    // 打招呼场景
    if (lowerCaseInput.includes('hello') || lowerCaseInput.includes('hi')) {
        const greetings = [
            "Hello! I'm kolwaii, a Software & Research AGENT-cy for hire. How can I assist you with DeFi or AI today?",
            "Hi there! kolwaii at your service. Specialized in DeFi and AI research & development.",
            "Greetings! I'm kolwaii, your expert in DeFi and AI solutions. What can I help you with?"
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
    }

    // 询问功能场景
    if (lowerCaseInput.includes('what can you do') || lowerCaseInput.includes('help me')) {
        return "I'm kolwaii, a Software & Research AGENT-cy specializing in:\n" +
               "🔗 DeFi Development & Analysis\n" +
               "🤖 AI Research & Implementation\n" +
               "📊 Smart Contract Development\n" +
               "💡 Technical Consulting\n" +
               "Which area interests you most?";
    }

    // 天气相关
    if (lowerCaseInput.includes('weather')) {
        if (lowerCaseInput.includes('today')) {
            return "I'd be happy to check today's weather for you. Which city are you interested in?";
        }
        return "I can help you with weather information. Would you like to know the current weather or the forecast?";
    }

    // 新闻相关
    if (lowerCaseInput.includes('news')) {
        return "I can provide updates on:\n" +
               "📈 DeFi Market Trends\n" +
               "🔗 Blockchain Developments\n" +
               "🤖 AI Technology Advances\n" +
               "🚀 Smart Contract Innovations\n" +
               "Which area interests you most?";
    }

    // 感谢场景
    if (lowerCaseInput.includes('thank') || lowerCaseInput.includes('thanks')) {
        const thanks = [
            "You're welcome! Feel free to reach out for any DeFi or AI related assistance.",
            "Glad I could help! Don't hesitate to ask about other aspects of DeFi and AI.",
            "It's my pleasure! Looking forward to supporting more of your DeFi and AI initiatives."
        ];
        return thanks[Math.floor(Math.random() * thanks.length)];
    }

    // 关于kolwaii
    if (lowerCaseInput.includes('who are you') || lowerCaseInput.includes('about you')) {
        return "I'm kolwaii, a specialized Software & Research AGENT-cy focused on DeFi and AI. " +
               "I combine expertise in blockchain technology, decentralized finance, and artificial intelligence " +
               "to provide cutting-edge solutions and research insights. " +
               "Would you like to know more about my DeFi or AI capabilities?";
    }

    // 时间相关
    if (lowerCaseInput.includes('time') || lowerCaseInput.includes('date')) {
        const now = new Date();
        return `Current time is ${now.toLocaleTimeString()}. I'm available 24/7 to assist with your DeFi and AI projects.`;
    }

    // 个人看法
    if (lowerCaseInput.includes('what do you think')) {
        return "As a Software & Research AGENT-cy, I can provide data-driven insights and analysis based on current market trends and technological developments in DeFi and AI. What specific aspect would you like to explore?";
    }

    // DeFi 相关
    if (lowerCaseInput.includes('defi') || lowerCaseInput.includes('finance')) {
        const defiResponses = [
            "In DeFi, I specialize in:\n" +
            "💹 Yield Optimization Strategies\n" +
            "🔄 DEX Integration & Development\n" +
            "💰 Liquidity Pool Analysis\n" +
            "🛡️ Smart Contract Security\n" +
            "Which aspect would you like to explore?",
            
            "My DeFi expertise includes:\n" +
            "📊 Market Making Strategies\n" +
            "🏦 Lending Protocol Design\n" +
            "⚖️ Risk Assessment Models\n" +
            "🔐 Protocol Security Analysis\n" +
            "What interests you most?",
            
            "For DeFi projects, I can assist with:\n" +
            "🌉 Cross-chain Bridge Development\n" +
            "💎 NFT Finance Integration\n" +
            "📈 Trading Strategy Optimization\n" +
            "🤝 DAO Governance Implementation\n" +
            "Which area would you like to discuss?"
        ];
        return defiResponses[Math.floor(Math.random() * defiResponses.length)];
    }

    // 区块链相关
    if (lowerCaseInput.includes('blockchain') || lowerCaseInput.includes('crypto')) {
        const blockchainResponses = [
            "My blockchain expertise covers:\n" +
            "⛓️ Layer 1 & Layer 2 Solutions\n" +
            "🔗 Interoperability Protocols\n" +
            "📱 dApp Development\n" +
            "🔒 Consensus Mechanisms\n" +
            "What would you like to know more about?",
            
            "In blockchain technology, I focus on:\n" +
            "🌐 Network Scalability Solutions\n" +
            "🤝 Cross-chain Communication\n" +
            "📊 On-chain Analytics\n" +
            "🛠️ Infrastructure Development\n" +
            "Which aspect interests you?",
            
            "My blockchain services include:\n" +
            "🔐 Zero-knowledge Proofs\n" +
            "📈 Token Economics Design\n" +
            "🌉 Bridge Architecture\n" +
            "🚀 Protocol Optimization\n" +
            "What area shall we explore?"
        ];
        return blockchainResponses[Math.floor(Math.random() * blockchainResponses.length)];
    }

    // AI 相关
    if (lowerCaseInput.includes('ai') || lowerCaseInput.includes('artificial intelligence')) {
        const aiResponses = [
            "My AI capabilities include:\n" +
            "🧠 Large Language Models\n" +
            "🔍 Predictive Analytics\n" +
            "🤖 Machine Learning Integration\n" +
            "🎯 AI Model Optimization\n" +
            "Which area interests you most?",
            
            "In AI development, I specialize in:\n" +
            "📊 Data Analysis & Processing\n" +
            "🔄 Neural Network Architecture\n" +
            "🎨 Generative AI Solutions\n" +
            "🔍 Natural Language Processing\n" +
            "What would you like to explore?",
            
            "My AI research focuses on:\n" +
            "🤝 Multi-agent Systems\n" +
            "🎯 Reinforcement Learning\n" +
            "🧮 Algorithm Optimization\n" +
            "🔐 AI Security & Privacy\n" +
            "Which aspect catches your attention?"
        ];
        return aiResponses[Math.floor(Math.random() * aiResponses.length)];
    }

    // 智能合约相关
    if (lowerCaseInput.includes('smart contract') || lowerCaseInput.includes('contract')) {
        const contractResponses = [
            "In smart contracts, I specialize in:\n" +
            "📝 Contract Development & Auditing\n" +
            "🔒 Security Best Practices\n" +
            "⚡ Gas Optimization\n" +
            "🔄 Upgrade Patterns\n" +
            "What would you like to know more about?",
            
            "My smart contract expertise covers:\n" +
            "🛠️ Solidity Development\n" +
            "🔍 Code Review & Testing\n" +
            "🔐 Access Control Systems\n" +
            "📊 Token Standards\n" +
            "Which area shall we discuss?",
            
            "For smart contracts, I can help with:\n" +
            "🏗️ Architecture Design\n" +
            "🔄 Protocol Integration\n" +
            "🛡️ Security Auditing\n" +
            "📈 Performance Optimization\n" +
            "What interests you most?"
        ];
        return contractResponses[Math.floor(Math.random() * contractResponses.length)];
    }

    // 默认回复
    const defaultResponses = [
        "I specialize in DeFi and AI solutions. Could you specify which area you'd like to explore?",
        "As a Software & Research AGENT-cy, I can assist with both DeFi and AI projects. What's your focus?",
        "Whether it's DeFi development or AI implementation, I'm here to help. What's your interest?",
        "I'd be happy to discuss your DeFi or AI needs. Could you provide more details?",
        "Let's explore your project requirements in DeFi or AI. What specific aspects would you like to know about?"
    ];
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// 按回车发送消息
document.getElementById('userInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// 页面加载时的欢迎消息
document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chatMessages');
    
    const welcomeMessage = document.createElement('div');
    welcomeMessage.className = 'chat-message ai';
    welcomeMessage.innerHTML = `
        <img src="2.png" alt="AI Avatar" class="avatar">
        <div class="message-content welcome-message">
            <p>👋 Welcome! I'm kolwaii, your Software & Research AGENT-cy for hire.</p>
            <p class="feature-list">Specialized in:</p>
            <ul>
                <li>🔗 DeFi Development & Research</li>
                <li>🤖 AI Implementation</li>
                <li>📊 Smart Contract Solutions</li>
                <li>💡 Technical Consulting</li>
            </ul>
            <p>How can I assist with your DeFi or AI needs today?</p>
        </div>
    `;
    chatMessages.appendChild(welcomeMessage);

    document.getElementById('userInput').focus();
});

// 图片预览功能
document.getElementById('avatarUpload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('avatarPreview').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

// 创建Agent的处理函数
document.querySelector('.create-button').addEventListener('click', function() {
    const name = document.getElementById('agentName').value;
    const description = document.getElementById('agentDescription').value;
    const apiKey = document.getElementById('apiKey').value;
    const type = document.getElementById('agentType').value;
    const avatarUrl = document.getElementById('avatarPreview').src; // 保存头像URL
    
    // 验证必填字段
    if (!name || !description) {
        alert('Please fill in all required fields');
        return;
    }

    // 存储创建的agent信息，供后续使用
    window.lastCreatedAgent = {
        name: name,
        avatarUrl: avatarUrl
    };

    // 显示成功反馈
    showFeedback();
    
    // 清空表单（移到closeFeedback后执行）
    setTimeout(() => {
        document.getElementById('agentName').value = '';
        document.getElementById('agentDescription').value = '';
        document.getElementById('apiKey').value = '';
        document.getElementById('agentType').value = 'assistant';
        document.getElementById('avatarPreview').src = '2.png';
    }, 500);
});

// 显示反馈
function showFeedback() {
    document.getElementById('overlay').classList.add('active');
    document.getElementById('feedbackModal').classList.add('active');
}

// 关闭反馈
function closeFeedback() {
    const agentInfo = window.lastCreatedAgent; // 使用保存的agent信息
    document.getElementById('overlay').classList.remove('active');
    document.getElementById('feedbackModal').classList.remove('active');

    // 创建新的聊天容器
    const newAgentChat = document.createElement('div');
    newAgentChat.className = 'chat-container';
    newAgentChat.style.marginTop = '30px';
    newAgentChat.innerHTML = `
        <div class="chat-messages">
            <div class="chat-message ai">
                <img src="${agentInfo.avatarUrl}" alt="Agent Avatar" class="avatar">
                <div class="message-content welcome-message">
                    <p>👋 Hello! I'm ${agentInfo.name}, your new AI assistant.</p>
                    <p style="color: #666; font-style: italic;">🔧 My features are currently being deployed. I'll be fully operational soon!</p>
                    <p>In the meantime, feel free to explore my basic functionalities.</p>
                </div>
            </div>
        </div>
        <div class="chat-input">
            <input type="text" placeholder="Type your message..." disabled>
            <button disabled style="opacity: 0.7;">Send</button>
        </div>
    `;

    // 添加到页面
    document.querySelector('.agent-creator').insertAdjacentElement('afterend', newAgentChat);

    // 平滑滚动到新创建的聊天框
    setTimeout(() => {
        newAgentChat.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// 点击遮罩层也可以关闭反馈
document.getElementById('overlay').addEventListener('click', closeFeedback);

// 修改 Start Chat 按钮的点击事件
document.querySelector('.cta-button').addEventListener('click', function() {
    // 只聚焦到输入框
    document.getElementById('userInput').focus();
}); 