document.addEventListener('DOMContentLoaded', () => {
  // 初始化 Plyr 播放器
  const player = new Plyr('#player', {
    captions: { active: true, update: true },
    controls: [
      'play-large',
      'play',
      'progress',
      'current-time',
      'mute',
      'volume',
      'captions',
      'settings',
      'pip',
      'airplay',
      'fullscreen',
    ],
    i18n: {
      play: '播放',
      pause: '暂停',
      mute: '静音',
      unmute: '取消静音',
      captions: '字幕',
      enabled: '开启',
      disabled: '关闭',
      settings: '设置',
      enterFullscreen: '全屏',
      exitFullscreen: '退出全屏',
      speed: '速度',
      normal: '正常',
    },
  });

  // 全局变量记录播放器状态
  window.playerState = {
    isLoading: false,
    currentVideo: null,
    hasError: false,
  };

  // 视频加载过程中显示加载指示器
  function showLoading(show) {
    const videoPlayer = document.getElementById('player');
    const videoLoader = document.getElementById('video-loader');
    
    if (show) {
      videoPlayer.classList.add('loading');
      videoLoader.style.display = 'block';
    } else {
      videoPlayer.classList.remove('loading');
      videoLoader.style.display = 'none';
    }
  }

  // 视频目录结构
  const videoStructure = [
    { week: 1, title: '一、引言(Introduction)' },
    { section: 1.1, title: '欢迎' },
    { section: 1.2, title: '机器学习是什么？' },
    { section: 1.3, title: '监督学习' },
    { section: 1.4, title: '无监督学习' },
    {
      week: 1,
      title: '二、单变量线性回归(Linear Regression with One Variable)',
    },
    { section: 2.1, title: '模型表示' },
    { section: 2.2, title: '代价函数' },
    { section: 2.3, title: '代价函数的直观理解I' },
    { section: 2.4, title: '代价函数的直观理解II' },
    { section: 2.5, title: '梯度下降' },
    { section: 2.6, title: '梯度下降的直观理解' },
    { section: 2.7, title: '梯度下降的线性回归' },
    { section: 2.8, title: '接下来的内容' },
    { week: 1, title: '三、线性代数回顾(Linear Algebra Review)' },
    { section: 3.1, title: '矩阵和向量' },
    { section: 3.2, title: '加法和标量乘法' },
    { section: 3.3, title: '矩阵向量乘法' },
    { section: 3.4, title: '矩阵乘法' },
    { section: 3.5, title: '矩阵乘法的性质' },
    { section: 3.6, title: '逆、转置' },

    {
      week: 2,
      title:
        '四、多变量线性回归(Linear Regression with Multiple Variables)',
    },
    { section: 4.1, title: '多维特征' },
    { section: 4.2, title: '多变量梯度下降' },
    { section: 4.3, title: '梯度下降法实践1-特征缩放' },
    { section: 4.4, title: '梯度下降法实践2-学习率' },
    { section: 4.5, title: '特征和多项式回归' },
    { section: 4.6, title: '正规方程' },
    { section: 4.7, title: '正规方程及不可逆性（选修）' },
    { week: 2, title: '五、Octave教程(Octave Tutorial)' },
    { section: 5.1, title: '基本操作' },
    { section: 5.2, title: '移动数据' },
    { section: 5.3, title: '计算数据' },
    { section: 5.4, title: '绘图数据' },
    { section: 5.5, title: '控制语句：for，while，if语句' },
    { section: 5.6, title: '向量化' },
    { section: 5.7, title: '工作和提交的编程练习' },

    { week: 3, title: '六、逻辑回归(Logistic Regression)' },
    { section: 6.1, title: '分类问题' },
    { section: 6.2, title: '假说表示' },
    { section: 6.3, title: '判定边界' },
    { section: 6.4, title: '代价函数' },
    { section: 6.5, title: '简化的成本函数和梯度下降' },
    { section: 6.6, title: '高级优化' },
    { section: 6.7, title: '多类别分类：一对多' },
    { week: 3, title: '七、正则化(Regularization)' },
    { section: 7.1, title: '过拟合的问题' },
    { section: 7.2, title: '代价函数' },
    { section: 7.3, title: '正则化线性回归' },
    { section: 7.4, title: '正则化的逻辑回归模型' },

    {
      week: 4,
      title: '八、神经网络：表述(Neural Networks: Representation)',
    },
    { section: 8.1, title: '非线性假设' },
    { section: 8.2, title: '神经元和大脑' },
    { section: 8.3, title: '模型表示1' },
    { section: 8.4, title: '模型表示2' },
    { section: 8.5, title: '样本和直观理解1' },
    { section: 8.6, title: '样本和直观理解II' },
    { section: 8.7, title: '多类分类' },

    { week: 5, title: '九、神经网络的学习(Neural Networks: Learning)' },
    { section: 9.1, title: '代价函数' },
    { section: 9.2, title: '反向传播算法' },
    { section: 9.3, title: '反向传播算法的直观理解' },
    { section: 9.4, title: '实现注意：展开参数' },
    { section: 9.5, title: '梯度检验' },
    { section: 9.6, title: '随机初始化' },
    { section: 9.7, title: '综合起来' },
    { section: 9.8, title: '自主驾驶' },

    {
      week: 6,
      title:
        '十、应用机器学习的建议(Advice for Applying Machine Learning)',
    },
    { section: 10.1, title: '决定下一步做什么' },
    { section: 10.2, title: '评估一个假设' },
    { section: 10.3, title: '模型选择和交叉验证集' },
    { section: 10.4, title: '诊断偏差和方差' },
    { section: 10.5, title: '正则化和偏差/方差' },
    { section: 10.6, title: '学习曲线' },
    { section: 10.7, title: '决定下一步做什么' },
    {
      week: 6,
      title: '十一、机器学习系统的设计(Machine Learning System Design)',
    },
    { section: 11.1, title: '首先要做什么' },
    { section: 11.2, title: '误差分析' },
    { section: 11.3, title: '类偏斜的误差度量' },
    { section: 11.4, title: '查准率和查全率之间的权衡' },
    { section: 11.5, title: '机器学习的数据' },

    { week: 7, title: '十二、支持向量机(Support Vector Machines)' },
    { section: 12.1, title: '优化目标' },
    { section: 12.2, title: '大边界的直观理解' },
    { section: 12.3, title: '数学背后的大边界分类（选修）' },
    { section: 12.4, title: '核函数1' },
    { section: 12.5, title: '核函数2' },
    { section: 12.6, title: '使用支持向量机' },

    { week: 8, title: '十三、聚类(Clustering)' },
    { section: 13.1, title: '无监督学习：简介' },
    { section: 13.2, title: 'K-均值算法' },
    { section: 13.3, title: '优化目标' },
    { section: 13.4, title: '随机初始化' },
    { section: 13.5, title: '选择聚类数' },
    { week: 8, title: '十四、降维(Dimensionality Reduction)' },
    { section: 14.1, title: '动机一：数据压缩' },
    { section: 14.2, title: '动机二：数据可视化' },
    { section: 14.3, title: '主成分分析问题' },
    { section: 14.4, title: '主成分分析算法' },
    { section: 14.5, title: '选择主成分的数量' },
    { section: 14.6, title: '重建的压缩表示' },
    { section: 14.7, title: '主成分分析法的应用建议' },

    { week: 9, title: '十五、异常检测(Anomaly Detection)' },
    { section: 15.1, title: '问题的动机' },
    { section: 15.2, title: '高斯分布' },
    { section: 15.3, title: '算法' },
    { section: 15.4, title: '开发和评价一个异常检测系统' },
    { section: 15.5, title: '异常检测与监督学习对比' },
    { section: 15.6, title: '选择特征' },
    { section: 15.7, title: '多元高斯分布（选修）' },
    { section: 15.8, title: '使用多元高斯分布进行异常检测（选修）' },
    { week: 9, title: '十六、推荐系统(Recommender Systems)' },
    { section: 16.1, title: '问题形式化' },
    { section: 16.2, title: '基于内容的推荐系统' },
    { section: 16.3, title: '协同过滤' },
    { section: 16.4, title: '协同过滤算法' },
    { section: 16.5, title: '向量化：低秩矩阵分解' },
    { section: 16.6, title: '推行工作上的细节：均值归一化' },

    {
      week: 10,
      title: '十七、大规模机器学习(Large Scale Machine Learning)',
    },
    { section: 17.1, title: '大型数据集的学习' },
    { section: 17.2, title: '随机梯度下降法' },
    { section: 17.3, title: '小批量梯度下降' },
    { section: 17.4, title: '随机梯度下降收敛' },
    { section: 17.5, title: '在线学习' },
    { section: 17.6, title: '映射化简和数据并行' },
    {
      week: 10,
      title:
        '十八、应用实例：图片文字识别(Application Example: Photo OCR)',
    },
    { section: 18.1, title: '问题描述和流程图' },
    { section: 18.2, title: '滑动窗口' },
    { section: 18.3, title: '获取大量数据和人工数据' },
    { section: 18.4, title: '上限分析：哪部分管道的接下去做' },

    { week: 10, title: '十九、总结(Conclusion)' },
    { section: 19.1, title: '总结和致谢' },
  ]

  // 获取视频文件列表
  async function getVideoList() {
    try {
      // 模拟从服务器获取视频列表
      // 在实际应用中，应该通过API获取或者直接提供一个JSON文件

      // 这里我们基于上传的文件夹结构创建视频列表
      const videos = [
        // 一、引言(Introduction)
        {
          week: 1,
          index: 1.1,
          title: '欢迎',
          duration: '7 min',
          filename: '1 - 1 - Welcome (7 min)',
        },
        {
          week: 1,
          index: 1.2,
          title: '机器学习是什么？',
          duration: '7 min',
          filename: '1 - 2 - What is Machine Learning_ (7 min)',
        },
        {
          week: 1,
          index: 1.3,
          title: '监督学习',
          duration: '12 min',
          filename: '1 - 3 - Supervised Learning (12 min)',
        },
        {
          week: 1,
          index: 1.4,
          title: '无监督学习',
          duration: '14 min',
          filename: '1 - 4 - Unsupervised Learning (14 min)',
        },

        // 二、单变量线性回归(Linear Regression with One Variable)
        {
          week: 1,
          index: 2.1,
          title: '模型表示',
          duration: '8 min',
          filename: '2 - 1 - Model Representation (8 min)',
        },
        {
          week: 1,
          index: 2.2,
          title: '代价函数',
          duration: '8 min',
          filename: '2 - 2 - Cost Function (8 min)',
        },
        {
          week: 1,
          index: 2.3,
          title: '代价函数的直观理解I',
          duration: '11 min',
          filename: '2 - 3 - Cost Function - Intuition I (11 min)',
        },
        {
          week: 1,
          index: 2.4,
          title: '代价函数的直观理解II',
          duration: '9 min',
          filename: '2 - 4 - Cost Function - Intuition II (9 min)',
        },
        {
          week: 1,
          index: 2.5,
          title: '梯度下降',
          duration: '11 min',
          filename: '2 - 5 - Gradient Descent (11 min)',
        },
        {
          week: 1,
          index: 2.6,
          title: '梯度下降的直观理解',
          duration: '12 min',
          filename: '2 - 6 - Gradient Descent Intuition (12 min)',
        },
        {
          week: 1,
          index: 2.7,
          title: '梯度下降的线性回归',
          duration: '10 min',
          filename:
            '2 - 7 - Gradient Descent For Linear Regression (10 min)',
        },
        {
          week: 1,
          index: 2.8,
          title: '接下来的内容',
          duration: '6 min',
          filename: "2 - 8 - What_'s Next (6 min)",
        },

        // 三、线性代数回顾(Linear Algebra Review)
        {
          week: 1,
          index: 3.1,
          title: '矩阵和向量',
          duration: '9 min',
          filename: '3 - 1 - Matrices and Vectors (9 min)',
        },
        {
          week: 1,
          index: 3.2,
          title: '加法和标量乘法',
          duration: '7 min',
          filename: '3 - 2 - Addition and Scalar Multiplication (7 min)',
        },
        {
          week: 1,
          index: 3.3,
          title: '矩阵向量乘法',
          duration: '14 min',
          filename: '3 - 3 - Matrix Vector Multiplication (14 min)',
        },
        {
          week: 1,
          index: 3.4,
          title: '矩阵乘法',
          duration: '11 min',
          filename: '3 - 4 - Matrix Matrix Multiplication (11 min)',
        },
        {
          week: 1,
          index: 3.5,
          title: '矩阵乘法的性质',
          duration: '9 min',
          filename: '3 - 5 - Matrix Multiplication Properties (9 min)',
        },
        {
          week: 1,
          index: 3.6,
          title: '逆、转置',
          duration: '11 min',
          filename: '3 - 6 - Inverse and Transpose (11 min)',
        },

        // 四、多变量线性回归(Linear Regression with Multiple Variables)
        {
          week: 2,
          index: 4.1,
          title: '多维特征',
          duration: '8 min',
          filename: '4 - 1 - Multiple Features (8 min)',
        },
        {
          week: 2,
          index: 4.2,
          title: '多变量梯度下降',
          duration: '5 min',
          filename:
            '4 - 2 - Gradient Descent for Multiple Variables (5 min)',
        },
        {
          week: 2,
          index: 4.3,
          title: '梯度下降法实践1-特征缩放',
          duration: '9 min',
          filename:
            '4 - 3 - Gradient Descent in Practice I - Feature Scaling (9 min)',
        },
        {
          week: 2,
          index: 4.4,
          title: '梯度下降法实践2-学习率',
          duration: '9 min',
          filename:
            '4 - 4 - Gradient Descent in Practice II - Learning Rate (9 min)',
        },
        {
          week: 2,
          index: 4.5,
          title: '特征和多项式回归',
          duration: '8 min',
          filename: '4 - 5 - Features and Polynomial Regression (8 min)',
        },
        {
          week: 2,
          index: 4.6,
          title: '正规方程',
          duration: '16 min',
          filename: '4 - 6 - Normal Equation (16 min)',
        },
        {
          week: 2,
          index: 4.7,
          title: '正规方程及不可逆性（选修）',
          duration: '6 min',
          filename:
            '4 - 7 - Normal Equation Noninvertibility (Optional) (6 min)',
        },

        // 五、Octave教程(Octave Tutorial)
        {
          week: 2,
          index: 5.1,
          title: '基本操作',
          duration: '14 min',
          filename: '5 - 1 - Basic Operations (14 min)',
        },
        {
          week: 2,
          index: 5.2,
          title: '移动数据',
          duration: '16 min',
          filename: '5 - 2 - Moving Data Around (16 min)',
        },
        {
          week: 2,
          index: 5.3,
          title: '计算数据',
          duration: '13 min',
          filename: '5 - 3 - Computing on Data (13 min)',
        },
        {
          week: 2,
          index: 5.4,
          title: '绘图数据',
          duration: '10 min',
          filename: '5 - 4 - Plotting Data (10 min)',
        },
        {
          week: 2,
          index: 5.5,
          title: '控制语句：for，while，if语句',
          duration: '13 min',
          filename:
            '5 - 5 - Control Statements_ for, while, if statements (13 min)',
        },
        {
          week: 2,
          index: 5.6,
          title: '向量化',
          duration: '14 min',
          filename: '5 - 6 - Vectorization (14 min)',
        },
        {
          week: 2,
          index: 5.7,
          title: '工作和提交的编程练习',
          duration: '4 min',
          filename:
            '5 - 7 - Working on and Submitting Programming Exercises (4 min)',
        },

        // 六、逻辑回归(Logistic Regression)
        {
          week: 3,
          index: 6.1,
          title: '分类问题',
          duration: '8 min',
          filename: '6 - 1 - Classification (8 min)',
        },
        {
          week: 3,
          index: 6.2,
          title: '假说表示',
          duration: '7 min',
          filename: '6 - 2 - Hypothesis Representation (7 min)',
        },
        {
          week: 3,
          index: 6.3,
          title: '判定边界',
          duration: '15 min',
          filename: '6 - 3 - Decision Boundary (15 min)',
        },
        {
          week: 3,
          index: 6.4,
          title: '代价函数',
          duration: '11 min',
          filename: '6 - 4 - Cost Function (11 min)',
        },
        {
          week: 3,
          index: 6.5,
          title: '简化的成本函数和梯度下降',
          duration: '10 min',
          filename:
            '6 - 5 - Simplified Cost Function and Gradient Descent (10 min)',
        },
        {
          week: 3,
          index: 6.6,
          title: '高级优化',
          duration: '14 min',
          filename: '6 - 6 - Advanced Optimization (14 min)',
        },
        {
          week: 3,
          index: 6.7,
          title: '多类别分类：一对多',
          duration: '6 min',
          filename:
            '6 - 7 - Multiclass Classification_ One-vs-all (6 min)',
        },

        // 七、正则化(Regularization)
        {
          week: 3,
          index: 7.1,
          title: '过拟合的问题',
          duration: '10 min',
          filename: '7 - 1 - The Problem of Overfitting (10 min)',
        },
        {
          week: 3,
          index: 7.2,
          title: '代价函数',
          duration: '10 min',
          filename: '7 - 2 - Cost Function (10 min)',
        },
        {
          week: 3,
          index: 7.3,
          title: '正则化线性回归',
          duration: '11 min',
          filename: '7 - 3 - Regularized Linear Regression (11 min)',
        },
        {
          week: 3,
          index: 7.4,
          title: '正则化的逻辑回归模型',
          duration: '9 min',
          filename: '7 - 4 - Regularized Logistic Regression (9 min)',
        },

        // 八、神经网络：表述(Neural Networks: Representation)
        {
          week: 4,
          index: 8.1,
          title: '非线性假设',
          duration: '10 min',
          filename: '8 - 1 - Non-linear Hypotheses (10 min)',
        },
        {
          week: 4,
          index: 8.2,
          title: '神经元和大脑',
          duration: '8 min',
          filename: '8 - 2 - Neurons and the Brain (8 min)',
        },
        {
          week: 4,
          index: 8.3,
          title: '模型表示1',
          duration: '12 min',
          filename: '8 - 3 - Model Representation I (12 min)',
        },
        {
          week: 4,
          index: 8.4,
          title: '模型表示2',
          duration: '12 min',
          filename: '8 - 4 - Model Representation II (12 min)',
        },
        {
          week: 4,
          index: 8.5,
          title: '样本和直观理解1',
          duration: '7 min',
          filename: '8 - 5 - Examples and Intuitions I (7 min)',
        },
        {
          week: 4,
          index: 8.6,
          title: '样本和直观理解II',
          duration: '10 min',
          filename: '8 - 6 - Examples and Intuitions II (10 min)',
        },
        {
          week: 4,
          index: 8.7,
          title: '多类分类',
          duration: '4 min',
          filename: '8 - 7 - Multiclass Classification (4 min)',
        },

        // 九、神经网络的学习(Neural Networks: Learning)
        {
          week: 5,
          index: 9.1,
          title: '代价函数',
          duration: '7 min',
          filename: '9 - 1 - Cost Function (7 min)',
        },
        {
          week: 5,
          index: 9.2,
          title: '反向传播算法',
          duration: '12 min',
          filename: '9 - 2 - Backpropagation Algorithm (12 min)',
        },
        {
          week: 5,
          index: 9.3,
          title: '反向传播算法的直观理解',
          duration: '13 min',
          filename: '9 - 3 - Backpropagation Intuition (13 min)',
        },
        {
          week: 5,
          index: 9.4,
          title: '实现注意：展开参数',
          duration: '8 min',
          filename:
            '9 - 4 - Implementation Note_ Unrolling Parameters (8 min)',
        },
        {
          week: 5,
          index: 9.5,
          title: '梯度检验',
          duration: '12 min',
          filename: '9 - 5 - Gradient Checking (12 min)',
        },
        {
          week: 5,
          index: 9.6,
          title: '随机初始化',
          duration: '7 min',
          filename: '9 - 6 - Random Initialization (7 min)',
        },
        {
          week: 5,
          index: 9.7,
          title: '综合起来',
          duration: '14 min',
          filename: '9 - 7 - Putting It Together (14 min)',
        },
        {
          week: 5,
          index: 9.8,
          title: '自主驾驶',
          duration: '7 min',
          filename: '9 - 8 - Autonomous Driving (7 min)',
        },

        // 十、应用机器学习的建议(Advice for Applying Machine Learning)
        {
          week: 6,
          index: 10.1,
          title: '决定下一步做什么',
          duration: '6 min',
          filename: '10 - 1 - Deciding What to Try Next (6 min)',
        },
        {
          week: 6,
          index: 10.2,
          title: '评估一个假设',
          duration: '8 min',
          filename: '10 - 2 - Evaluating a Hypothesis (8 min)',
        },
        {
          week: 6,
          index: 10.3,
          title: '模型选择和交叉验证集',
          duration: '8 min',
          filename: '10 - 3 - Model Selection and Traination (8 min)',
        },
        {
          week: 6,
          index: 10.4,
          title: '诊断偏差和方差',
          duration: '8 min',
          filename: '10 - 4 - Diagnosing Bias vs. Variance (8 min)',
        },
        {
          week: 6,
          index: 10.5,
          title: '正则化和偏差/方差',
          duration: '11 min',
          filename: '10 - 5 - Regularization and Bias_Variance (11 min)',
        },
        {
          week: 6,
          index: 10.6,
          title: '学习曲线',
          duration: '12 min',
          filename: '10 - 6 - Learning Curves (12 min)',
        },
        {
          week: 6,
          index: 10.7,
          title: '决定下一步做什么',
          duration: '7 min',
          filename: '10 - 7 - Deciding What to Do Next Revisited (7 min)',
        },

        // 十一、机器学习系统的设计(Machine Learning System Design)
        {
          week: 6,
          index: 11.1,
          title: '首先要做什么',
          duration: '10 min',
          filename: '11 - 1 - Prioritizing What to Work On (10 min)',
        },
        {
          week: 6,
          index: 11.2,
          title: '误差分析',
          duration: '13 min',
          filename: '11 - 2 - Error Analysis (13 min)',
        },
        {
          week: 6,
          index: 11.3,
          title: '类偏斜的误差度量',
          duration: '12 min',
          filename: '11 - 3 - Error Metrics for Skewed Classes (12 min)',
        },
        {
          week: 6,
          index: 11.4,
          title: '查准率和查全率之间的权衡',
          duration: '14 min',
          filename: '11 - 4 - Trading Off Precision and Recall (14 min)',
        },
        {
          week: 6,
          index: 11.5,
          title: '机器学习的数据',
          duration: '11 min',
          filename: '11 - 5 - Data For Machine Learning (11 min)',
        },

        // 十二、支持向量机(Support Vector Machines)
        {
          week: 7,
          index: 12.1,
          title: '优化目标',
          duration: '15 min',
          filename: '12 - 1 - Optimization Objective (15 min)',
        },
        {
          week: 7,
          index: 12.2,
          title: '大边界的直观理解',
          duration: '11 min',
          filename: '12 - 2 - Large Margin Intuition (11 min)',
        },
        {
          week: 7,
          index: 12.3,
          title: '数学背后的大边界分类（选修）',
          duration: '20 min',
          filename:
            '12 - 3 - Mathematics Behind Large Margin Classification (Optional) (20 min)',
        },
        {
          week: 7,
          index: 12.4,
          title: '核函数1',
          duration: '16 min',
          filename: '12 - 4 - Kernels I (16 min)',
        },
        {
          week: 7,
          index: 12.5,
          title: '核函数2',
          duration: '16 min',
          filename: '12 - 5 - Kernels II (16 min)',
        },
        {
          week: 7,
          index: 12.6,
          title: '使用支持向量机',
          duration: '21 min',
          filename: '12 - 6 - Using An SVM (21 min)',
        },

        // 十三、聚类(Clustering)
        {
          week: 8,
          index: 13.1,
          title: '无监督学习：简介',
          duration: '3 min',
          filename:
            '13 - 1 - Unsupervised Learning_ Introduction (3 min)',
        },
        {
          week: 8,
          index: 13.2,
          title: 'K-均值算法',
          duration: '13 min',
          filename: '13 - 2 - K-Means Algorithm (13 min)',
        },
        {
          week: 8,
          index: 13.3,
          title: '优化目标',
          duration: '7 min',
          filename: '13 - 3 - Optimization Objective (7 min)',
        },
        {
          week: 8,
          index: 13.4,
          title: '随机初始化',
          duration: '8 min',
          filename: '13 - 4 - Random Initialization (8 min)',
        },
        {
          week: 8,
          index: 13.5,
          title: '选择聚类数',
          duration: '8 min',
          filename: '13 - 5 - Choosing the Number of Clusters (8 min)',
        },

        // 十四、降维(Dimensionality Reduction)
        {
          week: 8,
          index: 14.1,
          title: '动机一：数据压缩',
          duration: '10 min',
          filename: '14 - 1 - Motivation I_ Data Compression (10 min)',
        },
        {
          week: 8,
          index: 14.2,
          title: '动机二：数据可视化',
          duration: '6 min',
          filename: '14 - 2 - Motivation II_ Visualization (6 min)',
        },
        {
          week: 8,
          index: 14.3,
          title: '主成分分析问题',
          duration: '9 min',
          filename:
            '14 - 3 - Principal Component Analysis Problem Formulation (9 min)',
        },
        {
          week: 8,
          index: 14.4,
          title: '主成分分析算法',
          duration: '15 min',
          filename:
            '14 - 4 - Principal Component Analysis Algorithm (15 min)',
        },
        {
          week: 8,
          index: 14.5,
          title: '选择主成分的数量',
          duration: '11 min',
          filename:
            '14 - 5 - Choosing The Number Of Principal Components (11 min)',
        },
        {
          week: 8,
          index: 14.6,
          title: '重建的压缩表示',
          duration: '4 min',
          filename:
            '14 - 6 - Reconstruction from Compressed Representation (4 min)',
        },
        {
          week: 8,
          index: 14.7,
          title: '主成分分析法的应用建议',
          duration: '13 min',
          filename: '14 - 7 - Advice for Applying PCA (13 min)',
        },

        // 十五、异常检测(Anomaly Detection)
        {
          week: 9,
          index: 15.1,
          title: '问题的动机',
          duration: '8 min',
          filename: '15 - 1 - Problem Motivation (8 min)',
        },
        {
          week: 9,
          index: 15.2,
          title: '高斯分布',
          duration: '10 min',
          filename: '15 - 2 - Gaussian Distribution (10 min)',
        },
        {
          week: 9,
          index: 15.3,
          title: '算法',
          duration: '12 min',
          filename: '15 - 3 - Algorithm (12 min)',
        },
        {
          week: 9,
          index: 15.4,
          title: '开发和评价一个异常检测系统',
          duration: '13 min',
          filename:
            '15 - 4 - Developing and Evaluating an Anomaly Detection System (13 min)',
        },
        {
          week: 9,
          index: 15.5,
          title: '异常检测与监督学习对比',
          duration: '8 min',
          filename:
            '15 - 5 - Anomaly Detection vs. Supervised Learning (8 min)',
        },
        {
          week: 9,
          index: 15.6,
          title: '选择特征',
          duration: '12 min',
          filename: '15 - 6 - Choosing What Features to Use (12 min)',
        },
        {
          week: 9,
          index: 15.7,
          title: '多元高斯分布（选修）',
          duration: '14 min',
          filename:
            '15 - 7 - Multivariate Gaussian Distribution (Optional) (14 min)',
        },
        {
          week: 9,
          index: 15.8,
          title: '使用多元高斯分布进行异常检测（选修）',
          duration: '14 min',
          filename:
            '15 - 8 - Anomaly Detection using the Multivariate Gaussian Distribution (Optional) (14 min)',
        },

        // 十六、推荐系统(Recommender Systems)
        {
          week: 9,
          index: 16.1,
          title: '问题形式化',
          duration: '8 min',
          filename: '16 - 1 - Problem Formulation (8 min)',
        },
        {
          week: 9,
          index: 16.2,
          title: '基于内容的推荐系统',
          duration: '15 min',
          filename: '16 - 2 - Content Based Recommendations (15 min)',
        },
        {
          week: 9,
          index: 16.3,
          title: '协同过滤',
          duration: '10 min',
          filename: '16 - 3 - Collaborative Filtering (10 min)',
        },
        {
          week: 9,
          index: 16.4,
          title: '协同过滤算法',
          duration: '9 min',
          filename: '16 - 4 - Collaborative Filtering Algorithm (9 min)',
        },
        {
          week: 9,
          index: 16.5,
          title: '向量化：低秩矩阵分解',
          duration: '8 min',
          filename:
            '16 - 5 - Vectorization_ Low Rank Matrix Factorization (8 min)',
        },
        {
          week: 9,
          index: 16.6,
          title: '推行工作上的细节：均值归一化',
          duration: '9 min',
          filename:
            '16 - 6 - Implementational Detail_ Mean Normalization (9 min)',
        },

        // 十七、大规模机器学习(Large Scale Machine Learning)
        {
          week: 10,
          index: 17.1,
          title: '大型数据集的学习',
          duration: '6 min',
          filename: '17 - 1 - Learning With Large Datasets (6 min)',
        },
        {
          week: 10,
          index: 17.2,
          title: '随机梯度下降法',
          duration: '13 min',
          filename: '17 - 2 - Stochastic Gradient Descent (13 min)',
        },
        {
          week: 10,
          index: 17.3,
          title: '小批量梯度下降',
          duration: '6 min',
          filename: '17 - 3 - Mini-Batch Gradient Descent (6 min)',
        },
        {
          week: 10,
          index: 17.4,
          title: '随机梯度下降收敛',
          duration: '12 min',
          filename:
            '17 - 4 - Stochastic Gradient Descent Convergence (12 min)',
        },
        {
          week: 10,
          index: 17.5,
          title: '在线学习',
          duration: '13 min',
          filename: '17 - 5 - Online Learning (13 min)',
        },
        {
          week: 10,
          index: 17.6,
          title: '映射化简和数据并行',
          duration: '14 min',
          filename: '17 - 6 - Map Reduce and Data Parallelism (14 min)',
        },

        // 十八、应用实例：图片文字识别(Application Example: Photo OCR)
        {
          week: 10,
          index: 18.1,
          title: '问题描述和流程图',
          duration: '7 min',
          filename: '18 - 1 - Problem Description and Pipeline (7 min)',
        },
        {
          week: 10,
          index: 18.2,
          title: '滑动窗口',
          duration: '15 min',
          filename: '18 - 2 - Sliding Windows (15 min)',
        },
        {
          week: 10,
          index: 18.3,
          title: '获取大量数据和人工数据',
          duration: '16 min',
          filename:
            '18 - 3 - Getting Lots of Data and Artificial Data (16 min)',
        },
        {
          week: 10,
          index: 18.4,
          title: '上限分析：哪部分管道的接下去做',
          duration: '14 min',
          filename:
            '18 - 4 - Ceiling Analysis_ What Part of the Pipeline to Work on Next (14 min)',
        },

        // 十九、总结(Conclusion)
        {
          week: 10,
          index: 19.1,
          title: '总结和致谢',
          duration: '5 min',
          filename: '19 - 1 - Summary and Thank You (5 min)',
        },
      ]

      return videos
    } catch (error) {
      console.error('获取视频列表失败:', error)
      return []
    }
  }

  // 设置搜索功能
  function setupSearch() {
    try {
      console.log('设置搜索功能')
      const searchInput = document.getElementById('search-input')

      if (!searchInput) {
        console.error('未找到搜索输入框元素')
        return
      }

      const playlistItems = document.querySelectorAll('.playlist-item')
      const sectionItems = document.querySelectorAll('.course-section')

      if (playlistItems.length === 0) {
        console.warn('没有找到视频列表项')
      }

      searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase().trim()
        console.log('搜索关键词:', searchTerm)

        // 隐藏所有章节标题，只显示相关的
        sectionItems.forEach((section) => {
          section.style.display = 'none'
        })

        // 跟踪当前可见的章节
        let visibleSections = new Set()

        // 过滤视频列表
        playlistItems.forEach((item) => {
          const titleElement = item.querySelector('.playlist-item-title')
          if (!titleElement) {
            console.warn('列表项中未找到标题元素')
            return
          }

          const title = titleElement.textContent.toLowerCase()
          const match = searchTerm === '' || title.includes(searchTerm)

          item.style.display = match ? 'flex' : 'none'

          // 如果匹配，找到其所属章节并添加到可见集合
          if (match) {
            let current = item.previousElementSibling
            while (current) {
              if (current.classList.contains('course-section')) {
                visibleSections.add(current)
                break
              }
              current = current.previousElementSibling
            }
          }
        })

        // 显示所有可见章节
        visibleSections.forEach((section) => {
          section.style.display = 'block'
        })

        // 如果搜索框为空，显示所有章节
        if (searchTerm === '') {
          sectionItems.forEach((section) => {
            section.style.display = 'block'
          })
        }
      })

      console.log('搜索功能设置完成')
    } catch (error) {
      console.error('设置搜索功能时出错:', error)
    }
  }

  // 初始化视频播放器
  function initVideoPlayer(videoPath, title, subtitle) {
    console.log('初始化视频播放器:', videoPath)
    
    const videoPlayer = document.getElementById('player')
    const videoTitle = document.getElementById('video-title')
    const videoDescription = document.getElementById('video-description')
    const videoError = document.getElementById('video-error')
    
    // 显示加载状态
    showLoading(true)
    videoError.style.display = 'none'
    
    // 设置视频标题和描述
    videoTitle.textContent = title || '正在播放视频'
    videoDescription.textContent = subtitle || ''
    
    // 构建完整视频路径和备用路径
    let primaryPath = '';
    let fallbackPaths = [];
    
    if (videoPath.indexOf('://') === -1 && !videoPath.startsWith('/')) {
      // 主路径 - 标准 MP4 路径
      primaryPath = `/machinelearning-video/mp4/${videoPath}`;
      if (!primaryPath.endsWith('.mp4')) {
        primaryPath += '.mp4';
      }
      
      // 备用路径列表
      fallbackPaths = [
        // 静态目录下的 MP4
        `/static/machinelearning-video/mp4/${videoPath}${!videoPath.endsWith('.mp4') ? '.mp4' : ''}`,
        // 简化结构的 MP4
        `/mp4/${videoPath}${!videoPath.endsWith('.mp4') ? '.mp4' : ''}`,
        // 网络视频示例（仅用于演示）
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      ];
    } else {
      // 如果已经是完整路径，直接使用
      primaryPath = videoPath;
    }
    
    // 创建视频源元素
    const sourceMP4 = document.createElement('source');
    sourceMP4.src = primaryPath;
    sourceMP4.type = 'video/mp4';
    
    // 清除现有的源和轨道
    while (videoPlayer.firstChild) {
      videoPlayer.removeChild(videoPlayer.firstChild);
    }
    
    // 添加主视频源
    videoPlayer.appendChild(sourceMP4);
    
    // 添加错误显示备用文本
    const fallbackText = document.createElement('p');
    fallbackText.textContent = '您的浏览器不支持HTML5视频。请升级浏览器。';
    videoPlayer.appendChild(fallbackText);
    
    // 加载字幕
    const basePath = primaryPath.replace('.mp4', '');
    const vttPath = basePath.replace('/mp4/', '/vvt/') + '.vtt';
    
    // 尝试添加字幕
    const possibleSubtitlePaths = [
      vttPath,
      basePath.replace('/machinelearning-video/mp4/', '/machinelearning-video/vvt/') + '.vtt',
      `/machinelearning-video/vvt/${primaryPath.split('/').pop().replace('.mp4', '')}.vtt`,
      primaryPath.replace('.mp4', '.vtt').replace('/mp4/', '/vvt/'),
      `/static/machinelearning-video/vvt/${primaryPath.split('/').pop().replace('.mp4', '')}.vtt`
    ];
    
    console.log('尝试的字幕路径:', possibleSubtitlePaths);
    
    // 逐个尝试字幕路径
    function tryNextSubtitle(index) {
      if (index >= possibleSubtitlePaths.length) {
        console.warn('无法找到匹配的字幕文件');
        return;
      }
      
      const currentSubPath = possibleSubtitlePaths[index];
      console.log(`尝试字幕路径 (${index + 1}/${possibleSubtitlePaths.length}): ${currentSubPath}`);
      
      fetch(currentSubPath, { method: 'HEAD' })
        .then(response => {
          if (response.ok) {
            console.log('找到字幕文件:', currentSubPath);
            const track = document.createElement('track');
            track.kind = 'subtitles';
            track.label = '中文';
            track.srclang = 'zh';
            track.src = currentSubPath;
            track.default = true;
            videoPlayer.appendChild(track);
            console.log('字幕已添加:', currentSubPath);
          } else {
            console.warn('字幕文件不存在:', currentSubPath);
            tryNextSubtitle(index + 1);
          }
        })
        .catch(error => {
          console.warn('检查字幕文件时出错:', error);
          tryNextSubtitle(index + 1);
        });
    }
    
    // 开始尝试第一个字幕路径
    tryNextSubtitle(0);
    
    // 加载视频
    videoPlayer.load();
    
    // 当前尝试的路径索引
    let currentPathIndex = 0;
    
    // 尝试加载备用视频源
    function tryNextVideoSource() {
      if (currentPathIndex >= fallbackPaths.length) {
        console.error('所有视频源都无法播放');
        showLoading(false);
        videoError.style.display = 'block';
        videoError.innerHTML = `
          <strong>视频加载失败</strong>
          <p>所有可能的视频源都无法播放。</p>
          <p>主要路径: ${primaryPath}</p>
          <p>可能的原因：</p>
          <ul>
            <li>文件不存在或格式不支持</li>
            <li>浏览器安全限制阻止了本地文件访问</li>
            <li>视频编码不被当前浏览器支持</li>
          </ul>
          <p>建议：</p>
          <ul>
            <li>确保视频文件已上传到正确位置</li>
            <li>使用 Web 服务器提供视频（而非直接访问本地文件）</li>
            <li>转换视频为广泛支持的 H.264 MP4 格式</li>
          </ul>
        `;
        return;
      }
      
      const nextPath = fallbackPaths[currentPathIndex];
      console.log(`尝试备用视频源 (${currentPathIndex + 1}/${fallbackPaths.length}): ${nextPath}`);
      
      // 更新视频源
      videoPlayer.src = nextPath;
      videoPlayer.load();
      currentPathIndex++;
    }
    
    // 监听视频加载事件
    videoPlayer.addEventListener('loadeddata', () => {
      console.log('视频加载完成');
      showLoading(false);
      window.playerState.isLoading = false;
      window.playerState.hasError = false;
      window.playerState.currentVideo = primaryPath;
    }, { once: true });
    
    // 监听错误事件
    videoPlayer.addEventListener('error', (e) => {
      console.error('视频加载失败:', videoPlayer.error);
      
      // 尝试下一个备用源
      tryNextVideoSource();
      
      if (currentPathIndex >= fallbackPaths.length) {
        showLoading(false);
        videoError.style.display = 'block';
        videoError.innerHTML = `
          <strong>视频加载失败</strong>
          <p>错误: ${videoPlayer.error ? videoPlayer.error.message : '未知错误'}</p>
          <p>文件路径: ${primaryPath}</p>
          <p>请确保视频文件位于正确的目录下<br>如果您是本地运行，请注意浏览器可能限制本地文件访问。</p>
          <p>尝试使用 Web 服务器访问（如 npm start）而不是直接打开 HTML 文件。</p>
        `;
        window.playerState.isLoading = false;
        window.playerState.hasError = true;
      }
    });
  }

  // 渲染视频列表
  async function renderVideoList() {
    const playlistContainer = document.getElementById('playlist-container')

    try {
      playlistContainer.innerHTML = '<div class="loader"></div>' // 显示加载中

      const videos = await getVideoList()

      if (!videos || videos.length === 0) {
        playlistContainer.innerHTML = `
          <div style="padding: 20px; color: #f44336; text-align: center;">
            <div style="font-size: 18px; margin-bottom: 10px;">无法加载视频列表</div>
            <div>请检查网络连接或视频文件是否存在</div>
          </div>
        `
        return
      }

      const totalVideosElement = document.querySelector('.total-videos')
      totalVideosElement.textContent = `共${videos.length}个视频`

      playlistContainer.innerHTML = '' // 清空加载动画

      let currentWeek = 0
      let currentChapter = 0

      // 按课程周次和章节排序
      videos.sort((a, b) => {
        if (a.week !== b.week) return a.week - b.week
        const aChapter = Math.floor(a.index)
        const bChapter = Math.floor(b.index)
        if (aChapter !== bChapter) return aChapter - bChapter
        return a.index - b.index
      })

      // 为视频文件创建映射到新章节结构
      function mapVideoToStructure(video) {
        const chapterIndex = Math.floor(video.index)
        // 找到对应的章节标题
        const chapterInfo = videoStructure.find(
          (item) =>
            item.week === video.week &&
            item.title &&
            item.title.startsWith(
              `${chapterIndex < 10 ? '' : ''}${chapterIndex}`
            )
        )
        // 找到对应的小节
        const sectionInfo = videoStructure.find(
          (item) => item.section === video.index
        )

        return {
          chapter: chapterInfo ? chapterInfo.title : `第${chapterIndex}章`,
          section: sectionInfo ? sectionInfo.title : `${video.title}`,
          week: video.week,
        }
      }

      videos.forEach((video, i) => {
        const videoStructureInfo = mapVideoToStructure(video)
        const chapterIndex = Math.floor(video.index)

        // 如果是新章节，添加章节标题
        if (
          chapterIndex !== currentChapter ||
          video.week !== currentWeek
        ) {
          currentChapter = chapterIndex
          currentWeek = video.week

          const sectionElement = document.createElement('div')
          sectionElement.className = 'course-section'
          sectionElement.textContent = videoStructureInfo.chapter
          playlistContainer.appendChild(sectionElement)
        }

        // 创建视频项
        const videoElement = document.createElement('div')
        videoElement.className = 'playlist-item'
        videoElement.dataset.index = i
        videoElement.dataset.filename = `${video.filename}`

        videoElement.innerHTML = `
          <div class="playlist-item-number">${video.index}</div>
          <div class="playlist-item-content">
            <div class="playlist-item-title">${videoStructureInfo.section}</div>
            <div class="playlist-item-duration">${video.duration}</div>
          </div>
        `

        // 点击视频项时播放视频
        videoElement.addEventListener('click', () => {
          if (window.playerState && window.playerState.isLoading) {
            console.log('视频加载中，请稍候...')
            return
          }

          console.log('点击播放视频:', video.filename)
          // 更新活动项
          document.querySelectorAll('.playlist-item').forEach((item) => {
            item.classList.remove('active')
          })
          videoElement.classList.add('active')

          // 隐藏任何现有的错误信息
          document.getElementById('video-error').style.display = 'none'

          // 初始化并加载视频
          initVideoPlayer(
            video.filename,
            videoStructureInfo.section,
            `${videoStructureInfo.chapter} - ${video.duration}`
          )
        })

        playlistContainer.appendChild(videoElement)
      })

      // 加载第一个视频（不自动播放）
      if (videos.length > 0) {
        const firstVideo = videos[0]
        const firstVideoInfo = mapVideoToStructure(firstVideo)

        setTimeout(() => {
          const firstItem = document.querySelector('.playlist-item')
          if (firstItem) {
            firstItem.classList.add('active')
            
            // 设置标题和描述
            document.getElementById('video-title').textContent = firstVideoInfo.section
            document.getElementById('video-description').textContent = 
              `${firstVideoInfo.chapter} - ${firstVideo.duration}`
            
            // 初始化第一个视频（只加载不播放）
            initVideoPlayer(
              firstVideo.filename,
              firstVideoInfo.section,
              `${firstVideoInfo.chapter} - ${firstVideo.duration}`
            )
          }
        }, 500)
      }

      // 设置搜索功能
      setupSearch()
    } catch (error) {
      console.error('渲染视频列表出错:', error)
      playlistContainer.innerHTML = `
        <div style="padding: 20px; color: #f44336; text-align: center;">
          <div style="font-size: 18px; margin-bottom: 10px;">加载视频列表时出错</div>
          <div>${error.message || '未知错误'}</div>
        </div>
      `
    }
  }

  // 初始化页面时检查URL参数
  function checkUrlParams() {
    const urlParams = new URLSearchParams(window.location.search)
    const videoParam = urlParams.get('video')

    if (videoParam) {
      // 直接从URL加载视频
      console.log('从URL参数加载视频:', videoParam)
      initVideoPlayer(videoParam, '从URL加载的视频', '')
    }
  }

  // 初始化页面
  renderVideoList()
  checkUrlParams()

  // 响应式调整
  window.addEventListener('resize', () => {
    if (player && typeof player.resize === 'function') {
      player.resize();
    }
  });

  // 添加字幕样式自定义
  const style = document.createElement('style');
  style.textContent = `
    /* 自定义字幕样式 */
    .plyr__captions {
      background: transparent !important;
      box-shadow: none !important;
    }
    
    .plyr__caption {
      background: rgba(0, 0, 0, 0.8) !important;
      display: inline-block !important;
      padding: 2px 6px !important;
      border-radius: 4px !important;
      max-width: 90% !important;
      margin: 0 auto !important;
    }
  `;
  document.head.appendChild(style);
})
