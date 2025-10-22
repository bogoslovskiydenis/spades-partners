export const usePageData = () => {
  const pageData = useState('pageData', () => null);
  const loading = useState('pageLoading', () => false);
  const error = useState('pageError', () => null);

  const fetchPageData = async () => {
    if (pageData.value) return pageData.value;

    loading.value = true;
    error.value = null;

    try {
      const response = await $fetch('https://spadespartners.fun/wp-content/themes/api/app/pages/');
      pageData.value = response.body;
      return response.body;
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
