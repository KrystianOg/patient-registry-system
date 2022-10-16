// react basics - https://reactjs.org/docs/static-type-checking.html#typescript
import * as localHooks from './src/hooks'

declare module 'local-hooks' {
    export = localHooks
}
