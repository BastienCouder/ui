import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from './configI18n';

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) {
    notFound();
  }
  try {
    const appMessages = await import(`../locales/${locale}.json`).then(
      (m) => m.default
    );
    return {
      messages: {
        ...appMessages,
      },
    };
  } catch (error) {
    console.error('Error in loading messages:', error);
    return { messages: {} };
  }
});