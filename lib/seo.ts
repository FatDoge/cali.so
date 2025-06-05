export const seo = {
  title: 'fatdoge | 开发者、细节控',
  description:
    '我叫 fatdoge，一名开发者，细节控。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://fatdoge.cn'
      : 'http://localhost:3000'
  ),
} as const
