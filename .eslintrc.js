module.exports = {
    root: true,
    // 这些环境并不是互斥的，所以你可以同时定义多个
    env: {
        node: true,
        browser: true,
        jquery: true,
        commonjs: true,
        es6: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 使用4空格缩进
        'indent': [ 'error', 4 ],
        'vue/script-indent': [ 'error', 4 ],
        // 行尾必须使用分号结束
        'semi': [ 'error', 'always' ],
        // 分号前后的空格规则
        // @off 不限制
        'semi-spacing': 0,
        // 禁止行首出现分号
        'semi-style': [ 2, 'last' ],
        // imports 必须排好序
        // @off 没必要限制
        'sort-imports': 0,
        // 单行注释必须写在前一行还是行尾
        // @off 不限制
        'line-comment-position': [ 'off' ],
        // 可以自定义行后添加注释  保存时候不会更改注释的位置 显示bannerList: '',              // 获取banner列表  关闭规则 显示为这样bannerList: '',// 获取banner列表
        'no-multi-spaces': [ 'error', { ignoreEOLComments: true } ],
        // 注释前后是否要空一行
        // @off 不限制
        'lines-around-comment': 0,
        // 必须使用 jsdoc 风格的注释
        // @off 暂不考虑开启
        'require-jsdoc': 0,
        // 允许使用 三目运算
        'no-unused-expressions': [ 'error', { 'allowShortCircuit': true, 'allowTernary': true } ],
        'no-useless-escape': 0,
        // 允许数组中包含对象 俩边保留空格subjectName: [ { validator: text, trigger: 'blur' } ],
        'array-bracket-spacing': [ 'error', 'always' ],
        // 必须采用全等
        'eqeqeq': [ 'error', 'always', { 'null': 'ignore' } ],
        // 禁止而外的分号
        'no-extra-semi': 2,
        // 禁止使用 label
        // @off 禁止了将很难 break 多重循环和多重 switch
        'no-labels': 0,
        // 禁止在return中赋值
        'no-return-assign': [ 'off' ],
        // 禁止使用 tabs
        // @off 不限制
        'no-tabs': 0,
        // 禁止重复声明
        'no-redeclare': 2,
        'no-unused-vars': [
            'error',
            { vars: 'all', args: 'none', ignoreRestSiblings: false },
        ],
        // jsx 语法中，属性的值必须使用双引号
        'jsx-quotes': [2, 'prefer-double'],
        // 字符串必须使用双引号""
        'quotes': [2, 'double', {
            'avoidEscape': true, // 允许包含单引号的字符串使用双引号
            'allowTemplateLiterals': true, // 允许使用模板字符串
        }],
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
