import { ImageResponse } from 'next/og';
import { OgImageContent } from '@/utils/ogImageContent';
import { OG_IMAGE_ALT, OG_IMAGE_SIZE } from '@/utils/siteConfig';

export const alt = OG_IMAGE_ALT;
export const size = OG_IMAGE_SIZE;
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <OgImageContent />,
    { ...size },
  );
}
