const rnd2 = (n: number) => Math.round(n * 100) / 100;
// Material Design-type shadows
// Computed from https://gist.github.com/serglo/f9f0be9a66fd6755a0bda85f9c64e85f
const mdDepthShadow = (dp: number) =>
  !dp
    ? 'none'
    : `0 ${dp}px ${rnd2((19 / 12) * dp)}px ${rnd2(dp / 8)}px rgba(0, 0, 0, 0.14),
      0 ${rnd2((3 / 8) * dp)}px ${rnd2((23 / 12) * dp)}px ${rnd2(dp / 3)}px rgba(0, 0, 0, 0.12),
      0 ${rnd2((11 / 24) * dp)}px ${rnd2((15 / 24) * dp)}px -${rnd2(
        (7 / 24) * dp,
      )}px rgba(0, 0, 0, 0.2)`;

const shadows = {
  xs: mdDepthShadow(2),
  sm: mdDepthShadow(4),
  base: mdDepthShadow(8),
  md: mdDepthShadow(8),
  lg: mdDepthShadow(12),
  xl: mdDepthShadow(16),
  '2xl': mdDepthShadow(24),
  outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
  inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
  none: 'none',
  'dark-lg':
    'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 1rem 40px',
};

export default shadows;
