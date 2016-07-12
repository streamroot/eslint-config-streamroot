module.exports = {
    "rules": {
        "arrow-spacing": "error",
        "block-scoped-var": "error",
        "block-spacing": "error",
        "computed-property-spacing": [
            "error",
            "never"
        ],
        "curly": [
            "error",
            "all"
        ],
        "dot-notation": [
            "error"
        ],
        "eqeqeq": [
            "error",
            "smart"
        ],
        "guard-for-in": "error",
        "indent": [1, 4, {"SwitchCase": 1}],
        "keyword-spacing": "error",
        "new-cap": "error",
        "new-parens": "error",
        "no-alert": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": [
            "error",
            "except-parens"
        ],
        "no-debugger": "error",
        "no-empty": "error",
        "no-empty-pattern": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-implicit-coercion": [
            "error",
            {
                "allow": [
                    "!!"
                ]
            }
        ],
        "no-implied-eval": "error",
        "no-irregular-whitespace": "error",
        "no-iterator": "error",
        "no-loop-func": "error",
        "no-multi-str": "error",
        "no-param-reassign": "error",
        "no-proto": "error",
        "no-script-url": "error",
        "no-self-assign": "error",
        "no-sequences": "error",
        "no-shadow": "error",
        "no-spaced-func": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef": "error",
        "no-unused-vars": [
            "error",
            {
                "args": "all"
            }
        ],
        "no-useless-call": "error",
        "no-with": "error",
        "radix": "error",
        "semi": [
            "error",
            "always"
        ],
        "space-before-blocks": [
            "error",
            {
                "classes": "always",
                "functions": "always",
                "keywords": "always"
            }
        ],
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": [
            "error",
            "always"
        ],
        "valid-typeof": "error",
        "wrap-iife": [
            "error",
            "inside"
        ]
        // the following lines are nice to have rules that we would like to implement
        // they are sorted by priority order (the top ones are the most important)
        // "prefer-template": "error",
        // "object-shorthand": "error",
        // "strict": "warn",
        // "prefer-arrow-callback": ["warn", { "allowNamedFunctions": true }],
        // "camelcase": "warn",
        // "no-empty-function": "error",
        // "no-extra-parens": "warn",
        // "default-case": "error",
        // "no-case-declarations": "error",
        // "prefer-spread": "error",
        // "prefer-rest-params": "error",
    }
};
