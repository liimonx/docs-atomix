/** Shared JSX for dynamically generated Open Graph / Twitter images. */

export function OgImageContent({
  title = 'Atomix',
  subtitle = 'Design System Documentation',
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '80px',
        background: 'linear-gradient(135deg, #0066cc 0%, #003d7a 50%, #001a33 100%)',
        color: 'white',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 72,
          height: 72,
          borderRadius: 16,
          background: 'rgba(255,255,255,0.15)',
          fontSize: 40,
          fontWeight: 700,
          marginBottom: 32,
        }}
      >
        A
      </div>
      <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
        {title}
      </div>
      <div style={{ fontSize: 32, fontWeight: 500, opacity: 0.85, maxWidth: 900 }}>
        {subtitle}
      </div>
    </div>
  );
}
