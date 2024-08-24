export type ZComponent =
    | 'button'
    | 'hover-card'
    | 'card'
    | 'link'
    | 'menu'
    | 'input'
    | 'statistic'
    | 'dialog'
    | 'tab'
    | 'kbd'
    | 'cmdk'
    | 'navigation'
    | 'title'
    | 'nav'
export type ZVariant = 'primary' | 'secondary' | 'normal'
export type ZCompoenntPart = 'trigger' | 'content' | 'icon' | 'item'
export type ZSize = 'small' | 'medium' | 'large'
export type ZState = 'active' | 'disabled' | 'loading'

export type ZClassNameParts =
    | ZComponent
    | ZVariant
    | ZCompoenntPart
    | ZSize
    | ZState
    | (string & {})

export function zc(...parts: ZClassNameParts[]): string {
    return 'zui_' + parts.join('_')
}
