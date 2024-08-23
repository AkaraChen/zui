export type ZComponent = 'button' | 'hover-card' | 'card' | 'link' | 'menu'
export type ZVariant = 'primary' | 'secondary' | 'normal'
export type ZCompoenntPart = 'trigger' | 'content' | 'icon' | 'item'
export type ZSize = 'small' | 'medium' | 'large'

export type ZClassNameParts =
    | ZComponent
    | ZVariant
    | ZCompoenntPart
    | ZSize
    | (string & {})

export function zc(...parts: ZClassNameParts[]) {
    return 'zui_' + parts.join('_')
}
