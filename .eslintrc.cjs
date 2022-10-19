module.exports = {
    plugins: [
        'react',
        'react-hooks',
        
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        ],
        rules: {
            "react/react-in-jsx-scope": "off",
            // Note: you must disable the base rule as it can report incorrect errors
            "react-hooks/exhaustive-deps": "off",
            "@typescript-eslint/no-restricted-imports": [
                "warn",
                {
                "name": "react-redux",
                "importNames": ["useSelector", "useDispatch"],
                "message": "Use typed hooks `useAppDispatch` and `useAppSelector` instead."
                }
            ],
            "no-debugger": "off"
        }
}