import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, FormControl, InputLabel, Select, MenuItem, CircularProgress } from '@mui/material';
import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';

const ProductListing = () => {
  // Central filter parameters state tracking matching backend expectations
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 10000,
    brand: '',
    fit: '',
    sort: 'newest'
  });

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Re-fetch products every time a user alters the sidebar selections or sort criteria
  useEffect(() => {
    const fetchCatalogData = async () => {
      setLoading(true);
      try {
        // Construct dynamic query string matching backend controllers setup
        const queryParams = new URLSearchParams();
        if (filters.minPrice) queryParams.append('minPrice', filters.minPrice);
        if (filters.maxPrice) queryParams.append('maxPrice', filters.maxPrice);
        if (filters.brand) queryParams.append('brand', filters.brand);
        if (filters.fit) queryParams.append('fit', filters.fit);
        if (filters.sort) queryParams.append('sort', filters.sort);

        const response = await fetch(`/api/products?${queryParams.toString()}`);
        const json = await response.json();

        if (json.success) {
          setProducts(json.data);
        } else {
          setError(json.message || 'Failed to fetch catalog entries.');
        }
      } catch (err) {
        setError('Network architecture error. Could not sync with catalog API.');
      } finally {
        setLoading(false);
      }
    };

    fetchCatalogData();
  }, [filters]);

  return (
    <Box sx={{ display: 'flex', minHeight: '80vh', mt: 4 }}>
      {/* Structural Filtering Component Sidebar */}
      <FilterSidebar filters={filters} setFilters={setFilters} />

      {/* Main Catalog View Space */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1a1a1a' }}>
              Premium Apparel Collection
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Showing {products.length} fashion variants matching your parameters
            </Typography>
          </Box>

          {/* Quick Sorting Pipeline Controls */}
          <FormControl size="small" sx={{ minWidth: 160, ml: 'auto' }}>
            <InputLabel id="catalog-sort-label">Sort By</InputLabel>
            <Select
              labelId="catalog-sort-label"
              value={filters.sort}
              label="Sort By"
              onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
            >
              <MenuItem value="newest">New Arrivals</MenuItem>
              <MenuItem value="price_low">Price: Low to High</MenuItem>
              <MenuItem value="price_high">Price: High to Low</MenuItem>
              <MenuItem value="discount">Better Discounts</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Dynamic Display Grid Matrix states */}
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '40vh' }}>
            <CircularProgress color="inherit" />
          </Box>
        ) : error ? (
          <Typography color="error" variant="body1" sx={{ textAlign: 'center', mt: 4 }}>
            {error}
          </Typography>
        ) : products.length === 0 ? (
          <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 8 }}>
            No products match the selected criteria. Try resetting your active filters.
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default ProductListing;