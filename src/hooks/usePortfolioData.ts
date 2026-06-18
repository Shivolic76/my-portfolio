import { useState, useEffect } from 'react';
import { portfolioData, type PortfolioData } from '../data/portfolioData';

export const usePortfolioData = () => {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setData(portfolioData);
        setError(null);
      } catch (err) {
        setError('Failed to load portfolio data');
        console.error('Error loading portfolio data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};
