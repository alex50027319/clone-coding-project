type Tone = 'blue' | 'red';

export type ValueIconVariant =
  | 'free'        // 유료과금 없음
  | 'instances'   // 인스턴스 개수제한 없음
  | 'members'     // 협업계정 제한 없음
  | 'ban'         // 상업적 사용 금지
  | 'account'     // 계정대여 금지
  | 'wrench';     // 인프라 무단조작 금지

const colorMap: Record<Tone, string> = {
  blue: '#3D90D4',
  red: '#EF4444',
};

const strokeProps = (tone: Tone) => ({
  stroke: colorMap[tone],
  strokeWidth: 2,
  fill: 'none',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

const ValueIcon = ({ variant, tone = 'blue' }: { variant: ValueIconVariant; tone?: Tone }) => {
  const stroke = strokeProps(tone);
  switch (variant) {
    case 'free':
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden>
          {/* 카드 형태 */}
          <rect x="3" y="4" width="18" height="14" rx="3" {...stroke} />
          {/* 눈 */}
          <circle cx="8" cy="11" r="0.9" fill={colorMap[tone]} />
          <circle cx="16" cy="11" r="0.9" fill={colorMap[tone]} />
          {/* 스마일 */}
          <path d="M9.5 14c.8.8 1.7 1.2 2.5 1.2s1.7-.4 2.5-1.2" {...stroke} />
          {/* 대각선 슬래시 */}
          <path d="M2.5 2.5L21.5 21.5" {...stroke} />
        </svg>
      );
    case 'instances':
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden>
          {/* 상단 슬롯 */}
          <rect x="3.5" y="5" width="17" height="7" rx="3.5" {...stroke} />
          <circle cx="7.2" cy="8.5" r="1.1" fill={colorMap[tone]} />
          <line x1="10" y1="8.5" x2="17.5" y2="8.5" stroke={colorMap[tone]} strokeWidth="2" strokeLinecap="round" />
          {/* 하단 슬롯 */}
          <rect x="3.5" y="12.5" width="17" height="7" rx="3.5" {...stroke} />
          <circle cx="7.2" cy="16" r="1.1" fill={colorMap[tone]} />
          <line x1="10" y1="16" x2="17.5" y2="16" stroke={colorMap[tone]} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'members':
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden>
          <circle cx="9" cy="8" r="3" {...stroke} />
          <path d="M3 20c0-3.314 2.686-6 6-6" {...stroke} />
          <circle cx="17" cy="10" r="2.5" {...stroke} />
          <path d="M21 20c0-2.761-2.239-5-5-5" {...stroke} />
        </svg>
      );
    case 'ban':
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="9" {...stroke} />
          <path d="M7 7l10 10" {...stroke} />
        </svg>
      );
    case 'account':
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="8" r="3" {...stroke} />
          <path d="M4 20c1.5-3 4.5-5 8-5s6.5 2 8 5" {...stroke} />
          <path d="M7 7l10 10" {...stroke} />
        </svg>
      );
    case 'wrench':
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden>
          <path d="M14 7l3 3-7 7H7v-3l7-7z" {...stroke} />
          <circle cx="17" cy="7" r="2" {...stroke} />
        </svg>
      );
    default:
      return null;
  }
};

export default ValueIcon;


