// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root : true,
    parserOptions : {
        parser : 'babel-eslint'
    },
    env : {
        browser : true
    },
    globals : {
        weex : true
    },
    extends : [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        // 'plugin:vue/essential',
        'plugin:vue/strongly-recommended',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        // 'standard'
    ],
    // required to lint *.vue files
    plugins : [
        'vue',
        'html', //插件，此插件用于识别文件中的js代码，没有MIME类型标识没有script标签也可以识别到，因此拿来识别.vue文件中的js代码
    ],
    // add your custom rules here
    rules : {
        'vue/no-parsing-error' : [ 2, {
            "x-invalid-end-tag" : false
        } ],
        // allow async-await
        'generator-star-spacing' : 'off',
        // allow debugger during development
        'no-debugger' : process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "semi" : [ 1, "always" ],//语句强制分号结尾
        "semi-spacing" : [ 0, { "before" : false, "after" : true } ],//分号前后空格
        "key-spacing": [0, { "beforeColon": true, "afterColon": true }],//对象字面量中冒号的前后空格
        "indent": [1, 4, {
        }],//缩进风格
        'vue/html-indent': [1, 4, {
            "attribute": 1,
            "closeBracket": 0,
            "ignores": []
        }],
        "linebreak-style": [0, "windows"],//换行风格
        "no-multi-spaces": 0,//不能用多余的空格
    }
}
