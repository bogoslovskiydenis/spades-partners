export const usePageData = () => {
  const pageData = useState('pageData', () => null);
  const loading = useState('pageLoading', () => false);
  const error = useState('pageError', () => null);

  const fetchPageData = async () => {
    if (pageData.value) return pageData.value;

    loading.value = true;
    error.value = null;

    try {
      const origin = process.client ? window.location.origin : 'https://admin.spadespartners.com';
      const url = new URL('/wp-content/themes/api/app/pages/', origin).toString();
      const res = await $fetch.raw(url, { retry: 0 });
      const data = res?._data;

      pageData.value = data && typeof data === 'object' && 'body' in data ? data.body : data;
      return pageData.value;
    } catch (err) {
      error.value = err;
      console.error('Error fetching page data:', err);
      return null;
    } finally {
      loading.value = false;
    }
  };

  return {
    pageData,
    loading,
    error,
    fetchPageData,
  };
};
