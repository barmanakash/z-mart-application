import React from 'react';
import { Box, Typography, FormGroup, FormControlLabel, Checkbox, Divider, Slider } from '@mui/material';

const BRANDS = ['Tommy Hilfiger', 'Calvin Klein', 'U.S. Polo Assn.', 'Arrow', 'Flying Machine'];
const FITS = ['Slim Fit', 'Regular Fit', 'Oversized Fit', 'Custom Fit'];

const FilterSidebar = ({ filters, setFilters }) => {
  
  const handleCheckboxGroup = (field, value) => {
    const currentValues = filters[field] ? filters[field].split(',') : [];
    const nextValues = currentValues.includes(value)
      ? currentValues.filter(item => item !== value)
      : [...currentValues, value];
      
    setFilters({ ...filters, [field]: nextValues.join(',') });
  };

  return (
    <Box sx={{ width: 260, p: 2, borderRight: '1px solid #e0e0e0', height: '100%' }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Filters</Typography>
      
      {/* Price Range Slider */}
      <Typography variant="subtitle2" sx={{ fontWeight: '600', mb: 1 }}>Price Range</Typography>
      <Slider
        value={[filters.minPrice || 0, filters.maxPrice || 10000]}
        onChange={(e, newVal) => setFilters({ ...filters, minPrice: newVal[0], maxPrice: newVal[1] })}
        valueLabelDisplay="auto"
        min={0}
        max={10000}
        sx={{ color: '#1a1a1a', mb: 3 }}
      />
      <Divider sx={{ my: 2 }} />

      {/* Brand Group Filter */}
      <Typography variant="subtitle2" sx={{ fontWeight: '600', mb: 1 }}>Brands</Typography>
      <FormGroup sx={{ mb: 2 }}>
        {BRANDS.map(brand => (
          <FormControlLabel
            key={brand}
            control={
              <Checkbox 
                size="small" 
                checked={filters.brand?.split(',').includes(brand) || false}
                onChange={() => handleCheckboxGroup('brand', brand)}
              />
            }
            label={<Typography variant="body2">{brand}</Typography>}
          />
        ))}
      </FormGroup>
      <Divider sx={{ my: 2 }} />

      {/* Structural Apparel Fits */}
      <Typography variant="subtitle2" sx={{ fontWeight: '600', mb: 1 }}>Fit Type</Typography>
      <FormGroup>
        {FITS.map(fit => (
          <FormControlLabel
            key={fit}
            control={
              <Checkbox 
                size="small" 
                checked={filters.fit?.split(',').includes(fit) || false}
                onChange={() => handleCheckboxGroup('fit', fit)}
              />
            }
            label={<Typography variant="body2">{fit}</Typography>}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default FilterSidebar;