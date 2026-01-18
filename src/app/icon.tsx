import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 24,
                    background: '#09090b', // Zinc-950
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                }}
            >
                {/* Outer Ring */}
                <div
                    style={{
                        position: 'absolute',
                        width: '26px',
                        height: '26px',
                        border: '2px solid #ef4444', // Red-500
                        borderRadius: '50%',
                        opacity: 0.9,
                    }}
                />

                {/* Inner Dot */}
                <div
                    style={{
                        position: 'absolute',
                        width: '10px',
                        height: '10px',
                        background: '#dc2626', // Red-600
                        borderRadius: '50%',
                        boxShadow: '0 0 8px rgba(220, 38, 38, 0.8)'
                    }}
                />

                {/* Crosshair Horizontal */}
                <div
                    style={{
                        position: 'absolute',
                        width: '32px',
                        height: '1px',
                        background: '#7f1d1d', // Red-900
                        opacity: 0.6
                    }}
                />

                {/* Crosshair Vertical */}
                <div
                    style={{
                        position: 'absolute',
                        width: '1px',
                        height: '32px',
                        background: '#7f1d1d', // Red-900
                        opacity: 0.6
                    }}
                />
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
