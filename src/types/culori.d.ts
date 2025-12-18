declare module 'culori' {
  export interface RgbColor {
    mode: 'rgb';
    r: number;
    g: number;
    b: number;
    alpha?: number;
  }

  export interface HslColor {
    mode: 'hsl';
    h: number;
    s: number;
    l: number;
    alpha?: number;
  }

  export function parse(color: string): RgbColor | HslColor | null;
  export function formatHex(color: RgbColor | HslColor | any): string;
  export function rgb(color: RgbColor | HslColor | any): RgbColor | null;
  export function hsl(color: RgbColor | HslColor | any): HslColor | null;
}

